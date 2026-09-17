import {Component, Inject, input, signal} from '@angular/core';
import {
  MatchParticipantDto
} from '../../../../../services/riot-service/dtos/matches/match-participants-dto/match-participant-dto/match-participant-dto';

import {DataDragonService} from '../../../../../services/data-dragon/data-dragon-service';
import {MatchParticipant} from '../match-participant/match-participant';
import {MatchParticipants} from '../match-participants/match-participants';

@Component({
  imports: [
    MatchParticipant,
  ],
  selector: 'app-match-team',
  styleUrl: './match-team.css',
  templateUrl: './match-team.html',
})
export class MatchTeam {
  participants = input.required<MatchParticipantDto[]>();
  profileOwner = input.required<MatchParticipantDto>();
  teamId= input.required<number>();

  teamName = signal("");

  constructor(@Inject(DataDragonService) private dataDragonService: DataDragonService) {
  }

  ngOnInit() {
    this.teamName.set(this.dataDragonService.getSubTeamName(this.teamId()) ?? "");
  }
}
