import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
@ObjectType()
@Entity({
  name: 'products',
})
export class Product {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column({
    nullable: true,
  })
  name: string;
  @Field()
  @Column({ nullable: true })
  description: string;
  @Field()
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  @Field()
  updateAt: Date;
  @PrimaryGeneratedColumn()
  @Field((type) => Category)
  category_id: number;
  @ManyToOne((type) => Category, (category) => category.products)
  @Field((type) => Category)
  category: Category;
}
