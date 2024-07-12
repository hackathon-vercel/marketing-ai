import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

const name = 'users'

@ApiTags(name)
@Controller(name)
export class UsersController {
    @Get('/profile')
    findMyProfile() {
        return ''
    }
}
