import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCommitChipComponent } from './last-commit-chip.component';

describe('LastCommitChipComponent', () => {
  let component: LastCommitChipComponent;
  let fixture: ComponentFixture<LastCommitChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastCommitChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCommitChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
