import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IWorkOrderSummary } from '../../workorders/models/IWorkOrderSummary.model';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class WorkOrderActivityService {
    private _devworkorderlistUrl = 'http://localhost:55299/api/workorder/GetActivity/';
    private _workorderlistUrl = 'https://qa-workorders.e-ins.net/api/workorder/GetActivity/';

    constructor(private _http: HttpClient) { }

    public getWorkOrderActivity(workOrderNumber: number): Observable<any> {
        console.log('WorkOrderActivityService: getWorkOrderActivity for: ' + workOrderNumber);
        return this._http.get(this._devworkorderlistUrl + workOrderNumber)
        .do (data => console.log('WorkOrderActivityService:getWorkOrderAcitivity: data: ')) //  + JSON.stringify(data)))
        .catch(this.errorHandler);
    }

    private errorHandler(ex: HttpErrorResponse) {
        console.log('WorkOrderActivityService.ts ERROR: ' + ex.message);
        return Observable.throw(ex);
    }
}
