import {Component, input, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-update-summoner',
  styleUrl: './update-summoner.css',
  templateUrl: './update-summoner.html',
})
export class UpdateSummoner {

  puuid = input.required<string>();
  lastUpdated = input.required<number>();

  isDisabled = signal(false);

  lastUpdatedDate = signal(new Date());

  ngOnInit() {
    this.lastUpdatedDate.set(new Date(this.lastUpdated()));
  }

  updateSummoner() {
    console.log("updating...");
  }

}
