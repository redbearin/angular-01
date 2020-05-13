import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = 'none';
  clickLog = [];

  toggleParagraph() {
    this.clickLog.push(new Date());
    this.showParagraph === 'none' ? this.showParagraph = 'block' : this.showParagraph = 'none';
  }

  getDisplayStatus() {
    return this.showParagraph;
  }
}
