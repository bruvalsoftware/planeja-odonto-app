import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { routes } from '../../../../consts';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  public sendLoginForm(username, password): void {
    this.service.login(username, password).subscribe((res) => {
      this.service.setUserData(res.token, res.username, res.id);
    });

    this.router.navigate([this.routers.DASHBOARD]).then();
  }

  public sendSignForm(): void {
    //this.service.sign();

    //this.router.navigate([this.routers.DASHBOARD]).then();
  }
}
