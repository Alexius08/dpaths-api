import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async getUsers() {
    const users = await this.userRepository.find();
    return users;
  }

  logIn(userData: UserDto) {}

  signUp(userData: UserDto) {}
}
