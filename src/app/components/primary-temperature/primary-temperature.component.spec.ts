import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTemperatureComponent } from './primary-temperature.component';

describe('PrimaryTemperatureComponent', () => {
  let component: PrimaryTemperatureComponent;
  let fixture: ComponentFixture<PrimaryTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryTemperatureComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(PrimaryTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
