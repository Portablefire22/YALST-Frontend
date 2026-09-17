import {ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {DataDragonService} from '../../services/data-dragon/data-dragon-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(async () => {
      // Initialise datadragon with required data from Riot
      const dataDragon = inject(DataDragonService);
      await dataDragon.init();
    }),
    provideRouter(routes)
  ]
};
