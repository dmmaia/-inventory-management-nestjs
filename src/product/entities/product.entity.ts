import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { ProductCategory } from '../../product-category/entities/product-category.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: 'varchar', length: 45 })
  name: string;
  @Column({ nullable: true })
  @ManyToOne(type => ProductCategory)
  @JoinColumn({ name: 'category' })
  category: string;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}