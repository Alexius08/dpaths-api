import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ID } from '../shared/models/id.model';

@Entity()
export class PathEntity {
  @PrimaryGeneratedColumn('uuid')
  pathId: ID;

  @Column('text')
  name: string;

  @Column('text')
  icon: string;

  @Column('varchar', { array: true })
  courses: ID[];
}
