import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsController } from './external/rest-api/contents/contents.controller';
import { AuthController } from './auth/auth.controller';
// import { BuyersPeopleController } from './external/rest-api/buyers/buyers.controller';
import { BuyerService } from './buyers-people/services/buyer.service';
import { enviroments } from './enviroments';
import config from './config';
import { validationEnvSchema } from './schemas';
import { ContentService } from './contents/services/content.service';
import { UsersModule } from './external/rest-api/users/users.module';
import { BuyersModule } from './external/rest-api/buyers/buyers.module';
import { ContentsModule } from './external/rest-api/contents/contents.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV]?.file || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: validationEnvSchema,
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule,
    BuyersModule,
    ContentsModule,
  ],
  controllers: [AppController, ContentsController, AuthController],
  providers: [AppService, BuyerService, ContentService],
})
export class AppModule {}
