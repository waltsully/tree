import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    // prevent style encapsulation
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})

export class AppComponent {
    public name: string;

    onQueueSelectedItem (nodeData: any): void {
       console.log ('appComponent event "onQueueSelectedItem" received. Data: ' + JSON.stringify(nodeData));
       this.name = nodeData.activeQueue;
    }
}
