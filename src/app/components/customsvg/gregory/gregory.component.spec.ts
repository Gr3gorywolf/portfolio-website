import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GregoryComponent } from './gregory.component';

describe('GregoryComponent', () => {
  let component: GregoryComponent;
  let fixture: ComponentFixture<GregoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GregoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GregoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
