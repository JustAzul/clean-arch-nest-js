import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class helloWorldUseCase {
  private readonly logger: Logger = new Logger(helloWorldUseCase.name);

  public getHello(): string {
    this.logger.debug('Getting hello');

    return 'Hello World!';
  }
}
