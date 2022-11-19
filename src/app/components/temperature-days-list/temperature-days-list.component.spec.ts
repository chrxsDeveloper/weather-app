import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureDaysListComponent } from './temperature-days-list.component';

describe('TemperatureDaysListComponent', () => {
  let component: TemperatureDaysListComponent;
  let fixture: ComponentFixture<TemperatureDaysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperatureDaysListComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(TemperatureDaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
