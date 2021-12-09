import { Controller, Delete, Get, Post, Put, Query, Body, Param } from '@nestjs/common';
import { SaleService } from './sale.service'
import { CreateSaleDto } from './dto/sale.dto'

@Controller('sale')
export class SaleController {
  constructor(
    private readonly saleService: SaleService
    ) {}
    
  @Get()
  findAll(){
    return this.saleService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() createSaleDto:CreateSaleDto) {
    return await this.saleService.update(id, createSaleDto);
  }
  @Post()
  async create(@Body() createSaleDto:CreateSaleDto){
    return await this.saleService.create(createSaleDto)
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.saleService.delete(id);
  }
}
