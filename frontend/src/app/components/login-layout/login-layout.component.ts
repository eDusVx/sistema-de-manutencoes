import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { lastValueFrom } from 'rxjs';
import { SnackBarService } from '../../services/snackbar.service';
import { ControlService } from '../../services/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss'],
})
export class LoginLayoutComponent implements OnInit {
  hide: boolean = false;
  loginForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private controlService: ControlService,
    private routerService: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    this.loading = true;
    try {
      const response = await this.authService.login({
        email: this.loginForm.value.email,
        senha: this.loginForm.value.senha,
      });
      if (response && response.body?.token) {
        this.controlService.setTokenSessionStorage(response.body.token);
        this.routerService.navigate(['/login']);
        this.snackBarService.showMessageSuccess('Login realizado com sucesso!');
      }
    } catch (e: any) {
      return this.snackBarService.showMessageError(
        'Erro ao efetuar o login. ' + e.message
      );
    } finally {
      this.loading = false;
    }
  }
}
