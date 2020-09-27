import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ID } from '../shared/models/id.model';

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn('uuid')
  courseId: string;

  @Column('text')
  name: string;

  @Column('text')
  icon: string;

  @Column('text')
  objective: string; // i.e. description

  // isOptional: boolean; - @todo FE only, remove

  @Column('varchar', { array: true })
  articles: ID[];

  @Column('varchar', { array: true })
  labs: ID[];
}
