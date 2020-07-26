import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PathsService } from './paths/paths.service';
import { PathsController } from './paths/paths.controller';
import { Path } from './models/path.model';
import { DataInterceptor } from './util/data.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.model{.ts,.js}'],
        synchronize: true,
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        }
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Path])
  ],
  controllers: [AppController, PathsController],
  providers: [AppService, PathsService, {
    provide: APP_INTERCEPTOR,
    useClass: DataInterceptor,
  }],
})
export class AppModule {}
