import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsOptional, IsString } from 'class-validator';

@Entity()
export class PathEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  @IsOptional()
  pathId: string;

  @Column('text')
  @IsString()
  name: string;

  @Column('text')
  @IsString()
  @IsOptional()
  icon: string;

  @Column('varchar', { array: true })
  @IsString({ each: true })
  @IsOptional({ each: true })
  courses: string[];
}
