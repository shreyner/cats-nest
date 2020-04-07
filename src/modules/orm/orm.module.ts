import { Module } from '@nestjs/common';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { options } from '../../mikro-orm.config';
import { Cat } from '../../entities';

@Module({
  imports: [
    MikroOrmModule.forRoot(options),
    MikroOrmModule.forFeature({
      entities: [Cat],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
