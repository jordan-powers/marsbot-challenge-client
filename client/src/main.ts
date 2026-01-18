import { provideZoneChangeDetection } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()], })
  .catch(err => console.error(err));

window.oncontextmenu = function(event: MouseEvent) {
  event.preventDefault();
  const element = document.elementFromPoint(event.x, event.y) as any;
  element.click();
}
