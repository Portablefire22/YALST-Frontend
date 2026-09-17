import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchProfilePicture } from './match-profile-picture';

describe('MatchProfilePicture', () => {
  let component: MatchProfilePicture;
  let fixture: ComponentFixture<MatchProfilePicture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchProfilePicture],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchProfilePicture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
