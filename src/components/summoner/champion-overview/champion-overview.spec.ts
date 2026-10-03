import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionOverview } from './champion-overview';

describe('ChampionOverview', () => {
  let component: ChampionOverview;
  let fixture: ComponentFixture<ChampionOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
