import { Injectable } from '@nestjs/common';

export const WELCOME_TEXT = 'Welcome To Distilled Paths API Home Page. The Server Is Running!';

@Injectable()
export class AppService {
  getHello(): string {
    return WELCOME_TEXT;
  }
}
