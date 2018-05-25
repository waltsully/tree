import { WorkOrders } from './workorders/models/workorders.model';

export interface AppState {
    readonly workorders: WorkOrders[];
}

