import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './store/reducers';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SpinnerModule } from 'spinner-angular';

import { AppComponent } from './app.component';
import { QueuesComponent } from './app-panels/queues/queues.component';
import { WorkOrderListComponent } from './app-panels/workorder-list/workorderlist.component';
import { WorkOrderActivityComponent } from './app-panels/workorder-activity/workorderactivity.component';
import { DetailWindowComponent } from './app-dialogs/detailwindow.component';
import { TopPanelComponent } from './workorders/forms/workorder-details/top-panel.component';
import { NewLineToHtmlBreak } from './utility/nl2br.pipe';


@NgModule({
    declarations: [
        AppComponent,
        QueuesComponent,
        WorkOrderListComponent,
        WorkOrderActivityComponent,
        DetailWindowComponent,
        TopPanelComponent,
        NewLineToHtmlBreak
    ],
    imports: [        
        BrowserModule,
        FormsModule,
        HttpClientModule,
        // DatePipe,        
        BrowserAnimationsModule,
        TreeViewModule,
        GridModule,
        ButtonsModule,
        DropDownsModule,
        DialogsModule,
        LayoutModule,
        StoreModule,
        StoreDevtoolsModule,
        StoreModule.forRoot(reducer),
            StoreDevtoolsModule.instrument({
            maxAge: 10
            }),
        SpinnerModule.forRoot({  animation: 'spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'})
    ],
    providers: [DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
