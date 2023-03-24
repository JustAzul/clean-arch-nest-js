export interface LoggerConstructor {
  new (loggerName: string): ILogger;
}

export interface ILogger {
  debug(message: string, ...args: any[]): void;
  error(message: string, ...args: any[]): void;
  log(message: string, ...args: any[]): void;
  verbose(message: string, ...args: any[]): void;
  warn(message: string, ...args: any[]): void;
}
