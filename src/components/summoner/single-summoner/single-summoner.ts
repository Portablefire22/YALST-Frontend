import {Component, Inject, signal, WritableSignal} from '@angular/core';
import {SummonerProfileInfo} from '../summoner-profile-info/summoner-profile-info';
import {RiotService} from '../../../services/riot-service/riot-service';
import {SummonerDto} from '../../../services/riot-service/dtos/summoner-dto';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {MatchHistory} from '../match-history/match-history';

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
  rank = "unranked";

  constructor(@Inject(RiotService) private riotService: RiotService, @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute, @Inject(Router) private router: Router) {

    const region: string = this.activatedRoute.snapshot.params['region'];
    const combined: string = this.activatedRoute.snapshot.params['combined'];

    let split = combined.split("-");
    if (split.length != 2) return;
    const gameName = split[0];
    const tagLine = split[1];

      this.riotService.getSummonerFromName(gameName, tagLine, region).subscribe({
        next: (result) => {
          this.summoner.set(result);
        },
        error: () => {
          router.navigate(["summoner/not-found"])
        }
      });
  }
}
