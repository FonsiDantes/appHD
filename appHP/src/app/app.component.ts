import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = 
  [ ];
  public labels = [ ];

  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)

);

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async logout() {
    await this.auth.logout();
    this.router.navigate(['./login']);

  }
}
