import { Component, Input, OnInit } from '@angular/core';
import { TemperatureDayItem } from './item/temperature-day-item.model';

@Component({
    selector: 'app-temperature-day',
    templateUrl: './temperature-day.component.html',
    styleUrls: ['./temperature-day.component.css']
})
export class TemperatureDayComponent implements OnInit {

    @Input() temperatureDay!: TemperatureDayItem;

    weekday!: string;
    weatherIconSrc!: string;
    minTemp!: number;
    maxTemp!: number;
    isToday!: boolean;

    ngOnInit(): void {
        this.weekday = this.temperatureDay.weekday;
        this.weatherIconSrc = this.temperatureDay.weatherIconSrc;
        this.minTemp = this.temperatureDay.minTemp;
        this.maxTemp = this.temperatureDay.maxTemp;
        this.isToday = this.temperatureDay.isToday;
    }
}
