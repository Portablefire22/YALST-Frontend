import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionStats } from './champion-stats';

describe('ChampionStats', () => {
  let component: ChampionStats;
  let fixture: ComponentFixture<ChampionStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionStats],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
