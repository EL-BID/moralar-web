import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchsListComponent } from './matchs-list.component';

describe('MatchsListComponent', () => {
  let component: MatchsListComponent;
  let fixture: ComponentFixture<MatchsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
