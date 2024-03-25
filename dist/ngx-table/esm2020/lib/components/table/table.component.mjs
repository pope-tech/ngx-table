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
function DataTableComponent_data_table_header_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-header");
} }
function DataTableComponent_th_19_button_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 25);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const i_r8 = ctx_r16.index;
    const column_r7 = ctx_r16.$implicit;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "col-" + ctx_r12.id + "-" + i_r8)("textContent", column_r7.header);
} }
const _c1 = function (a0) { return { column: a0 }; };
function DataTableComponent_th_19_button_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 26);
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    const i_r8 = ctx_r17.index;
    const column_r7 = ctx_r17.$implicit;
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "col-" + ctx_r13.id + "-" + i_r8)("ngTemplateOutlet", column_r7.headerTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c1, column_r7));
} }
const _c2 = function (a0, a1) { return { "fa-sort-asc": a0, "fa-sort-desc": a1 }; };
function DataTableComponent_th_19_button_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵelement(1, "i", 28)(2, "i", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hide", column_r7.property === ctx_r14.sortBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hide", column_r7.property !== ctx_r14.sortBy)("ngClass", i0.ɵɵpureFunction2(3, _c2, ctx_r14.sortAsc, !ctx_r14.sortAsc));
} }
function DataTableComponent_th_19_button_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵlistener("mousedown", function DataTableComponent_th_19_button_3_span_4_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r21); const column_r7 = i0.ɵɵnextContext(2).$implicit; const _r9 = i0.ɵɵreference(1); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.resizeColumnStart($event, column_r7, _r9); });
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_19_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function DataTableComponent_th_19_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r24); const column_r7 = i0.ɵɵnextContext().$implicit; const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.headerClicked(column_r7, $event); });
    i0.ɵɵtemplate(1, DataTableComponent_th_19_button_3_span_1_Template, 1, 2, "span", 21);
    i0.ɵɵtemplate(2, DataTableComponent_th_19_button_3_span_2_Template, 1, 5, "span", 22);
    i0.ɵɵtemplate(3, DataTableComponent_th_19_button_3_span_3_Template, 3, 6, "span", 23);
    i0.ɵɵtemplate(4, DataTableComponent_th_19_button_3_span_4_Template, 1, 0, "span", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const column_r7 = ctx_r25.$implicit;
    const i_r8 = ctx_r25.index;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r10.itemCount === 0)("title", !ctx_r10.sortAsc ? ctx_r10.labels.sortAscending : ctx_r10.labels.sortDescending);
    i0.ɵɵattribute("aria-controls", column_r7.sortable ? ctx_r10.id : null)("aria-labelledby", "col-" + ctx_r10.id + "-" + i_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r7.headerTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r7.headerTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r7.sortable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r7.resizable);
} }
function DataTableComponent_th_19_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const column_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("textContent", column_r7.header);
} }
function DataTableComponent_th_19_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 33);
} if (rf & 2) {
    const column_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", column_r7.headerTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, column_r7));
} }
function DataTableComponent_th_19_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵelement(1, "i", 28)(2, "i", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r28 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hide", column_r7.property === ctx_r28.sortBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hide", column_r7.property !== ctx_r28.sortBy)("ngClass", i0.ɵɵpureFunction2(3, _c2, ctx_r28.sortAsc, !ctx_r28.sortAsc));
} }
function DataTableComponent_th_19_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵlistener("mousedown", function DataTableComponent_th_19_span_4_span_4_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r35); const column_r7 = i0.ɵɵnextContext(2).$implicit; const _r9 = i0.ɵɵreference(1); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.resizeColumnStart($event, column_r7, _r9); });
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_19_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, DataTableComponent_th_19_span_4_span_1_Template, 1, 1, "span", 31);
    i0.ɵɵtemplate(2, DataTableComponent_th_19_span_4_span_2_Template, 1, 4, "span", 32);
    i0.ɵɵtemplate(3, DataTableComponent_th_19_span_4_span_3_Template, 3, 6, "span", 23);
    i0.ɵɵtemplate(4, DataTableComponent_th_19_span_4_span_4_Template, 1, 0, "span", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r7.headerTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r7.headerTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r7.sortable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r7.resizable);
} }
function DataTableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17, 18);
    i0.ɵɵpipe(2, "px");
    i0.ɵɵtemplate(3, DataTableComponent_th_19_button_3_Template, 5, 8, "button", 19);
    i0.ɵɵtemplate(4, DataTableComponent_th_19_span_4_Template, 5, 4, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", i0.ɵɵpipeBind1(2, 11, column_r7.width));
    i0.ɵɵclassProp("sortable", column_r7.sortable)("resizable", column_r7.resizable);
    i0.ɵɵproperty("hide", !column_r7.visible)("ngClass", column_r7.styleClassObject);
    i0.ɵɵattribute("aria-sort", column_r7.sortable ? column_r7.property === ctx_r1.sortBy ? ctx_r1.sortAsc ? "ascending" : "descending" : "none" : null);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", column_r7.sortable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r7.sortable);
} }
function DataTableComponent_tbody_20_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 34, 35);
    i0.ɵɵlistener("selectedChange", function DataTableComponent_tbody_20_Template_tbody_selectedChange_0_listener() { i0.ɵɵrestoreView(_r41); const _r39 = i0.ɵɵreference(1); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.onRowSelectChanged(_r39); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const index_r38 = ctx.index;
    i0.ɵɵproperty("item", item_r37)("index", index_r38);
} }
function DataTableComponent_tbody_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody")(1, "tr")(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("colspan", ctx_r3.columnCount);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.noDataMessage);
} }
function DataTableComponent_tbody_22_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 39);
} if (rf & 2) {
    const column_r46 = ctx.$implicit;
    i0.ɵɵproperty("hide", !column_r46.visible);
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
    const index_r44 = ctx.index;
    const ctx_r42 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("row-odd", (index_r44 + ctx_r42.items.length) % 2 === 0)("row-even", (index_r44 + ctx_r42.items.length) % 2 === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hide", !ctx_r42.expandColumnVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hide", !ctx_r42.indexColumnVisible);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hide", !ctx_r42.selectColumnVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r42.columns);
} }
function DataTableComponent_tbody_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 36);
    i0.ɵɵtemplate(1, DataTableComponent_tbody_22_tr_1_Template, 6, 8, "tr", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.substituteItems);
} }
function DataTableComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "i");
    i0.ɵɵelement(2, "i", 42);
    i0.ɵɵelementEnd()();
} }
function DataTableComponent_data_table_pagination_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-pagination", 43);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("limits", ctx_r6.pageLimits);
} }
let nextId = 0;
export class DataTableComponent {
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
}
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(); };
DataTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableComponent, selectors: [["data-table"]], contentQueries: function DataTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
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
    } }, inputs: { wrapperClass: "wrapperClass", items: "items", itemCount: "itemCount", title: "title", showTitle: "showTitle", header: "header", pagination: "pagination", indexColumn: "indexColumn", indexColumnHeader: "indexColumnHeader", rowColors: "rowColors", rowTooltip: "rowTooltip", selectColumn: "selectColumn", multiSelect: "multiSelect", substituteRows: "substituteRows", expandableRows: "expandableRows", labels: "labels", selectOnRowClick: "selectOnRowClick", autoReload: "autoReload", showReloading: "showReloading", noDataMessage: "noDataMessage", pageLimits: "pageLimits", primaryColumn: "primaryColumn", sortBy: "sortBy", sortAsc: "sortAsc", offset: "offset", limit: "limit", page: "page" }, outputs: { reload: "reload", rowClick: "rowClick", rowDoubleClick: "rowDoubleClick", headerClick: "headerClick", cellClick: "cellClick", selectedRowsChange: "selectedRowsChange", visibleColumnsChange: "visibleColumnsChange" }, decls: 25, vars: 26, consts: [[1, "data-table-wrapper"], ["role", "status", "aria-live", "polite", "aria-atomic", "false", "aria-relevant", "text", 1, "sr-only"], [3, "textContent"], [4, "ngIf"], [1, "data-table-box"], ["tabindex", "-1", 1, "table", "data-table", 3, "id"], [1, "sr-only", 3, "textContent"], [1, "expand-column-header", 3, "hide"], ["scope", "col", 1, "index-column-header", 3, "hide"], [1, "select-column-header", 3, "hide"], [1, "sr-only", 3, "for"], ["type", "checkbox", 3, "id", "hide", "ngModel", "disabled", "title", "ngModelChange"], ["scope", "col", "class", "column-header", 3, "hide", "sortable", "resizable", "ngClass", "width", 4, "ngFor", "ngForOf"], ["class", "data-table-row-wrapper", "dataTableRow", "", 3, "item", "index", "selectedChange", 4, "ngFor", "ngForOf"], ["class", "substitute-rows", 4, "ngIf"], ["class", "busy", 4, "ngIf"], [3, "limits", 4, "ngIf"], ["scope", "col", 1, "column-header", 3, "hide", "ngClass"], ["th", ""], [3, "disabled", "title", "click", 4, "ngIf"], [3, "disabled", "title", "click"], [3, "id", "textContent", 4, "ngIf"], [3, "id", "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "column-sort-icon", 4, "ngIf"], ["class", "column-resize-handle", 3, "mousedown", 4, "ngIf"], [3, "id", "textContent"], [3, "id", "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-sort-icon"], ["aria-hidden", "true", 1, "fa", "fa-sort", "column-sortable-icon", 3, "hide"], ["aria-hidden", "true", 1, "fa", 3, "hide", "ngClass"], [1, "column-resize-handle", 3, "mousedown"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["dataTableRow", "", 1, "data-table-row-wrapper", 3, "item", "index", "selectedChange"], ["row", ""], [1, "substitute-rows"], ["role", "presentation", 3, "row-odd", "row-even", 4, "ngFor", "ngForOf"], ["role", "presentation"], [3, "hide"], [3, "hide", 4, "ngFor", "ngForOf"], [1, "busy"], [1, "fa", "fa-spin", "fa-cog", "fa-2x"], [3, "limits"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "span", 1);
        i0.ɵɵelement(2, "span", 2)(3, "span", 2)(4, "span", 2)(5, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, DataTableComponent_data_table_header_6_Template, 1, 0, "data-table-header", 3);
        i0.ɵɵelementStart(7, "div", 4)(8, "table", 5);
        i0.ɵɵelement(9, "caption", 6);
        i0.ɵɵelementStart(10, "thead")(11, "tr");
        i0.ɵɵelement(12, "td", 7);
        i0.ɵɵelementStart(13, "th", 8);
        i0.ɵɵelement(14, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "td", 9)(16, "label", 10);
        i0.ɵɵtext(17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "input", 11);
        i0.ɵɵlistener("ngModelChange", function DataTableComponent_Template_input_ngModelChange_18_listener($event) { return ctx.selectAllCheckbox = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(19, DataTableComponent_th_19_Template, 5, 13, "th", 12);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(20, DataTableComponent_tbody_20_Template, 2, 2, "tbody", 13);
        i0.ɵɵtemplate(21, DataTableComponent_tbody_21_Template, 4, 2, "tbody", 3);
        i0.ɵɵtemplate(22, DataTableComponent_tbody_22_Template, 2, 1, "tbody", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(23, DataTableComponent_div_23_Template, 3, 0, "div", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(24, DataTableComponent_data_table_pagination_24_Template, 1, 1, "data-table-pagination", 16);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("textContent", ctx.reloadNotification);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("textContent", ctx.paginationNotification);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("textContent", ctx.sortNotification);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("textContent", ctx.columnSelectorNotification);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.header);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.wrapperClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.id);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("textContent", ctx.title);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("hide", !ctx.expandColumnVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hide", !ctx.indexColumnVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("textContent", ctx.indexColumnHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hide", !ctx.selectColumnVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", ctx.id + "-select-all-column");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.labels.selectAllRows, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.id + "-select-all-column")("hide", !ctx.multiSelect)("ngModel", ctx.selectAllCheckbox)("disabled", ctx.itemCount === 0)("title", ctx.labels.selectAllRows);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.itemCount === 0 && ctx.noDataMessage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.pagination && ctx.substituteRows);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showReloading && ctx.reloading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.pagination);
    } }, styles: ["[_nghost-%COMP%]     .data-table.table>tbody+tbody{border-top:none}[_nghost-%COMP%]     .data-table.table td{vertical-align:middle}[_nghost-%COMP%]     .data-table>thead>tr>th, [_nghost-%COMP%]     .data-table>tbody>tr>td{overflow:hidden}[_nghost-%COMP%]     .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}[_nghost-%COMP%]     .row-odd{background-color:#f6f6f6}.data-table[_ngcontent-%COMP%]   .substitute-rows[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]     .data-table .data-table-row:hover{background-color:#ececec}.data-table[_ngcontent-%COMP%]{box-shadow:0 0 15px #ececec}.column-header[_ngcontent-%COMP%]{position:relative}.expand-column-header[_ngcontent-%COMP%]{width:50px}.select-column-header[_ngcontent-%COMP%]{width:50px;text-align:center}.index-column-header[_ngcontent-%COMP%]{width:40px}.column-header.sortable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-left:8px}.column-header.resizable[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-right:8px}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]   .column-sortable-icon[_ngcontent-%COMP%]{color:#d3d3d3}.column-header[_ngcontent-%COMP%]   .column-resize-handle[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box[_ngcontent-%COMP%]{position:relative}.busy[_ngcontent-%COMP%]{position:absolute;z-index:1;inset:0;background-color:#00000040}.busy[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableComponent, [{
        type: Component,
        args: [{ selector: 'data-table', template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    <span [textContent]=\"reloadNotification\"></span>\n    <span [textContent]=\"paginationNotification\"></span>\n    <span [textContent]=\"sortNotification\"></span>\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\" [class]=\"wrapperClass\">\n    <table class=\"table data-table\" [id]=\"id\" tabindex=\"-1\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <td [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <label [for]=\"id + '-select-all-column'\" class=\"sr-only\">\n            {{ labels.selectAllRows }}\n          </label>\n          <input\n            [id]=\"id + '-select-all-column'\"\n            [hide]=\"!multiSelect\"\n                 type=\"checkbox\"\n                 [(ngModel)]=\"selectAllCheckbox\"\n                 [disabled]=\"itemCount === 0\"\n                 [title]=\"labels.selectAllRows\"/>\n        </td>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\"\n                  [title]=\"!sortAsc ? labels.sortAscending : labels.sortDescending\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [id]=\"'col-'+id+'-'+i\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                aria-hidden=\"true\"></i>\n              <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n", styles: [":host ::ng-deep .data-table.table>tbody+tbody{border-top:none}:host ::ng-deep .data-table.table td{vertical-align:middle}:host ::ng-deep .data-table>thead>tr>th,:host ::ng-deep .data-table>tbody>tr>td{overflow:hidden}:host ::ng-deep .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host ::ng-deep .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host ::ng-deep .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;inset:0;background-color:#00000040}.busy>i{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}\n"] }]
    }], function () { return []; }, { wrapperClass: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTyxTQUFTLEVBQ3RCLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsWUFBWSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7SUNsQmhGLG9DQUFzRDs7O0lBb0M1QywyQkFDMkM7Ozs7OztJQUROLHFEQUFzQixpQ0FBQTs7OztJQUUzRCwyQkFDMEQ7Ozs7OztJQUR0QixxREFBc0IsOENBQUEsa0VBQUE7Ozs7SUFFMUQsZ0NBQXVEO0lBQ3JELHdCQUN5QixZQUFBO0lBRzNCLGlCQUFPOzs7O0lBSkYsZUFBbUM7SUFBbkMsNERBQW1DO0lBRW5DLGVBQW1DO0lBQW5DLDREQUFtQywwRUFBQTs7OztJQUd4QyxnQ0FDMEQ7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a0JBQWYsTUFBTTtZQUdHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxrQkFBa0I7a0JBQTNCLE1BQU07WUFDRyxvQkFBb0I7a0JBQTdCLE1BQU07WUFtREgsTUFBTTtrQkFEVCxLQUFLO1lBYUYsT0FBTztrQkFEVixLQUFLO1lBYUYsTUFBTTtrQkFEVCxLQUFLO1lBYUYsS0FBSztrQkFEUixLQUFLO1lBWUYsSUFBSTtrQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NvbHVtbi9jb2x1bW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4uL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVBhcmFtcyB9IGZyb20gJy4uLy4uL3R5cGVzL2RhdGEtdGFibGUtcGFyYW1zLnR5cGUnO1xuaW1wb3J0IHsgUm93Q2FsbGJhY2sgfSBmcm9tICcuLi8uLi90eXBlcy9yb3ctY2FsbGJhY2sudHlwZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy50eXBlJztcbmltcG9ydCB7IGRlZmF1bHRUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9kZWZhdWx0LXRyYW5zbGF0aW9ucy50eXBlJztcbmltcG9ydCB7IGRyYWcgfSBmcm9tICcuLi8uLi91dGlscy9kcmFnJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50XCI7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIERhdGFUYWJsZVBhcmFtcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9pdGVtQ291bnQ7XG5cbiAgQElucHV0KCkgd3JhcHBlckNsYXNzO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgLy8gbm8gbmVlZCB0byBjYWxsIG5vdGlmaWVyLm5leHQoKSBiZWNhdXNlIF9vblJlbG9hZEZpbmlzaGVkKClcbiAgICAvLyB3aWxsIGNoYW5nZSByZWxvYWRlZCB2YWx1ZSBjYXVzaW5nIG5vdGlmaWVyLm5leHQoKSB0byBiZSBjYWxsZWQgaW1wbGljaXRseS5cbiAgICB0aGlzLl9vblJlbG9hZEZpbmlzaGVkKCk7XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbUNvdW50O1xuICB9XG5cbiAgc2V0IGl0ZW1Db3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbUNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBjb21wb25lbnRzOlxuICBAQ29udGVudENoaWxkcmVuKERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkgY29sdW1uczogUXVlcnlMaXN0PERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YVRhYmxlUm93Q29tcG9uZW50KSByb3dzOiBRdWVyeUxpc3Q8RGF0YVRhYmxlUm93Q29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkKERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsIHtzdGF0aWM6IGZhbHNlfSkgcGFnaW5hdG9yO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUV4cGFuZCcsIHsgc3RhdGljOiB0cnVlIH0pIGV4cGFuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vIE9uZS10aW1lIG9wdGlvbmFsIGJpbmRpbmdzIHdpdGggZGVmYXVsdCB2YWx1ZXM6XG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGhlYWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBpbmRleENvbHVtbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uSGVhZGVyID0gJyc7XG4gIEBJbnB1dCgpIHJvd0NvbG9yczogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHJvd1Rvb2x0aXA6IFJvd0NhbGxiYWNrO1xuICBASW5wdXQoKSBzZWxlY3RDb2x1bW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbXVsdGlTZWxlY3QgPSB0cnVlO1xuICBASW5wdXQoKSBzdWJzdGl0dXRlUm93cyA9IHRydWU7XG4gIEBJbnB1dCgpIGV4cGFuZGFibGVSb3dzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsczogRGF0YVRhYmxlVHJhbnNsYXRpb25zO1xuICBASW5wdXQoKSBzZWxlY3RPblJvd0NsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9SZWxvYWQgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93UmVsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vRGF0YU1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgcGFnZUxpbWl0czogbnVtYmVyW10gPSBbMTAsIDI1LCA1MCwgMTAwLCAyNTBdO1xuICBASW5wdXQoKSBwcmltYXJ5Q29sdW1uID0gJyc7XG5cbiAgLy8gcmVsb2FkIGVtaXR0ZXJcbiAgQE91dHB1dCgpIHJlbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBldmVudCBoYW5kbGVyczpcbiAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcm93RG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoZWFkZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNlbGxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUm93c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZpc2libGVDb2x1bW5zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBVSSBzdGF0ZSB3aXRob3V0IGlucHV0OlxuICBpbmRleENvbHVtblZpc2libGU6IGJvb2xlYW47XG4gIHNlbGVjdENvbHVtblZpc2libGU6IGJvb2xlYW47XG4gIGV4cGFuZENvbHVtblZpc2libGU6IGJvb2xlYW47XG5cbiAgLy8gYWRhIG5vdGlmaWNhdGlvbnMuXG4gIHJlbG9hZE5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBwYWdpbmF0aW9uTm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIHNvcnROb3RpZmljYXRpb246IHN0cmluZztcbiAgY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb246IHN0cmluZztcblxuICBfZGlzcGxheVBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307IC8vIHBhcmFtcyBvZiB0aGUgbGFzdCBmaW5pc2hlZCByZWxvYWRcblxuICBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgc3ViamVjdCQ6IFN1YnNjcmlwdGlvbjtcblxuICBub3RpZmllciA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIG5vdGlmaWVyJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIHNlbGVjdGlvbjpcbiAgc2VsZWN0ZWRSb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudDtcbiAgc2VsZWN0ZWRSb3dzOiBEYXRhVGFibGVSb3dDb21wb25lbnRbXSA9IFtdO1xuXG4gIE1hdGg6IGFueTtcbiAgaWQgPSBgZGF0YXRhYmxlLSR7bmV4dElkKyt9YDtcblxuICAvLyBzZWxlY3QgYWxsIGNoZWNrYm94IGZsYWdcbiAgcHJpdmF0ZSBfc2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcblxuICAvLyBjb2x1bW4gcmVzaXppbmc6XG4gIHByaXZhdGUgX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICByZXNpemVMaW1pdCA9IDMwO1xuXG4gIC8vIFJlbG9hZGluZzpcbiAgX3JlbG9hZGluZyA9IGZhbHNlO1xuXG4gIGdldCByZWxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbG9hZGluZztcbiAgfVxuXG4gIHNldCByZWxvYWRpbmcodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVsb2FkaW5nID0gdmFsO1xuICAgIHRoaXMubm90aWZpZXIubmV4dCgpO1xuICB9XG5cbiAgLy8gVUkgc3RhdGU6IHZpc2libGUgZ2V0L3NldCBmb3IgdGhlIG91dHNpZGUgd2l0aCBASW5wdXQgZm9yIG9uZS10aW1lIGluaXRpYWwgdmFsdWVzXG4gIHByaXZhdGUgX3NvcnRCeTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3J0QnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEJ5O1xuICB9XG5cbiAgc2V0IHNvcnRCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc29ydEJ5ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NvcnRBc2MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3J0QXNjKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0QXNjO1xuICB9XG5cbiAgc2V0IHNvcnRBc2ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zb3J0QXNjID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldCA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IG9mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cblxuICBzZXQgb2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGltaXQgPSAxMDtcblxuICBASW5wdXQoKVxuICBnZXQgbGltaXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGltaXQ7XG4gIH1cblxuICBzZXQgbGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xpbWl0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZWQgcHJvcGVydHk6XG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1Db3VudCAhPT0gMCA/IE1hdGguZmxvb3IodGhpcy5vZmZzZXQgLyB0aGlzLmxpbWl0KSArIDEgOiAwO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWUpIHtcbiAgICB0aGlzLm9mZnNldCA9ICh2YWx1ZSAtIDEpICogdGhpcy5saW1pdDtcbiAgfVxuXG4gIGdldCBsYXN0UGFnZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuaXRlbUNvdW50IC8gdGhpcy5saW1pdCk7XG4gIH1cblxuICAvLyBzZXR0aW5nIG11bHRpcGxlIG9ic2VydmFibGUgcHJvcGVydGllcyBzaW11bHRhbmVvdXNseVxuICBzb3J0KHNvcnRCeTogc3RyaW5nLCBhc2M6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNvcnRCeSA9IHNvcnRCeTtcbiAgICB0aGlzLnNvcnRBc2MgPSBhc2M7XG4gIH1cblxuICAvLyBpbml0XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXREZWZhdWx0VmFsdWVzKCk7XG4gICAgdGhpcy5faW5pdERlZmF1bHRDbGlja0V2ZW50cygpO1xuICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlQYXJhbXMoKTtcblxuICAgIGlmICh0aGlzLnBhZ2VMaW1pdHMuaW5kZXhPZih0aGlzLmxpbWl0KSA8IDApIHtcbiAgICAgIHRoaXMubGltaXQgPSB0aGlzLnBhZ2VMaW1pdHNbMF07XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbHMgPSB7Li4uZGVmYXVsdFRyYW5zbGF0aW9ucywgLi4udGhpcy5sYWJlbHN9O1xuXG4gICAgaWYgKHRoaXMuYXV0b1JlbG9hZCkge1xuICAgICAgdGhpcy5yZWxvYWRJdGVtcygpO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZpZXIkID0gdGhpcy5ub3RpZmllci5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbm90aWZ5KCkpO1xuICAgIHRoaXMuc3ViamVjdCQgPSB0aGlzLnN1YmplY3QucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVsb2FkSXRlbXMoKSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2luaXREZWZhdWx0VmFsdWVzKCkge1xuICAgIHRoaXMuaW5kZXhDb2x1bW5WaXNpYmxlID0gdGhpcy5pbmRleENvbHVtbjtcbiAgICB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPSB0aGlzLnNlbGVjdENvbHVtbjtcbiAgICB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPSB0aGlzLmV4cGFuZGFibGVSb3dzO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERlZmF1bHRDbGlja0V2ZW50cygpIHtcbiAgICB0aGlzLmhlYWRlckNsaWNrLnN1YnNjcmliZShcbiAgICAgICh0YWJsZUV2ZW50OiB7IGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBldmVudDogRXZlbnQgfSkgPT4gdGhpcy5zb3J0Q29sdW1uKHRhYmxlRXZlbnQuY29sdW1uKSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0T25Sb3dDbGljaykge1xuICAgICAgdGhpcy5yb3dDbGljay5zdWJzY3JpYmUoXG4gICAgICAgICh0YWJsZUV2ZW50OiB7IHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQgfSkgPT4gdGFibGVFdmVudC5yb3cuc2VsZWN0ZWQgPSAhdGFibGVFdmVudC5yb3cuc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbG9hZEl0ZW1zKCkge1xuICAgIHRoaXMucmVsb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlbG9hZC5lbWl0KHRoaXMuX2dldFJlbW90ZVBhcmFtZXRlcnMoKSk7XG4gIH1cblxuICBwcml2YXRlIF9vblJlbG9hZEZpbmlzaGVkKCkge1xuICAgIGlmICh0aGlzLnJlbG9hZGluZykge1xuICAgICAgdGhpcy5fdXBkYXRlRGlzcGxheVBhcmFtcygpO1xuICAgICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcbiAgICAgIHRoaXMucmVsb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3BsYXlQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlQYXJhbXM7XG4gIH1cblxuICBfdXBkYXRlRGlzcGxheVBhcmFtcygpIHtcbiAgICB0aGlzLl9kaXNwbGF5UGFyYW1zID0ge1xuICAgICAgc29ydEJ5OiB0aGlzLnNvcnRCeSxcbiAgICAgIHNvcnRBc2M6IHRoaXMuc29ydEFzYyxcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyByb3dDbGlja2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJvd0NsaWNrLmVtaXQoe3JvdywgZXZlbnR9KTtcbiAgfVxuXG4gIHB1YmxpYyByb3dEb3VibGVDbGlja2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJvd0RvdWJsZUNsaWNrLmVtaXQoe3JvdywgZXZlbnR9KTtcbiAgfVxuXG4gIHB1YmxpYyBoZWFkZXJDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBldmVudDogRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuaGVhZGVyQ2xpY2suZW1pdCh7Y29sdW1uLCBldmVudH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXNpemVJblByb2dyZXNzID0gZmFsc2U7IC8vIHRoaXMgaXMgYmVjYXVzZSBJIGNhbid0IHByZXZlbnQgY2xpY2sgZnJvbSBtb3VzdXAgb2YgdGhlIGRyYWcgZW5kXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjZWxsQ2xpY2tlZChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5jZWxsQ2xpY2suZW1pdCh7cm93LCBjb2x1bW4sIGV2ZW50fSk7XG4gIH1cblxuICAvLyBmdW5jdGlvbnM6XG4gIHByaXZhdGUgX2dldFJlbW90ZVBhcmFtZXRlcnMoKTogRGF0YVRhYmxlUGFyYW1zIHtcbiAgICBjb25zdCBwYXJhbXMgPSA8RGF0YVRhYmxlUGFyYW1zPnt9O1xuXG4gICAgaWYgKHRoaXMuc29ydEJ5KSB7XG4gICAgICBwYXJhbXMuc29ydEJ5ID0gdGhpcy5zb3J0Qnk7XG4gICAgICBwYXJhbXMuc29ydEFzYyA9IHRoaXMuc29ydEFzYztcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgcGFyYW1zLm9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgcGFyYW1zLmxpbWl0ID0gdGhpcy5saW1pdDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvbHVtbihjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkge1xuICAgIGlmIChjb2x1bW4uc29ydGFibGUpIHtcblxuICAgICAgY29uc3QgYXNjZW5kaW5nID0gdGhpcy5zb3J0QnkgPT09IGNvbHVtbi5wcm9wZXJ0eSA/ICF0aGlzLnNvcnRBc2MgOiB0cnVlO1xuXG4gICAgICBpZihjb2x1bW4ucHJvcGVydHkgPT09IHRoaXMuc29ydEJ5ICYmICAhIHRoaXMuc29ydEFzYykge1xuICAgICAgICB0aGlzLnNvcnQodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNvcnQoY29sdW1uLnByb3BlcnR5LCBhc2NlbmRpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb2x1bW5Db3VudCgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvdW50ICs9IHRoaXMuaW5kZXhDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgY291bnQgKz0gdGhpcy5zZWxlY3RDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgY291bnQgKz0gdGhpcy5leHBhbmRDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBjb3VudCArPSBjb2x1bW4udmlzaWJsZSA/IDEgOiAwO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSb3dDb2xvcihpdGVtOiBhbnksIGluZGV4OiBudW1iZXIsIHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50KSB7XG4gICAgaWYgKHRoaXMucm93Q29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoPFJvd0NhbGxiYWNrPnRoaXMucm93Q29sb3JzKShpdGVtLCByb3csIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0QWxsQ2hlY2tib3goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94O1xuICB9XG5cbiAgc2V0IHNlbGVjdEFsbENoZWNrYm94KHZhbHVlKSB7XG4gICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3ggPSB2YWx1ZTtcbiAgICB0aGlzLl9vblNlbGVjdEFsbENoYW5nZWQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25TZWxlY3RBbGxDaGFuZ2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5yb3dzLnRvQXJyYXkoKS5mb3JFYWNoKHJvdyA9PiByb3cuc2VsZWN0ZWQgPSB2YWx1ZSk7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkUm93cyk7XG4gIH1cblxuICBvblJvd1NlbGVjdENoYW5nZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQpIHtcblxuICAgIC8vIG1haW50YWluIHRoZSBzZWxlY3RlZFJvdyhzKSB2aWV3XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZFJvd3MuaW5kZXhPZihyb3cpO1xuICAgICAgaWYgKHJvdy5zZWxlY3RlZCAmJiBpbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MucHVzaChyb3cpO1xuICAgICAgfSBlbHNlIGlmICghcm93LnNlbGVjdGVkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJvdy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUm93ID09PSByb3cpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRSb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdW5zZWxlY3QgYWxsIG90aGVyIHJvd3M6XG4gICAgaWYgKHJvdy5zZWxlY3RlZCAmJiAhdGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5yb3dzLnRvQXJyYXkoKS5maWx0ZXIocm93XyA9PiByb3dfLnNlbGVjdGVkKS5mb3JFYWNoKHJvd18gPT4ge1xuICAgICAgICBpZiAocm93XyAhPT0gcm93KSB7IC8vIGF2b2lkIGVuZGxlc3MgbG9vcFxuICAgICAgICAgIHJvd18uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkUm93cyk7XG4gIH1cblxuICAvLyBvdGhlcjpcblxuICBnZXQgc3Vic3RpdHV0ZUl0ZW1zKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMuZGlzcGxheVBhcmFtcy5saW1pdCAtIHRoaXMuaXRlbXMubGVuZ3RofSk7XG4gIH1cblxuICBwdWJsaWMgcmVzaXplQ29sdW1uU3RhcnQoZXZlbnQ6IE1vdXNlRXZlbnQsIGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBjb2x1bW5FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIGxldCBzdGFydE9mZnNldCA9IGNvbHVtbkVsZW1lbnQub2Zmc2V0V2lkdGggLSBldmVudC5wYWdlWDtcbiAgICBkcmFnKGV2ZW50LCB7XG4gICAgICBtb3ZlOiAobW92ZUV2ZW50OiBNb3VzZUV2ZW50LCBkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Jlc2l6ZUluTGltaXQoY29sdW1uRWxlbWVudCwgZHgpKSB7XG4gICAgICAgICAgY29sdW1uLndpZHRoID0gc3RhcnRPZmZzZXQgKyBtb3ZlRXZlbnQucGFnZVggKyBkeDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50OiBIVE1MRWxlbWVudCwgZHg6IG51bWJlcikge1xuICAgIC8qIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgQ1NTIG1pbi13aWR0aCBkaWRuJ3Qgd29yayBvbiB0YWJsZS1sYXlvdXQ6IGZpeGVkLlxuICAgICAgICAgV2l0aG91dCB0aGUgbGltaXRzLCByZXNpemluZyBjYW4gbWFrZSB0aGUgbmV4dCBjb2x1bW4gZGlzYXBwZWFyIGNvbXBsZXRlbHksXG4gICAgICAgICBhbmQgZXZlbiBpbmNyZWFzZSB0aGUgdGFibGUgd2lkdGguIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHN1ZmZlcnMgZnJvbSB0aGUgZmFjdCxcbiAgICAgICAgIHRoYXQgb2Zmc2V0V2lkdGggc29tZXRpbWVzIGNvbnRhaW5zIG91dC1vZi1kYXRlIHZhbHVlcy4gKi9cbiAgICBpZiAoKGR4IDwgMCAmJiAoY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSB8fFxuICAgICAgIWNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nIHx8IC8vIHJlc2l6aW5nIGRvZXNuJ3QgbWFrZSBzZW5zZSBmb3IgdGhlIGxhc3QgdmlzaWJsZSBjb2x1bW5cbiAgICAgIChkeCA+PSAwICYmICgoPEhUTUxFbGVtZW50PmNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmltYXJ5Q29sdW1uID09PSAnJykge1xuICAgICAgdGhpcy5wcmltYXJ5Q29sdW1uID0gKHRoaXMuY29sdW1ucy5maXJzdCBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpLnByb3BlcnR5O1xuICAgIH1cbiAgfVxuXG4gIF9ub3RpZnkoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMucmVsb2FkaW5nO1xuXG4gICAgdGhpcy5yZWxvYWROb3RpZmljYXRpb24gPSBsb2FkaW5nID9cbiAgICAgIHRoaXMubGFiZWxzLmxvYWRpbmdUZXh0LnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKSA6XG4gICAgICB0aGlzLmxhYmVscy5sb2FkZWRUZXh0LnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKTtcblxuICAgIGlmICghbG9hZGluZykge1xuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25Ob3RpZmljYXRpb24gPSB0aGlzLmxhYmVscy5wYWdpbmF0aW9uVGV4dFxuICAgICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCAnJyArIChNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KSAhPT0gMCA/IHRoaXMub2Zmc2V0ICsgMSA6ICcwJykpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCAnJyArIChNYXRoLm1pbih0aGlzLm9mZnNldCArIHRoaXMubGltaXQsIHRoaXMuaXRlbUNvdW50KSkpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCAnJyArIHRoaXMuaXRlbUNvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc29ydEJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5maW5kKGNvbHVtbiA9PiBjb2x1bW4ucHJvcGVydHkgPT09IHRoaXMuc29ydEJ5KSBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICh0aGlzLnNvcnRBc2MgPyB0aGlzLmxhYmVscy5zb3J0ZWRBc2NlbmRpbmcgOiB0aGlzLmxhYmVscy5zb3J0ZWREZXNjZW5kaW5nKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSlcbiAgICAgICAgICAucmVwbGFjZSgne2hlYWRlcn0nLCBjb2wuaGVhZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViamVjdCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmaWVyJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS13cmFwcGVyXCI+XG4gIDxzcGFuIGNsYXNzPVwic3Itb25seVwiIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWF0b21pYz1cImZhbHNlXCIgYXJpYS1yZWxldmFudD1cInRleHRcIj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwicmVsb2FkTm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJwYWdpbmF0aW9uTm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3J0Tm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuXG4gIDxkYXRhLXRhYmxlLWhlYWRlciAqbmdJZj1cImhlYWRlclwiPjwvZGF0YS10YWJsZS1oZWFkZXI+XG5cbiAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtYm94XCIgW2NsYXNzXT1cIndyYXBwZXJDbGFzc1wiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGRhdGEtdGFibGVcIiBbaWRdPVwiaWRcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICA8Y2FwdGlvbiBjbGFzcz1cInNyLW9ubHlcIiBbdGV4dENvbnRlbnRdPVwidGl0bGVcIj48L2NhcHRpb24+XG4gICAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhZXhwYW5kQ29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiZXhwYW5kLWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiaW5kZXgtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJpbmRleENvbHVtbkhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFzZWxlY3RDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJzZWxlY3QtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICAgIDxsYWJlbCBbZm9yXT1cImlkICsgJy1zZWxlY3QtYWxsLWNvbHVtbidcIiBjbGFzcz1cInNyLW9ubHlcIj5cbiAgICAgICAgICAgIHt7IGxhYmVscy5zZWxlY3RBbGxSb3dzIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIFtpZF09XCJpZCArICctc2VsZWN0LWFsbC1jb2x1bW4nXCJcbiAgICAgICAgICAgIFtoaWRlXT1cIiFtdWx0aVNlbGVjdFwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0QWxsQ2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImxhYmVscy5zZWxlY3RBbGxSb3dzXCIvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zLCBpbmRleCBhcyBpXCIgI3RoXG4gICAgICAgICAgICBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIlxuICAgICAgICAgICAgW2NsYXNzLnNvcnRhYmxlXT1cImNvbHVtbi5zb3J0YWJsZVwiXG4gICAgICAgICAgICBbY2xhc3MucmVzaXphYmxlXT1cImNvbHVtbi5yZXNpemFibGVcIlxuICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1zb3J0XT1cImNvbHVtbi5zb3J0YWJsZSA/IChjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeSA/IChzb3J0QXNjID8gJ2FzY2VuZGluZycgOiAnZGVzY2VuZGluZycpIDogJ25vbmUnKSA6IG51bGxcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIiBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIiBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoIHwgcHhcIiA+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiIChjbGljayk9XCJoZWFkZXJDbGlja2VkKGNvbHVtbiwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImNvbHVtbi5zb3J0YWJsZSA/IGlkIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cIiFzb3J0QXNjID8gbGFiZWxzLnNvcnRBc2NlbmRpbmcgOiBsYWJlbHMuc29ydERlc2NlbmRpbmdcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtpZF09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtpZF09XCInY29sLScraWQrJy0nK2lcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbn1cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi1zb3J0LWljb25cIiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiPlxuICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeVwiIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeVwiIGNsYXNzPVwiZmFcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZmEtc29ydC1hc2MnOiBzb3J0QXNjLCAnZmEtc29ydC1kZXNjJzogIXNvcnRBc2N9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4ucmVzaXphYmxlXCIgY2xhc3M9XCJjb2x1bW4tcmVzaXplLWhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInJlc2l6ZUNvbHVtblN0YXJ0KCRldmVudCwgY29sdW1uLCB0aClcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1ufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLXNvcnQtaWNvblwiICpuZ0lmPVwiY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeVwiIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeVwiIGNsYXNzPVwiZmFcIlxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGluZGV4PWluZGV4XCIgY2xhc3M9XCJkYXRhLXRhYmxlLXJvdy13cmFwcGVyXCJcbiAgICAgICAgICAgICBkYXRhVGFibGVSb3cgI3JvdyBbaXRlbV09XCJpdGVtXCIgW2luZGV4XT1cImluZGV4XCIgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uUm93U2VsZWN0Q2hhbmdlZChyb3cpXCI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5ICpuZ0lmPVwiaXRlbUNvdW50ID09PSAwICYmIG5vRGF0YU1lc3NhZ2VcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImNvbHVtbkNvdW50XCI+e3sgbm9EYXRhTWVzc2FnZSB9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5IGNsYXNzPVwic3Vic3RpdHV0ZS1yb3dzXCIgKm5nSWY9XCJwYWdpbmF0aW9uICYmIHN1YnN0aXR1dGVSb3dzXCI+XG4gICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3Vic3RpdHV0ZUl0ZW1zLCBsZXQgaW5kZXggPSBpbmRleFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1vZGRdPVwiKGluZGV4ICsgaXRlbXMubGVuZ3RoKSAlIDIgPT09IDBcIlxuICAgICAgICAgIFtjbGFzcy5yb3ctZXZlbl09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFleHBhbmRDb2x1bW5WaXNpYmxlXCI+PC90ZD5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFpbmRleENvbHVtblZpc2libGVcIj4mbmJzcDs8L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIXNlbGVjdENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCI+XG4gICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgIDxkaXYgY2xhc3M9XCJidXN5XCIgKm5nSWY9XCJzaG93UmVsb2FkaW5nICYmIHJlbG9hZGluZ1wiPlxuICAgICAgPGk+PGkgY2xhc3M9XCJmYSBmYS1zcGluIGZhLWNvZyBmYS0yeFwiPjwvaT48L2k+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkYXRhLXRhYmxlLXBhZ2luYXRpb24gKm5nSWY9XCJwYWdpbmF0aW9uXCIgW2xpbWl0c109XCJwYWdlTGltaXRzXCI+PC9kYXRhLXRhYmxlLXBhZ2luYXRpb24+XG48L2Rpdj5cbiJdfQ==