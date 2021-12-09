import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  providers: [SaleService],
  controllers: [SaleController]
})
export class SaleModule {}
