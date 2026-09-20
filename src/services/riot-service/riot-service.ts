import {inject,  Service} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SummonerDto} from './dtos/summoner-dto';
import {Observable} from 'rxjs';
import {MatchDto} from './dtos/matches/match-dto/match-dto';
import {
  MatchParticipantDto
} from './dtos/matches/match-participants-dto/match-participant-dto/match-participant-dto';
import {Dictionary} from '../../interfaces/dictionary/dictionary';
import {RankDto} from './dtos/matches/rank-dto/rank-dto';
import {isDevMode} from '@angular/core';

@Service()
export class RiotService {

  private apiUrl;

  http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
    if (isDevMode()) {
      console.log("Development mode, pointing api to localhost");
      this.apiUrl = 'http://localhost:5142';
    } else {
      this.apiUrl = "https://api.kitten.rs"
    }
  }


  getSummonerFromName(gameName: string, tagline: string, region: string): Observable<SummonerDto> {
    return this.http.get<SummonerDto>(`${this.apiUrl}/summoner?gamename=${gameName}&tagline=${tagline}&region=${region}`);
  }

  getSummonerFromPuuid(puuid: string, region: string | null): any {
    let uri = `${this.apiUrl}/summoner?puuid=${puuid}`;
    if (region !== null) {
      uri += `&region=${region}`;
    }
    return this.http.get<SummonerDto>(uri);
  }

  getSummonerRankedHistory(puuid: string) {
    let uri = `${this.apiUrl}/summoner/${puuid}/rank`;
    return this.http.get<Dictionary<RankDto[]>>(uri);
  }

  getMatchesFromPuuids(puuids: string[], count: number, lastTimeStamp: number = 0): Observable<MatchDto[]> {
    let uri = `${this.apiUrl}/matches?count=${count}`;
    for (const puuid of puuids) {
      uri += `&puuid=${puuid}`;
    }
    if (lastTimeStamp > 0) {
      uri += `&lastTimestamp=${lastTimeStamp}`;
    }
    return this.http.get<MatchDto[]>(uri);
  }

  getMatchParticipants(matchId: string): Observable<MatchParticipantDto[]> {
    return this.http.get<MatchParticipantDto[]>(`${this.apiUrl}/matches/${matchId}/participants`);
  }

  submitSummonerForUpdate(puuid: string) {
    this.http.patch(`${this.apiUrl}/summoner/${puuid}`, puuid).subscribe((result) => {});
  }

  isSummonerInQueue(puuid: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/summoner/${puuid}/is-updating`);
  }

}
