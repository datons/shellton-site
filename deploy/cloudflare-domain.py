"""Plan and reconcile Shellton's Cloudflare zone, tunnel, DNS, and ingress."""

from __future__ import annotations

import argparse
import json
import os
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent
CONFIG_PATH = ROOT / "domain.env"
VAULT_URL = "https://vault.datons.com"
CF_API = "https://api.cloudflare.com/client/v4"
UNPROVISIONED = "TO_BE_PROVISIONED"


def load_config(path: Path = CONFIG_PATH) -> dict[str, str]:
    config: dict[str, str] = {}
    for raw_line in path.read_text().splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#"):
            continue
        key, value = line.split("=", 1)
        config[key] = value
    return config


def desired_plan(config: dict[str, str]) -> dict[str, Any]:
    canonical_host = urllib.parse.urlparse(config["PUBLIC_APP_URL"]).hostname
    if canonical_host is None:
        raise ValueError("PUBLIC_APP_URL must contain a hostname")
    aliases = [host.strip() for host in config["PUBLIC_LEGACY_APP_HOSTS"].split(",") if host.strip()]
    tunnel_id = config["CLOUDFLARE_TUNNEL_ID"]
    cname_target = f"{tunnel_id}.cfargotunnel.com" if tunnel_id != UNPROVISIONED else "<new tunnel id>.cfargotunnel.com"
    return {
        "zone": canonical_host,
        "tunnel": {"name": config["CLOUDFLARE_TUNNEL_NAME"], "id": tunnel_id},
        "ingress": [{"hostname": host, "service": config["CLOUDFLARE_ORIGIN_URL"]} for host in [canonical_host, *aliases]],
        "dns": [{"type": "CNAME", "name": host, "content": cname_target, "proxied": True} for host in [canonical_host, *aliases]],
    }


def request_json(url: str, *, headers: dict[str, str] | None = None, method: str = "GET", data: dict[str, Any] | None = None) -> dict[str, Any]:
    body = json.dumps(data).encode() if data is not None else None
    request = urllib.request.Request(url, data=body, headers=headers or {}, method=method)
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.load(response)


def vault_data() -> dict[str, str]:
    token = request_json(f"{VAULT_URL}/v1/auth/approle/login", method="POST", data={"role_id": os.environ["VAULT_ROLE_ID"], "secret_id": os.environ["VAULT_SECRET_ID"]})["auth"]["client_token"]
    return request_json(f"{VAULT_URL}/v1/secret/data/infra/prod", headers={"X-Vault-Token": token})["data"]["data"]


def cloudflare_result(response: dict[str, Any]) -> Any:
    if not response.get("success"):
        raise RuntimeError(response.get("errors") or "Cloudflare API request failed")
    return response["result"]


def apply_plan(config: dict[str, str], plan: dict[str, Any]) -> None:
    if config["CLOUDFLARE_TUNNEL_ID"] == UNPROVISIONED:
        raise RuntimeError("Refusing to apply: provision the dedicated shellton-app tunnel and replace TO_BE_PROVISIONED first")
    secrets = vault_data()
    headers = {"Authorization": f"Bearer {secrets['CLOUDFLARE_API_TOKEN_ALT']}", "Content-Type": "application/json"}
    query = urllib.parse.urlencode({"name": plan["zone"], "status": "active"})
    zones = cloudflare_result(request_json(f"{CF_API}/zones?{query}", headers=headers))
    if len(zones) != 1:
        raise RuntimeError(f"Expected one active Cloudflare zone for {plan['zone']}; create or activate it before applying DNS")
    zone_id = zones[0]["id"]
    current_records: dict[str, list[dict[str, Any]]] = {}
    for desired in plan["dns"]:
        record_query = urllib.parse.urlencode({"type": "CNAME", "name": desired["name"]})
        records = cloudflare_result(request_json(f"{CF_API}/zones/{zone_id}/dns_records?{record_query}", headers=headers))
        if len(records) > 1:
            raise RuntimeError(f"Refusing to replace {len(records)} CNAME records for {desired['name']}")
        current_records[desired["name"]] = records
    timestamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S")
    backup_dir = ROOT / "backups"
    backup_dir.mkdir(exist_ok=True)
    backup_path = backup_dir / f"cloudflare-{timestamp}.json"
    backup_path.write_text(json.dumps({"zone": zones[0], "dns": current_records}, indent=2) + "\n")
    print(f"backup: {backup_path}")
    for desired in plan["dns"]:
        records = current_records[desired["name"]]
        if records:
            cloudflare_result(request_json(f"{CF_API}/zones/{zone_id}/dns_records/{records[0]['id']}", headers=headers, method="PUT", data=desired))
        else:
            cloudflare_result(request_json(f"{CF_API}/zones/{zone_id}/dns_records", headers=headers, method="POST", data=desired))
    print("applied: DNS matches deploy/domain.env; tunnel ingress remains managed by deploy/cloudflared/config.yml")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true", help="Apply DNS after the dedicated tunnel is provisioned")
    parser.add_argument("--config", default=str(CONFIG_PATH), help="Path to the domain configuration")
    args = parser.parse_args()
    config = load_config(Path(args.config))
    plan = desired_plan(config)
    print(json.dumps(plan, indent=2))
    if not args.apply:
        print("dry-run: no Cloudflare changes applied")
        return 0
    apply_plan(config, plan)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
