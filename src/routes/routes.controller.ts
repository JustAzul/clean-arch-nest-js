import { Controller, Get } from '@nestjs/common';

@Controller()
export class RoutesController {
  @Get()
  public async getHello(): Promise<string> {
    return 'Hello World!';
  }
}
