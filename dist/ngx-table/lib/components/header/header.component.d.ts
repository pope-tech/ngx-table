import { ElementRef } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
export declare class DataTableHeaderComponent {
    dataTable: DataTableComponent;
    private elemRef;
    columnSelectorOpen: boolean;
    constructor(dataTable: DataTableComponent, elemRef: ElementRef);
    onClickHandler(event: any): void;
    onKeyUpHandler(event: any): void;
    onChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDef<DataTableHeaderComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DataTableHeaderComponent, "data-table-header", never, {}, {}, never>;
}
