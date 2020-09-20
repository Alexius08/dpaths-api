import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PathEntity } from './path.entity';
import { PathDto } from './path.dto';

@Injectable()
export class PathService {
  constructor(@InjectRepository(PathEntity) private pathRepository: Repository<PathEntity>) {}

  async getPaths(): Promise<PathEntity[]> {
    return this.pathRepository.find();
  }

  async createPath(data: PathDto): Promise<any> {
    const path = this.pathRepository.create(data);
    await this.pathRepository.save(path);
    return path;
  }

  async getPath(pathId: string): Promise<any> {
    const path = await this.pathRepository.findOne({ where: { pathId } });
    if (!path) {
      throw new HttpException('Path not found', HttpStatus.NOT_FOUND);
    }
    return path;
  }

  async updatePath(pathId: string, data: PathDto): Promise<any> {
    const path = await this.pathRepository.findOne({ where: { pathId } });
    if (!path) {
      throw new HttpException('Path not found', HttpStatus.NOT_FOUND);
    }
    await this.pathRepository.update({ pathId }, data);
    return this.pathRepository.findOne({ where: { pathId } });
  }

  async deletePath(pathId: string): Promise<any> {
    const path = await this.pathRepository.findOne({ where: { pathId } });
    if (!path) {
      throw new HttpException('Path not found', HttpStatus.NOT_FOUND);
    }
    await this.pathRepository.delete({ pathId });
    return { deleted: true };
  }
}
