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

class Data {
    parameter: string;
    coordinates: Coordinate[];

    constructor(parameter: string, coordinates: Coordinate[]) {
        this.parameter = parameter;
        this.coordinates = coordinates;
    }
}

class Coordinate {
    lat: number;
    lon: number;
    dates: Date[];

    constructor(lat: number, lon: number, dates: Date[]) {
        this.lat = lat;
        this.lon = lon;
        this.dates = dates;
    }
}

class Date {
    date: string;
    value: number;

    constructor(date: string, value: number) {
        this.date = date;
        this.value = value;
    }
}
