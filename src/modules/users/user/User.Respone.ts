import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UsersRespone {
  @Field(() => Int, { nullable: true })
  UserId: number;

  @Field({ nullable: true })
  UserFullName: string;

  @Field({ nullable: true })
  UserEmail: string;

  @Field({ nullable: true })
  UserName: string;

  @Field({ nullable: true })
  UserPasword: string;
}
