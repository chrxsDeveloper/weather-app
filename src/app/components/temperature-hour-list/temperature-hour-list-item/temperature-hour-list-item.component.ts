import { Component, Input, OnInit } from '@angular/core';
import { TemperatureHourListItem } from '../models/temperature-hour-list-item/temperature-hour-list-item.model';

@Component({
    selector: 'app-temperature-hour-list-item',
    templateUrl: './temperature-hour-list-item.component.html',
    styleUrls: ['./temperature-hour-list-item.component.css']
})
export class TemperatureHourListItemComponent implements OnInit {

    @Input() item?: TemperatureHourListItem;

    constructor() {
    }

    ngOnInit(): void {
    }
}
