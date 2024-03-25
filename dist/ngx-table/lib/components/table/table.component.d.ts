import { AfterContentInit, EventEmitter, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { DataTableColumnDirective } from '../../directives/column/column.directive';
import { DataTableRowComponent } from '../row/row.component';
import { DataTableParams } from '../../types/data-table-params.type';
import { RowCallback } from '../../types/row-callback.type';
import { DataTableTranslations } from '../../types/data-table-translations.type';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class DataTableComponent implements DataTableParams, OnInit, AfterContentInit, OnDestroy {
    private _items;
    private _itemCount;
    wrapperClass: any;
    get items(): any[];
    set items(items: any[]);
    get itemCount(): number;
    set itemCount(count: number);
    columns: QueryList<DataTableColumnDirective>;
    rows: QueryList<DataTableRowComponent>;
    paginator: any;
    expandTemplate: TemplateRef<any>;
    title: string;
    showTitle: boolean;
    header: boolean;
    pagination: boolean;
    indexColumn: boolean;
    indexColumnHeader: string;
    rowColors: RowCallback;
    rowTooltip: RowCallback;
    selectColumn: boolean;
    multiSelect: boolean;
    substituteRows: boolean;
    expandableRows: boolean;
    labels: DataTableTranslations;
    selectOnRowClick: boolean;
    autoReload: boolean;
    showReloading: boolean;
    noDataMessage: string;
    pageLimits: number[];
    primaryColumn: string;
    reload: EventEmitter<any>;
    rowClick: EventEmitter<any>;
    rowDoubleClick: EventEmitter<any>;
    headerClick: EventEmitter<any>;
    cellClick: EventEmitter<any>;
    selectedRowsChange: EventEmitter<any>;
    visibleColumnsChange: EventEmitter<any>;
    indexColumnVisible: boolean;
    selectColumnVisible: boolean;
    expandColumnVisible: boolean;
    reloadNotification: string;
    paginationNotification: string;
    sortNotification: string;
    columnSelectorNotification: string;
    _displayParams: DataTableParams;
    subject: Subject<void>;
    subject$: Subscription;
    notifier: Subject<void>;
    notifier$: Subscription;
    selectedRow: DataTableRowComponent;
    selectedRows: DataTableRowComponent[];
    Math: any;
    id: string;
    private _selectAllCheckbox;
    private _resizeInProgress;
    resizeLimit: number;
    _reloading: boolean;
    get reloading(): boolean;
    set reloading(val: boolean);
    private _sortBy;
    get sortBy(): string;
    set sortBy(value: string);
    private _sortAsc;
    get sortAsc(): boolean;
    set sortAsc(value: boolean);
    private _offset;
    get offset(): number;
    set offset(value: number);
    private _limit;
    get limit(): number;
    set limit(value: number);
    get page(): number;
    set page(value: number);
    get lastPage(): number;
    sort(sortBy: string, asc: boolean): void;
    ngOnInit(): void;
    private _initDefaultValues;
    private _initDefaultClickEvents;
    reloadItems(): void;
    private _onReloadFinished;
    get displayParams(): DataTableParams;
    _updateDisplayParams(): void;
    constructor();
    rowClicked(row: DataTableRowComponent, event: Event): void;
    rowDoubleClicked(row: DataTableRowComponent, event: Event): void;
    headerClicked(column: DataTableColumnDirective, event: Event): void;
    private cellClicked;
    private _getRemoteParameters;
    private sortColumn;
    get columnCount(): number;
    getRowColor(item: any, index: number, row: DataTableRowComponent): string;
    get selectAllCheckbox(): boolean;
    set selectAllCheckbox(value: boolean);
    private _onSelectAllChanged;
    onRowSelectChanged(row: DataTableRowComponent): void;
    get substituteItems(): unknown[];
    resizeColumnStart(event: MouseEvent, column: DataTableColumnDirective, columnElement: HTMLElement): void;
    private _isResizeInLimit;
    ngAfterContentInit(): void;
    _notify(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataTableComponent, "data-table", never, { "wrapperClass": "wrapperClass"; "items": "items"; "itemCount": "itemCount"; "title": "title"; "showTitle": "showTitle"; "header": "header"; "pagination": "pagination"; "indexColumn": "indexColumn"; "indexColumnHeader": "indexColumnHeader"; "rowColors": "rowColors"; "rowTooltip": "rowTooltip"; "selectColumn": "selectColumn"; "multiSelect": "multiSelect"; "substituteRows": "substituteRows"; "expandableRows": "expandableRows"; "labels": "labels"; "selectOnRowClick": "selectOnRowClick"; "autoReload": "autoReload"; "showReloading": "showReloading"; "noDataMessage": "noDataMessage"; "pageLimits": "pageLimits"; "primaryColumn": "primaryColumn"; "sortBy": "sortBy"; "sortAsc": "sortAsc"; "offset": "offset"; "limit": "limit"; "page": "page"; }, { "reload": "reload"; "rowClick": "rowClick"; "rowDoubleClick": "rowDoubleClick"; "headerClick": "headerClick"; "cellClick": "cellClick"; "selectedRowsChange": "selectedRowsChange"; "visibleColumnsChange": "visibleColumnsChange"; }, ["expandTemplate", "columns"], never, false, never>;
}
//# sourceMappingURL=table.component.d.ts.map