import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PathsService } from './paths.service';
import { PathEntity } from './paths.entity';
import { PathsController } from './paths.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PathEntity])],
  controllers: [PathsController],
  providers: [PathsService],
})
export class PathsModule {}
