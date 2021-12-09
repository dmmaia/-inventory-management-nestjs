import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePaymentDto {
  @IsOptional()
  id: string
  @IsNotEmpty()
  total: number;
  @IsNotEmpty()
  method: string;
  @IsNotEmpty()
  installments: number;
  @IsNotEmpty()
  created_at: string;
}