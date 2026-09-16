import {inject, Service} from '@angular/core';
import {DOCUMENT} from '@angular/core';
import {LocalStorageService} from '../local-storage/local-storage-service';

@Service()
export class ThemeService {

  Themes: string[] = ["light", "dark"];
  ThemeIndex = 0;


  private document: Document;
  private storage: LocalStorageService;

  constructor() {
    this.document = inject(DOCUMENT);
    this.storage = inject(LocalStorageService);
  }

  switchTheme(): void {
    // Switch the CSS href to the next theme
    const themeCount = this.Themes.length;
    let newThemeIndex = this.ThemeIndex + 1 >= themeCount ? 0 : this.ThemeIndex + 1;
    this.setTheme(newThemeIndex);
  }

  setTheme(index: number) {
    const themeElement = this.document.getElementById("theme-css");
    themeElement?.setAttribute("href", "/css/theme-" + this.Themes[index] + ".css");
    this.ThemeIndex = index;
    this.storage.setItem("theme", this.ThemeIndex);
  }

  loadTheme() {
    let theme = this.storage.getItem("theme");
    if (theme == null) return;
    this.setTheme(theme);
  }

  getActiveTheme(): string {
    return this.Themes[this.ThemeIndex];
  }

}
