import { Component,  OnInit, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs/observable/of';
import { GridComponent, RowClassArgs, CellClickEvent } from '@progress/kendo-angular-grid';

import { WorkOrderListService } from './workorderlist.service';
import { IWorkOrderInfo } from './workorderinfo';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);

@Component({
    // prevent style encapsulation is needed to "see" the kendo k- classes
    encapsulation: ViewEncapsulation.None,
    selector: 'app-workorderlist',
    templateUrl: 'workorderlist.component.html',
    styleUrls: ['workorderlist.component.scss'],
    providers: [WorkOrderListService]
})
export class WorkOrderListComponent implements OnInit, AfterViewInit {

    private _dataService;
    public workorderlist: IWorkOrderInfo[] = [];
    public errorMessage: string;
    @ViewChild('grid') grid: GridComponent;

    constructor(workOrderListService: WorkOrderListService) {
        this._dataService = workOrderListService;
    }

    ngOnInit(): void {
        console.log('On Init fired from workorderlist component');
        this._dataService.getWorkOrderList()
            .subscribe(workorderlist => {
                this.workorderlist = workorderlist;
                this.expandAllRows();
            },
                ex => this.errorMessage = <any>ex);
    }

    ngAfterViewInit(): void {

    }

    expandAllRows() {
        for (let i = 0; i < this.workorderlist.length; i++) {
            this.grid.expandRow(i);
        }
    }

    onExpand(data, index) {
        alert('Expanding');
      }

    public rowEventCallBack(context: RowClassArgs) {
        // const isEven = context.index % 2 === 0;
        // this.grid.expandRow(context.index);
        // return {
        // even: isEven,
        //  odd: !isEven
    }

}
