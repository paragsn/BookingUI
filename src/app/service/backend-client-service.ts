import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendClientService {
    constructor(private http: HttpClient) {
    }

    get(api: string) {
        return this.http.get(api)
        .map((res:Response) => res.json);
    }

    post(api: string, body: string) {
        return this.http.post(api, body)
        .map((res:Response) => res.json);
    }
}