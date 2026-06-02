/**
 * @module openapi-types
 * Custom TypeScript types for OpenAPI 3.2.0 Specification.
 */
/**
 * The root document object of the OpenAPI document.
 */
export interface OpenAPI320 {
    /** The version of the OpenAPI Specification that the document uses. */
    openapi: string;
    /** Provides metadata about the API. */
    info: InfoObject;
    /** The default value for the $schema keyword within Schema Objects. */
    jsonSchemaDialect?: string;
    /** An array of Server Objects, which provide connectivity information to a target server. */
    servers?: ServerObject[];
    /** The available paths and operations for the API. */
    paths?: PathsObject;
    /** The available webhooks that can be configured for this API. */
    webhooks?: Record<string, PathItemObject | ReferenceObject>;
    /** An element to hold various schemas for the document. */
    components?: ComponentsObject;
    /** A declaration of which security mechanisms can be used across the API. */
    security?: SecurityRequirementObject[];
    /** A list of tags used by the document with additional metadata. */
    tags?: TagObject[];
    /** Additional external documentation. */
    externalDocs?: ExternalDocumentationObject;
}
/**
 * The object provides metadata about the API.
 */
export interface InfoObject {
    /** The title of the API. */
    title: string;
    /** A short summary of the API. */
    summary?: string;
    /** A description of the API. */
    description?: string;
    /** A URL to the Terms of Service for the API. */
    termsOfService?: string;
    /** The contact information for the exposed API. */
    contact?: ContactObject;
    /** The license information for the exposed API. */
    license?: LicenseObject;
    /** The version of the OpenAPI document. */
    version: string;
}
/**
 * Contact information for the exposed API.
 */
export interface ContactObject {
    /** The identifying name of the contact person/organization. */
    name?: string;
    /** The URL pointing to the contact information. */
    url?: string;
    /** The email address of the contact person/organization. */
    email?: string;
}
/**
 * License information for the exposed API.
 */
export interface LicenseObject {
    /** The license name used for the API. */
    name: string;
    /** An SPDX license expression for the API. */
    identifier?: string;
    /** A URL to the license used for the API. */
    url?: string;
}
/**
 * An object representing a Server.
 */
export interface ServerObject {
    /** A URL to the target host. */
    url: string;
    /** An optional string describing the host designated by the URL. */
    description?: string;
    /** A map between a variable name and its value. */
    variables?: Record<string, ServerVariableObject>;
}
/**
 * An object representing a Server Variable for server URL template substitution.
 */
export interface ServerVariableObject {
    /** An enumeration of string values to be used if the substitution options are from a limited set. */
    enum?: string[];
    /** The default value to use for substitution. */
    default: string;
    /** An optional description for the server variable. */
    description?: string;
}
/**
 * Holds the relative paths to the individual endpoints and their operations.
 */
export interface PathsObject {
    /** A relative path to an individual endpoint. */
    [path: string]: PathItemObject;
}
/**
 * Describes the operations available on a single path.
 */
export interface PathItemObject {
    /** Allows for a reference to a definition. */
    $ref?: string;
    /** An optional, string summary, intended to apply to all operations in this path. */
    summary?: string;
    /** An optional, string description, intended to apply to all operations in this path. */
    description?: string;
    /** A definition of a GET operation on this path. */
    get?: OperationObject;
    /** A definition of a PUT operation on this path. */
    put?: OperationObject;
    /** A definition of a POST operation on this path. */
    post?: OperationObject;
    /** A definition of a DELETE operation on this path. */
    delete?: OperationObject;
    /** A definition of an OPTIONS operation on this path. */
    options?: OperationObject;
    /** A definition of a HEAD operation on this path. */
    head?: OperationObject;
    /** A definition of a PATCH operation on this path. */
    patch?: OperationObject;
    /** A definition of a TRACE operation on this path. */
    trace?: OperationObject;
    /** A definition of a QUERY operation on this path. */
    query?: OperationObject;
    /** A map of custom HTTP methods to subcommands. */
    additionalOperations?: Record<string, OperationObject>;
    /** An alternative server array to service all operations in this path. */
    servers?: ServerObject[];
    /** A list of parameters that are applicable for all the operations described under this path. */
    parameters?: (ParameterObject | ReferenceObject)[];
}
/**
 * Describes a single API operation on a path.
 */
export interface OperationObject {
    /** A list of tags for API documentation control. */
    tags?: string[];
    /** A short summary of what the operation does. */
    summary?: string;
    /** A verbose explanation of the operation behavior. */
    description?: string;
    /** Additional external documentation for this operation. */
    externalDocs?: ExternalDocumentationObject;
    /** Unique string used to identify the operation. */
    operationId?: string;
    /** A list of parameters that are applicable for this operation. */
    parameters?: (ParameterObject | ReferenceObject)[];
    /** The request body applicable for this operation. */
    requestBody?: RequestBodyObject | ReferenceObject;
    /** The list of possible responses as they are returned from executing this operation. */
    responses?: ResponsesObject;
    /** A map of possible out-of band callbacks related to the parent operation. */
    callbacks?: Record<string, CallbackObject | ReferenceObject>;
    /** Declares this operation to be deprecated. */
    deprecated?: boolean;
    /** A declaration of which security mechanisms can be used for this operation. */
    security?: SecurityRequirementObject[];
    /** An alternative server array to service this operation. */
    servers?: ServerObject[];
}
/**
 * Describes a single operation parameter.
 */
export interface ParameterObject {
    /** The name of the parameter. */
    name: string;
    /** The location of the parameter. */
    in: 'query' | 'header' | 'path' | 'cookie';
    /** A brief description of the parameter. */
    description?: string;
    /** Determines whether this parameter is mandatory. */
    required?: boolean;
    /** Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. */
    deprecated?: boolean;
    /** Sets the ability to pass empty-valued parameters. */
    allowEmptyValue?: boolean;
    /** Describes how the parameter value will be serialized. */
    style?: string;
    /** When this is true, parameter values of type array or object generate separate parameters. */
    explode?: boolean;
    /** Determines whether the parameter value SHOULD allow reserved characters. */
    allowReserved?: boolean;
    /** The schema defining the type used for the parameter. */
    schema?: SchemaObject | ReferenceObject;
    /** Example of the parameter's potential value. */
    example?: any;
    /** Examples of the parameter's potential value. */
    examples?: Record<string, ExampleObject | ReferenceObject>;
    /** A map containing the representations for the parameter. */
    content?: Record<string, MediaTypeObject>;
}
/**
 * Describes a single request body.
 */
export interface RequestBodyObject {
    /** A brief description of the request body. */
    description?: string;
    /** The content of the request body. */
    content: Record<string, MediaTypeObject>;
    /** Determines if the request body is required in the request. */
    required?: boolean;
}
/**
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 */
export interface MediaTypeObject {
    /** The schema defining the content of the request, response, or parameter. */
    schema?: SchemaObject | ReferenceObject;
    /** The schema defining the content of the items of an array. */
    itemSchema?: SchemaObject | ReferenceObject;
    /** Example of the media type. */
    example?: any;
    /** Examples of the media type. */
    examples?: Record<string, ExampleObject | ReferenceObject>;
    /** A map between a property name and its encoding information. */
    encoding?: Record<string, EncodingObject>;
    /** A map between a property name and its encoding information for prefix. */
    prefixEncoding?: Record<string, EncodingObject>;
    /** A map between a property name and its encoding information for array items. */
    itemEncoding?: Record<string, EncodingObject>;
}
/**
 * A single encoding definition applied to a single schema property.
 */
export interface EncodingObject {
    /** The Content-Type for encoding a specific property. */
    contentType?: string;
    /** A map allowing additional information to be provided as headers. */
    headers?: Record<string, HeaderObject | ReferenceObject>;
    /** Describes how a specific property value will be serialized. */
    style?: string;
    /** When this is true, property values of type array or object generate separate parameters. */
    explode?: boolean;
    /** Determines whether the parameter value SHOULD allow reserved characters. */
    allowReserved?: boolean;
    /** A map between a property name and its encoding information for prefix. */
    prefixEncoding?: Record<string, EncodingObject>;
    /** A map between a property name and its encoding information for array items. */
    itemEncoding?: Record<string, EncodingObject>;
}
/**
 * A container for the expected responses of an operation.
 */
export interface ResponsesObject {
    /** The documentation of responses other than the ones declared for specific HTTP response codes. */
    default?: ResponseObject | ReferenceObject;
    /** Any HTTP status code can be used as the property name. */
    [statusCode: string]: ResponseObject | ReferenceObject | undefined;
}
/**
 * Describes a single response from an API Operation.
 */
export interface ResponseObject {
    /** A description of the response. */
    description: string;
    /** Maps a header name to its definition. */
    headers?: Record<string, HeaderObject | ReferenceObject>;
    /** A map containing descriptions of potential response payloads. */
    content?: Record<string, MediaTypeObject>;
    /** A map of operations links that can be followed from the response. */
    links?: Record<string, LinkObject | ReferenceObject>;
}
/**
 * A map of possible out-of band callbacks related to the parent operation.
 */
export interface CallbackObject {
    /** A Path Item Object used to define a callback request and expected responses. */
    [expression: string]: PathItemObject | ReferenceObject;
}
/**
 * Example of a data object.
 */
export interface ExampleObject {
    /** Short description for the example. */
    summary?: string;
    /** Embedded literal description of the example. */
    description?: string;
    /** Embedded literal example. */
    value?: any;
    /** A URL that points to the literal example. */
    externalValue?: string;
}
/**
 * The Link object represents a possible design-time link for a response.
 */
export interface LinkObject {
    /** A relative or absolute URI reference to an OAS operation. */
    operationRef?: string;
    /** The name of an existing, resolvable OAS operation, as defined with a unique operationId. */
    operationId?: string;
    /** A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. */
    parameters?: Record<string, any>;
    /** A literal value or {expression} to use as a request body when calling the target operation. */
    requestBody?: any;
    /** A description of the link. */
    description?: string;
    /** A server object to be used by the target operation. */
    server?: ServerObject;
}
/**
 * The Header Object follows the structure of the Parameter Object with name and in excluded.
 */
export interface HeaderObject extends Omit<ParameterObject, 'name' | 'in'> {
}
/**
 * Adds metadata to a single tag that is used by the Operation Object.
 */
export interface TagObject {
    /** The name of the tag. */
    name: string;
    /** A short summary for the tag. */
    summary?: string;
    /** A short description for the tag. */
    description?: string;
    /** Additional external documentation for this tag. */
    externalDocs?: ExternalDocumentationObject;
    /** Nested subcommand groups. */
    parent?: string;
    /** Subcommand grouping logic. */
    kind?: string;
}
/**
 * A simple object to allow referencing other components in the specification, internally and externally.
 */
export interface ReferenceObject {
    /** The reference string. */
    $ref: string;
    /** A short summary which by default SHOULD override that of the referenced component. */
    summary?: string;
    /** A description which by default SHOULD override that of the referenced component. */
    description?: string;
}
/**
 * The Schema Object allows the definition of input and output data types.
 */
export interface SchemaObject {
    /** The title of the schema. */
    title?: string;
    /** A value that the instance must be a multiple of. */
    multipleOf?: number;
    /** The maximum value for a number. */
    maximum?: number;
    /** Whether the maximum value is exclusive. */
    exclusiveMaximum?: boolean;
    /** The minimum value for a number. */
    minimum?: number;
    /** Whether the minimum value is exclusive. */
    exclusiveMinimum?: boolean;
    /** The maximum length of a string. */
    maxLength?: number;
    /** The minimum length of a string. */
    minLength?: number;
    /** A regular expression that the string must match. */
    pattern?: string;
    /** The maximum number of items in an array. */
    maxItems?: number;
    /** The minimum number of items in an array. */
    minItems?: number;
    /** Whether the items in an array must be unique. */
    uniqueItems?: boolean;
    /** The maximum number of properties in an object. */
    maxProperties?: number;
    /** The minimum number of properties in an object. */
    minProperties?: number;
    /** The list of required properties for an object. */
    required?: string[];
    /** A list of valid values for the instance. */
    enum?: any[];
    /** The data type of the instance. */
    type?: string;
    /** An array of schemas that the instance must match all of. */
    allOf?: (SchemaObject | ReferenceObject)[];
    /** An array of schemas that the instance must match one of. */
    oneOf?: (SchemaObject | ReferenceObject)[];
    /** An array of schemas that the instance must match any of. */
    anyOf?: (SchemaObject | ReferenceObject)[];
    /** A schema that the instance must not match. */
    not?: SchemaObject | ReferenceObject;
    /** The schema for items in an array. */
    items?: SchemaObject | ReferenceObject;
    /** The properties of an object. */
    properties?: Record<string, SchemaObject | ReferenceObject>;
    /** The schema for additional properties in an object. */
    additionalProperties?: SchemaObject | ReferenceObject | boolean;
    /** A description of the schema. */
    description?: string;
    /** The format of the data. */
    format?: string;
    /** The default value for the schema. */
    default?: any;
    /** Whether the value can be null. */
    nullable?: boolean;
    /** Adds support for polymorphism. */
    discriminator?: DiscriminatorObject;
    /** Whether the value is read-only. */
    readOnly?: boolean;
    /** Whether the value is write-only. */
    writeOnly?: boolean;
    /** Adds additional metadata to describe the XML representation of this property. */
    xml?: XMLObject;
    /** Additional external documentation for this schema. */
    externalDocs?: ExternalDocumentationObject;
    /** A free-form property to include an example of an instance for this schema. */
    example?: any;
    /** Specifies that a schema is deprecated and SHOULD be transitioned out of usage. */
    deprecated?: boolean;
}
/**
 * Adds support for polymorphism.
 */
export interface DiscriminatorObject {
    /** The name of the property in the payload that will hold the discriminator value. */
    propertyName: string;
    /** An object to hold mappings between payload values and schema names or references. */
    mapping?: Record<string, string>;
    /** Fallback default mapping. */
    defaultMapping?: string;
}
/**
 * A metadata object that allows for more fine-tuned XML model definitions.
 */
export interface XMLObject {
    /** Replaces the name of the element/attribute used for the described schema property. */
    name?: string;
    /** The URI of the namespace definition. */
    namespace?: string;
    /** The prefix to be used for the name. */
    prefix?: string;
    /** Declares whether the property definition translates to an element attribute instead of an element. */
    attribute?: boolean;
    /** MAY be used only for an array definition. */
    wrapped?: boolean;
    /** Precise XML DOM mapping controls. */
    nodeType?: string;
}
/**
 * Lists the required security schemes to execute this operation.
 */
export interface SecurityRequirementObject {
    /** Each name MUST correspond to a security scheme which is declared in the Security Schemes under the Components Object. */
    [name: string]: string[];
}
/**
 * Holds a set of reusable objects for different aspects of the OAS.
 */
export interface ComponentsObject {
    /** An object to hold reusable Schema Objects. */
    schemas?: Record<string, SchemaObject | ReferenceObject>;
    /** An object to hold reusable Response Objects. */
    responses?: Record<string, ResponseObject | ReferenceObject>;
    /** An object to hold reusable Parameter Objects. */
    parameters?: Record<string, ParameterObject | ReferenceObject>;
    /** An object to hold reusable Example Objects. */
    examples?: Record<string, ExampleObject | ReferenceObject>;
    /** An object to hold reusable Request Body Objects. */
    requestBodies?: Record<string, RequestBodyObject | ReferenceObject>;
    /** An object to hold reusable Header Objects. */
    headers?: Record<string, HeaderObject | ReferenceObject>;
    /** An object to hold reusable Security Scheme Objects. */
    securitySchemes?: Record<string, SecuritySchemeObject | ReferenceObject>;
    /** An object to hold reusable Link Objects. */
    links?: Record<string, LinkObject | ReferenceObject>;
    /** An object to hold reusable Callback Objects. */
    callbacks?: Record<string, CallbackObject | ReferenceObject>;
    /** An object to hold reusable Path Item Objects. */
    pathItems?: Record<string, PathItemObject | ReferenceObject>;
    /** An object to hold reusable Media Type Objects. */
    mediaTypes?: Record<string, MediaTypeObject | ReferenceObject>;
}
/**
 * Defines a security scheme that can be used by the operations.
 */
export interface SecuritySchemeObject {
    /** The type of the security scheme. */
    type: 'apiKey' | 'http' | 'mutualTLS' | 'oauth2' | 'openIdConnect';
    /** A short description for security scheme. */
    description?: string;
    /** The name of the header, query or cookie parameter to be used. */
    name?: string;
    /** The location of the API key. */
    in?: 'query' | 'header' | 'cookie';
    /** The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235. */
    scheme?: string;
    /** A hint to the client to identify how the bearer token is formatted. */
    bearerFormat?: string;
    /** An object containing configuration information for the flow types supported. */
    flows?: OAuthFlowsObject;
    /** OpenId Connect URL to discover OAuth2 configuration values. */
    openIdConnectUrl?: string;
    /** OAuth2 metadata discovery. */
    oauth2MetadataUrl?: string;
}
/**
 * Allows configuration of the supported OAuth Flows.
 */
export interface OAuthFlowsObject {
    /** Configuration for the OAuth Implicit flow. */
    implicit?: OAuthFlowObject;
    /** Configuration for the OAuth Resource Owner Password flow. */
    password?: OAuthFlowObject;
    /** Configuration for the OAuth Client Credentials flow. */
    clientCredentials?: OAuthFlowObject;
    /** Configuration for the OAuth Authorization Code flow. */
    authorizationCode?: OAuthFlowObject;
    /** Support for the Device Authorization grant flow. */
    deviceAuthorization?: OAuthFlowObject;
}
/**
 * Configuration details for a supported OAuth Flow.
 */
export interface OAuthFlowObject {
    /** The authorization URL to be used for this flow. */
    authorizationUrl?: string;
    /** The token URL to be used for this flow. */
    tokenUrl?: string;
    /** The URL to be used for obtaining refresh tokens. */
    refreshUrl?: string;
    /** The available scopes for the OAuth2 security scheme. */
    scopes: Record<string, string>;
    /** URL to be used for device flow authentication. */
    deviceAuthorizationUrl?: string;
}
/**
 * Allows referencing an external resource for extended documentation.
 */
export interface ExternalDocumentationObject {
    /** A short description of the target documentation. */
    description?: string;
    /** The URL for the target documentation. */
    url: string;
}
