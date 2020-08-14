import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_ROUTES } from './directives.routes';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { SharedModule } from '../shared/shared.module';
import { RippleDirective } from './ripple/ripple.directive';
import { ScaleDirective } from './scale/scale.directive';
import { CopyDirective } from './copy/copy.directive';
import { LazyLoadImageDirective } from './lazy-load-image/lazy-load-image.directive';
import { AutoFocusDirective } from './auto-focus/auto-focus.directive';

@NgModule({
  declarations: [
    DirectiveDocumentationComponent,
    DebounceClickDirective,
    RippleDirective,
    ScaleDirective,
    CopyDirective,
    LazyLoadImageDirective,
    AutoFocusDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DIRECTIVES_ROUTES)
  ],
  providers: [
    { provide: 'Navigator', useValue: navigator },
    { provide: 'Document', useValue: document },
    { provide: 'Window', useValue: window },
  ]
})
export class DirectivesModule { }
