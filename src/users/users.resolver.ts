import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Resolver, ID, Mutation, Query, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
@Resolver('users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Mutation(() => User)
  async createUser(@Args('createUser') createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Query(() => [User])
  async findAllUsers() {
    return this.usersService.findAll();
  }
  @Query(() => User)
  async findOneUser(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }
  @Mutation(() => User)
  async updateUser(
    @Args('id') id: number,
    @Args('updateUser') updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }
  @Mutation(() => User)
  async removeUser(@Args('id', { type: () => ID }) id: number) {
    return this.usersService.remove(id);
  }
}
