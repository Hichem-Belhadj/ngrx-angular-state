import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from "../../../core/state/counter/counter.actions";
import {AppState} from "../../../core/state/app/app.state";

@Component({
  selector: 'app-counter-ngrx-buttons',
  templateUrl: './counter-ngrx-buttons.component.html',
  styleUrl: './counter-ngrx-buttons.component.scss'
})
export class CounterNgrxButtonsComponent {
  constructor(private store: Store<AppState>) {
  }
  onIncrement() {
    this.store.dispatch(increment())
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset())
  }
}
