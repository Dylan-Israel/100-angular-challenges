import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  public submitMessage() {
    console.log('Check out Dylan\'s 100 Algorithm Challenge or 100 Front End Interview Challenge Courses.');
  }
}
