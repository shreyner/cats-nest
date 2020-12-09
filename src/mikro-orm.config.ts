import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import config from './config';
import { Cat } from './entities';

const conf = config();
const logger = new Logger('MikroORM');

const options: Options = {
  entities: [Cat],
  clientUrl: conf.databaseUri,
  type: 'postgresql',
  debug: true,
  logger: logger.log.bind(logger),
  migrations: {
    tableName: 'mikro_orm_migrations',
    path: './src/migration',
    pattern: /^[\w-]+\d+\.ts$/,
    transactional: true,
    disableForeignKeys: true,
    allOrNothing: true, // wrap all migrations in master transaction
    emit: 'ts', // migration generation mode
  },
};

export default options;
