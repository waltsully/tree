import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IWorkOrderInfo } from './workorderinfo';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class WorkOrderListService {
    private _devworkorderlistUrl = 'http://localhost:55299/api/workorder/GetListByQueueAndUser/';
    private _workorderlistUrl = 'https://qa-workorders.e-ins.net/api/workorder/GetListByQueueAndUser/';

    constructor(private _http: HttpClient) { }

    public getWorkOrderList(userNetworkId: string): Observable<any> {
        return this._http.get(this._devworkorderlistUrl + userNetworkId)
            .do (data => console.log('WorkOrderListService:getWorkOrderList returning data for: ' + userNetworkId))
            .catch(this.errorHandler);
    }

    private errorHandler(ex: HttpErrorResponse) {
        console.log('WorkOrderListService ERROR: ' + ex.message);
        return Observable.throw(ex);
    }
}