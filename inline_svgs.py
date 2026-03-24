import re

def inline_svgs(html_file):
    with open(html_file, 'r') as f:
        content = f.read()

    # Find all img tags that point to an SVG
    # e.g., <img src="openapi.svg" alt="..." style="...">
    pattern = re.compile(r'<img\s+src="([^"]+\.svg)"[^>]*>')
    
    def replacer(match):
        svg_file = match.group(1)
        try:
            with open(svg_file, 'r') as f:
                svg_content = f.read()
            # Extract just the <svg ...> ... </svg> part to avoid XML declarations
            svg_match = re.search(r'(<svg[^>]*>.*</svg>)', svg_content, re.DOTALL)
            if svg_match:
                svg_str = svg_match.group(1)
                # Strip out the explicit background-color: transparent from the svg style to let CSS handle it
                svg_str = re.sub(r'background-color:\s*transparent;', '', svg_str)
                # Append the original img's inline styles to the svg tag
                # extract original style
                style_match = re.search(r'style="([^"]+)"', match.group(0))
                if style_match:
                    orig_style = style_match.group(1)
                    # Add original inline styles to the SVG
                    if 'style="' in svg_str:
                        svg_str = re.sub(r'style="([^"]+)"', f'style="\\1 {orig_style}"', svg_str, count=1)
                    else:
                        svg_str = svg_str.replace('<svg ', f'<svg style="{orig_style}" ', 1)
                
                # add a class to let css target it
                if 'class="' in svg_str:
                    svg_str = re.sub(r'class="([^"]+)"', r'class="\1 inline-svg"', svg_str, count=1)
                else:
                    svg_str = svg_str.replace('<svg ', '<svg class="inline-svg" ', 1)
                    
                return svg_str
            return match.group(0)
        except Exception as e:
            print(f"Error reading {svg_file}: {e}")
            return match.group(0)

    new_content = pattern.sub(replacer, content)
    
    with open(html_file, 'w') as f:
        f.write(new_content)
        
inline_svgs('index.html')
inline_svgs('ecosystem.html')
