import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNgrxOutputComponent } from './counter-ngrx-output.component';

describe('CounterNgrxOutputComponent', () => {
  let component: CounterNgrxOutputComponent;
  let fixture: ComponentFixture<CounterNgrxOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterNgrxOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterNgrxOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
