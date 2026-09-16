import { Component } from '@angular/core';
import {SingleSummoner} from '../../components/summoner/single-summoner/single-summoner';

@Component({
  imports: [
    SingleSummoner
  ],
  selector: 'app-summoner-profile',
  styleUrl: './summoner-profile.css',
  templateUrl: './summoner-profile.html',
})
export class SummonerProfile {}
