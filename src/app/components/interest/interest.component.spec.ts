import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestComponent } from './interest.component';

describe('InterestComponent', () => {
  let component: InterestComponent;
  let fixture: ComponentFixture<InterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
