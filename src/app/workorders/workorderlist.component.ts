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

    private _dataService;
    public workorderlist = [];
    public errorMessage: string;
    public foo = 'foo';

    @ViewChild('listgrid') listGrid: GridComponent;

    // fouceQueue is databound from parent container...
    // LESSON LEARNED: ngChanges was firing only once despite the data binding on an IQueueInFocus Object .userName property,
    // which was getting properly updated and displayed in the view. What happens is passing of ng objects is by reference.
    // Of course, the ref is passed just once causing a one-time firing of ngOnChanges when the app started up.
    // My inital approach was an IQueueInFocus object containing two string properties "name" & "networkId"
    // the soulution was to just created two @Input strings which do fire ngChanges when updated by parent component.

    @Input() selectedQueue: string;      // displayed in our View & it is databound to parent html [data]
    @Input() userNetworkId: string;      // used to fetch new grid data
    @Output() selectedWorkOrder: EventEmitter<string> = new EventEmitter<string>();

    constructor(workOrderListService: WorkOrderListService) {
        this._dataService = workOrderListService;
    }

    ngOnInit(): void {
        console.log('WorkOrderList: ngOnInit fired: selecting ' + this.selectedQueue + ' id=' + this.userNetworkId);
        // this.selectedWorkOrder.emit();
    }

    ngAfterViewInit(): void {
        console.log('WorkOrderList: ngAfterViewInit fired');
    }

    ngOnChanges() {
        console.log('WorkOrderList: ngOnChanges fired selecting ' + this.selectedQueue + ' id=' + this.userNetworkId);
       // if (this.networkId = 'NA') { return; }
        this._dataService.getWorkOrderList(this.userNetworkId)
            .subscribe(workorderlist => {
                this.workorderlist = workorderlist;
                this.expandAllRows();
                // this.selectedWorkOrder = this.listGrid.data[1].WorkOrderNumber;
        },
            ex => this.errorMessage = <any>ex);

    }

    public onRowSelected({index, dataItem}: any): void {
        const selectedItem = this.listGrid.data[index];
        console.log ('WorkOrderList:onRowSelected: ' + JSON.stringify(dataItem));
        console.log ('WorkOrderList: WO# selected: ' + dataItem.WorkOrderNumber + ' id:' + dataItem.UserNetworkId);
        this.selectedWorkOrder.emit(dataItem.WorkOrderNumber);
    }

    private expandAllRows() {
        for (let i = 0; i < this.workorderlist.length; i++) {
            this.listGrid.expandRow(i);
        }
    }

    public hideExpansionIndicator(context: RowClassArgs) {
        console.log('WorkOrderList:hideExpansionIndicator row#' + context.index);
    }

    public onExpand(data, index) {
        console.log('WorkOrderList: Expand Event!');
      }



}
