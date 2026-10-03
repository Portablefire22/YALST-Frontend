import {
  Component,
  DOCUMENT,
  ElementRef,
  Inject,
  inject,
  input,
  InputSignal,
  signal,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {
  ChampionOverviewDto
} from '../../../services/riot-service/dtos/champions/champion-overview-dto/champion-overview-dto';
import {DataDragonService} from '../../../services/data-dragon/data-dragon-service';

@Component({
  imports: [],
  selector: 'app-champion-stats',
  styleUrl: './champion-stats.css',
  templateUrl: './champion-stats.html',
})
export class ChampionStats {

  overview: InputSignal<ChampionOverviewDto> = input.required<ChampionOverviewDto>();

  champIcon = signal("");

  kda = signal(0);
  winrate = signal(0);

  wrClass = signal("");

  @ViewChild('wr') winrateParagraph!: ElementRef;


  constructor(@Inject(DataDragonService) private dataDragonService: DataDragonService,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnChanges() {
    const version = this.dataDragonService.version;
    this.champIcon.set(`https://cdn.communitydragon.org/${version}/champion/${this.overview().championId}/square`);
    let kda = 0;
    if (this.overview().deaths == 0) {
      kda = ((this.overview().kills + this.overview().assists));
    } else {
      kda = ((this.overview().kills + this.overview().assists) / this.overview().deaths);
    }
    this.kda.set(kda);

    let wr = 0;
    if (this.overview().losses > 0) {

      wr = this.overview().wins / (this.overview().wins + this.overview().losses) * 100;
    } else {
      wr = 100;
    }
    this.winrate.set(wr);

    const className = wr >= 50? "good" : "bad";
    this.wrClass.set(className);
  }

}
