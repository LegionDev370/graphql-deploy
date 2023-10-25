import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';
import { Product } from 'src/products/entities/product.entity';
@Resolver('category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(@Args('createCategory') createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }
  @Query(() => [Product])
  findAllCategory() {
    return this.categoryService.findAll();
  }

  findOne(id: string) {
    return this.categoryService.findOne(+id);
  }
}
