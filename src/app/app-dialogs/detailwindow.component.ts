import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-detailwindow',
  templateUrl: './detailwindow.component.html',
  styleUrls: ['./detailwindow.component.scss']
})

export class DetailWindowComponent implements OnInit {
  @Input() workOrderNumber: string;
  @Input() dialogOpened: boolean;
  @Output() childDialogMessage: EventEmitter<string> = new EventEmitter<string>();
  public windowOpened = false;
  public windowTitle = 'Work Order Details ' + this.workOrderNumber;

  constructor() {
  }

  public onTabSelect($event) {
    console.log('onTabSelect: ' + JSON.stringify($event));
  }

    public onClose(): void {
      console.log('Dialog Closed');
      this.dialogOpened = false;
      this.childDialogMessage.emit('Closed');
    }

    public onCancelForm(): void {
      console.log('Dialog Canceled');
      this.dialogOpened = false;
      this.childDialogMessage.emit('Cancelled');
    }

    public onSaveChanges(): void {
      console.log('Changes Saved');
      this.dialogOpened = false;
      this.childDialogMessage.emit('Saved');
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
