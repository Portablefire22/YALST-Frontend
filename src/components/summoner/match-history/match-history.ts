import {Component, input} from '@angular/core';
import {SummonerDto} from '../../../services/riot-service/dtos/summoner-dto';

@Component({
  imports: [],
  selector: 'app-match-history',
  styleUrl: './match-history.css',
  templateUrl: './match-history.html',
})
export class MatchHistory {

  summoner = input.required<SummonerDto>();
}
