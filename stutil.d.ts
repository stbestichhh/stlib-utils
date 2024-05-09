import { PathLike } from 'fs';

// Utility: error

export interface Options {
  message?: string;
  throw?: boolean;
  toLog?: { path: PathLike; withStack?: boolean };
}

export function isError(error: unknown): boolean;
export function handleErrorSync(error: unknown, options?: Options): void;
export function handleError(
  error: unknown,
  callback: () => void | Promise<void>,
  options?: Options,
): Promise<void>;
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

// Utility: fs
