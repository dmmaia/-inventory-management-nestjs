import { Controller, Delete, Get, Post, Put, Query, Body, Param } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service'
import { CreateProductCategoryDto } from './dto/product-category.dto'

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService
    ) {}
    
  @Get()
  findAll(){
    return this.productCategoryService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productCategoryService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() createRestricaoEstadoDto:CreateProductCategoryDto) {
    return await this.productCategoryService.update(id, createRestricaoEstadoDto);
  }
  @Post()
  async create(@Body() createRestricaoEstadoDto:CreateProductCategoryDto){
    return await this.productCategoryService.create(createRestricaoEstadoDto)
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productCategoryService.delete(id);
  }
}
