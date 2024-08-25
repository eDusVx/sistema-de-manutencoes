import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-layout/login-form.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {}
