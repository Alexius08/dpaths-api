import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ID } from '../shared/models/id.model';
import { CourseEntity } from '../course/course.entity';

@Entity()
export class LabEntity {
  @PrimaryGeneratedColumn('uuid')
  labId: ID;

  @Column('text')
  url: string;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @ManyToOne((type) => CourseEntity, (course) => course.labs)
  course: CourseEntity;
}
