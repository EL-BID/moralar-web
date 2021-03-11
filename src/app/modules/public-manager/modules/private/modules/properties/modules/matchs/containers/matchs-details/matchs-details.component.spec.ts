import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchsDetailsComponent } from './matchs-details.component';

describe('MatchsDetailsComponent', () => {
  let component: MatchsDetailsComponent;
  let fixture: ComponentFixture<MatchsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
