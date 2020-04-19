import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';
import { SERVICES_ROUTES } from './services.routes';

@NgModule({
  declarations: [ServiceDocumentationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICES_ROUTES)
  ]
})
export class ServicesModule { }
