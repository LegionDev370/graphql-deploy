import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
@ObjectType()
@Entity({
  name: 'category',
})
export class Category {
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
  @OneToMany((type) => Product, (product) => product.category)
  @Field((type) => [Product])
  products: Product[];
}
