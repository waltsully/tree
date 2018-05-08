import { Component,  OnInit, AfterViewInit, OnChanges,
  ViewEncapsulation,   ViewChild, ElementRef, Input } from '@angular/core';
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

  private _dataService;
  public workordernotes = [];
  public errorMessage: string;

  @ViewChild('notesgrid') notesGrid: GridComponent;
  @Input() selectedWorkOrder: string;
  @Input() userNetworkId: string;

  constructor(workOrderNotesService: WorkOrderNotesService) {
    this._dataService = workOrderNotesService;
  }

    ngOnInit(): void {
      console.log('WorkOrderNotes: ngOnInit fired with workOrderNumber= ' + this.selectedWorkOrder);
    }

    ngOnChanges(): void {
      console.log('WorkOrderNotes: ngOnChanges fired with workOrderNumber= ' + this.selectedWorkOrder + ' id=' + this.userNetworkId);
     // if (this.networkId = 'NA') { return; }
      // this._dataService.getWorkOrderList(this.focusWorkOrder)
      //     .subscribe(workordernotes => {
      //         this.workordernotes = workordernotes;
      //         this.expandAllRows();
      // },
      //     ex => this.errorMessage = <any>ex);
    }

    private expandAllRows() {
      for (let i = 0; i < this.workordernotes.length; i++) {
          this.notesGrid.expandRow(i);
      }
    }

    public onRowSelected({index, dataItem}) {
      const selectedItem = this.notesGrid.data[index];
      console.log ('workOrderNotes: selected index= ' + index); // + dataItem.WorkOrderNumber);
  }
}
