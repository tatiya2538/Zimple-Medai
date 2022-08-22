import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
class UserInput {
  @Field(() => Int, { nullable: true })
  UserId: number;

  @Field({ nullable: true })
  UserName: string;

  @Field({ nullable: true })
  UserPassword: string;

  @Field({ nullable: true })
  UserEmail: string;

  @Field({ nullable: true })
  UserFullName: string;

  @Field({ nullable: true })
  CreateAt: Date;

  @Field(() => Int, { nullable: true })
  CreateBy: number;

  @Field({ nullable: true })
  UpdateAt: Date;

  @Field(() => Int, { nullable: true })
  UpdateBy: number;
}

export { UserInput };
