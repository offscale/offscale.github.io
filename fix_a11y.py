import re

def fix_a11y(html_file):
    with open(html_file, 'r') as f:
        content = f.read()

    # 1. Ensure lang and dir attributes are set on html tag for i18n
    content = re.sub(r'<html\s+lang="en">', '<html lang="en" dir="ltr">', content)
    
    # 2. Add aria-labels to SVGs that lost their img alt tags during inlining
    # We will search for SVGs inside card-diagrams and add aria-hidden="true" or role="img"
    # Actually, we can just make sure <svg... has role="img" aria-label="Diagram"
    def fix_svg_a11y(match):
        svg_tag = match.group(0)
        if 'aria-hidden' not in svg_tag and 'role=' not in svg_tag:
            return svg_tag.replace('<svg ', '<svg role="img" aria-label="Technical Diagram" ', 1)
        return svg_tag
        
    content = re.sub(r'<svg[^>]*>', fix_svg_a11y, content)
    
    # 3. Add explicit landmark roles for better screen reader navigation
    content = re.sub(r'<header class="header">', '<header class="header" role="banner">', content)
    content = re.sub(r'<main>', '<main role="main">', content)
    content = re.sub(r'<footer class="footer">', '<footer class="footer" role="contentinfo">', content)
    
    # 4. Make sure navigation has aria-label
    content = re.sub(r'<nav class="main-nav" style="align-items: center;">', '<nav class="main-nav" role="navigation" aria-label="Main Navigation" style="align-items: center;">', content)

    with open(html_file, 'w') as f:
        f.write(content)

fix_a11y('index.html')
fix_a11y('ecosystem.html')
import re

def fix_aria_headings(html_file):
    with open(html_file, 'r') as f:
        content = f.read()

    # Give appropriate semantic grouping via aria-labelledby connecting sections to their h2
    content = content.replace('<section class="comparison-section"', '<section id="comparison" class="comparison-section" aria-labelledby="comparison-heading"')
    content = content.replace('<h2 style="font-size: 2.5rem; color: #1a1a1a; margin-bottom: 16px;">Why Offscale?</h2>', '<h2 id="comparison-heading" style="font-size: 2.5rem; color: #1a1a1a; margin-bottom: 16px;">Why Offscale?</h2>')
    
    content = content.replace('<section style="background-color: var(--primary)', '<section id="demo" aria-labelledby="demo-heading" style="background-color: var(--primary)')
    content = content.replace('<h2 style="font-size: 2.25rem; margin-bottom: 16px;">Interactive Live Demo</h2>', '<h2 id="demo-heading" style="font-size: 2.25rem; margin-bottom: 16px;">Interactive Live Demo</h2>')

    with open(html_file, 'w') as f:
        f.write(content)

fix_aria_headings('index.html')


def deduplicate_aria(html_file):
    with open(html_file, 'r') as f:
        content = f.read()
    
    # Remove aria-label if aria-labelledby is used on the same tag
    content = content.replace('aria-labelledby="comparison-heading" style="background-color: white; border-top: 1px solid #e1e4e8;" aria-label="Competitive Comparison"', 'aria-labelledby="comparison-heading" style="background-color: white; border-top: 1px solid #e1e4e8;"')
    
    with open(html_file, 'w') as f:
        f.write(content)
deduplicate_aria('index.html')
