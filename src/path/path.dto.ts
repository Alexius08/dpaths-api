import { IsOptional, IsString } from 'class-validator';

import { ID } from '../shared/models/id.model';

export class PathDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsString({ each: true })
  @IsOptional({ each: true })
  courses?: ID[];
}
