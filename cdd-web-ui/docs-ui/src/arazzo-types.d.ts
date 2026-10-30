/**
 * @module arazzo-types
 * Custom TypeScript types for Arazzo 1.1.0 Specification.
 */
import { JsonValue, SchemaObject, ReferenceObject } from './openapi-types';
/**
 * Supported specification types for an Arazzo Source Description Object.
 */
export type SourceDescriptionType = 'openapi' | 'asyncapi' | 'arazzo';
/**
 * Supported message action directions for AsyncAPI steps in Arazzo 1.1.0.
 */
export type StepActionType = 'send' | 'receive';
/**
 * Supported parameter locations for Arazzo 1.1.0 Parameter Objects.
 */
export type ArazzoParameterLocation = 'path' | 'query' | 'querystring' | 'header' | 'cookie';
/**
 * Supported evaluation engine types for Arazzo Criterion Objects.
 */
export type CriterionType = 'simple' | 'regex' | 'jsonpath' | 'xpath';
/**
 * Supported evaluation engine types for Arazzo 1.1.0 Selector Objects.
 */
export type SelectorType = 'jsonpointer' | 'jsonpath' | 'xpath' | 'regex';
/**
 * Supported action types for Arazzo Success Action Objects.
 */
export type SuccessActionType = 'end' | 'goto';
/**
 * Supported action types for Arazzo Failure Action Objects.
 */
export type FailureActionType = 'end' | 'retry' | 'goto';
/**
 * All 17 standard runtime expression root prefixes defined in Arazzo 1.1.0.
 */
export type RuntimeExpressionRoot = '$url' | '$method' | '$statusCode' | '$request.header' | '$request.query' | '$request.path' | '$request.body' | '$response.header' | '$response.query' | '$response.path' | '$response.body' | '$message.header' | '$message.payload' | '$message.body' | '$inputs' | '$outputs' | '$steps' | '$workflows' | '$sourceDescriptions' | '$components';
/**
 * Ordered list of runtime expression prefixes from most specific to least specific.
 */
export declare const RUNTIME_ROOT_PREFIXES: readonly RuntimeExpressionRoot[];
/**
 * The root document object of an Arazzo 1.1.0 Specification.
 */
export interface Arazzo110 {
    /** The semantic version number of the Arazzo Specification (e.g., '1.1.0' or '1.0.1'). */
    arazzo: string;
    /** Optional canonical base URI for resolving relative references in Arazzo 1.1.0. */
    $self?: string | undefined;
    /** Metadata about the workflows defined in the Arazzo document. */
    info: ArazzoInfoObject;
    /** A non-empty list of source descriptions (such as OpenAPI, AsyncAPI, or Arazzo specs) linked by workflows. */
    sourceDescriptions: SourceDescriptionObject[];
    /** A non-empty list of workflows defined in the Arazzo document. */
    workflows: WorkflowObject[];
    /** An element to hold reusable objects for different aspects of the Arazzo Specification. */
    components?: ArazzoComponentsObject | undefined;
    /** Captured `^x-` specification extensions on the root Arazzo object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * Provides metadata about the Arazzo document and its workflows.
 */
export interface ArazzoInfoObject {
    /** A human-readable title of the Arazzo description. */
    title: string;
    /** A short summary of the Arazzo description. */
    summary?: string | undefined;
    /** A description of the purpose of the workflows defined in the Arazzo document. */
    description?: string | undefined;
    /** The version string of the Arazzo document. */
    version: string;
    /** Captured `^x-` specification extensions on the Info object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * Describes a source specification (such as an OpenAPI, AsyncAPI, or Arazzo document) referenced by one or more workflows.
 */
export interface SourceDescriptionObject {
    /** A unique name for the source description matching `^[A-Za-z0-9_\-]+$`. */
    name: string;
    /** A URI or relative path to the source description document. */
    url: string;
    /** The type of the source description ('openapi', 'asyncapi', or 'arazzo'). */
    type?: SourceDescriptionType | undefined;
    /** Captured `^x-` specification extensions on the Source Description object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * Describes the steps to be taken across one or more APIs to achieve an objective.
 */
export interface WorkflowObject {
    /** Unique string used to identify the workflow. */
    workflowId: string;
    /** A summary of the purpose or objective of the workflow. */
    summary?: string | undefined;
    /** A detailed description of the workflow. */
    description?: string | undefined;
    /** A JSON Schema 2020-12 object defining the input parameters for the workflow. */
    inputs?: SchemaObject | ReferenceObject | undefined;
    /** A list of workflows that MUST be completed before this workflow can be processed. */
    dependsOn?: string[] | undefined;
    /** An ordered list of steps where each step represents a call to an API operation or another workflow. */
    steps: StepObject[];
    /** A list of success actions that are applicable for all steps described under this workflow. */
    successActions?: (SuccessActionObject | ReusableObject)[] | undefined;
    /** A list of failure actions that are applicable for all steps described under this workflow. */
    failureActions?: (FailureActionObject | ReusableObject)[] | undefined;
    /** A map between a friendly name and a dynamic output value or SelectorObject. */
    outputs?: Record<string, string | SelectorObject> | undefined;
    /** A list of parameters that are applicable for all steps described under this workflow. */
    parameters?: (ArazzoParameterObject | ReusableObject)[] | undefined;
    /** Captured `^x-` specification extensions on the Workflow object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * Describes a single workflow step which MAY be a call to an API operation, AsyncAPI channel, or another workflow.
 */
export interface StepObject {
    /** Unique string to represent the step within the workflow. */
    stepId: string;
    /** A description of the step. */
    description?: string | undefined;
    /** The name of an existing, resolvable operation, as defined with a unique operationId. */
    operationId?: string | undefined;
    /** A relative or absolute runtime expression + JSON Pointer reference to an OAS operation. */
    operationPath?: string | undefined;
    /** A runtime expression + JSON Pointer reference to an AsyncAPI channel in Arazzo 1.1.0. */
    channelPath?: string | undefined;
    /** The workflowId designating an existing workflow within the Arazzo description or a sourceDescription. */
    workflowId?: string | undefined;
    /** A list of parameters that MUST be passed to an operation or workflow as referenced by this step. */
    parameters?: (ArazzoParameterObject | ReusableObject)[] | undefined;
    /** The request body to pass to an operation as referenced by this step. */
    requestBody?: ArazzoRequestBodyObject | undefined;
    /** A list of assertions to determine the success of the step. */
    successCriteria?: CriterionObject[] | undefined;
    /** An array of success action objects that specify what to do upon step success. */
    onSuccess?: (SuccessActionObject | ReusableObject)[] | undefined;
    /** An array of failure action objects that specify what to do upon step failure. */
    onFailure?: (FailureActionObject | ReusableObject)[] | undefined;
    /** A map between a friendly name and a dynamic output value defined using a runtime expression or SelectorObject. */
    outputs?: Record<string, string | SelectorObject> | undefined;
    /** Maximum time in milliseconds to wait for the step to complete in Arazzo 1.1.0. */
    timeout?: number | undefined;
    /** Runtime expression specifying the message correlation identifier for AsyncAPI steps in Arazzo 1.1.0. */
    correlationId?: string | undefined;
    /** Message action direction ('send' or 'receive') for AsyncAPI channel steps in Arazzo 1.1.0. */
    action?: StepActionType | undefined;
    /** Step-level prerequisite step IDs within the workflow in Arazzo 1.1.0. */
    dependsOn?: string[] | undefined;
    /** Captured `^x-` specification extensions on the Step object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * Describes a single step or workflow parameter with a literal value, runtime expression, or selector.
 */
export interface ArazzoParameterObject {
    /** The name of the parameter. */
    name: string;
    /** The location of the parameter ('path', 'query', 'querystring', 'header', or 'cookie'). Omitted for sub-workflow inputs. */
    in?: ArazzoParameterLocation | undefined;
    /** The constant value, runtime expression, or SelectorObject to pass in the parameter. */
    value: JsonValue | SelectorObject;
    /** Captured `^x-` specification extensions on the Parameter object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * A simple object to allow referencing reusable objects contained within the `$components` object.
 */
export interface ReusableObject {
    /** A runtime expression used to reference the desired reusable object (e.g. `$components.parameters.petId`). */
    reference: string;
    /** Optional value override when referencing a reusable parameter object. */
    value?: JsonValue | undefined;
}
/**
 * Represents the request body and dynamic payload replacements to pass to an operation.
 */
export interface ArazzoRequestBodyObject {
    /** The Content-Type for the request content. */
    contentType?: string | undefined;
    /** A literal value, object, template string, or runtime expression representing the request body payload. */
    payload?: JsonValue | undefined;
    /** A list of locations and values to replace within a payload. */
    replacements?: PayloadReplacementObject[] | undefined;
    /** Captured `^x-` specification extensions on the RequestBody object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * Describes a location within a request payload (such as a JSON Pointer or XPath) and the value to set within the location.
 */
export interface PayloadReplacementObject {
    /** A JSON Pointer, JSONPath, or XPath expression targeting the replacement location within the payload. */
    target: string;
    /** The value, runtime expression, or SelectorObject to set at the target location. */
    value: JsonValue | SelectorObject;
    /** Captured `^x-` specification extensions on the PayloadReplacement object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * An object used to describe the type and version of an expression used within a Criterion Object or Selector Object.
 */
export interface CriterionExpressionTypeObject {
    /** The type of expression engine ('jsonpath' or 'xpath'). */
    type: 'jsonpath' | 'xpath';
    /** The version string of the expression engine (e.g., 'draft-goessner-dispatch-jsonpath-00', 'RFC9535', 'xpath-30'). */
    version: string;
    /** Captured `^x-` specification extensions on the CriterionExpressionType object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * An object used to specify the context, condition, and evaluation engine for an assertion on a step or action.
 */
export interface CriterionObject {
    /** A runtime expression used to set the context for the condition to be applied on (e.g., `$statusCode`, `$response.body`). */
    context?: string | undefined;
    /** The condition to apply (a simple comparison, regular expression, JSONPath query, or XPath query). */
    condition: string;
    /** The type of condition to be applied ('simple', 'regex', 'jsonpath', 'xpath', or a CriterionExpressionTypeObject). */
    type?: CriterionType | CriterionExpressionTypeObject | undefined;
    /** Captured `^x-` specification extensions on the Criterion object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * An Arazzo 1.1.0 Selector Object used to extract a value from a runtime context via JSON Pointer, JSONPath, XPath, or Regex.
 */
export interface SelectorObject {
    /** A runtime expression specifying the source data context (e.g., `$response.body`, `$message.body`). */
    context: string;
    /** The selector expression (JSON Pointer, JSONPath, XPath, or Regex) to evaluate against the context. */
    selector: string;
    /** The selector engine type ('jsonpointer', 'jsonpath', 'xpath', 'regex', or a CriterionExpressionTypeObject). */
    type?: SelectorType | CriterionExpressionTypeObject | undefined;
    /** Optional specification version of the selector engine. */
    version?: string | undefined;
    /** Captured `^x-` specification extensions on the Selector object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * A single success action which describes an action to take upon succeeded execution of a workflow step.
 */
export interface SuccessActionObject {
    /** The name of the success action. */
    name: string;
    /** The type of action to take ('end' or 'goto'). */
    type: SuccessActionType;
    /** The workflowId to transfer execution to when `type === 'goto'`. */
    workflowId?: string | undefined;
    /** The stepId to transfer execution to when `type === 'goto'`. */
    stepId?: string | undefined;
    /** Parameters to pass when transferring execution to a target workflow or step. */
    parameters?: (ArazzoParameterObject | ReusableObject)[] | undefined;
    /** A list of assertions to determine if this action SHALL be executed. */
    criteria?: CriterionObject[] | undefined;
    /** Captured `^x-` specification extensions on the SuccessAction object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * A single failure action which describes an action to take upon failed execution of a workflow step.
 */
export interface FailureActionObject {
    /** The name of the failure action. */
    name: string;
    /** The type of action to take ('end', 'retry', or 'goto'). */
    type: FailureActionType;
    /** The workflowId to transfer execution to or retry when `type === 'goto'` or `'retry'`. */
    workflowId?: string | undefined;
    /** The stepId to transfer execution to or retry when `type === 'goto'` or `'retry'`. */
    stepId?: string | undefined;
    /** Parameters to pass when transferring execution or retrying. */
    parameters?: (ArazzoParameterObject | ReusableObject)[] | undefined;
    /** A non-negative decimal indicating the seconds to delay after the step failure before another attempt is made. */
    retryAfter?: number | undefined;
    /** A non-negative integer indicating how many attempts to retry the step MAY be attempted before failing the overall step. */
    retryLimit?: number | undefined;
    /** A list of assertions to determine if this action SHALL be executed. */
    criteria?: CriterionObject[] | undefined;
    /** Captured `^x-` specification extensions on the FailureAction object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * Holds a set of reusable objects for different aspects of the Arazzo Specification.
 */
export interface ArazzoComponentsObject {
    /** An object to hold reusable JSON Schema 2020-12 objects for workflow inputs. */
    inputs?: Record<string, SchemaObject | ReferenceObject> | undefined;
    /** An object to hold reusable Arazzo Parameter Objects. */
    parameters?: Record<string, ArazzoParameterObject> | undefined;
    /** An object to hold reusable Arazzo Success Actions Objects. */
    successActions?: Record<string, SuccessActionObject> | undefined;
    /** An object to hold reusable Arazzo Failure Actions Objects. */
    failureActions?: Record<string, FailureActionObject> | undefined;
    /** Captured `^x-` specification extensions on the Components object. */
    extensions?: Record<string, JsonValue> | undefined;
}
/**
 * Represents a parsed Arazzo 1.1.0 runtime expression or template expression.
 */
export interface ParsedRuntimeExpression {
    /** The original raw string expression. */
    raw: string;
    /** True if the string is a pure runtime expression or contains `{...}` embedded runtime expressions. */
    isExpression: boolean;
    /** True if the string is an embedded template expression (e.g., `Bearer {$steps.auth.outputs.token}`). */
    isTemplate: boolean;
    /** The primary runtime expression root (e.g., `$steps`, `$inputs`, `$response.body`), if matched. */
    root?: RuntimeExpressionRoot | undefined;
    /** Step IDs referenced via `$steps.<stepId>` within this expression. */
    referencedStepIds: string[];
    /** Workflow input names referenced via `$inputs.<name>` within this expression. */
    referencedInputs: string[];
    /** Workflow IDs referenced via `$workflows.<workflowId>` within this expression. */
    referencedWorkflows: string[];
    /** Source description names referenced via `$sourceDescriptions.<name>` within this expression. */
    referencedSources: string[];
    /** Extracted JSON Pointer fragment (e.g. `/data/token`) if present after `#`. */
    jsonPointer?: string | undefined;
}
/**
 * Represents a resolved link from an Arazzo Step to an OpenAPI Operation or AsyncAPI Channel.
 */
export interface LinkedOperationTarget {
    /** The kind of target ('operation' for OpenAPI, 'channel' for AsyncAPI, or 'workflow' for nested Arazzo workflow). */
    kind: 'operation' | 'channel' | 'workflow';
    /** Optional source description name (e.g. 'petstore'). */
    sourceName?: string | undefined;
    /** Resolved HTTP method in lowercase (e.g. 'get', 'post', 'query') when targeting an OpenAPI operation. */
    method?: string | undefined;
    /** Resolved route path or channel path (e.g. '/pets/{petId}'). */
    route?: string | undefined;
    /** Resolved operationId or workflowId. */
    operationId?: string | undefined;
    /** Anchor ID in the rendered documentation DOM (e.g. 'getPets' or 'workflow-loginWorkflow') for clickable cross-linking. */
    anchorId?: string | undefined;
}
/**
 * Represents a directed edge in a workflow or step dependency graph (DAG).
 */
export interface DagEdge {
    /** Source node identifier (`workflowId` or `stepId`). */
    from: string;
    /** Target node identifier (`workflowId` or `stepId`). */
    to: string;
    /** Kind of dependency edge ('sequential', 'dependsOn', 'dataFlow', 'onSuccess', 'onFailure', 'subWorkflow'). */
    kind: 'sequential' | 'dependsOn' | 'dataFlow' | 'onSuccess' | 'onFailure' | 'subWorkflow';
    /** Optional descriptive label for the transition (e.g. action name or output key). */
    label?: string | undefined;
}
/**
 * Represents the topological dependency and execution graph for an Arazzo document.
 */
export interface WorkflowDag {
    /** Topologically sorted list of `workflowId` strings. */
    workflowOrder: string[];
    /** Directed dependency edges between workflows. */
    workflowEdges: DagEdge[];
    /** Per-workflow topologically sorted `stepId` lists. */
    stepOrderByWorkflow: Record<string, string[]>;
    /** Per-workflow directed edges between steps. */
    stepEdgesByWorkflow: Record<string, DagEdge[]>;
    /** True if any cycle was detected in workflow or step dependencies. */
    hasCycles: boolean;
}
/**
 * Normalized step structure enriched with dereferenced parameters, actions, expressions, and linked OpenAPI metadata.
 */
export interface NormalizedStep {
    /** The underlying parsed StepObject. */
    step: StepObject;
    /** Merged and dereferenced parameters (workflow defaults + step overrides). */
    mergedParameters: ArazzoParameterObject[];
    /** Dereferenced `onSuccess` actions. */
    resolvedOnSuccess: SuccessActionObject[];
    /** Dereferenced `onFailure` actions. */
    resolvedOnFailure: FailureActionObject[];
    /** Linked OpenAPI operation, AsyncAPI channel, or sub-workflow metadata. */
    linkedTarget?: LinkedOperationTarget | undefined;
    /** Step IDs within the same workflow that this step depends on via `dependsOn` or `$steps.<id>` expressions. */
    upstreamStepIds: string[];
}
/**
 * Normalized workflow structure enriched with resolved input schema, normalized steps, and generated CLI preview.
 */
export interface NormalizedWorkflow {
    /** The underlying parsed WorkflowObject. */
    workflow: WorkflowObject;
    /** Resolved JSON Schema for workflow inputs (dereferenced against `components.inputs` if needed). */
    resolvedInputs?: SchemaObject | undefined;
    /** Dereferenced workflow-level default parameters. */
    resolvedParameters: ArazzoParameterObject[];
    /** Dereferenced workflow-level default success actions. */
    resolvedSuccessActions: SuccessActionObject[];
    /** Dereferenced workflow-level default failure actions. */
    resolvedFailureActions: FailureActionObject[];
    /** Normalized and enriched steps in execution order. */
    normalizedSteps: NormalizedStep[];
    /** Generated multi-step cURL / CLI execution preview script for this workflow. */
    cliPreview: string;
    /** Topologically sorted stepId execution order computed by the DAG builder. */
    stepOrder?: string[] | undefined;
    /** Directed dependency edges between steps within this workflow. */
    stepEdges?: DagEdge[] | undefined;
    /** True if a dependency cycle was detected in this document's workflow or step graph. */
    hasCycles?: boolean | undefined;
}
