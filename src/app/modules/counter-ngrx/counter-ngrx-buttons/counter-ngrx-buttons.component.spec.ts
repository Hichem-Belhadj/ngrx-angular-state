import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNgrxButtonsComponent } from './counter-ngrx-buttons.component';

describe('CounterNgrxButtonsComponent', () => {
  let component: CounterNgrxButtonsComponent;
  let fixture: ComponentFixture<CounterNgrxButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterNgrxButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterNgrxButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
