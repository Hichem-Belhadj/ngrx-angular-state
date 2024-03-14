import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponseData } from '../models/auth-response-data.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.mode';
import { AppState } from '../state/app/app.state';
import { Store } from '@ngrx/store';
import { autoLogout } from '../state/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  timeoutInterval: any;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
      {email, password, returnSecureToken: true}
    )
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
      {email, password, returnSecureToken: true}
    )
  }

  setUserInLogalstorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    this.runTimeoutInterval(user);
  }

  getUserFromLocalstorage(): User | null {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const user = new User(userData);
      user.expireDate = new Date(userData.expireAt);
      this.runTimeoutInterval(user);
      return user;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('userData');
    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }

  runTimeoutInterval(user: User) {
    const now = new Date().getTime();
    const expirationDate = user.expireDate.getTime();
    const timeInterval = expirationDate - now;

    this.timeoutInterval = setTimeout(() => {
      this.store.dispatch(autoLogout());
    }, timeInterval);
  }

  formatUser(data: AuthResponseData): User {
    return new User(data);
  }

  getErrorMessage(message: String) {
    switch (message) {
      case 'INVALID_LOGIN_CREDENTIALS':
        return 'Invalid login.';  
      case 'INVALID_EMAIL' || 'EMAIL_NOT_FOUND':
        return 'Invalid email.';  
      case 'EMAIL_EXISTS':
        return 'Email already exists.';
      default:
        return 'Unknown error occured. Please try again';
    }
  }
}
