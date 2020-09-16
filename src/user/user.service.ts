import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserDto } from "./user.dto";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async getUsers(): Promise<any> {
    return this.userRepository.find();
  }

  async logIn(userData: UserDto): Promise<any> {
    const { username, password } = userData;
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException('Invalid username/password', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  async signUp(userData: UserDto): Promise<any> {
    const { username } = userData;
    let user = await this.userRepository.findOne({ where: { username } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = this.userRepository.create(userData);
    await this.userRepository.save(user);
    return user;
  }
}
