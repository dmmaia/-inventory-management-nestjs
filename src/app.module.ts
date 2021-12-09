import { Module } from '@nestjs/common';
import { ProductCategoryModule } from './product-category/product-category.module'
import configuration from 'src/config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module'
import { PaymentModule } from './payment/payment.module'
import { SaleModule } from './sale/sale.module'
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
    ProductCategoryModule,
    ProductModule,
    PaymentModule,
    SaleModule
  ],
})
export class AppModule {}
