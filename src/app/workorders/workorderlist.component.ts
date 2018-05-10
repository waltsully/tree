import { Component,  OnInit, AfterViewInit, OnChanges, Input, Output,
         ViewEncapsulation,   ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs/observable/of';
import { GridComponent, RowClassArgs, CellClickEvent, SelectionEvent } from '@progress/kendo-angular-grid';

import { WorkOrderListService } from './workorderlist.service';
import { IWorkOrderInfo } from './workorderinfo';
import { IQueueFocus } from './queues.component';

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
    @Input() selectedQueue: string;      // displayed in our View & it is databound to parent html [data]
    @Input() userNetworkId: string;      // used to fetch new grid data
    @Output() selectedWorkOrder: EventEmitter<IWorkOrderFocus> = new EventEmitter<IWorkOrderFocus>();

    private _dataService;
    private _workOrderInFocus = <IWorkOrderFocus>{};
    public workorderlist = [];
    public errorMessage: string;

    constructor(workOrderListService: WorkOrderListService) {
        this._dataService = workOrderListService;
    }

    ngOnInit(): void {
        console.log('WorkOrderListComponent: ngOnInit fired: selecting ' + this.selectedQueue + ' id=' + this.userNetworkId);
    }

    ngAfterViewInit(): void {
        console.log('WorkOrderListComponent: ngAfterViewInit fired');
    }

    ngOnChanges() {
        console.log('WorkOrderListComponent: ngOnChanges: selectedQueue: ' + this.selectedQueue + ' id=' + this.userNetworkId);
        if (this.selectedQueue) {
         // if queue is defined it means it changed and we need to load a new set of workorders...
            this._dataService.getWorkOrderList(this.userNetworkId)
                .subscribe(workorderlist => {
                    this.workorderlist = workorderlist;
                    console.log('WorkOrderListComponent: defualt is 1st row: ' + JSON.stringify(this.workorderlist[0].WorkOrderNumber));
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

    public hideExpansionIndicator(context: RowClassArgs) {
        console.log('WorkOrderListComponent: hideExpansionIndicator for row#' + context.index);
    }

    public onExpand(data, index) {
        console.log('WorkOrderListComponent: onExpand');
      }



}
