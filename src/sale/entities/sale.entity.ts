import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToMany,
  OneToOne
} from 'typeorm';

import { Product } from '../../product/entities/product.entity'
import { Payment } from '../../payment/entities/payment.entity'

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ nullable: true })
  @OneToOne(type => Payment)
  @JoinColumn({ name: 'payment' })
  payment: string;
  @Column({ nullable: true })
  @ManyToMany(type => Product)
  @JoinColumn({ name: 'product' })
  products: string[];
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}