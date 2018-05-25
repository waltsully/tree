import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IWorkOrderSummary } from '../workorders/models/workordersummary.model';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class WorkOrderListService {
    private _devworkorderlistUrl = 'http://localhost:55299/api/workorder/GetListByUserAndQueue/';
    private _workorderlistUrl = 'https://qa-workorders.e-ins.net/api/workorder/GetListByUserAndQueue/';

    constructor(private _http: HttpClient) { }

    public getWorkOrderList(userNetworkId: string, queueId: number): Observable<any> {
        return this._http.get(this._devworkorderlistUrl + userNetworkId + '/' + queueId)
            .do (data => console.log('WorkOrderListService:getWorkOrderList returning data: '))
            .catch(this.errorHandler);
    }

    private errorHandler(ex: HttpErrorResponse) {
        console.log('WorkOrderListService ERROR: ' + ex.message);
        return Observable.throw(ex);
    }
}