import {Component, input, signal, SimpleChanges, WritableSignal} from '@angular/core';
import {SummonerDto} from '../../../services/riot-service/dtos/summoner-dto';
import {UpdateSummoner} from '../update-summoner/update-summoner';
import {RankDto} from '../../../services/riot-service/dtos/matches/rank-dto/rank-dto';

@Component({
  imports: [
    UpdateSummoner
  ],
  selector: 'app-summoner-profile-info',
  styleUrl: './summoner-profile-info.css',
  templateUrl: './summoner-profile-info.html',
})
export class SummonerProfileInfo {

  summoner = input.required<SummonerDto>();
  rank$ = input.required<RankDto | null>();

  rank: WritableSignal<string | null> = signal(null);
  lp: WritableSignal<number | null> = signal(null);

  ngOnChanges() {
    const r = this.rank$();
    if (r !== null){
      this.rank.set(RankDto.toRankedString(r!));
      this.lp.set(r.leaguePoints);
    }
  }

}
