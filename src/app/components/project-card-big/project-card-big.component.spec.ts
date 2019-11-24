import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardBigComponent } from './project-card-big.component';

describe('ProjectCardBigComponent', () => {
  let component: ProjectCardBigComponent;
  let fixture: ComponentFixture<ProjectCardBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCardBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
