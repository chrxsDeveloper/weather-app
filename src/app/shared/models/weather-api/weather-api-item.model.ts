import { DateTime } from '../../../services/weather-api/model/date-time.model';

export class WeatherApiItem {
    version: string;
    user: string;
    dateGenerated: string;
    status: string;
    data: Data[];

    constructor(version: string, user: string, dateGenerated: string, status: string, data: Data[]) {
        this.version = version;
        this.user = user;
        this.dateGenerated = dateGenerated;
        this.status = status;
        this.data = data;
    }
}

export class Data {
    parameter: string;
    coordinates: Coordinate[];

    constructor(parameter: string, coordinates: Coordinate[]) {
        this.parameter = parameter;
        this.coordinates = coordinates;
    }
}

export class Coordinate {
    lat: number;
    lon: number;
    dates: Date[];

    constructor(lat: number, lon: number, dates: Date[]) {
        this.lat = lat;
        this.lon = lon;
        this.dates = dates;
    }
}

export class Date {
    date: string | DateTime;
    value: string | number;

    constructor(date: string | DateTime, value: string | number) {
        this.date = date;
        this.value = value;
    }
}

