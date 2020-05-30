import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_ROUTES } from './directives.routes';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { SharedModule } from '../shared/shared.module';
import { RippleDirective } from './ripple/ripple.directive';
import { ScaleDirective } from './scale/scale.directive';

@NgModule({
  declarations: [
    DirectiveDocumentationComponent,
    DebounceClickDirective,
    RippleDirective,
    ScaleDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DIRECTIVES_ROUTES)
  ]
})
export class DirectivesModule { }
