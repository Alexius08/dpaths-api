import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Path } from '../models/path.model';
import { Repository } from 'typeorm';

@Injectable()
export class PathsService {
  constructor(
    @InjectRepository(Path) private pathRepository: Repository<Path>,
  ) {}

  async getPaths(): Promise<Path[]> {
    return this.pathRepository.find();
  }
}
