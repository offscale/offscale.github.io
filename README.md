# Offscale.github.io

This repository hosts the source code for the **Offscale** landing page: [offscale.github.io](https://offscale.github.io).

Offscale provides modern, rapid application tools, bringing "new compilers to 'solve' software."

## 🚀 Site Structure

The site is currently organized into two main sections:

### 1. SDKs & Interactive Docs (`index.html`)
The main landing page focuses entirely on our OpenAPI generation pipeline:
- **SDK Generation:** Build typed, idiomatic client libraries natively for 13+ languages directly from OpenAPI specs.
- **Package Publishing:** Automatically publish those SDKs to registries like PyPI, Crates.io, npm, Maven, RubyGems, CocoaPods, and NuGet.
- **Interactive API Docs:** Generate hostable, versioned static HTML documentation with interactive sample API calls.

### 2. Ecosystem (`ecosystem.html`)
The broader Offscale suite and high-performance tools:
- **OpenAPI ↔ Language Compilers:** 13 new bidirectional compilers for major languages.
- **Rapid Deployment (`libscript`):** Tools to natively deploy and package stacks for DOS, SunOS, Windows, Linux, and macOS (e.g., `.msi`, `.deb`, `.rpm`).
- **ML Translation (`onnx9000` & `ml-switcheroo`):** Transpile across the entire stack from PyTorch/TensorFlow to JAX, MLX, C++, WebGPU, and WASM.
- **#rewriteInC:** Build blazing-fast applications using `c-rest-framework`, `c-orm`, `c-abstract-http`, and `c-fs`.
- **`c-multiplatform`:** A high-performance, native C alternative to frameworks like Kotlin Multiplatform, Flutter, Xamarin, and React Native. Deploy to Web, iOS, Android, Linux, Windows, Consoles, DOS, watchOS, tvOS, and Raspberry Pi.

## 🛠️ Development

This is a static HTML/CSS/JS site hosted directly on GitHub Pages.

### Editing Content
- Edit `index.html` for the SDKs & Docs landing page.
- Edit `ecosystem.html` for the wider Ecosystem page.
- Edit `styles.css` for design, layout, and animation changes.
- Edit `script.js` for interactivity.

### GitHub Pages Configuration
- `.nojekyll`: Ensures GitHub Pages serves the static files exactly as they are without running Jekyll processing.
- `CNAME`: Handles custom domain routing.

### Editing Diagrams (Mermaid)
The architecture and flowchart diagrams on the site are generated using Mermaid.js.

1. Edit the `.mmd` files (e.g., `deploy.mmd`, `ml.mmd`, `c_multiplatform.mmd`, `sdk_cli_docs.mmd`).
2. Run the generation script to rebuild the SVGs:
   ```bash
   ./mmd_gen.sh
   ```
   *(Note: This requires `npx` and `@mermaid-js/mermaid-cli`)*

## 📄 License
© 2026 Offscale. Open source tools for modern developers.
