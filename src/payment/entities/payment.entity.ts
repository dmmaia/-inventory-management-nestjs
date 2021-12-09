import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: 'float' })
  total: number;
  @Column({ type: 'varchar', length: 45 })
  method: string;
  @Column({ type: 'int' })
  installments: number;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}