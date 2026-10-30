/**
 * Internal Data Model for API and Workflow Documentation
 * @module types
 */
import { OpenAPI320 } from './openapi-types';
import { Arazzo110, NormalizedWorkflow, SourceDescriptionObject, WorkflowDag } from './arazzo-types';
/**
 * Represents an SDK code example.
 */
export interface CodeExample {
    /** The programming language of the example (e.g., 'typescript', 'python'). */
    language: string;
    /** The path to the file containing the example. */
    filepath: string;
    /** The actual code content. */
    content: string;
    /** Whether to include import statements in the displayed example. */
    includeImports?: boolean | undefined;
    /** Whether to include wrapping code (like function definitions) in the displayed example. */
    includeWrapping?: boolean | undefined;
    /** Optional explicit operationId for deterministic mapping to an OpenAPI or webhook operation. */
    operationId?: string | undefined;
    /** Optional explicit HTTP method in lowercase for deterministic mapping. */
    method?: string | undefined;
    /** Optional explicit route path for deterministic mapping to an OpenAPI operation. */
    route?: string | undefined;
    /** Optional explicit webhook name for deterministic mapping to a webhook operation. */
    webhookName?: string | undefined;
    /** Optional explicit Arazzo workflowId for deterministic mapping to a workflow. */
    workflowId?: string | undefined;
}
/**
 * Expected JSON output structure from cdd-ctl
 */
export interface CDDOutput {
    /**
     * Map of endpoints where the key is the route path.
     * The value is a map of HTTP methods to generated code string snippets.
     */
    endpoints: {
        [path: string]: {
            [method: string]: string;
        };
    };
    /**
     * Optional map of webhooks where the key is the webhook name.
     * The value is a map of HTTP methods to generated code string snippets.
     */
    webhooks?: {
        [webhookName: string]: {
            [method: string]: string;
        };
    } | undefined;
    /**
     * Optional map of Arazzo workflows where the key is the `workflowId`.
     * The value is the generated workflow orchestrator code snippet.
     */
    workflows?: {
        [workflowId: string]: string;
    } | undefined;
}
/**
 * The Final Normalized Documentation Data structure used by the UI.
 */
export interface DocData {
    /** Indicates whether the document is an OpenAPI spec, an Arazzo spec, or a combined OpenAPI + Arazzo view. */
    specKind?: 'openapi' | 'arazzo' | 'combined' | undefined;
    /** The parsed and normalized OpenAPI specification. */
    spec: OpenAPI320;
    /**
     * A map of operation IDs to their corresponding code examples.
     * Key: Operation ID (or generated ID).
     * Value: Array of CodeExample objects.
     */
    codeExamples: Record<string, CodeExample[]>;
    /** Optional parsed and normalized Arazzo 1.1.0 specification. */
    arazzoSpec?: Arazzo110 | undefined;
    /** Normalized and enriched Arazzo workflows. */
    workflows?: NormalizedWorkflow[] | undefined;
    /** Source descriptions referenced by the Arazzo specification. */
    sourceDescriptions?: SourceDescriptionObject[] | undefined;
    /**
     * A map of Arazzo `workflowId` strings to their corresponding SDK/CLI code examples.
     */
    workflowCodeExamples?: Record<string, CodeExample[]> | undefined;
    /** Computed dependency graph (DAG) and cycle status for Arazzo workflows and steps. */
    workflowDag?: WorkflowDag | undefined;
}
/**
 * Configuration options for the CLI runner and watch server.
 */
export interface CliConfig {
    /** Whether to print the CLI version and exit. */
    version: boolean;
    /** Path or URL to the input OpenAPI or Arazzo specification. */
    inputSpec: string;
    /** Optional path or URL to a companion Arazzo 1.1.0 specification. */
    arazzoSpec?: string | undefined;
    /** Output directory for generated static HTML documentation. */
    outputDir: string;
    /** Initial theme ('light' or 'dark'). */
    theme: 'light' | 'dark';
    /** Whether to start the live-reload watch server. */
    watchMode: boolean;
    /** Port number for the watch server. */
    port: number;
}
export * from './openapi-types';
export * from './arazzo-types';
/**
 * Interface defining all localizable strings for the CDD API Documentation UI.
 */
export interface DocTranslations {
    /** The HTML lang attribute value (e.g. 'en', 'fr') */
    locale: string;
    /** Placeholder text for the endpoint search input */
    searchPlaceholder: string;
    /** Text for the copy code button */
    copy: string;
    /** Text displayed briefly after copying code */
    copied: string;
    /** Label for the interactive API testing section */
    tryItOut: string;
    /** Button text to submit the API request */
    execute: string;
    /** Heading for the API response section */
    response: string;
    /** Prefix for the HTTP response status */
    status: string;
    /** Text shown while waiting for the API response */
    loading: string;
    /** Text shown when an API request fails completely */
    error: string;
    /** Title for the settings sidebar */
    settings: string;
    /** Label for the dark mode toggle */
    darkMode: string;
    /** Label for the language selection section */
    language: string;
    /** Label for the 'Include Imports' toggle */
    includeImports: string;
    /** Label for the 'Include Wrapping' toggle */
    includeWrapping: string;
    /** Title for the endpoints/paths navigation section */
    paths: string;
    /** Title for the schemas/models navigation section */
    schemas: string;
    /** Title for the operation parameters section */
    parameters: string;
    /** Label for the request body input field */
    requestBody: string;
    /** Message shown when no code example exists for the selected language */
    noExampleFor: string;
    /** Prefix shown for array types in schema definitions */
    arrayOf: string;
    /** Header for the property column in schema tables */
    tableHeaderProperty: string;
    /** Header for the type column in schema tables */
    tableHeaderType: string;
    /** Header for the description column in schema tables */
    tableHeaderDescription: string;
    /** Header for the name column in parameter tables */
    tableHeaderName: string;
    /** Header for the "in" (location) column in parameter tables */
    tableHeaderIn: string;
    /** Label for the terms of service link */
    termsOfService: string;
    /** Prefix for the contact information section */
    contactPrefix: string;
    /** Fallback label for the contact link if no name is provided */
    apiSupport: string;
    /** Heading for the appearance settings section */
    appearanceHeading: string;
    /** Accessible label for the main table of contents navigation */
    tocNavLabel: string;
    /** Label for the cURL code tab */
    tabCurl: string;
    /** Label for the SDK code tab */
    tabSdk: string;
    /** Heading for the Arazzo workflows navigation and main section */
    workflowsHeading: string;
    /** Heading for Arazzo sourceDescriptions list */
    sourceDescriptionsHeading: string;
    /** Heading for Arazzo workflow inputs schema */
    workflowInputsHeading: string;
    /** Heading for Arazzo workflow outputs mapping */
    workflowOutputsHeading: string;
    /** Heading for Arazzo workflow dependsOn prerequisites */
    workflowDependsOnHeading: string;
    /** Heading for Arazzo workflow steps pipeline */
    stepsHeading: string;
    /** Heading for Arazzo step parameters table */
    stepParametersHeading: string;
    /** Heading for Arazzo step request body and replacements */
    stepRequestBodyHeading: string;
    /** Heading for Arazzo step successCriteria assertions */
    successCriteriaHeading: string;
    /** Heading for Arazzo step onSuccess actions */
    onSuccessHeading: string;
    /** Heading for Arazzo step onFailure actions */
    onFailureHeading: string;
    /** Heading for Arazzo step outputs table */
    stepOutputsHeading: string;
    /** Button text for executing an interactive Arazzo workflow */
    runWorkflowBtn: string;
    /** Heading for reusable Arazzo components section */
    arazzoComponentsHeading: string;
    /** Heading for OpenAPI 3.2.0 webhooks section */
    webhooksHeading: string;
}
/** Default English translations for the UI */
export declare const defaultTranslations: DocTranslations;
