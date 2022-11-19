export class TemperatureDayItem {
    weekday: string;
    weatherIconSrc: string;
    minTemp: number;
    maxTemp: number;
    rainStart: number;
    rainEnd: number;
    isToday: boolean;

    constructor(weekday: string, weatherIconSrc: string, minTemp: number, maxTemp: number, rainStart: number, rainEnd: number, isToday: boolean = false) {
        this.weekday = weekday;
        this.weatherIconSrc = weatherIconSrc;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.rainStart = rainStart;
        this.rainEnd = rainEnd;
        this.isToday = isToday;
    }
}
