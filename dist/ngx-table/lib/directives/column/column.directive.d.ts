import { ElementRef, OnInit } from '@angular/core';
import { DataTableRowComponent } from '../../components/row/row.component';
import { CellCallback } from '../../types/cell-callback.type';
import * as i0 from "@angular/core";
export declare class DataTableColumnDirective implements OnInit {
    private styleClassObject;
    header: string;
    sortable: boolean;
    resizable: boolean;
    property: string;
    styleClass: string;
    cellColors: CellCallback;
    width: number | string;
    visible: boolean;
    cellTemplate: ElementRef;
    headerTemplate: ElementRef;
    getCellColor(row: DataTableRowComponent, index: number): string;
    ngOnInit(): void;
    private _initCellClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTableColumnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DataTableColumnDirective, "data-table-column", never, { "header": "header"; "sortable": "sortable"; "resizable": "resizable"; "property": "property"; "styleClass": "styleClass"; "cellColors": "cellColors"; "width": "width"; "visible": "visible"; }, {}, ["cellTemplate", "headerTemplate"]>;
}
//# sourceMappingURL=column.directive.d.ts.map