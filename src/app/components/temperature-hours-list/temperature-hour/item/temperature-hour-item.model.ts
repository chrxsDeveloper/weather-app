import { DateTime } from '../../../../models/date-time/date-time.model';
import { SvgIconInfo } from '../../../../models/svg-icon-info/svg-icon-info.model';

export class TemperatureHourItem {
    dateTime: DateTime;
    svgIconInfo: SvgIconInfo;
    temperature: number | undefined;
    isNow: boolean;

    constructor(
        dateTime: string | DateTime,
        svgIconSrc: string,
        svgIconAlt: string,
        temperature: number | undefined = undefined,
        isNow: boolean = false
    ) {
        this.dateTime = dateTime instanceof DateTime ? dateTime : DateTime.fromUtc(dateTime);
        this.svgIconInfo = new SvgIconInfo(svgIconSrc, svgIconAlt);
        this.temperature = temperature;
        this.isNow = isNow;
    }
}