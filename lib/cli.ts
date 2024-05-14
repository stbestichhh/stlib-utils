export const parseArgs = (argv: string[]) => {
  const options: { [key: string]: string } = {}
  const args = argv.slice(2);

  args.forEach((arg) => {
    if (arg.startsWith('--')) {
      const [key, value] = arg.slice(2).split('=');
      options[key] = value || '';
    } else if (arg.startsWith('-')) {
      const [key, value] = arg.slice(1).split('=');
      options[key] = value || '';
    }
  });

  return options;
}

export const options = parseArgs(process.argv);
