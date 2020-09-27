import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ID } from '../shared/models/id.model';

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

  // isFinished: boolean; - @todo FE only, remove
}
