import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto, category_id: number) {
    const product = await this.productRepository.save({
      ...createProductDto,
      category_id,
    });
    return product;
  }

  async findAll() {
    const products = await this.productRepository.find();
    return products;
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
    });
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productRepository.update({ id }, { ...updateProductDto });
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.productRepository.delete({ id });
    return id;
  }
}
