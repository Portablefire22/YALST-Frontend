import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchParticipantDto } from './match-participant-dto';

describe('MatchParticipantsDto', () => {
  let component: MatchParticipantDto;
  let fixture: ComponentFixture<MatchParticipantDto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchParticipantDto],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchParticipantDto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
