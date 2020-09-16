import { Body, Controller, Get, Logger, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { UserService } from './user.service';
import { UserDto } from "./user.dto";

@ApiTags('users')
@Controller('users')
export class UserController {
  private logger = new Logger('UserController');

  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get list of users' })
  @ApiResponse({
    status: 200,
    description: 'The list of DP app users',
  })
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('login')
  @ApiOperation({ summary: 'Log existing user in' })
  @ApiResponse({
    status: 200,
    description: 'Is the user logged in successfully',
  })
  logIn(@Body() userData: UserDto) {
    this.logger.log(JSON.stringify(userData));
    return this.userService.logIn(userData);
  }

  @Post('signup')
  @ApiOperation({ summary: 'Sign new user up' })
  @ApiResponse({
    status: 200,
    description: 'Is the user signed up successfully',
  })
  signUp(@Body() userData: UserDto) {
    this.logger.log(JSON.stringify(userData));
    return this.userService.signUp(userData);
  }
}
