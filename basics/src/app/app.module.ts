// decorator for annotating a class as a module
import { NgModule } from "@angular/core"; // adding a metadata for a class
import { BrowserModule } from "@angular/platform-browser"; // module to help to work in browser with angular

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent], // here we declarate the components that we want to use
  bootstrap: [AppComponent] // it defines our root module component
})
export class AppModule {

}