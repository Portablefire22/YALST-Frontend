import {Component, input} from '@angular/core';
import {ChampionOverview} from "../champion-overview/champion-overview";
import {MatchHistory} from "../match-history/match-history";
import {SummonerDto} from '../../../services/riot-service/dtos/summoner-dto';

@Component({
    imports: [
        ChampionOverview,
        MatchHistory
    ],
  selector: 'app-summoners-content',
  styleUrl: './summoners-content.css',
  templateUrl: './summoners-content.html',
})
export class SummonersContent {
  summoners = input.required<SummonerDto[]>();
}
