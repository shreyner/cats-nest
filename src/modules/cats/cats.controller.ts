import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CatsService, ICatsService } from './cats.service';
import { Cat } from '../../entities';
import { CreateCatDTO } from '../../dto/create-cat';

@Controller('cats')
export class CatsController {
  constructor(
    @Inject(CatsService) private readonly catsService: ICatsService,
  ) {}

  @Post()
  create(@Body() catDTO: CreateCatDTO) {
    return this.catsService.create(catDTO);
  }

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
