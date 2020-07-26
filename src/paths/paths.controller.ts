import { Controller, Get } from '@nestjs/common';

import { PathsService } from './paths.service';

@Controller('paths')
export class PathsController {
  constructor(private pathsService: PathsService) {}

  @Get()
  getPaths() {
    return this.pathsService.getPaths();
  }
}
