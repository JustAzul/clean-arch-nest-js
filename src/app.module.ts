import { AppController } from './@core/adapters/controllers/app.controller';
import { AppGateway } from './@core/adapters/gateways/app.gateway';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

const providers = [AppGateway];

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers,
  exports: providers,
})
export class AppModule {}
