import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

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
  logger.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
