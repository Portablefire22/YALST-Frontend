import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleSummoner } from './single-summoner';

describe('SingleSummoner', () => {
  let component: SingleSummoner;
  let fixture: ComponentFixture<SingleSummoner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSummoner],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleSummoner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
