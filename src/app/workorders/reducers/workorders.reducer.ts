import { Action } from '@ngrx/store';
import { IWorkOrderSummary } from '../models/IWorkorderSummary.model';
import * as actions from '../actions/workorders.actions';

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { tassign } from 'tassign';

export interface WorkOrderEntity extends IWorkOrderSummary {
  id: string[];
}

export interface State extends EntityState<WorkOrderEntity> {
  focusWorkOrderNumber: number | null;
}

const initialState: State = {
  ids: [],
  entities: {},
  focusWorkOrderNumber: null
};

export const adapter = createEntityAdapter<WorkOrderEntity>({

});

// Note: WS 5/30/2018 
// Initial data seeding for the panel of 3 top-level components is handled at application level during app start-up

export function reducer(state: State = initialState, action: actions.ALL): State {

  switch (action.type) { 
    case actions.LOAD_WORKORDERS_SUCCESS: {
      return adapter.addAll(action.workorders, state);
    }
  }
}
