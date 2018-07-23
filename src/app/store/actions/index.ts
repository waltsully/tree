import { Action } from '@ngrx/store';


export const APPLICATION_START = '[App] Start';
export class ApplicationStart implements Action {
  readonly type = APPLICATION_START;
  constructor() { 
    console.log('ACTION-->APPLICATION_START');
  }
}

export const APPLICATION_ERROR = '[App] Error';
export class ApplicationError implements Action {
  readonly type = APPLICATION_ERROR;
  constructor(public message: string) { }
}

export const LOAD_QUEUES = '[workorders] Load Queues';
export class LoadQueues implements Action {
  readonly type = LOAD_QUEUES;
  constructor() {
    console.log('ACTION-->LOAD_QUEUES');
   }
}

export const LOAD_QUEUES_SUCCESS = '[workorders] Load Queues Success';
export class LoadQueuesSuccess implements Action {
  readonly type = LOAD_QUEUES_SUCCESS;
  constructor() {
    console.log('ACTION-->LOAD_QUEUES_SUCCESS');    
   }
}

export const EDIT_WORKORDER = '[workorders] Edit WorkOrder';
export class EditWorkOrder implements Action {
  readonly type = EDIT_WORKORDER;
  constructor() { 
    console.log('ACTION-->EDIT_WORKORDER');
  }
}

export const SAVE_WORKORDER = '[workorders] Save WorkOrder';
export class SaveWorkOrder implements Action {
  readonly type = SAVE_WORKORDER;
  constructor() { 
    console.log('ACTION-->SAVE_WORKORDER');
  }
}

export type ALL = ApplicationStart | 
                  ApplicationError | 
                  LoadQueues |  
                  LoadQueuesSuccess | 
                  EditWorkOrder | 
                  SaveWorkOrder;


