import { CodeExample, SchemaObject, ReferenceObject, OperationObject, DocTranslations } from './types';
/**
 * Basic markdown rendering for descriptions.
 */
export declare function renderMarkdown(text: string | undefined): string;
/**
 * Generates a curl command for a given operation.
 * @param method The HTTP method (get, post, etc.)
 * @param route The API route path
 * @param op The OpenAPI operation object
 * @returns A string containing the curl command
 */
export declare function generateCurl(method: string, route: string, op: OperationObject): string;
/**
 * Recursively renders a schema object into an HTML table-like structure.
 * @param schema The SchemaObject or ReferenceObject to render
 * @param depth Current recursion depth
 * @param namePrefix Prefix for property IDs to ensure uniqueness
 * @returns HTML string for the schema
 */
export declare function renderSchema(schema: SchemaObject | ReferenceObject, depth?: number, namePrefix?: string, t?: DocTranslations): string;
/**
 * Generates the complete AOT HTML for the API documentation.
 * @param specContent Raw OpenAPI spec string (YAML/JSON)
 * @param sdkExamples List of code examples to include
 * @param theme UI theme ('light' or 'dark')
 * @returns Full HTML document string
 */
export declare function generateAOTHtml(specContent: string, sdkExamples?: CodeExample[], theme?: 'light' | 'dark', injectLiveReload?: boolean, customTranslations?: Partial<DocTranslations>): string;
