import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersServices } from './users.service';

@Module({
  controllers: [UserController],
  providers: [UsersServices],
})
export class UsersModule {}
