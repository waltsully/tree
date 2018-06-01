// import { Action } from '@ngrx/store';
import * as appActions from '../actions/app.actions';

export interface State {
  panelState: string;
  hasError: boolean;
  errorMessage: string | null;
}

const initialState: State = {
  panelState: 'Queues Loading',
  hasError: false,
  errorMessage: null
};

export function reducer(state: State = initialState, action: appActions.All): State {
  switch (action.type) {
    case appActions.APPLICATION_ERROR: {
      return {
        panelState: 'Unknown',
        hasError: true,
        errorMessage: action.message
      };
    }
    default: {
      return state;
    }
  }
}
