import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 3030;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('test_task_logru')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('Siniakou Alex')
    .addBearerAuth(undefined, 'defaultBearerAuth')
    .build();

  const options = {
    swaggerOptions: {
      authAction: {
        defaultBearerAuth: {
          name: 'defaultBearerAuth',
          schema: {
            description: 'Default',
            type: 'http',
            in: 'header',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
          // value: 'thisIsASampleBearerAuthToken123',
        },
      },
    },
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs/api', app, document, options);
  await app.listen(PORT, () => {
    console.log(`Server started on port =${PORT}`);
  });
}
bootstrap();
