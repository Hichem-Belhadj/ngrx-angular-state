import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import {customIncrement} from "../../../core/state/counter/counter.actions";
import {AppState} from "../../../core/state/app/app.state";

@Component({
  selector: 'app-custom-counter-ngrx-input',
  templateUrl: './custom-counter-ngrx-input.component.html',
  styleUrl: './custom-counter-ngrx-input.component.scss'
})
export class CustomCounterNgrxInputComponent {
  value = 0;

  constructor(private store: Store<AppState>) {
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
}
