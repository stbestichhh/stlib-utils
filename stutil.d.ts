import { PathLike } from 'fs';
import fs from 'fs';
import node_path from 'path';

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
): void;
export function handleError(
  error: unknown,
  callback: () => void | Promise<void>,
  options?: HandleErrorOptions,
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
