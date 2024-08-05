import { Controller, Get } from '@nestjs/common';
import { UsersServices } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersServices) {}

  @Get()
  find() {
    return this.userService.find('1');
  }
}
