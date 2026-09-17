import {Component, Inject, input} from '@angular/core';
import {MatchDto} from '../../../../services/riot-service/dtos/matches/match-dto/match-dto';
import {DataDragonService} from '../../../../services/data-dragon/data-dragon-service';
import {MatchItem} from '../match-item/match-item';
import {
  MatchParticipantDto
} from '../../../../services/riot-service/dtos/matches/match-participants-dto/match-participant-dto/match-participant-dto';


@Component({
  imports: [
    MatchItem
  ],
  selector: 'app-match-inventory',
  styleUrl: './match-inventory.css',
  templateUrl: './match-inventory.html',
})
export class MatchInventory {
  profileOwner = input.required<MatchParticipantDto>();

  constructor(@Inject(DataDragonService) private dataDragonService: DataDragonService) {
  }

  ngOnInit() {

  }
}
