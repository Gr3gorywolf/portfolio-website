import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GregoryfaceComponent } from './gregoryface.component';

describe('GregoryfaceComponent', () => {
  let component: GregoryfaceComponent;
  let fixture: ComponentFixture<GregoryfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GregoryfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GregoryfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
