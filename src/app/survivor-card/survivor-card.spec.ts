import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorCard } from './survivor-card';

describe('SurvivorCard', () => {
  let component: SurvivorCard;
  let fixture: ComponentFixture<SurvivorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurvivorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurvivorCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
