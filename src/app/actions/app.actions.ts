import { Action } from '@ngrx/store';

export const APPLICATION_START = '[App] Start';
export class ApplicationStart implements Action {
  readonly type = APPLICATION_START;
  constructor() { }
}

export const APPLICATION_ERROR = '[App] Error';
export class ApplicationError implements Action {
  readonly type = APPLICATION_ERROR;
  constructor(public message: string) { }
}


export type All =  ApplicationStart | ApplicationError;
