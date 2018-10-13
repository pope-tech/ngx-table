import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// module
import { NgxTableModule } from '@popetech/ngx-table'; 
// demo components
import { DataTableDemo1Component } from './demo1/data-table-demo1';
import { DataTableDemo2Component } from './demo2/data-table-demo2';
import { DataTableDemo3Component } from './demo3/data-table-demo3';
import { DataTableDemo4Component } from './demo4/data-table-demo4';
import { DataTableDemo5Component } from './demo5/data-table-demo5';
import { DataTableDemo6Component } from './demo6/data-table-demo6'; 
// routing
import { DataTableRoutingModule } from './datatable-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxTableModule.forRoot(),
    DataTableRoutingModule
  ],
  declarations: [
    DataTableDemo1Component,
    DataTableDemo2Component,
    DataTableDemo3Component,
    DataTableDemo4Component,
    DataTableDemo5Component,
    DataTableDemo6Component
  ]
})
export class DataTableDemoModule { }
