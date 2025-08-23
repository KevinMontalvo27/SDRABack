  import { Injectable } from '@nestjs/common';
  import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
  import { ConfigService } from '@nestjs/config';

  import { config } from 'process';

  @Injectable()
  export class DatabaseSetUp implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}
      
      createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
          type: 'mysql',
          host: this.configService.get<string>('DB_HOST'),
          port: parseInt(this.configService.get<string>('DB_PORT'), 10),
          username: this.configService.get<string>('DB_USERNAME'),
          password: this.configService.get<string>('DB_PASSWORD'),
          database: this.configService.get<string>('DB_NAME'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      }
    }
