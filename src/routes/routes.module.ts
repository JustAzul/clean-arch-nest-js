import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

const providers = [RoutesService];

@Module({
  controllers: [RoutesController],
  providers,
  exports: providers,
})
export class RoutesModule {}
