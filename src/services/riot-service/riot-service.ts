import {inject, Inject, Service} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SummonerDto} from './dtos/summoner-dto';
import {map, Observable} from 'rxjs';
@Service()
export class RiotService {

  private apiUrl = 'http://localhost:5142';

  http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
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


}
