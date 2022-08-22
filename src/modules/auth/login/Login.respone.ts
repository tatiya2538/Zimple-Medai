import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginRespone {
  @Field({ nullable: true })
  UserId: number;

  @Field({ nullable: true })
  UserName: string;

  @Field({ nullable: true })
  UserPassword: string;

  @Field({ nullable: true })
  access_token: string;

  @Field({ nullable: true })
  refresh_token: string;
}
