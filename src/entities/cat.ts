import { Entity, Index, PrimaryKey, Property, Unique } from 'mikro-orm';
import { ICat } from '../interfaces/Cat';

@Index({ properties: ['name'] })
@Entity()
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
}
