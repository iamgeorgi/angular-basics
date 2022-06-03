// creating a component
import { Component } from "@angular/core";

@Component({
  selector: 'app-root', // a custom tag name for our component
  // template: `<p>Hello World!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // styles: ['']
})


// inside the class we store the state of the app 
export class AppComponent {
  newMemberName = "";
  errorMessage = "";
  members: string[] = []; // we specify that members will be array of strings
  
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name cant't be empty";
      return;
    }

    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName = "";
  }

  userInput(event: string) {
    this.newMemberName = event;
  }
}