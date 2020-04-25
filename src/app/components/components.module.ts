import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(COMPONENTS_ROUTES)
  ]
})
export class ComponentsModule { }
