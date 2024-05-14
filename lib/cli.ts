export const parseArgs = (argv: string[]) => {
  const options: { [key: string]: string } = {};
  const args = argv.slice(2);

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const nextArg = args[i + 1];
    const isLongPrefix = args[i].startsWith('--');
    const isShortPrefix = args[i].startsWith('-');
    const keyArg = isLongPrefix
      ? arg.slice(2)
      : isShortPrefix
        ? arg.slice(1)
        : '';

    if (isLongPrefix || isShortPrefix) {
      const hasValue = nextArg && !nextArg.startsWith('-');

      const [key, value] = keyArg.split('=');

      if (hasValue) {
        options[key] = nextArg || '';
      } else {
        options[key] = value || '';
      }
    }
  }

  return options;
};

export const options = parseArgs(process.argv);
