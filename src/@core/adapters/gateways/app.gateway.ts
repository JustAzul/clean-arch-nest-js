import { HelloWorldUseCase } from 'src/@core/application/use-cases/hello-world.use-case';
import { Injectable } from '@nestjs/common';
import { LoggerGateway } from './logger.gateway';

@Injectable()
export class AppGateway {
  private logger: LoggerGateway = new LoggerGateway(AppGateway.name);

  public getHello(): string {
    this.logger.log('Getting Hello');

    const useCase = new HelloWorldUseCase();
    const result = useCase.execute();

    return result;
  }
}
