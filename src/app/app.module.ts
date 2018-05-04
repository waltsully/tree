import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { QueuesComponent } from './workorders/queues.component';
import { WorkOrderListComponent } from './workorders/workorderlist.component';

@NgModule({
    declarations: [
        AppComponent,
        QueuesComponent,
        WorkOrderListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TreeViewModule,
        GridModule,
        ButtonsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
