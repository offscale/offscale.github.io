/**
 * Transforms a parsed Swagger 2.0 object into an OpenAPI 3.2.0 compatible structure in-place.
 * It maps root properties like host, basePath, and schemes to servers.
 * It moves definitions, parameters, and responses to the components object.
 * It converts securityDefinitions to securitySchemes.
 * It also restructures form and body parameters into requestBody.
 *
 * @param parsed The raw object parsed from YAML or JSON
 */
export declare function transformSwagger2ToOpenAPI3(parsed: any): void;
