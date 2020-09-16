import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Exclude } from 'class-transformer';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({
    type: 'text',
    unique: true,
  })
  username: string;

  @Exclude()
  @Column('text')
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const {userId, username} = this;
    return jwt.sign({userId, username}, process.env.SECRET, { expiresIn: '7d'})
  }
}
