import { IQueue } from '../workorders/models/IQueue.model';
import { IWorkOrderSummary } from '../workorders/models/IWorkOrderSummary.model';
import { IWorkOrderActivity } from '../workorders/models/IWorkOrderActivity.model';
import { IWorkOrderDetail} from '../workorders/models/IWorkOrderDetail.model';

export interface IAppState {
    panelState: string;
    hasError: boolean;
    errorMessage: string;
    readonly queues: IQueue[];
    readonly activities: IWorkOrderActivity[];
    readonly summaries: IWorkOrderSummary[];
  }

  export const initialState: IAppState = {
    panelState: 'Queues Loading',
    hasError: false,
    errorMessage: '',
    queues: [],
    activities: [],
    summaries: []    
  };

  export function reducer(state= initialState, action) {
    return state;
  }
