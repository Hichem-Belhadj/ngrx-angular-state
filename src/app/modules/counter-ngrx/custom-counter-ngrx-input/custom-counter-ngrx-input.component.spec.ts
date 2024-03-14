import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCounterNgrxInputComponent } from './custom-counter-ngrx-input.component';

describe('CustomCounterNgrxInputComponent', () => {
  let component: CustomCounterNgrxInputComponent;
  let fixture: ComponentFixture<CustomCounterNgrxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomCounterNgrxInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomCounterNgrxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
