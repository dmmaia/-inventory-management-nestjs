import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePaymentDto } from './dto/payment.dto';
import { Payment } from './entities/payment.entity'
import {uuid} from 'uuidv4'

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private paymentRepository: Repository<Payment>,
    ){}
    async findAll(){
        return await this.paymentRepository.find()
    }
    async create( createPaymentDto:CreatePaymentDto){
        createPaymentDto.id = uuid()
        return await this.paymentRepository.save(createPaymentDto)
    }
    async findOne(id:string){
        return await this.paymentRepository.findOne(id); 
    }
    async update(id: string, createPaymentDto:CreatePaymentDto){
        const updateregister = await this.paymentRepository.update(id, createPaymentDto)
        if (updateregister.affected > 0) {
            return this.paymentRepository.findOne(id);
        }
    }
    async delete(id: string){
        return await this.paymentRepository.delete(id)
    }
}
