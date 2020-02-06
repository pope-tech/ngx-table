import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { DataTableColumnDirective } from '../../directives/column/column.directive';
import { DataTableRowComponent } from '../row/row.component';
import { defaultTranslations } from '../../types/default-translations.type';
import { drag } from '../../utils/drag';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
const _c0 = ["dataTableExpand"];
function DataTableComponent_data_table_header_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-header");
} }
function DataTableComponent_th_17_button_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 24);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const i_r8 = ctx_r16.index;
    const column_r7 = ctx_r16.$implicit;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "col-" + ctx_r12.id + "-" + i_r8)("textContent", column_r7.header);
} }
const _c1 = function (a0) { return { column: a0 }; };
function DataTableComponent_th_17_button_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 25);
} if (rf & 2) {
    const column_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", column_r7.headerTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, column_r7));
} }
const _c2 = function (a0, a1) { return { "fa-sort-asc": a0, "fa-sort-desc": a1 }; };
function DataTableComponent_th_17_button_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵelement(2, "i", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hide", column_r7.property === ctx_r14.sortBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hide", column_r7.property !== ctx_r14.sortBy)("ngClass", i0.ɵɵpureFunction2(3, _c2, ctx_r14.sortAsc, !ctx_r14.sortAsc));
} }
function DataTableComponent_th_17_button_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵlistener("mousedown", function DataTableComponent_th_17_button_3_span_4_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r20); const column_r7 = i0.ɵɵnextContext(2).$implicit; const _r9 = i0.ɵɵreference(1); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.resizeColumnStart($event, column_r7, _r9); });
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_17_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function DataTableComponent_th_17_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r24); const column_r7 = i0.ɵɵnextContext().$implicit; const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.headerClicked(column_r7, $event); });
    i0.ɵɵtemplate(1, DataTableComponent_th_17_button_3_span_1_Template, 1, 2, "span", 20);
    i0.ɵɵtemplate(2, DataTableComponent_th_17_button_3_span_2_Template, 1, 4, "span", 21);
    i0.ɵɵtemplate(3, DataTableComponent_th_17_button_3_span_3_Template, 3, 6, "span", 22);
    i0.ɵɵtemplate(4, DataTableComponent_th_17_button_3_span_4_Template, 1, 0, "span", 23);
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
function DataTableComponent_th_17_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const column_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("textContent", column_r7.header);
} }
function DataTableComponent_th_17_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 25);
} if (rf & 2) {
    const column_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", column_r7.headerTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, column_r7));
} }
function DataTableComponent_th_17_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵelement(2, "i", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r28 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hide", column_r7.property === ctx_r28.sortBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hide", column_r7.property !== ctx_r28.sortBy)("ngClass", i0.ɵɵpureFunction2(3, _c2, ctx_r28.sortAsc, !ctx_r28.sortAsc));
} }
function DataTableComponent_th_17_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵlistener("mousedown", function DataTableComponent_th_17_span_4_span_4_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r34); const column_r7 = i0.ɵɵnextContext(2).$implicit; const _r9 = i0.ɵɵreference(1); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.resizeColumnStart($event, column_r7, _r9); });
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_17_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, DataTableComponent_th_17_span_4_span_1_Template, 1, 1, "span", 30);
    i0.ɵɵtemplate(2, DataTableComponent_th_17_span_4_span_2_Template, 1, 4, "span", 21);
    i0.ɵɵtemplate(3, DataTableComponent_th_17_span_4_span_3_Template, 3, 6, "span", 22);
    i0.ɵɵtemplate(4, DataTableComponent_th_17_span_4_span_4_Template, 1, 0, "span", 23);
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
function DataTableComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16, 17);
    i0.ɵɵpipe(2, "px");
    i0.ɵɵtemplate(3, DataTableComponent_th_17_button_3_Template, 5, 8, "button", 18);
    i0.ɵɵtemplate(4, DataTableComponent_th_17_span_4_Template, 5, 4, "span", 3);
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
function DataTableComponent_tbody_18_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 31, 32);
    i0.ɵɵlistener("selectedChange", function DataTableComponent_tbody_18_Template_tbody_selectedChange_0_listener($event) { i0.ɵɵrestoreView(_r41); const _r39 = i0.ɵɵreference(1); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.onRowSelectChanged(_r39); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const index_r38 = ctx.index;
    i0.ɵɵproperty("item", item_r37)("index", index_r38);
} }
function DataTableComponent_tbody_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵelementStart(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("colspan", ctx_r3.columnCount);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.noDataMessage);
} }
function DataTableComponent_tbody_20_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 36);
} if (rf & 2) {
    const column_r46 = ctx.$implicit;
    i0.ɵɵproperty("hide", !column_r46.visible);
} }
function DataTableComponent_tbody_20_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 35);
    i0.ɵɵelement(1, "td", 36);
    i0.ɵɵelementStart(2, "td", 36);
    i0.ɵɵtext(3, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "td", 36);
    i0.ɵɵtemplate(5, DataTableComponent_tbody_20_tr_1_td_5_Template, 1, 1, "td", 37);
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
function DataTableComponent_tbody_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 33);
    i0.ɵɵtemplate(1, DataTableComponent_tbody_20_tr_1_Template, 6, 8, "tr", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.substituteItems);
} }
function DataTableComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵelement(2, "i", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function DataTableComponent_data_table_pagination_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-pagination", 40);
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
        this.labels = Object.assign(Object.assign({}, defaultTranslations), this.labels);
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
DataTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataTableComponent, selectors: [["data-table"]], contentQueries: function DataTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵstaticContentQuery(dirIndex, _c0, true);
        i0.ɵɵcontentQuery(dirIndex, DataTableColumnDirective, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.expandTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columns = _t);
    } }, viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(DataTableRowComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rows = _t);
    } }, inputs: { wrapperClass: "wrapperClass", items: "items", itemCount: "itemCount", title: "title", showTitle: "showTitle", header: "header", pagination: "pagination", indexColumn: "indexColumn", indexColumnHeader: "indexColumnHeader", rowColors: "rowColors", rowTooltip: "rowTooltip", selectColumn: "selectColumn", multiSelect: "multiSelect", substituteRows: "substituteRows", expandableRows: "expandableRows", labels: "labels", selectOnRowClick: "selectOnRowClick", autoReload: "autoReload", showReloading: "showReloading", noDataMessage: "noDataMessage", pageLimits: "pageLimits", primaryColumn: "primaryColumn", sortBy: "sortBy", sortAsc: "sortAsc", offset: "offset", limit: "limit", page: "page" }, outputs: { reload: "reload", rowClick: "rowClick", rowDoubleClick: "rowDoubleClick", headerClick: "headerClick", cellClick: "cellClick", selectedRowsChange: "selectedRowsChange", visibleColumnsChange: "visibleColumnsChange" }, decls: 23, vars: 24, consts: [[1, "data-table-wrapper"], ["role", "status", "aria-live", "polite", "aria-atomic", "false", "aria-relevant", "text", 1, "sr-only"], [3, "textContent"], [4, "ngIf"], [1, "data-table-box"], [1, "table", "data-table", 3, "id"], [1, "sr-only", 3, "textContent"], [1, "expand-column-header", 3, "hide"], ["scope", "col", 1, "index-column-header", 3, "hide"], [1, "select-column-header", 3, "hide"], ["type", "checkbox", 3, "hide", "ngModel", "disabled", "title", "ngModelChange"], ["scope", "col", "class", "column-header", 3, "hide", "sortable", "resizable", "ngClass", "width", 4, "ngFor", "ngForOf"], ["class", "data-table-row-wrapper", "dataTableRow", "", 3, "item", "index", "selectedChange", 4, "ngFor", "ngForOf"], ["class", "substitute-rows", 4, "ngIf"], ["class", "busy", 4, "ngIf"], [3, "limits", 4, "ngIf"], ["scope", "col", 1, "column-header", 3, "hide", "ngClass"], ["th", ""], [3, "disabled", "title", "click", 4, "ngIf"], [3, "disabled", "title", "click"], [3, "id", "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "column-sort-icon", 4, "ngIf"], ["class", "column-resize-handle", 3, "mousedown", 4, "ngIf"], [3, "id", "textContent"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-sort-icon"], ["aria-hidden", "true", 1, "fa", "fa-sort", "column-sortable-icon", 3, "hide"], ["aria-hidden", "true", 1, "fa", 3, "hide", "ngClass"], [1, "column-resize-handle", 3, "mousedown"], [3, "textContent", 4, "ngIf"], ["dataTableRow", "", 1, "data-table-row-wrapper", 3, "item", "index", "selectedChange"], ["row", ""], [1, "substitute-rows"], ["role", "presentation", 3, "row-odd", "row-even", 4, "ngFor", "ngForOf"], ["role", "presentation"], [3, "hide"], [3, "hide", 4, "ngFor", "ngForOf"], [1, "busy"], [1, "fa", "fa-spin", "fa-cog", "fa-2x"], [3, "limits"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵelement(3, "span", 2);
        i0.ɵɵelement(4, "span", 2);
        i0.ɵɵelement(5, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, DataTableComponent_data_table_header_6_Template, 1, 0, "data-table-header", 3);
        i0.ɵɵelementStart(7, "div", 4);
        i0.ɵɵelementStart(8, "table", 5);
        i0.ɵɵelement(9, "caption", 6);
        i0.ɵɵelementStart(10, "thead");
        i0.ɵɵelementStart(11, "tr");
        i0.ɵɵelement(12, "td", 7);
        i0.ɵɵelementStart(13, "th", 8);
        i0.ɵɵelement(14, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "td", 9);
        i0.ɵɵelementStart(16, "input", 10);
        i0.ɵɵlistener("ngModelChange", function DataTableComponent_Template_input_ngModelChange_16_listener($event) { return ctx.selectAllCheckbox = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, DataTableComponent_th_17_Template, 5, 13, "th", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, DataTableComponent_tbody_18_Template, 2, 2, "tbody", 12);
        i0.ɵɵtemplate(19, DataTableComponent_tbody_19_Template, 4, 2, "tbody", 3);
        i0.ɵɵtemplate(20, DataTableComponent_tbody_20_Template, 2, 1, "tbody", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(21, DataTableComponent_div_21_Template, 3, 0, "div", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(22, DataTableComponent_data_table_pagination_22_Template, 1, 1, "data-table-pagination", 15);
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
        i0.ɵɵproperty("hide", !ctx.multiSelect)("ngModel", ctx.selectAllCheckbox)("disabled", ctx.itemCount === 0)("title", ctx.labels.selectAllRows);
        i0.ɵɵattribute("aria-label", ctx.labels.selectAllRows);
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
    } }, styles: ["[_nghost-%COMP%]     .data-table.table>tbody+tbody{border-top:none}[_nghost-%COMP%]     .data-table.table td{vertical-align:middle}[_nghost-%COMP%]     .data-table>tbody>tr>td, [_nghost-%COMP%]     .data-table>thead>tr>th{overflow:hidden}[_nghost-%COMP%]     .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}[_nghost-%COMP%]     .row-odd{background-color:#f6f6f6}.data-table[_ngcontent-%COMP%]   .substitute-rows[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]     .data-table .data-table-row:hover{background-color:#ececec}.data-table[_ngcontent-%COMP%]{box-shadow:0 0 15px #ececec}.column-header[_ngcontent-%COMP%]{position:relative}.expand-column-header[_ngcontent-%COMP%]{width:50px}.select-column-header[_ngcontent-%COMP%]{width:50px;text-align:center}.index-column-header[_ngcontent-%COMP%]{width:40px}.column-header.sortable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-left:8px}.column-header.resizable[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-right:8px}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]   .column-sortable-icon[_ngcontent-%COMP%]{color:#d3d3d3}.column-header[_ngcontent-%COMP%]   .column-resize-handle[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box[_ngcontent-%COMP%]{position:relative}.busy[_ngcontent-%COMP%]{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTableComponent, [{
        type: Component,
        args: [{
                selector: 'data-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.css']
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsWUFBWSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7Ozs7SUNqQmpELG9DQUFzRDs7O0lBZ0M1QywyQkFDMkM7Ozs7OztJQUROLHFEQUFzQixpQ0FBQTs7OztJQUUzRCwyQkFDMEQ7OztJQUR0QiwyREFBMEMsa0VBQUE7Ozs7SUFFOUUsZ0NBQ0U7SUFBQSx3QkFDeUI7SUFDekIsd0JBQ3dGO0lBQzFGLGlCQUFPOzs7O0lBSkYsZUFBbUM7SUFBbkMsNERBQW1DO0lBRW5DLGVBQW1DO0lBQW5DLDREQUFtQywwRUFBQTs7OztJQUd4QyxnQ0FDaUU7SUFBM0Qsa1VBQW1EO0lBQUMsaUJBQU87Ozs7SUFoQm5FLGtDQUtFO0lBTDhCLDRRQUF1QztJQUtyRSxxRkFDb0M7SUFDcEMscUZBQ21EO0lBQ25ELHFGQUNFO0lBS0YscUZBQzBEO0lBQzVELGlCQUFTOzs7Ozs7SUFmRCxrREFBNEIsMEZBQUE7SUFENUIsdUVBQWtELHFEQUFBO0lBSWxELGVBQThCO0lBQTlCLGdEQUE4QjtJQUU5QixlQUE2QjtJQUE3QiwrQ0FBNkI7SUFFSixlQUF1QjtJQUF2Qix5Q0FBdUI7SUFNaEQsZUFBd0I7SUFBeEIsMENBQXdCOzs7SUFJOUIsMEJBQzJDOzs7SUFBckMsOENBQTZCOzs7SUFDbkMsMkJBQzBEOzs7SUFEdEIsMkRBQTBDLGtFQUFBOzs7SUFFOUUsZ0NBQ0c7SUFBQSx3QkFDMEI7SUFDMUIsd0JBQ3lGO0lBQzVGLGlCQUFPOzs7O0lBSkQsZUFBbUM7SUFBbkMsNERBQW1DO0lBRW5DLGVBQW1DO0lBQW5DLDREQUFtQywwRUFBQTs7OztJQUd6QyxnQ0FDaUU7SUFBM0QsZ1VBQW1EO0lBQUMsaUJBQU87OztJQVpuRSw0QkFDRTtJQUFBLG1GQUNvQztJQUNwQyxtRkFDbUQ7SUFDbkQsbUZBQ0c7SUFLSCxtRkFDMEQ7SUFDNUQsaUJBQU87OztJQVpDLGVBQThCO0lBQTlCLGdEQUE4QjtJQUU5QixlQUE2QjtJQUE3QiwrQ0FBNkI7SUFFSixlQUF1QjtJQUF2Qix5Q0FBdUI7SUFNaEQsZUFBd0I7SUFBeEIsMENBQXdCOzs7SUFwQ2xDLGtDQU9FOztJQUFBLGdGQUtFO0lBYUYsMkVBQ0U7SUFhSixpQkFBSzs7OztJQWpDeUQsK0RBQWlDO0lBSjNGLDhDQUFrQyxrQ0FBQTtJQURsQyx5Q0FBd0IsdUNBQUE7SUFJeEIsb0pBQTBIO0lBRXBILGVBQXVCO0lBQXZCLHlDQUF1QjtJQWtCekIsZUFBd0I7SUFBeEIsMENBQXdCOzs7O0lBaUJsQyxxQ0FFUTtJQUQrQywrUEFBMEM7SUFDakcsaUJBQVE7Ozs7SUFEaUIsK0JBQWEsb0JBQUE7OztJQUV0Qyw2QkFDRTtJQUFBLDBCQUNFO0lBQUEsMEJBQWlDO0lBQUEsWUFBbUI7SUFBQSxpQkFBSztJQUMzRCxpQkFBSztJQUNQLGlCQUFROzs7SUFGQSxlQUE0QjtJQUE1Qiw2Q0FBNEI7SUFBQyxlQUFtQjtJQUFuQiwwQ0FBbUI7OztJQVV0RCx5QkFDRzs7O0lBRGdDLDBDQUF3Qjs7O0lBTjdELDhCQUdFO0lBQUEseUJBQXVDO0lBQ3ZDLDhCQUFpQztJQUFBLHNCQUFNO0lBQUEsaUJBQUs7SUFDNUMseUJBQXVDO0lBQ3ZDLGdGQUNGO0lBUEEsaUJBR0U7Ozs7SUFGRSx1RUFBa0QsMERBQUE7SUFFaEQsZUFBNkI7SUFBN0IsbURBQTZCO0lBQzdCLGVBQTRCO0lBQTVCLGtEQUE0QjtJQUM1QixlQUE2QjtJQUE3QixtREFBNkI7SUFDN0IsZUFBOEI7SUFBOUIseUNBQThCOzs7SUFQcEMsaUNBQ0E7SUFBQSwyRUFHRTtJQUtGLGlCQUFROzs7SUFSSixlQUF1RDtJQUF2RCxnREFBdUQ7OztJQVU3RCwrQkFDRTtJQUFBLHlCQUFHO0lBQUEsd0JBQXVDO0lBQUEsaUJBQUk7SUFDaEQsaUJBQU07OztJQUdSLDRDQUF3Rjs7O0lBQTlDLDBDQUFxQjs7QURuRWpFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQU9mLE1BQU0sT0FBTyxrQkFBa0I7SUFtUDdCO1FBalBRLFdBQU0sR0FBVSxFQUFFLENBQUM7UUFpQzNCLGtEQUFrRDtRQUN6QyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFHdkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRTVCLGlCQUFpQjtRQUNQLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRDLGtCQUFrQjtRQUNSLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4Qyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBWXBELG1CQUFjLEdBQW9CLEVBQUUsQ0FBQyxDQUFDLHFDQUFxQztRQUUzRSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUc5QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUsvQixpQkFBWSxHQUE0QixFQUFFLENBQUM7UUFHM0MsT0FBRSxHQUFHLGFBQWEsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUU3QiwyQkFBMkI7UUFDbkIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRW5DLG1CQUFtQjtRQUNYLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUVsQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVqQixhQUFhO1FBQ2IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQXdCWCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBWWhCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFZWixXQUFNLEdBQUcsRUFBRSxDQUFDO0lBK0ZwQixDQUFDO0lBN09ELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQiw4REFBOEQ7UUFDOUQsOEVBQThFO1FBQzlFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBMkVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxTQUFTLENBQUMsR0FBWTtRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFLRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBSUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUlELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFJRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsdUJBQXVCO0lBQ3ZCLElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELElBQUksQ0FBQyxNQUFjLEVBQUUsR0FBWTtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTztJQUNQLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUU1QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLE1BQU0sbUNBQU8sbUJBQW1CLEdBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBRTNGLENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDakQsQ0FBQztJQUVPLHVCQUF1QjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDeEIsQ0FBQyxVQUE4RCxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQixDQUFDLFVBQXdELEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNySDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBS00sVUFBVSxDQUFDLEdBQTBCLEVBQUUsS0FBWTtRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxHQUEwQixFQUFFLEtBQVk7UUFDOUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sYUFBYSxDQUFDLE1BQWdDLEVBQUUsS0FBWTtRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDLG9FQUFvRTtTQUNyRztJQUNILENBQUM7SUFFTyxXQUFXLENBQUMsTUFBZ0MsRUFBRSxHQUEwQixFQUFFLEtBQWlCO1FBQ2pHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxhQUFhO0lBQ0wsb0JBQW9CO1FBQzFCLE1BQU0sTUFBTSxHQUFvQixFQUFFLENBQUM7UUFFbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMvQjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDNUIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLFVBQVUsQ0FBQyxNQUFnQztRQUNqRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFFbkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUV6RSxJQUFHLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLE1BQU0sSUFBSyxDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzQixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sV0FBVyxDQUFDLElBQVMsRUFBRSxLQUFhLEVBQUUsR0FBMEI7UUFDckUsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxPQUFxQixJQUFJLENBQUMsU0FBVSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksaUJBQWlCLENBQUMsS0FBSztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sbUJBQW1CLENBQUMsS0FBYztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGtCQUFrQixDQUFDLEdBQTBCO1FBRTNDLG1DQUFtQztRQUNuQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsSUFBSSxHQUFHLENBQUMsUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO2lCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNwQztTQUNGO2FBQU07WUFDTCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2FBQ3hCO2lCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxHQUFHLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN6QjtTQUNGO1FBRUQsMkJBQTJCO1FBQzNCLElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvRCxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRSxxQkFBcUI7b0JBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsU0FBUztJQUVULElBQUksZUFBZTtRQUNqQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxLQUFpQixFQUFFLE1BQWdDLEVBQUUsYUFBMEI7UUFDdEcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksRUFBRSxDQUFDLFNBQXFCLEVBQUUsRUFBVSxFQUFFLEVBQUU7Z0JBQzFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDNUMsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7aUJBQ25EO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxhQUEwQixFQUFFLEVBQVU7UUFDN0Q7Ozt1RUFHK0Q7UUFDL0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDbEUsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLElBQUksMERBQTBEO1lBQy9GLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFlLGFBQWEsQ0FBQyxrQkFBbUIsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JHLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBa0MsQ0FBQyxRQUFRLENBQUM7U0FDaEY7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztxQkFDckQsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUM5RixPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3FCQUMxRSxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQzthQUNsQztZQUNELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQzNELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUE2QixDQUFDO2dCQUMvRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDaEcsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO3FCQUM5QixPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2FBQzVCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDOztvRkF6YVUsa0JBQWtCO3VEQUFsQixrQkFBa0I7O29DQStCWix3QkFBd0I7Ozs7Ozt1QkFDM0IscUJBQXFCOzs7OztRQ2xFckMsOEJBQ0U7UUFBQSwrQkFDRTtRQUFBLDBCQUFnRDtRQUNoRCwwQkFBb0Q7UUFDcEQsMEJBQThDO1FBQzlDLDBCQUF3RDtRQUMxRCxpQkFBTztRQUVQLCtGQUFrQztRQUVsQyw4QkFDRTtRQUFBLGdDQUNFO1FBQUEsNkJBQXlEO1FBQ3pELDhCQUNBO1FBQUEsMkJBQ0U7UUFBQSx5QkFDSztRQUNMLDhCQUNFO1FBQUEsMkJBQStDO1FBQ2pELGlCQUFLO1FBQ0wsOEJBQ0U7UUFBQSxrQ0FNRjtRQUpTLHVKQUErQjtRQUZ0QyxpQkFNRjtRQUFBLGlCQUFLO1FBQ0wscUVBT0U7UUFpQ0osaUJBQUs7UUFDTCxpQkFBUTtRQUNSLDBFQUVBO1FBQ0EseUVBQ0U7UUFJRiwwRUFDQTtRQVNGLGlCQUFRO1FBQ1Isc0VBQ0U7UUFFSixpQkFBTTtRQUVOLDBHQUFnRTtRQUNsRSxpQkFBTTs7UUE3RkksZUFBa0M7UUFBbEMsb0RBQWtDO1FBQ2xDLGVBQXNDO1FBQXRDLHdEQUFzQztRQUN0QyxlQUFnQztRQUFoQyxrREFBZ0M7UUFDaEMsZUFBMEM7UUFBMUMsNERBQTBDO1FBRy9CLGVBQWM7UUFBZCxpQ0FBYztRQUVMLGVBQXNCO1FBQXRCLCtCQUFzQjtRQUNoQixlQUFTO1FBQVQsMkJBQVM7UUFDZCxlQUFxQjtRQUFyQix1Q0FBcUI7UUFHeEMsZUFBNkI7UUFBN0IsK0NBQTZCO1FBRWpCLGVBQTRCO1FBQTVCLDhDQUE0QjtRQUNwQyxlQUFpQztRQUFqQyxtREFBaUM7UUFFckMsZUFBNkI7UUFBN0IsK0NBQTZCO1FBQ3hCLGVBQXFCO1FBQXJCLHVDQUFxQixrQ0FBQSxpQ0FBQSxtQ0FBQTtRQUtyQixzREFBd0M7UUFFN0MsZUFBMEM7UUFBMUMscUNBQTBDO1FBMEN6QyxlQUEyQztRQUEzQyxtQ0FBMkM7UUFHM0MsZUFBd0M7UUFBeEMsK0RBQXdDO1FBS2hCLGVBQW9DO1FBQXBDLDJEQUFvQztRQVduRCxlQUFrQztRQUFsQyx5REFBa0M7UUFLL0IsZUFBa0I7UUFBbEIscUNBQWtCOztrREQ1RDlCLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDOztrQkFNRSxLQUFLOztrQkFFTCxLQUFLOztrQkFhTCxLQUFLOztrQkFXTCxlQUFlO21CQUFDLHdCQUF3Qjs7a0JBQ3hDLFlBQVk7bUJBQUMscUJBQXFCOztrQkFDbEMsWUFBWTttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUdoRCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFHTCxNQUFNOztrQkFHTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFrRE4sS0FBSzs7a0JBWUwsS0FBSzs7a0JBWUwsS0FBSzs7a0JBWUwsS0FBSzs7a0JBV0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG5pbXBvcnQgeyBSb3dDYWxsYmFjayB9IGZyb20gJy4uLy4uL3R5cGVzL3Jvdy1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZGVmYXVsdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RlZmF1bHQtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZHJhZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RyYWcnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIERhdGFUYWJsZVBhcmFtcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9pdGVtQ291bnQ7XG5cbiAgQElucHV0KCkgd3JhcHBlckNsYXNzO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgLy8gbm8gbmVlZCB0byBjYWxsIG5vdGlmaWVyLm5leHQoKSBiZWNhdXNlIF9vblJlbG9hZEZpbmlzaGVkKClcbiAgICAvLyB3aWxsIGNoYW5nZSByZWxvYWRlZCB2YWx1ZSBjYXVzaW5nIG5vdGlmaWVyLm5leHQoKSB0byBiZSBjYWxsZWQgaW1wbGljaXRseS5cbiAgICB0aGlzLl9vblJlbG9hZEZpbmlzaGVkKCk7XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbUNvdW50O1xuICB9XG5cbiAgc2V0IGl0ZW1Db3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbUNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBjb21wb25lbnRzOlxuICBAQ29udGVudENoaWxkcmVuKERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkgY29sdW1uczogUXVlcnlMaXN0PERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YVRhYmxlUm93Q29tcG9uZW50KSByb3dzOiBRdWVyeUxpc3Q8RGF0YVRhYmxlUm93Q29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlRXhwYW5kJywgeyBzdGF0aWM6IHRydWUgfSkgZXhwYW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gT25lLXRpbWUgb3B0aW9uYWwgYmluZGluZ3Mgd2l0aCBkZWZhdWx0IHZhbHVlczpcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgaGVhZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5kZXhDb2x1bW5IZWFkZXIgPSAnJztcbiAgQElucHV0KCkgcm93Q29sb3JzOiBSb3dDYWxsYmFjaztcbiAgQElucHV0KCkgcm93VG9vbHRpcDogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHNlbGVjdENvbHVtbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtdWx0aVNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHN1YnN0aXR1dGVSb3dzID0gdHJ1ZTtcbiAgQElucHV0KCkgZXhwYW5kYWJsZVJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWxzOiBEYXRhVGFibGVUcmFuc2xhdGlvbnM7XG4gIEBJbnB1dCgpIHNlbGVjdE9uUm93Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b1JlbG9hZCA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dSZWxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9EYXRhTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlTGltaXRzOiBudW1iZXJbXSA9IFsxMCwgMjUsIDUwLCAxMDAsIDI1MF07XG4gIEBJbnB1dCgpIHByaW1hcnlDb2x1bW4gPSAnJztcblxuICAvLyByZWxvYWQgZW1pdHRlclxuICBAT3V0cHV0KCkgcmVsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGV2ZW50IGhhbmRsZXJzOlxuICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByb3dEb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhlYWRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2VsbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRSb3dzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmlzaWJsZUNvbHVtbnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIFVJIHN0YXRlIHdpdGhvdXQgaW5wdXQ6XG4gIGluZGV4Q29sdW1uVmlzaWJsZTogYm9vbGVhbjtcbiAgc2VsZWN0Q29sdW1uVmlzaWJsZTogYm9vbGVhbjtcbiAgZXhwYW5kQ29sdW1uVmlzaWJsZTogYm9vbGVhbjtcblxuICAvLyBhZGEgbm90aWZpY2F0aW9ucy5cbiAgcmVsb2FkTm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIHBhZ2luYXRpb25Ob3RpZmljYXRpb246IHN0cmluZztcbiAgc29ydE5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvbjogc3RyaW5nO1xuXG4gIF9kaXNwbGF5UGFyYW1zID0gPERhdGFUYWJsZVBhcmFtcz57fTsgLy8gcGFyYW1zIG9mIHRoZSBsYXN0IGZpbmlzaGVkIHJlbG9hZFxuXG4gIHN1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBzdWJqZWN0JDogU3Vic2NyaXB0aW9uO1xuXG4gIG5vdGlmaWVyID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgbm90aWZpZXIkOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gc2VsZWN0aW9uOlxuICBzZWxlY3RlZFJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50O1xuICBzZWxlY3RlZFJvd3M6IERhdGFUYWJsZVJvd0NvbXBvbmVudFtdID0gW107XG5cbiAgTWF0aDogYW55O1xuICBpZCA9IGBkYXRhdGFibGUtJHtuZXh0SWQrK31gO1xuXG4gIC8vIHNlbGVjdCBhbGwgY2hlY2tib3ggZmxhZ1xuICBwcml2YXRlIF9zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuXG4gIC8vIGNvbHVtbiByZXNpemluZzpcbiAgcHJpdmF0ZSBfcmVzaXplSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gIHJlc2l6ZUxpbWl0ID0gMzA7XG5cbiAgLy8gUmVsb2FkaW5nOlxuICBfcmVsb2FkaW5nID0gZmFsc2U7XG5cbiAgZ2V0IHJlbG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVsb2FkaW5nO1xuICB9XG5cbiAgc2V0IHJlbG9hZGluZyh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZWxvYWRpbmcgPSB2YWw7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBzdGF0ZTogdmlzaWJsZSBnZXQvc2V0IGZvciB0aGUgb3V0c2lkZSB3aXRoIEBJbnB1dCBmb3Igb25lLXRpbWUgaW5pdGlhbCB2YWx1ZXNcbiAgcHJpdmF0ZSBfc29ydEJ5OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRCeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zb3J0Qnk7XG4gIH1cblxuICBzZXQgc29ydEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3J0QnkgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc29ydEFzYyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRBc2MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRBc2M7XG4gIH1cblxuICBzZXQgc29ydEFzYyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRBc2MgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb2Zmc2V0ID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgb2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgfVxuXG4gIHNldCBvZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9saW1pdCA9IDEwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9saW1pdDtcbiAgfVxuXG4gIHNldCBsaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGltaXQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlZCBwcm9wZXJ0eTpcbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUNvdW50ICE9PSAwID8gTWF0aC5mbG9vcih0aGlzLm9mZnNldCAvIHRoaXMubGltaXQpICsgMSA6IDA7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gKHZhbHVlIC0gMSkgKiB0aGlzLmxpbWl0O1xuICB9XG5cbiAgZ2V0IGxhc3RQYWdlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KTtcbiAgfVxuXG4gIC8vIHNldHRpbmcgbXVsdGlwbGUgb2JzZXJ2YWJsZSBwcm9wZXJ0aWVzIHNpbXVsdGFuZW91c2x5XG4gIHNvcnQoc29ydEJ5OiBzdHJpbmcsIGFzYzogYm9vbGVhbikge1xuICAgIHRoaXMuc29ydEJ5ID0gc29ydEJ5O1xuICAgIHRoaXMuc29ydEFzYyA9IGFzYztcbiAgfVxuXG4gIC8vIGluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5faW5pdERlZmF1bHRWYWx1ZXMoKTtcbiAgICB0aGlzLl9pbml0RGVmYXVsdENsaWNrRXZlbnRzKCk7XG4gICAgdGhpcy5fdXBkYXRlRGlzcGxheVBhcmFtcygpO1xuXG4gICAgaWYgKHRoaXMucGFnZUxpbWl0cy5pbmRleE9mKHRoaXMubGltaXQpIDwgMCkge1xuICAgICAgdGhpcy5saW1pdCA9IHRoaXMucGFnZUxpbWl0c1swXTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVscyA9IHsuLi5kZWZhdWx0VHJhbnNsYXRpb25zLCAuLi50aGlzLmxhYmVsc307XG5cbiAgICBpZiAodGhpcy5hdXRvUmVsb2FkKSB7XG4gICAgICB0aGlzLnJlbG9hZEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZmllciQgPSB0aGlzLm5vdGlmaWVyLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9ub3RpZnkoKSk7XG4gICAgdGhpcy5zdWJqZWN0JCA9IHRoaXMuc3ViamVjdC5waXBlKGRlYm91bmNlVGltZSgxMDApKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWxvYWRJdGVtcygpKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERlZmF1bHRWYWx1ZXMoKSB7XG4gICAgdGhpcy5pbmRleENvbHVtblZpc2libGUgPSB0aGlzLmluZGV4Q29sdW1uO1xuICAgIHRoaXMuc2VsZWN0Q29sdW1uVmlzaWJsZSA9IHRoaXMuc2VsZWN0Q29sdW1uO1xuICAgIHRoaXMuZXhwYW5kQ29sdW1uVmlzaWJsZSA9IHRoaXMuZXhwYW5kYWJsZVJvd3M7XG4gIH1cblxuICBwcml2YXRlIF9pbml0RGVmYXVsdENsaWNrRXZlbnRzKCkge1xuICAgIHRoaXMuaGVhZGVyQ2xpY2suc3Vic2NyaWJlKFxuICAgICAgKHRhYmxlRXZlbnQ6IHsgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCB9KSA9PiB0aGlzLnNvcnRDb2x1bW4odGFibGVFdmVudC5jb2x1bW4pKTtcbiAgICBpZiAodGhpcy5zZWxlY3RPblJvd0NsaWNrKSB7XG4gICAgICB0aGlzLnJvd0NsaWNrLnN1YnNjcmliZShcbiAgICAgICAgKHRhYmxlRXZlbnQ6IHsgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCB9KSA9PiB0YWJsZUV2ZW50LnJvdy5zZWxlY3RlZCA9ICF0YWJsZUV2ZW50LnJvdy5zZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgcmVsb2FkSXRlbXMoKSB7XG4gICAgdGhpcy5yZWxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMucmVsb2FkLmVtaXQodGhpcy5fZ2V0UmVtb3RlUGFyYW1ldGVycygpKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUmVsb2FkRmluaXNoZWQoKSB7XG4gICAgaWYgKHRoaXMucmVsb2FkaW5nKSB7XG4gICAgICB0aGlzLl91cGRhdGVEaXNwbGF5UGFyYW1zKCk7XG4gICAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzcGxheVBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVBhcmFtcztcbiAgfVxuXG4gIF91cGRhdGVEaXNwbGF5UGFyYW1zKCkge1xuICAgIHRoaXMuX2Rpc3BsYXlQYXJhbXMgPSB7XG4gICAgICBzb3J0Qnk6IHRoaXMuc29ydEJ5LFxuICAgICAgc29ydEFzYzogdGhpcy5zb3J0QXNjLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHVibGljIHJvd0NsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93Q2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIHJvd0RvdWJsZUNsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93RG91YmxlQ2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIGhlYWRlckNsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCkge1xuICAgIGlmICghdGhpcy5fcmVzaXplSW5Qcm9ncmVzcykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5oZWFkZXJDbGljay5lbWl0KHtjb2x1bW4sIGV2ZW50fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTsgLy8gdGhpcyBpcyBiZWNhdXNlIEkgY2FuJ3QgcHJldmVudCBjbGljayBmcm9tIG1vdXN1cCBvZiB0aGUgZHJhZyBlbmRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmNlbGxDbGljay5lbWl0KHtyb3csIGNvbHVtbiwgZXZlbnR9KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uczpcbiAgcHJpdmF0ZSBfZ2V0UmVtb3RlUGFyYW1ldGVycygpOiBEYXRhVGFibGVQYXJhbXMge1xuICAgIGNvbnN0IHBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307XG5cbiAgICBpZiAodGhpcy5zb3J0QnkpIHtcbiAgICAgIHBhcmFtcy5zb3J0QnkgPSB0aGlzLnNvcnRCeTtcbiAgICAgIHBhcmFtcy5zb3J0QXNjID0gdGhpcy5zb3J0QXNjO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBwYXJhbXMub2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICBwYXJhbXMubGltaXQgPSB0aGlzLmxpbWl0O1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29sdW1uKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSB7XG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSkge1xuXG4gICAgICBjb25zdCBhc2NlbmRpbmcgPSB0aGlzLnNvcnRCeSA9PT0gY29sdW1uLnByb3BlcnR5ID8gIXRoaXMuc29ydEFzYyA6IHRydWU7XG5cbiAgICAgIGlmKGNvbHVtbi5wcm9wZXJ0eSA9PT0gdGhpcy5zb3J0QnkgJiYgICEgdGhpcy5zb3J0QXNjKSB7XG4gICAgICAgIHRoaXMuc29ydCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc29ydChjb2x1bW4ucHJvcGVydHksIGFzY2VuZGluZyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbHVtbkNvdW50KCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgKz0gdGhpcy5pbmRleENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIGNvdW50ICs9IGNvbHVtbi52aXNpYmxlID8gMSA6IDA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgcHVibGljIGdldFJvd0NvbG9yKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQpIHtcbiAgICBpZiAodGhpcy5yb3dDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Um93Q2FsbGJhY2s+dGhpcy5yb3dDb2xvcnMpKGl0ZW0sIHJvdywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RBbGxDaGVja2JveCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3g7XG4gIH1cblxuICBzZXQgc2VsZWN0QWxsQ2hlY2tib3godmFsdWUpIHtcbiAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IHZhbHVlO1xuICAgIHRoaXMuX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9vblNlbGVjdEFsbENoYW5nZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJvd3MudG9BcnJheSgpLmZvckVhY2gocm93ID0+IHJvdy5zZWxlY3RlZCA9IHZhbHVlKTtcbiAgICB0aGlzLnNlbGVjdGVkUm93c0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0Q2hhbmdlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuXG4gICAgLy8gbWFpbnRhaW4gdGhlIHNlbGVjdGVkUm93KHMpIHZpZXdcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdyk7XG4gICAgICBpZiAocm93LnNlbGVjdGVkICYmIGluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICB9IGVsc2UgaWYgKCFyb3cuc2VsZWN0ZWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocm93LnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3cgPSByb3c7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRSb3cgPT09IHJvdykge1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFJvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1bnNlbGVjdCBhbGwgb3RoZXIgcm93czpcbiAgICBpZiAocm93LnNlbGVjdGVkICYmICF0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLnJvd3MudG9BcnJheSgpLmZpbHRlcihyb3dfID0+IHJvd18uc2VsZWN0ZWQpLmZvckVhY2gocm93XyA9PiB7XG4gICAgICAgIGlmIChyb3dfICE9PSByb3cpIHsgLy8gYXZvaWQgZW5kbGVzcyBsb29wXG4gICAgICAgICAgcm93Xy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkUm93c0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIC8vIG90aGVyOlxuXG4gIGdldCBzdWJzdGl0dXRlSXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogdGhpcy5kaXNwbGF5UGFyYW1zLmxpbWl0IC0gdGhpcy5pdGVtcy5sZW5ndGh9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydChldmVudDogTW91c2VFdmVudCwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fcmVzaXplSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0T2Zmc2V0ID0gY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCAtIGV2ZW50LnBhZ2VYO1xuICAgIGRyYWcoZXZlbnQsIHtcbiAgICAgIG1vdmU6IChtb3ZlRXZlbnQ6IE1vdXNlRXZlbnQsIGR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50LCBkeCkpIHtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBzdGFydE9mZnNldCArIG1vdmVFdmVudC5wYWdlWCArIGR4O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNSZXNpemVJbkxpbWl0KGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkeDogbnVtYmVyKSB7XG4gICAgLyogVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBDU1MgbWluLXdpZHRoIGRpZG4ndCB3b3JrIG9uIHRhYmxlLWxheW91dDogZml4ZWQuXG4gICAgICAgICBXaXRob3V0IHRoZSBsaW1pdHMsIHJlc2l6aW5nIGNhbiBtYWtlIHRoZSBuZXh0IGNvbHVtbiBkaXNhcHBlYXIgY29tcGxldGVseSxcbiAgICAgICAgIGFuZCBldmVuIGluY3JlYXNlIHRoZSB0YWJsZSB3aWR0aC4gVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gc3VmZmVycyBmcm9tIHRoZSBmYWN0LFxuICAgICAgICAgdGhhdCBvZmZzZXRXaWR0aCBzb21ldGltZXMgY29udGFpbnMgb3V0LW9mLWRhdGUgdmFsdWVzLiAqL1xuICAgIGlmICgoZHggPCAwICYmIChjb2x1bW5FbGVtZW50Lm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpIHx8XG4gICAgICAhY29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgLy8gcmVzaXppbmcgZG9lc24ndCBtYWtlIHNlbnNlIGZvciB0aGUgbGFzdCB2aXNpYmxlIGNvbHVtblxuICAgICAgKGR4ID49IDAgJiYgKCg8SFRNTEVsZW1lbnQ+Y29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByaW1hcnlDb2x1bW4gPT09ICcnKSB7XG4gICAgICB0aGlzLnByaW1hcnlDb2x1bW4gPSAodGhpcy5jb2x1bW5zLmZpcnN0IGFzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkucHJvcGVydHk7XG4gICAgfVxuICB9XG5cbiAgX25vdGlmeSgpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5yZWxvYWRpbmc7XG5cbiAgICB0aGlzLnJlbG9hZE5vdGlmaWNhdGlvbiA9IGxvYWRpbmcgP1xuICAgICAgdGhpcy5sYWJlbHMubG9hZGluZ1RleHQucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpIDpcbiAgICAgIHRoaXMubGFiZWxzLmxvYWRlZFRleHQucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpO1xuXG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9IHRoaXMubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsICcnICsgKE1hdGguY2VpbCh0aGlzLml0ZW1Db3VudCAvIHRoaXMubGltaXQpICE9PSAwID8gdGhpcy5vZmZzZXQgKyAxIDogJzAnKSlcbiAgICAgICAgICAucmVwbGFjZSgne3RvfScsICcnICsgKE1hdGgubWluKHRoaXMub2Zmc2V0ICsgdGhpcy5saW1pdCwgdGhpcy5pdGVtQ291bnQpKSlcbiAgICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsICcnICsgdGhpcy5pdGVtQ291bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uTm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zb3J0QnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZpbmQoY29sdW1uID0+IGNvbHVtbi5wcm9wZXJ0eSA9PT0gdGhpcy5zb3J0QnkpIGFzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZTtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gKHRoaXMuc29ydEFzYyA/IHRoaXMubGFiZWxzLnNvcnRlZEFzY2VuZGluZyA6IHRoaXMubGFiZWxzLnNvcnRlZERlc2NlbmRpbmcpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKVxuICAgICAgICAgIC5yZXBsYWNlKCd7aGVhZGVyfScsIGNvbC5oZWFkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZpZXIkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLXdyYXBwZXJcIj5cbiAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtYXRvbWljPVwiZmFsc2VcIiBhcmlhLXJlbGV2YW50PVwidGV4dFwiPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJyZWxvYWROb3RpZmljYXRpb25cIj48L3NwYW4+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cInBhZ2luYXRpb25Ob3RpZmljYXRpb25cIj48L3NwYW4+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cInNvcnROb3RpZmljYXRpb25cIj48L3NwYW4+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cImNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICA8L3NwYW4+XG5cbiAgPGRhdGEtdGFibGUtaGVhZGVyICpuZ0lmPVwiaGVhZGVyXCI+PC9kYXRhLXRhYmxlLWhlYWRlcj5cblxuICA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1ib3hcIiBbY2xhc3NdPVwid3JhcHBlckNsYXNzXCI+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgZGF0YS10YWJsZVwiIFtpZF09XCJpZFwiPlxuICAgICAgPGNhcHRpb24gY2xhc3M9XCJzci1vbmx5XCIgW3RleHRDb250ZW50XT1cInRpdGxlXCI+PC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWV4cGFuZENvbHVtblZpc2libGVcIiBjbGFzcz1cImV4cGFuZC1jb2x1bW4taGVhZGVyXCI+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiIFtoaWRlXT1cIiFpbmRleENvbHVtblZpc2libGVcIiBjbGFzcz1cImluZGV4LWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiaW5kZXhDb2x1bW5IZWFkZXJcIj48L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhc2VsZWN0Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwic2VsZWN0LWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgICA8aW5wdXQgW2hpZGVdPVwiIW11bHRpU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgICBbdGl0bGVdPVwibGFiZWxzLnNlbGVjdEFsbFJvd3NcIlxuICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVscy5zZWxlY3RBbGxSb3dzXCIvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zLCBpbmRleCBhcyBpXCIgI3RoXG4gICAgICAgICAgICBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIlxuICAgICAgICAgICAgW2NsYXNzLnNvcnRhYmxlXT1cImNvbHVtbi5zb3J0YWJsZVwiXG4gICAgICAgICAgICBbY2xhc3MucmVzaXphYmxlXT1cImNvbHVtbi5yZXNpemFibGVcIlxuICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1zb3J0XT1cImNvbHVtbi5zb3J0YWJsZSA/IChjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeSA/IChzb3J0QXNjID8gJ2FzY2VuZGluZycgOiAnZGVzY2VuZGluZycpIDogJ25vbmUnKSA6IG51bGxcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIiBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIiBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoIHwgcHhcIiA+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiIChjbGljayk9XCJoZWFkZXJDbGlja2VkKGNvbHVtbiwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImNvbHVtbi5zb3J0YWJsZSA/IGlkIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cIiFzb3J0QXNjID8gbGFiZWxzLnNvcnRBc2NlbmRpbmcgOiBsYWJlbHMuc29ydERlc2NlbmRpbmdcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtpZF09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1ufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLXNvcnQtaWNvblwiICpuZ0lmPVwiY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5XCIgY2xhc3M9XCJmYSBmYS1zb3J0IGNvbHVtbi1zb3J0YWJsZS1pY29uXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSAhPT0gc29ydEJ5XCIgY2xhc3M9XCJmYVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbdGV4dENvbnRlbnRdPVwiY29sdW1uLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4tc29ydC1pY29uXCIgKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5XCIgY2xhc3M9XCJmYSBmYS1zb3J0IGNvbHVtbi1zb3J0YWJsZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSAhPT0gc29ydEJ5XCIgY2xhc3M9XCJmYVwiXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ZhLXNvcnQtYXNjJzogc29ydEFzYywgJ2ZhLXNvcnQtZGVzYyc6ICFzb3J0QXNjfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLnJlc2l6YWJsZVwiIGNsYXNzPVwiY29sdW1uLXJlc2l6ZS1oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJyZXNpemVDb2x1bW5TdGFydCgkZXZlbnQsIGNvbHVtbiwgdGgpXCI+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXg9aW5kZXhcIiBjbGFzcz1cImRhdGEtdGFibGUtcm93LXdyYXBwZXJcIlxuICAgICAgICAgICAgIGRhdGFUYWJsZVJvdyAjcm93IFtpdGVtXT1cIml0ZW1cIiBbaW5kZXhdPVwiaW5kZXhcIiAoc2VsZWN0ZWRDaGFuZ2UpPVwib25Sb3dTZWxlY3RDaGFuZ2VkKHJvdylcIj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgKm5nSWY9XCJpdGVtQ291bnQgPT09IDAgJiYgbm9EYXRhTWVzc2FnZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sdW1uQ291bnRcIj57eyBub0RhdGFNZXNzYWdlIH19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgY2xhc3M9XCJzdWJzdGl0dXRlLXJvd3NcIiAqbmdJZj1cInBhZ2luYXRpb24gJiYgc3Vic3RpdHV0ZVJvd3NcIj5cbiAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdWJzdGl0dXRlSXRlbXMsIGxldCBpbmRleCA9IGluZGV4XCJcbiAgICAgICAgICBbY2xhc3Mucm93LW9kZF09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1ldmVuXT1cIihpbmRleCArIGl0ZW1zLmxlbmd0aCkgJSAyID09PSAxXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWV4cGFuZENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiPiZuYnNwOzwvdGQ+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhc2VsZWN0Q29sdW1uVmlzaWJsZVwiPjwvdGQ+XG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIj5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGRpdiBjbGFzcz1cImJ1c3lcIiAqbmdJZj1cInNob3dSZWxvYWRpbmcgJiYgcmVsb2FkaW5nXCI+XG4gICAgICA8aT48aSBjbGFzcz1cImZhIGZhLXNwaW4gZmEtY29nIGZhLTJ4XCI+PC9pPjwvaT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRhdGEtdGFibGUtcGFnaW5hdGlvbiAqbmdJZj1cInBhZ2luYXRpb25cIiBbbGltaXRzXT1cInBhZ2VMaW1pdHNcIj48L2RhdGEtdGFibGUtcGFnaW5hdGlvbj5cbjwvZGl2PlxuIl19