import { Component, OnInit } from '@angular/core';
import { SvgIconInfo } from '../../models/svg-icon-info/svg-icon-info.model';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-rain-map',
    templateUrl: './rain-map.component.html',
    styleUrls: ['./rain-map.component.css']
})
export class RainMapComponent implements OnInit {

    titleIcon = new SvgIconInfo('assets/widget-title/umbrella_10x11.svg');
    lat = +environment.location.split(',')[0];
    lon = +environment.location.split(',')[1];

    ngOnInit(): void {
    }
}
