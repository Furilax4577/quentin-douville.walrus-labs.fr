import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheyTrustMeComponent } from './they-trust-me.component';

describe('TheyTrustMeComponent', () => {
  let component: TheyTrustMeComponent;
  let fixture: ComponentFixture<TheyTrustMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheyTrustMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheyTrustMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
