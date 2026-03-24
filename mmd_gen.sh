cat << 'INNER_EOF' > deploy.mmd
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#fff1e6', 'primaryBorderColor': '#ff6a00', 'primaryTextColor': '#333', 'lineColor': '#ff6a00', 'fontSize': '14px'}}}%%
flowchart LR
    C[Code] --> L((libscript))
    L --> N[Native]
    L --> D[Docker]
    N & D --> OS[SunOS, Linux, macOS, Windows, DOS]
    OS --> Pkg[.msi, .exe, .deb, .pkg, .rpm, etc.]
INNER_EOF

cat << 'INNER_EOF' > ml.mmd
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#fff1e6', 'primaryBorderColor': '#ff6a00', 'primaryTextColor': '#333', 'lineColor': '#ff6a00', 'fontSize': '14px'}}}%%
flowchart LR
    PT[PyTorch] <--> ON[ONNX]
    TF[TensorFlow] <--> ON
    ON <--> J[JAX]
    ON <--> S[Scikit]
INNER_EOF

cat << 'INNER_EOF' > c_multiplatform.mmd
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#fff1e6', 'primaryBorderColor': '#ff6a00', 'primaryTextColor': '#333', 'lineColor': '#ff6a00', 'fontSize': '14px'}}}%%
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

npx -y @mermaid-js/mermaid-cli -i deploy.mmd -o deploy.svg
sed -i '' 's/background-color: white;/background-color: transparent;/g' deploy.svg

npx -y @mermaid-js/mermaid-cli -i ml.mmd -o ml.svg
sed -i '' 's/background-color: white;/background-color: transparent;/g' ml.svg

npx -y @mermaid-js/mermaid-cli -i c_multiplatform.mmd -o c_multiplatform.svg
sed -i '' 's/background-color: white;/background-color: transparent;/g' c_multiplatform.svg

cat << 'INNER_EOF' > sdk_cli_docs.mmd
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#fff1e6', 'primaryBorderColor': '#ff6a00', 'primaryTextColor': '#333', 'lineColor': '#ff6a00', 'fontSize': '14px'}}}%%
flowchart LR
    C[Source Code] -->|Parse| G((Generators))
    G --> S[SDKs]
    G --> CL[CLIs]
    G --> D[API Docs]
INNER_EOF

npx -y @mermaid-js/mermaid-cli -i sdk_cli_docs.mmd -o sdk_cli_docs.svg
sed -i '' 's/background-color: white;/background-color: transparent;/g' sdk_cli_docs.svg


cat << 'INNER_EOF' > interactive_docs.mmd
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#fff1e6', 'primaryBorderColor': '#ff6a00', 'primaryTextColor': '#333', 'lineColor': '#ff6a00', 'fontSize': '14px'}}}%%
flowchart LR
    A[OpenAPI Spec] --> B[Offscale Engine]
    B --> C[SDKs]
    B --> D[Code Snippets]
    B --> E[HTML/CSS/JS]
    
    C -.-> F((Interactive\nDeveloper Portal))
    D --> F
    E --> F
INNER_EOF

npx -y @mermaid-js/mermaid-cli -i interactive_docs.mmd -o interactive_docs.svg
sed -i '' 's/background-color: white;/background-color: transparent;/g' interactive_docs.svg

