import { Controller, Delete, Get, Post, Put, Query, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/product.dto'

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService
    ) {}
    
  @Get()
  findAll(){
    return this.productService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() createProductDto:CreateProductDto) {
    return await this.productService.update(id, createProductDto);
  }
  @Post()
  async create(@Body() createProductDto:CreateProductDto){
    return await this.productService.create(createProductDto)
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productService.delete(id);
  }
}
