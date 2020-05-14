import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`.highlighted {color: white;}`]
})
export class AppComponent {
  showParagraph = false;
  clickLog = [];

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    this.clickLog.push(new Date());
  }

}
