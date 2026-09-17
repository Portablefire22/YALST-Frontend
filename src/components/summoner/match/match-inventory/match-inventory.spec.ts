import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchInventory } from './match-inventory';

describe('MatchInventory', () => {
  let component: MatchInventory;
  let fixture: ComponentFixture<MatchInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchInventory],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchInventory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
