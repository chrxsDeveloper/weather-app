import { Component, Input, OnInit } from '@angular/core';
import { SvgIconInfo } from '../../models/svg-icon-info/svg-icon-info.model';

@Component({
    selector: 'app-widget-title',
    templateUrl: './widget-title.component.html',
    styleUrls: ['./widget-title.component.css']
})
export class WidgetTitleComponent implements OnInit {

    @Input() icon!: SvgIconInfo;
    @Input() text!: string;
    @Input() marginBottom = false;

    ngOnInit(): void {
    }
}
