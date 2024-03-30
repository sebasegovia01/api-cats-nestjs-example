import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // para que valide los campos requeridos de los dtos
  app.useGlobalPipes(new ValidationPipe());

  // server port
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  // swagger
  initSwagger(app, port);

  await app.listen(port, () => {
    console.log(`app running in port ${port}`);
  });
}

function initSwagger(app: INestApplication, port: number): void {
  const config = new DocumentBuilder()
    .setTitle('api cats')
    .setDescription('example api cats')
    .setVersion('1.0')
    .setExternalDoc('Postman collection', '/api-doc-json')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  console.log(`[Swagger URL]: http://localhost:${port}/api-doc`);
  console.log(`[Postman JSON]: http://localhost:${port}/api-doc-json`);

  SwaggerModule.setup('api-doc', app, document);
}

void bootstrap();
