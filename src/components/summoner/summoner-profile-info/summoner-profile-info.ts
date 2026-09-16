import {Component, input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-summoner-profile-info',
  styleUrl: './summoner-profile-info.css',
  templateUrl: './summoner-profile-info.html',
})
export class SummonerProfileInfo {


  summonerLevel = input.required<number>();
  summonerName = input.required<string>();
  tagLine = input.required<string>();
  rankedString = input.required<string>();
  puuid = input.required<string>();

}
