import {Component, Inject, input, signal, WritableSignal} from '@angular/core';
import {MatchDto} from '../../../../services/riot-service/dtos/matches/match-dto/match-dto';
import {MatchProfilePicture} from '../match-profile-picture/match-profile-picture';
import {RiotService} from '../../../../services/riot-service/riot-service';

import {
  MatchParticipantDto
} from '../../../../services/riot-service/dtos/matches/match-participants-dto/match-participant-dto/match-participant-dto';
import {MatchSpell} from '../match-spell/match-spell';
import {MatchAugment} from '../match-augment/match-augment';
import {TimeInterval} from 'rxjs';
import {DataDragonService} from '../../../../services/data-dragon/data-dragon-service';

@Component({
  imports: [
    MatchProfilePicture,
    MatchSpell,
    MatchAugment
  ],
  selector: 'app-match-preview',
  styleUrl: './match-preview.css',
  templateUrl: './match-preview.html',
})
export class MatchPreview {
  game = input.required<MatchDto>();
  showProfileIcon = input.required<boolean>();
  puuids = input.required<string[]>();

  winText = signal("");

  version = "latest";

  doAugments = signal(false);

  championIcon = signal("");

  participants: WritableSignal<MatchParticipantDto[]> = signal([]);
  profileOwner: WritableSignal<MatchParticipantDto | null> = signal(null);

  gameDuration: WritableSignal<string> = signal("");
  gameDescription: WritableSignal<string> = signal("");
  constructor(@Inject(RiotService) private riotService: RiotService, @Inject(DataDragonService) private dataDragonService: DataDragonService) {
  }

  ngOnInit() {
    this.getParticipants();
    this.setDuration();

  }

  getParticipants() {
    this.riotService.getMatchParticipants(this.game().matchId).subscribe({
      next: result => {
        this.participants.set(result);
        this.profileOwner.set(result.find(x => this.puuids().includes( x.summoner.puuid))!);

        this.doAugments.set(this.profileOwner()?.playerAugment1 != 0);
        this.winText.set(this.profileOwner()?.win ? "Victory" : "Defeat");

        const desc = this.dataDragonService.getQueueDescription(this.game().queueId);
        this.gameDescription.set(desc ?? this.game().queueId.toString());

        const championId = this.profileOwner()?.championId;
        const version = this.version;
        if (championId === 141) {
          const transform = this.profileOwner()!.championTransform;
          this.championIcon.set((function () {
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
          this.championIcon.set(`https://cdn.communitydragon.org/${version}/champion/${championId}/square`);
        }
      }
    });
  }


  private setDuration() {
    const ms = this.game().gameEndTimestamp - this.game().gameStartTimestamp;
    let seconds = ms / 1000;
    const hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    let str = "";
    if (hours > 0) {
      if (hours < 10) str += "0";
      str += `${hours}:`
    }
    if (minutes < 10) str += "0";
    str += `${minutes}:`;
    if (seconds < 10) str += "0";
    str += `${seconds}`;
    this.gameDuration.set(str);
  }

}
