import {Component, Inject, input, signal, WritableSignal} from '@angular/core';
import {DataDragonService} from '../../../../services/data-dragon/data-dragon-service';

@Component({
  imports: [],
  selector: 'app-match-spell',
  styleUrl: './match-spell.css',
  templateUrl: './match-spell.html',
})
export class MatchSpell {
  spellId = input.required<number>();

  spellUri : WritableSignal<string | null> = signal(null);

  constructor(@Inject(DataDragonService) private dataDragonService: DataDragonService) {
  }

  ngOnInit() {
    const spell = this.dataDragonService.getSummonerSpell(this.spellId());
    const version = this.dataDragonService.version;
    if (!spell) return;
    this.spellUri.set(`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`);
  }
}
