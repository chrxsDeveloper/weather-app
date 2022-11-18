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
    arrowsVisible = false;

    weatherIcons = ['moon-stars_14x15', 'cloud_19x12', 'cloud-moon_19x12'];

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
            const now = DateTime.now();
            const from = now;
            from.hours = !!from.hours ? from.hours + 1 : 1;
            from.minutes = 0;
            from.seconds = 0;

            // First temperature
            this.weatherApiService.getTemperature(now, accessToken, this.nuernbergLocation).subscribe(next => {
                this.temperatureList = [
                    new TemperatureHourListItem(
                        now,
                        `assets/illustrations/${ this.weatherIcons[Math.floor(Math.random() * this.weatherIcons.length)] }.svg`,
                        'test',
                        this.converter.toDisplayTemperature(+next.data[0].coordinates[0].dates[0].value),
                        true
                    )
                ];

                // Sunrise
                this.weatherApiService.getComingSunrise(accessToken, this.nuernbergLocation).subscribe(sunrise => {
                    console.log('%j', sunrise);

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
                        ).subscribe(temp => {
                            const temperatures = temp.data[0].coordinates[0].dates.map(x => {
                                return new TemperatureHourListItem(
                                    x.date,
                                    `assets/illustrations/${ this.weatherIcons[Math.floor(Math.random() * this.weatherIcons.length)] }.svg`,
                                    'test',
                                    this.converter.toDisplayTemperature(+x.value)
                                );
                            });

                            if (!!this.temperatureList) {
                                this.temperatureList.push(...temperatures);
                            } else {
                                this.temperatureList = temperatures;
                            }

                            // Sunrise item
                            const sunriseItem = new TemperatureHourListItem(
                                '' + sunrise.data[0].coordinates[0].dates[0].value,
                                'assets/illustrations/sunrise_19x15.svg',
                                'sunrise-icon'
                            );

                            // Sunset item
                            const sunsetItem = new TemperatureHourListItem(
                                '' + sunset.data[0].coordinates[0].dates[0].value,
                                'assets/illustrations/sunset_19x15.svg',
                                'sunset-icon'
                            );

                            // console.log('%j', this.temperatureList);
                            this.temperatureList = this.insertSun(this.temperatureList, sunriseItem);
                            this.temperatureList = this.insertSun(this.temperatureList, sunsetItem);
                            // console.log('%j', this.temperatureList);
                        });
                    });
                });
            });
        });
    }

    private insertSun(list: TemperatureHourListItem[], sunInfo: TemperatureHourListItem): TemperatureHourListItem[] {
        if (list.length === 0) return [sunInfo];

        const outputList: TemperatureHourListItem[] = [];
        let sunIsSet = false;

        list.forEach((value: TemperatureHourListItem, index: number) => {
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
