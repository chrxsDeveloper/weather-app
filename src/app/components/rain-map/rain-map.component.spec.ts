import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainMapComponent } from './rain-map.component';

describe('RainMapComponent', () => {
  let component: RainMapComponent;
  let fixture: ComponentFixture<RainMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RainMapComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(RainMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
