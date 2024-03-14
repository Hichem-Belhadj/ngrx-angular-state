import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppState } from '../core/state/app/app.state';
import { Store } from '@ngrx/store';
import { loginStart, setErrorMessage } from '../core/state/auth/auth.actions';
import { Observable, distinctUntilChanged, filter, of } from 'rxjs';
import { getErrorMessage } from '../core/state/auth/auth.selector';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  public login = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store.select(getErrorMessage).pipe(
      distinctUntilChanged(),
      filter(message => message!== '')
    )
    .subscribe(message =>  {
      let snackBarRef = this._snackBar.open(message, 'close');

      snackBarRef.afterDismissed().subscribe(() => {
        this.store.dispatch(setErrorMessage({ message: '' }))
      });
    });
  }

  onLoginSubmit() {
    if (!this.login.value.email || !this.login.value.password) return;
    const email = this.login.value.email;
    const password = this.login.value.password;
    this.store.dispatch(loginStart({ email, password }));
  }

}
