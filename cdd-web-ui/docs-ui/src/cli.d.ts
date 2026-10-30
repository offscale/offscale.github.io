#!/usr/bin/env node
/**
 * Command-Line Interface and Live-Reload Watch Server for `cdd-docs-ui`.
 * @module cli
 */
import express from 'express';
import { CliConfig } from './types';
/**
 * Current CLI version matching `package.json`.
 */
export declare const CLI_VERSION = "0.0.4";
/**
 * Runs the CLI application using the provided command-line arguments.
 * @param args The array of command line arguments (typically `process.argv.slice(2)`).
 * @returns A promise that resolves when execution completes.
 */
export declare function run(args: string[]): Promise<void>;
/**
 * Parses the CLI arguments into a strongly-typed `CliConfig` object.
 * @param args The command line arguments to parse.
 * @returns A `CliConfig` object containing the parsed configuration options.
 */
export declare function parseArgs(args: string[]): CliConfig;
/**
 * Generates the API documentation artifacts based on the configuration.
 * @param config The parsed CLI configuration object.
 * @returns A boolean indicating whether generation was successful.
 */
export declare function generate(config: CliConfig): Promise<boolean>;
/**
 * Starts a watch server to regenerate the API docs and notify connected clients on changes.
 * @param config The parsed CLI configuration object.
 * @returns The active HTTP server instance.
 */
export declare function startWatchServer(config: CliConfig): Promise<ReturnType<express.Application['listen']>>;
/**
 * Checks whether the current module is being executed directly as the main CLI entry point.
 * @param argv1 The `process.argv[1]` script path.
 * @param metaUrl The `import.meta.url` of the module.
 * @returns True if `argv1` matches the file path resolved from `metaUrl`.
 */
export declare function checkIsMainModule(argv1: string | undefined, metaUrl: string): boolean;
/**
 * Bootstraps CLI execution if invoked directly as the main entry point.
 * @param argv Process arguments array (defaults to `process.argv`).
 * @param metaUrl Module URL (defaults to `import.meta.url`).
 */
export declare function bootstrapCli(argv?: string[], metaUrl?: string): void;
