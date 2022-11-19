import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureHourComponent } from './temperature-hour.component';

describe('TemperatureHourListItemComponent', () => {
  let component: TemperatureHourComponent;
  let fixture: ComponentFixture<TemperatureHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperatureHourComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(TemperatureHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
