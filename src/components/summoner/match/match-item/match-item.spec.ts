import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchItem } from './match-item';

describe('MatchItem', () => {
  let component: MatchItem;
  let fixture: ComponentFixture<MatchItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
