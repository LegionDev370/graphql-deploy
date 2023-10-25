import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
@Resolver('products')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}
  @Mutation(() => Product)
  async createProduct(
    @Args('createProduct') createProductDto: CreateProductDto,
    @Args('categoryId') category_id: number,
  ) {
    return this.productsService.create(createProductDto, category_id);
  }
  @Query(() => [Product])
  findAllProducts() {
    return this.productsService.findAll();
  }
  @Query(() => Product)
  async findOneProduct(@Args('id') id: number) {
    return this.productsService.findOne(id);
  }
  @Mutation(() => Product)
  async updateProduct(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateProduct') updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }
  @Mutation(() => Product)
  async removeProduct(@Args('id', { type: () => ID }) id: number) {
    return this.productsService.remove(id);
  }
}
