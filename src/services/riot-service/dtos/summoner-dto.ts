export class SummonerDto {
  constructor(puuid: string, summonerLevel: number, gameName: string, tagline: string, region: string, profileIconId: number, revisionDate: number) {
    this.puuid = puuid;
    this.summonerLevel = summonerLevel;
    this.gameName = gameName;
    this.tagLine = tagline;
    this.region = region;
    this.profileIconId = profileIconId;
    this.revisionDate = revisionDate;
  }
  puuid: string;
  summonerLevel: number;
  gameName: string;
  tagLine: string;
  region: string;
  profileIconId: number;
  revisionDate: number;
}
