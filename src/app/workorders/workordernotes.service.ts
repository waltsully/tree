import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IWorkOrderInfo } from './workorderinfo';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class WorkOrderNotesService {
    private _devworkorderlistUrl = 'http://localhost:55299/api/workorder/GetListByQueueAndUser/';
    private _workorderlistUrl = 'https://qa-workorders.e-ins.net/api/workorder/GetListByQueueAndUser/';

    constructor(private _http: HttpClient) { }

    public getWorkOrderNotes(workOrderNumber: string): Observable<any> {
        console.log('WorkOrderNoteService: getWorkOrderList for: ' + workOrderNumber);
        return this._http.get(this._devworkorderlistUrl + workOrderNumber)
        .do (data => console.log('WorkOrderNotesService:getWorkOrderNotes:WO#' + workOrderNumber + ': ' + JSON.stringify(data)))
        .catch(this.errorHandler);
    }

    private errorHandler(ex: HttpErrorResponse) {
        console.log('WorkOrderNotesService.ts ERROR: ' + ex.message);
        return Observable.throw(ex);
    }
}
