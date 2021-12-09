import { Test, TestingModule } from '@nestjs/testing';
import { SaleService } from './sale.service';

describe('SaleService', () => {
  let provider: SaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleService],
    }).compile();

    provider = module.get<SaleService>(SaleService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
