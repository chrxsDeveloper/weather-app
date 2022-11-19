import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConverterService } from '../converter/converter.service';
import { WeatherApiResponse } from '../../models/weather-api/weather-api-response.model';
import { DateTimeSpan } from '../../models/date-time-span/date-time-span.model';
import { DateTime } from '../../models/date-time/date-time.model';

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

    getTemperature(datetime: DateTime | DateTimeSpan, accessToken: string, ...locations: string[]): Observable<WeatherApiResponse> {
        const parameter = 't_2m:C';

        return this.sendHttpReq(datetime, parameter, locations, accessToken);
    }

    getCurrentTemperature(accessToken: string, ...locations: string[]): Observable<WeatherApiResponse> {
        return this.getTemperature(DateTime.now(), accessToken, ...locations);
    }

    getComingMaxTemperature(datetime: DateTime | DateTimeSpan, accessToken: string, ...locations: string[]): Observable<WeatherApiResponse> {
        const parameter = 't_max_2m_24h:C';

        return this.sendHttpReq(datetime, parameter, locations, accessToken);
    }

    getComingMinTemperature(datetime: DateTime | DateTimeSpan, accessToken: string, ...locations: string[]): Observable<WeatherApiResponse> {
        const parameter = 't_min_2m_24h:C';

        return this.sendHttpReq(datetime, parameter, locations, accessToken);
    }

    getSunrise(datetime: DateTime | DateTimeSpan, accessToken: string, ...locations: string[]): Observable<WeatherApiResponse> {
        const parameter = 'sunrise:sql';

        return this.sendHttpReq(datetime, parameter, locations, accessToken);
    }

    getSunset(datetime: DateTime | DateTimeSpan, accessToken: string, ...locations: string[]): Observable<WeatherApiResponse> {
        const parameter = 'sunset:sql';

        return this.sendHttpReq(datetime, parameter, locations, accessToken);
    }

    getComingSunrise(accessToken: string, ...locations: string[]): Observable<WeatherApiResponse> {
        return this.getSunrise(DateTime.now(), accessToken, ...locations);
    }

    getComingSunset(accessToken: string, ...locations: string[]): Observable<WeatherApiResponse> {
        return this.getSunset(DateTime.now(), accessToken, ...locations);
    }

    getUvIndex(datetime: DateTime, accessToken: string, ...locations: string[]): Observable<WeatherApiResponse> {
        const parameter = 'uv:idx';

        return this.sendHttpReq(datetime, parameter, locations, accessToken);
    }

    getCurrentUvIndex(accessToken: string, ...locations: string[]): Observable<WeatherApiResponse> {
        return this.getUvIndex(DateTime.now(), accessToken, ...locations);
    }

    private buildUrl(datetime: string, parameters: string, locations: string, format: string, accessToken: string): string {
        return this.baseUrl + `/${ datetime }/${ parameters }/${ locations }/${ format }?access_token=${ accessToken }`;
    }

    private sendHttpReq(dateTime: DateTime | DateTimeSpan, parameter: string, locations: string[], accessToken: string): Observable<WeatherApiResponse> {

        if (!locations.length) throw new Error('you have to have at least one location');

        const format = 'json';
        const url = this.buildUrl(this.converter.toUtc(dateTime), parameter, locations.join('+'), format, accessToken);

        return this.http.get<WeatherApiResponse>(url).pipe(
            map(obj => this.converter.toWeatherApi(obj))
        );
    }
}
