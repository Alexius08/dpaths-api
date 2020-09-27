import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LabEntity } from './lab.entity';

@Injectable()
export class LabService {
  constructor(@InjectRepository(LabEntity) private labRepository: Repository<LabEntity>) {}
}
