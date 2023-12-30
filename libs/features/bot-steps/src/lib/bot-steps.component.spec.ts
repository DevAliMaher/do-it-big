import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotStepsComponent } from './bot-steps.component';

describe('BotStepsComponent', () => {
  let component: BotStepsComponent;
  let fixture: ComponentFixture<BotStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotStepsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BotStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
