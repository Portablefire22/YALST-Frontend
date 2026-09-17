import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchParticipants } from './match-participants';

describe('MatchParticipants', () => {
  let component: MatchParticipants;
  let fixture: ComponentFixture<MatchParticipants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchParticipants],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchParticipants);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
