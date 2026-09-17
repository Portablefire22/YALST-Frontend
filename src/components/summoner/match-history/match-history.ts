import {Component, DOCUMENT, HostListener, Inject, input, signal, WritableSignal} from '@angular/core';
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

  // Are we waitin for the last request?
  waiting: boolean = false;

  constructor(@Inject(RiotService) private riotService: RiotService, @Inject(DOCUMENT) private document: Document) {

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

  @HostListener("window:scroll", [])
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= this.document.body.offsetHeight) {
      this.requestMoreGames();
    }
  }

  requestMoreGames() {
    if (this.waiting) return;
    this.waiting = true;

    const lastGame = this.games().at(-1);
    const lastTimeStamp = lastGame?.gameStartTimestamp;
    this.riotService.getMatchesFromPuuids(this.puuids(), 10, lastTimeStamp).subscribe({
      next: result => {
        this.games.update(values => {
          return [...values, ...result];
        })
        this.waiting = false;
      }
    })
  }
}
