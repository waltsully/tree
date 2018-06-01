import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IWorkOrderSummary } from '../models/IWorkOrderSummary.model';
import { IWorkOrderDetail} from '../models/IWorkOrderDetail.model';

import * as fromWorkOrders from '../../workorders/reducers';

export const LOAD_QUEUES = '[workorders] Load Queues';
export class LoadQueues implements Action {
  readonly type = LOAD_QUEUES;
  constructor() { }
}

export const LOAD_QUEUES_SUCCESS = '[workorders] Load Queues Success';
export class LoadWorkQueuesSuccess implements Action {
  readonly type = LOAD_QUEUES_SUCCESS;
  constructor(public workorders: fromWorkOrders.WorkOrderEntity[]) {
    console.log('ACTION-->LOAD_QUEUES_SUCCESS');
    
   }
}

export const EDIT_WORKORDER = '[workorders] Edit WorkOrder';
export class EditWorkOrder implements Action {
  readonly type = EDIT_WORKORDER;
  constructor() { }
}

export const SAVE_WORKORDER = '[workorders] Save WorkOrder';
export class SaveWorkOrder implements Action {
  readonly type = SAVE_WORKORDER;
  constructor() { }
}

export type ALL =  LoadQueues |  LoadWorkQueuesSuccess | EditWorkOrder | SaveWorkOrder;

