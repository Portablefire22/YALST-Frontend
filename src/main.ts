import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './pages/app/app.config';
import { App } from './pages/app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
