import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api/weather-api.service';
import { TokenGeneratorService } from '../../services/weather-api/token-generator/token-generator.service';
import { DateTime } from '../../services/weather-api/model/date-time.model';
import { ConverterService } from '../../services/converter/converter.service';

@Component({
    selector: 'app-primary-temperature',
    templateUrl: './primary-temperature.component.html',
    styleUrls: ['./primary-temperature.component.css']
})
export class PrimaryTemperatureComponent implements OnInit {

    temp?: number = undefined;
    tempMax?: number = undefined;
    tempMin?: number = undefined;
    weatherText?: string = 'Meist wolkenlos';

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

            this.weatherApiService.getCurrentTemperature(accessToken, this.nuernbergLocation).subscribe(next => {
                this.temp = Math.round(+next.data[0].coordinates[0].dates[0].value);
            });

            this.weatherApiService.getComingMaxTemperature(DateTime.now(), accessToken, this.nuernbergLocation).subscribe(next => {
                this.tempMax = this.converter.toDisplayTemperature(+next.data[0].coordinates[0].dates[0].value);
            });

            this.weatherApiService.getComingMinTemperature(DateTime.now(), accessToken, this.nuernbergLocation).subscribe(next => {
                this.tempMin = this.converter.toDisplayTemperature(+next.data[0].coordinates[0].dates[0].value);
            });
        });
    }
}
