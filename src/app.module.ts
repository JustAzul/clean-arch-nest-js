import { AppController } from './@core/adapters/controllers/app.controller';
import { HelloWorldUseCase } from './@core/application/use-cases/hello-world.usecase';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AppController],
  providers: [HelloWorldUseCase],
})
export class AppModule {}
