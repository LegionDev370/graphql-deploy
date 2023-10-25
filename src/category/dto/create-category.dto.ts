import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class CreateCategoryDto {
  @Field()
  name?: string;
  @Field({ nullable: true })
  description?: string;
}
