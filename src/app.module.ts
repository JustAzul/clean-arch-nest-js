import { AppController } from './@core/adapters/controllers/app.controller';
import { ConfigModule } from '@nestjs/config';
import { HelloWorldUseCase } from './@core/application/use-cases/hello-world.usecase';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [HelloWorldUseCase],
})
export class AppModule {}
