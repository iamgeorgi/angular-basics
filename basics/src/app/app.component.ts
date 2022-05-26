// creating a component
import { Component } from "@angular/core";

@Component({
  selector: 'app-root', // a custom tag name for our component
  // template: `<p>Hello World!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // styles: ['']
})
export class AppComponent {
  name = 'Luis' 
  // we can reuse this componenet, if value of name changes in one component, it won't change in other components
  imgURL = 'https://i.picsum.photos/id/10/2500/1667.jpg'

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value // target object is of EventTarget type so we apply type assertion and change it as HTMLInputElement
  }

  logImg(event: string) {
    console.log(event);
  }
}