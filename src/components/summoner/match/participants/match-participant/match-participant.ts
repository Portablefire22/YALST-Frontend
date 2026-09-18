import {Component, Inject, input, signal} from '@angular/core';
import {
  MatchParticipantDto
} from '../../../../../services/riot-service/dtos/matches/match-participants-dto/match-participant-dto/match-participant-dto';

import { DataDragonService} from '../../../../../services/data-dragon/data-dragon-service';

@Component({
  imports: [],
  selector: 'app-match-participant',
  styleUrl: './match-participant.css',
  templateUrl: './match-participant.html',
})
export class MatchParticipant {
  isOwner = input.required<boolean>();
  participant = input.required<MatchParticipantDto>();

  champIcon = signal("");

  ownerText = signal("");

  constructor(@Inject(DataDragonService) private dataDragonService: DataDragonService) {
  }

  ngOnInit() {
    this.ownerText.set(this.isOwner() ? "ProfileOwner" : this.participant().summoner.gameName);
    const version = this.dataDragonService.version;
    const championId = this.participant().championId;
    if (championId === 141) {
      const transform = this.participant().championTransform;
      this.champIcon.set((function () {
          switch (transform) {
            case 1:
              return "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/kayn_slay_square.png";
            case 2:
              return "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/kayn_ass_square.png";
            default:
              return `https://cdn.communitydragon.org/${version}/champion/${championId}/square`;
          }
        })()
      );
    } else {
      this.champIcon.set(`https://cdn.communitydragon.org/${version}/champion/${championId}/square`);
    }
  }
}
