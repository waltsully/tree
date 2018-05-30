import { IWorkOrderSummary } from '../workorders/models/IWorkOrderSummary.model';

export interface IAppState {
    workorders: IWorkOrderSummary[];
}
