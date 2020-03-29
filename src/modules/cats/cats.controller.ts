import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  @Get()
  async findAll(): Promise<any[]> {
    return Promise.resolve([]);
  }
}
