import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnChanges,
         ViewEncapsulation } from '@angular/core';
import { IQueueFocus } from './workorders/queues.component';
import { IWorkOrderFocus } from './workorders/workorderlist.component';

@Component({
    // prevent style encapsulation
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']

})

export class AppComponent implements OnInit, AfterViewInit, OnChanges {

     public selectedQueue: string;
     public userNetworkId: string;
     public selectedWorkOrder: string;


    onSelectedQueueChanged($event: any) {
        console.log ('AppComponent: onSelectedQueueChanged: ' + JSON.stringify($event));
        this.userNetworkId = $event.userNetworkId;
        this.selectedQueue = $event.userName;
        console.log ('AppComponent: set public vars: ' + this.selectedQueue + ',' + this.userNetworkId);
    }

    onSelectedWorkOrderChanged($event: any) {
        console.log ('App component received event "onSelectedWorkOrderChanged" ' + JSON.stringify($event));
        this.selectedWorkOrder = $event.WorkOrderNumber;
        this.userNetworkId = $event.UserNetworkId;
    }

    ngOnInit(): void {
        console.log('App component: ngOnInit fired.');
     }

    ngAfterViewInit(): void {
        console.log('App component: ngAfterViewInit fired');
    }

    ngOnChanges(): void {
        console.log('App component: ngOnChanges fired');
    }
}
