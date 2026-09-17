import {Component, Inject, input, signal, WritableSignal} from '@angular/core';
import {SummonerDto} from '../../../services/riot-service/dtos/summoner-dto';
import {MatchDto} from '../../../services/riot-service/dtos/matches/match-dto/match-dto';
import {RiotService} from '../../../services/riot-service/riot-service';
import {MatchPreview} from '../match/match-preview/match-preview';

@Component({
  imports: [
    MatchPreview
  ],
  selector: 'app-match-history',
  styleUrl: './match-history.css',
  templateUrl: './match-history.html',
})

export class MatchHistory {

  summoner = input.required<SummonerDto[]>();
  games: WritableSignal<MatchDto[]> = signal([]);
  puuids: WritableSignal<string[]> = signal([]);

  constructor(@Inject(RiotService) private riotService: RiotService) {

  }


  ngOnChanges() {
    const puuids = this.summoner()!.map((sum) => sum.puuid);
    this.puuids.set(puuids);
    this.riotService.getMatchesFromPuuids(puuids,
      10, 0).subscribe({
      next: result => {this.games.set(result)},
      error: () => {}
    });
  }

}
