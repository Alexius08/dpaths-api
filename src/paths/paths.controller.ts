import { Controller, Get } from '@nestjs/common';

import { PathsService } from './paths.service';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('paths')
@Controller('paths')
export class PathsController {
  constructor(private pathsService: PathsService) {}

  @Get()
  @ApiOperation({ summary: 'Get available learning paths' })
  @ApiResponse({
    status: 200,
    description: 'The list of available learning paths with corresponding courses'
  })
  getPaths() {
    return this.pathsService.getPaths();
  }
}
