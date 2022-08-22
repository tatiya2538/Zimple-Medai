import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Users from '../db/models/Users.entity';

@Injectable()
export class RepoService {
  public constructor(
    @InjectRepository(Users) public usersRepo: Repository<Users>,
  ) {}
}
