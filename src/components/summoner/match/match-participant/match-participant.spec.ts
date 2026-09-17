import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchParticipant } from './match-participant';

describe('MatchParticipant', () => {
  let component: MatchParticipant;
  let fixture: ComponentFixture<MatchParticipant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchParticipant],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchParticipant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
