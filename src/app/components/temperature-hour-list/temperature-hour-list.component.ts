import { Component, OnInit } from '@angular/core';
import { TemperatureHourListItem } from './models/temperature-hour-list-item/temperature-hour-list-item.model';
import { WeatherApiService } from '../../services/weather-api/weather-api.service';
import { TokenGeneratorService } from '../../services/weather-api/token-generator/token-generator.service';
import { ConverterService } from '../../services/converter/converter.service';
import { DateTime } from '../../services/weather-api/model/date-time.model';
import { DateTimeSpan } from '../../services/weather-api/model/date-time-span.model';

@Component({
    selector: 'app-temperature-hour-list',
    templateUrl: './temperature-hour-list.component.html',
    styleUrls: ['./temperature-hour-list.component.css']
})
export class TemperatureHourListComponent implements OnInit {

    temperatureList?: TemperatureHourListItem[] = undefined;
    headlineMsg?: string = 'Wolken von 00:00-04:00, und teilweise Bevölkerung erwartet um 04:00.';
    weatherIcons = ['moon-stars_14x15', 'cloud_19x12', 'cloud-moon_19x12', 'sunrise_19x15', 'sunset_19x15'];

    private nuernbergLocation = '49.465019432927235,11.100836260960223';

    constructor(
        private weatherApiService: WeatherApiService,
        private converter: ConverterService,
        private tokenGenerator: TokenGeneratorService
    ) {
    }

    ngOnInit(): void {
        this.tokenGenerator.createToken().subscribe(next => {
            const accessToken = next.accessToken;
            const from = new Date();
            from.setHours(from.getHours() + 1);
            from.setMinutes(0);
            from.setSeconds(0);

            this.weatherApiService.getTemperature(DateTime.now(), accessToken, this.nuernbergLocation).subscribe(next => {
                this.temperatureList = [
                    new TemperatureHourListItem(
                        DateTime.now(),
                        `assets/illustrations/${ this.weatherIcons[Math.floor(Math.random() * this.weatherIcons.length)] }.svg`,
                        'test',
                        this.converter.toDisplayTemperature(next.data[0].coordinates[0].dates[0].value),
                        true
                    )
                ];
            });

            this.weatherApiService.getTemperature(
                new DateTimeSpan(
                    DateTime.fromDate(from),
                    DateTime.onlyDays(1),
                    DateTime.onlyHours(1)
                ),
                accessToken,
                this.nuernbergLocation
            ).subscribe(next => {
                const temperatures = next.data[0].coordinates[0].dates.map(x => {
                    return new TemperatureHourListItem(
                        DateTime.fromUtc(x.date),
                        `assets/illustrations/${ this.weatherIcons[Math.floor(Math.random() * this.weatherIcons.length)] }.svg`,
                        'test',
                        this.converter.toDisplayTemperature(x.value)
                    );
                });

                if (!!this.temperatureList) {
                    this.temperatureList.push(...temperatures);
                } else {
                    this.temperatureList = temperatures;
                }
            });
        });
    }

}
