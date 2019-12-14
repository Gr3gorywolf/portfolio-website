import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingNavigatorComponent } from './floating-navigator.component';

describe('FloatingNavigatorComponent', () => {
  let component: FloatingNavigatorComponent;
  let fixture: ComponentFixture<FloatingNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
