import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set prefix
  app.setGlobalPrefix('api');
  // Set validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina las propiedades no definidas
      forbidNonWhitelisted: true, // Genera una exception
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
