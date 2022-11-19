import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureDayComponent } from './temperature-day.component';

describe('TemperatureDayComponent', () => {
  let component: TemperatureDayComponent;
  let fixture: ComponentFixture<TemperatureDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperatureDayComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(TemperatureDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
