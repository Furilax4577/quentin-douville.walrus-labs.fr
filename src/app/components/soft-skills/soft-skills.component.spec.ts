import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillsComponent } from './soft-skills.component';

describe('SoftSkillsComponent', () => {
  let component: SoftSkillsComponent;
  let fixture: ComponentFixture<SoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
