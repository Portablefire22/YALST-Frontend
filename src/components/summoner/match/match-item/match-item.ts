import {Component, Inject, input} from '@angular/core';
import {DataDragonService} from '../../../../services/data-dragon/data-dragon-service';

@Component({
  imports: [],
  selector: 'app-match-item',
  styleUrl: './match-item.css',
  templateUrl: './match-item.html',
})
export class MatchItem {
  itemId = input.required<number>();
  version: string;

  constructor(@Inject(DataDragonService) private dataDragonService: DataDragonService) {
    this.version = dataDragonService.version;
  }
}
