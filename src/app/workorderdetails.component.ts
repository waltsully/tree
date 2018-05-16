import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workorderdetails',
  templateUrl: './workorderdetails.component.html',
  styleUrls: ['./workorderdetails.component.scss']
})

export class WorkOrderDetailsComponent implements OnInit {
  @Input() dialogOpened = false;
  public windowOpened = false;
  public windowTitle = 'Work Order Details';

  constructor() {
  }

    public onClose(): void {
      console.log('Dialog Closed');
      this.dialogOpened = false;
    }

    public onCloseForm(): void {
      console.log('Dialog Canceled');
      this.dialogOpened = false;
    }

    public onSaveChanges(): void {
      console.log('Changes Saved');
      this.dialogOpened = false;
    }

    public onOpen(): void {
      console.log('Dialog Opened');
      this.dialogOpened = true;
    }

    public action(status) {
      console.log(`Dialog result: ${status}`);
      this.dialogOpened = false;
    }

    public onDragStart(): void {
        console.log('Drag Start');
    }

    public onDragEnd(): void {
        console.log('Drag End');
    }

    public onResizeStart(): void {
        console.log('Resize Start');
    }

    public onResizeEnd(): void {
        console.log('Resize End');
    }

    public onStateChange(state): void {
        console.log('State Changed to ' + state);
    }

  ngOnInit() {
  }

}
