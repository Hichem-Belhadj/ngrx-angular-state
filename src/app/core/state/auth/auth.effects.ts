import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { autoLogin, autoLogout, loginStart, loginSuccess, setErrorMessage, signupStart, signupSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private _snackBar: MatSnackBar,
        private router: Router
    ) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action: any) => this.authService.login(action.email, action.password)
                .pipe(
                    map((data) => {
                        const user = this.authService.formatUser(data);
                        this.authService.setUserInLogalstorage(user);
                        return loginSuccess({ user: user, redirect: true });
                    }),
                    catchError(err => of(setErrorMessage({ message: this.authService.getErrorMessage(err.error.error.message) })))
                )
            )
        );
    });

    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(...[loginSuccess, signupSuccess]),
            tap((action) => {
                this._snackBar.dismiss();
                
                if (action.redirect) {
                    this.router.navigate(['/']);
                }
            })
        );
    }, { dispatch: false });

    signUp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupStart),
            exhaustMap((action: any) => this.authService.signUp(action.email, action.password)
                .pipe(
                    map(data => {
                        const user = this.authService.formatUser(data);
                        this.authService.setUserInLogalstorage(user);
                        return signupSuccess({ user: user, redirect: true });
                    }),
                    catchError(err => of(setErrorMessage({ message: this.authService.getErrorMessage(err.error.error.message) })))
                )
            )
        );
    });

    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(autoLogin),
            mergeMap(() => {
                const user = this.authService.getUserFromLocalstorage();
                if (!user) return of();
                return of(loginSuccess({ user, redirect: false }))
            })
        )
    });

    logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(autoLogout),
            map(() => {
                this.authService.logout()
                this.router.navigate(['/']);
            })
        )
    }, { dispatch: false });

}