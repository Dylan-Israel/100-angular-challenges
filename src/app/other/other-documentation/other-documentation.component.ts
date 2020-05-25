import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fadeInOutAnimation } from '../animations/fade-in-out/fade-in-out.animation';
import { IFormDirty } from '../guards/form-dirty/form-dirty.interface';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [fadeInOutAnimation]
})
export class OtherDocumentationComponent implements IFormDirty {
  public isInDOM = true;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  public submit() {
    this.form.reset(this.form.value);
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
}
