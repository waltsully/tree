import { Time } from '@angular/common';

export interface WorkOrderDetail {
    WorkOrderNumber: number;
    EnteredBy: string;
    DateEntered: Date;
    TimeEntered: Time;
    Category: string;
    KeyWords: string;
}


