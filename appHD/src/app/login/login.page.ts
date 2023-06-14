import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = this.FormBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(

    private FormBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      const { email, password } =this.form.getRawValue();
      this.auth.login( email, password )
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



//login(){
//  const email = this.loginUsuario.value.email;
//  const password = this.loginUsuario.value.password;
//
//  this.loading = true;
//  this.afAuth.signInWithEmailAndPassword(email, password).then((user) =>{
//    if(user.user?.emailVerified){
//      this.router.navigate(['/dashboard']);
//    }
//    else{
//      this.router.navigate(['/verificar-correo']);
//    }
//  }).catch((error) =>{
//    this.loading=false;
//    this.firebaseError.codeError(error.code);  
//  })
//}