---
title: Support
permalink: /support/
description: How to get help with Shellton.
---

# Shellton Support

## Quick answers

### "My SSH session dies when I switch apps."
By default, Shellton uses Mosh when available. Mosh survives backgrounding natively over UDP — your session stays alive. If your server doesn't have `mosh-server` installed, Shellton falls back to SSH, and SSH sessions do disconnect when iOS suspends the app.

Install `mosh-server` on the remote host (`apt install mosh`, `brew install mosh`, or your platform's equivalent). Shellton will auto-detect it on the next connection. When Mosh is unavailable, Shellton parks SSH while backgrounded and reconnects on foreground; using tmux keeps the remote work alive across that reconnect.

### "How do I add my SSH key?"
Settings → Security → SSH Keys → + button.

- **Generate** — create a new Ed25519 key inside Shellton's Keychain entry.
- **Import** — paste an existing private key (OpenSSH or PEM format).

Keys are stored in the iOS Keychain. You can optionally require Face ID / Touch ID before every use.

### "How do I move my config between devices?"
Settings → Portability → Export to Clipboard copies a complete YAML config (connections + accessory bar) to the clipboard. On another device, open Settings → Portability → Import from YAML and either paste the clipboard, or pick a `.yaml` file from Files.app (iCloud Drive, Dropbox, Working Copy — anywhere you keep documents). The same YAML schema is documented in the repo at `docs/yaml-schema.md` so you can also author or edit it by hand on a Mac.

### "Can I use my own terminal theme?"
Yes. Settings → Appearance → Theme → + to create a new one. Or import a theme from the Ghostty theme gallery (paste the config and Shellton will parse it).

### "Does Shellton send any data anywhere?"
Shellton sends anonymous product-interaction analytics through TelemetryDeck unless you disable them under Settings → Diagnostics & Privacy. Events are not linked to identity and exclude hostnames, addresses, usernames, commands, terminal text, credentials, voice content, and raw errors. Shellton does not use advertising or cross-app tracking. It also connects to configured SSH/Mosh hosts and, when you use the corresponding options, Apple iCloud, speech-model providers, APNs, and an HTTPS Live Activity webhook you configure. See the [privacy policy](/privacy/) for the exact fields and purposes.

---

## Contact

For anything not covered above:

- **Email:** [jesus.lopez@datons.com](mailto:jesus.lopez@datons.com)
- **Issue tracker:** [https://gitlab.com/datons.com/shellton/-/issues](https://gitlab.com/datons.com/shellton/-/issues)

When reporting a bug, please include:
- Shellton version (Settings → About)
- iOS version
- A short description of what happened and what you expected
- Whether the session was SSH or Mosh (if relevant)

---

<small>[Back to home](/)&nbsp;&middot;&nbsp;[Privacy](/privacy/)</small>
