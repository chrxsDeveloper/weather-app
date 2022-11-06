import { Component, Input, OnInit } from '@angular/core';
import {
    SvgIconInfo,
    TemperatureHourListItem
} from '../models/temperature-hour-list-item/temperature-hour-list-item.model';
import { DateTime } from '../../../services/weather-api/model/date-time.model';

@Component({
    selector: 'app-temperature-hour-list-item',
    templateUrl: './temperature-hour-list-item.component.html',
    styleUrls: ['./temperature-hour-list-item.component.css']
})
export class TemperatureHourListItemComponent implements OnInit {

    @Input() item!: TemperatureHourListItem;

    dateTime!: DateTime;
    svgIconSrc!: string;
    svgIconAlt!: string;
    temperature!: number | undefined;
    displayTemp!: string;
    displayHour!: string;

    constructor() {
    }

    ngOnInit(): void {
        this.dateTime = this.item.dateTime;
        this.svgIconSrc = this.item.svgIconInfo.src;
        this.svgIconAlt = this.item.svgIconInfo.alt;
        this.temperature = this.item.temperature;
        this.displayTemp = !!this.temperature ? this.temperature + '°' : (this.item.svgIconInfo.name === new SvgIconInfo('assets/illustrations/sunrise_19x15.svg', '').name ? 'Sonnenaufgang' : 'Sonnenuntergang');
        this.displayHour = this.item.isNow ? 'Jetzt' : this.dateTime.getHour2Digits();
    }
}
