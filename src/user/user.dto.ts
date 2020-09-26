import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsString()
  code: string;
}

export class UserRo {
  userId: string;
  userName: string;
  token?: string;
}
