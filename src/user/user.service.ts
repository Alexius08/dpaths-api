import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserDto, UserRo } from "./user.dto";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async getUsers(): Promise<UserRo[]> {
    const users = await this.userRepository.find();
    return users.map(user => user.toResponseObject(false))
  }

  async signIn(userData: UserDto): Promise<UserRo> {
    const { userName, password } = userData;
    const user = await this.userRepository.findOne({ where: { userName } });
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException('Invalid username/password', HttpStatus.BAD_REQUEST);
    }
    return user.toResponseObject();
  }

  async signUp(userData: UserDto): Promise<UserRo> {
    const { userName } = userData;
    let user = await this.userRepository.findOne({ where: { userName } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = this.userRepository.create(userData);
    await this.userRepository.save(user);
    return user.toResponseObject();
  }
}
