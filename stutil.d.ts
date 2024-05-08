import { PathLike } from 'fs';

// Utility: error
export function isError(error: unknown): boolean;
export function handleErrorSync(
  error: unknown,
  options?: {
    message?: string;
    throw?: boolean;
    toLog?: { path: PathLike; withStack: boolean };
  },
): void;
export function handleError(
  error: unknown,
  options?: {
    message?: string;
    callback: () => void | Promise<void>;
    throw?: boolean;
    toLog?: { path: PathLike; withStack: boolean };
  },
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
