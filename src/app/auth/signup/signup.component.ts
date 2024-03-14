import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app/app.state';
import { MatSnackBar } from '@angular/material/snack-bar';
import { setErrorMessage, signupStart } from '../../core/state/auth/auth.actions';
import { getErrorMessage } from '../../core/state/auth/auth.selector';
import { distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  public signup = this.formBuilder.group({
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

  onSignupSubmit() {
    if (!this.signup.value.email || !this.signup.value.password) return;
    const email = this.signup.value.email;
    const password = this.signup.value.password;
    this.store.dispatch(signupStart({ email, password }));
  }
}
