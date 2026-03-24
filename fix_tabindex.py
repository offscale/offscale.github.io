import re

def fix_tabindex(html_file):
    with open(html_file, 'r') as f:
        content = f.read()

    # The third feature-card got disconnected, re-add tabindex to it
    content = content.replace('<article class="feature-card">', '<article class="feature-card" tabindex="0">')
    
    with open(html_file, 'w') as f:
        f.write(content)

fix_tabindex('index.html')
fix_tabindex('ecosystem.html')
