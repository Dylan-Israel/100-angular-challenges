import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { OTHER_ROUTES } from './other.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OtherDocumentationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(OTHER_ROUTES)
  ]
})
export class OtherModule { }
