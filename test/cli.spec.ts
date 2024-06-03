import { parseArgs } from '../lib/cli';

describe('Parse arguments', () => {
  it('should parse options with -- prefix', () => {
    const argv = [
      'node',
      'cli.js',
      '--verbose',
      '--output=output.txt',
      '-f',
      'input.txt',
    ];
    const options = parseArgs(argv);
    expect(options).toEqual({
      verbose: true,
      output: 'output.txt',
      f: 'input.txt',
    });
  });

  it('should parse options with - prefix', () => {
    const argv = [
      'node',
      'cli.js',
      '-v',
      '-o=output.txt',
      '--file',
      'input.txt',
    ];
    const options = parseArgs(argv);
    expect(options).toEqual({ v: true, o: 'output.txt', file: 'input.txt' });
  });

  it('should parse options without values', () => {
    const argv = ['node', 'cli.js', '--verbose', '-o', '--file', 'input.txt'];
    const options = parseArgs(argv);
    expect(options).toEqual({ verbose: true, o: true, file: 'input.txt' });
  });

  it('should parse options with empty values', () => {
    const argv = [
      'node',
      'cli.js',
      '--verbose=',
      '-o=',
      '--file=',
      'input.txt',
    ];
    const options = parseArgs(argv);
    expect(options).toEqual({ verbose: true, o: true, file: 'input.txt' });
  });

  it('should parse options with values containing equals sign', () => {
    const argv = ['node', 'cli.js', '--output=output=1.txt', '-f=input=1.txt'];
    const options = parseArgs(argv);
    expect(options).toEqual({ output: 'output=1.txt', f: 'input=1.txt' });
  });

  it('should handle duplicate options by keeping the last one', () => {
    const argv = [
      'node',
      'cli.js',
      '--verbose=first',
      '--verbose=last',
      '--output=output.txt',
    ];
    const options = parseArgs(argv);
    expect(options).toEqual({ verbose: 'last', output: 'output.txt' });
  });
});
