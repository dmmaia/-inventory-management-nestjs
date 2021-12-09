import { Controller, Delete, Get, Post, Put, Query, Body, Param } from '@nestjs/common';
import { PaymentService } from './payment.service'
import { CreatePaymentDto } from './dto/payment.dto'

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService
    ) {}
    
  @Get()
  findAll(){
    return this.paymentService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() createPaymentDto:CreatePaymentDto) {
    return await this.paymentService.update(id, createPaymentDto);
  }
  @Post()
  async create(@Body() createPaymentDto:CreatePaymentDto){
    return await this.paymentService.create(createPaymentDto)
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.paymentService.delete(id);
  }
}
