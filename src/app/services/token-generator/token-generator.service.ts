import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TokenGen } from '../../models/token-gen/token-gen.model';
import { map, Observable } from 'rxjs';
import { ConverterService } from '../converter/converter.service';

@Injectable({
    providedIn: 'root'
})
export class TokenGeneratorService {

    baseUrl = environment.weatherApi.tokenPath;

    constructor(
        private http: HttpClient,
        private converter: ConverterService
    ) {
    }

    createToken(): Observable<TokenGen> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Basic ' + window.btoa('my-private-project_bach:Dlas08P1aQ'))
            .set('Accept', 'application/json');

        return this.http.get<any>(this.baseUrl, { headers: headers }).pipe(
            map(val => this.converter.toTokenGen(val))
        );
    }
}
