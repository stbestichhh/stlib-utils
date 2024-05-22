import * as fs from 'fs';
import {
  isError,
  handleErrorSync,
  handleError,
  logErrorSync,
} from '../lib/error';
jest.mock('fs');

describe('isError', () => {
  it('should return true if the input is an instance of Error', () => {
    expect(isError(new Error('Test error'))).toBe(true);
  });

  it('should return false if the input is not an instance of Error', () => {
    expect(isError('Not an error')).toBe(false);
    expect(isError(123)).toBe(false);
    expect(isError({})).toBe(false);
  });
});

describe('handleErrorSync', () => {
  const consoleErrorSpy = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle and log an error', () => {
    const error = new Error('Test error');
    const options = {
      message: 'An error occurred',
      toLog: { path: 'error.log', withStack: true },
    };

    handleErrorSync(error, options);

    expect(consoleErrorSpy).toHaveBeenCalledWith('An error occurred', error);
    expect(fs.appendFileSync).toHaveBeenCalledWith(
      'error.log',
      expect.stringContaining(error.message),
    );
  });

  it('should throw an error if the throw option is true', () => {
    const error = new Error('Test error');

    expect(() => handleErrorSync(error, { throw: true })).toThrow(error);
  });

  it('should return the handled error', () => {
    const error = new Error('Test error');

    const result = handleErrorSync(error);

    expect(result.handledError).toBe(error);
  });
});

describe('handleError', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error if the throw option is true', async () => {
    const error = new Error('Test error');

    await expect(
      handleError(
        error,
        async () => {
          throw new Error('Callback error');
        },
        { throw: true },
      ),
    ).rejects.toThrow(error);
  });

  it('should return the handled error and callback result', async () => {
    const error = new Error('Test error');
    const callback = jest.fn().mockResolvedValue('result');

    const result = await handleError(error, callback);

    expect(result.handledError).toBe(error);
    expect(result.callbackResult).toBe('result');
  });
});

describe('logErrorSync', () => {
  it('should log an error to the specified file synchronously', () => {
    const error = new Error('Test error');
    const path = 'error.log';

    logErrorSync(error, path, true);

    expect(fs.appendFileSync).toHaveBeenCalledWith(
      path,
      expect.stringContaining(error.message),
    );
  });
});
