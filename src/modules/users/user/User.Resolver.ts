import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { RepoService } from '../../../service/repo.service';
import { UsersRespone } from './User.Respone';
import { AuthGuard } from '../../../middleware/auth.guard';

@Resolver()
@UseGuards(AuthGuard)
export class UsersResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [UsersRespone])
  public async getUser(): Promise<any[]> {
    try {
      //   this.errorMessage = '';
      const result = await this.repoService.usersRepo.find();
      return result;
    } catch (error) {
      //   this.errorService.errorRespone(this.errorMessage, error);
      console.log(error);
    }
  }
}
