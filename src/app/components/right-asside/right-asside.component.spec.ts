import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAssideComponent } from './right-asside.component';

describe('RightAssideComponent', () => {
  let component: RightAssideComponent;
  let fixture: ComponentFixture<RightAssideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightAssideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightAssideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
