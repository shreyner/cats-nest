import { Module } from '@nestjs/common';
import { OrmModule } from '../orm/orm.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Cat } from '../../entities';

@Module({
  imports: [
    OrmModule,
    MikroOrmModule.forFeature({
      entities: [Cat],
    }),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
