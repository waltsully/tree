import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { AppComponent } from './app.component';
import { QueuesComponent } from './workorders/queues.component';
import { CounterComponent } from './workorders/counter.component';


@NgModule({
    declarations: [
        AppComponent,
        QueuesComponent,
        CounterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ButtonsModule,
        TreeViewModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
