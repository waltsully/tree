import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SpinnerModule } from 'spinner-angular';

import { AppComponent } from './app.component';
import { QueuesComponent } from './app-panels/queues.component';
import { WorkOrderListComponent } from './app-panels/workorderlist.component';
import { WorkOrderActivityComponent } from './app-panels/workorderactivity.component';
import { WorkOrderDetailsComponent } from './workorders/details-window/workorderdetails.component';
import { NewLineToHtmlBreak } from './utility/nl2br.pipe';


@NgModule({
    declarations: [
        AppComponent,
        QueuesComponent,
        WorkOrderListComponent,
        WorkOrderActivityComponent,
        WorkOrderDetailsComponent,
        NewLineToHtmlBreak
    ],
    imports: [
        // StoreModule.forRoot({message: simpleReducer}),
        BrowserModule,
        FormsModule,
        HttpClientModule,
        DatePipe,        
        BrowserAnimationsModule,
        TreeViewModule,
        GridModule,
        ButtonsModule,
        DropDownsModule,
        DialogsModule,
        LayoutModule,
        SpinnerModule.forRoot({  animation: 'spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'})
    ],
    providers: [DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
