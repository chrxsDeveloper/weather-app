import { Injectable } from '@angular/core';
import { TokenGen, TokenGenDto } from '../weather-api/model/token-gen.model';
import { DateTimeSpan } from '../weather-api/model/date-time-span.model';
import { DateTime } from '../weather-api/model/date-time.model';
import { Coordinate, Data, Date, WeatherApiItem } from '../../shared-models/weather-api/weather-api-item.model';

@Injectable({
    providedIn: 'root'
})
export class ConverterService {

    constructor() {
    }

    toTokenGen(obj: TokenGenDto): TokenGen {
        return new TokenGen(obj.access_token, obj.token_type);
    }

    toUtc(dateTime: DateTime | DateTimeSpan): string {
        return dateTime instanceof DateTime ? dateTime.toUtc() : dateTime.toUtc();
    }


    toDisplayTemperature(temperature: number): number {
        return Math.round(temperature);
    }

    toWeatherApi(obj: WeatherApiItem): WeatherApiItem {
        return new WeatherApiItem(
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
                                )
                            })
                        )
                    })
                )
            })
        )
    }
}
