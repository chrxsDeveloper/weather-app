import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureHoursListComponent } from './temperature-hours-list.component';

describe('TemperatureHourListComponent', () => {
  let component: TemperatureHoursListComponent;
  let fixture: ComponentFixture<TemperatureHoursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperatureHoursListComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(TemperatureHoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
