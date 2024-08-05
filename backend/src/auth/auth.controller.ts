import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

const name = 'auth';

@ApiTags(name)
@Controller(name)
export class AuthController {
  @Post('/sign-in')
  signIn() {
    return 'Sign In';
  }

  @Post('/sign-up')
  signUp() {
    return 'Sign Up';
  }

  @Post('/password-recovery')
  passwordRecovery() {
    return 'Password Recovery';
  }

  @Post('/password-change')
  passwordChange() {
    return 'Password Change';
  }

  @Post('/logout')
  logout() {
    return 'Logout';
  }
}
