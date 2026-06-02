import { CDDOutput, OpenAPI320 } from './types';
/**
 * Resolves the path to the cdd-ctl binary.
 * Checks the CDD_CTL_PATH environment variable, then falls back to a local './cdd-ctl'.
 * @returns The resolved path to the cdd-ctl binary.
 */
export declare function resolveCddCtlPath(): string;
/**
 * Parses and validates the stdout from cdd-ctl strictly into the CDDOutput interface.
 * @param stdout The raw string output from the cdd-ctl binary.
 * @returns The parsed CDDOutput object.
 * @throws Error if the output is not valid JSON or doesn't match the CDDOutput structure.
 */
export declare function parseCDDOutput(stdout: string): CDDOutput;
/**
 * Options for the cdd-ctl execution.
 */
export interface CDDRunOptions {
    /** Optional path to the cdd-ctl binary. Defaults to './cdd-ctl'. */
    cddCtlPath?: string;
    /** Whether to omit import statements in the generated code. */
    noImports?: boolean;
    /** Whether to omit function/class wrapping in the generated code. */
    noWrapping?: boolean;
}
/**
 * Executes the cdd-ctl subprocess securely.
 * @param lang The target language for the snippet.
 * @param specPath The path to the OpenAPI specification file.
 * @param options Additional options for execution.
 * @returns A promise that resolves to the stdout string from the subprocess.
 */
export declare function runCddCtl(lang: string, specPath: string, options?: CDDRunOptions): Promise<string>;
/**
 * Generates mock fallback snippets if the cdd-ctl compiler is missing or fails.
 * @param lang The target language.
 * @param spec The OpenAPI specification object to extract endpoints from.
 * @param options The run options used (to include variant details in the mock message).
 * @returns A CDDOutput containing the mock text.
 */
export declare function generateMockFallback(lang: string, spec: OpenAPI320, options?: CDDRunOptions): CDDOutput;
/** List of supported target programming languages for snippet generation. */
export declare const SUPPORTED_LANGUAGES: string[];
/**
 * Orchestrates generating a variant by calling runCddCtl and trapping failures gracefully to return a mock fallback.
 * @param lang The target language.
 * @param specPath The path to the spec.
 * @param spec The parsed OpenAPI spec.
 * @param options The run options.
 * @returns A promise that resolves to the parsed CDDOutput (or a mock fallback).
 */
export declare function generateVariant(lang: string, specPath: string, spec: OpenAPI320, options?: CDDRunOptions): Promise<CDDOutput>;
import { CodeExample } from './types';
/**
 * Generates all snippets concurrently across multiple language targets and variants.
 * @param languages The list of target languages.
 * @param specPath The path to the OpenAPI specification file.
 * @param spec The parsed OpenAPI specification object.
 * @param cddCtlPath Optional path to the cdd-ctl binary.
 * @returns A promise that resolves to an array of CodeExample objects.
 */
export declare function generateAllSnippets(languages: string[] | undefined, specPath: string, spec: OpenAPI320, cddCtlPath?: string): Promise<CodeExample[]>;
