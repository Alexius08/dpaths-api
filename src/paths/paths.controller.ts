import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { PathsService } from './paths.service';

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
