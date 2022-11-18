import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConverterService } from '../converter/converter.service';
import { WeatherApiItem } from '../../shared/models/weather-api/weather-api-item.model';
import { DateTimeSpan } from './model/date-time-span.model';
import { DateTime } from './model/date-time.model';

@Injectable({
    providedIn: 'root'
})
export class WeatherApiService {

    private readonly baseUrl = environment.weatherApi.basePath;

    constructor(
        private http: HttpClient,
        private converter: ConverterService
    ) {
    }

    getTemperature(datetime: DateTime | DateTimeSpan, accessToken: string, ...locations: string[]): Observable<WeatherApiItem> {
        const parameters = 't_2m:C';

        return this.sendHttpReq(datetime, parameters, locations, accessToken);
    }

    getCurrentTemperature(accessToken: string, ...locations: string[]): Observable<WeatherApiItem> {
        return this.getTemperature(DateTime.now(), accessToken, ...locations);
    }

    getComingMaxTemperature(datetime: DateTime | DateTimeSpan, accessToken: string, ...locations: string[]): Observable<WeatherApiItem> {
        const parameters = 't_max_2m_24h:C';

        return this.sendHttpReq(datetime, parameters, locations, accessToken);
    }

    getComingMinTemperature(datetime: DateTime | DateTimeSpan, accessToken: string, ...locations: string[]): Observable<WeatherApiItem> {
        const parameters = 't_min_2m_24h:C';

        return this.sendHttpReq(datetime, parameters, locations, accessToken);
    }

    getSunrise(datetime: DateTime | DateTimeSpan, accessToken: string, ...locations: string[]): Observable<WeatherApiItem> {
        const parameters = 'sunrise:sql';

        return this.sendHttpReq(datetime, parameters, locations, accessToken);
    }

    getSunset(datetime: DateTime | DateTimeSpan, accessToken: string, ...locations: string[]): Observable<WeatherApiItem> {
        const parameters = 'sunset:sql';

        return this.sendHttpReq(datetime, parameters, locations, accessToken);
    }

    getComingSunrise(accessToken: string, ...locations: string[]): Observable<WeatherApiItem> {
        return this.getSunrise(DateTime.now(), accessToken, ...locations);
    }

    getComingSunset(accessToken: string, ...locations: string[]): Observable<WeatherApiItem> {
        return this.getSunset(DateTime.now(), accessToken, ...locations);
    }

    private buildUrl(datetime: string, parameters: string, locations: string, format: string, accessToken: string): string {
        return this.baseUrl + `/${ datetime }/${ parameters }/${ locations }/${ format }?access_token=${ accessToken }`;
    }

    private sendHttpReq(dateTime: DateTime | DateTimeSpan, parameters: string, locations: string[], accessToken: string): Observable<WeatherApiItem> {

        if (!locations.length) throw new Error('you have to have at least one location');

        const format = 'json';
        const url = this.buildUrl(this.converter.toUtc(dateTime), parameters, locations.join('+'), format, accessToken);

        return this.http.get<WeatherApiItem>(url).pipe(
            map(obj => this.converter.toWeatherApi(obj))
        );
    }
}
