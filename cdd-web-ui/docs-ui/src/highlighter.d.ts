/**
 * Zero-dependency syntax highlighter and tokenizer for all 13 CDD target languages, shell/cURL, and JSON.
 * Produces Shadow-DOM-compatible `<span class="cdd-tok-*">` elements while safely escaping HTML entities.
 * @module highlighter
 */
/**
 * Supported syntax token categories mapped to `.cdd-tok-${kind}` CSS classes.
 */
export type SyntaxTokenKind = 'plain' | 'keyword' | 'string' | 'comment' | 'number' | 'function' | 'type' | 'variable' | 'operator';
/**
 * Normalized language family used by the tokenizer.
 */
export type NormalizedSyntaxLanguage = 'c' | 'cpp' | 'csharp' | 'go' | 'java' | 'kotlin' | 'php' | 'python' | 'ruby' | 'rust' | 'sh' | 'swift' | 'ts' | 'json';
/**
 * Escapes HTML special characters in a raw token string so it can be safely embedded inside HTML.
 * @param raw The unescaped source text.
 * @returns The HTML-escaped string.
 */
export declare function escapeTokenHtml(raw: string): string;
/**
 * Normalizes an arbitrary language identifier (e.g. `'typescript'`, `'bash'`, `'python-all'`, `'c#'`)
 * into a canonical `NormalizedSyntaxLanguage`.
 * @param language The raw language identifier string.
 * @returns The canonical `NormalizedSyntaxLanguage`.
 */
export declare function normalizeSyntaxLanguage(language: string): NormalizedSyntaxLanguage;
/**
 * Tokenizes and highlights source code for the specified language into HTML `<span class="cdd-tok-*">` tags.
 * @param code The raw source code string to highlight.
 * @param language The language identifier (e.g. `'ts'`, `'python'`, `'rust'`, `'bash'`, `'json'`).
 * @returns Highlighted HTML string safe for insertion inside `<code>...</code>`.
 */
export declare function highlightCode(code: string, language: string): string;
