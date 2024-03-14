import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent {
  @Input() counter: number = 0;
}
