import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ID } from '../shared/models/id.model';
import { CourseEntity } from '../course/course.entity';

enum OptionId {
  a = 'A',
  b = 'B',
  c = 'C',
  d = 'D',
}

interface QuestionOption {
  optionId: OptionId;
  text: string;
}

@Entity()
export class QuestionEntity {
  @PrimaryGeneratedColumn('uuid')
  questionId: ID;

  @Column('text')
  text: string;

  options: QuestionOption[];

  @Column('text')
  answer: OptionId; // correct answer

  @ManyToOne((type) => CourseEntity, (course) => course.questions)
  course: CourseEntity;
}
