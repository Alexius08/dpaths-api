import { Body, Controller, Delete, Get, Logger, Param, Post, UseGuards, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { ValidationPipe } from '../util/validation.pipe';
import { AuthGuard } from '../util/auth.guard';

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
  @UseGuards(new AuthGuard())
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('signin')
  @ApiOperation({ summary: 'Sign existing user in' })
  @ApiResponse({
    status: 200,
    description: 'Is the user signed in successfully',
  })
  @UsePipes(ValidationPipe)
  logIn(@Body() userData: UserDto) {
    this.logger.log(JSON.stringify(userData));
    return this.userService.signIn(userData);
  }

  @Post('signup')
  @ApiOperation({ summary: 'Sign new user up' })
  @ApiResponse({
    status: 200,
    description: 'Is the user signed up successfully',
  })
  @UsePipes(ValidationPipe)
  signUp(@Body() userData: UserDto) {
    this.logger.log(JSON.stringify(userData));
    return this.userService.signUp(userData);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete specific user' })
  @ApiResponse({
    status: 200,
    description: 'Is the specified user deleted successfully',
  })
  deletePath(@Param('userId') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
