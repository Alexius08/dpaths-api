import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';

@ApiTags('/')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello message for main route' })
  @ApiResponse({
    status: 200,
    description: 'Welcome message from the API confirming its availability',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
