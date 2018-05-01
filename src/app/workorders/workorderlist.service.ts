import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IWorkOrderInfo } from './workorderinfo';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class WorkOrderListService {
    private _devworkorderlistUrl = 'http://localhost:55299/api/workorder/getassigned/wsully';
    private _workorderlistUrl = 'https://qa-workorders.e-ins.net/api/workorder/getassigned/wsully';

    constructor(private _http: HttpClient) { }

    public getWorkOrderList(): Observable<IWorkOrderInfo[]> {
        return this._http.get<IWorkOrderInfo[]>(this._devworkorderlistUrl)
        .do (data => console.log('data: ' + JSON.stringify(data)))
        .catch(this.errorHandler);
    }

    private errorHandler(ex: HttpErrorResponse) {
        console.log('workorderlist.service.ts ERROR: ' + ex.message);
        return Observable.throw(ex);
    }
}
