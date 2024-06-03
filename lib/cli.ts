export const parseArgs = (argv: string[]) => {
  const options: { [key: string]: string | boolean } = {};
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

      const [key, value, valuesp] = keyArg.split('=');

      if (hasValue) {
        options[key] = nextArg || true;
      } else {
        options[key] = valuesp ? `${value}=${valuesp}` : value || true;
      }
    }
  }

  return options;
};

export const options = parseArgs(process.argv);
