import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, UseGuards, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { PathService } from './path.service';
import { PathDto } from './path.dto';
import { ValidationPipe } from "../util/validation.pipe";
import { AuthGuard } from "../util/auth.guard";

@ApiTags('paths')
@Controller('paths')
export class PathController {
  private logger = new Logger('PathController');

  constructor(private pathService: PathService) {}

  @Get()
  @ApiOperation({ summary: 'Get available learning paths' })
  @ApiResponse({
    status: 200,
    description: 'The list of available learning paths with corresponding courses',
  })
  getPaths() {
    return this.pathService.getPaths();
  }

  @Get(':pathId')
  @ApiOperation({ summary: 'Get specific learning path data by its id' })
  @ApiResponse({
    status: 200,
    description: 'The learning path with corresponding courses',
  })
  getPath(@Param('pathId') pathId: string) {
    return this.pathService.getPath(pathId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a learning path' })
  @ApiResponse({
    status: 200,
    description: 'The learning path with corresponding courses',
  })
  @UsePipes(ValidationPipe)
  @UseGuards(new AuthGuard())
  createPath(@Body() pathData: PathDto) {
    this.logger.log(JSON.stringify(pathData));
    return this.pathService.createPath(pathData);
  }

  @Patch(':pathId')
  @ApiOperation({ summary: 'Update specific learning path data' })
  @ApiResponse({
    status: 200,
    description: 'The learning path with corresponding courses',
  })
  @UsePipes(ValidationPipe)
  @UseGuards(new AuthGuard())
  updatePath(@Param('pathId') pathId: string, @Body() pathData: PathDto) {
    this.logger.log(JSON.stringify(pathData));
    return this.pathService.updatePath(pathId, pathData);
  }

  @Delete(':pathId')
  @ApiOperation({ summary: 'Delete specific learning path' })
  @ApiResponse({
    status: 200,
    description: 'Is the specified learning path deleted successfully',
  })
  @UseGuards(new AuthGuard())
  deletePath(@Param('pathId') pathId: string) {
    return this.pathService.deletePath(pathId);
  }
}
