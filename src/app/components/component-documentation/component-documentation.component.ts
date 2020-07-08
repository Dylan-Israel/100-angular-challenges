import { Component, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { LoaderType } from '../loader/models/loader-type.enum';
import { RibbonType } from '../ribbon/ribbon-type';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { ButtonMeta } from '../button-toggle/button-meta.model';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SocialMediaIcon } from '../social-media-bar/models/social-media-icon.interface';
import { SocialMedia } from '../social-media-bar/models/social-media.enum';
import { PillType } from '../pill/pill-type.enum';
import { jsonExample } from './json-example';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
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
  public tabs: { title: string, active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];
  public selectedTab = 0;
  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle = { type: RibbonType.Info, location: RibbonLocation.BottomLeft };
  @ViewChild(SnackbarComponent) public snackBar: SnackbarComponent;

  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];

  public loaded = false;
  public socialMedia: SocialMediaIcon[] = [
    { href: 'https://www.facebook.com/groups/190277791450732', type: SocialMedia.Facebook },
    { href: 'https://www.instagram.com/dylansphotos87/', type: SocialMedia.Instagram },
    { href: 'https://www.linkedin.com/in/dylan310/', type: SocialMedia.LinkedIn },
    { href: 'https://twitter.com/PizzaPokerGuy', type: SocialMedia.Twitter },
    { href: 'https://www.YouTube.com/CodingTutorials360', type: SocialMedia.YouTube },
  ];
  public PillType = PillType;
  public isShownOverlay = false;
  public jsonExample = jsonExample;

  public snackbarShow(): void {
    this.snackBar.showMessage('Snackbar Example');
  }

  public debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }
}
