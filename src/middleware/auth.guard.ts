import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import AuthService from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const contx = GqlExecutionContext.create(context).getContext();
    if (!contx.req.headers.authorization) throw new Error('AUTH_TOKEN_INVALID');
    if (
      contx.req.headers.authorization.split(' ')[0] !== 'brearer' ||
      !contx.req.headers.authorization.split(' ')[1]
    ) {
      throw new Error('AUTH_TOKEN_INVALID');
    }
    const { validateAccessToken } = new AuthService();
    const token = contx.req.headers.authorization.split(' ')[1];
    if (validateAccessToken(token)) return true;
    throw new Error('AUTH_TOKEN_EXPIRE');
  }
}
