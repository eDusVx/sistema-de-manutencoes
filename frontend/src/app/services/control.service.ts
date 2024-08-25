import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  private nameToken = environment.NAME_TOKEN;
  constructor(private router: Router) {}

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  tokenValido(): HttpHeaders {
    const token = this.getTokenSessionStorage();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return headers;
  }

  setTokenSessionStorage(token: string): void {
    sessionStorage.clear();
    return sessionStorage.setItem(this.nameToken, token);
  }

  getTokenSessionStorage(): string | null {
    const token = sessionStorage.getItem(this.nameToken);
    return token ? token : null;
  }

  setTokenHeader(): any {
    const token = this.getTokenSessionStorage();

    if (token) {
      const httpHeder = new HttpHeaders().set(
        'Authorization',
        'Bearer ' + token
      );
      return {
        headers: httpHeder.set('Content-type', 'application/json'),
      };
    } else {
      this.router.navigate(['/login']);
    }
  }
}
