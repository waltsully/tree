import * as fromErrors from './errors';
import { createSelector, ActionReducerMap } from '@ngrx/store';

export interface State {
  panelState: string;
  errors: fromErrors.State;
}

export const reducers: ActionReducerMap<State> = {
  panelState: null,
  errors: fromErrors.reducer
};


export const _selectErrors = (state: State) => state.errors;
export const selectPanelState = createSelector(_selectErrors, e => e.panelState);
export const selectHasError = createSelector(_selectErrors, e => e.hasError);
export const selectErrorMessage = createSelector(_selectErrors, e => e.errorMessage);
