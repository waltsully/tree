import { Component,  OnInit, AfterViewInit, OnChanges, Input, Output,
         ViewEncapsulation,   ViewChild, ElementRef, EventEmitter    } from '@angular/core';
import { GridComponent, RowClassArgs, CellClickEvent, SelectionEvent } from '@progress/kendo-angular-grid';
import { of } from 'rxjs/observable/of';
import { DatePipe } from '@angular/common';

import { WorkOrderListService } from './workorderlist.service';
import { IWorkOrderSummary } from '../../workorders/models/IWorkOrderSummary.model';
import { IQueueFocus } from '../queues/queues.component';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);

export interface IWorkOrderFocus {
    workOrderNumber: string;
    userNetworkId: string;
}

@Component({
    // prevent style encapsulation is needed to "see" the kendo k- classes
    encapsulation: ViewEncapsulation.None,
    selector: 'app-workorderlist',
    templateUrl: 'workorderlist.component.html',
    styleUrls: ['workorderlist.component.scss'],
    providers: [WorkOrderListService]
})
export class WorkOrderListComponent implements OnInit, AfterViewInit, OnChanges {
    @ViewChild('listgrid') listGrid: GridComponent;
    @Input() selectedQueueName: string;  // displayed in our View & it is databound to parent html [data]
    @Input() selectedQueueId: number;
    @Input() userNetworkId: string;      // used to fetch new grid data
    @Output() selectedWorkOrder: EventEmitter<IWorkOrderFocus> = new EventEmitter<IWorkOrderFocus>();

    private _dataService;
    private _workOrderInFocus = <IWorkOrderFocus>{};
    public workorderlist = [];
    public errorMessage: string;
    public childDialogOpened: boolean;
    //    public detailsFormClosed = true;

    constructor(workOrderListService: WorkOrderListService) {
        this._dataService = workOrderListService;
    }

    ngOnInit(): void {
        console.log('WorkOrderListComponent: ngOnInit fired: selecting ' + this.selectedQueueId + ' id=' + this.userNetworkId);
    }

    ngAfterViewInit(): void {
        console.log('WorkOrderListComponent: ngAfterViewInit fired');
    }

    ngOnChanges() {
        console.log('WorkOrderListComponent: ngOnChanges: showDetailsForm:' +  this.openDetail);
        console.log('WorkOrderListComponent: ngOnChanges: selectedQueueId: ' + this.selectedQueueId + ' id=' + this.userNetworkId);
        if (this.selectedQueueName) {
         // if queue is defined it means it changed and we need to load a new set of workorders...
            this._dataService.getWorkOrderList(this.userNetworkId, this.selectedQueueId)
                .subscribe(workorderlist => {
                    this.workorderlist = workorderlist;
                    console.log('WorkOrderListComponent: default is 1st row: ' + JSON.stringify(this.workorderlist[0]));
                    this._workOrderInFocus.workOrderNumber = this.workorderlist[0].WorkOrderNumber;
                    this._workOrderInFocus.userNetworkId = this.workorderlist[0].UserNetworkId;
                    this.expandAllRows();
                    if ((workorderlist.length === 1) && (parseInt(workorderlist[0].WorkOrderNumber, 10) === -1)) {
                        console.log('WorkOrderListComponent: dummy (empty) workorder received - empty the list...');
                        this.workorderlist = [];
                        }
                    this.selectedWorkOrder.emit(this._workOrderInFocus);
                },
                    ex => this.errorMessage = <any>ex);
            }
    }

    public childDialogMessage($event) {
        // child component Work Order Details has sent us a message...
        console.log('WorkOrderListComponent: childDialogMessage: ' + JSON.stringify($event));
        this.childDialogOpened = false;
    }

    public openDetail($event): void {
        // double-click on Work Order Listoccured...
        console.log('WorkOrderListComponent: openDetail (dbl-click) $event:' + JSON.stringify($event));
        this.childDialogOpened = true;
    }

    public onRowSelected($event): void {
        // const selectedItem = this.listGrid.data[index];
        console.log ('WorkOrderListComponent: onRowSelected: ' + JSON.stringify(this.workorderlist[$event.index]));
        this._workOrderInFocus.workOrderNumber = this.workorderlist[$event.index].WorkOrderNumber;
        this._workOrderInFocus.userNetworkId = this.workorderlist[$event.index].UserNetworkId;
        this.selectedWorkOrder.emit(this._workOrderInFocus);
    }

    private expandAllRows() {
        for (let i = 0; i < this.workorderlist.length; i++) {
            this.listGrid.expandRow(i);
        }
    }

    public isOverDue = (context: RowClassArgs) => {
        // console.log('WorkOrderListComponent: isOverDue callback row#' + context.index);
        // TO DO: date compare logic goes here
        return 'overdue';  // this is a class definied in the component's scss file
    }

    public onExpand(data, index) {
        console.log('WorkOrderListComponent: onExpand');
      }



}
