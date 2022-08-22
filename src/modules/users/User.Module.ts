import { Module } from '@nestjs/common';
import { UsersResolver } from './user/User.Resolver';
import { RegisterResolver } from './register/Register.Resolver';
import ErrorService from '../../service/errors.service';

@Module({
  providers: [UsersResolver, RegisterResolver, ErrorService],
})
export class UsersModule {}
