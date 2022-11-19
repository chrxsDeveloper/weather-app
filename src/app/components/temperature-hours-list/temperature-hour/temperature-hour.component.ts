import { Component, Input, OnInit } from '@angular/core';
import { TemperatureHourItem } from './item/temperature-hour-item.model';
import { DateTime } from '../../../models/date-time/date-time.model';
import { SvgIconInfo } from '../../../models/svg-icon-info/svg-icon-info.model';

@Component({
    selector: 'app-temperature-hour',
    templateUrl: './temperature-hour.component.html',
    styleUrls: ['./temperature-hour.component.css']
})
export class TemperatureHourComponent implements OnInit {

    @Input() item!: TemperatureHourItem;

    dateTime!: DateTime;
    svgIconSrc!: string;
    svgIconAlt!: string;
    temperature!: number | undefined;
    displayTemp!: string;
    displayHour!: string;
    isNow = false;
    isSunInfo = false;

    constructor() {
    }

    ngOnInit(): void {
        this.dateTime = this.item.dateTime;
        this.svgIconSrc = this.item.svgIconInfo.src;
        this.svgIconAlt = this.item.svgIconInfo.alt;
        this.temperature = this.item.temperature;
        this.displayTemp = this.item.temperature !== undefined ? this.item.temperature + '°' : (this.item.svgIconInfo.name === new SvgIconInfo('assets/weather-status/sunrise_19x15.svg', '').name ? 'Sonnenaufgang' : 'Sonnenuntergang');
        this.isNow = this.item.isNow;
        this.isSunInfo = this.item.temperature === undefined;
        this.displayHour = this.item.isNow ? 'Jetzt' : this.dateTime.getHour2Digits();
        this.setDisplayHour();
    }

    private setDisplayHour() {
        if (this.isNow) {
            this.displayHour = 'Jetzt';
        } else if (this.isSunInfo) {
            this.displayHour = this.item.dateTime.toPattern_HHMM();
        } else {
            this.displayHour = this.item.dateTime.getHour2Digits();
        }
    }
}
