import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export default class Users extends BaseEntity {
  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  UserId: number;

  @Field({ nullable: true })
  @Column()
  UserName: string;

  @Field({ nullable: true })
  @Column()
  UserPassword: string;

  @Field({ nullable: true })
  @Column()
  UserEmail: string;

  @Field({ nullable: true })
  @Column()
  UserFullName: string;

  @Field({ nullable: true })
  @CreateDateColumn()
  CreateAt: Date;

  @Field(() => Int, { nullable: true })
  @Column()
  CreateBy: number;

  @Field({ nullable: true })
  @UpdateDateColumn()
  UpdateAt: Date;

  @Field(() => Int, { nullable: true })
  @Column()
  UpdateBy: number;
}
