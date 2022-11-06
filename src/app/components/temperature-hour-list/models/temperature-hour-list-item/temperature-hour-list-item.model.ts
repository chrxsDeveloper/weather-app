import { DateTime } from '../../../../services/weather-api/model/date-time.model';

export class TemperatureHourListItem {
    dateTime: DateTime;
    svgIconInfo: SvgIconInfo;
    temperature: number | undefined;
    isNow: boolean;

    constructor(dateTime: string | DateTime, svgIconSrc: string, svgIconAlt: string, temperature: number | undefined = undefined, isNow: boolean = false) {
        this.dateTime = dateTime instanceof DateTime ? dateTime : DateTime.fromUtc(dateTime);
        this.svgIconInfo = new SvgIconInfo(svgIconSrc, svgIconAlt);
        this.temperature = temperature;
        this.isNow = isNow;
    }
}

export class SvgIconInfo {
    src: string;
    alt: string;
    dir: string;
    name: string;
    width: number;
    height: number;

    constructor(src: string, alt: string) {
        this.src = src;
        this.alt = alt;

        const ar = src.split('/');
        this.dir = ar.join('/');

        const na = ar.pop()!.split('.')[0].split('_');
        this.name = na[0];
        this.width = +na[1].split('x')[0];
        this.height = +na[1].split('x')[1];
    }
}
