/**
 * Subprocess Runner and Fallback Generator for `cdd-ctl`.
 * @module runner
 */
import { Arazzo110, CDDOutput, CodeExample, OpenAPI320 } from './types';
import { assembleStructuredCodeSnippet } from './parser';
export { assembleStructuredCodeSnippet };
/**
 * Mapping of canonical UI language identifiers to their corresponding `cdd-ctl` subcommand targets across all 13 CDD repositories.
 */
export declare const LANGUAGE_MAP: Readonly<Record<string, string>>;
/**
 * Resolves the path to the cdd-ctl binary.
 * Checks the `CDD_CTL_PATH` environment variable, then falls back to a local `'./cdd-ctl'`.
 * @returns The resolved path to the cdd-ctl binary.
 */
export declare function resolveCddCtlPath(): string;
/**
 * Parses and validates the stdout from `cdd-ctl` into the `CDDOutput` interface.
 * Supports all 3 output formats emitted across the 13 `cdd-*` `to_docs_json` implementations:
 * 1. `{ endpoints: { '/path': { get: '...' } }, webhooks?: {...}, workflows?: {...} }`
 * 2. `[ { language: 'go', operations: [ { method: 'GET'|'WORKFLOW', path: '/path', operationId?: '...', code: { ... } } ] } ]`
 * 3. `{ endpoints: { '/path': { get: { default: { imports: '...', code: '...' } } } } }`
 * @param stdout The raw string output from the `cdd-ctl` binary.
 * @returns The parsed `CDDOutput` object.
 * @throws {Error} If the output is not valid JSON or doesn't match a recognized `CDDOutput` structure.
 */
export declare function parseCDDOutput(stdout: string): CDDOutput;
/**
 * Options for the cdd-ctl execution.
 */
export interface CDDRunOptions {
    /** Optional path to the cdd-ctl binary. Defaults to './cdd-ctl'. */
    cddCtlPath?: string | undefined;
    /** Whether to omit import statements in the generated code. */
    noImports?: boolean | undefined;
    /** Whether to omit function/class wrapping in the generated code. */
    noWrapping?: boolean | undefined;
}
/**
 * Executes the cdd-ctl subprocess securely.
 * @param lang The target language for the snippet.
 * @param specPath The path to the OpenAPI or Arazzo specification file.
 * @param options Additional options for execution.
 * @returns A promise that resolves to the stdout string from the subprocess.
 */
export declare function runCddCtl(lang: string, specPath: string, options?: CDDRunOptions): Promise<string>;
/**
 * Generates mock fallback snippets if the cdd-ctl compiler is missing or fails.
 * @param lang The target language.
 * @param spec The OpenAPI specification object to extract endpoints from.
 * @param options The run options used (to include variant details in the mock message).
 * @param arazzoSpec Optional Arazzo 1.1.0 specification object to extract workflows from.
 * @returns A CDDOutput containing the mock text.
 */
export declare function generateMockFallback(lang: string, spec: OpenAPI320, options?: CDDRunOptions, arazzoSpec?: Arazzo110): CDDOutput;
/** List of all 13 supported target programming languages for snippet generation. */
export declare const SUPPORTED_LANGUAGES: string[];
/**
 * Orchestrates generating a variant by calling runCddCtl and trapping failures gracefully to return a mock fallback.
 * @param lang The target language.
 * @param specPath The path to the spec.
 * @param spec The parsed OpenAPI spec.
 * @param options The run options.
 * @param arazzoSpec Optional parsed Arazzo 1.1.0 spec for workflow fallback generation.
 * @returns A promise that resolves to the parsed CDDOutput (or a mock fallback).
 */
export declare function generateVariant(lang: string, specPath: string, spec: OpenAPI320, options?: CDDRunOptions, arazzoSpec?: Arazzo110): Promise<CDDOutput>;
/**
 * Generates all snippets concurrently across multiple language targets and variants for OpenAPI endpoints, webhooks, and Arazzo workflows.
 * @param languages The list of target languages.
 * @param specPath The path to the OpenAPI or Arazzo specification file.
 * @param spec The parsed OpenAPI specification object.
 * @param cddCtlPath Optional path to the cdd-ctl binary.
 * @param arazzoSpec Optional parsed Arazzo 1.1.0 specification object.
 * @returns A promise that resolves to an array of CodeExample objects.
 */
export declare function generateAllSnippets(languages: string[] | undefined, specPath: string, spec: OpenAPI320, cddCtlPath?: string, arazzoSpec?: Arazzo110): Promise<CodeExample[]>;
