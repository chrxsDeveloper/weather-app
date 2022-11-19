import { DateTime } from '../date-time/date-time.model';

export class DateTimeSpan {
    from: DateTime;
    duration: DateTime;
    step: DateTime;

    constructor(from: DateTime, duration: DateTime, step: DateTime) {
        this.from = from;
        this.duration = duration;
        this.step = step;
    }

    toUtc(): string {
        return `${ this.from.toUtc() }P${ this.duration.toShortForm() }:P${ this.step.toShortForm() }`;
    }
}
