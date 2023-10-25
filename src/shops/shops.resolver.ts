import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql';
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  create(createShopDto: CreateShopDto) {
    return this.shopsService.create(createShopDto);
  }

  findAll() {
    return this.shopsService.findAll();
  }

  findOne(id: string) {
    return this.shopsService.findOne(+id);
  }

  update(id: string, updateShopDto: UpdateShopDto) {
    return this.shopsService.update(+id, updateShopDto);
  }

  remove(id: string) {
    return this.shopsService.remove(+id);
  }
}
