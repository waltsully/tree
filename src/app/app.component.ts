import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnChanges,
         ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IQueueFocus } from './app-panels/queues.component';
import { IWorkOrderFocus } from './app-panels/workorderlist.component';

@Component({
    // prevent style encapsulation
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']

})

export class AppComponent implements OnInit, AfterViewInit, OnChanges {
    @Input() selectedQueueName: string;
    @Input() selectedQueueId: number;
    @Input() userNetworkId: string;
    @Input() selectedWorkOrder: string;

    public selectedQueueItemCount: number;
    public today: Date;

    constructor() {
    }

    onSelectedQueueChanged($event: any) {
       console.log ('AppComponent: onSelectedQueueChanged: ' + JSON.stringify($event));
       this.userNetworkId = $event.userNetworkId;
       this.selectedQueueName = $event.userName;
       this.selectedQueueId = $event.queueId;
       this.selectedQueueItemCount = $event.itemCount;
       console.log ('AppComponent: set Queue bindings: ' +  this.selectedQueueName + ',' + this.selectedQueueId + ',' + this.userNetworkId);
    }

    onSelectedWorkOrderChanged($event: any) {
        console.log ('AppComponent: onSelectedWorkOrderChanged: ' + JSON.stringify($event));
        // this.userNetworkId = $event.UserNetworkId;
        this.selectedWorkOrder = $event.workOrderNumber;
        console.log ('AppComponent: set WorkOrder bindings: ' + this.selectedWorkOrder + ',' + this.userNetworkId);
    }

    ngOnInit(): void {
        console.log('AppComponent: ngOnInit fired.');
        this.today = new Date();
     }

    ngAfterViewInit(): void {
        console.log('AppComponent: ngAfterViewInit fired');
    }

    ngOnChanges(): void {
        console.log('AppComponent: ngOnChanges fired');
    }
}
