import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftAssideComponent } from './left-asside.component';

describe('LeftAssideComponent', () => {
  let component: LeftAssideComponent;
  let fixture: ComponentFixture<LeftAssideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftAssideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftAssideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
