import * as fromErrors from './errors';
import { createSelector, ActionReducerMap } from '@ngrx/store';

export interface State {
  errors: fromErrors.State;
}

export const reducers: ActionReducerMap<State> = {
  errors: fromErrors.reducer
};

// Selectors

export const _selectErrors = (state: State) => state.errors;
export const selectHasError = createSelector(_selectErrors, e => e.hasError);
export const selectErrorMessage = createSelector(_selectErrors, e => e.errorMessage);
