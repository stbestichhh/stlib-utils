import { PathLike } from 'fs';

// Utility: config

export interface ConfigOptionsType {
  force?: boolean;
  alter?: boolean;
}

export interface ConfigType {
  [key: string]: string | number;
}

export class Config {
  constructor(path: PathLike, config: ConfigType, options?: ConfigOptionsType);
  private initialize(options?: ConfigOptionsType): void;
  public readonly path: PathLike;
  private config: ConfigType;
  read(): ConfigType;
  static read(path: PathLike): Promise<ConfigType>;
  static readSync(path: PathLike): ConfigType;
  get(key: string): string | number;
  static get(key: string, path: PathLike): Promise<string | number>;
  static getSync(key: string, path: PathLike): string | number;
  write(config: ConfigType): Promise<void>;
  static create(path: PathLike): Promise<void>;
  static createSync(path: PathLike): void;
  static write(path: PathLike, config: ConfigType): Promise<void>;
  static writeSync(path: PathLike, config: ConfigType): void;
}
