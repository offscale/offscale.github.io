import re

files = ["index.html", "ecosystem.html"]

css_override = """
#my-svg .mindmap-node span { color: #333 !important; }
#my-svg .mindmap-node p { color: #333 !important; }
#my-svg .node span { color: #333 !important; }
#my-svg .node p { color: #333 !important; }
"""

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    content = content.replace('</style>', css_override + '</style>')
    
    with open(file, 'w') as f:
        f.write(content)

