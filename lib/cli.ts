export const parseArgs = (argv: string[]) => {
  const options: { [key: string]: string } = {};
  const args = argv.slice(2);

  for(let i = 0; i < args.length; i++) {
    if(args[i].startsWith('--')) {
      if(args[i + 1] && !args[i + 1].startsWith('-')) {
        const [key] = args[i].slice(2).split('=');
        const value = args[i + 1];
        options[key] = value || '';
      } else {
        const [key, value, valuesp] = args[i].slice(2).split('=');
        if(valuesp) {
          options[key] = `${value}=${valuesp}` || '';
        } else {
          options[key] = value || '';
        }
      }
    } else if(args[i].startsWith('-')) {
      if(args[i + 1] && !args[i + 1].startsWith('-')) {
        const [key] = args[i].slice(1).split('=');
        const value = args[i + 1];
        options[key] = value || '';
      } else {
        const [key, value, valuesp] = args[i].slice(1).split('=');
        if(valuesp) {
          options[key] = `${value}=${valuesp}` || ''
        } else {
          options[key] = value || '';
        }
      }
    }
  }

  return options;
};

export const options = parseArgs(process.argv);
