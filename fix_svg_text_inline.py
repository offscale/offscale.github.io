import re

files = ["index.html", "ecosystem.html"]

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    content = re.sub(r'<span class="nodeLabel"><p>(.*?)</p></span>', r'<span class="nodeLabel" style="color: #1a1a1a;"><p>\1</p></span>', content)

    with open(file, 'w') as f:
        f.write(content)

