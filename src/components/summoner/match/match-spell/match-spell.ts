import {Component, input, signal, WritableSignal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-match-spell',
  styleUrl: './match-spell.css',
  templateUrl: './match-spell.html',
})
export class MatchSpell {
  spellId = input.required<number>();

  spellUri : WritableSignal<string | null> = signal(null);

}
