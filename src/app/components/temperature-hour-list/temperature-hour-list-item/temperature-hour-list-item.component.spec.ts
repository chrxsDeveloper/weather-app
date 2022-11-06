import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureHourListItemComponent } from './temperature-hour-list-item.component';

describe('TemperatureHourListItemComponent', () => {
  let component: TemperatureHourListItemComponent;
  let fixture: ComponentFixture<TemperatureHourListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperatureHourListItemComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(TemperatureHourListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
