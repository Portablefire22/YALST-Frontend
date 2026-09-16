import {Component, Input, input} from '@angular/core';
import {SummonerProfileInfo} from '../summoner-profile-info/summoner-profile-info';

@Component({
  imports: [
    SummonerProfileInfo
  ],
  selector: 'app-single-summoner',
  styleUrl: './single-summoner.css',
  templateUrl: './single-summoner.html',
})
export class SingleSummoner {
}
