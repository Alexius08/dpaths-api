import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PathEntity {
  @PrimaryGeneratedColumn('uuid')
  pathId: string;

  @Column('text')
  name: string;

  @Column('text')
  icon: string;

  @Column('varchar', { array: true })
  courses: string[];
}
