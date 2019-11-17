import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GregoryappsComponent } from './gregoryapps.component';

describe('GregoryappsComponent', () => {
  let component: GregoryappsComponent;
  let fixture: ComponentFixture<GregoryappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GregoryappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GregoryappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
