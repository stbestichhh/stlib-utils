import { PathLike } from 'fs';
import * as fs from 'fs';
import * as node_path from 'path';

export const isExistsSync = (
  path: PathLike,
  options?: { create: boolean; recursive?: boolean; content?: string },
) => {
  try {
    fs.accessSync(path);
    return true;
  } catch (error) {
    if (options?.create && options.content) {
      fs.mkdirSync(node_path.dirname(path.toString()), {
        recursive: options.recursive,
      });
      fs.writeFileSync(path, options.content);
      return true;
    } else if (options?.create) {
      fs.mkdirSync(path, { recursive: options.recursive });
      return true;
    }
    return false;
  }
};

export const isExists = async (
  path: PathLike,
  options?: { create: boolean; recursive?: boolean; content?: string },
) => {
  try {
    await fs.promises.access(path);
    return true;
  } catch (error) {
    if (options?.create && options.content) {
      await fs.promises
        .mkdir(node_path.dirname(path.toString()), {
          recursive: options.recursive,
        })
        .then(async () => {
          await fs.promises.writeFile(path, options.content || '');
        });
      return true;
    } else if (options?.create) {
      await fs.promises.mkdir(path, { recursive: options.recursive });
      return true;
    }
    return false;
  }
};
