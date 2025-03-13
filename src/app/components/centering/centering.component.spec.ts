import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteringComponent } from './centering.component';

describe('CenteringComponent', () => {
  let component: CenteringComponent;
  let fixture: ComponentFixture<CenteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
