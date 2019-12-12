import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSkillsCardComponent } from './personal-skills-card.component';

describe('PersonalSkillsCardComponent', () => {
  let component: PersonalSkillsCardComponent;
  let fixture: ComponentFixture<PersonalSkillsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSkillsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSkillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
