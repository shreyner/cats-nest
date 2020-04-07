import { Logger } from '@nestjs/common';
import { Options } from 'mikro-orm';
import { Cat, BaseEntity } from './entities';

const logger = new Logger('MikroORM');
export const options: Options = {
  entities: [Cat, BaseEntity],
  entitiesDirs: ['dist/entities'],
  entitiesDirsTs: ['src/entities'],
  clientUrl: 'mongodb://nest-user-1:example@localhost:27017/nest-cats',
  debug: true,
  logger: logger.log.bind(logger),
};
