import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummonerProfileInfo } from './summoner-profile-info';

describe('SummonerProfileInfo', () => {
  let component: SummonerProfileInfo;
  let fixture: ComponentFixture<SummonerProfileInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummonerProfileInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(SummonerProfileInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
