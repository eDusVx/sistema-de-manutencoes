import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginRequest } from '../interfaces/LoginRequest';
import { LoginResponse } from '../interfaces/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.API_URL;

  constructor(private httpService: HttpClient) {}

  async login(request: LoginRequest): Promise<HttpResponse<LoginResponse>> {
    return await lastValueFrom(
      this.httpService.post<LoginResponse>(
        `${this.apiUrl}/login/auth`,
        request,
        { observe: 'response' }
      )
    );
  }
}
