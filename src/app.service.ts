import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome To Distilled Paths API Home Page. The Server Is Running!';
  }
}
