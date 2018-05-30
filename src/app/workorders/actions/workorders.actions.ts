import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IWorkOrderSummary } from '../models/IWorkOrderSummary.model';
import { IWorkOrderDetail} from '../models/IWorkOrderDetail.model';
import { WorkOrderEntity } from '../reducers/workorders.reducer';

export const LOAD_WORKORDERS = '[workorders] Load WorkOrders';
export class LoadWorkOrders implements Action {
  readonly type = LOAD_WORKORDERS;
  constructor() { }
}

export const LOAD_WORKORDERS_SUCCESS = '[workorders] Load WorkOrders Success';
export class LoadWorkOrdersSuccess implements Action {
  readonly type = LOAD_WORKORDERS_SUCCESS;
  constructor(public workorders: WorkOrderEntity[]) { }
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

export type ALL = 
  LoadWorkOrders | 
  LoadWorkOrdersSuccess | 
  EditWorkOrder | 
  SaveWorkOrder;

