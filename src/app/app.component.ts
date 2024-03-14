import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './core/state/app/app.state';
import { autoLogin } from './core/state/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-angular-state';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(autoLogin());
  }
}
