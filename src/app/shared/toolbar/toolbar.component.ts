import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app/app.state';
import { Observable } from 'rxjs';
import { isAuthenticated } from '../../core/state/auth/auth.selector';
import { autoLogout } from '../../core/state/auth/auth.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  isAuthenticated!: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }

}
