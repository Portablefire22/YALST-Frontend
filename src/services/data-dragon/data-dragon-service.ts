import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dictionary} from '../../interfaces/dictionary/dictionary';
import {lastValueFrom} from 'rxjs';
import {GameQueueDto} from '../riot-service/dtos/matches/game-queue-dto/game-queue-dto';
import {SummonerSpellsDto} from '../riot-service/dtos/league-of-legends/spells/summoner-spells-dto/summoner-spells-dto';
import {SummonerSpellDto} from '../riot-service/dtos/league-of-legends/spells/summoner-spell-dto/summoner-spell-dto';
import {AugmentDto, AugmentsDto} from '../riot-service/dtos/league-of-legends/augments/augment-dto/augment-dto';

@Service()
export class DataDragonService {

  http: HttpClient;

  version = "";
  private _versions: string[] = [];

  private _queueTranslations: Dictionary<string> = {
    ["5V5 RANKED FLEX GAMES"]: "Ranked Flex",
    ["5V5 RANKED SOLO GAMES"]: "Ranked Solo",
    ["5V5 DRAFT PICK GAMES"]: "Normal Draft",
    ["SWIFTPLAY GAMES"]: "Swift Play"
  }

  private _queues: Dictionary<GameQueueDto> = {
    // Not included in docs for some reason
    ["1750"]: new GameQueueDto(1750, "Rings of Wrath", "Arena", "16 player lobby")
  };

  private _summonerSpells: Dictionary<SummonerSpellDto> = {}

  private _augments: Dictionary<AugmentDto> = {}

  private _cherryTeams: string[] = [
    "Poros",
    "Minions",
    "Scuttles",
    "Krugs",
    "Raptor",
    "Sentinel"
  ]


  constructor() {
    this.http = inject(HttpClient)
  }

  async init() {
    await this.getVersion();
    await this.getQueues();
    await this.getSpells();
    await this.getAugments();
  }

  private async getVersion() {
    this._versions = await lastValueFrom(this.http.get<string[]>("https://ddragon.leagueoflegends.com/api/versions.json"));
    // since this service is purely for the client, we don't care about periodically updating it
    // we could just use 'latest', but I plan to use version to keep accurate icons for when items
    // are removed or changed
    this.version = this._versions[0];
  }

  private async getQueues() {
    const queues = await lastValueFrom(this.http.get<GameQueueDto[]>("https://static.developer.riotgames.com/docs/lol/queues.json"));
    for (const queue of queues) {
      this._queues[`${queue.queueId}`] = queue;
    }
  }

  private async getSpells() {
    const dto = await lastValueFrom(this.http.get<SummonerSpellsDto>(`https://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/summoner.json`));
    for (const key in dto.data) {
      const value = dto.data[key];
      this._summonerSpells[value.key] = value;
    }
  }

  private async getAugments() {
    const dto = await lastValueFrom(this.http.get<AugmentsDto>(`https://raw.communitydragon.org/latest/cdragon/arena/en_us.json`));
    for (const augment of dto.augments) {
      this._augments[augment.id] = augment as AugmentDto;
    }
  }

  getSubTeamName(teamId: number): string | null{
    if (teamId >= this._cherryTeams.length) return null;
    return this._cherryTeams[teamId];
  }

  getQueue(queueId: number): GameQueueDto | null {
    return `${queueId}` in this._queues ? this._queues[queueId] : null;
  }

  getQueueDescription(queueId: number) : string | null {
    const queue = this.getQueue(queueId);
    if (!queue) return null;
    const desc = queue.description;
    return desc.toLocaleUpperCase() in this._queueTranslations? this._queueTranslations[desc.toLocaleUpperCase()] : desc;
  }

  getSummonerSpell(id: number): SummonerSpellDto | null {
    return id in this._summonerSpells ? this._summonerSpells[id] : null;
  }

  getAugment(id: number): AugmentDto | null {
    return id in this._augments ? this._augments[id] : null;
  }

}
