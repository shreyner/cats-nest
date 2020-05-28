import { Module } from '@nestjs/common';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import options from '../../mikro-orm.config';
import { Cat, User } from '../../entities';

@Module({
  imports: [
    ConfigModule,
    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbUri = configService.get<string>('DATABASE_URI');

        return {
          ...options,
          clientUrl: dbUri,
        };
      },
    }),
    MikroOrmModule.forFeature({
      entities: [Cat, User],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
