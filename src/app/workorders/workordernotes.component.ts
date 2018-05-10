import { Component,  OnInit, AfterViewInit, OnChanges,
         ViewEncapsulation,   ViewChild, ElementRef, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs/observable/of';
import { GridComponent, RowClassArgs, CellClickEvent, SelectionEvent } from '@progress/kendo-angular-grid';

import { WorkOrderNotesService } from './workordernotes.service';
import { IWorkOrderInfo } from './workorderinfo';

@Component({
  selector: 'app-workordernotes',
  templateUrl: './workordernotes.component.html',
  styleUrls: ['./workordernotes.component.scss'],
  providers: [WorkOrderNotesService]
})
export class WorkOrderNotesComponent implements OnInit, OnChanges {
  @ViewChild('notesgrid') notesGrid: GridComponent;
  @Input() userNetworkId: string;
  @Input() selectedWorkOrder: string;

  private _dataService;
  public workordernotes = [];
  public workOrderNumber: string;
  public errorMessage: string;

  constructor(workOrderNotesService: WorkOrderNotesService) {
    this._dataService = workOrderNotesService;
  }

  public onRowSelected({index, dataItem}) {

}

  private expandAllRows() {
    for (let i = 0; i < this.workordernotes.length; i++) {
        this.notesGrid.expandRow(i);
    }
  }
  ngOnInit(): void {
    console.log('WorkOrderNotes: ngOnInit: fired ');
  }

  ngOnChanges(): void {
    console.log('WorkOrderNotes: ngOnChanges: selectedWorkOrder: ' + this.selectedWorkOrder + ' id=' + this.userNetworkId);
    // if (this.networkId = 'NA') { return; }
    // this._dataService.getWorkOrderList(this.focusWorkOrder)
    //     .subscribe(workordernotes => {
    //         this.workordernotes = workordernotes;
    //         this.expandAllRows();
    // },
    //     ex => this.errorMessage = <any>ex);
  }




}
