import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CourseEntity } from '../course/course.entity';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn('uuid')
  articleId: string;

  @Column('text')
  url: string;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @ManyToOne((type) => CourseEntity, (course) => course.articles)
  course: CourseEntity;
}
