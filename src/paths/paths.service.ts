import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Path } from '../models/path.model';

@Injectable()
export class PathsService {
  constructor(
    @InjectRepository(Path) private pathRepository: Repository<Path>,
  ) {}

  async getPaths(): Promise<Path[]> {
    return this.pathRepository.find();
  }
}
