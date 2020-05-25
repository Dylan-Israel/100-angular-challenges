import { Routes } from '@angular/router';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { FormDirtyGuard } from './guards/form-dirty/form-dirty.guard';

export const OTHER_ROUTES: Routes = [
  { path: '', component: OtherDocumentationComponent, canDeactivate: [FormDirtyGuard] }
];
