import re

with open('index.html', 'r') as f:
    content = f.read()

# Look for the section related to TypeScript in the first SVG
match = re.search(r'(<g class="node mindmap-node section-1" id="node_13" .*?<p>TypeScript</p></span></div></foreignObject></g></g>)', content)
if match:
    print("Found TypeScript node in SVG 1:")
    print(match.group(1))
