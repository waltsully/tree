import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { GridModule } from '@progress/kendo-angular-grid';
import { SpinnerModule } from 'spinner-angular';

import { AppComponent } from './app.component';
import { QueuesComponent } from './workorders/queues.component';
import { WorkOrderListComponent } from './workorders/workorderlist.component';
import { WorkOrderActivityComponent } from './workorders/workorderactivity.component';
import { NewLineToHtmlBreak } from './workorders/nl2br';

@NgModule({
    declarations: [
        AppComponent,
        QueuesComponent,
        WorkOrderListComponent,
        WorkOrderActivityComponent,
        NewLineToHtmlBreak
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TreeViewModule,
        GridModule,
        ButtonsModule,
        SpinnerModule.forRoot({  animation: 'spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
