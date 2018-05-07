import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnChanges,
         ViewEncapsulation } from '@angular/core';
import { IQueueInFocus } from './workorders/queues.component';

@Component({
    // prevent style encapsulation
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']

})

export class AppComponent implements OnInit, AfterViewInit, OnChanges {
     @Input() selectedQueue = <IQueueInFocus>{};
     workOrderFocus: string;
     networkId: string;

    onSelectedQueueChanged($event: IQueueInFocus) {
        console.log ('App component received event "selectedQueueChanged" ' + JSON.stringify($event));
        this.workOrderFocus = $event.userName;
        this.networkId = $event.userNetworkId;
    }

    ngOnInit(): void {
        console.log('App component: ngOnInit fired. Seeding "workOrderFocus"');
        this.selectedQueue.userName = 'Walt Sully';
        this.selectedQueue.userNetworkId = 'wsully';
        this.workOrderFocus = this.selectedQueue.userName;
     }

    ngAfterViewInit(): void {
        console.log('App component: ngAfterViewInit fired');
    }

    ngOnChanges(): void {
        console.log('App component: ngOnChanges fired');
    }
}
