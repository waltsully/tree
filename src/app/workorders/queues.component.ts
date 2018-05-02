import { Component,  OnInit, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { QueuesService } from './queues.service';
import { IQueue } from './queue';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName); // left over from the demo of placing an icon

@Component({
    // prevent style encapsulation is needed to "see" the kendo k- classes
    encapsulation: ViewEncapsulation.None,
    selector: 'app-queues',
    templateUrl: 'queues.component.html',
    styleUrls: ['queues.component.scss'],
    providers: [QueuesService]
})
export class QueuesComponent implements OnInit, AfterViewInit {

    @ViewChild('ktree') ktree: ElementRef;

    private _dataService;
    public selectedKeys: any[] = ['0_2'];
    public expandedKeys: any[] = ['0'];
    public userName: string;
    public userId: string;
    public queues: IQueue[] = [];
    public errorMessage: string;
    @Output() selectedNodeChanged: EventEmitter<string> = new EventEmitter<string>();
    constructor(queuesService: QueuesService) {
        this._dataService = queuesService;
    }

    public hasChildren = (item: IQueue) => item.Children && item.Children.length > 0;
    public fetchChildren = (item: IQueue) => of(item.Children);

    // we handle treeview navigation event here...
    public onSelect({ index, dataItem }: any): void {
        this.selectedKeys = [index];                      // debugging
        this.userId = dataItem.UserId;                    // debugging
        this.userName = dataItem.Caption;                 // debugging
        this.selectedNodeChanged.emit(dataItem.Caption);  // propagate to parent container
    }

    public iconClass(node: IQueue): any {
        // this detects those nodes that have children nodes
        if (node.Children.length) {
            return 'hit';
        }
    }

    ngOnInit(): void {
        console.log('On Init fired from queues component');
        this._dataService.getQueues()
            .subscribe(queues =>
                this.queues = queues,
                ex => this.errorMessage = <any>ex);
    }

    ngAfterViewInit(): void {
        // this.ktree.nativeElement.hide();
    }
}
