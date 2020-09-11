import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PathEntity } from './paths.entity';

@Injectable()
export class PathsService {
  constructor(@InjectRepository(PathEntity) private pathRepository: Repository<PathEntity>) {}

  async getPaths(): Promise<PathEntity[]> {
    return this.pathRepository.find();
  }
}
