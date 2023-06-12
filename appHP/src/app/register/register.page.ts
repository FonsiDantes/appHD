import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form = this.FormBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],

  });

  constructor(
    private FormBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.auth.register( email, password )
      .then(() => {
        this.router.navigate(['/tabs']);
      })
      .catch(error => {
        console.error(error);
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
