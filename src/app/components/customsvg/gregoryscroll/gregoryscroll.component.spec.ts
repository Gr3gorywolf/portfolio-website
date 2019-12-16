import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GregoryscrollComponent } from './gregoryscroll.component';

describe('GregoryscrollComponent', () => {
  let component: GregoryscrollComponent;
  let fixture: ComponentFixture<GregoryscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GregoryscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GregoryscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
