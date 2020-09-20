import { IsOptional, IsString } from "class-validator";

export class PathDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsString({ each: true })
  @IsOptional({ each: true })
  courses?: string[];
}
