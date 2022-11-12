import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { PrimaryTemperatureComponent } from './components/primary-temperature/primary-temperature.component';
import { TemperatureHourListComponent } from './components/temperature-hour-list/temperature-hour-list.component';
import {
    TemperatureHourListItemComponent
} from './components/temperature-hour-list/temperature-hour-list-item/temperature-hour-list-item.component';
import { UvIndexComponent } from './components/uv-index/uv-index.component';

@NgModule({
    declarations: [
        AppComponent,
        PrimaryTemperatureComponent,
        TemperatureHourListComponent,
        TemperatureHourListItemComponent,
        UvIndexComponent
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
