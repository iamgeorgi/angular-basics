import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; // uses JIT compilation
import { AppModule } from './app/app.module'; // contains the code for starting our app
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} // if we aren't in prod mode, change detection will run twice 
// if we are in prod mode angular will replace the path with environment.prod.ts in angular.json

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // this function provides the necessary tools for angular to be used in the browser
  // platformBrowserDynamic - it will load an object with information on the current platform
  // bootstrapModule - it will load our app and angular features
  
  