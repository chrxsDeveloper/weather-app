import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api/weather-api.service';
import { TokenGeneratorService } from '../../services/token-generator/token-generator.service';
import { environment } from '../../../environments/environment';
import { SvgIconInfo } from '../../models/svg-icon-info/svg-icon-info.model';

@Component({
    selector: 'app-uv-index',
    templateUrl: './uv-index.component.html',
    styleUrls: ['./uv-index.component.css']
})
export class UvIndexComponent implements OnInit {

    titleIcon = new SvgIconInfo('assets/widget-title/sun_11x11.svg');
    currentUvIndex!: number;
    uvLevel!: string;
    barSrc!: string;

    nuernbergLocation = environment.location;

    constructor(
        private weatherApiService: WeatherApiService,
        private tokenGenerator: TokenGeneratorService
    ) {
    }

    ngOnInit(): void {
        this.tokenGenerator.createToken().subscribe(token => {
            const accessToken = token.accessToken;

            this.weatherApiService.getCurrentUvIndex(accessToken, this.nuernbergLocation).subscribe(uvIndex => {
                this.currentUvIndex = +uvIndex.data[0].coordinates[0].dates[0].value;

                if (this.currentUvIndex < 3) {
                    this.uvLevel = 'niedrig';
                } else if (this.currentUvIndex < 6) {
                    this.uvLevel = 'mäßig';
                } else if (this.currentUvIndex < 8) {
                    this.uvLevel = 'hoch';
                } else if (this.currentUvIndex < 11) {
                    this.uvLevel = 'sehr hoch';
                } else {
                    this.uvLevel = 'extrem';
                }

                this.barSrc = `assets/bars/uv-index-bar-${ this.currentUvIndex > 10 ? 10 : this.currentUvIndex }_128x4.svg`;
            });
        });
    }
}
