import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Path {
  @PrimaryGeneratedColumn()
  pathId?: string;

  @Column()
  name: string;

  @Column()
  icon?: string;

  @Column('varchar', { array: true })
  courses?: string[] = [];
}
