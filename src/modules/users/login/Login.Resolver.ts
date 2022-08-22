import { Resolver } from '@nestjs/graphql';
import { RepoService } from '../../../service/repo.service';

@Resolver()
export class LoginResolver {
  constructor(private readonly repoService: RepoService) {}
}
