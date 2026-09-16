import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummonerProfile } from './summoner-profile';

describe('SummonerProfile', () => {
  let component: SummonerProfile;
  let fixture: ComponentFixture<SummonerProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummonerProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(SummonerProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
