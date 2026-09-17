import {Component, Inject, signal, WritableSignal} from '@angular/core';
import {SummonerProfileInfo} from '../summoner-profile-info/summoner-profile-info';
import {RiotService} from '../../../services/riot-service/riot-service';
import {SummonerDto} from '../../../services/riot-service/dtos/summoner-dto';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {MatchHistory} from '../match-history/match-history';
import {map} from 'rxjs';

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

  rank = "unranked";

  region$: string | undefined;
  combined$: string | undefined;

  constructor(@Inject(RiotService) private riotService: RiotService, @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute, @Inject(Router) private router: Router) {

    // const region: string = this.activatedRoute.snapshot.params['region'];
    // const combined: string = this.activatedRoute.snapshot.params['combined'];

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
      },
      error: () => {
        this.router.navigate(["summoner/not-found"])
      }
    });
  }

}
