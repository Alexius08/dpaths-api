import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  // isFinished: boolean; - @todo FE only, remove
}
