import { Routes } from '@angular/router';
import {SummonerProfile} from '../summoner-profile/summoner-profile';

export const routes: Routes = [
  { path: 'summoner/:region/:combined', component: SummonerProfile}
];
