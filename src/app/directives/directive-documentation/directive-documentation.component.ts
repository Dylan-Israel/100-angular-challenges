import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-documentation',
  templateUrl: './directive-documentation.component.html',
  styleUrls: ['./directive-documentation.component.scss']
})
export class DirectiveDocumentationComponent {
  public log() {
    console.log('Hello World');
  }
}
