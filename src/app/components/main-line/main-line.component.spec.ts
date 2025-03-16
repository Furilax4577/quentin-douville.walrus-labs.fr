import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLineComponent } from './main-line.component';

describe('MainLineComponent', () => {
  let component: MainLineComponent;
  let fixture: ComponentFixture<MainLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
