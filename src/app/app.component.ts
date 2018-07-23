import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnChanges,
         ViewEncapsulation } from '@angular/core';
// import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Store, _createStoreReducers } from '@ngrx/store';
import { IAppState } from './store/IAppState';
import { ApplicationStart } from './store/actions';
import { IQueueFocus } from './app-panels/queues/queues.component';
import { IWorkOrderFocus } from './app-panels/workorder-list/workorderlist.component';
import { Action } from 'rxjs/internal/scheduler/Action';

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

    title = 'My App Works!';
    selectedQueueItemCount: number;
    today: Date;
    panelState$: Observable<string>;
    hasError$: Observable<boolean>;
    errorMessage$: Observable<string>;

    constructor(private store: Store<IAppState>) {
        console.log('We have a store! ' + store);
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

    // WSULLY 6/1/2018 This is where we start...
    ngOnInit(): void {
        console.log('AppComponent: ngOnInit fired. Dispatching: ApplicationStart');
        this.today = new Date();
        this.store.dispatch(new ApplicationStart());
        // this.panelState$ = this.store.select(selectPanelState);        
        // this.hasError$ = this.store.select(selectHasError);
        // this.errorMessage$ = this.store.select(selectErrorMessage);
     }

    ngAfterViewInit(): void {
        console.log('AppComponent: ngAfterViewInit fired');
    }

    ngOnChanges(): void {
        console.log('AppComponent: ngOnChanges fired');
    }
}
