import { Entity, Index, PrimaryKey, Property, Unique } from 'mikro-orm';
import { IUser } from '../interfaces/User';

@Index({
  properties: ['login', 'email'],
})
@Entity()
export class User implements IUser {
  @PrimaryKey({ index: true })
  id!: number;

  @Property()
  @Unique()
  login: string;

  @Property()
  @Unique()
  email: string;
}
