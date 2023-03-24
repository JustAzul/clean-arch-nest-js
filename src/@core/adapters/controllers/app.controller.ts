import { Controller, Get } from '@nestjs/common';

import { AppGateway } from './../gateways/app.gateway';

@Controller()
export class AppController {
  public constructor(private readonly appGateway: AppGateway) {}

  @Get()
  public async getHello(): Promise<string> {
    const result: string = this.appGateway.getHello();
    return result;
  }
}
