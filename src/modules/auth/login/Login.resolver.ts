import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RepoService } from '../../../service/repo.service';
import { LoginInput } from './Login.input';
import ErrorService from '../../../service/errors.service';
import AuthService from '../../../service/auth.service';
import { LoginRespone } from './Login.respone';

@Resolver()
export class LoginResolver {
  constructor(
    private readonly repoService: RepoService,
    private readonly errorService: ErrorService,
  ) {}

  private errorMessage: string;

  @Mutation(() => LoginRespone)
  public async login(@Args('input') input: LoginInput): Promise<any> {
    const { accessToken, refreshToken, validatePassword } = new AuthService();
    try {
      const user = await this.repoService.usersRepo.findOne({
        UserEmail: input.username,
      });
      if (!user) {
        this.errorMessage = 'AUTH_INCORRECT_LOGIN';
        throw new Error();
      }
      const checkPass = await validatePassword(
        input.password,
        user.UserPassword,
      );
      if (!checkPass) {
        this.errorMessage = 'AUTH_PASSWORD_INVALID';
        throw new Error();
      }

      const access_token = accessToken(user.UserId);
      const refresh_token = refreshToken(user.UserId);
      user['access_token'] = access_token;
      user['refresh_token'] = refresh_token;

      return user;
    } catch (error) {
      this.errorService.errorRespone(this.errorMessage, error);
    }
  }
}
