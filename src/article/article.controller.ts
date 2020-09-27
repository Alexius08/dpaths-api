import { Controller, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ArticleService } from './article.service';

@ApiTags('articles')
@Controller('articles')
export class ArticleController {
  private logger = new Logger('PathController');

  constructor(private articleService: ArticleService) {}
}
