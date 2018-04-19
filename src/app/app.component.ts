import { Component, ViewEncapsulation } from '@angular/core';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);

@Component({
    // prevent style encapsulation
    encapsulation: ViewEncapsulation.None,

    selector: 'app-root',
    template: `<button kendoButton (click)="onButtonClick()">Default</button>
    <div>
    <kendo-treeview
        [nodes]="data"
        textField="text"
        kendoTreeViewExpandable

        kendoTreeViewHierarchyBinding
        childrenField="items"
        >

        <ng-template kendoTreeViewNodeTemplate let-dataItem>
               <span [ngClass]="iconClass(dataItem)"></span>
               <span> {{dataItem.text}} </span>
               <span>[44]</span>
        </ng-template>
    </kendo-treeview>
    </div>
  `,
  styles: [
      `div { width: 400px; border: 2px solid blue; }
       span { border: 3px solid green; }
      `
    ]
})
export class AppComponent {
    public data: any[] = [{
        text: 'Work Orders',
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

