import { Injectable } from '@angular/core';
import { TokenGen, TokenGenDto } from '../weather-api/model/token-gen.model';
import { DateTimeSpan } from '../weather-api/model/date-time-span.model';
import { DateTime } from '../weather-api/model/date-time.model';

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
}
