/**
 * Ahead-Of-Time (AOT) Static HTML and CSS Generator for OpenAPI 3.2.0, Swagger 2.0, and Arazzo 1.1.0 Documentation.
 * @module aot-generator
 */
import { CodeExample, SchemaObject, ReferenceObject, OperationObject, PathItemObject, ParameterObject, RequestBodyObject, ResponseObject, ComponentsObject, ServerObject, DocData, DocTranslations, NormalizedWorkflow, CriterionObject, ArazzoComponentsObject } from './types';
/**
 * Escapes HTML special characters (`&`, `<`, `>`, `"`, `'`) to prevent XSS and broken markup.
 * @param str The raw string to escape.
 * @returns The HTML-escaped string.
 */
export declare function escapeHtml(str: string): string;
/**
 * Sanitizes a URL string for safe insertion into `href` or `src` attributes, neutralizing
 * dangerous schemes such as `javascript:`, `vbscript:`, or `data:`.
 * @param url The raw URL string to validate.
 * @returns The escaped safe URL string, or `'#'` if the scheme is unsafe.
 */
export declare function sanitizeUrl(url: string): string;
/**
 * Sanitizes a language or identifier token for safe interpolation into CSS selectors and custom property names.
 * @param ident The raw identifier string.
 * @returns An alphanumeric/hyphen/underscore CSS-safe identifier string.
 */
export declare function sanitizeCssIdent(ident: string): string;
/**
 * Interpolates default values for `{variable}` placeholders in an OpenAPI `ServerObject` URL.
 * @param server The `ServerObject` to resolve, or `undefined`.
 * @returns The resolved base URL string (defaults to `'https://api.example.com'`).
 */
export declare function interpolateServerVariables(server: ServerObject | undefined): string;
/**
 * Basic markdown rendering for descriptions with raw HTML/script tag and unsafe link sanitization.
 * @param text The raw markdown string to convert to HTML.
 * @returns The rendered and sanitized HTML string, or an empty string if undefined/empty.
 */
export declare function renderMarkdown(text: string | undefined): string;
/**
 * Dereferences a `ParameterObject | ReferenceObject` against `components.parameters`.
 * @param param The parameter or reference object.
 * @param components Optional OpenAPI `ComponentsObject`.
 * @returns The resolved `ParameterObject`, or `undefined` if it is an unresolvable reference.
 */
export declare function resolveParameterRef(param: ParameterObject | ReferenceObject, components?: ComponentsObject): ParameterObject | undefined;
/**
 * Merges and dereferences path-level parameters and operation-level parameters.
 * Operation-level parameters with the same `(name, in)` pair override path-level parameters.
 * @param pathItem Optional parent `PathItemObject`.
 * @param op The `OperationObject`.
 * @param components Optional OpenAPI `ComponentsObject`.
 * @returns Deduplicated array of resolved `ParameterObject` items.
 */
export declare function resolveOperationParameters(pathItem: PathItemObject | undefined, op: OperationObject, components?: ComponentsObject): ParameterObject[];
/**
 * Dereferences a `RequestBodyObject | ReferenceObject` against `components.requestBodies`.
 * @param rb The request body or reference object.
 * @param components Optional OpenAPI `ComponentsObject`.
 * @returns The resolved `RequestBodyObject`, or `undefined` if it is an unresolvable reference.
 */
export declare function resolveRequestBodyRef(rb: RequestBodyObject | ReferenceObject | undefined, components?: ComponentsObject): RequestBodyObject | undefined;
/**
 * Dereferences a `ResponseObject | ReferenceObject` against `components.responses`.
 * @param resp The response or reference object.
 * @param components Optional OpenAPI `ComponentsObject`.
 * @returns The resolved `ResponseObject`, or `undefined` if it is an unresolvable reference.
 */
export declare function resolveResponseRef(resp: ResponseObject | ReferenceObject | undefined, components?: ComponentsObject): ResponseObject | undefined;
/**
 * Generates a curl command for a given operation.
 * @param method The HTTP method (`get`, `post`, etc.).
 * @param route The API route path.
 * @param op The OpenAPI operation object.
 * @param baseUrl The base server URL (defaults to `'https://api.example.com'`).
 * @param pathItem Optional parent `PathItemObject` for inherited parameters.
 * @param components Optional OpenAPI `ComponentsObject` for dereferencing `$ref` parameters/requestBodies.
 * @returns A string containing the curl command.
 */
export declare function generateCurl(method: string, route: string, op: OperationObject, baseUrl?: string, pathItem?: PathItemObject, components?: ComponentsObject): string;
/**
 * Recursively renders a schema object into an HTML table-like structure.
 * @param schema The SchemaObject or ReferenceObject to render.
 * @param depth Current recursion depth.
 * @param namePrefix Prefix for property IDs to ensure uniqueness.
 * @param t Localization strings for table headers and labels.
 * @returns HTML string for the schema.
 */
export declare function renderSchema(schema: SchemaObject | ReferenceObject, depth?: number, namePrefix?: string, t?: DocTranslations): string;
/**
 * Formats an Arazzo parameter, replacement, or output value (literal, runtime expression, or `SelectorObject`) as HTML.
 * @param val The value or `SelectorObject` to format.
 * @returns Escaped HTML representation of the value.
 */
export declare function renderArazzoValue(val: unknown): string;
/**
 * Formats a `CriterionObject`'s type (string or `CriterionExpressionTypeObject`) into a badge string.
 * @param crit The `CriterionObject` to inspect.
 * @returns The formatted criterion type string.
 */
export declare function formatCriterionType(crit: CriterionObject): string;
/**
 * Renders the right-hand multi-language code tab panel for either an OpenAPI operation or an Arazzo workflow.
 * @param id Unique identifier for the card (`operationId` or `workflow-${workflowId}`).
 * @param curlOrCliPreview The cURL command or workflow CLI preview script.
 * @param examples The list of `CodeExample` items mapped to this operation or workflow.
 * @param languages The list of active target languages.
 * @param t Localization strings.
 * @returns HTML string for the `<aside class="cdd-endpoint-code">` block.
 */
export declare function renderCodeAside(id: string, curlOrCliPreview: string, examples: CodeExample[], languages: string[], t: DocTranslations): string;
/**
 * Renders an Arazzo 1.1.0 workflow card including its inputs schema, step pipeline, criteria, actions, outputs, interactive runner, and multi-language SDK code tabs.
 * @param nw The `NormalizedWorkflow` to render.
 * @param docData The parent `DocData` structure.
 * @param languages Active target languages for the SDK code panel.
 * @param t Localization strings.
 * @returns HTML string for the `<article class="cdd-endpoint cdd-workflow">` section.
 */
export declare function renderWorkflowSection(nw: NormalizedWorkflow, docData: DocData, languages: string[], t?: DocTranslations): string;
/**
 * Renders reusable Arazzo `$components` (`inputs`, `parameters`, `successActions`, `failureActions`) when present.
 * @param components The `ArazzoComponentsObject` to render.
 * @param t Localization strings.
 * @returns HTML string for the Arazzo components section.
 */
export declare function renderArazzoComponents(components: ArazzoComponentsObject | undefined, t?: DocTranslations): string;
/**
 * Structured fragment output produced by `generateAOTBodyAndStyles` for direct embedding into `<cdd-api-docs>` or wrapping into a full HTML page.
 */
export interface AOTFragmentResult {
    /** The two `<style>` blocks (`.no-js` progressive enhancement rules and the Material 3 layout stylesheet). */
    stylesHtml: string;
    /** The inner HTML body content (hidden state inputs and `.cdd-layout` grid). */
    bodyHtml: string;
    /** The resolved specification title. */
    title: string;
    /** The resolved UI locale code. */
    locale: string;
}
/**
 * Generates the `<style>` blocks and `<body>` inner HTML fragments for the OpenAPI 3.2.0, Swagger 2.0, and/or Arazzo 1.1.0 documentation without requiring regex extraction.
 * @param specContent Raw OpenAPI or Arazzo spec string (YAML/JSON).
 * @param sdkExamples List of code examples to include.
 * @param theme UI theme (`'light'` or `'dark'`).
 * @param customTranslations Optional partial translation dictionary to override defaults.
 * @param companionArazzoContent Optional companion Arazzo 1.1.0 spec string (YAML/JSON) to render alongside an OpenAPI spec.
 * @param activeLanguage Optional target language identifier to select by default in the SDK tab.
 * @param defaultIncludeImports Whether `#opt-imports` is checked by default (defaults to `false` for concise SDK snippets).
 * @param defaultIncludeWrapping Whether `#opt-wrapping` is checked by default (defaults to `false` for concise SDK snippets).
 * @returns An `AOTFragmentResult` containing `stylesHtml`, `bodyHtml`, `title`, and `locale`.
 */
export declare function generateAOTBodyAndStyles(specContent: string, sdkExamples?: CodeExample[], theme?: 'light' | 'dark', customTranslations?: Partial<DocTranslations>, companionArazzoContent?: string, activeLanguage?: string, defaultIncludeImports?: boolean, defaultIncludeWrapping?: boolean): AOTFragmentResult;
/**
 * Generates the complete AOT HTML for the OpenAPI 3.2.0, Swagger 2.0, and/or Arazzo 1.1.0 documentation.
 * @param specContent Raw OpenAPI or Arazzo spec string (YAML/JSON).
 * @param sdkExamples List of code examples to include.
 * @param theme UI theme (`'light'` or `'dark'`).
 * @param injectLiveReload Whether to inject the `/__livereload` EventSource script.
 * @param customTranslations Optional partial translation dictionary to override defaults.
 * @param companionArazzoContent Optional companion Arazzo 1.1.0 spec string (YAML/JSON) to render alongside an OpenAPI spec.
 * @param activeLanguage Optional target language identifier to select by default in the SDK tab.
 * @returns Full HTML document string.
 */
export declare function generateAOTHtml(specContent: string, sdkExamples?: CodeExample[], theme?: 'light' | 'dark', injectLiveReload?: boolean, customTranslations?: Partial<DocTranslations>, companionArazzoContent?: string, activeLanguage?: string): string;
