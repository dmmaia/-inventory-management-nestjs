import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductCategoryDto } from './dto/product-category.dto';
import { ProductCategory } from './entities/product-category.entity'
import {uuid} from 'uuidv4'

@Injectable()
export class ProductCategoryService {
    constructor(
        @InjectRepository(ProductCategory)
        private productCategoryRepository: Repository<ProductCategory>,
    ){}
    async findAll(){
        return await this.productCategoryRepository.find()
    }
    async create( createProductCategoryDto:CreateProductCategoryDto){
        createProductCategoryDto.id = uuid()
        return await this.productCategoryRepository.save(createProductCategoryDto)
    }
    async findOne(id:string){
        return await this.productCategoryRepository.findOne(id); 
    }
    async update(id: string, createProductCategoryDto:CreateProductCategoryDto){
        const updateregister = await this.productCategoryRepository.update(id, createProductCategoryDto)
        if (updateregister.affected > 0) {
            return this.productCategoryRepository.findOne(id);
        }
    }
    async delete(id: string){
        return await this.productCategoryRepository.delete(id)
    }
}
