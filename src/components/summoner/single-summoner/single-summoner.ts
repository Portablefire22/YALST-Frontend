import {Component, inject, Inject, signal, WritableSignal} from '@angular/core';
import {SummonerProfileInfo} from '../summoner-profile-info/summoner-profile-info';
import {RiotService} from '../../../services/riot-service/riot-service';
import {SummonerDto} from '../../../services/riot-service/dtos/summoner-dto';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {MatchHistory} from '../match-history/match-history';
import {map} from 'rxjs';
import {Dictionary} from '../../../interfaces/dictionary/dictionary';
import {RankDto} from '../../../services/riot-service/dtos/matches/rank-dto/rank-dto';

@Component({
  imports: [
    SummonerProfileInfo,
    MatchHistory,
  ],
  selector: 'app-single-summoner',
  styleUrl: './single-summoner.css',
  templateUrl: './single-summoner.html',
})
export class SingleSummoner {


  summoner: WritableSignal<SummonerDto | null> = signal(null);

  summoners: WritableSignal<SummonerDto[] | null> = signal(null);

  rankedHistory: WritableSignal<Dictionary<RankDto[]>> = signal({});

  rank : WritableSignal<RankDto | null> = signal(null);

  region$: string | undefined;
  combined$: string | undefined;

  constructor(@Inject(RiotService) private riotService: RiotService, @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute, @Inject(Router) private router: Router) {

    let region = this.activatedRoute.params.pipe(map((p => p["region"])));
    let combined = this.activatedRoute.params.pipe(map((p => p["combined"])));

    region.subscribe({
      next: (region) => {
        this.region$ = region;
        if (this.combined$ !== undefined && this.region$ !== undefined) this.getSummoner(this.combined$, this.region$);
      }
    });
    combined.subscribe({
      next: (combined) => {
        this.combined$ = combined;

        if (this.combined$ !== undefined && this.region$ !== undefined) this.getSummoner(this.combined$, this.region$);
      }
    })
  }

  getSummoner(combined: string, region: string) {
    let split = combined.split("-");
    if (split.length != 2) return;
    const gameName = split[0];
    const tagLine = split[1];

    this.combined$ = undefined;
    this.region$ = undefined;

    this.riotService.getSummonerFromName(gameName, tagLine, region).subscribe({
      next: (result) => {
        this.summoner.set(result);
        this.summoners.set([result]);
        this.getRankedHistory(result);
      },
      error: () => {
        this.router.navigate(["summoner/not-found"])
      }
    });
  }

  getRankedHistory(summoner: SummonerDto) {
    this.riotService.getSummonerRankedHistory(summoner.puuid).subscribe({
      next: (result: Dictionary<RankDto[]>) => {
        this.rankedHistory.set(result);

        let rankSolo: RankDto | null = null;
        let rankFlex: RankDto | null = null;

        const solo = result["RANKED_SOLO_5x5"];
        const flex = result["RANKED_FLEX_SR"];

        if (solo.length > 0) rankSolo = solo[0];
        if (flex.length > 0) rankFlex = flex[0];

        console.log(rankSolo);
        console.log(rankFlex);

        if (rankFlex !== null && rankSolo !== null) {
          const highest = RankDto.HighestRank(rankSolo, rankFlex);
          this.rank.set(highest);
          return;
        }
        if (rankSolo !== null) {
          this.rank.set(rankSolo);
          return;
        }

        if (rankFlex !== null) {
          this.rank.set(rankFlex);
          return;
        }
      }
    })
  }
}
