import { DocData, CodeExample, InfoObject, ContactObject, LicenseObject, ServerObject, ServerVariableObject, PathsObject, PathItemObject, OperationObject, ParameterObject, RequestBodyObject, MediaTypeObject, ResponsesObject, ResponseObject, HeaderObject, LinkObject, CallbackObject, ExampleObject, ReferenceObject, EncodingObject, TagObject, ExternalDocumentationObject, SecurityRequirementObject, ComponentsObject, SchemaObject, SecuritySchemeObject, OAuthFlowObject } from './types';
/**
 * Parses a raw info object into a normalized InfoObject.
 * @param obj The raw info object from the spec.
 * @returns A normalized InfoObject.
 * @throws {Error} If the info object is missing.
 */
export declare function parseInfo(obj: any): InfoObject;
/**
 * Parses a raw contact object into a normalized ContactObject.
 * @param obj The raw contact object from the spec.
 * @returns A normalized ContactObject.
 */
export declare function parseContact(obj: any): ContactObject;
/**
 * Parses a raw license object into a normalized LicenseObject.
 * @param obj The raw license object from the spec.
 * @returns A normalized LicenseObject.
 */
export declare function parseLicense(obj: any): LicenseObject;
/**
 * Parses a raw server variable object into a normalized ServerVariableObject.
 * @param obj The raw server variable object from the spec.
 * @returns A normalized ServerVariableObject.
 */
export declare function parseServerVariable(obj: any): ServerVariableObject;
/**
 * Parses a raw server object into a normalized ServerObject.
 * @param obj The raw server object from the spec.
 * @returns A normalized ServerObject.
 */
export declare function parseServer(obj: any): ServerObject;
/**
 * Parses a raw reference object into a normalized ReferenceObject.
 * @param obj The raw reference object from the spec.
 * @returns A normalized ReferenceObject.
 */
export declare function parseReference(obj: any): ReferenceObject;
/**
 * Checks if an object is a ReferenceObject.
 * @param obj The object to check.
 * @returns True if the object has a $ref property.
 */
export declare function isReference(obj: any): obj is ReferenceObject;
/**
 * Parses a raw schema object into a normalized SchemaObject or ReferenceObject.
 * @param obj The raw schema object from the spec.
 * @returns A normalized SchemaObject or ReferenceObject.
 */
export declare function parseSchema(obj: any): SchemaObject | ReferenceObject;
/**
 * Parses a raw example object into a normalized ExampleObject or ReferenceObject.
 * @param obj The raw example object from the spec.
 * @returns A normalized ExampleObject or ReferenceObject.
 */
export declare function parseExample(obj: any): ExampleObject | ReferenceObject;
/**
 * Parses a raw header object into a normalized HeaderObject or ReferenceObject.
 * @param obj The raw header object from the spec.
 * @returns A normalized HeaderObject or ReferenceObject.
 */
export declare function parseHeader(obj: any): HeaderObject | ReferenceObject;
/**
 * Parses a raw encoding object into a normalized EncodingObject.
 * @param obj The raw encoding object from the spec.
 * @returns A normalized EncodingObject.
 */
export declare function parseEncoding(obj: any): EncodingObject;
/**
 * Parses a raw media type object into a normalized MediaTypeObject.
 * @param obj The raw media type object from the spec.
 * @returns A normalized MediaTypeObject.
 */
export declare function parseMediaType(obj: any): MediaTypeObject;
/**
 * Parses a raw request body object into a normalized RequestBodyObject or ReferenceObject.
 * @param obj The raw request body object from the spec.
 * @returns A normalized RequestBodyObject or ReferenceObject.
 */
export declare function parseRequestBody(obj: any): RequestBodyObject | ReferenceObject;
/**
 * Parses a raw parameter object into a normalized ParameterObject or ReferenceObject.
 * @param obj The raw parameter object from the spec.
 * @returns A normalized ParameterObject or ReferenceObject.
 */
export declare function parseParameter(obj: any): ParameterObject | ReferenceObject;
/**
 * Parses a raw link object into a normalized LinkObject or ReferenceObject.
 * @param obj The raw link object from the spec.
 * @returns A normalized LinkObject or ReferenceObject.
 */
export declare function parseLink(obj: any): LinkObject | ReferenceObject;
/**
 * Parses a raw response object into a normalized ResponseObject or ReferenceObject.
 * @param obj The raw response object from the spec.
 * @returns A normalized ResponseObject or ReferenceObject.
 */
export declare function parseResponse(obj: any): ResponseObject | ReferenceObject;
/**
 * Parses a raw responses object into a normalized ResponsesObject.
 * @param obj The raw responses object from the spec.
 * @returns A normalized ResponsesObject.
 */
export declare function parseResponses(obj: any): ResponsesObject;
/**
 * Parses a raw callback object into a normalized CallbackObject or ReferenceObject.
 * @param obj The raw callback object from the spec.
 * @returns A normalized CallbackObject or ReferenceObject.
 */
export declare function parseCallback(obj: any): CallbackObject | ReferenceObject;
/**
 * Parses a raw external documentation object into a normalized ExternalDocumentationObject.
 * @param obj The raw external documentation object from the spec.
 * @returns A normalized ExternalDocumentationObject.
 */
export declare function parseExternalDocs(obj: any): ExternalDocumentationObject;
/**
 * Parses a raw security requirement object into a normalized SecurityRequirementObject.
 * @param obj The raw security requirement object from the spec.
 * @returns A normalized SecurityRequirementObject.
 */
export declare function parseSecurityRequirement(obj: any): SecurityRequirementObject;
/**
 * Parses a raw operation object into a normalized OperationObject.
 * @param obj The raw operation object from the spec.
 * @returns A normalized OperationObject.
 */
export declare function parseOperation(obj: any): OperationObject;
/**
 * Parses a raw path item object into a normalized PathItemObject or ReferenceObject.
 * @param obj The raw path item object from the spec.
 * @returns A normalized PathItemObject or ReferenceObject.
 */
export declare function parsePathItem(obj: any): PathItemObject | ReferenceObject;
/**
 * Parses a raw paths object into a normalized PathsObject.
 * @param obj The raw paths object from the spec.
 * @returns A normalized PathsObject.
 */
export declare function parsePaths(obj: any): PathsObject;
/**
 * Parses a raw OAuth flow object into a normalized OAuthFlowObject.
 * @param obj The raw OAuth flow object from the spec.
 * @returns A normalized OAuthFlowObject.
 */
export declare function parseOAuthFlow(obj: any): OAuthFlowObject;
/**
 * Parses a raw security scheme object into a normalized SecuritySchemeObject or ReferenceObject.
 * @param obj The raw security scheme object from the spec.
 * @returns A normalized SecuritySchemeObject or ReferenceObject.
 */
export declare function parseSecurityScheme(obj: any): SecuritySchemeObject | ReferenceObject;
/**
 * Parses a raw components object into a normalized ComponentsObject.
 * @param obj The raw components object from the spec.
 * @returns A normalized ComponentsObject.
 */
export declare function parseComponents(obj: any): ComponentsObject;
/**
 * Parses a raw tag object into a normalized TagObject.
 * @param obj The raw tag object from the spec.
 * @returns A normalized TagObject.
 */
export declare function parseTag(obj: any): TagObject;
/**
 * Normalizes an OpenAPI specification string (JSON or YAML) into the internal `DocData` representation.
 * @param specContent Raw OpenAPI spec string (YAML/JSON).
 * @returns Normalized DocData.
 * @throws {Error} If the spec format is invalid.
 */
export declare function normalizeSpec(specContent: string): DocData;
/**
 * Maps generated SDK code examples to their respective operations in the documentation data.
 * @param docData The documentation data to update.
 * @param generatedFiles The list of generated code examples.
 */
export declare function mapSdkExamples(docData: DocData, generatedFiles: CodeExample[]): void;
