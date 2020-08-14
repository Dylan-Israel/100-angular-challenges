import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { COMPONENTS_ROUTES } from './components.routes';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { SharedModule } from '../shared/shared.module';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { LoaderComponent } from './loader/loader.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { ToggleComponent } from './toggle/toggle.component';
import { QuoteComponent } from './quote/quote.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PagingComponent } from './paging/paging.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { PillComponent } from './pill/pill.component';
import { PillFiltersComponent } from './pill-filters/pill-filters.component';
import { PasswordComponent } from './password/password.component';
import { OverlayComponent } from './overlay/overlay.component';
import { RadioSelectionComponent } from './radio-selection/radio-selection.component';

@NgModule({
  declarations: [ComponentDocumentationComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    CreditCardInputComponent,
    LoaderComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ToggleComponent,
    QuoteComponent,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    SimpleTableComponent,
    PagingComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    SimplePopupComponent,
    CountdownTimerComponent,
    SkeletonLoaderComponent,
    BottomSheetComponent,
    FieldsetComponent,
    PillComponent,
    PillFiltersComponent,
    PasswordComponent,
    OverlayComponent,
    RadioSelectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(COMPONENTS_ROUTES)
  ]
})
export class ComponentsModule { }
