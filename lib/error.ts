import * as fs from 'fs';

export const isError = (error: unknown): boolean => error instanceof Error;

export const handleErrorSync = (
  error: unknown,
  options?: {
    message?: string;
    throw?: boolean;
    toLog?: { path: fs.PathLike; withStack?: boolean };
  },
): { handledError: unknown } => {
  let handledError: unknown = undefined;

  if (isError(error)) {
    handledError = error;

    if (options?.toLog) {
      logErrorSync(error, options.toLog.path, options.toLog.withStack);
    }

    if (options?.throw) {
      throw error;
    }

    console.error(options?.message ?? 'Unexpected error.', error);
  }

  return { handledError };
};

export const handleError = async <T>(
  error: unknown,
  callback: () => T | Promise<T>,
  options?: {
    message?: string;
    throw?: boolean;
    toLog?: { path: fs.PathLike; withStack?: boolean };
  },
): Promise<{ callbackResult: T | undefined; handledError: unknown }> => {
  let callbackResult: T | undefined = undefined;
  let handledError: unknown = undefined;

  try {
    callbackResult = await callback();
  } catch (error) {
    console.error('Error in callback', error);
  }

  if (isError(error)) {
    handledError = error;

    if (options?.toLog) {
      await logError(error, options.toLog.path, options.toLog.withStack);
    }

    if (options?.throw) {
      throw error;
    }

    console.error(options?.message ?? 'Unexpected error.', error);
  }

  return { callbackResult, handledError };
};

export const logErrorSync = (
  error: unknown,
  path: fs.PathLike,
  stack?: boolean,
): void => {
  if (error && error instanceof Error) {
    const date = new Date(Date.now()).toLocaleString();
    const logData = `[${date}] ${error.message}\n${stack ? error.stack : ''}\n`;
    fs.appendFileSync(path, logData);
  }
};

export const logError = async (
  error: unknown,
  path: fs.PathLike,
  stack?: boolean,
): Promise<void> => {
  if (error && error instanceof Error) {
    const date = new Date(Date.now()).toLocaleString();
    const logData = `[${date}] ${error.message}\n${stack ? error.stack : ''}\n`;
    await fs.promises.appendFile(path, logData);
  }
};

export abstract class AbstractError extends Error {
  abstract readonly code: number;
  readonly message: string;
  readonly name: string;
  readonly options?: { [key: string]: string | number };

  protected constructor(
    message: string,
    options?: { [key: string]: string | number },
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = this.constructor.name;
    this.message = message;
    this.options = options;
    Error.captureStackTrace(this, this.constructor);
  }

  serialize(): {
    name: string;
    message: string;
    code: number;
    options: { [key: string]: string | number } | undefined;
    stack: string | undefined;
  } {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      options: this.options,
      stack: this.stack,
    };
  }
}
