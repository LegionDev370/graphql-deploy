import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Posts } from 'src/posts/entities/post.entity';
@ObjectType()
@Entity({
  name: 'users',
})
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field({ nullable: true })
  @Column({
    nullable: true,
  })
  name: string;
  @Field()
  @Column()
  email: string;
  @Field()
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  @Field()
  updateAt: Date;
  @OneToMany((type) => Posts, (post) => post.author)
  @Field((type) => [Posts])
  posts: Posts[];
}
