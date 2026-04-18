# Orbital Protocol — Makefile

HUGO        := hugo
SITE_DIR    := site
PUBLIC_DIR  := $(SITE_DIR)/public
BASE_URL    ?= https://$(shell git config user.name | tr '[:upper:]' '[:lower:]' | tr ' ' '-').github.io/space-networking/

.PHONY: help dev build clean new-post new-module deploy

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-18s\033[0m %s\n", $$1, $$2}'

dev: sync-curriculum ## Start local dev server with live reload
	cd $(SITE_DIR) && $(HUGO) server --buildDrafts --buildFuture --disableFastRender --bind 0.0.0.0

build: sync-curriculum ## Build the site for production
	cd $(SITE_DIR) && $(HUGO) --minify --baseURL "$(BASE_URL)"

clean: ## Remove generated public/ directory
	rm -rf $(PUBLIC_DIR)
	rm -f $(SITE_DIR)/content/curriculum/module-[0-9][0-9].md

sync-curriculum: ## Sync curriculum READMEs into Hugo content
	bash scripts/sync-curriculum.sh

new-post: ## Create a new journal post: make new-post NAME=day-042-dtn-progress
	@if [ -z "$(NAME)" ]; then echo "Usage: make new-post NAME=day-042-my-post"; exit 1; fi
	cd $(SITE_DIR) && $(HUGO) new content blog/$(NAME).md

new-module: ## Create a new curriculum module: make new-module NAME=module-13-something
	@if [ -z "$(NAME)" ]; then echo "Usage: make new-module NAME=module-13-something"; exit 1; fi
	cd $(SITE_DIR) && $(HUGO) new content curriculum/$(NAME).md

check: ## Run hugo's built-in content checks
	cd $(SITE_DIR) && $(HUGO) --printPathWarnings --printUnusedTemplates

deploy: build ## Build and push to GitHub Pages
	@echo "Deploying to GitHub Pages..."
	cd $(PUBLIC_DIR) && \
	git init && \
	git checkout -B main && \
	git add . && \
	git commit -m "Deploy to GitHub Pages" && \
	git push -f https://github.com/Anthonyhawkins/anthonyhawkins.github.io.git main
	@echo "Deployed successfully!"
