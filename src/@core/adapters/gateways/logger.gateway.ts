import { Injectable, Logger as NestJsLogger } from '@nestjs/common';

import { ILogger } from 'src/@core/application/ports/logger';

@Injectable()
export class LoggerGateway implements ILogger {
  private logger: NestJsLogger;
  private isAtProduction = process.env.NODE_ENV === 'production';

  public constructor(loggerName?: string) {
    this.logger = new NestJsLogger(loggerName || LoggerGateway.name);
  }

  public log(message: string): void {
    this.logger.log(message);
  }

  public verbose(message: string): void {
    this.logger.verbose(message);
  }

  public debug(message: string): void {
    if (this.isAtProduction === false) {
      this.logger.debug(message);
    }
  }

  public warn(message: string): void {
    this.logger.warn(message);
  }

  public error(message: string): void {
    this.logger.error(message);
  }
}
