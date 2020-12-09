import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import options from '../../mikro-orm.config';
import { Cat } from '../../entities';

@Module({
  imports: [
    ConfigModule,
    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const dbUri = configService.get<string>('DATABASE_URI');

        return {
          ...options,
          clientUrl: dbUri,
        };
      },
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
