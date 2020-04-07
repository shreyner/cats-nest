import { Injectable } from '@nestjs/common';
import { InjectRepository } from 'nestjs-mikro-orm';
import { Cat } from 'src/entities';
import { EntityRepository, wrap } from 'mikro-orm';
import { CreateCatDTO } from '../../dto/create-cat';

export interface ICatsService {
  create(catDTO: CreateCatDTO): Promise<Cat>;
  findAll(): Promise<Cat[]>;
}

@Injectable()
export class CatsService implements ICatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: EntityRepository<Cat>,
  ) {}

  async create(catDTO: CreateCatDTO): Promise<Cat> {
    const cat = new Cat();

    wrap(cat).assign(catDTO);

    await this.catRepository.persistAndFlush(cat);

    return cat;
  }

  findAll(): Promise<Cat[]> {
    return this.catRepository.findAll();
  }
}
