import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSummoner } from './update-summoner';

describe('UpdateSummoner', () => {
  let component: UpdateSummoner;
  let fixture: ComponentFixture<UpdateSummoner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSummoner],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSummoner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
