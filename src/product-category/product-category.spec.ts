import { Test, TestingModule } from '@nestjs/testing';
import { ProductCategoryService } from './product-category.service';

describe('ProductCategoryService', () => {
  let provider: ProductCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCategoryService],
    }).compile();

    provider = module.get<ProductCategoryService>(ProductCategoryService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
