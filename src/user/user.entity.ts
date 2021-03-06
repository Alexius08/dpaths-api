import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { UserRo } from './user.dto';
import { ID } from '../shared/models/id.model';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: ID;

  @Column({
    type: 'text',
    unique: true,
  })
  userName: string;

  @Column('text')
  password: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toResponseObject(showToken = true): UserRo {
    const { userId, userName, token } = this;
    const responseObject: UserRo = { userId, userName };
    if (showToken) {
      responseObject.token = token;
    }

    return responseObject;
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  private get token(): string {
    const { userId, userName } = this;
    return jwt.sign({ userId, userName }, process.env.DP_JWT_SECRET_KEY, { expiresIn: process.env.DP_JWT_EXP });
  }
}
