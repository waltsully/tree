import { Component, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs/observable/of';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);

@Component({
    // prevent style encapsulation
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public selectedKeys: any[] = ['0_2'];
    public expandedKeys: any[] = ['0'];
    public data: any[] = [{
        text: 'Work Orders',
        expanded: true,
        items: [
            { text: 'Unassigned' },
            { text: 'Late' },
            { text: 'Unassigned Testing' },
            { text: 'Deployment' },
            {
                text: 'Assigned Testers',
                items: [
                    { text: 'joe'  },
                    { text: 'pete' },
                    { text: 'mike' }
                ]
            },
            {
                text: 'Assigned Users',
                items: [
                    { text: 'bob' },
                    { text: 'wanda' }
                ]
            },
            {
                text: 'Input Users E-Ins',
                items: [
                    { text: 'fred' },
                    { text: 'larry' },
                    { text: 'moe' }
                ]
            },
            {
                text: 'Input Users ASI',
                items: [
                    { text: 'bob' },
                    { text: 'mary' },
                    { text: 'april' }
                ]
            }
        ]
    }];


    public iconClass({ text, items }: any): any {
        return {
            'k-i-file-pdf': is(text, 'pdf'),
            'k-i-folder': items !== undefined,
            'k-i-html': is(text, 'html'),
            'k-i-image': is(text, 'jpg|png'),
            'k-icon': true
        };
    }
}

