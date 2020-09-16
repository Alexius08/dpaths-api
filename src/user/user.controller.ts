import { Controller, Get, Post } from "@nestjs/common";

import { UserService } from './user.service';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('login')
  logIn() {
    return this.userService.logIn();
  }

  @Post('signup')
  signUp() {
    return this.userService.signUp();
  }
}
