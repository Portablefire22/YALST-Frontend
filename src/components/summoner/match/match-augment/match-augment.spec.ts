import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchAugment } from './match-augment';

describe('MatchAugment', () => {
  let component: MatchAugment;
  let fixture: ComponentFixture<MatchAugment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchAugment],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchAugment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
