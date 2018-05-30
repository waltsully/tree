// import { Action } from '@ngrx/store';
import * as appActions from '../actions/app.actions';


export interface State {
  hasError: boolean;
  errorMessage: string | null;
}

const initialState: State = {
  hasError: false,
  errorMessage: null
};

export function reducer(state: State = initialState, action: appActions.All): State {
  switch (action.type) {
    case appActions.APPLICATION_ERROR: {
      return {
        hasError: true,
        errorMessage: action.message
      };
    }
    default: {
      return state;
    }
  }
}
