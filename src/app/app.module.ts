import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { PrimaryTemperatureComponent } from './components/primary-temperature/primary-temperature.component';
import { TemperatureHoursListComponent } from './components/temperature-hours-list/temperature-hours-list.component';
import {
    TemperatureHourComponent
} from './components/temperature-hours-list/temperature-hour/temperature-hour.component';
import { UvIndexComponent } from './components/uv-index/uv-index.component';
import { TemperatureDaysListComponent } from './components/temperature-days-list/temperature-days-list.component';
import { WidgetTitleComponent } from './shared-ui/widget-title/widget-title.component';
import { TemperatureDayComponent } from './components/temperature-days-list/temperature-day/temperature-day.component';
import { CardComponent } from './shared-ui/card/card.component';
import { RainMapComponent } from './components/rain-map/rain-map.component';
import { WindInfoComponent } from './components/wind-info/wind-info.component';

@NgModule({
    declarations: [
        AppComponent,
        PrimaryTemperatureComponent,
        TemperatureHoursListComponent,
        TemperatureHourComponent,
        UvIndexComponent,
        TemperatureDaysListComponent,
        WidgetTitleComponent,
        TemperatureDayComponent,
        CardComponent,
        RainMapComponent,
        WindInfoComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
