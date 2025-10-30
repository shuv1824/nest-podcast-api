import { Controller, Query, Param, Get, Post, Body } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { ConfigService } from 'src/config/config.service';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodesService: EpisodesService,
    private configService: ConfigService,
  ) {}

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return this.episodesService.findAll(sort);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.episodesService.findOne(id);
  }

  @Get('featured')
  findFeatured() {
    return this.episodesService.findFeatured();
  }

  @Post()
  create(@Body() input: any) {
    console.log(input);
    return this.episodesService.create(input);
  }
}
