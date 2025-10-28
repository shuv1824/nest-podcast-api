import { Injectable } from '@nestjs/common';
import { Episode } from './entity/episode.entity';

@Injectable()
export class EpisodesService {
  private episodes: Episode[] = [];
}
