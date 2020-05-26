import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';
import { SERVICES_ROUTES } from './services.routes';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [ServiceDocumentationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(SERVICES_ROUTES)
  ],
  providers: [UserService]
})
export class ServicesModule { }
