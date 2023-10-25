import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private readonly postRepo: Repository<Posts>,
  ) {}
  create(createPostDto: CreatePostDto, author: User) {
    const newPosts = this.postRepo.create({ ...createPostDto, author });
    return this.postRepo.save(newPosts);
  }

  findAll() {
    return this.postRepo.find({ relations: ['author'] });
  }
}
