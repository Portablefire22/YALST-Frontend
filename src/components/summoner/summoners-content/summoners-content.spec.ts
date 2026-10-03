import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummonersContent } from './summoners-content';

describe('SummonersContent', () => {
  let component: SummonersContent;
  let fixture: ComponentFixture<SummonersContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummonersContent],
    }).compileComponents();

    fixture = TestBed.createComponent(SummonersContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
