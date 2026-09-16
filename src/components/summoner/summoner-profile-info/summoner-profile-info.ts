import {Component, input} from '@angular/core';
import {SummonerDto} from '../../../services/riot-service/dtos/summoner-dto';

@Component({
  imports: [],
  selector: 'app-summoner-profile-info',
  styleUrl: './summoner-profile-info.css',
  templateUrl: './summoner-profile-info.html',
})
export class SummonerProfileInfo {

  summoner = input.required<SummonerDto>();
}
