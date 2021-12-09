import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSaleDto {
  @IsOptional()
  id: string
  @IsNotEmpty()
  payment: string;
  @IsNotEmpty()
  products: string;
  @IsNotEmpty()
  created_at: string;
}