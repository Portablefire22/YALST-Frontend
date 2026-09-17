import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchSpell } from './match-spell';

describe('MatchSpell', () => {
  let component: MatchSpell;
  let fixture: ComponentFixture<MatchSpell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchSpell],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchSpell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
