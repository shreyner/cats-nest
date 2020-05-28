import { IsDefined, IsInt, IsString } from 'class-validator';
import { ICat } from '../interfaces/Cat';

export class CreateCatDTO implements ICat {
  @IsInt()
  @IsDefined()
  age: number;

  @IsString()
  @IsDefined()
  breed: string;

  @IsString()
  @IsDefined()
  name: string;
}
