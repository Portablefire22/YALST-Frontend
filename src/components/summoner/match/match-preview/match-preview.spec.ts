import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchPreview } from './match-preview';

describe('MatchPreview', () => {
  let component: MatchPreview;
  let fixture: ComponentFixture<MatchPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
