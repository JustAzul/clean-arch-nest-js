import { Injectable, Logger } from '@nestjs/common';

import { IUseCase } from './shared/default.use-case';

@Injectable()
export class HelloWorldUseCase implements IUseCase<never, string> {
  private readonly logger: Logger = new Logger(HelloWorldUseCase.name);

  public execute(): string {
    this.logger.debug('Getting Hello');
    return 'Hello World!';
  }
}
