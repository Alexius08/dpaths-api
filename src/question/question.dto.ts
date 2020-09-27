import { IsString } from 'class-validator';

import { CourseEntity } from '../course/course.entity';
import { OptionId, QuestionOption } from './question.entity';

export class QuestionDto {
  @IsString()
  text: string;

  options: QuestionOption[];

  answer: OptionId;

  course: CourseEntity;
}
