import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IQueue } from './queue';
import { HttpResponse } from 'selenium-webdriver/http';


@Injectable()
export class QueuesService {
    private _devqueuesUrl = 'http://localhost:55299/api/workorder/getqueues/wsully';  
    private _queuesUrl = 'https://qa-workorders.e-ins.net/api/workorder/getqueues/wsully';

    constructor(private _http: HttpClient) { }

    public getQueues(): Observable<IQueue[]> {
        return this._http.get<IQueue[]>(this._devqueuesUrl)
        .do (data => console.log('data: ' + JSON.stringify(data)))
        .catch(this.errorHandler);
    }

    private errorHandler(ex: HttpErrorResponse) {
        console.log('Work Orders queues.service.ts ERROR: ' + ex.message);
        return Observable.throw(ex);
    }
}
