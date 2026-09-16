import {Component, DOCUMENT, Inject} from '@angular/core';
import {HostListener} from '@angular/core';
import {ThemeService} from '../../services/theme/theme-service';



@Component({
  imports: [],
  selector: 'app-theme-switcher',
  styleUrl: './theme-switcher.css',
  templateUrl: './theme-switcher.html',
})
export class ThemeSwitcher {
  constructor(@Inject(ThemeService) private themeService: ThemeService, @Inject(DOCUMENT) private document: Document) {
  }

  switchTheme() {
    this.themeService.switchTheme();
    this.updateIcon();
  }
  @HostListener("window:load")
  onLoad() {
    this.updateIcon();
  }

  updateIcon() {
    const active = this.themeService.getActiveTheme();
    const iconElement = this.document.getElementById("theme-icon");
    if (iconElement == null) return;

    const newIcon = active === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
    iconElement.setAttribute("class", newIcon);
  }

}
