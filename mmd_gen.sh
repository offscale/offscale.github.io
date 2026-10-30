#!/usr/bin/env bash
# @file mmd_gen.sh
# @description Generates and sanitizes Mermaid SVG diagrams (deploy, ml, c_multiplatform,
# sdk_cli_docs, interactive_docs) with a unified Offscale theme, unique SVG IDs,
# transparent backgrounds, and zero malformed inline attributes.
#
# Usage: ./mmd_gen.sh
# Prerequisites: npx and @mermaid-js/mermaid-cli

set -euo pipefail

readonly MERMAID_INIT="%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#fff1e6', 'primaryBorderColor': '#ff6a00', 'primaryTextColor': '#333', 'lineColor': '#ff6a00', 'fontSize': '14px'}}}%%"

# Renders a .mmd file to an .svg file and normalizes its attributes portably across macOS/Linux.
# Arguments:
#   $1 - Input .mmd filename
#   $2 - Output .svg filename
#   $3 - Unique SVG root element ID
render_diagram() {
    local input_mmd="$1"
    local output_svg="$2"
    local svg_id="$3"
    local tmp_svg="${output_svg}.tmp"

    npx -y @mermaid-js/mermaid-cli -i "${input_mmd}" -o "${output_svg}"

    sed -e 's/background-color: white;/background-color: transparent;/g' -e 's/ style="undefined;;;undefined"//g' -e 's/id="my-svg"/id="'"${svg_id}"'"/g' -e "s/#my-svg/#${svg_id}/g" -e "s/my-svg_/${svg_id}_/g" "${output_svg}" > "${tmp_svg}"
    mv "${tmp_svg}" "${output_svg}"
}

cat << INNER_EOF > deploy.mmd
${MERMAID_INIT}
flowchart LR
    C[Code] --> L((libscript))
    L --> N[Native]
    L --> D[Docker]
    N & D --> OS[SunOS, Linux, macOS, Windows, DOS]
    OS --> Pkg[.msi, .exe, .deb, .pkg, .rpm, etc.]
INNER_EOF

cat << INNER_EOF > ml.mmd
${MERMAID_INIT}
flowchart LR
    PT[PyTorch] <--> ON[ONNX]
    TF[TensorFlow] <--> ON
    ON <--> J[JAX]
    ON <--> S[Scikit]
INNER_EOF

cat << INNER_EOF > c_multiplatform.mmd
${MERMAID_INIT}
flowchart LR
    subgraph Core[Core Libraries]
        direction TB
        ORM[c-orm]
        NET[c-abstract-http]
    end

    ORM --> CRF[c-rest-framework]
    ORM --> CMP[c-multiplatform]

    NET --> CRF
    NET --> CMP

    style ORM fill:#fff1e6,stroke:#ff6a00
    style NET fill:#fff1e6,stroke:#ff6a00
    style CRF fill:#fff1e6,stroke:#ff6a00
    style CMP fill:#fff1e6,stroke:#ff6a00
INNER_EOF

cat << INNER_EOF > sdk_cli_docs.mmd
${MERMAID_INIT}
flowchart LR
    C[Source Code] -->|Parse| G((Generators))
    G --> S[SDKs]
    G --> CL[CLIs]
    G --> D[API Docs]
INNER_EOF

cat << INNER_EOF > interactive_docs.mmd
${MERMAID_INIT}
flowchart LR
    A[OpenAPI Spec] --> B[Offscale Engine]
    B --> C[SDKs]
    B --> D[Code Snippets]
    B --> E[HTML/CSS/JS]

    C -.-> F((Interactive
Developer Portal))
    D --> F
    E --> F
INNER_EOF

render_diagram "deploy.mmd" "deploy.svg" "svg-rapid-deploy"
render_diagram "ml.mmd" "ml.svg" "svg-ml-translation"
render_diagram "c_multiplatform.mmd" "c_multiplatform.svg" "svg-c-multiplatform"
render_diagram "sdk_cli_docs.mmd" "sdk_cli_docs.svg" "svg-sdk-cli-docs"
render_diagram "interactive_docs.mmd" "interactive_docs.svg" "svg-interactive-docs"
