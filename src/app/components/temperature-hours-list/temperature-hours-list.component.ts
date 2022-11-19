import { Component, OnInit } from '@angular/core';
import { TemperatureHourItem } from './temperature-hour/item/temperature-hour-item.model';
import { WeatherApiService } from '../../services/weather-api/weather-api.service';
import { TokenGeneratorService } from '../../services/token-generator/token-generator.service';
import { ConverterService } from '../../services/converter/converter.service';
import { DateTime } from '../../models/date-time/date-time.model';
import { DateTimeSpan } from '../../models/date-time-span/date-time-span.model';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-temperature-hours-list',
    templateUrl: './temperature-hours-list.component.html',
    styleUrls: ['./temperature-hours-list.component.css']
})
export class TemperatureHoursListComponent implements OnInit {

    temperatureList?: TemperatureHourItem[] = undefined;
    headlineMsg?: string = 'Wolken von 00:00-04:00, und teilweise Bevölkerung erwartet um 04:00.';

    weatherIcons = ['moon-stars_14x15', 'cloud_19x12', 'cloud-moon_19x12'];

    private nuernbergLocation = environment.location;

    constructor(
        private weatherApiService: WeatherApiService,
        private converter: ConverterService,
        private tokenGenerator: TokenGeneratorService
    ) {
    }

    ngOnInit(): void {
        this.tokenGenerator.createToken().subscribe(token => {
            const accessToken = token.accessToken;
            const now = DateTime.now();
            const from = now;
            from.hours = !!from.hours ? from.hours + 1 : 1;
            from.minutes = 0;
            from.seconds = 0;

            // First temperature
            this.weatherApiService.getTemperature(now, accessToken, this.nuernbergLocation).subscribe(temp => {
                this.temperatureList = [
                    new TemperatureHourItem(
                        now,
                        `assets/weather-status/${ this.weatherIcons[Math.floor(Math.random() * this.weatherIcons.length)] }.svg`,
                        'test',
                        this.converter.toDisplayTemperature(+temp.data[0].coordinates[0].dates[0].value),
                        true
                    )
                ];

                // Sunrise
                this.weatherApiService.getComingSunrise(accessToken, this.nuernbergLocation).subscribe(sunrise => {

                    // Sunset
                    this.weatherApiService.getComingSunset(accessToken, this.nuernbergLocation).subscribe(sunset => {

                        // Other temperatures
                        this.weatherApiService.getTemperature(
                            new DateTimeSpan(
                                from,
                                DateTime.onlyDays(1),
                                DateTime.onlyHours(1)
                            ),
                            accessToken,
                            this.nuernbergLocation
                        ).subscribe(temps => {
                            const temperatures = temps.data[0].coordinates[0].dates.map(x => {
                                return new TemperatureHourItem(
                                    x.date,
                                    `assets/weather-status/${ this.weatherIcons[Math.floor(Math.random() * this.weatherIcons.length)] }.svg`,
                                    'test',
                                    this.converter.toDisplayTemperature(+x.value)
                                );
                            });

                            if (!!this.temperatureList) {
                                this.temperatureList.push(...temperatures);
                            } else {
                                this.temperatureList = temperatures;
                            }

                            console.log('%j', this.temperatureList);

                            // Sunrise item
                            const sunriseItem = new TemperatureHourItem(
                                '' + sunrise.data[0].coordinates[0].dates[0].value,
                                'assets/weather-status/sunrise_19x15.svg',
                                'sunrise-icon'
                            );

                            // Sunset item
                            const sunsetItem = new TemperatureHourItem(
                                '' + sunset.data[0].coordinates[0].dates[0].value,
                                'assets/weather-status/sunset_19x15.svg',
                                'sunset-icon'
                            );

                            this.temperatureList = this.insertSun(this.temperatureList, sunriseItem);
                            this.temperatureList = this.insertSun(this.temperatureList, sunsetItem);
                        });
                    });
                });
            });
        });
    }

    private insertSun(list: TemperatureHourItem[], sunInfo: TemperatureHourItem): TemperatureHourItem[] {
        if (list.length === 0) return [sunInfo];

        const outputList: TemperatureHourItem[] = [];
        let sunIsSet = false;

        list.forEach((value: TemperatureHourItem, index: number) => {
            const currentValue = value.dateTime.getValue();
            const sunValue = sunInfo.dateTime.getValue();

            if (sunValue <= currentValue && index !== 0 && !sunIsSet) {
                outputList.push(sunInfo);
                sunIsSet = true;
            }

            outputList.push(value);
        });

        return outputList;
    }
}
