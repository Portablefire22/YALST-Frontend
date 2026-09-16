import { Routes } from '@angular/router';
import {SummonerProfile} from '../summoner/summoner-profile/summoner-profile';
import {Index} from '../index';
import {SummonerNotFound} from '../summoner/summoner-not-found/summoner-not-found';

export const routes: Routes = [
  { path: '', component: Index},
  { path: 'summoner/not-found', component: SummonerNotFound},
  { path: 'summoner/:region/:combined', component: SummonerProfile}
];
