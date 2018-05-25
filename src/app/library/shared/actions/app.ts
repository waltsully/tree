import { Action } from '@ngrx/store';

export const APPLICATION_START = '[App] Start';
export class ApplicationStarted implements Action {
  readonly type = APPLICATION_START;
  constructor() { }
}

export const APPLICATION_ERROR = '[app] feature error';
export class ApplicationFeatureError implements Action {
  readonly type = APPLICATION_ERROR;
  constructor(public message: string) { }
}


export type All = ApplicationStarted
  | ApplicationFeatureError;
