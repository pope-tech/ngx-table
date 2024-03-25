import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output, ViewChild, ViewChildren } from '@angular/core';
import { DataTableColumnDirective } from '../../directives/column/column.directive';
import { DataTableRowComponent } from '../row/row.component';
import { defaultTranslations } from '../../types/default-translations.type';
import { drag } from '../../utils/drag';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DataTablePaginationComponent } from "../pagination/pagination.component";
import * as i0 from "@angular/core";
const _c0 = ["dataTableExpand"];
const _c1 = a0 => ({ column: a0 });
const _c2 = (a0, a1) => ({ "fa-sort-asc": a0, "fa-sort-desc": a1 });
function DataTableComponent_data_table_header_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-header");
} }
function DataTableComponent_th_19_button_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 26);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const column_r2 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "col-" + ctx_r2.id + "-" + i_r5)("textContent", column_r2.header);
} }
function DataTableComponent_th_19_button_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const column_r2 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "col-" + ctx_r2.id + "-" + i_r5)("ngTemplateOutlet", column_r2.headerTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c1, column_r2));
} }
function DataTableComponent_th_19_button_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵelement(1, "i", 29)(2, "i", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", column_r2.property === ctx_r2.sortBy);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", column_r2.property !== ctx_r2.sortBy)("ngClass", i0.ɵɵpureFunction2(3, _c2, ctx_r2.sortAsc, !ctx_r2.sortAsc));
} }
function DataTableComponent_th_19_button_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("mousedown", function DataTableComponent_th_19_button_3_span_4_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r6); const column_r2 = i0.ɵɵnextContext(2).$implicit; const th_r7 = i0.ɵɵreference(1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.resizeColumnStart($event, column_r2, th_r7)); });
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_19_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function DataTableComponent_th_19_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1); const column_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.headerClicked(column_r2, $event)); });
    i0.ɵɵtemplate(1, DataTableComponent_th_19_button_3_span_1_Template, 1, 2, "span", 22)(2, DataTableComponent_th_19_button_3_span_2_Template, 1, 5, "span", 23)(3, DataTableComponent_th_19_button_3_span_3_Template, 3, 6, "span", 24)(4, DataTableComponent_th_19_button_3_span_4_Template, 1, 0, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const column_r2 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r2.itemCount === 0)("title", !ctx_r2.sortAsc ? ctx_r2.labels.sortAscending : ctx_r2.labels.sortDescending);
    i0.ɵɵattribute("aria-controls", column_r2.sortable ? ctx_r2.id : null)("aria-labelledby", "col-" + ctx_r2.id + "-" + i_r5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !column_r2.headerTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r2.headerTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r2.sortable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r2.resizable);
} }
function DataTableComponent_th_19_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("textContent", column_r2.header);
} }
function DataTableComponent_th_19_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 34);
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", column_r2.headerTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, column_r2));
} }
function DataTableComponent_th_19_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵelement(1, "i", 29)(2, "i", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", column_r2.property === ctx_r2.sortBy);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", column_r2.property !== ctx_r2.sortBy)("ngClass", i0.ɵɵpureFunction2(3, _c2, ctx_r2.sortAsc, !ctx_r2.sortAsc));
} }
function DataTableComponent_th_19_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("mousedown", function DataTableComponent_th_19_span_4_span_4_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r8); const column_r2 = i0.ɵɵnextContext(2).$implicit; const th_r7 = i0.ɵɵreference(1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.resizeColumnStart($event, column_r2, th_r7)); });
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_19_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, DataTableComponent_th_19_span_4_span_1_Template, 1, 1, "span", 32)(2, DataTableComponent_th_19_span_4_span_2_Template, 1, 4, "span", 33)(3, DataTableComponent_th_19_span_4_span_3_Template, 3, 6, "span", 24)(4, DataTableComponent_th_19_span_4_span_4_Template, 1, 0, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !column_r2.headerTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r2.headerTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r2.sortable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r2.resizable);
} }
function DataTableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19, 0);
    i0.ɵɵpipe(2, "px");
    i0.ɵɵtemplate(3, DataTableComponent_th_19_button_3_Template, 5, 8, "button", 20)(4, DataTableComponent_th_19_span_4_Template, 5, 4, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", i0.ɵɵpipeBind1(2, 11, column_r2.width));
    i0.ɵɵclassProp("sortable", column_r2.sortable)("resizable", column_r2.resizable);
    i0.ɵɵproperty("hide", !column_r2.visible)("ngClass", column_r2.styleClassObject);
    i0.ɵɵattribute("aria-sort", column_r2.sortable ? column_r2.property === ctx_r2.sortBy ? ctx_r2.sortAsc ? "ascending" : "descending" : "none" : null);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", column_r2.sortable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !column_r2.sortable);
} }
function DataTableComponent_tbody_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 35, 1);
    i0.ɵɵlistener("selectedChange", function DataTableComponent_tbody_20_Template_tbody_selectedChange_0_listener() { i0.ɵɵrestoreView(_r9); const row_r10 = i0.ɵɵreference(1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onRowSelectChanged(row_r10)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    i0.ɵɵproperty("item", item_r11)("index", index_r12);
} }
function DataTableComponent_tbody_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody")(1, "tr")(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("colspan", ctx_r2.columnCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.noDataMessage);
} }
function DataTableComponent_tbody_22_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 39);
} if (rf & 2) {
    const column_r13 = ctx.$implicit;
    i0.ɵɵproperty("hide", !column_r13.visible);
} }
function DataTableComponent_tbody_22_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 38);
    i0.ɵɵelement(1, "td", 39);
    i0.ɵɵelementStart(2, "td", 39);
    i0.ɵɵtext(3, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "td", 39);
    i0.ɵɵtemplate(5, DataTableComponent_tbody_22_tr_1_td_5_Template, 1, 1, "td", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r14 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("row-odd", (index_r14 + ctx_r2.items.length) % 2 === 0)("row-even", (index_r14 + ctx_r2.items.length) % 2 === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", !ctx_r2.expandColumnVisible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", !ctx_r2.indexColumnVisible);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hide", !ctx_r2.selectColumnVisible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.columns);
} }
function DataTableComponent_tbody_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 36);
    i0.ɵɵtemplate(1, DataTableComponent_tbody_22_tr_1_Template, 6, 8, "tr", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.substituteItems);
} }
function DataTableComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "i");
    i0.ɵɵelement(2, "i", 42);
    i0.ɵɵelementEnd()();
} }
function DataTableComponent_data_table_pagination_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-pagination", 43);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("limits", ctx_r2.pageLimits);
} }
let nextId = 0;
export class DataTableComponent {
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
        // no need to call notifier.next() because _onReloadFinished()
        // will change reloaded value causing notifier.next() to be called implicitly.
        this._onReloadFinished();
    }
    get itemCount() {
        return this._itemCount;
    }
    set itemCount(count) {
        this._itemCount = count;
        this.notifier.next();
    }
    get reloading() {
        return this._reloading;
    }
    set reloading(val) {
        this._reloading = val;
        this.notifier.next();
    }
    get sortBy() {
        return this._sortBy;
    }
    set sortBy(value) {
        this._sortBy = value;
        this.subject.next();
    }
    get sortAsc() {
        return this._sortAsc;
    }
    set sortAsc(value) {
        this._sortAsc = value;
        this.subject.next();
    }
    get offset() {
        return this._offset;
    }
    set offset(value) {
        this._offset = value;
        this.subject.next();
    }
    get limit() {
        return this._limit;
    }
    set limit(value) {
        this._limit = value;
        this.subject.next();
    }
    // calculated property:
    get page() {
        return this.itemCount !== 0 ? Math.floor(this.offset / this.limit) + 1 : 0;
    }
    set page(value) {
        this.offset = (value - 1) * this.limit;
    }
    get lastPage() {
        return Math.ceil(this.itemCount / this.limit);
    }
    // setting multiple observable properties simultaneously
    sort(sortBy, asc) {
        this.sortBy = sortBy;
        this.sortAsc = asc;
    }
    // init
    ngOnInit() {
        this._initDefaultValues();
        this._initDefaultClickEvents();
        this._updateDisplayParams();
        if (this.pageLimits.indexOf(this.limit) < 0) {
            this.limit = this.pageLimits[0];
        }
        this.labels = { ...defaultTranslations, ...this.labels };
        if (this.autoReload) {
            this.reloadItems();
        }
        this.notifier$ = this.notifier.subscribe(() => this._notify());
        this.subject$ = this.subject.pipe(debounceTime(100)).subscribe(() => this.reloadItems());
    }
    _initDefaultValues() {
        this.indexColumnVisible = this.indexColumn;
        this.selectColumnVisible = this.selectColumn;
        this.expandColumnVisible = this.expandableRows;
    }
    _initDefaultClickEvents() {
        this.headerClick.subscribe((tableEvent) => this.sortColumn(tableEvent.column));
        if (this.selectOnRowClick) {
            this.rowClick.subscribe((tableEvent) => tableEvent.row.selected = !tableEvent.row.selected);
        }
    }
    reloadItems() {
        this.reloading = true;
        this.reload.emit(this._getRemoteParameters());
    }
    _onReloadFinished() {
        if (this.reloading) {
            this._updateDisplayParams();
            this._selectAllCheckbox = false;
            this.reloading = false;
        }
    }
    get displayParams() {
        return this._displayParams;
    }
    _updateDisplayParams() {
        this._displayParams = {
            sortBy: this.sortBy,
            sortAsc: this.sortAsc,
            offset: this.offset,
            limit: this.limit
        };
    }
    constructor() {
        this._items = [];
        // One-time optional bindings with default values:
        this.title = '';
        this.showTitle = true;
        this.header = true;
        this.pagination = true;
        this.indexColumn = true;
        this.indexColumnHeader = '';
        this.selectColumn = false;
        this.multiSelect = true;
        this.substituteRows = true;
        this.expandableRows = false;
        this.selectOnRowClick = false;
        this.autoReload = true;
        this.showReloading = false;
        this.pageLimits = [10, 25, 50, 100, 250];
        this.primaryColumn = '';
        // reload emitter
        this.reload = new EventEmitter();
        // event handlers:
        this.rowClick = new EventEmitter();
        this.rowDoubleClick = new EventEmitter();
        this.headerClick = new EventEmitter();
        this.cellClick = new EventEmitter();
        this.selectedRowsChange = new EventEmitter();
        this.visibleColumnsChange = new EventEmitter();
        this._displayParams = {}; // params of the last finished reload
        this.subject = new Subject();
        this.notifier = new Subject();
        this.selectedRows = [];
        this.id = `datatable-${nextId++}`;
        // select all checkbox flag
        this._selectAllCheckbox = false;
        // column resizing:
        this._resizeInProgress = false;
        this.resizeLimit = 30;
        // Reloading:
        this._reloading = false;
        this._sortAsc = true;
        this._offset = 0;
        this._limit = 10;
    }
    rowClicked(row, event) {
        this.rowClick.emit({ row, event });
    }
    rowDoubleClicked(row, event) {
        this.rowDoubleClick.emit({ row, event });
    }
    headerClicked(column, event) {
        if (!this._resizeInProgress) {
            event.preventDefault();
            event.stopPropagation();
            this.headerClick.emit({ column, event });
        }
        else {
            this._resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
        }
    }
    cellClicked(column, row, event) {
        this.cellClick.emit({ row, column, event });
    }
    // functions:
    _getRemoteParameters() {
        const params = {};
        if (this.sortBy) {
            params.sortBy = this.sortBy;
            params.sortAsc = this.sortAsc;
        }
        if (this.pagination) {
            params.offset = this.offset;
            params.limit = this.limit;
        }
        return params;
    }
    sortColumn(column) {
        if (column.sortable) {
            const ascending = this.sortBy === column.property ? !this.sortAsc : true;
            if (column.property === this.sortBy && !this.sortAsc) {
                this.sort(undefined, true);
                return;
            }
            this.sort(column.property, ascending);
        }
    }
    get columnCount() {
        let count = 0;
        count += this.indexColumnVisible ? 1 : 0;
        count += this.selectColumnVisible ? 1 : 0;
        count += this.expandColumnVisible ? 1 : 0;
        this.columns.toArray().forEach(column => {
            count += column.visible ? 1 : 0;
        });
        return count;
    }
    getRowColor(item, index, row) {
        if (this.rowColors !== undefined) {
            return this.rowColors(item, row, index);
        }
    }
    get selectAllCheckbox() {
        return this._selectAllCheckbox;
    }
    set selectAllCheckbox(value) {
        this._selectAllCheckbox = value;
        this._onSelectAllChanged(value);
    }
    _onSelectAllChanged(value) {
        this.rows.toArray().forEach(row => row.selected = value);
        this.selectedRowsChange.emit(this.selectedRows);
    }
    onRowSelectChanged(row) {
        // maintain the selectedRow(s) view
        if (this.multiSelect) {
            const index = this.selectedRows.indexOf(row);
            if (row.selected && index < 0) {
                this.selectedRows.push(row);
            }
            else if (!row.selected && index >= 0) {
                this.selectedRows.splice(index, 1);
            }
        }
        else {
            if (row.selected) {
                this.selectedRow = row;
            }
            else if (this.selectedRow === row) {
                delete this.selectedRow;
            }
        }
        // unselect all other rows:
        if (row.selected && !this.multiSelect) {
            this.rows.toArray().filter(row_ => row_.selected).forEach(row_ => {
                if (row_ !== row) { // avoid endless loop
                    row_.selected = false;
                }
            });
        }
        this.selectedRowsChange.emit(this.selectedRows);
    }
    // other:
    get substituteItems() {
        return Array.from({ length: this.displayParams.limit - this.items.length });
    }
    resizeColumnStart(event, column, columnElement) {
        this._resizeInProgress = true;
        let startOffset = columnElement.offsetWidth - event.pageX;
        drag(event, {
            move: (moveEvent, dx) => {
                if (this._isResizeInLimit(columnElement, dx)) {
                    column.width = startOffset + moveEvent.pageX + dx;
                }
            },
        });
    }
    _isResizeInLimit(columnElement, dx) {
        /* This is needed because CSS min-width didn't work on table-layout: fixed.
             Without the limits, resizing can make the next column disappear completely,
             and even increase the table width. The current implementation suffers from the fact,
             that offsetWidth sometimes contains out-of-date values. */
        if ((dx < 0 && (columnElement.offsetWidth + dx) <= this.resizeLimit) ||
            !columnElement.nextElementSibling || // resizing doesn't make sense for the last visible column
            (dx >= 0 && (columnElement.nextElementSibling.offsetWidth + dx) <= this.resizeLimit)) {
            return false;
        }
        return true;
    }
    ngAfterContentInit() {
        if (this.primaryColumn === '') {
            this.primaryColumn = this.columns.first.property;
        }
    }
    _notify() {
        const loading = this.reloading;
        this.reloadNotification = loading ?
            this.labels.loadingText.replace('{title}', this.title) :
            this.labels.loadedText.replace('{title}', this.title);
        if (!loading) {
            if (this.pagination) {
                this.paginationNotification = this.labels.paginationText
                    .replace('{from}', '' + (Math.ceil(this.itemCount / this.limit) !== 0 ? this.offset + 1 : '0'))
                    .replace('{to}', '' + (Math.min(this.offset + this.limit, this.itemCount)))
                    .replace('{total}', '' + this.itemCount);
            }
            else {
                this.paginationNotification = '';
            }
            if (this.columns !== undefined && this.sortBy !== undefined) {
                const col = this.columns.toArray().find(column => column.property === this.sortBy);
                this.sortNotification = (this.sortAsc ? this.labels.sortedAscending : this.labels.sortedDescending)
                    .replace('{title}', this.title)
                    .replace('{header}', col.header);
            }
            else {
                this.sortNotification = '';
            }
        }
    }
    ngOnDestroy() {
        this.subject$.unsubscribe();
        this.notifier$.unsubscribe();
    }
    static { this.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableComponent, selectors: [["data-table"]], contentQueries: function DataTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 7);
            i0.ɵɵcontentQuery(dirIndex, DataTableColumnDirective, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.expandTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columns = _t);
        } }, viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(DataTablePaginationComponent, 5);
            i0.ɵɵviewQuery(DataTableRowComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rows = _t);
        } }, inputs: { wrapperClass: "wrapperClass", items: "items", itemCount: "itemCount", title: "title", showTitle: "showTitle", header: "header", pagination: "pagination", indexColumn: "indexColumn", indexColumnHeader: "indexColumnHeader", rowColors: "rowColors", rowTooltip: "rowTooltip", selectColumn: "selectColumn", multiSelect: "multiSelect", substituteRows: "substituteRows", expandableRows: "expandableRows", labels: "labels", selectOnRowClick: "selectOnRowClick", autoReload: "autoReload", showReloading: "showReloading", noDataMessage: "noDataMessage", pageLimits: "pageLimits", primaryColumn: "primaryColumn", sortBy: "sortBy", sortAsc: "sortAsc", offset: "offset", limit: "limit", page: "page" }, outputs: { reload: "reload", rowClick: "rowClick", rowDoubleClick: "rowDoubleClick", headerClick: "headerClick", cellClick: "cellClick", selectedRowsChange: "selectedRowsChange", visibleColumnsChange: "visibleColumnsChange" }, decls: 25, vars: 26, consts: [["th", ""], ["row", ""], [1, "data-table-wrapper"], ["role", "status", "aria-live", "polite", "aria-atomic", "false", "aria-relevant", "text", 1, "sr-only"], [3, "textContent"], [4, "ngIf"], [1, "data-table-box"], ["tabindex", "-1", 1, "table", "data-table", 3, "id"], [1, "sr-only", 3, "textContent"], [1, "expand-column-header", 3, "hide"], ["scope", "col", 1, "index-column-header", 3, "hide"], [1, "select-column-header", 3, "hide"], [1, "sr-only", 3, "for"], ["type", "checkbox", 3, "ngModelChange", "id", "hide", "ngModel", "disabled", "title"], ["scope", "col", "class", "column-header", 3, "hide", "sortable", "resizable", "ngClass", "width", 4, "ngFor", "ngForOf"], ["class", "data-table-row-wrapper", "dataTableRow", "", 3, "item", "index", "selectedChange", 4, "ngFor", "ngForOf"], ["class", "substitute-rows", 4, "ngIf"], ["class", "busy", 4, "ngIf"], [3, "limits", 4, "ngIf"], ["scope", "col", 1, "column-header", 3, "hide", "ngClass"], [3, "disabled", "title", "click", 4, "ngIf"], [3, "click", "disabled", "title"], [3, "id", "textContent", 4, "ngIf"], [3, "id", "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "column-sort-icon", 4, "ngIf"], ["class", "column-resize-handle", 3, "mousedown", 4, "ngIf"], [3, "id", "textContent"], [3, "id", "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-sort-icon"], ["aria-hidden", "true", 1, "fa", "fa-sort", "column-sortable-icon", 3, "hide"], ["aria-hidden", "true", 1, "fa", 3, "hide", "ngClass"], [1, "column-resize-handle", 3, "mousedown"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["dataTableRow", "", 1, "data-table-row-wrapper", 3, "selectedChange", "item", "index"], [1, "substitute-rows"], ["role", "presentation", 3, "row-odd", "row-even", 4, "ngFor", "ngForOf"], ["role", "presentation"], [3, "hide"], [3, "hide", 4, "ngFor", "ngForOf"], [1, "busy"], [1, "fa", "fa-spin", "fa-cog", "fa-2x"], [3, "limits"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "span", 3);
            i0.ɵɵelement(2, "span", 4)(3, "span", 4)(4, "span", 4)(5, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, DataTableComponent_data_table_header_6_Template, 1, 0, "data-table-header", 5);
            i0.ɵɵelementStart(7, "div", 6)(8, "table", 7);
            i0.ɵɵelement(9, "caption", 8);
            i0.ɵɵelementStart(10, "thead")(11, "tr");
            i0.ɵɵelement(12, "td", 9);
            i0.ɵɵelementStart(13, "th", 10);
            i0.ɵɵelement(14, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "td", 11)(16, "label", 12);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "input", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function DataTableComponent_Template_input_ngModelChange_18_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectAllCheckbox, $event) || (ctx.selectAllCheckbox = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(19, DataTableComponent_th_19_Template, 5, 13, "th", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(20, DataTableComponent_tbody_20_Template, 2, 2, "tbody", 15)(21, DataTableComponent_tbody_21_Template, 4, 2, "tbody", 5)(22, DataTableComponent_tbody_22_Template, 2, 1, "tbody", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, DataTableComponent_div_23_Template, 3, 0, "div", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(24, DataTableComponent_data_table_pagination_24_Template, 1, 1, "data-table-pagination", 18);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("textContent", ctx.reloadNotification);
            i0.ɵɵadvance();
            i0.ɵɵproperty("textContent", ctx.paginationNotification);
            i0.ɵɵadvance();
            i0.ɵɵproperty("textContent", ctx.sortNotification);
            i0.ɵɵadvance();
            i0.ɵɵproperty("textContent", ctx.columnSelectorNotification);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.header);
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.wrapperClass);
            i0.ɵɵadvance();
            i0.ɵɵproperty("id", ctx.id);
            i0.ɵɵadvance();
            i0.ɵɵproperty("textContent", ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("hide", !ctx.expandColumnVisible);
            i0.ɵɵadvance();
            i0.ɵɵproperty("hide", !ctx.indexColumnVisible);
            i0.ɵɵadvance();
            i0.ɵɵproperty("textContent", ctx.indexColumnHeader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("hide", !ctx.selectColumnVisible);
            i0.ɵɵadvance();
            i0.ɵɵproperty("for", ctx.id + "-select-all-column");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.labels.selectAllRows, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("id", ctx.id + "-select-all-column")("hide", !ctx.multiSelect);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectAllCheckbox);
            i0.ɵɵproperty("disabled", ctx.itemCount === 0)("title", ctx.labels.selectAllRows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.columns);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.items);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.itemCount === 0 && ctx.noDataMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pagination && ctx.substituteRows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showReloading && ctx.reloading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pagination);
        } }, styles: ["[_nghost-%COMP%]     .data-table.table>tbody+tbody{border-top:none}[_nghost-%COMP%]     .data-table.table td{vertical-align:middle}[_nghost-%COMP%]     .data-table>thead>tr>th, [_nghost-%COMP%]     .data-table>tbody>tr>td{overflow:hidden}[_nghost-%COMP%]     .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}[_nghost-%COMP%]     .row-odd{background-color:#f6f6f6}.data-table[_ngcontent-%COMP%]   .substitute-rows[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]     .data-table .data-table-row:hover{background-color:#ececec}.data-table[_ngcontent-%COMP%]{box-shadow:0 0 15px #ececec}.column-header[_ngcontent-%COMP%]{position:relative}.expand-column-header[_ngcontent-%COMP%]{width:50px}.select-column-header[_ngcontent-%COMP%]{width:50px;text-align:center}.index-column-header[_ngcontent-%COMP%]{width:40px}.column-header.sortable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-left:8px}.column-header.resizable[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-right:8px}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]   .column-sortable-icon[_ngcontent-%COMP%]{color:#d3d3d3}.column-header[_ngcontent-%COMP%]   .column-resize-handle[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box[_ngcontent-%COMP%]{position:relative}.busy[_ngcontent-%COMP%]{position:absolute;z-index:1;inset:0;background-color:#00000040}.busy[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableComponent, [{
        type: Component,
        args: [{ selector: 'data-table', template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    <span [textContent]=\"reloadNotification\"></span>\n    <span [textContent]=\"paginationNotification\"></span>\n    <span [textContent]=\"sortNotification\"></span>\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\" [class]=\"wrapperClass\">\n    <table class=\"table data-table\" [id]=\"id\" tabindex=\"-1\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <td [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <label [for]=\"id + '-select-all-column'\" class=\"sr-only\">\n            {{ labels.selectAllRows }}\n          </label>\n          <input\n            [id]=\"id + '-select-all-column'\"\n            [hide]=\"!multiSelect\"\n                 type=\"checkbox\"\n                 [(ngModel)]=\"selectAllCheckbox\"\n                 [disabled]=\"itemCount === 0\"\n                 [title]=\"labels.selectAllRows\"/>\n        </td>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\"\n                  [title]=\"!sortAsc ? labels.sortAscending : labels.sortDescending\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [id]=\"'col-'+id+'-'+i\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                aria-hidden=\"true\"></i>\n              <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n", styles: [":host ::ng-deep .data-table.table>tbody+tbody{border-top:none}:host ::ng-deep .data-table.table td{vertical-align:middle}:host ::ng-deep .data-table>thead>tr>th,:host ::ng-deep .data-table>tbody>tr>td{overflow:hidden}:host ::ng-deep .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host ::ng-deep .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host ::ng-deep .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;inset:0;background-color:#00000040}.busy>i{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}\n"] }]
    }], () => [], { wrapperClass: [{
            type: Input
        }], items: [{
            type: Input
        }], itemCount: [{
            type: Input
        }], columns: [{
            type: ContentChildren,
            args: [DataTableColumnDirective]
        }], rows: [{
            type: ViewChildren,
            args: [DataTableRowComponent]
        }], paginator: [{
            type: ViewChild,
            args: [DataTablePaginationComponent, { static: false }]
        }], expandTemplate: [{
            type: ContentChild,
            args: ['dataTableExpand', { static: true }]
        }], title: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], header: [{
            type: Input
        }], pagination: [{
            type: Input
        }], indexColumn: [{
            type: Input
        }], indexColumnHeader: [{
            type: Input
        }], rowColors: [{
            type: Input
        }], rowTooltip: [{
            type: Input
        }], selectColumn: [{
            type: Input
        }], multiSelect: [{
            type: Input
        }], substituteRows: [{
            type: Input
        }], expandableRows: [{
            type: Input
        }], labels: [{
            type: Input
        }], selectOnRowClick: [{
            type: Input
        }], autoReload: [{
            type: Input
        }], showReloading: [{
            type: Input
        }], noDataMessage: [{
            type: Input
        }], pageLimits: [{
            type: Input
        }], primaryColumn: [{
            type: Input
        }], reload: [{
            type: Output
        }], rowClick: [{
            type: Output
        }], rowDoubleClick: [{
            type: Output
        }], headerClick: [{
            type: Output
        }], cellClick: [{
            type: Output
        }], selectedRowsChange: [{
            type: Output
        }], visibleColumnsChange: [{
            type: Output
        }], sortBy: [{
            type: Input
        }], sortAsc: [{
            type: Input
        }], offset: [{
            type: Input
        }], limit: [{
            type: Input
        }], page: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataTableComponent, { className: "DataTableComponent", filePath: "lib/components/table/table.component.ts", lineNumber: 36 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTyxTQUFTLEVBQ3RCLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsWUFBWSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7OztJQ2xCaEYsb0NBQXNEOzs7SUFvQzVDLDJCQUMyQzs7Ozs7O0lBQXJDLEFBRCtCLG9EQUFzQixpQ0FDeEI7OztJQUNuQywyQkFDMEQ7Ozs7OztJQUFwRCxBQURxRCxBQUF2QixvREFBc0IsOENBQTJDLGtFQUNuRDs7O0lBQ2xELGdDQUF1RDtJQUdyRCxBQUZBLHdCQUN5QixZQUUrRDtJQUMxRixpQkFBTzs7OztJQUpGLGNBQW1DO0lBQW5DLDJEQUFtQztJQUVuQyxjQUFtQztJQUNwQyxB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O2tCQUFiLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUdJLE1BQU07a0JBQWYsTUFBTTtZQUdHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxrQkFBa0I7a0JBQTNCLE1BQU07WUFDRyxvQkFBb0I7a0JBQTdCLE1BQU07WUFtREgsTUFBTTtrQkFEVCxLQUFLO1lBYUYsT0FBTztrQkFEVixLQUFLO1lBYUYsTUFBTTtrQkFEVCxLQUFLO1lBYUYsS0FBSztrQkFEUixLQUFLO1lBWUYsSUFBSTtrQkFEUCxLQUFLOztrRkFyS0ssa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NvbHVtbi9jb2x1bW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4uL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVBhcmFtcyB9IGZyb20gJy4uLy4uL3R5cGVzL2RhdGEtdGFibGUtcGFyYW1zLnR5cGUnO1xuaW1wb3J0IHsgUm93Q2FsbGJhY2sgfSBmcm9tICcuLi8uLi90eXBlcy9yb3ctY2FsbGJhY2sudHlwZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy50eXBlJztcbmltcG9ydCB7IGRlZmF1bHRUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9kZWZhdWx0LXRyYW5zbGF0aW9ucy50eXBlJztcbmltcG9ydCB7IGRyYWcgfSBmcm9tICcuLi8uLi91dGlscy9kcmFnJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50XCI7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIERhdGFUYWJsZVBhcmFtcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9pdGVtQ291bnQ7XG5cbiAgQElucHV0KCkgd3JhcHBlckNsYXNzO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgLy8gbm8gbmVlZCB0byBjYWxsIG5vdGlmaWVyLm5leHQoKSBiZWNhdXNlIF9vblJlbG9hZEZpbmlzaGVkKClcbiAgICAvLyB3aWxsIGNoYW5nZSByZWxvYWRlZCB2YWx1ZSBjYXVzaW5nIG5vdGlmaWVyLm5leHQoKSB0byBiZSBjYWxsZWQgaW1wbGljaXRseS5cbiAgICB0aGlzLl9vblJlbG9hZEZpbmlzaGVkKCk7XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbUNvdW50O1xuICB9XG5cbiAgc2V0IGl0ZW1Db3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbUNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBjb21wb25lbnRzOlxuICBAQ29udGVudENoaWxkcmVuKERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkgY29sdW1uczogUXVlcnlMaXN0PERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YVRhYmxlUm93Q29tcG9uZW50KSByb3dzOiBRdWVyeUxpc3Q8RGF0YVRhYmxlUm93Q29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkKERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsIHtzdGF0aWM6IGZhbHNlfSkgcGFnaW5hdG9yO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUV4cGFuZCcsIHsgc3RhdGljOiB0cnVlIH0pIGV4cGFuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vIE9uZS10aW1lIG9wdGlvbmFsIGJpbmRpbmdzIHdpdGggZGVmYXVsdCB2YWx1ZXM6XG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGhlYWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBpbmRleENvbHVtbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uSGVhZGVyID0gJyc7XG4gIEBJbnB1dCgpIHJvd0NvbG9yczogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHJvd1Rvb2x0aXA6IFJvd0NhbGxiYWNrO1xuICBASW5wdXQoKSBzZWxlY3RDb2x1bW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbXVsdGlTZWxlY3QgPSB0cnVlO1xuICBASW5wdXQoKSBzdWJzdGl0dXRlUm93cyA9IHRydWU7XG4gIEBJbnB1dCgpIGV4cGFuZGFibGVSb3dzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsczogRGF0YVRhYmxlVHJhbnNsYXRpb25zO1xuICBASW5wdXQoKSBzZWxlY3RPblJvd0NsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9SZWxvYWQgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93UmVsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vRGF0YU1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgcGFnZUxpbWl0czogbnVtYmVyW10gPSBbMTAsIDI1LCA1MCwgMTAwLCAyNTBdO1xuICBASW5wdXQoKSBwcmltYXJ5Q29sdW1uID0gJyc7XG5cbiAgLy8gcmVsb2FkIGVtaXR0ZXJcbiAgQE91dHB1dCgpIHJlbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBldmVudCBoYW5kbGVyczpcbiAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcm93RG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoZWFkZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNlbGxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUm93c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZpc2libGVDb2x1bW5zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBVSSBzdGF0ZSB3aXRob3V0IGlucHV0OlxuICBpbmRleENvbHVtblZpc2libGU6IGJvb2xlYW47XG4gIHNlbGVjdENvbHVtblZpc2libGU6IGJvb2xlYW47XG4gIGV4cGFuZENvbHVtblZpc2libGU6IGJvb2xlYW47XG5cbiAgLy8gYWRhIG5vdGlmaWNhdGlvbnMuXG4gIHJlbG9hZE5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBwYWdpbmF0aW9uTm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIHNvcnROb3RpZmljYXRpb246IHN0cmluZztcbiAgY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb246IHN0cmluZztcblxuICBfZGlzcGxheVBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307IC8vIHBhcmFtcyBvZiB0aGUgbGFzdCBmaW5pc2hlZCByZWxvYWRcblxuICBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgc3ViamVjdCQ6IFN1YnNjcmlwdGlvbjtcblxuICBub3RpZmllciA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIG5vdGlmaWVyJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIHNlbGVjdGlvbjpcbiAgc2VsZWN0ZWRSb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudDtcbiAgc2VsZWN0ZWRSb3dzOiBEYXRhVGFibGVSb3dDb21wb25lbnRbXSA9IFtdO1xuXG4gIE1hdGg6IGFueTtcbiAgaWQgPSBgZGF0YXRhYmxlLSR7bmV4dElkKyt9YDtcblxuICAvLyBzZWxlY3QgYWxsIGNoZWNrYm94IGZsYWdcbiAgcHJpdmF0ZSBfc2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcblxuICAvLyBjb2x1bW4gcmVzaXppbmc6XG4gIHByaXZhdGUgX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICByZXNpemVMaW1pdCA9IDMwO1xuXG4gIC8vIFJlbG9hZGluZzpcbiAgX3JlbG9hZGluZyA9IGZhbHNlO1xuXG4gIGdldCByZWxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbG9hZGluZztcbiAgfVxuXG4gIHNldCByZWxvYWRpbmcodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVsb2FkaW5nID0gdmFsO1xuICAgIHRoaXMubm90aWZpZXIubmV4dCgpO1xuICB9XG5cbiAgLy8gVUkgc3RhdGU6IHZpc2libGUgZ2V0L3NldCBmb3IgdGhlIG91dHNpZGUgd2l0aCBASW5wdXQgZm9yIG9uZS10aW1lIGluaXRpYWwgdmFsdWVzXG4gIHByaXZhdGUgX3NvcnRCeTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3J0QnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEJ5O1xuICB9XG5cbiAgc2V0IHNvcnRCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc29ydEJ5ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NvcnRBc2MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3J0QXNjKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0QXNjO1xuICB9XG5cbiAgc2V0IHNvcnRBc2ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zb3J0QXNjID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldCA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IG9mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cblxuICBzZXQgb2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGltaXQgPSAxMDtcblxuICBASW5wdXQoKVxuICBnZXQgbGltaXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGltaXQ7XG4gIH1cblxuICBzZXQgbGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xpbWl0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZWQgcHJvcGVydHk6XG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1Db3VudCAhPT0gMCA/IE1hdGguZmxvb3IodGhpcy5vZmZzZXQgLyB0aGlzLmxpbWl0KSArIDEgOiAwO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWUpIHtcbiAgICB0aGlzLm9mZnNldCA9ICh2YWx1ZSAtIDEpICogdGhpcy5saW1pdDtcbiAgfVxuXG4gIGdldCBsYXN0UGFnZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuaXRlbUNvdW50IC8gdGhpcy5saW1pdCk7XG4gIH1cblxuICAvLyBzZXR0aW5nIG11bHRpcGxlIG9ic2VydmFibGUgcHJvcGVydGllcyBzaW11bHRhbmVvdXNseVxuICBzb3J0KHNvcnRCeTogc3RyaW5nLCBhc2M6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNvcnRCeSA9IHNvcnRCeTtcbiAgICB0aGlzLnNvcnRBc2MgPSBhc2M7XG4gIH1cblxuICAvLyBpbml0XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXREZWZhdWx0VmFsdWVzKCk7XG4gICAgdGhpcy5faW5pdERlZmF1bHRDbGlja0V2ZW50cygpO1xuICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlQYXJhbXMoKTtcblxuICAgIGlmICh0aGlzLnBhZ2VMaW1pdHMuaW5kZXhPZih0aGlzLmxpbWl0KSA8IDApIHtcbiAgICAgIHRoaXMubGltaXQgPSB0aGlzLnBhZ2VMaW1pdHNbMF07XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbHMgPSB7Li4uZGVmYXVsdFRyYW5zbGF0aW9ucywgLi4udGhpcy5sYWJlbHN9O1xuXG4gICAgaWYgKHRoaXMuYXV0b1JlbG9hZCkge1xuICAgICAgdGhpcy5yZWxvYWRJdGVtcygpO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZpZXIkID0gdGhpcy5ub3RpZmllci5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbm90aWZ5KCkpO1xuICAgIHRoaXMuc3ViamVjdCQgPSB0aGlzLnN1YmplY3QucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVsb2FkSXRlbXMoKSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2luaXREZWZhdWx0VmFsdWVzKCkge1xuICAgIHRoaXMuaW5kZXhDb2x1bW5WaXNpYmxlID0gdGhpcy5pbmRleENvbHVtbjtcbiAgICB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPSB0aGlzLnNlbGVjdENvbHVtbjtcbiAgICB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPSB0aGlzLmV4cGFuZGFibGVSb3dzO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERlZmF1bHRDbGlja0V2ZW50cygpIHtcbiAgICB0aGlzLmhlYWRlckNsaWNrLnN1YnNjcmliZShcbiAgICAgICh0YWJsZUV2ZW50OiB7IGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBldmVudDogRXZlbnQgfSkgPT4gdGhpcy5zb3J0Q29sdW1uKHRhYmxlRXZlbnQuY29sdW1uKSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0T25Sb3dDbGljaykge1xuICAgICAgdGhpcy5yb3dDbGljay5zdWJzY3JpYmUoXG4gICAgICAgICh0YWJsZUV2ZW50OiB7IHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQgfSkgPT4gdGFibGVFdmVudC5yb3cuc2VsZWN0ZWQgPSAhdGFibGVFdmVudC5yb3cuc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbG9hZEl0ZW1zKCkge1xuICAgIHRoaXMucmVsb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlbG9hZC5lbWl0KHRoaXMuX2dldFJlbW90ZVBhcmFtZXRlcnMoKSk7XG4gIH1cblxuICBwcml2YXRlIF9vblJlbG9hZEZpbmlzaGVkKCkge1xuICAgIGlmICh0aGlzLnJlbG9hZGluZykge1xuICAgICAgdGhpcy5fdXBkYXRlRGlzcGxheVBhcmFtcygpO1xuICAgICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcbiAgICAgIHRoaXMucmVsb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3BsYXlQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlQYXJhbXM7XG4gIH1cblxuICBfdXBkYXRlRGlzcGxheVBhcmFtcygpIHtcbiAgICB0aGlzLl9kaXNwbGF5UGFyYW1zID0ge1xuICAgICAgc29ydEJ5OiB0aGlzLnNvcnRCeSxcbiAgICAgIHNvcnRBc2M6IHRoaXMuc29ydEFzYyxcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyByb3dDbGlja2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJvd0NsaWNrLmVtaXQoe3JvdywgZXZlbnR9KTtcbiAgfVxuXG4gIHB1YmxpYyByb3dEb3VibGVDbGlja2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJvd0RvdWJsZUNsaWNrLmVtaXQoe3JvdywgZXZlbnR9KTtcbiAgfVxuXG4gIHB1YmxpYyBoZWFkZXJDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBldmVudDogRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuaGVhZGVyQ2xpY2suZW1pdCh7Y29sdW1uLCBldmVudH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXNpemVJblByb2dyZXNzID0gZmFsc2U7IC8vIHRoaXMgaXMgYmVjYXVzZSBJIGNhbid0IHByZXZlbnQgY2xpY2sgZnJvbSBtb3VzdXAgb2YgdGhlIGRyYWcgZW5kXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjZWxsQ2xpY2tlZChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5jZWxsQ2xpY2suZW1pdCh7cm93LCBjb2x1bW4sIGV2ZW50fSk7XG4gIH1cblxuICAvLyBmdW5jdGlvbnM6XG4gIHByaXZhdGUgX2dldFJlbW90ZVBhcmFtZXRlcnMoKTogRGF0YVRhYmxlUGFyYW1zIHtcbiAgICBjb25zdCBwYXJhbXMgPSA8RGF0YVRhYmxlUGFyYW1zPnt9O1xuXG4gICAgaWYgKHRoaXMuc29ydEJ5KSB7XG4gICAgICBwYXJhbXMuc29ydEJ5ID0gdGhpcy5zb3J0Qnk7XG4gICAgICBwYXJhbXMuc29ydEFzYyA9IHRoaXMuc29ydEFzYztcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgcGFyYW1zLm9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgcGFyYW1zLmxpbWl0ID0gdGhpcy5saW1pdDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvbHVtbihjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkge1xuICAgIGlmIChjb2x1bW4uc29ydGFibGUpIHtcblxuICAgICAgY29uc3QgYXNjZW5kaW5nID0gdGhpcy5zb3J0QnkgPT09IGNvbHVtbi5wcm9wZXJ0eSA/ICF0aGlzLnNvcnRBc2MgOiB0cnVlO1xuXG4gICAgICBpZihjb2x1bW4ucHJvcGVydHkgPT09IHRoaXMuc29ydEJ5ICYmICAhIHRoaXMuc29ydEFzYykge1xuICAgICAgICB0aGlzLnNvcnQodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNvcnQoY29sdW1uLnByb3BlcnR5LCBhc2NlbmRpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb2x1bW5Db3VudCgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvdW50ICs9IHRoaXMuaW5kZXhDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgY291bnQgKz0gdGhpcy5zZWxlY3RDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgY291bnQgKz0gdGhpcy5leHBhbmRDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBjb3VudCArPSBjb2x1bW4udmlzaWJsZSA/IDEgOiAwO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSb3dDb2xvcihpdGVtOiBhbnksIGluZGV4OiBudW1iZXIsIHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50KSB7XG4gICAgaWYgKHRoaXMucm93Q29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoPFJvd0NhbGxiYWNrPnRoaXMucm93Q29sb3JzKShpdGVtLCByb3csIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0QWxsQ2hlY2tib3goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94O1xuICB9XG5cbiAgc2V0IHNlbGVjdEFsbENoZWNrYm94KHZhbHVlKSB7XG4gICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3ggPSB2YWx1ZTtcbiAgICB0aGlzLl9vblNlbGVjdEFsbENoYW5nZWQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25TZWxlY3RBbGxDaGFuZ2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5yb3dzLnRvQXJyYXkoKS5mb3JFYWNoKHJvdyA9PiByb3cuc2VsZWN0ZWQgPSB2YWx1ZSk7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkUm93cyk7XG4gIH1cblxuICBvblJvd1NlbGVjdENoYW5nZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQpIHtcblxuICAgIC8vIG1haW50YWluIHRoZSBzZWxlY3RlZFJvdyhzKSB2aWV3XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZFJvd3MuaW5kZXhPZihyb3cpO1xuICAgICAgaWYgKHJvdy5zZWxlY3RlZCAmJiBpbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MucHVzaChyb3cpO1xuICAgICAgfSBlbHNlIGlmICghcm93LnNlbGVjdGVkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJvdy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUm93ID09PSByb3cpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRSb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdW5zZWxlY3QgYWxsIG90aGVyIHJvd3M6XG4gICAgaWYgKHJvdy5zZWxlY3RlZCAmJiAhdGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5yb3dzLnRvQXJyYXkoKS5maWx0ZXIocm93XyA9PiByb3dfLnNlbGVjdGVkKS5mb3JFYWNoKHJvd18gPT4ge1xuICAgICAgICBpZiAocm93XyAhPT0gcm93KSB7IC8vIGF2b2lkIGVuZGxlc3MgbG9vcFxuICAgICAgICAgIHJvd18uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkUm93cyk7XG4gIH1cblxuICAvLyBvdGhlcjpcblxuICBnZXQgc3Vic3RpdHV0ZUl0ZW1zKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMuZGlzcGxheVBhcmFtcy5saW1pdCAtIHRoaXMuaXRlbXMubGVuZ3RofSk7XG4gIH1cblxuICBwdWJsaWMgcmVzaXplQ29sdW1uU3RhcnQoZXZlbnQ6IE1vdXNlRXZlbnQsIGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBjb2x1bW5FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIGxldCBzdGFydE9mZnNldCA9IGNvbHVtbkVsZW1lbnQub2Zmc2V0V2lkdGggLSBldmVudC5wYWdlWDtcbiAgICBkcmFnKGV2ZW50LCB7XG4gICAgICBtb3ZlOiAobW92ZUV2ZW50OiBNb3VzZUV2ZW50LCBkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Jlc2l6ZUluTGltaXQoY29sdW1uRWxlbWVudCwgZHgpKSB7XG4gICAgICAgICAgY29sdW1uLndpZHRoID0gc3RhcnRPZmZzZXQgKyBtb3ZlRXZlbnQucGFnZVggKyBkeDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50OiBIVE1MRWxlbWVudCwgZHg6IG51bWJlcikge1xuICAgIC8qIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgQ1NTIG1pbi13aWR0aCBkaWRuJ3Qgd29yayBvbiB0YWJsZS1sYXlvdXQ6IGZpeGVkLlxuICAgICAgICAgV2l0aG91dCB0aGUgbGltaXRzLCByZXNpemluZyBjYW4gbWFrZSB0aGUgbmV4dCBjb2x1bW4gZGlzYXBwZWFyIGNvbXBsZXRlbHksXG4gICAgICAgICBhbmQgZXZlbiBpbmNyZWFzZSB0aGUgdGFibGUgd2lkdGguIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHN1ZmZlcnMgZnJvbSB0aGUgZmFjdCxcbiAgICAgICAgIHRoYXQgb2Zmc2V0V2lkdGggc29tZXRpbWVzIGNvbnRhaW5zIG91dC1vZi1kYXRlIHZhbHVlcy4gKi9cbiAgICBpZiAoKGR4IDwgMCAmJiAoY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSB8fFxuICAgICAgIWNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nIHx8IC8vIHJlc2l6aW5nIGRvZXNuJ3QgbWFrZSBzZW5zZSBmb3IgdGhlIGxhc3QgdmlzaWJsZSBjb2x1bW5cbiAgICAgIChkeCA+PSAwICYmICgoPEhUTUxFbGVtZW50PmNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmltYXJ5Q29sdW1uID09PSAnJykge1xuICAgICAgdGhpcy5wcmltYXJ5Q29sdW1uID0gKHRoaXMuY29sdW1ucy5maXJzdCBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpLnByb3BlcnR5O1xuICAgIH1cbiAgfVxuXG4gIF9ub3RpZnkoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMucmVsb2FkaW5nO1xuXG4gICAgdGhpcy5yZWxvYWROb3RpZmljYXRpb24gPSBsb2FkaW5nID9cbiAgICAgIHRoaXMubGFiZWxzLmxvYWRpbmdUZXh0LnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKSA6XG4gICAgICB0aGlzLmxhYmVscy5sb2FkZWRUZXh0LnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKTtcblxuICAgIGlmICghbG9hZGluZykge1xuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25Ob3RpZmljYXRpb24gPSB0aGlzLmxhYmVscy5wYWdpbmF0aW9uVGV4dFxuICAgICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCAnJyArIChNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KSAhPT0gMCA/IHRoaXMub2Zmc2V0ICsgMSA6ICcwJykpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCAnJyArIChNYXRoLm1pbih0aGlzLm9mZnNldCArIHRoaXMubGltaXQsIHRoaXMuaXRlbUNvdW50KSkpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCAnJyArIHRoaXMuaXRlbUNvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc29ydEJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5maW5kKGNvbHVtbiA9PiBjb2x1bW4ucHJvcGVydHkgPT09IHRoaXMuc29ydEJ5KSBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICh0aGlzLnNvcnRBc2MgPyB0aGlzLmxhYmVscy5zb3J0ZWRBc2NlbmRpbmcgOiB0aGlzLmxhYmVscy5zb3J0ZWREZXNjZW5kaW5nKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSlcbiAgICAgICAgICAucmVwbGFjZSgne2hlYWRlcn0nLCBjb2wuaGVhZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViamVjdCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmaWVyJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS13cmFwcGVyXCI+XG4gIDxzcGFuIGNsYXNzPVwic3Itb25seVwiIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWF0b21pYz1cImZhbHNlXCIgYXJpYS1yZWxldmFudD1cInRleHRcIj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwicmVsb2FkTm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJwYWdpbmF0aW9uTm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3J0Tm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuXG4gIDxkYXRhLXRhYmxlLWhlYWRlciAqbmdJZj1cImhlYWRlclwiPjwvZGF0YS10YWJsZS1oZWFkZXI+XG5cbiAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtYm94XCIgW2NsYXNzXT1cIndyYXBwZXJDbGFzc1wiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGRhdGEtdGFibGVcIiBbaWRdPVwiaWRcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICA8Y2FwdGlvbiBjbGFzcz1cInNyLW9ubHlcIiBbdGV4dENvbnRlbnRdPVwidGl0bGVcIj48L2NhcHRpb24+XG4gICAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhZXhwYW5kQ29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiZXhwYW5kLWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiaW5kZXgtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJpbmRleENvbHVtbkhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFzZWxlY3RDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJzZWxlY3QtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICAgIDxsYWJlbCBbZm9yXT1cImlkICsgJy1zZWxlY3QtYWxsLWNvbHVtbidcIiBjbGFzcz1cInNyLW9ubHlcIj5cbiAgICAgICAgICAgIHt7IGxhYmVscy5zZWxlY3RBbGxSb3dzIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIFtpZF09XCJpZCArICctc2VsZWN0LWFsbC1jb2x1bW4nXCJcbiAgICAgICAgICAgIFtoaWRlXT1cIiFtdWx0aVNlbGVjdFwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0QWxsQ2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImxhYmVscy5zZWxlY3RBbGxSb3dzXCIvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zLCBpbmRleCBhcyBpXCIgI3RoXG4gICAgICAgICAgICBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIlxuICAgICAgICAgICAgW2NsYXNzLnNvcnRhYmxlXT1cImNvbHVtbi5zb3J0YWJsZVwiXG4gICAgICAgICAgICBbY2xhc3MucmVzaXphYmxlXT1cImNvbHVtbi5yZXNpemFibGVcIlxuICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1zb3J0XT1cImNvbHVtbi5zb3J0YWJsZSA/IChjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeSA/IChzb3J0QXNjID8gJ2FzY2VuZGluZycgOiAnZGVzY2VuZGluZycpIDogJ25vbmUnKSA6IG51bGxcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIiBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIiBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoIHwgcHhcIiA+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiIChjbGljayk9XCJoZWFkZXJDbGlja2VkKGNvbHVtbiwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImNvbHVtbi5zb3J0YWJsZSA/IGlkIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cIiFzb3J0QXNjID8gbGFiZWxzLnNvcnRBc2NlbmRpbmcgOiBsYWJlbHMuc29ydERlc2NlbmRpbmdcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtpZF09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtpZF09XCInY29sLScraWQrJy0nK2lcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbn1cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi1zb3J0LWljb25cIiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiPlxuICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeVwiIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeVwiIGNsYXNzPVwiZmFcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZmEtc29ydC1hc2MnOiBzb3J0QXNjLCAnZmEtc29ydC1kZXNjJzogIXNvcnRBc2N9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4ucmVzaXphYmxlXCIgY2xhc3M9XCJjb2x1bW4tcmVzaXplLWhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInJlc2l6ZUNvbHVtblN0YXJ0KCRldmVudCwgY29sdW1uLCB0aClcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1ufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLXNvcnQtaWNvblwiICpuZ0lmPVwiY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeVwiIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeVwiIGNsYXNzPVwiZmFcIlxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGluZGV4PWluZGV4XCIgY2xhc3M9XCJkYXRhLXRhYmxlLXJvdy13cmFwcGVyXCJcbiAgICAgICAgICAgICBkYXRhVGFibGVSb3cgI3JvdyBbaXRlbV09XCJpdGVtXCIgW2luZGV4XT1cImluZGV4XCIgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uUm93U2VsZWN0Q2hhbmdlZChyb3cpXCI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5ICpuZ0lmPVwiaXRlbUNvdW50ID09PSAwICYmIG5vRGF0YU1lc3NhZ2VcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImNvbHVtbkNvdW50XCI+e3sgbm9EYXRhTWVzc2FnZSB9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5IGNsYXNzPVwic3Vic3RpdHV0ZS1yb3dzXCIgKm5nSWY9XCJwYWdpbmF0aW9uICYmIHN1YnN0aXR1dGVSb3dzXCI+XG4gICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3Vic3RpdHV0ZUl0ZW1zLCBsZXQgaW5kZXggPSBpbmRleFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1vZGRdPVwiKGluZGV4ICsgaXRlbXMubGVuZ3RoKSAlIDIgPT09IDBcIlxuICAgICAgICAgIFtjbGFzcy5yb3ctZXZlbl09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFleHBhbmRDb2x1bW5WaXNpYmxlXCI+PC90ZD5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFpbmRleENvbHVtblZpc2libGVcIj4mbmJzcDs8L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIXNlbGVjdENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCI+XG4gICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgIDxkaXYgY2xhc3M9XCJidXN5XCIgKm5nSWY9XCJzaG93UmVsb2FkaW5nICYmIHJlbG9hZGluZ1wiPlxuICAgICAgPGk+PGkgY2xhc3M9XCJmYSBmYS1zcGluIGZhLWNvZyBmYS0yeFwiPjwvaT48L2k+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkYXRhLXRhYmxlLXBhZ2luYXRpb24gKm5nSWY9XCJwYWdpbmF0aW9uXCIgW2xpbWl0c109XCJwYWdlTGltaXRzXCI+PC9kYXRhLXRhYmxlLXBhZ2luYXRpb24+XG48L2Rpdj5cbiJdfQ==