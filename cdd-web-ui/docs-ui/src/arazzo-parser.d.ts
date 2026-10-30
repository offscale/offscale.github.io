/**
 * Arazzo 1.1.0 Parser, Normalizer, Runtime Expression AST, and Cross-Spec Linker.
 * @module arazzo-parser
 */
import { Arazzo110, ArazzoInfoObject, SourceDescriptionObject, WorkflowObject, StepObject, ArazzoParameterObject, ReusableObject, ArazzoRequestBodyObject, PayloadReplacementObject, CriterionObject, CriterionExpressionTypeObject, SelectorObject, SuccessActionObject, FailureActionObject, ArazzoComponentsObject, ParsedRuntimeExpression, LinkedOperationTarget, WorkflowDag, NormalizedStep, NormalizedWorkflow } from './arazzo-types';
import { JsonValue, SchemaObject, ReferenceObject, OpenAPI320 } from './openapi-types';
/**
 * Extracts `^x-` specification extension keys from a record into a typed extensions dictionary.
 * @param rec The record to extract extensions from.
 * @returns A map of extension keys to `JsonValue` values, or `undefined` if none are present.
 */
export declare function extractExtensions(rec: Record<string, unknown>): Record<string, JsonValue> | undefined;
/**
 * Represents a raw parsed Arazzo specification record prior to normalization.
 */
export interface RawArazzoRecord extends Record<string, unknown> {
    /** The Arazzo specification version string. */
    arazzo: string;
    /** Raw unparsed workflow entries array. */
    workflows: unknown[];
}
/**
 * Checks whether a parsed object represents an Arazzo 1.0.x or 1.1.x specification.
 * @param parsed The unknown parsed JSON/YAML value.
 * @returns True if the value is an Arazzo specification record.
 */
export declare function isArazzoSpec(parsed: unknown): parsed is RawArazzoRecord;
/**
 * Detects the specification kind ('openapi', 'swagger2', 'arazzo', or 'unknown') from a raw YAML/JSON string.
 * @param rawSpec The raw YAML or JSON specification string.
 * @returns The detected specification kind.
 */
export declare function detectSpecKind(rawSpec: string): 'openapi' | 'swagger2' | 'arazzo' | 'unknown';
/**
 * Parses a raw Arazzo info object into a normalized `ArazzoInfoObject`.
 * @param obj The raw info object from the Arazzo document.
 * @returns A normalized `ArazzoInfoObject`.
 * @throws {Error} If the info object is not a valid record.
 */
export declare function parseArazzoInfo(obj: unknown): ArazzoInfoObject;
/**
 * Parses a raw source description object into a normalized `SourceDescriptionObject`.
 * @param obj The raw source description object.
 * @returns A normalized `SourceDescriptionObject`.
 */
export declare function parseSourceDescription(obj: unknown): SourceDescriptionObject;
/**
 * Checks whether an unknown object is an Arazzo `ReusableObject` (having a `reference` string).
 * @param obj The object to inspect.
 * @returns True if `obj` is a `ReusableObject`.
 */
export declare function isReusableObject(obj: unknown): obj is ReusableObject;
/**
 * Parses a raw reusable object into a normalized `ReusableObject`.
 * @param obj The raw reusable object.
 * @returns A normalized `ReusableObject`.
 */
export declare function parseReusableObject(obj: unknown): ReusableObject;
/**
 * Checks whether an unknown object is a `SelectorObject` (having `context` and `selector` strings).
 * @param obj The object to inspect.
 * @returns True if `obj` is a `SelectorObject`.
 */
export declare function isSelectorObject(obj: unknown): obj is SelectorObject;
/**
 * Parses a raw criterion expression type object into a normalized `CriterionExpressionTypeObject`.
 * @param obj The raw expression type object.
 * @returns A normalized `CriterionExpressionTypeObject`.
 */
export declare function parseCriterionExpressionType(obj: Record<string, unknown>): CriterionExpressionTypeObject;
/**
 * Parses a raw selector object into a normalized `SelectorObject`.
 * @param obj The raw selector object.
 * @returns A normalized `SelectorObject`.
 */
export declare function parseSelector(obj: unknown): SelectorObject;
/**
 * Parses a raw Arazzo parameter object into a normalized `ArazzoParameterObject`.
 * @param obj The raw parameter object.
 * @returns A normalized `ArazzoParameterObject`.
 */
export declare function parseArazzoParameter(obj: unknown): ArazzoParameterObject;
/**
 * Parses a parameter or reusable object entry.
 * @param obj The raw parameter or reusable object.
 * @returns Either an `ArazzoParameterObject` or a `ReusableObject`.
 */
export declare function parseArazzoParameterOrReusable(obj: unknown): ArazzoParameterObject | ReusableObject;
/**
 * Parses a raw payload replacement object into a normalized `PayloadReplacementObject`.
 * @param obj The raw payload replacement object.
 * @returns A normalized `PayloadReplacementObject`.
 */
export declare function parsePayloadReplacement(obj: unknown): PayloadReplacementObject;
/**
 * Parses a raw Arazzo request body object into a normalized `ArazzoRequestBodyObject`.
 * @param obj The raw request body object.
 * @returns A normalized `ArazzoRequestBodyObject`.
 */
export declare function parseArazzoRequestBody(obj: unknown): ArazzoRequestBodyObject;
/**
 * Parses a raw criterion object into a normalized `CriterionObject`.
 * @param obj The raw criterion object.
 * @returns A normalized `CriterionObject`.
 */
export declare function parseCriterion(obj: unknown): CriterionObject;
/**
 * Parses a raw success action object into a normalized `SuccessActionObject`.
 * @param obj The raw success action object.
 * @returns A normalized `SuccessActionObject`.
 */
export declare function parseSuccessAction(obj: unknown): SuccessActionObject;
/**
 * Parses a success action or reusable object entry.
 * @param obj The raw success action or reusable object.
 * @returns Either a `SuccessActionObject` or a `ReusableObject`.
 */
export declare function parseSuccessActionOrReusable(obj: unknown): SuccessActionObject | ReusableObject;
/**
 * Parses a raw failure action object into a normalized `FailureActionObject`.
 * @param obj The raw failure action object.
 * @returns A normalized `FailureActionObject`.
 */
export declare function parseFailureAction(obj: unknown): FailureActionObject;
/**
 * Parses a failure action or reusable object entry.
 * @param obj The raw failure action or reusable object.
 * @returns Either a `FailureActionObject` or a `ReusableObject`.
 */
export declare function parseFailureActionOrReusable(obj: unknown): FailureActionObject | ReusableObject;
/**
 * Parses an outputs map (`Record<string, string | SelectorObject>`) from a workflow or step.
 * @param obj The raw outputs record.
 * @returns A normalized map of output names to runtime expression strings or `SelectorObject` instances.
 */
export declare function parseArazzoOutputs(obj: unknown): Record<string, string | SelectorObject>;
/**
 * Parses a raw step object into a normalized `StepObject`.
 * @param obj The raw step object.
 * @returns A normalized `StepObject`.
 */
export declare function parseStep(obj: unknown): StepObject;
/**
 * Parses a raw workflow object into a normalized `WorkflowObject`.
 * @param obj The raw workflow object.
 * @returns A normalized `WorkflowObject`.
 */
export declare function parseWorkflow(obj: unknown): WorkflowObject;
/**
 * Parses a raw Arazzo components object into a normalized `ArazzoComponentsObject`.
 * @param obj The raw components object.
 * @returns A normalized `ArazzoComponentsObject`.
 */
export declare function parseArazzoComponents(obj: unknown): ArazzoComponentsObject;
/**
 * Parses a raw Arazzo 1.1.0 specification string (JSON or YAML) into a strongly-typed `Arazzo110` object.
 * @param rawSpec The raw Arazzo YAML or JSON string.
 * @returns A normalized `Arazzo110` specification object.
 * @throws {Error} If the input is not a valid Arazzo specification.
 */
export declare function parseArazzoSpec(rawSpec: string): Arazzo110;
/**
 * Extracts the component key from an Arazzo `$components.<category>.<key>` reference string.
 * Returns `null` if the reference explicitly targets a different `$components.<otherCategory>` namespace.
 * @param reference The raw reference string (e.g. `'$components.parameters.authHeader'`).
 * @param category The expected component category (`'parameters'`, `'successActions'`, `'failureActions'`).
 * @returns An object with `key` (the leaf name) and `matchesCategory` (whether it is valid for this category).
 */
export declare function extractComponentKey(reference: string, category: 'parameters' | 'successActions' | 'failureActions'): {
    /** The extracted component key name. */
    key: string;
    /** True if the reference matches the expected category or is a bare/unprefixed reference. */
    matchesCategory: boolean;
};
/**
 * Resolves an `ArazzoParameterObject | ReusableObject` against `components.parameters`, applying any `value` override.
 * @param item The parameter or reusable reference object.
 * @param components Optional Arazzo components dictionary.
 * @returns A resolved `ArazzoParameterObject`.
 */
export declare function resolveArazzoReusableParameter(item: ArazzoParameterObject | ReusableObject, components?: ArazzoComponentsObject): ArazzoParameterObject;
/**
 * Resolves a `SuccessActionObject | ReusableObject` against `components.successActions`.
 * @param item The success action or reusable reference object.
 * @param components Optional Arazzo components dictionary.
 * @returns A resolved `SuccessActionObject`.
 */
export declare function resolveArazzoSuccessAction(item: SuccessActionObject | ReusableObject, components?: ArazzoComponentsObject): SuccessActionObject;
/**
 * Resolves a `FailureActionObject | ReusableObject` against `components.failureActions`.
 * @param item The failure action or reusable reference object.
 * @param components Optional Arazzo components dictionary.
 * @returns A resolved `FailureActionObject`.
 */
export declare function resolveArazzoFailureAction(item: FailureActionObject | ReusableObject, components?: ArazzoComponentsObject): FailureActionObject;
/**
 * Resolves a workflow `inputs` schema or reference against `components.inputs`.
 * @param inputs The workflow inputs schema or reference.
 * @param components Optional Arazzo components dictionary.
 * @returns A resolved `SchemaObject`, or `undefined` if not present.
 */
export declare function resolveWorkflowInputSchema(inputs: SchemaObject | ReferenceObject | undefined, components?: ArazzoComponentsObject): SchemaObject | undefined;
/**
 * Dereferences and merges workflow-level default parameters with step-level parameters.
 * Step-level parameters with the same `(name, in)` pair override workflow-level parameters.
 * @param workflowParams Optional workflow-level parameters.
 * @param stepParams Optional step-level parameters.
 * @param components Optional Arazzo components dictionary.
 * @returns An array of merged `ArazzoParameterObject` items.
 */
export declare function mergeWorkflowAndStepParameters(workflowParams: (ArazzoParameterObject | ReusableObject)[] | undefined, stepParams: (ArazzoParameterObject | ReusableObject)[] | undefined, components?: ArazzoComponentsObject): ArazzoParameterObject[];
/**
 * Parses an Arazzo 1.1.0 runtime expression or template string and extracts all referenced steps, inputs, workflows, and sources.
 * @param expr The expression string to analyze.
 * @returns A `ParsedRuntimeExpression` containing root classification and dependency references.
 */
export declare function parseRuntimeExpression(expr: string): ParsedRuntimeExpression;
/**
 * Unescapes RFC 6901 JSON Pointer tokens (`~1` -> `/`, `~0` -> `~`).
 * @param token The escaped JSON Pointer token.
 * @returns The unescaped string.
 */
export declare function unescapeJsonPointer(token: string): string;
/**
 * Collects all step IDs referenced via `$steps.<stepId>` across a step's parameters, requestBody, criteria, actions, and outputs.
 * @param step The step object to inspect.
 * @param mergedParams Already-merged parameters for the step.
 * @returns Deduplicated array of upstream `stepId` strings referenced by this step.
 */
export declare function extractStepReferencesFromStep(step: StepObject, mergedParams: ArazzoParameterObject[]): string[];
/**
 * Builds the workflow-level and step-level dependency graphs (DAGs) and topological execution orders for an Arazzo document.
 * @param workflowsOrSpec The list of workflows or the full `Arazzo110` specification.
 * @param components Optional Arazzo components dictionary for parameter dereferencing.
 * @returns A `WorkflowDag` containing topological orders, directed edges, and cycle detection status.
 */
export declare function buildWorkflowDag(workflowsOrSpec: WorkflowObject[] | Arazzo110, components?: ArazzoComponentsObject): WorkflowDag;
/**
 * Resolves a step's `operationId`, `operationPath`, `channelPath`, or `workflowId` against an optional OpenAPI 3.2.0 specification.
 * @param step The Arazzo `StepObject` to link.
 * @param openApiSpec Optional parsed OpenAPI 3.2.0 specification.
 * @param sourceDescriptions Optional source descriptions list from the Arazzo document.
 * @returns A `LinkedOperationTarget` describing the target operation, channel, or sub-workflow, or `undefined` if none is specified.
 */
export declare function linkStepToOpenApiOperation(step: StepObject, openApiSpec?: OpenAPI320, sourceDescriptions?: SourceDescriptionObject[]): LinkedOperationTarget | undefined;
/**
 * Generates a multi-step bash / cURL execution preview script for an Arazzo workflow.
 * @param workflow The workflow object.
 * @param normalizedSteps The normalized steps for the workflow.
 * @param baseUrl Base URL for HTTP requests.
 * @returns A formatted shell script string illustrating the workflow execution.
 */
export declare function generateWorkflowCliPreview(workflow: WorkflowObject, normalizedSteps: NormalizedStep[], baseUrl?: string): string;
/**
 * Normalizes all workflows in an `Arazzo110` specification into `NormalizedWorkflow` objects.
 * @param arazzoSpec The parsed `Arazzo110` specification.
 * @param openApiSpec Optional companion `OpenAPI320` specification for operation linking.
 * @returns An array of `NormalizedWorkflow` items.
 */
export declare function normalizeArazzoWorkflows(arazzoSpec: Arazzo110, openApiSpec?: OpenAPI320): NormalizedWorkflow[];
