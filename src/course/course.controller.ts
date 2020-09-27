import { Controller, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CourseService } from './course.service';

@ApiTags('courses')
@Controller('courses')
export class CourseController {
  private logger = new Logger('CourseController');

  constructor(private courseService: CourseService) {}
}
