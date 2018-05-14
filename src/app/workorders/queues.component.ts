import { Component,  OnInit, AfterViewInit, ViewEncapsulation, 
         ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { QueuesService } from './queues.service';
import { IQueue } from './queue';
import { TreeViewComponent, TreeItem } from '@progress/kendo-angular-treeview';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName); // left over from the demo of placing an icon

export interface IQueueFocus {
    userName: string;
    userNetworkId: string;
}

@Component({
    // prevent style encapsulation is needed to "see" the kendo k- classes
    encapsulation: ViewEncapsulation.None,
    selector: 'app-queues',
    templateUrl: 'queues.component.html',
    styleUrls: ['queues.component.scss'],
    providers: [QueuesService]
})

export class QueuesComponent implements OnInit, AfterViewInit {
    @ViewChild('ktree') ktree: TreeViewComponent;
    @Output() selectedQueue: EventEmitter<IQueueFocus> = new EventEmitter<IQueueFocus>( );

    private _dataService;
    private queueInFocus = <IQueueFocus>{};
    public queues: IQueue[] = [];
    public showAnimation = true;
    public errorMessage: string;
    public expandedKeys: string[] = ['Assigned Users'];
    public selectedKeys: string[];
    public hasChildren = (item: any) => item.Children && item.Children.length > 0;
    public fetchChildren = (item: any) => of(item.Children);

    constructor(queuesService: QueuesService) {
        this._dataService = queuesService;
    }

    ngOnInit(): void {
        console.log('QueuesComponent: ngOnInit fired. Waiting for data...');
        this._dataService.getQueues()
            .subscribe(queues => {
                this.queues = queues;
                this.showAnimation = false;
                console.log('QueuesComponent: * * * * * * * * * * HIDING SPINNER');
                console.log('QueuesComponent: service returned data=' + JSON.stringify(this.queues));
                this.doSelectDefault();
            },
                ex => this.errorMessage = <any>ex);
    }

    ngAfterViewInit(): void {
        console.log('QueuesComponent: ngAfterViewInit fired.');
    }

    // we handle treeview navigation event here...

    public onRowSelected({index, dataItem}: any): void {
        console.log('QueuesComponent:onSelectionChanged: index=' + index ); // + 'dataItem: ' + JSON.stringify(dataItem));
        // NOTE: dataItem will contain all the children nodes for a click on top-level node
        this.queueInFocus.userName = dataItem.Caption;
        this.queueInFocus.userNetworkId = dataItem.UserNetworkId;
        // console.log('Queues component:onSelectionChanged emitting: ' + JSON.stringify(this.queueInFocus));
        // propagate to parent container...
        this.selectedQueue.emit(this.queueInFocus);
    }

    public iconClass(node: IQueue): any {                           // we can add icons to each node
        // this detects those nodes that have children nodes
        if (node.Children.length) {
            return 'hit';
        }
    }

    doSelectDefault(): void {
        this.queueInFocus.userName = 'Walter Sully';
        this.queueInFocus.userNetworkId = 'wsully';
        // TO DO: search this.queues userNetworkId using given if to get userName to set selectedKeys
        this.selectedKeys = [this.queueInFocus.userName];
        console.log('selectedKeys=' + this.selectedKeys);
        console.log('QueuesComponent: doSelectDefault emitting: ' + JSON.stringify(this.queueInFocus));
        setTimeout(() => document.querySelector('.k-state-selected').scrollIntoView());
        this.selectedQueue.emit(this.queueInFocus);
    }
}
