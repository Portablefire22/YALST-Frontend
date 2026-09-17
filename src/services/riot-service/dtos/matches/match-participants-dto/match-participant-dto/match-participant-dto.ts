import {SummonerDto} from '../../../summoner-dto';

export class MatchParticipantDto {
  constructor(summoner: SummonerDto, teamId: number, assists: number, championLevel: number, championName: string, championId: number, championTransform: number, damageDealtToBuildings: number, damageDealtToObjectives: number, damageSelfMitigated: number, deaths: number, firstBlood: boolean, firstTowerKill: boolean, goldEarned: number, teamPosition: string, item0: number, item1: number, item2: number, item3: number, item4: number, item5: number, item6: number, kills: number, largestMultiKill: number, magicDamageDealtToChampions: number, physicalDamageDealtToChampions: number, trueDamageDealtToChampions: number, placement: number, subteamPlacement: number, playerAugment1: number, playerAugment2: number, playerAugment3: number, playerAugment4: number, playerSubteamId: number, summoner1Id: number, summoner2Id: number, totalDamageTaken: number, visionScore: number, win: boolean, mainRune: number, subRune: number) {
    this.summoner = summoner;
    this.teamId = teamId;
    this.assists = assists;
    this.championLevel = championLevel;
    this.championName = championName;
    this.championId = championId;
    this.championTransform = championTransform;
    this.damageDealtToBuildings = damageDealtToBuildings;
    this.damageDealtToObjectives = damageDealtToObjectives;
    this.damageSelfMitigated = damageSelfMitigated;
    this.deaths = deaths;
    this.firstBlood = firstBlood;
    this.firstTowerKill = firstTowerKill;
    this.goldEarned = goldEarned;
    this.teamPosition = teamPosition;
    this.item0 = item0;
    this.item1 = item1;
    this.item2 = item2;
    this.item3 = item3;
    this.item4 = item4;
    this.item5 = item5;
    this.item6 = item6;
    this.kills = kills;
    this.largestMultiKill = largestMultiKill;
    this.magicDamageDealtToChampions = magicDamageDealtToChampions;
    this.physicalDamageDealtToChampions = physicalDamageDealtToChampions;
    this.trueDamageDealtToChampions = trueDamageDealtToChampions;
    this.placement = placement;
    this.subteamPlacement = subteamPlacement;
    this.playerAugment1 = playerAugment1;
    this.playerAugment2 = playerAugment2;
    this.playerAugment3 = playerAugment3;
    this.playerAugment4 = playerAugment4;
    this.playerSubteamId = playerSubteamId;
    this.summoner1Id = summoner1Id;
    this.summoner2Id = summoner2Id;
    this.totalDamageTaken = totalDamageTaken;
    this.visionScore = visionScore;
    this.win = win;
    this.mainRune = mainRune;
    this.subRune = subRune;
  }

  summoner: SummonerDto;
  teamId: number;

  assists: number;
  championLevel: number;
  championName: string;
  championId: number;
  championTransform: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageSelfMitigated: number;
  deaths: number;
  firstBlood: boolean;
  firstTowerKill: boolean;
  goldEarned: number;
  teamPosition: string;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  kills: number;
  largestMultiKill: number
  magicDamageDealtToChampions: number;
  physicalDamageDealtToChampions: number;
  trueDamageDealtToChampions: number;

  placement: number;
  subteamPlacement: number;
  playerAugment1: number;
  playerAugment2: number;
  playerAugment3: number;
  playerAugment4: number;
  playerSubteamId: number;
  summoner1Id: number;
  summoner2Id: number;
  totalDamageTaken: number;
  visionScore: number;
  win: boolean;
  mainRune: number;
  subRune: number;

}
