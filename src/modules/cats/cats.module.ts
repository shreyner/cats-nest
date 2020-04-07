import { Module } from '@nestjs/common';
import { OrmModule } from '../orm/orm.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [OrmModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
