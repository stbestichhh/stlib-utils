import { PathLike } from 'fs';
import * as fs from 'fs';
import * as node_path from 'path';

export class Config {
  public readonly path: PathLike;
  private config: { [key: string]: string | number };

  constructor(path: PathLike, config: { [key: string]: string | number }) {
    fs.promises
      .mkdir(node_path.dirname(path.toString()), { recursive: true })
      .then(async () => {
        await fs.promises.writeFile(path, JSON.stringify(config));
      });
    this.path = path;
    this.config = config;
  }

  read() {
    return this.config;
  }

  static async read(path: PathLike) {
    const data = await fs.promises.readFile(path);
    return JSON.parse(data.toString());
  }

  static readSync(path: PathLike) {
    const data = fs.readFileSync(path);
    return JSON.parse(data.toString());
  }

  get(key: string) {
    return this.config[key];
  }

  static async get(key: string, path: PathLike) {
    const config = await Config.read(path);
    return config[key];
  }

  static getSync(key: string, path: PathLike) {
    const config = Config.readSync(path);
    return config[key];
  }

  async write(config: { [key: string]: string | number }) {
    Object.assign(this.config, config);
    await fs.promises.writeFile(this.path, JSON.stringify(this.config));
  }

  static async create(path: PathLike, config: { [key: string]: string | number }) {
    await fs.promises
      .mkdir(node_path.dirname(path.toString()), { recursive: true })
      .then(async () => {
        await fs.promises.writeFile(path, JSON.stringify(config));
      });
  }

  static createSync(
    path: PathLike,
    config: { [key: string]: string | number }
  ) {
    fs.mkdirSync(node_path.dirname(path.toString()), { recursive: true });
    fs.writeFileSync(path, JSON.stringify(config));
  }

  static async write(
    path: PathLike,
    config: { [key: string]: string | number },
  ) {
    const exconfig = await Config.read(path);
    Object.assign(exconfig, config);
    await fs.promises.writeFile(path, JSON.stringify(exconfig));
  }

  static writeSync(path: PathLike, config: { [key: string]: string | number }) {
    const exconfig = Config.readSync(path);
    Object.assign(exconfig, config);
    fs.writeFileSync(path, JSON.stringify(exconfig));
  }
}
