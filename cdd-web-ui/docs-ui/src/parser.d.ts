/**
 * OpenAPI 3.2.0 and Swagger 2.0 Parser and Normalizer.
 * @module parser
 */
import { DocData, CodeExample, InfoObject, ContactObject, LicenseObject, ServerObject, ServerVariableObject, PathsObject, PathItemObject, OperationObject, ParameterObject, RequestBodyObject, MediaTypeObject, ResponsesObject, ResponseObject, HeaderObject, LinkObject, CallbackObject, ExampleObject, ReferenceObject, EncodingObject, TagObject, ExternalDocumentationObject, SecurityRequirementObject, ComponentsObject, SchemaObject, DiscriminatorObject, XMLObject, SecuritySchemeObject, OAuthFlowObject, JsonValue } from './types';
/**
 * Type guard checking if an unknown value is a non-null plain object record.
 * @param val The unknown value to inspect.
 * @returns True if the value is a non-null, non-array object.
 */
export declare function isRecord(val: unknown): val is Record<string, unknown>;
/**
 * Checks if a trimmed specification input string represents a remote URL or local gateway path
 * rather than inline JSON/YAML content or an existing local file path.
 * @param trimmed The trimmed input string to inspect.
 * @param fileExistsCheck Optional predicate checking if a local file path exists on disk.
 * @returns True if the input should be fetched as a URL.
 */
export declare function isSpecUrl(trimmed: string, fileExistsCheck?: (path: string) => boolean): boolean;
/**
 * Normalizes a specification URL string, prepending `https://` when a bare domain path
 * (e.g. `example.com/spec.yaml`) is supplied instead of an explicit `http://`, `https://`, or `/` prefix.
 * @param url The raw URL string.
 * @returns The normalized URL ready for `fetch()`.
 */
export declare function normalizeSpecUrl(url: string): string;
/**
 * Decomposes a flat source code snippet string into structured `{ imports, wrapper_start, snippet, wrapper_end }`
 * components when imports or outer boilerplate wrappers (`main`, `Example`, `execute`, etc.) are detected.
 * @param rawCode The flat code string to inspect and decompose.
 * @returns A structured record compatible with `expandStructuredCodeVariants`.
 */
export declare function decomposeFlatCodeString(rawCode: string): Record<string, unknown>;
/**
 * Checks whether a filepath belongs to a project configuration, build manifest, test suite, or model definition file
 * that should never be displayed as an endpoint SDK usage snippet.
 * @param filepath The file path to inspect.
 * @returns True if the file is non-snippet scaffolding/config/test code.
 */
export declare function isScaffoldingOrNonSnippetFile(filepath: string): boolean;
/**
 * Extracts a concise per-operation SDK snippet from a raw multi-operation SDK source file when
 * full `to_sdk` files are supplied instead of `to_docs_json` output.
 * @param content Full source file content.
 * @param operationId Optional target `operationId`.
 * @param route Target HTTP route path (e.g. `'/pets'`).
 * @param method Target lowercase HTTP method (e.g. `'get'`).
 * @returns The extracted concise snippet or `null` if the operation does not appear in `content`.
 */
export declare function extractOperationSnippetFromSdkFile(content: string, operationId: string | undefined, route: string, method: string): string | null;
/**
 * Metadata fields for associating a `CodeExample` with its target operation, webhook, or workflow.
 */
export interface CodeExampleMetadata {
    /** Explicit operationId for deterministic correlation. */
    operationId?: string | undefined;
    /** Explicit HTTP method in lowercase. */
    method?: string | undefined;
    /** Explicit route path. */
    route?: string | undefined;
    /** Explicit webhook name. */
    webhookName?: string | undefined;
    /** Explicit Arazzo workflowId. */
    workflowId?: string | undefined;
}
/**
 * Removes common leading whitespace from every non-empty line of a multi-line code snippet.
 * @param text The raw code string.
 * @returns The dedented and trimmed code string.
 */
export declare function dedentCodeString(text: string): string;
/**
 * Reconstructs a single code string from a structured code snippet object (`imports`, `wrapperStart` / `wrapper_start`, `snippet` / `code`, `wrapperEnd` / `wrapper_end`),
 * optionally filtering whether imports or wrapper lines are included.
 * @param codeRec The structured code record.
 * @param includeImports Whether to include the `imports` section (defaults to `true`).
 * @param includeWrapping Whether to include `wrapperStart` and `wrapperEnd` sections (defaults to `true`).
 * @returns The assembled code snippet string.
 */
export declare function assembleStructuredCodeSnippet(codeRec: Record<string, unknown>, includeImports?: boolean, includeWrapping?: boolean): string;
/**
 * Expands a structured code snippet record (`imports`, `wrapperStart`, `snippet`, `wrapperEnd`) into
 * either 4 toggleable `CodeExample` variants (when imports or wrapping fields are present) or a single
 * `CodeExample` (when only `snippet`/`code` is present).
 * @param codeRec The structured code record.
 * @param language The target programming language.
 * @param filepath The synthetic filepath slug.
 * @param meta Optional explicit correlation metadata (`operationId`, `method`, `route`, `webhookName`, `workflowId`).
 * @returns Array of expanded `CodeExample` items.
 */
export declare function expandStructuredCodeVariants(codeRec: Record<string, unknown>, language: string, filepath: string, meta?: CodeExampleMetadata): CodeExample[];
/**
 * Extracts `CodeExample` items from a `CDDOutput`-shaped record (`endpoints`, `operations`, `webhooks`, `workflows`).
 * @param rec The record containing `endpoints`, `operations`, `webhooks`, and/or `workflows`.
 * @param lang The programming language identifier.
 * @returns Array of extracted `CodeExample` objects.
 */
export declare function extractExamplesFromCddOutputRecord(rec: Record<string, unknown>, lang: string): CodeExample[];
/**
 * Coerces an unknown value into a safe `JsonValue` recursively.
 * @param val The value to coerce.
 * @returns A valid `JsonValue`.
 */
export declare function toJsonValue(val: unknown): JsonValue;
/**
 * Parses a raw info object into a normalized InfoObject.
 * @param obj The raw info object from the spec.
 * @returns A normalized InfoObject.
 * @throws {Error} If the info object is missing.
 */
export declare function parseInfo(obj: unknown): InfoObject;
/**
 * Parses a raw contact object into a normalized ContactObject.
 * @param obj The raw contact object from the spec.
 * @returns A normalized ContactObject.
 */
export declare function parseContact(obj: unknown): ContactObject;
/**
 * Parses a raw license object into a normalized LicenseObject.
 * @param obj The raw license object from the spec.
 * @returns A normalized LicenseObject.
 */
export declare function parseLicense(obj: unknown): LicenseObject;
/**
 * Parses a raw server variable object into a normalized ServerVariableObject.
 * @param obj The raw server variable object from the spec.
 * @returns A normalized ServerVariableObject.
 */
export declare function parseServerVariable(obj: unknown): ServerVariableObject;
/**
 * Parses a raw server object into a normalized ServerObject.
 * @param obj The raw server object from the spec.
 * @returns A normalized ServerObject.
 */
export declare function parseServer(obj: unknown): ServerObject;
/**
 * Parses a raw reference object into a normalized ReferenceObject.
 * @param obj The raw reference object from the spec.
 * @returns A normalized ReferenceObject.
 */
export declare function parseReference(obj: unknown): ReferenceObject;
/**
 * Checks if an object is a ReferenceObject.
 * @param obj The object to check.
 * @returns True if the object has a string `$ref` property.
 */
export declare function isReference(obj: unknown): obj is ReferenceObject;
/**
 * Parses a raw discriminator object into a normalized DiscriminatorObject.
 * @param obj The raw discriminator object from the spec.
 * @returns A normalized DiscriminatorObject.
 */
export declare function parseDiscriminator(obj: Record<string, unknown>): DiscriminatorObject;
/**
 * Parses a raw XML metadata object into a normalized XMLObject.
 * @param obj The raw XML object from the spec.
 * @returns A normalized XMLObject.
 */
export declare function parseXml(obj: Record<string, unknown>): XMLObject;
/**
 * Parses a raw schema object into a normalized SchemaObject or ReferenceObject.
 * @param obj The raw schema object from the spec.
 * @returns A normalized SchemaObject or ReferenceObject.
 */
export declare function parseSchema(obj: unknown): SchemaObject | ReferenceObject;
/**
 * Parses a raw example object into a normalized ExampleObject or ReferenceObject.
 * @param obj The raw example object from the spec.
 * @returns A normalized ExampleObject or ReferenceObject.
 */
export declare function parseExample(obj: unknown): ExampleObject | ReferenceObject;
/**
 * Parses a raw header object into a normalized HeaderObject or ReferenceObject.
 * @param obj The raw header object from the spec.
 * @returns A normalized HeaderObject or ReferenceObject.
 */
export declare function parseHeader(obj: unknown): HeaderObject | ReferenceObject;
/**
 * Parses a raw encoding object into a normalized EncodingObject.
 * @param obj The raw encoding object from the spec.
 * @returns A normalized EncodingObject.
 */
export declare function parseEncoding(obj: unknown): EncodingObject;
/**
 * Parses a raw media type object into a normalized MediaTypeObject.
 * @param obj The raw media type object from the spec.
 * @returns A normalized MediaTypeObject.
 */
export declare function parseMediaType(obj: unknown): MediaTypeObject;
/**
 * Parses a raw request body object into a normalized RequestBodyObject or ReferenceObject.
 * @param obj The raw request body object from the spec.
 * @returns A normalized RequestBodyObject or ReferenceObject.
 */
export declare function parseRequestBody(obj: unknown): RequestBodyObject | ReferenceObject;
/**
 * Parses a raw parameter object into a normalized ParameterObject or ReferenceObject.
 * @param obj The raw parameter object from the spec.
 * @returns A normalized ParameterObject or ReferenceObject.
 */
export declare function parseParameter(obj: unknown): ParameterObject | ReferenceObject;
/**
 * Parses a raw link object into a normalized LinkObject or ReferenceObject.
 * @param obj The raw link object from the spec.
 * @returns A normalized LinkObject or ReferenceObject.
 */
export declare function parseLink(obj: unknown): LinkObject | ReferenceObject;
/**
 * Parses a raw response object into a normalized ResponseObject or ReferenceObject.
 * @param obj The raw response object from the spec.
 * @returns A normalized ResponseObject or ReferenceObject.
 */
export declare function parseResponse(obj: unknown): ResponseObject | ReferenceObject;
/**
 * Parses a raw responses object into a normalized ResponsesObject.
 * @param obj The raw responses object from the spec.
 * @returns A normalized ResponsesObject.
 */
export declare function parseResponses(obj: unknown): ResponsesObject;
/**
 * Parses a raw callback object into a normalized CallbackObject or ReferenceObject.
 * @param obj The raw callback object from the spec.
 * @returns A normalized CallbackObject or ReferenceObject.
 */
export declare function parseCallback(obj: unknown): CallbackObject | ReferenceObject;
/**
 * Parses a raw external documentation object into a normalized ExternalDocumentationObject.
 * @param obj The raw external documentation object from the spec.
 * @returns A normalized ExternalDocumentationObject.
 */
export declare function parseExternalDocs(obj: unknown): ExternalDocumentationObject;
/**
 * Parses a raw security requirement object into a normalized SecurityRequirementObject.
 * @param obj The raw security requirement object from the spec.
 * @returns A normalized SecurityRequirementObject.
 */
export declare function parseSecurityRequirement(obj: unknown): SecurityRequirementObject;
/**
 * Parses a raw operation object into a normalized OperationObject.
 * @param obj The raw operation object from the spec.
 * @returns A normalized OperationObject.
 */
export declare function parseOperation(obj: unknown): OperationObject;
/**
 * Parses a raw path item object into a normalized PathItemObject or ReferenceObject.
 * @param obj The raw path item object from the spec.
 * @returns A normalized PathItemObject or ReferenceObject.
 */
export declare function parsePathItem(obj: unknown): PathItemObject | ReferenceObject;
/**
 * Parses a raw paths object into a normalized PathsObject.
 * @param obj The raw paths object from the spec.
 * @returns A normalized PathsObject.
 */
export declare function parsePaths(obj: unknown): PathsObject;
/**
 * Parses a raw OAuth flow object into a normalized OAuthFlowObject.
 * @param obj The raw OAuth flow object from the spec.
 * @returns A normalized OAuthFlowObject.
 */
export declare function parseOAuthFlow(obj: unknown): OAuthFlowObject;
/**
 * Parses a raw security scheme object into a normalized SecuritySchemeObject or ReferenceObject.
 * @param obj The raw security scheme object from the spec.
 * @returns A normalized SecuritySchemeObject or ReferenceObject.
 */
export declare function parseSecurityScheme(obj: unknown): SecuritySchemeObject | ReferenceObject;
/**
 * Parses a raw components object into a normalized ComponentsObject.
 * @param obj The raw components object from the spec.
 * @returns A normalized ComponentsObject.
 */
export declare function parseComponents(obj: unknown): ComponentsObject;
/**
 * Parses a raw tag object into a normalized TagObject.
 * @param obj The raw tag object from the spec.
 * @returns A normalized TagObject.
 */
export declare function parseTag(obj: unknown): TagObject;
/**
 * Normalizes an OpenAPI 3.2.0, Swagger 2.0, or Arazzo 1.1.0 specification string (JSON or YAML)
 * into the internal `DocData` representation.
 * @param specContent Raw OpenAPI or Arazzo spec string (YAML/JSON).
 * @param companionArazzoContent Optional companion Arazzo 1.1.0 spec string (YAML/JSON) to link with an OpenAPI spec.
 * @returns Normalized DocData.
 * @throws {Error} If the spec format is invalid.
 */
export declare function normalizeSpec(specContent: string, companionArazzoContent?: string): DocData;
/**
 * Extracts all operations (including standard HTTP methods and `additionalOperations`) from a `PathItemObject`.
 * @param pathItem The path item object to inspect.
 * @returns Array of `[methodName, OperationObject]` tuples.
 */
export declare function getPathOperations(pathItem: PathItemObject): Array<[string, OperationObject]>;
/**
 * Maps generated SDK code examples to their respective operations and Arazzo workflows in the documentation data.
 * @param docData The documentation data to update.
 * @param generatedFiles The list of generated code examples.
 */
export declare function mapSdkExamples(docData: DocData, generatedFiles: CodeExample[]): void;
