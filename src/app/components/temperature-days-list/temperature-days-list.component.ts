import { Component, OnInit } from '@angular/core';
import { TemperatureDayItem } from './temperature-day/item/temperature-day-item.model';
import { SvgIconInfo } from '../../models/svg-icon-info/svg-icon-info.model';
import { WeatherApiService } from '../../services/weather-api/weather-api.service';
import { TokenGeneratorService } from '../../services/token-generator/token-generator.service';

@Component({
    selector: 'app-temperature-days-list',
    templateUrl: './temperature-days-list.component.html',
    styleUrls: ['./temperature-days-list.component.css']
})
export class TemperatureDaysListComponent implements OnInit {

    icon = new SvgIconInfo('assets/widget-title/calender_10x9.svg');
    temperatureList = [
        new TemperatureDayItem(
            'sa',
            'assets/weather-status/cloud_19x12.svg',
            0,
            3,
            0,
            10,
            true
        ),
        new TemperatureDayItem(
            'so',
            'assets/weather-status/cloud_19x12.svg',
            -1,
            4,
            0,
            11
        ),
        new TemperatureDayItem(
            'mo',
            'assets/weather-status/cloud_19x12.svg',
            1,
            6,
            4,
            17
        ),
        new TemperatureDayItem(
            'di',
            'assets/weather-status/cloud_19x12.svg',
            2,
            6,
            0,
            10
        ),
        new TemperatureDayItem(
            'mi',
            'assets/weather-status/cloud_19x12.svg',
            2,
            7,
            4,
            17
        ),
        new TemperatureDayItem(
            'do',
            'assets/weather-status/cloud_19x12.svg',
            2,
            8,
            0,
            10
        ),
        new TemperatureDayItem(
            'fr',
            'assets/weather-status/cloud_19x12.svg',
            1,
            8,
            0,
            11
        ),
        new TemperatureDayItem(
            'sa',
            'assets/weather-status/cloud_19x12.svg',
            1,
            9,
            4,
            17
        ),
        new TemperatureDayItem(
            'so',
            'assets/weather-status/cloud_19x12.svg',
            0,
            9,
            4,
            17
        ),
        new TemperatureDayItem(
            'mo',
            'assets/weather-status/cloud_19x12.svg',
            0,
            8,
            4,
            17
        )
    ];

    constructor(
        private weatherApiService: WeatherApiService,
        private tokenGenerator: TokenGeneratorService
    ) {
    }

    ngOnInit(): void {
    }
}
