import { Component,  OnInit, AfterViewInit, OnChanges,
         ViewEncapsulation,   ViewChild, ElementRef, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs/observable/of';
import { GridComponent, RowClassArgs, CellClickEvent, SelectionEvent } from '@progress/kendo-angular-grid';

import { WorkOrderActivityService } from './workorderactivity.service';

@Component({
  selector: 'app-workorderactivity',
  templateUrl: './workorderactivity.component.html',
  styleUrls: ['./workorderactivity.component.scss'],
  providers: [WorkOrderActivityService]
})
export class WorkOrderActivityComponent implements OnInit, OnChanges {
  @ViewChild('activitygrid') activityGrid: GridComponent;
  @Input() userNetworkId: string;
  @Input() selectedWorkOrder: string;

  private _dataService;
  public workorderactivities = [];
  public haveActivities = false;
  public workOrderNumber: string;
  public errorMessage: string;

  constructor(workOrderActivityService: WorkOrderActivityService) {
    this._dataService = workOrderActivityService;
  }

  public onRowSelected({index, dataItem}) {

}

  private expandAllRows() {
    for (let i = 0; i < this.workorderactivities.length; i++) {
        this.activityGrid.expandRow(i);
    }
  }
  ngOnInit(): void {
    console.log('WorkOrderActivity: ngOnInit: fired ');    
  }

  ngOnChanges(): void {
    console.log('WorkOrderActivity: ngOnChanges: selectedWorkOrder: ' + this.selectedWorkOrder + ' id=' + this.userNetworkId);
    // if (this.networkId = 'NA') { return; }
    if (this.selectedWorkOrder) {
    this.haveActivities = true;
    this._dataService.getWorkOrderActivity(this.selectedWorkOrder)
        .subscribe(workorderactivities => {
            this.workorderactivities = workorderactivities;
            this.expandAllRows();
            console.log('WorkOrderActivity: received data: '); //  + JSON.stringify(workorderactivities));
        },
        ex => this.errorMessage = <any>ex);
    }
  }




}
