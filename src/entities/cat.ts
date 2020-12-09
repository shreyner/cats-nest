import {
  Entity,
  EntityRepositoryType,
  Index,
  PrimaryKey,
  Property,
  Unique,
} from '@mikro-orm/core';

import { ICat } from '../interfaces/cat';
import { CustomCatsRepository } from '../modules/cats/custom-cats.repository';

@Index({ properties: ['name'] })
@Entity({ customRepository: () => CustomCatsRepository })
export class Cat implements ICat {
  @PrimaryKey({ index: true })
  id!: number;

  @Property()
  @Unique()
  name!: string;

  @Property()
  age!: number;

  @Property()
  breed!: string;

  [EntityRepositoryType]?: CustomCatsRepository;
}
