import { Controller, Get } from '@nestjs/common';

import { HelloWorldUseCase } from 'src/@core/application/use-cases/hello-world.usecase';

@Controller()
export class AppController {
  public constructor(private readonly helloWorldUseCase: HelloWorldUseCase) {}

  @Get()
  public async getHello(): Promise<string> {
    const result: string = this.helloWorldUseCase.execute();
    return result;
  }
}
