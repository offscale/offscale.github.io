.PHONY: all build build_cdd_web_ui test lint typecheck clean

all: build

build_cdd_web_ui:
	@echo "Building ../cdd-web-ui (production)..."
	cd ../cdd-web-ui && ([ -d node_modules/@angular/build ] || npm install) && npm run build:prod -- --base-href /cdd-web-ui/
	@echo "Syncing ../cdd-web-ui/dist/cdd-web-ui/browser into ./cdd-web-ui..."
	rm -rf cdd-web-ui
	mkdir -p cdd-web-ui
	cp -r ../cdd-web-ui/dist/cdd-web-ui/browser/* cdd-web-ui/
	rm -rf cdd-web-ui/assets/wasm

build: build_cdd_web_ui
	npm run build

test:
	npm test

lint:
	npm run lint

typecheck:
	npm run typecheck

clean:
	rm -rf dist coverage
