import { Entity, Property } from 'mikro-orm';
import { BaseEntity } from './BaseEntity';
import { ICat } from '../interfaces/cat';

@Entity()
export class Cat extends BaseEntity implements ICat {
  @Property()
  name!: string;

  @Property()
  age!: number;

  @Property()
  breed!: string;
}
