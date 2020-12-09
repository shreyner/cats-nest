import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService, ICatsService } from './cats.service';

describe('Cats Controller', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CatsService,
          useValue: {
            findAll: () => ([]),
            create: () => ({}),
          },
        },
      ],
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    test('return empty array', async () => {
      const result = await controller.findAll();
      expect(result.length).toBe(0);
    });
  });
});
