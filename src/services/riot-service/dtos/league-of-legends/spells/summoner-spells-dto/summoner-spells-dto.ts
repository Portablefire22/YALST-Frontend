import {Dictionary} from '../../../../../../interfaces/dictionary/dictionary';
import {SummonerSpellDto} from '../summoner-spell-dto/summoner-spell-dto';

export class SummonerSpellsDto {
  constructor(type: string, version: string, data: Dictionary<SummonerSpellDto>) {
    this.type = type;
    this.version = version;
    this.data = data;
  }
  type: string;
  version: string;
  data: Dictionary<SummonerSpellDto>;
}
