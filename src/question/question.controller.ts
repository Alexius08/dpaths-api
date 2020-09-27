import { Controller, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { QuestionService } from './question.service';

@ApiTags('questions')
@Controller('questions')
export class QuestionController {
  private logger = new Logger('PathController');

  constructor(private questionService: QuestionService) {}
}
