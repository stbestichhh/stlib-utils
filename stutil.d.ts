import { PathLike } from 'fs';

// Utility: error

export interface HandleErrorOptions {
  message?: string;
  throw?: boolean;
  toLog?: { path: PathLike; withStack?: boolean };
}

export function isError(error: unknown): boolean;
export function handleErrorSync(
  error: unknown,
  options?: HandleErrorOptions,
): { handledError: unknown };
export function handleError<T>(
  error: unknown,
  callback: () => T | Promise<T>,
  options?: HandleErrorOptions,
): Promise<{ callbackResult: T | undefined; handledError: unknown }>;
export function logErrorSync(
  error: unknown,
  path: PathLike,
  stack?: boolean,
): void;
export function logError(
  error: unknown,
  path: PathLike,
  stack?: boolean,
): Promise<void>;

export abstract class AbstractError extends Error {
  abstract readonly code: number;
  readonly message: string;
  readonly name: string;
  readonly options?: { [key: string]: string | number };
  protected constructor(
    message: string,
    options?: { [key: string]: string | number },
  );
  serialize(): {
    name: string;
    message: string;
    code: number;
    options: { [key: string]: string | number } | undefined;
    stack: string | undefined;
  };
}

// Utility: fs

export interface CreateOptions {
  create: boolean;
  recursive?: boolean;
  content?: string;
}

export function isExistsSync(path: PathLike, options?: CreateOptions): boolean;
export function isExists(
  path: PathLike,
  options?: CreateOptions,
): Promise<boolean>;

// Utility: config

export interface ConfigType {
  [key: string]: string | number;
}

export class Config {
  constructor(path: PathLike, config: ConfigType);
  public readonly path: PathLike;
  private config: ConfigType;
  read(): ConfigType;
  static read(path: PathLike): Promise<{ [key: string]: string | number }>;
  static readSync(path: PathLike): { [key: string]: string | number };
  get(key: string): string | number;
  static get(key: string, path: PathLike): Promise<string | number>;
  static getSync(key: string, path: PathLike): string | number;
  write(config: ConfigType): Promise<void>;
  static create(path: PathLike): Promise<void>;
  static createSync(path: PathLike): void;
  static write(path: PathLike, config: ConfigType): Promise<void>;
  static writeSync(path: PathLike, config: ConfigType): void;
}

// Utility: cli

export interface OptionsType {
  [key: string]: string;
}

export function parseArgs(argv: string[]): OptionsType;
export const options: OptionsType;
