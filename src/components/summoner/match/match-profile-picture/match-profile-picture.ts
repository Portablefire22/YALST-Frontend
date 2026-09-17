import {Component, input} from '@angular/core';
import {SummonerDto} from '../../../../services/riot-service/dtos/summoner-dto';

@Component({
  imports: [],
  selector: 'app-match-profile-picture',
  styleUrl: './match-profile-picture.css',
  templateUrl: './match-profile-picture.html',
})
export class MatchProfilePicture {
  summoner = input.required<SummonerDto>();
}
