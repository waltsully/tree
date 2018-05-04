import { Component,  OnInit, AfterViewInit, ViewEncapsulation, 
         ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { QueuesService } from './queues.service';
import { IQueue } from './queue';
import { TreeViewComponent, TreeItem } from '@progress/kendo-angular-treeview';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName); // left over from the demo of placing an icon

interface NodeSelected {
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
    private _dataService;
    public selectedKeys: any[] = [4];
    public expandedKeys: any[] = [4];
    public userName: string;
    public userId: string;
    public userNetworkId: string;
    public queues: IQueue[] = [];
    public errorMessage: string;

    @ViewChild('ktree') ktree: TreeViewComponent;
    @Output() selectedNodeChanged: EventEmitter<Object> = new EventEmitter<Object>();

    constructor(queuesService: QueuesService) {
        this._dataService = queuesService;
    }

    public hasChildren = (item: IQueue) => item.Children && item.Children.length > 0;
    public fetchChildren = (item: IQueue) => of(item.Children);

    // we handle treeview navigation event here...
    public onSelectionChanged({ index, dataItem }: any): void {
        const payload = <NodeSelected>{};
        console.log('QueuesComponent:onSelectionChanged dataItem: ' + JSON.stringify(dataItem));
        payload.userName = dataItem.Caption;
        payload.userNetworkId = dataItem.UserNetworkId;
        console.log('queuesComponent onSelectionChanged emitting: ' + JSON.stringify(payload));
        // propagate to parent container...
        this.selectedNodeChanged.emit(payload);
    }

    public onSelectedKeysChanged(value: any): void {
        console.log('Queue selection Keys changed to #: ' + this.selectedKeys);
        console.log('value: ' + JSON.stringify(value));
    }

    public iconClass(node: IQueue): any {                           // we can add icons to each node
        // this detects those nodes that have children nodes
        if (node.Children.length) {
            return 'hit';
        }
    }

    doSelectDefault(): void {
        console.log('Queue selecting default node: ?' ); // ??? this.selectedKeys);
        this.selectedKeys = [4];
        this.selectedNodeChanged.emit({});
    }

    ngOnInit(): void {
        console.log('On Init fired from Queues component');
        this._dataService.getQueues()
            .subscribe(queues => {
                this.queues = queues;
                this.doSelectDefault();          // now that data is loaded
            },
                ex => this.errorMessage = <any>ex);
    }

    ngAfterViewInit(): void {
    }
}
