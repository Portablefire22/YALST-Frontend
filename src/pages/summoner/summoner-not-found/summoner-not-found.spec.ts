import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummonerNotFound } from './summoner-not-found';

describe('SummonerNotFound', () => {
  let component: SummonerNotFound;
  let fixture: ComponentFixture<SummonerNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummonerNotFound],
    }).compileComponents();

    fixture = TestBed.createComponent(SummonerNotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
