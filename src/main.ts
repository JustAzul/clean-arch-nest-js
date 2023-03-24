import { AppModule } from './app.module';
import { LoggerGateway } from './@core/adapters/gateways/logger.gateway';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const logger = new LoggerGateway('Bootstrap');
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  logger.verbose(`Application listening on port ${port}`);
}
bootstrap();
