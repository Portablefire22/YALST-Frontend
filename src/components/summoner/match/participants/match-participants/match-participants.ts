import {Component, input} from '@angular/core';
import {
  MatchParticipantDto
} from '../../../../../services/riot-service/dtos/matches/match-participants-dto/match-participant-dto/match-participant-dto';
import {MatchTeam} from '../match-team/match-team';
import {MatchSubteam} from '../match-subteam/match-subteam';

@Component({
  selector: 'app-match-participants',
  styleUrl: './match-participants.css',
  templateUrl: './match-participants.html',
  imports: [
    MatchTeam,
    MatchSubteam
  ]
})
export class MatchParticipants {
  participants = input.required<MatchParticipantDto[]>();
  profileOwner = input.required<MatchParticipantDto>();

  participantsByTeam: MatchTeamDto[] = [];

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

      const team = this.getTeam(id);
      if (this.doSubteams && team.placement === -1) {
        team.placement = participant.subteamPlacement;
      }
      team.participants.push(participant);
    }
    console.log(this.participantsByTeam);
  }

  private getTeam(id: number): MatchTeamDto {
    let team: MatchTeamDto | undefined;

    team = this.participantsByTeam.find(x => x.teamId == id);
    if (team === undefined) {
      team = new MatchTeamDto(id, [], -1);
      this.participantsByTeam.push(team);
    }

    return team;
  }

}


export class MatchTeamDto {
  constructor(teamId: number, participants: MatchParticipantDto[], placement: number) {
    this.teamId = teamId;
    this.participants = participants;
    this.placement = placement;
  }
  teamId: number;
  participants: MatchParticipantDto[];
  placement: number;
}
