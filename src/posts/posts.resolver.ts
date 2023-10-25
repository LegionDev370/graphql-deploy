import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UsersResolver } from 'src/users/users.resolver';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Posts } from './entities/post.entity';
@Resolver('posts')
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersResolver: UsersResolver,
  ) {}
  @Mutation(() => Posts)
  async createPost(
    @Args('createPost') createPostDto: CreatePostDto,
    @Args('authorId') authorId: number,
  ): Promise<Posts> {
    const author = await this.usersResolver.findOneUser(authorId);
    console.log(author);
    return this.postsService.create(createPostDto, author);
  }
  @Query(() => [Posts])
  findAllPosts(): Promise<Posts[]> {
    return this.postsService.findAll();
  }
}
