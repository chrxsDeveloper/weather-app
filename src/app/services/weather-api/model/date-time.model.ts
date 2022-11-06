export class DateTime {
    year?: number;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    plusHours?: number;

    constructor(
        year?: number,
        months?: number,
        days?: number,
        hours?: number,
        minutes?: number,
        seconds?: number,
        plusHours?: number
    ) {
        this.year = year;
        this.months = months;
        this.days = days;
        this.hours = !!hours && hours > 23 ? hours - 24 : hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.plusHours = plusHours;
    }

    static now(): DateTime {
        return DateTime.fromDate(new Date());
    }

    static fromDate(date: Date): DateTime {
        return new DateTime(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            1
        );
    }

    static fromUtc(utc: string): DateTime {
        utc = utc.replace('T', '').replace('-', '').replace(':', '');

        return new DateTime(
            +utc.substring(0, 3),
            +utc.substring(4, 6),
            +utc.substring(7, 9),
            +utc.substring(9, 11) + 1,
            +utc.substring(10, 12),
            +utc.substring(12, 14),
            1
        );
    }

    static onlyDays(days: number): DateTime {
        return new DateTime(undefined, undefined, days);
    }

    static onlyHours(hours: number): DateTime {
        return new DateTime(undefined, undefined, undefined, hours);
    }

    private static addZero(value: number): string {
        return (value < 10 ? '0' : '') + value;
    }

    toUtc(): string {
        return '' +
            (!this.year ? '00' : this.year) + '-' +
            (!this.months ? '00' : DateTime.addZero(this.months)) + '-' +
            (!this.days ? '00' : DateTime.addZero(this.days)) + 'T' +
            (!this.hours ? '00' : DateTime.addZero(this.hours)) + ':' +
            (!this.minutes ? '00' : DateTime.addZero(this.minutes)) + ':' +
            (!this.seconds ? '00' : DateTime.addZero(this.seconds)) +
            (!this.plusHours ? 'Z' : `+${ DateTime.addZero(this.plusHours) }:00`);
    }

    toShortForm(): string {
        let output = '';

        if (this.year) output += this.year + 'Y';
        if (this.months) output += this.months + 'M';
        if (this.days) output += this.days + 'D';
        if (this.hours) output += 'T' + this.hours + 'H';
        if (this.minutes) output += 'T' + this.minutes + 'M';
        if (this.seconds) output += 'T' + this.seconds + 'S';

        return output;
    }

    toPattern_HHMM(): string {
        return (!this.hours ? '00' : DateTime.addZero(this.hours)) + ':' + (!this.minutes ? '00' : DateTime.addZero(this.minutes));
    }

    getHour2Digits(): string {
        return !this.hours ? '00' : DateTime.addZero(this.hours);
    }
}
