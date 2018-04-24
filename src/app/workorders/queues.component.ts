import { Component,  OnInit } from '@angular/core';
import { QueuesService } from './queues.service';
import { IQueue } from './queue';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);

@Component({
    // prevent style encapsulation
    selector: 'app-queues',
    templateUrl: 'queues.component.html',
    styleUrls: ['queues.component.scss'],
    providers: [QueuesService]
})
export class QueuesComponent implements OnInit {
    private _dataService;
    constructor(queuesService: QueuesService) {
        this._dataService = queuesService;
    }
    public selectedKeys: any[] = ['0_2'];
    public expandedKeys: any[] = ['0'];
    public queues: IQueue[] = [];
    public errorMessage: string;


    public iconClass({ text, items }: any): any {
        return {
            'k-i-file-pdf': is(text, 'pdf'),
            'k-i-folder': items !== undefined,
            'k-i-html': is(text, 'html'),
            'k-i-image': is(text, 'jpg|png'),
            'k-icon': true
        };
    }
    ngOnInit(): void {
        console.log('On Init fired from queues component');
        // this.data = this._dataService.getQueues();
        this._dataService.getQueues()
            .subscribe(queues =>
                this.queues = queues,
                ex => this.errorMessage = <any>ex);
    }
}

