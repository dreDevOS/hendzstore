import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCalculatorComponent } from './cart-calculator.component';

describe('CartCalculatorComponent', () => {
  let component: CartCalculatorComponent;
  let fixture: ComponentFixture<CartCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
