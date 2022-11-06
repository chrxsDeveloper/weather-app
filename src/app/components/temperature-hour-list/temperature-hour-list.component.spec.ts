import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureHourListComponent } from './temperature-hour-list.component';

describe('TemperatureHourListComponent', () => {
  let component: TemperatureHourListComponent;
  let fixture: ComponentFixture<TemperatureHourListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperatureHourListComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(TemperatureHourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
