import * as fs from 'fs';

export const isError = (error: unknown): boolean => error instanceof Error;

export const handleErrorSync = (error: unknown, options?: { message?: string, throw?: boolean, toLog?: { path: fs.PathLike, withStack: boolean } }): void => {
  if (error && error instanceof Error) {
    console.error(options?.message ?? 'Unexpected error.');

    if (options?.toLog) {
      logErrorSync(error, options.toLog.path, options.toLog.withStack);
    }

    if (options?.throw) {
      throw error;
    }
  }
}

export const handleError = async (error: unknown, callback: () => void | Promise<void>, options?: { message?: string, throw?: boolean, toLog?: { path: fs.PathLike, withStack: boolean } }): Promise<void> => {
  if (error && error instanceof Error) {
    console.error(options?.message ?? 'Unexpected error.');

    if (options?.toLog) {
      await logError(error, options.toLog.path, options.toLog.withStack);
    }

    const cbResult: void | Promise<void> = callback();
    if(cbResult instanceof Promise) {
      await cbResult;
    } else {
      callback();
    }

    if (options?.throw) {
      throw error;
    }
  }
}

export const logErrorSync = (error: unknown, path: fs.PathLike, stack?: boolean): void => {
  if (error && error instanceof Error) {
    const date = new Date(Date.now()).toLocaleString();
    const logData = `[${date}] ${error.message}\n${stack ? error.stack : ''}\n`;
    fs.appendFileSync(path, logData);
  }
}

export const logError = async (error: unknown, path: fs.PathLike, stack?: boolean): Promise<void> => {
  if (error && error instanceof Error) {
    const date = new Date(Date.now()).toLocaleString();
    const logData = `[${date}] ${error.message}\n${stack ? error.stack : ''}\n`;
    await fs.promises.appendFile(path, logData);
  }
}
