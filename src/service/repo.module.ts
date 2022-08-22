import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepoService } from './repo.service';
import Users from '../db/models/Users.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [RepoService],
  exports: [RepoService],
})
export class RepoModule {}
