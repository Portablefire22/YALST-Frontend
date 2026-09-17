import {Component, input} from '@angular/core';
import {GameQueueDto} from '../../../../services/riot-service/dtos/matches/game-queue-dto/game-queue-dto';
import {MatchDto} from '../../../../services/riot-service/dtos/matches/match-dto/match-dto';
import {
  MatchParticipantDto
} from '../../../../services/riot-service/dtos/matches/match-participants-dto/match-participant-dto/match-participant-dto';
import {Dictionary} from '../../../../interfaces/dictionary/dictionary';

@Component({
  imports: [],
  selector: 'app-match-participants',
  styleUrl: './match-participants.css',
  templateUrl: './match-participants.html',
})
export class MatchParticipants {
  participants = input.required<MatchParticipantDto[]>();
  profileOwner = input.required<MatchParticipantDto>();

  participantsByTeam: Dictionary<MatchParticipantDto[]> = {};

  doSubteams = false;

  ngOnInit() {
    this.setupTeams();
  }

  private setupTeams() {
    for (const index in this.participants()) {
      const participant = this.participants()[index];
      let id: number;
      if (participant.playerSubteamId > 0) {
        this.doSubteams = true;
        id = participant.playerSubteamId;
      } else {
        id = participant.teamId;
      }

      let team: MatchParticipantDto[];
      if (this.participantsByTeam[id] == null) {
        team = [];
        this.participantsByTeam[id] = team;
      } else {
        team = this.participantsByTeam[id];
      }
      team.push(participant);
    }
    console.log(this.participantsByTeam);
  }
}
