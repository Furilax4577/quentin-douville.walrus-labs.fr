import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIAmComponent } from './who-iam.component';

describe('WhoIAmComponent', () => {
  let component: WhoIAmComponent;
  let fixture: ComponentFixture<WhoIAmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoIAmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoIAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
