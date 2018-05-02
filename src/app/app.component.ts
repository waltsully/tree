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

    onQueueSelectedItem (data: string): void {
       console.log ('onQueueSelectedItem: ' + data);
       this.name = data;
    }
}
