import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { OtherDocumentationComponent } from '../../other-documentation/other-documentation.component';

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<OtherDocumentationComponent> {
  canDeactivate(component: OtherDocumentationComponent): boolean {
    if (component.form.dirty) {
      return confirm('Your form is dirty are you sure you want to leave?');
    }

    return true;
  }

}
