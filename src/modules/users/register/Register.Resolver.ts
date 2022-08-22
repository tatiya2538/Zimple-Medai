import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RepoService } from '../../../service/repo.service';
import ErrorService from '../../../service/errors.service';
import Users from '../../../db/models/Users.entity';
import { UserInput } from './Register.Input';
import { getManager } from 'typeorm';
import bcrypt from 'bcrypt';

@Resolver()
export class RegisterResolver {
  constructor(
    private readonly repoService: RepoService,
    readonly errorService: ErrorService,
  ) {}

  private errorMessage: string;

  @Mutation(() => Users)
  public async saveUsers(@Args('input') input: UserInput): Promise<any> {
    try {
      console.log(`Input ----> ${JSON.stringify(input)}`);
      let result = {};
      const chkDup = this.repoService.usersRepo.find({
        where: [
          {
            UserName: input.UserName,
          },
          { UserEmail: input.UserEmail },
        ],
      });

      if ((await chkDup).length > 0) {
        this.errorMessage = 'DUPPLICATE_NAME_EMAIL';
        throw new Error();
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(input.UserPassword, salt);
        await getManager().transaction(async (transactionalEntityManager) => {
          result = await transactionalEntityManager.save(Users, {
            UserName: input.UserName,
            UserPassword: hashedPassword,
            UserEmail: input.UserEmail,
            UserFullName: input.UserFullName,
            CreateAt: new Date(),
          });
        });
      }

      console.log(`result ----> ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.errorService.errorRespone(this.errorMessage, error);
    }
  }
}
