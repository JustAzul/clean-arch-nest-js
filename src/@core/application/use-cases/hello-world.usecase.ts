import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HelloWorldUseCase {
  private readonly logger: Logger = new Logger(HelloWorldUseCase.name);

  public getHello(): string {
    this.logger.debug('Getting hello');

    return 'Hello World!';
  }
}
