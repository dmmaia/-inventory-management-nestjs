import { Module } from '@nestjs/common';
import { ProductCategoryModule } from './product-category/product-category.module'
import configuration from 'src/config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.get('typeorm'),
      imports: [ConfigModule],
      inject: [ConfigService]
    }),
    ProductCategoryModule
  ],
})
export class AppModule {}
