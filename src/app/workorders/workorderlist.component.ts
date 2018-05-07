import { Component,  OnInit, AfterViewInit, OnChanges,
         ViewEncapsulation,   ViewChild, ElementRef, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs/observable/of';
import { GridComponent, RowClassArgs, CellClickEvent, SelectionEvent } from '@progress/kendo-angular-grid';

import { WorkOrderListService } from './workorderlist.service';
import { IWorkOrderInfo } from './workorderinfo';
import { IQueueInFocus } from './queues.component';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);

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

    @ViewChild('grid') grid: GridComponent;

    // listen for Queue selection - then load grid...
    // LESSON LEARNED: ngChanges was firing only once despite the data binding on an IQueueInFocus Object .userName property,
    // which was getting properly updated and displayed in the view. What happens is passing of ng objects is by reference.
    // Of course, the ref is passed just once causing a one-time firing of ngOnChanges.
    // My inital approach was an IQueueInFocus object containing two string properties "name" & "networkId"
    // the soulution was to just created two @Input strings which do fire ngChanges when updated by parent component.
    @Input() focusQueue: string;  // displayed in our View & it is databound to parent html [data]
    @Input() networkId: string;   // used to fetch new grid data

    constructor(workOrderListService: WorkOrderListService) {
        this._dataService = workOrderListService; }

    ngOnInit(): void {
        console.log('WorkOrderList: ngOnInit fired');
        console.log('WorkOrderList: ngOnInit has focusQueue= ' + this.focusQueue);
    }

    ngAfterViewInit(): void {
        console.log('WorkOrderList: ngAfterViewInit fired');
    }

    ngOnChanges() {
        console.log('WorkOrderList: ngOnChanges fired with focusQueue= ' + this.focusQueue + ' id=' + this.networkId);
       // if (this.networkId = 'NA') { return; }
        this._dataService.getWorkOrderList(this.networkId)
            .subscribe(workorderlist => {
                this.workorderlist = workorderlist;
                this.expandAllRows();
        },
            ex => this.errorMessage = <any>ex);

    }

    private expandAllRows() {
        for (let i = 0; i < this.workorderlist.length; i++) {
            this.grid.expandRow(i);
        }
    }

    public hideExpansionIndicator(context: RowClassArgs) {
        console.log('Grid row#' + context.index);
    }

    public onExpand(data, index) {
        console.log('WorkOrderList: Expand Event!');
      }

    public onRowSelected(selectionEvent: SelectionEvent) {
        const selectedItem = this.grid.data[selectionEvent.index];
        console.log ('WO# selected: ' + selectedItem.WorkOrderNumber);
    }

}
