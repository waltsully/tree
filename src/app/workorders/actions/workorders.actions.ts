import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { WorkOrders } from '../models/workorders.model';

// Here we are managing a single "in focus" Work Order 

export const LOAD_WORKORDERS = '[workorders] Load WorkOrders';
export class LoadWorkOrders implements Action {
  readonly type = LOAD_WORKORDERS;
  constructor() { }
}

export const EDIT_WORKORDERS = '[workorders] Edit WorkOrders';
export class EditWorkOrders implements Action {
  readonly type = EDIT_WORKORDERS;
  constructor() { }
}

export const SAVE_WORKORDERS = '[workorders] Save WorkOrders';
export class SaveWorkOrders implements Action {
  readonly type = SAVE_WORKORDERS;
  constructor() { }
}

export type Actions = LoadWorkOrders | EditWorkOrders | SaveWorkOrders;

