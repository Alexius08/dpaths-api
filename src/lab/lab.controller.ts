import { Controller, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LabService } from './lab.service';

@ApiTags('labs')
@Controller('labs')
export class LabController {
  private logger = new Logger('LabController');

  constructor(private labService: LabService) {}
}
