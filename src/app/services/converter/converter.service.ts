import { Injectable } from '@angular/core';
import { TokenGen, TokenGenDto } from '../../models/token-gen/token-gen.model';
import { DateTimeSpan } from '../../models/date-time-span/date-time-span.model';
import { DateTime } from '../../models/date-time/date-time.model';
import { Coordinate, Data, Date, WeatherApiResponse } from '../../models/weather-api/weather-api-response.model';

@Injectable({
    providedIn: 'root'
})
export class ConverterService {

    toTokenGen(obj: TokenGenDto): TokenGen {
        return new TokenGen(obj.access_token, obj.token_type);
    }

    toUtc(dateTime: DateTime | DateTimeSpan): string {
        return dateTime instanceof DateTime ? dateTime.toUtc() : dateTime.toUtc();
    }


    toDisplayTemperature(temperature: number): number {
        return Math.round(temperature);
    }

    toWeatherApi(obj: WeatherApiResponse): WeatherApiResponse {
        return new WeatherApiResponse(
            obj.version,
            obj.user,
            obj.dateGenerated,
            obj.status,
            obj.data.map(data => {
                return new Data(
                    data.parameter,
                    data.coordinates.map(coordinate => {
                        return new Coordinate(
                            coordinate.lat,
                            coordinate.lon,
                            coordinate.dates.map(date => {
                                return new Date(
                                    date.date instanceof DateTime ? date.date : DateTime.fromUtc(date.date),
                                    date.value
                                );
                            })
                        );
                    })
                );
            })
        );
    }
}
