import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';

describe('PaymentService', () => {
  let provider: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentService],
    }).compile();

    provider = module.get<PaymentService>(PaymentService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
