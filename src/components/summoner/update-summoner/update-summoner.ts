import {Component, Inject, input, signal} from '@angular/core';
import {RiotService} from '../../../services/riot-service/riot-service';

@Component({
  imports: [],
  selector: 'app-update-summoner',
  styleUrl: './update-summoner.css',
  templateUrl: './update-summoner.html',
})
export class UpdateSummoner {

  puuid = input.required<string>();
  lastUpdated = input.required<number>();

  isDisabled = signal(true);

  afterFirst = false;

  lastUpdatedDate = signal(new Date());

  constructor(@Inject(RiotService) private riotService: RiotService) {
  }

  ngOnInit() {
    this.lastUpdatedDate.set(new Date(this.lastUpdated()));
    this.checkQueue();
  }

  checkQueue() {
    this.riotService.isSummonerInQueue(this.puuid()).subscribe({
      next: (result) => {
        this.isDisabled.set(result);
        if (result) {
          this.setTimer();
        } else if (this.afterFirst) {
          location.reload();
        }
        this.afterFirst = true;
      }
    })
  }

  // Every 2s check if the summoner is finished updating, if so refresh
  setTimer() {
    setTimeout(() => {
      this.checkQueue();
    }, 2000);
  }

  updateSummoner() {
    if (this.isDisabled()) return;
    this.riotService.submitSummonerForUpdate(this.puuid());
    setTimeout(() => {
      this.setTimer();
    }, 250);
  }

}
