import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
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

    public getQueues(): Observable<any> {
        return this._http.get(this._devqueuesUrl)
        .do (data => console.log('QueueServices:getQueues returning data ')) // + JSON.stringify(data)))
        .catch(this.errorHandler);
    }

    private errorHandler(ex: HttpErrorResponse) {
        console.log('queues.service.ts ERROR: ' + ex.message);
        return Observable.throw(ex);
    }
}
