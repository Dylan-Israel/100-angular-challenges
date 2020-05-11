import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { LoaderType } from '../loader/models/loader-type.enum';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exampled Content 2',
      isExpanded: false,
    }
  ];
  public progressValue = 25;
  public loaderType = LoaderType.Loading;
  public toggleValue = false;

  public debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }
}
