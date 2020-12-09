import { EntityRepository } from '@mikro-orm/postgresql';

import { Cat } from '../../entities';

export class CustomCatsRepository extends EntityRepository<Cat> {
  public findByName(name: string): Promise<Cat> {
    return this.findOne({ name });
  }
}
