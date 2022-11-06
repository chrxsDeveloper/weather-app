import { DateTime } from '../../../../services/weather-api/model/date-time.model';

export class TemperatureHourListItem {
    dateTime: DateTime;
    svgIconSrc: string;
    svgIconAlt: string;
    temperature: number | undefined;
    isNow: boolean;
    isSunChange?: string;

    constructor(dateTime: DateTime, svgIconSrc: string, svgIconAlt: string, temperature: number | undefined = undefined, isNow: boolean = false, isSunChange: string | undefined = undefined) {
        this.dateTime = dateTime;
        this.svgIconSrc = svgIconSrc;
        this.svgIconAlt = svgIconAlt;
        this.temperature = temperature;
        this.isNow = isNow;
        this.isSunChange = isSunChange;
    }
}
