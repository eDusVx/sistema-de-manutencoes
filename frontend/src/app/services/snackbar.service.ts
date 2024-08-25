import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

const fiveSeconds = 5 * 1000;

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  showMessageSuccess(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: fiveSeconds,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['msg-success'],
    });
  }

  showMessageError(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: fiveSeconds,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['msg-error'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessageError(`Ocorreu um Erro: ${e.message}`);
    return EMPTY;
  }
}
