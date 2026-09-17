import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchSubteam } from './match-subteam';

describe('MatchSubteam', () => {
  let component: MatchSubteam;
  let fixture: ComponentFixture<MatchSubteam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchSubteam],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchSubteam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
