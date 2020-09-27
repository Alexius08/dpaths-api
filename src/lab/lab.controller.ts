import { Controller, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LabService } from './lab.service';

@ApiTags('labs')
@Controller('labs')
export class LabController {
  private logger = new Logger('PathController');

  constructor(private labService: LabService) {}
}
