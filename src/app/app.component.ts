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
    @Input() selectedQueue: string;
    @Input() userNetworkId: string;
    @Input() selectedWorkOrder: string;

    onSelectedQueueChanged($event: any) {
       console.log ('AppComponent: onSelectedQueueChanged: ' + JSON.stringify($event));
       this.userNetworkId = $event.userNetworkId;
       this.selectedQueue = $event.userName;
       console.log ('AppComponent: set Queue bindings: ' + this.selectedQueue + ',' + this.userNetworkId);
    }

    onSelectedWorkOrderChanged($event: any) {
        console.log ('AppComponent: onSelectedWorkOrderChanged: ' + JSON.stringify($event));
        // this.userNetworkId = $event.UserNetworkId;
        this.selectedWorkOrder = $event.workOrderNumber;
        console.log ('AppComponent: set WorkOrder bindings: ' + this.selectedWorkOrder + ',' + this.userNetworkId);
    }

    ngOnInit(): void {
        console.log('AppComponent: ngOnInit fired.');
     }

    ngAfterViewInit(): void {
        console.log('AppComponent: ngAfterViewInit fired');
    }

    ngOnChanges(): void {
        console.log('AppComponent: ngOnChanges fired');
    }
}
