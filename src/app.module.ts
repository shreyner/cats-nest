import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './modules/cats/cats.module';
import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
