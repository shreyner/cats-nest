import { BadRequestException, Injectable } from '@nestjs/common';
import { wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

import { CreateCatDTO } from '../../dto/create-cat';
import { Cat } from '../../entities';
import { CustomCatsRepository } from './custom-cats.repository';

export interface ICatsService {
  create(catDTO: CreateCatDTO): Promise<Cat>;
  findAll(): Promise<Cat[]>;
}

@Injectable()
export class CatsService implements ICatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: CustomCatsRepository,
  ) {}

  async create(catDTO: CreateCatDTO): Promise<Cat> {
    const cat = new Cat();

    wrap(cat).assign(catDTO);
    try {
      await this.catRepository.persistAndFlush(cat);
    } catch (e) {
      throw new BadRequestException('');
    }
    return cat;
  }

  findAll(): Promise<Cat[]> {
    console.log(this.catRepository.findByName);
    return Promise.resolve([]);

    // return this.catRepository.findAll();
  }
}
