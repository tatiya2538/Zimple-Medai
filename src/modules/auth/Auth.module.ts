import { Module } from '@nestjs/common';
import AuthService from '../../service/auth.service';
import { LoginResolver } from './login/Login.resolver';
import ErrorService from '../../service/errors.service';

@Module({
  providers: [AuthService, LoginResolver, ErrorService],
})
export class AuthModule {}
