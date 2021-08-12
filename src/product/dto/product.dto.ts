import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsOptional()
  id: string
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  category: string;
  @IsNotEmpty()
  created_at: string;
}