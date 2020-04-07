import { ObjectId } from 'mongodb';
import { IdEntity, PrimaryKey, SerializedPrimaryKey } from 'mikro-orm';

export abstract class BaseEntity implements IdEntity<BaseEntity> {
  @PrimaryKey()
  _id: ObjectId;

  @SerializedPrimaryKey()
  id!: string;
}
