import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTitleComponent } from './widget-title.component';

describe('WidgetsTitleComponent', () => {
  let component: WidgetTitleComponent;
  let fixture: ComponentFixture<WidgetTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetTitleComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(WidgetTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
