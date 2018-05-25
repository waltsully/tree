import { Action } from '@ngrx/store';
import { WorkOrders } from '../models/workorders.model';
import * as actions from '../actions/workorders.actions';

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { tassign } from 'tassign';

export interface State extends EntityState<WorkOrders> {
  focusWorkOrderNumber: number | null;
}

const initialState: State = {
  ids: [],
  entities: {},
  focusWorkOrderNumber: null
};

export const adapter = createEntityAdapter<WorkOrders>({

});

export function reducer(state: State = initialState, action: actions.ALL): State {
  switch (action.type) {
 
    case actions.LOAD_WORKORDERS: {
      return adapter.addAll(actions.LOAD_WORKORDERS, state);
    }
    // More here...
  }
}
