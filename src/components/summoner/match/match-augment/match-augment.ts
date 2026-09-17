import {Component, Inject, input, signal, WritableSignal} from '@angular/core';
import {DataDragonService} from '../../../../services/data-dragon/data-dragon-service';

@Component({
  imports: [],
  selector: 'app-match-augment',
  styleUrl: './match-augment.css',
  templateUrl: './match-augment.html',
})
export class MatchAugment {
  augmentId = input.required<number>();

  augmentUri: WritableSignal<string | null> = signal(null);

  constructor(@Inject(DataDragonService) private dataDragonService: DataDragonService) {
  }

  ngOnInit() {
    var aug = this.dataDragonService.getAugment(this.augmentId());
    if (!aug) return;
    this.augmentUri.set(`https://raw.communitydragon.org/latest/game/${aug.iconSmall}`)
  }
}
