import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsController } from './contents/contents.controller';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { BuyersPeopleController } from './buyers-people/buyers-people.controller';
import { BuyerService } from './buyers-people/services/buyer.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, ContentsController, UsersController, AuthController, BuyersPeopleController],
  providers: [AppService, BuyerService],
})
export class AppModule {}
