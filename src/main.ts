import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * add Swagger documentation for endpoints
   */
  const options = new DocumentBuilder()
    .setTitle('Distilled Paths API')
    .setDescription('REST API for Distilled Paths application')
    .setVersion('1.0')
    .addTag('paths')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
