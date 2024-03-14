import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {getCounter} from "../../../core/state/counter/counter.selector";
import {AppState} from "../../../core/state/app/app.state";

@Component({
  selector: 'app-counter-ngrx-output',
  templateUrl: './counter-ngrx-output.component.html',
  styleUrl: './counter-ngrx-output.component.scss'
})
export class CounterNgrxOutputComponent {
  counter$ = new Observable<number>();
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
  }
}
