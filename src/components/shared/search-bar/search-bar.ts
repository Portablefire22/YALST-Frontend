import {DOCUMENT, Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

import {HostListener} from '@angular/core';
import {LocalStorageService} from '../../../services/local-storage/local-storage-service';

@Component({
  imports: [],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar {

  private searchBox: HTMLInputElement | undefined;
  private regionSelect: HTMLSelectElement | undefined;

  constructor(@Inject(Router) private router: Router, @Inject(DOCUMENT) private document: Document,
              @Inject(LocalStorageService) private storage: LocalStorageService) {
  }

  ngOnInit() {
    this.searchBox = this.document.getElementById("search-box")! as HTMLInputElement;
    this.regionSelect = this.document.getElementById("search-region")! as HTMLSelectElement;

    const saved = this.storage.getItem("lastRegion");
    if (saved !== null && typeof saved == "string") {
      this.regionSelect.value = saved;
    }
  }

  onKey(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.search();
    }
  }

  search() {
    const region = this.regionSelect!.value;
    const combined = this.searchBox!.value;

    // No checks since this is a fancy url replacer

    let tagLine: string;
    let gameName: string;

    const split = combined.split("#");
    if (split.length == 1) {
      tagLine = region;
    } else {
      tagLine = split[split.length - 1];
    }
    gameName = split[0];

    this.storage.setItem("lastRegion", region);
    this.router.navigate(["/summoner", region,`${gameName}-${tagLine}`]);
  }

}
