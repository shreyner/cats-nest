import { Injectable } from '@nestjs/common';
import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from '../../entities';
import { IUser } from '../../interfaces/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async create(userDTO: IUser): Promise<User> {
    const user = new User();

    wrap(user).assign(userDTO);

    await this.userRepository.persistAndFlush(user);

    return user;
  }
}
