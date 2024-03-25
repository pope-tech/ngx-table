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
    static ɵdir: i0.ɵɵDirectiveDeclaration<DataTableColumnDirective, "data-table-column", never, { "header": { "alias": "header"; "required": false; }; "sortable": { "alias": "sortable"; "required": false; }; "resizable": { "alias": "resizable"; "required": false; }; "property": { "alias": "property"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "cellColors": { "alias": "cellColors"; "required": false; }; "width": { "alias": "width"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, {}, ["cellTemplate", "headerTemplate"], never, false, never>;
}
//# sourceMappingURL=column.directive.d.ts.map