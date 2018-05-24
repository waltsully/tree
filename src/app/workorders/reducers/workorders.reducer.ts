import { Action } from '@ngrx/store';
import { WorkOrders } from '../models/workorders.model';
import * as Actions from '../actions/workorders.actions';

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

