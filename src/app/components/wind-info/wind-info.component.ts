import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api/weather-api.service';
import { TokenGeneratorService } from '../../services/token-generator/token-generator.service';
import { SvgIconInfo } from '../../models/svg-icon-info/svg-icon-info.model';

@Component({
    selector: 'app-wind-info',
    templateUrl: './wind-info.component.html',
    styleUrls: ['./wind-info.component.css']
})
export class WindInfoComponent implements OnInit {

    titleIcon = new SvgIconInfo('assets/widget-title/wind_10x9.svg');

    constructor(
        private weatherApiService: WeatherApiService,
        private tokenGenerator: TokenGeneratorService
    ) {
    }

    ngOnInit(): void {
    }
}
