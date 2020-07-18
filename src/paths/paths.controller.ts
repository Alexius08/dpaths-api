import { Controller, Get } from '@nestjs/common';

import { PathsService } from './paths.service';

@Controller('paths')
export class PathsController {
  constructor(private pathsService: PathsService) {}

  @Get()
  getMissions() {
    return this.pathsService.getPaths();
  }
}
