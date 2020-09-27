import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ID } from '../shared/models/id.model';

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
  questionId: string;

  @Column('text')
  text: string;

  options: QuestionOption[];

  @Column('text')
  answer: OptionId;
}
