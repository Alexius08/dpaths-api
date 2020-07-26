import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('APP_PORT');

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(port || 80);
}
bootstrap();
