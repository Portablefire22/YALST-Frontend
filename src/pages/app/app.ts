import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from '../../components/shared/navbar/navbar';
import {ThemeSwitcher} from '../../components/shared/theme-switcher/theme-switcher';
import {ThemeService} from '../../services/theme/theme-service';
import {Footbar} from '../../components/shared/footbar/footbar/footbar';

@Component({
  imports: [RouterOutlet, Navbar, ThemeSwitcher, Footbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('YalstFront');

  constructor(private themeService: ThemeService) {
    this.themeService.loadTheme();
  }
}
