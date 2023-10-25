import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
@ObjectType()
@Entity({
  name: 'posts',
})
export class Posts {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column()
  title: string;
  @Field()
  @Column()
  content: string;
  @ManyToOne((type) => User, (author) => author.posts)
  @Field((type) => User)
  author: User
  @Field()
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  @Field()
  updateAt: Date;
}
