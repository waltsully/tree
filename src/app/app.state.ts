import { IWorkOrderSummary } from './workorders/models/IWorkOrderSummary.model';

export interface IAppState {
    readonly workorders: IWorkOrderSummary[];
}

