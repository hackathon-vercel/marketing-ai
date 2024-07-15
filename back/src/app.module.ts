import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsController } from './contents/contents.controller';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { BuyersPeopleController } from './buyers-people/buyers-people.controller';

@Module({
  imports: [],
  controllers: [AppController, ContentsController, UsersController, AuthController, BuyersPeopleController],
  providers: [AppService],
})
export class AppModule {}
