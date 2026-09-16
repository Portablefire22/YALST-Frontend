import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from '../components/navbar/navbar';
import {ThemeSwitcher} from '../components/theme-switcher/theme-switcher';
import {ThemeService} from '../services/theme/theme-service';
import {HostListener} from '@angular/core';
import {Footbar} from '../components/footbar/footbar/footbar';

@Component({
  imports: [RouterOutlet, Navbar, ThemeSwitcher, Footbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('YalstFront');

  constructor(private themeService: ThemeService) {
  }

  @HostListener("window:load")
  loadTheme() {
    this.themeService.loadTheme();
  }
}
