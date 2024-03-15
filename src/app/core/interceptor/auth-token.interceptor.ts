import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app/app.state";
import { Observable, exhaustMap } from "rxjs";
import { getToken } from "../state/auth/auth.selector";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      exhaustMap(token => {
        console.log(token)
        if (!token) {
          return next.handle(req);
        }

        let modifiedReq = req.clone({
          params: req.params.append('auth', token)
        });
        return next.handle(modifiedReq);
      })
    );
  }

}