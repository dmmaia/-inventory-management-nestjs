import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSaleDto } from './dto/sale.dto';
import { Sale } from './entities/sale.entity'
import {uuid} from 'uuidv4'

@Injectable()
export class SaleService {
    constructor(
        @InjectRepository(Sale)
        private saleRepository: Repository<Sale>,
    ){}
    async findAll(){
        return await this.saleRepository.find()
    }
    async create( createSaleDto:CreateSaleDto){
        createSaleDto.id = uuid()
        return await this.saleRepository.save(createSaleDto)
    }
    async findOne(id:string){
        return await this.saleRepository.findOne(id); 
    }
    async update(id: string, createSaleDto:CreateSaleDto){
        const updateregister = await this.saleRepository.update(id, createSaleDto)
        if (updateregister.affected > 0) {
            return this.saleRepository.findOne(id);
        }
    }
    async delete(id: string){
        return await this.saleRepository.delete(id)
    }
}
