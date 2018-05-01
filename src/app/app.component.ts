import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    // prevent style encapsulation
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})

export class AppComponent {
    public myCount = 10;
    countChanged(event) {
        this.myCount = event;
    }
}
