import {Component, DOCUMENT, Inject, input, signal, SimpleChanges, WritableSignal} from '@angular/core';
import {SummonerDto} from '../../../services/riot-service/dtos/summoner-dto';
import {RiotService} from '../../../services/riot-service/riot-service';
import {DataDragonService} from '../../../services/data-dragon/data-dragon-service';
import {Dictionary} from '../../../interfaces/dictionary/dictionary';
import {
  ChampionOverviewDto
} from '../../../services/riot-service/dtos/champions/champion-overview-dto/champion-overview-dto';
import {ChampionStats} from '../champion-stats/champion-stats';

@Component({
  imports: [
    ChampionStats
  ],
  selector: 'app-champion-overview',
  styleUrl: './champion-overview.css',
  templateUrl: './champion-overview.html',
})
export class ChampionOverview {

  summoner = input.required<SummonerDto[]>();

  constructor(@Inject(RiotService) private riotService: RiotService,
              @Inject(DataDragonService) protected dataDragonService: DataDragonService,
              @Inject(DOCUMENT) private document: Document) {
  }

  selectedQueue: WritableSignal<string | null> = signal(null);

  queues: WritableSignal<string[]> = signal([]);

  overviews: WritableSignal<Dictionary<ChampionOverviewDto[]>> = signal({});

  ngOnChanges() {
    const puuids = this.summoner()!.map((sum) => sum.puuid);
    this.queues.set([]);
    this.selectedQueue.set(null);
    this.overviews.set({});

    this.riotService.getChampionOverviewsFromPuuids(puuids).subscribe({
      next: result => {
        let max = "";
        let count = 0;
        for (const id in result) {
          this.queues.update(x => {
            return [...x, id];
          });
          if (!this.selectedQueue()) {
            this.selectedQueue.set(id);
          }

          if (max === "") {
            max = id;
            count = 1;
          } else {
            if (result[id].length > count) {
              max = id;
              count = result[id].length;
            }
          }
        }
        this.selectedQueue.set(max);
        this.overviews.set(result);
      },
      error: () => {}
    });
  }

  onSelectChange(value: Event) {
    this.selectedQueue.set((value.target as HTMLSelectElement).value);
  }

  protected readonly Number = Number;
}
