import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const portUse = process.env.GRAPHQL_SERVER_PORT;
  await app.listen(8000);
}
bootstrap();
