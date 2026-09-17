import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchTeam } from './match-team';

describe('MatchTeam', () => {
  let component: MatchTeam;
  let fixture: ComponentFixture<MatchTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchTeam],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchTeam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
