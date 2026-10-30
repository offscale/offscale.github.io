/**
 * Progressive Enhancement and Custom Web Component (`<cdd-api-docs>`) for API and Workflow Documentation.
 * @module web-component
 */
import { DocTranslations, CodeExample } from './types';
/**
 * Normalizes polymorphic SDK examples input (string, CDDOutput object, array of CDDOutput/CodeExample/docs.json)
 * into a flat array of strongly-typed `CodeExample` objects.
 * @param val Raw SDK examples input.
 * @returns Normalized array of `CodeExample` objects.
 */
export declare function normalizeSdkExamplesInput(val: unknown): CodeExample[];
/**
 * Initializes the API and Workflow documentation interactive features within a specific container.
 * @param container The DOM element or Document containing the API documentation layout.
 * @param customTranslations Optional custom string dictionary for i18n.
 */
export declare function initApiDocs(container?: Document | HTMLElement, customTranslations?: Partial<DocTranslations>): void;
/**
 * Web Component for CDD API and Arazzo Workflow Documentation.
 * Usage: `<cdd-api-docs spec="..." arazzo="..."></cdd-api-docs>`
 */
export declare class CDDApiDocs extends HTMLElement {
    /** Custom UI translation overrides. */
    private _translations;
    /** Normalized SDK code examples injected via the `sdkExamples` property. */
    private _sdkExamples;
    /** Organization identifier parsed from `/u/:org/:repo` dynamic routing. */
    private _org?;
    /** Repository identifier parsed from `/u/:org/:repo` dynamic routing. */
    private _repo?;
    /** Monotonic render version counter to discard stale async fetch responses. */
    private _renderVersion;
    /** Bound `window.postMessage` event listener reference for clean removal on disconnect. */
    private readonly _boundMessageHandler;
    /**
     * Initializes a new `CDDApiDocs` custom element instance.
     */
    constructor();
    /**
     * Gets the organization identifier extracted from dynamic routing (`/u/:org/:repo`), if present.
     * @returns The organization string or undefined.
     */
    get org(): string | undefined;
    /**
     * Gets the repository identifier extracted from dynamic routing (`/u/:org/:repo`), if present.
     * @returns The repository string or undefined.
     */
    get repo(): string | undefined;
    /**
     * Gets the current custom translations applied to the UI.
     * @returns A partial DocTranslations object.
     */
    get translations(): Partial<DocTranslations>;
    /**
     * Sets custom translations for the UI and triggers a re-render.
     * @param val A partial DocTranslations object.
     */
    set translations(val: Partial<DocTranslations>);
    /**
     * Gets the currently selected active SDK language, if set.
     * @returns The active language string or null.
     */
    get activeLanguage(): string | null;
    /**
     * Sets the active SDK language attribute (or removes it when null/empty).
     * @param val The target language identifier or null.
     */
    set activeLanguage(val: string | null);
    /**
     * Gets the current list of SDK examples.
     * @returns Array of CodeExample objects.
     */
    get sdkExamples(): CodeExample[];
    /**
     * Sets the SDK examples. Automatically parses JSON strings or standardizes format, then triggers re-render.
     * @param val Examples configuration array, string, or object.
     */
    set sdkExamples(val: unknown);
    /**
     * Called when the element is inserted into the DOM.
     */
    connectedCallback(): void;
    /**
     * Called when the element is removed from the DOM; cleans up window message listeners.
     */
    disconnectedCallback(): void;
    /**
     * Resolves the specification source from attributes or URL routing and triggers rendering.
     */
    private triggerRender;
    /**
     * Renders the given OpenAPI or Arazzo specification string or URL, optionally paired with a companion Arazzo specification.
     * @param specContent JSON or YAML string, or a URL starting with `http://`, `https://`, or `/`.
     * @param companionArazzoSpec Optional companion Arazzo 1.1.0 specification string or URL.
     * @returns A promise that resolves once rendering and DOM initialization complete.
     */
    renderSpec(specContent: string, companionArazzoSpec?: string): Promise<void>;
    /**
     * Injects version selection dropdown and SDK download links into the header for dynamic `/u/:org/:repo` routes.
     * @param header The header DOM element to append controls to.
     * @param org The organization name.
     * @param repo The repository name.
     */
    private injectDynamicHeader;
    /**
     * Registers the `postMessage` listener and notifies a parent iframe host that the UI is ready.
     */
    private setupPostMessage;
    /**
     * Handles incoming `window.postMessage` events (`UPDATE_SPEC`, `UPDATE_ARAZZO`, `UPDATE_SDK_EXAMPLES`, `SET_LANGUAGE`, and `SET_THEME`).
     * @param event The incoming `MessageEvent`.
     */
    private handlePostMessage;
    /**
     * List of attributes to observe for changes.
     * @returns Array of observed attribute names.
     */
    static get observedAttributes(): string[];
    /**
     * Called when an observed attribute is changed.
     * @param name The name of the attribute.
     * @param oldValue The old value.
     * @param newValue The new value.
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
/**
 * Global HTML element tag map augmentation so `document.createElement('cdd-api-docs')` and
 * `document.querySelector('cdd-api-docs')` infer `CDDApiDocs` automatically.
 */
declare global {
    /**
     * Global custom element tag map interface.
     */
    interface HTMLElementTagNameMap {
        /** The `<cdd-api-docs>` custom web component. */
        'cdd-api-docs': CDDApiDocs;
    }
}
/**
 * Registers the `<cdd-api-docs>` custom element and attaches a `DOMContentLoaded` listener
 * for standalone AOT HTML documents.
 */
export declare function registerWebComponent(): void;
