import { Routes } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { PipeDocumentationComponent } from './pipes/pipe-documentation/pipe-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';

export const APP_ROUTES: Routes = [
  { path: '', component: ComponentDocumentationComponent },
  { path: 'directives', component: DirectiveDocumentationComponent },
  { path: 'pipes', component: PipeDocumentationComponent },
  { path: 'services', component: ServiceDocumentationComponent },

];
