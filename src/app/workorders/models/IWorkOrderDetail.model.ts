import { Time } from '@angular/common';

export interface IWorkOrderDetail {
    WorkOrderNumber: number;
    EnteredBy: string;
    DateEntered: Date;
    TimeEntered: Time;
    Category: string;
    KeyWords: string;
}


