import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailsComponent } from './experience-details.component';

describe('ExperienceDetailsComponent', () => {
  let component: ExperienceDetailsComponent;
  let fixture: ComponentFixture<ExperienceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
