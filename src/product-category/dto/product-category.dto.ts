import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductCategoryDto {
  @IsOptional()
  id: string
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  created_at: string;
}