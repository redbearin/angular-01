import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = 'none';
  clickLog = [];
  counter = 0;

  toggleParagraph() {
    this.counter++;
    this.clickLog.push(this.counter);
    this.showParagraph === 'none' ? this.showParagraph = 'block' : this.showParagraph = 'none';
  }

  getDisplayStatus() {
    return this.showParagraph;
  }
}
