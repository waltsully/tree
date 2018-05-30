import { IWorkOrderSummary } from './workorders/models/IWorkOrderSummary.model';

export interface AppState {
    readonly workorders: IWorkOrderSummary[];
}

