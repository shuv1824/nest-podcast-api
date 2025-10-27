import { Controller, Query, Param, Get, Post, Body } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return 'This action returns all episodes';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns episode #${id}`;
  }

  @Post()
  create(@Body() input: any) {
    console.log(input);
    return 'This action adds a new episode';
  }
}
