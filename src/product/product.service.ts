import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity'
import {uuid} from 'uuidv4'

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ){}
    async findAll(){
        return await this.productRepository.find()
    }
    async create( createProductDto:CreateProductDto){
        createProductDto.id = uuid()
        return await this.productRepository.save(createProductDto)
    }
    async findOne(id:string){
        return await this.productRepository.findOne(id); 
    }
    async update(id: string, createProductDto:CreateProductDto){
        const updateregister = await this.productRepository.update(id, createProductDto)
        if (updateregister.affected > 0) {
            return this.productRepository.findOne(id);
        }
    }
    async delete(id: string){
        return await this.productRepository.delete(id)
    }
}
