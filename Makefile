.DEFAULT_GOAL := help

PROJECT := shellton-site
ENV_FILE := $(if $(wildcard docker/env/.env),docker/env/.env,docker/env/.env.example)
COMPOSE_FILES := --env-file $(ENV_FILE) -f docker/compose.yml
DC := COMPOSE_PROJECT_NAME=$(PROJECT) docker compose $(COMPOSE_FILES)

help: ## Show this help message
	@echo "Usage: make <target>"
	@echo ""
	@awk -F':.*## ' '/^[a-z][a-z0-9_-]+:.*## / {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

up: ## Start the local web container
	$(DC) up -d --build web

down: ## Stop containers
	$(DC) down

build: ## Build the web image
	$(DC) build web

logs: ## Tail web logs
	$(DC) logs -f --tail=100 web

status: ## Show running containers
	$(DC) ps

shell-web: ## Open a shell in the web container
	$(DC) exec web /bin/sh

health: ## Check the loopback-only local web port
	@WEB_PORT=$$(awk -F= '/^SHELLTON_WEB_PORT=/{print $$2}' docker/env/.env 2>/dev/null); \
	WEB_PORT=$${WEB_PORT:-3098}; \
	curl -sf "http://127.0.0.1:$$WEB_PORT" >/dev/null && echo "WEB OK ($$WEB_PORT)" || (echo "WEB FAIL ($$WEB_PORT)"; exit 1)

domain-plan: ## Print the offline Cloudflare zone, tunnel, ingress, and DNS plan
	uv run deploy/cloudflare-domain.py

domain-apply: ## Apply the Cloudflare plan after credentials and tunnel ID are provisioned
	uv run deploy/cloudflare-domain.py --apply

clean: ## Remove containers and orphan resources
	$(DC) down --remove-orphans

.PHONY: help up down build logs status shell-web health domain-plan domain-apply clean
