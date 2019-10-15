import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birke='birke';
  testVar = 'white';
  mycolorobj = { color : this.testVar };
  title = 'projetdixoct';
  firstname = 'Arnold Schwarzenegger';
  changeFirstName() {
    this.firstname = 'the TERMINATOR !!!!';
  }
  rechangeFirstName() {
    this.firstname = 'Arnold Schwarzenegger';
  }



}
