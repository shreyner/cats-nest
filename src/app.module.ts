import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './modules/cats/cats.module';
import { UsersModule } from './modules/users/users.module';
import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountingModule } from './modules/accounting/accounting.module';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    // UsersModule,
    // AccountingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
