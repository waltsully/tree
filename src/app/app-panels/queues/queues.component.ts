import { Component,  OnInit, AfterViewInit, ViewEncapsulation,
         ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { QueuesService } from './queues.service';
import { IQueue } from '../../workorders/models/IQueue.model';
import { TreeViewComponent, TreeItem } from '@progress/kendo-angular-treeview';


import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadQueues } from '../../workorders/actions';
// import * as actions from '../../workorders/actions';


const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName); // left over from the demo of placing an icon

export interface IQueueFocus {
    userName: string;
    userNetworkId: string;
    queueId: number;
    itemCount: number;
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

    private dataService;
    private store: Store<State>;
    private queueInFocus = <IQueueFocus>{};
    public queues: IQueue[] = [];
    public showAnimation = true;
    public errorMessage: string;
    public expandedKeys: string[] = ['Assigned Users'];
    public selectedKeys: string[];
    public hasChildren = (item: any) => item.Children && item.Children.length > 0;
    public fetchChildren = (item: any) => of(item.Children);

    constructor(queuesService: QueuesService, store: Store<State>) {
        this.dataService = queuesService;
        this.store = store;
    }

    ngOnInit(): void {
        console.log('QueuesComponent: ngOnInit fired. Waiting for data...');
        this.dataService.getQueues()
            .subscribe(queues => {
                this.queues = queues;
                this.showAnimation = false;
                console.log('QueuesComponent: * * * * * * * * * * HIDING SPINNER');
                console.log('QueuesComponent: data loaded'); // + JSON.stringify(this.queues));
                this.doSelectDefault();
                this.store.dispatch(new LoadQueues());
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
        this.queueInFocus.queueId = (dataItem.NodeId < 7) ? dataItem.NodeId : dataItem.ParentId;
        this.queueInFocus.itemCount = dataItem.Count;
        console.log('QueuesComponent:onSelectionChanged emitting: ' + JSON.stringify(this.queueInFocus));
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
        // TO DO: implement app initialization...
        // once routing implemented we'll use networkId to search queues list & set-up queue in focus
        this.queueInFocus.userName = 'Walter Sully';
        this.queueInFocus.userNetworkId = 'wsully';
        this.queueInFocus.queueId = 7;
        this.queueInFocus.itemCount = 2;

        this.selectedKeys = [this.queueInFocus.userName];
        console.log('selectedKeys=' + this.selectedKeys);
        console.log('****** dataitem: ' + JSON.stringify('?'));
        console.log('QueuesComponent: doSelectDefault emitting: ' + JSON.stringify(this.queueInFocus));
        setTimeout(() => document.querySelector('.k-state-selected').scrollIntoView());
        this.selectedQueue.emit(this.queueInFocus);
    }
}
