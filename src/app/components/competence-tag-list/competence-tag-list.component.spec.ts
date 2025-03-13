import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceTagListComponent } from './competence-tag-list.component';

describe('CompetenceTagListComponent', () => {
  let component: CompetenceTagListComponent;
  let fixture: ComponentFixture<CompetenceTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenceTagListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
