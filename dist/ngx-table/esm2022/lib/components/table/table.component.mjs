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
function DataTableComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title, " table ");
} }
function DataTableComponent_data_table_header_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-header");
} }
function DataTableComponent_th_23_button_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 26);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const column_r3 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "col-" + ctx_r0.id + "-" + i_r5)("textContent", column_r3.header);
} }
function DataTableComponent_th_23_button_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const column_r3 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "col-" + ctx_r0.id + "-" + i_r5)("ngTemplateOutlet", column_r3.headerTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c1, column_r3));
} }
function DataTableComponent_th_23_button_3_span_3_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 29);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2, "Not Sorted");
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_23_button_3_span_3_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Sorted Ascending ");
} }
function DataTableComponent_th_23_button_3_span_3_Conditional_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Sorted Descending ");
} }
function DataTableComponent_th_23_button_3_span_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtemplate(2, DataTableComponent_th_23_button_3_span_3_Conditional_2_Conditional_2_Template, 1, 0)(3, DataTableComponent_th_23_button_3_span_3_Conditional_2_Conditional_3_Template, 1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c2, ctx_r0.sortAsc, !ctx_r0.sortAsc));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.sortAsc ? 2 : 3);
} }
function DataTableComponent_th_23_button_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtemplate(1, DataTableComponent_th_23_button_3_span_3_Conditional_1_Template, 3, 0)(2, DataTableComponent_th_23_button_3_span_3_Conditional_2_Template, 4, 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(column_r3.property !== ctx_r0.sortBy ? 1 : 2);
} }
function DataTableComponent_th_23_button_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵlistener("mousedown", function DataTableComponent_th_23_button_3_span_4_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r6); const column_r3 = i0.ɵɵnextContext(2).$implicit; const th_r7 = i0.ɵɵreference(1); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.resizeColumnStart($event, column_r3, th_r7)); });
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_23_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function DataTableComponent_th_23_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const column_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.headerClicked(column_r3, $event)); });
    i0.ɵɵtemplate(1, DataTableComponent_th_23_button_3_span_1_Template, 1, 2, "span", 22)(2, DataTableComponent_th_23_button_3_span_2_Template, 1, 5, "span", 23)(3, DataTableComponent_th_23_button_3_span_3_Template, 3, 1, "span", 24)(4, DataTableComponent_th_23_button_3_span_4_Template, 1, 0, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const column_r3 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.itemCount === 0);
    i0.ɵɵattribute("aria-controls", column_r3.sortable ? ctx_r0.id : null)("aria-labelledby", "col-" + ctx_r0.id + "-" + i_r5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !column_r3.headerTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r3.headerTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r3.sortable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r3.resizable);
} }
function DataTableComponent_th_23_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("textContent", column_r3.header);
} }
function DataTableComponent_th_23_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 35);
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", column_r3.headerTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, column_r3));
} }
function DataTableComponent_th_23_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵelement(1, "i", 36)(2, "i", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", column_r3.property === ctx_r0.sortBy);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", column_r3.property !== ctx_r0.sortBy)("ngClass", i0.ɵɵpureFunction2(3, _c2, ctx_r0.sortAsc, !ctx_r0.sortAsc));
} }
function DataTableComponent_th_23_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵlistener("mousedown", function DataTableComponent_th_23_span_4_span_4_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r8); const column_r3 = i0.ɵɵnextContext(2).$implicit; const th_r7 = i0.ɵɵreference(1); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.resizeColumnStart($event, column_r3, th_r7)); });
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_23_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, DataTableComponent_th_23_span_4_span_1_Template, 1, 1, "span", 33)(2, DataTableComponent_th_23_span_4_span_2_Template, 1, 4, "span", 34)(3, DataTableComponent_th_23_span_4_span_3_Template, 3, 6, "span", 24)(4, DataTableComponent_th_23_span_4_span_4_Template, 1, 0, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !column_r3.headerTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r3.headerTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r3.sortable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r3.resizable);
} }
function DataTableComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19, 0);
    i0.ɵɵpipe(2, "px");
    i0.ɵɵtemplate(3, DataTableComponent_th_23_button_3_Template, 5, 7, "button", 20)(4, DataTableComponent_th_23_span_4_Template, 5, 4, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", i0.ɵɵpipeBind1(2, 11, column_r3.width));
    i0.ɵɵclassProp("sortable", column_r3.sortable)("resizable", column_r3.resizable);
    i0.ɵɵproperty("hide", !column_r3.visible)("ngClass", column_r3.styleClassObject);
    i0.ɵɵattribute("aria-sort", column_r3.sortable ? column_r3.property === ctx_r0.sortBy ? ctx_r0.sortAsc ? "ascending" : "descending" : "none" : null);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", column_r3.sortable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !column_r3.sortable);
} }
function DataTableComponent_tbody_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 38, 1);
    i0.ɵɵlistener("selectedChange", function DataTableComponent_tbody_24_Template_tbody_selectedChange_0_listener() { i0.ɵɵrestoreView(_r9); const row_r10 = i0.ɵɵreference(1); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onRowSelectChanged(row_r10)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    i0.ɵɵproperty("item", item_r11)("index", index_r12);
} }
function DataTableComponent_tbody_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody")(1, "tr")(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("colspan", ctx_r0.columnCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.noDataMessage);
} }
function DataTableComponent_tbody_26_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 42);
} if (rf & 2) {
    const column_r13 = ctx.$implicit;
    i0.ɵɵproperty("hide", !column_r13.visible);
} }
function DataTableComponent_tbody_26_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 41);
    i0.ɵɵelement(1, "td", 42);
    i0.ɵɵelementStart(2, "td", 42);
    i0.ɵɵtext(3, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "td", 42);
    i0.ɵɵtemplate(5, DataTableComponent_tbody_26_tr_1_td_5_Template, 1, 1, "td", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r14 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("row-odd", (index_r14 + ctx_r0.items.length) % 2 === 0)("row-even", (index_r14 + ctx_r0.items.length) % 2 === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", !ctx_r0.expandColumnVisible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", !ctx_r0.indexColumnVisible);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hide", !ctx_r0.selectColumnVisible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.columns);
} }
function DataTableComponent_tbody_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 39);
    i0.ɵɵtemplate(1, DataTableComponent_tbody_26_tr_1_Template, 6, 8, "tr", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.substituteItems);
} }
function DataTableComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "i");
    i0.ɵɵelement(2, "i", 45);
    i0.ɵɵelementEnd()();
} }
function DataTableComponent_data_table_pagination_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-pagination", 46);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("limits", ctx_r0.pageLimits);
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
    get selectableItemCount() {
        if (this.selectVisibilityKey !== '' && this.items && this.items.length > 0) {
            return this._itemCount - this.items.filter(item => Boolean(item[this.selectVisibilityKey]) === true).length;
        }
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
        this.selectVisibilityKey = '';
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
        const item = this.items[row.index];
        const selectShouldBeHidden = this.selectVisibilityKey !== '' && item && Boolean(item[this.selectVisibilityKey]);
        if (this.multiSelect) {
            const index = this.selectedRows.indexOf(row);
            if (row.selected && index < 0 && !selectShouldBeHidden) {
                this.selectedRows.push(row);
            }
            else if ((!row.selected || selectShouldBeHidden) && index >= 0) {
                this.selectedRows.splice(index, 1);
            }
        }
        else {
            if (row.selected && !selectShouldBeHidden) {
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
        this.reloadNotification = loading ? this.labels.loadingText : this.labels.loadedText;
        if (loading) {
            this.paginationNotification = '';
            this.sortNotification = '';
        }
        else {
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
        } }, inputs: { wrapperClass: "wrapperClass", items: "items", itemCount: "itemCount", title: "title", showTitle: "showTitle", header: "header", pagination: "pagination", indexColumn: "indexColumn", indexColumnHeader: "indexColumnHeader", rowColors: "rowColors", rowTooltip: "rowTooltip", selectColumn: "selectColumn", selectVisibilityKey: "selectVisibilityKey", multiSelect: "multiSelect", substituteRows: "substituteRows", expandableRows: "expandableRows", labels: "labels", selectOnRowClick: "selectOnRowClick", autoReload: "autoReload", showReloading: "showReloading", noDataMessage: "noDataMessage", pageLimits: "pageLimits", primaryColumn: "primaryColumn", sortBy: "sortBy", sortAsc: "sortAsc", offset: "offset", limit: "limit", page: "page" }, outputs: { reload: "reload", rowClick: "rowClick", rowDoubleClick: "rowDoubleClick", headerClick: "headerClick", cellClick: "cellClick", selectedRowsChange: "selectedRowsChange", visibleColumnsChange: "visibleColumnsChange" }, decls: 29, vars: 27, consts: [["th", ""], ["row", ""], [1, "data-table-wrapper"], ["role", "status", "aria-live", "polite", "aria-atomic", "false", "aria-relevant", "text", 1, "sr-only"], [3, "textContent"], [4, "ngIf"], [1, "data-table-box"], ["tabindex", "-1", 1, "table", "data-table", 3, "id"], [1, "sr-only", 3, "textContent"], [1, "expand-column-header", 3, "hide"], ["scope", "col", 1, "index-column-header", 3, "hide"], [1, "select-column-header", 3, "hide"], [1, "sr-only", 3, "for"], ["type", "checkbox", 3, "ngModelChange", "id", "hide", "ngModel", "disabled", "title"], ["scope", "col", "class", "column-header", 3, "hide", "sortable", "resizable", "ngClass", "width", 4, "ngFor", "ngForOf"], ["class", "data-table-row-wrapper", "dataTableRow", "", 3, "item", "index", "selectedChange", 4, "ngFor", "ngForOf"], ["class", "substitute-rows", 4, "ngIf"], ["class", "busy", 4, "ngIf"], [3, "limits", 4, "ngIf"], ["scope", "col", 1, "column-header", 3, "hide", "ngClass"], [3, "disabled", "click", 4, "ngIf"], [3, "click", "disabled"], [3, "id", "textContent", 4, "ngIf"], [3, "id", "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "column-sort-icon", 4, "ngIf"], ["class", "column-resize-handle", 3, "mousedown", 4, "ngIf"], [3, "id", "textContent"], [3, "id", "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-sort-icon"], ["aria-hidden", "true", 1, "fa", "fa-sort", "column-sortable-icon"], [1, "sr-only"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"], [1, "column-resize-handle", 3, "mousedown"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "fa", "fa-sort", "column-sortable-icon", 3, "hide"], ["aria-hidden", "true", 1, "fa", 3, "hide", "ngClass"], ["dataTableRow", "", 1, "data-table-row-wrapper", 3, "selectedChange", "item", "index"], [1, "substitute-rows"], ["role", "presentation", 3, "row-odd", "row-even", 4, "ngFor", "ngForOf"], ["role", "presentation"], [3, "hide"], [3, "hide", 4, "ngFor", "ngForOf"], [1, "busy"], [1, "fa", "fa-spin", "fa-cog", "fa-2x"], [3, "limits"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "span", 3);
            i0.ɵɵtemplate(2, DataTableComponent_Conditional_2_Template, 1, 1);
            i0.ɵɵelement(3, "span", 4);
            i0.ɵɵtext(4, "\u00A0 ");
            i0.ɵɵelement(5, "span", 4);
            i0.ɵɵtext(6, "\u00A0 ");
            i0.ɵɵelement(7, "span", 4);
            i0.ɵɵtext(8, "\u00A0 ");
            i0.ɵɵelement(9, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, DataTableComponent_data_table_header_10_Template, 1, 0, "data-table-header", 5);
            i0.ɵɵelementStart(11, "div", 6)(12, "table", 7);
            i0.ɵɵelement(13, "caption", 8);
            i0.ɵɵelementStart(14, "thead")(15, "tr");
            i0.ɵɵelement(16, "td", 9);
            i0.ɵɵelementStart(17, "th", 10);
            i0.ɵɵelement(18, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "td", 11)(20, "label", 12);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "input", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function DataTableComponent_Template_input_ngModelChange_22_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectAllCheckbox, $event) || (ctx.selectAllCheckbox = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(23, DataTableComponent_th_23_Template, 5, 13, "th", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(24, DataTableComponent_tbody_24_Template, 2, 2, "tbody", 15)(25, DataTableComponent_tbody_25_Template, 4, 2, "tbody", 5)(26, DataTableComponent_tbody_26_Template, 2, 1, "tbody", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(27, DataTableComponent_div_27_Template, 3, 0, "div", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(28, DataTableComponent_data_table_pagination_28_Template, 1, 1, "data-table-pagination", 18);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.reloadNotification || ctx.paginationNotification || ctx.sortNotification || ctx.columnSelectorNotification ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("textContent", ctx.reloadNotification);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("textContent", ctx.paginationNotification);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("textContent", ctx.sortNotification);
            i0.ɵɵadvance(2);
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
            i0.ɵɵproperty("disabled", ctx.selectableItemCount === 0)("title", ctx.labels.selectAllRows);
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
        args: [{ selector: 'data-table', template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    @if (reloadNotification || paginationNotification || sortNotification || columnSelectorNotification) {\n      {{ this.title }} table\n    }\n    <span [textContent]=\"reloadNotification\"></span>&nbsp;\n    <span [textContent]=\"paginationNotification\"></span>&nbsp;\n    <span [textContent]=\"sortNotification\"></span>&nbsp;\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\" [class]=\"wrapperClass\">\n    <table class=\"table data-table\" [id]=\"id\" tabindex=\"-1\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <td [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <label [for]=\"id + '-select-all-column'\" class=\"sr-only\">\n            {{ labels.selectAllRows }}\n          </label>\n          <input\n            [id]=\"id + '-select-all-column'\"\n            [hide]=\"!multiSelect\"\n                 type=\"checkbox\"\n                 [(ngModel)]=\"selectAllCheckbox\"\n                 [disabled]=\"selectableItemCount === 0\"\n                 [title]=\"labels.selectAllRows\"/>\n        </td>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [id]=\"'col-'+id+'-'+i\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              @if (column.property !== sortBy) {\n                <i class=\"fa fa-sort column-sortable-icon\" aria-hidden=\"true\"></i>\n                <span class=\"sr-only\">Not Sorted</span>\n              } @else {\n                <i class=\"fa\" [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n                <span class=\"sr-only\">\n                  @if (sortAsc) {\n                    Sorted Ascending\n                  } @else {\n                    Sorted Descending\n                  }\n                </span>\n              }\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n", styles: [":host ::ng-deep .data-table.table>tbody+tbody{border-top:none}:host ::ng-deep .data-table.table td{vertical-align:middle}:host ::ng-deep .data-table>thead>tr>th,:host ::ng-deep .data-table>tbody>tr>td{overflow:hidden}:host ::ng-deep .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host ::ng-deep .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host ::ng-deep .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;inset:0;background-color:#00000040}.busy>i{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}\n"] }]
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
        }], selectVisibilityKey: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTyxTQUFTLEVBQ3RCLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsWUFBWSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7OztJQ3ZCNUUsWUFDRjs7O0lBREUsbURBQ0Y7OztJQU9GLG9DQUFzRDs7O0lBbUM1QywyQkFDMkM7Ozs7OztJQUFyQyxBQUQrQixvREFBc0IsaUNBQ3hCOzs7SUFDbkMsMkJBQzBEOzs7Ozs7SUFBcEQsQUFEcUQsQUFBdkIsb0RBQXNCLDhDQUEyQyxrRUFDbkQ7OztJQUc5Qyx3QkFBa0U7SUFDbEUsZ0NBQXNCO0lBQUEsMEJBQVU7SUFBQSxpQkFBTzs7O0lBS25DLGtDQUNGOzs7SUFDRSxt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QUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csbUJBQW1CO2tCQUEzQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFHSSxNQUFNO2tCQUFmLE1BQU07WUFHRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBQ0csa0JBQWtCO2tCQUEzQixNQUFNO1lBQ0csb0JBQW9CO2tCQUE3QixNQUFNO1lBbURILE1BQU07a0JBRFQsS0FBSztZQWFGLE9BQU87a0JBRFYsS0FBSztZQWFGLE1BQU07a0JBRFQsS0FBSztZQWFGLEtBQUs7a0JBRFIsS0FBSztZQVlGLElBQUk7a0JBRFAsS0FBSzs7a0ZBN0tLLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuLi9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYXJhbXMgfSBmcm9tICcuLi8uLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcbmltcG9ydCB7IFJvd0NhbGxiYWNrIH0gZnJvbSAnLi4vLi4vdHlwZXMvcm93LWNhbGxiYWNrLnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkZWZhdWx0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGVmYXVsdC10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkcmFnIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHJhZyc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudFwiO1xuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBEYXRhVGFibGVQYXJhbXMsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9pdGVtczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfaXRlbUNvdW50O1xuXG4gIEBJbnB1dCgpIHdyYXBwZXJDbGFzcztcblxuICBASW5wdXQoKVxuICBnZXQgaXRlbXMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIHNldCBpdGVtcyhpdGVtczogYW55W10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIC8vIG5vIG5lZWQgdG8gY2FsbCBub3RpZmllci5uZXh0KCkgYmVjYXVzZSBfb25SZWxvYWRGaW5pc2hlZCgpXG4gICAgLy8gd2lsbCBjaGFuZ2UgcmVsb2FkZWQgdmFsdWUgY2F1c2luZyBub3RpZmllci5uZXh0KCkgdG8gYmUgY2FsbGVkIGltcGxpY2l0bHkuXG4gICAgdGhpcy5fb25SZWxvYWRGaW5pc2hlZCgpO1xuICB9XG5cblxuICBASW5wdXQoKVxuICBnZXQgaXRlbUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1Db3VudDtcbiAgfVxuXG4gIGdldCBzZWxlY3RhYmxlSXRlbUNvdW50KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuc2VsZWN0VmlzaWJpbGl0eUtleSAhPT0gJycgJiYgdGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtQ291bnQgLSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IEJvb2xlYW4oaXRlbVt0aGlzLnNlbGVjdFZpc2liaWxpdHlLZXldKSA9PT0gdHJ1ZSkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faXRlbUNvdW50O1xuICB9XG5cbiAgc2V0IGl0ZW1Db3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbUNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBjb21wb25lbnRzOlxuICBAQ29udGVudENoaWxkcmVuKERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkgY29sdW1uczogUXVlcnlMaXN0PERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YVRhYmxlUm93Q29tcG9uZW50KSByb3dzOiBRdWVyeUxpc3Q8RGF0YVRhYmxlUm93Q29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkKERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsIHtzdGF0aWM6IGZhbHNlfSkgcGFnaW5hdG9yO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUV4cGFuZCcsIHsgc3RhdGljOiB0cnVlIH0pIGV4cGFuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vIE9uZS10aW1lIG9wdGlvbmFsIGJpbmRpbmdzIHdpdGggZGVmYXVsdCB2YWx1ZXM6XG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGhlYWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBpbmRleENvbHVtbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uSGVhZGVyID0gJyc7XG4gIEBJbnB1dCgpIHJvd0NvbG9yczogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHJvd1Rvb2x0aXA6IFJvd0NhbGxiYWNrO1xuICBASW5wdXQoKSBzZWxlY3RDb2x1bW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0VmlzaWJpbGl0eUtleSA9ICcnO1xuICBASW5wdXQoKSBtdWx0aVNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHN1YnN0aXR1dGVSb3dzID0gdHJ1ZTtcbiAgQElucHV0KCkgZXhwYW5kYWJsZVJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWxzOiBEYXRhVGFibGVUcmFuc2xhdGlvbnM7XG4gIEBJbnB1dCgpIHNlbGVjdE9uUm93Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b1JlbG9hZCA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dSZWxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9EYXRhTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlTGltaXRzOiBudW1iZXJbXSA9IFsxMCwgMjUsIDUwLCAxMDAsIDI1MF07XG4gIEBJbnB1dCgpIHByaW1hcnlDb2x1bW4gPSAnJztcblxuICAvLyByZWxvYWQgZW1pdHRlclxuICBAT3V0cHV0KCkgcmVsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGV2ZW50IGhhbmRsZXJzOlxuICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByb3dEb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhlYWRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2VsbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRSb3dzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmlzaWJsZUNvbHVtbnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIFVJIHN0YXRlIHdpdGhvdXQgaW5wdXQ6XG4gIGluZGV4Q29sdW1uVmlzaWJsZTogYm9vbGVhbjtcbiAgc2VsZWN0Q29sdW1uVmlzaWJsZTogYm9vbGVhbjtcbiAgZXhwYW5kQ29sdW1uVmlzaWJsZTogYm9vbGVhbjtcblxuICAvLyBhZGEgbm90aWZpY2F0aW9ucy5cbiAgcmVsb2FkTm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIHBhZ2luYXRpb25Ob3RpZmljYXRpb246IHN0cmluZztcbiAgc29ydE5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvbjogc3RyaW5nO1xuXG4gIF9kaXNwbGF5UGFyYW1zID0gPERhdGFUYWJsZVBhcmFtcz57fTsgLy8gcGFyYW1zIG9mIHRoZSBsYXN0IGZpbmlzaGVkIHJlbG9hZFxuXG4gIHN1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBzdWJqZWN0JDogU3Vic2NyaXB0aW9uO1xuXG4gIG5vdGlmaWVyID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgbm90aWZpZXIkOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gc2VsZWN0aW9uOlxuICBzZWxlY3RlZFJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50O1xuICBzZWxlY3RlZFJvd3M6IERhdGFUYWJsZVJvd0NvbXBvbmVudFtdID0gW107XG5cbiAgTWF0aDogYW55O1xuICBpZCA9IGBkYXRhdGFibGUtJHtuZXh0SWQrK31gO1xuXG4gIC8vIHNlbGVjdCBhbGwgY2hlY2tib3ggZmxhZ1xuICBwcml2YXRlIF9zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuXG4gIC8vIGNvbHVtbiByZXNpemluZzpcbiAgcHJpdmF0ZSBfcmVzaXplSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gIHJlc2l6ZUxpbWl0ID0gMzA7XG5cbiAgLy8gUmVsb2FkaW5nOlxuICBfcmVsb2FkaW5nID0gZmFsc2U7XG5cbiAgZ2V0IHJlbG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVsb2FkaW5nO1xuICB9XG5cbiAgc2V0IHJlbG9hZGluZyh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZWxvYWRpbmcgPSB2YWw7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBzdGF0ZTogdmlzaWJsZSBnZXQvc2V0IGZvciB0aGUgb3V0c2lkZSB3aXRoIEBJbnB1dCBmb3Igb25lLXRpbWUgaW5pdGlhbCB2YWx1ZXNcbiAgcHJpdmF0ZSBfc29ydEJ5OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRCeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zb3J0Qnk7XG4gIH1cblxuICBzZXQgc29ydEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3J0QnkgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc29ydEFzYyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRBc2MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRBc2M7XG4gIH1cblxuICBzZXQgc29ydEFzYyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRBc2MgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb2Zmc2V0ID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgb2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgfVxuXG4gIHNldCBvZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9saW1pdCA9IDEwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9saW1pdDtcbiAgfVxuXG4gIHNldCBsaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGltaXQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlZCBwcm9wZXJ0eTpcbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUNvdW50ICE9PSAwID8gTWF0aC5mbG9vcih0aGlzLm9mZnNldCAvIHRoaXMubGltaXQpICsgMSA6IDA7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gKHZhbHVlIC0gMSkgKiB0aGlzLmxpbWl0O1xuICB9XG5cbiAgZ2V0IGxhc3RQYWdlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KTtcbiAgfVxuXG4gIC8vIHNldHRpbmcgbXVsdGlwbGUgb2JzZXJ2YWJsZSBwcm9wZXJ0aWVzIHNpbXVsdGFuZW91c2x5XG4gIHNvcnQoc29ydEJ5OiBzdHJpbmcsIGFzYzogYm9vbGVhbikge1xuICAgIHRoaXMuc29ydEJ5ID0gc29ydEJ5O1xuICAgIHRoaXMuc29ydEFzYyA9IGFzYztcbiAgfVxuXG4gIC8vIGluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5faW5pdERlZmF1bHRWYWx1ZXMoKTtcbiAgICB0aGlzLl9pbml0RGVmYXVsdENsaWNrRXZlbnRzKCk7XG4gICAgdGhpcy5fdXBkYXRlRGlzcGxheVBhcmFtcygpO1xuXG4gICAgaWYgKHRoaXMucGFnZUxpbWl0cy5pbmRleE9mKHRoaXMubGltaXQpIDwgMCkge1xuICAgICAgdGhpcy5saW1pdCA9IHRoaXMucGFnZUxpbWl0c1swXTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVscyA9IHsuLi5kZWZhdWx0VHJhbnNsYXRpb25zLCAuLi50aGlzLmxhYmVsc307XG5cbiAgICBpZiAodGhpcy5hdXRvUmVsb2FkKSB7XG4gICAgICB0aGlzLnJlbG9hZEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZmllciQgPSB0aGlzLm5vdGlmaWVyLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9ub3RpZnkoKSk7XG4gICAgdGhpcy5zdWJqZWN0JCA9IHRoaXMuc3ViamVjdC5waXBlKGRlYm91bmNlVGltZSgxMDApKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWxvYWRJdGVtcygpKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERlZmF1bHRWYWx1ZXMoKSB7XG4gICAgdGhpcy5pbmRleENvbHVtblZpc2libGUgPSB0aGlzLmluZGV4Q29sdW1uO1xuICAgIHRoaXMuc2VsZWN0Q29sdW1uVmlzaWJsZSA9IHRoaXMuc2VsZWN0Q29sdW1uO1xuICAgIHRoaXMuZXhwYW5kQ29sdW1uVmlzaWJsZSA9IHRoaXMuZXhwYW5kYWJsZVJvd3M7XG4gIH1cblxuICBwcml2YXRlIF9pbml0RGVmYXVsdENsaWNrRXZlbnRzKCkge1xuICAgIHRoaXMuaGVhZGVyQ2xpY2suc3Vic2NyaWJlKFxuICAgICAgKHRhYmxlRXZlbnQ6IHsgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCB9KSA9PiB0aGlzLnNvcnRDb2x1bW4odGFibGVFdmVudC5jb2x1bW4pKTtcbiAgICBpZiAodGhpcy5zZWxlY3RPblJvd0NsaWNrKSB7XG4gICAgICB0aGlzLnJvd0NsaWNrLnN1YnNjcmliZShcbiAgICAgICAgKHRhYmxlRXZlbnQ6IHsgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCB9KSA9PiB0YWJsZUV2ZW50LnJvdy5zZWxlY3RlZCA9ICF0YWJsZUV2ZW50LnJvdy5zZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgcmVsb2FkSXRlbXMoKSB7XG4gICAgdGhpcy5yZWxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMucmVsb2FkLmVtaXQodGhpcy5fZ2V0UmVtb3RlUGFyYW1ldGVycygpKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUmVsb2FkRmluaXNoZWQoKSB7XG4gICAgaWYgKHRoaXMucmVsb2FkaW5nKSB7XG4gICAgICB0aGlzLl91cGRhdGVEaXNwbGF5UGFyYW1zKCk7XG4gICAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzcGxheVBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVBhcmFtcztcbiAgfVxuXG4gIF91cGRhdGVEaXNwbGF5UGFyYW1zKCkge1xuICAgIHRoaXMuX2Rpc3BsYXlQYXJhbXMgPSB7XG4gICAgICBzb3J0Qnk6IHRoaXMuc29ydEJ5LFxuICAgICAgc29ydEFzYzogdGhpcy5zb3J0QXNjLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHVibGljIHJvd0NsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93Q2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIHJvd0RvdWJsZUNsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93RG91YmxlQ2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIGhlYWRlckNsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCkge1xuICAgIGlmICghdGhpcy5fcmVzaXplSW5Qcm9ncmVzcykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5oZWFkZXJDbGljay5lbWl0KHtjb2x1bW4sIGV2ZW50fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTsgLy8gdGhpcyBpcyBiZWNhdXNlIEkgY2FuJ3QgcHJldmVudCBjbGljayBmcm9tIG1vdXN1cCBvZiB0aGUgZHJhZyBlbmRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmNlbGxDbGljay5lbWl0KHtyb3csIGNvbHVtbiwgZXZlbnR9KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uczpcbiAgcHJpdmF0ZSBfZ2V0UmVtb3RlUGFyYW1ldGVycygpOiBEYXRhVGFibGVQYXJhbXMge1xuICAgIGNvbnN0IHBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307XG5cbiAgICBpZiAodGhpcy5zb3J0QnkpIHtcbiAgICAgIHBhcmFtcy5zb3J0QnkgPSB0aGlzLnNvcnRCeTtcbiAgICAgIHBhcmFtcy5zb3J0QXNjID0gdGhpcy5zb3J0QXNjO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBwYXJhbXMub2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICBwYXJhbXMubGltaXQgPSB0aGlzLmxpbWl0O1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29sdW1uKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSB7XG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSkge1xuXG4gICAgICBjb25zdCBhc2NlbmRpbmcgPSB0aGlzLnNvcnRCeSA9PT0gY29sdW1uLnByb3BlcnR5ID8gIXRoaXMuc29ydEFzYyA6IHRydWU7XG5cbiAgICAgIGlmKGNvbHVtbi5wcm9wZXJ0eSA9PT0gdGhpcy5zb3J0QnkgJiYgICEgdGhpcy5zb3J0QXNjKSB7XG4gICAgICAgIHRoaXMuc29ydCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc29ydChjb2x1bW4ucHJvcGVydHksIGFzY2VuZGluZyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbHVtbkNvdW50KCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgKz0gdGhpcy5pbmRleENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIGNvdW50ICs9IGNvbHVtbi52aXNpYmxlID8gMSA6IDA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgcHVibGljIGdldFJvd0NvbG9yKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQpIHtcbiAgICBpZiAodGhpcy5yb3dDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Um93Q2FsbGJhY2s+dGhpcy5yb3dDb2xvcnMpKGl0ZW0sIHJvdywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RBbGxDaGVja2JveCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3g7XG4gIH1cblxuICBzZXQgc2VsZWN0QWxsQ2hlY2tib3godmFsdWUpIHtcbiAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IHZhbHVlO1xuICAgIHRoaXMuX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9vblNlbGVjdEFsbENoYW5nZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJvd3MudG9BcnJheSgpLmZvckVhY2gocm93ID0+IHJvdy5zZWxlY3RlZCA9IHZhbHVlKTtcbiAgICB0aGlzLnNlbGVjdGVkUm93c0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0Q2hhbmdlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuXG4gICAgLy8gbWFpbnRhaW4gdGhlIHNlbGVjdGVkUm93KHMpIHZpZXdcbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tyb3cuaW5kZXhdO1xuICAgIGNvbnN0IHNlbGVjdFNob3VsZEJlSGlkZGVuID0gdGhpcy5zZWxlY3RWaXNpYmlsaXR5S2V5ICE9PSAnJyAmJiBpdGVtICYmIEJvb2xlYW4oaXRlbVt0aGlzLnNlbGVjdFZpc2liaWxpdHlLZXldKTtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdyk7XG4gICAgICBpZiAocm93LnNlbGVjdGVkICYmIGluZGV4IDwgMCAmJiAhc2VsZWN0U2hvdWxkQmVIaWRkZW4pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MucHVzaChyb3cpO1xuICAgICAgfSBlbHNlIGlmICgoIXJvdy5zZWxlY3RlZCB8fCBzZWxlY3RTaG91bGRCZUhpZGRlbikgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocm93LnNlbGVjdGVkICYmICFzZWxlY3RTaG91bGRCZUhpZGRlbikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUm93ID09PSByb3cpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRSb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdW5zZWxlY3QgYWxsIG90aGVyIHJvd3M6XG4gICAgaWYgKHJvdy5zZWxlY3RlZCAmJiAhdGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5yb3dzLnRvQXJyYXkoKS5maWx0ZXIocm93XyA9PiByb3dfLnNlbGVjdGVkKS5mb3JFYWNoKHJvd18gPT4ge1xuICAgICAgICBpZiAocm93XyAhPT0gcm93KSB7IC8vIGF2b2lkIGVuZGxlc3MgbG9vcFxuICAgICAgICAgIHJvd18uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkUm93cyk7XG4gIH1cblxuICAvLyBvdGhlcjpcblxuICBnZXQgc3Vic3RpdHV0ZUl0ZW1zKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMuZGlzcGxheVBhcmFtcy5saW1pdCAtIHRoaXMuaXRlbXMubGVuZ3RofSk7XG4gIH1cblxuICBwdWJsaWMgcmVzaXplQ29sdW1uU3RhcnQoZXZlbnQ6IE1vdXNlRXZlbnQsIGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBjb2x1bW5FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIGxldCBzdGFydE9mZnNldCA9IGNvbHVtbkVsZW1lbnQub2Zmc2V0V2lkdGggLSBldmVudC5wYWdlWDtcbiAgICBkcmFnKGV2ZW50LCB7XG4gICAgICBtb3ZlOiAobW92ZUV2ZW50OiBNb3VzZUV2ZW50LCBkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Jlc2l6ZUluTGltaXQoY29sdW1uRWxlbWVudCwgZHgpKSB7XG4gICAgICAgICAgY29sdW1uLndpZHRoID0gc3RhcnRPZmZzZXQgKyBtb3ZlRXZlbnQucGFnZVggKyBkeDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50OiBIVE1MRWxlbWVudCwgZHg6IG51bWJlcikge1xuICAgIC8qIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgQ1NTIG1pbi13aWR0aCBkaWRuJ3Qgd29yayBvbiB0YWJsZS1sYXlvdXQ6IGZpeGVkLlxuICAgICAgICAgV2l0aG91dCB0aGUgbGltaXRzLCByZXNpemluZyBjYW4gbWFrZSB0aGUgbmV4dCBjb2x1bW4gZGlzYXBwZWFyIGNvbXBsZXRlbHksXG4gICAgICAgICBhbmQgZXZlbiBpbmNyZWFzZSB0aGUgdGFibGUgd2lkdGguIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHN1ZmZlcnMgZnJvbSB0aGUgZmFjdCxcbiAgICAgICAgIHRoYXQgb2Zmc2V0V2lkdGggc29tZXRpbWVzIGNvbnRhaW5zIG91dC1vZi1kYXRlIHZhbHVlcy4gKi9cbiAgICBpZiAoKGR4IDwgMCAmJiAoY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSB8fFxuICAgICAgIWNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nIHx8IC8vIHJlc2l6aW5nIGRvZXNuJ3QgbWFrZSBzZW5zZSBmb3IgdGhlIGxhc3QgdmlzaWJsZSBjb2x1bW5cbiAgICAgIChkeCA+PSAwICYmICgoPEhUTUxFbGVtZW50PmNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmltYXJ5Q29sdW1uID09PSAnJykge1xuICAgICAgdGhpcy5wcmltYXJ5Q29sdW1uID0gKHRoaXMuY29sdW1ucy5maXJzdCBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpLnByb3BlcnR5O1xuICAgIH1cbiAgfVxuXG4gIF9ub3RpZnkoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMucmVsb2FkaW5nO1xuXG4gICAgdGhpcy5yZWxvYWROb3RpZmljYXRpb24gPSBsb2FkaW5nID8gdGhpcy5sYWJlbHMubG9hZGluZ1RleHQ6IHRoaXMubGFiZWxzLmxvYWRlZFRleHQ7XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uTm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB0aGlzLnNvcnROb3RpZmljYXRpb24gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25Ob3RpZmljYXRpb24gPSB0aGlzLmxhYmVscy5wYWdpbmF0aW9uVGV4dFxuICAgICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCAnJyArIChNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KSAhPT0gMCA/IHRoaXMub2Zmc2V0ICsgMSA6ICcwJykpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCAnJyArIChNYXRoLm1pbih0aGlzLm9mZnNldCArIHRoaXMubGltaXQsIHRoaXMuaXRlbUNvdW50KSkpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCAnJyArIHRoaXMuaXRlbUNvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc29ydEJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5maW5kKGNvbHVtbiA9PiBjb2x1bW4ucHJvcGVydHkgPT09IHRoaXMuc29ydEJ5KSBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICh0aGlzLnNvcnRBc2MgPyB0aGlzLmxhYmVscy5zb3J0ZWRBc2NlbmRpbmcgOiB0aGlzLmxhYmVscy5zb3J0ZWREZXNjZW5kaW5nKVxuICAgICAgICAgIC5yZXBsYWNlKCd7aGVhZGVyfScsIGNvbC5oZWFkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZpZXIkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLXdyYXBwZXJcIj5cbiAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtYXRvbWljPVwiZmFsc2VcIiBhcmlhLXJlbGV2YW50PVwidGV4dFwiPlxuICAgIEBpZiAocmVsb2FkTm90aWZpY2F0aW9uIHx8IHBhZ2luYXRpb25Ob3RpZmljYXRpb24gfHwgc29ydE5vdGlmaWNhdGlvbiB8fCBjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvbikge1xuICAgICAge3sgdGhpcy50aXRsZSB9fSB0YWJsZVxuICAgIH1cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwicmVsb2FkTm90aWZpY2F0aW9uXCI+PC9zcGFuPiZuYnNwO1xuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJwYWdpbmF0aW9uTm90aWZpY2F0aW9uXCI+PC9zcGFuPiZuYnNwO1xuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3J0Tm90aWZpY2F0aW9uXCI+PC9zcGFuPiZuYnNwO1xuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuXG4gIDxkYXRhLXRhYmxlLWhlYWRlciAqbmdJZj1cImhlYWRlclwiPjwvZGF0YS10YWJsZS1oZWFkZXI+XG5cbiAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtYm94XCIgW2NsYXNzXT1cIndyYXBwZXJDbGFzc1wiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGRhdGEtdGFibGVcIiBbaWRdPVwiaWRcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICA8Y2FwdGlvbiBjbGFzcz1cInNyLW9ubHlcIiBbdGV4dENvbnRlbnRdPVwidGl0bGVcIj48L2NhcHRpb24+XG4gICAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhZXhwYW5kQ29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiZXhwYW5kLWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiaW5kZXgtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJpbmRleENvbHVtbkhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFzZWxlY3RDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJzZWxlY3QtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICAgIDxsYWJlbCBbZm9yXT1cImlkICsgJy1zZWxlY3QtYWxsLWNvbHVtbidcIiBjbGFzcz1cInNyLW9ubHlcIj5cbiAgICAgICAgICAgIHt7IGxhYmVscy5zZWxlY3RBbGxSb3dzIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIFtpZF09XCJpZCArICctc2VsZWN0LWFsbC1jb2x1bW4nXCJcbiAgICAgICAgICAgIFtoaWRlXT1cIiFtdWx0aVNlbGVjdFwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0QWxsQ2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwic2VsZWN0YWJsZUl0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgIFt0aXRsZV09XCJsYWJlbHMuc2VsZWN0QWxsUm93c1wiLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1ucywgaW5kZXggYXMgaVwiICN0aFxuICAgICAgICAgICAgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCJcbiAgICAgICAgICAgIFtjbGFzcy5zb3J0YWJsZV09XCJjb2x1bW4uc29ydGFibGVcIlxuICAgICAgICAgICAgW2NsYXNzLnJlc2l6YWJsZV09XCJjb2x1bW4ucmVzaXphYmxlXCJcbiAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtc29ydF09XCJjb2x1bW4uc29ydGFibGUgPyAoY29sdW1uLnByb3BlcnR5ID09PSBzb3J0QnkgPyAoc29ydEFzYyA/ICdhc2NlbmRpbmcnIDogJ2Rlc2NlbmRpbmcnKSA6ICdub25lJykgOiBudWxsXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCIgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCIgW3N0eWxlLndpZHRoXT1cImNvbHVtbi53aWR0aCB8IHB4XCIgPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIiAoY2xpY2spPVwiaGVhZGVyQ2xpY2tlZChjb2x1bW4sICRldmVudClcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJjb2x1bW4uc29ydGFibGUgPyBpZCA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiJ2NvbC0nK2lkKyctJytpXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbaWRdPVwiJ2NvbC0nK2lkKyctJytpXCJcbiAgICAgICAgICAgICAgICAgIFt0ZXh0Q29udGVudF09XCJjb2x1bW4uaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbaWRdPVwiJ2NvbC0nK2lkKyctJytpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4tc29ydC1pY29uXCIgKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgICAgQGlmIChjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeSkge1xuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ob3QgU29ydGVkPC9zcGFuPlxuICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhXCIgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICAgICAgICBAaWYgKHNvcnRBc2MpIHtcbiAgICAgICAgICAgICAgICAgICAgU29ydGVkIEFzY2VuZGluZ1xuICAgICAgICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFNvcnRlZCBEZXNjZW5kaW5nXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbdGV4dENvbnRlbnRdPVwiY29sdW1uLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4tc29ydC1pY29uXCIgKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5XCIgY2xhc3M9XCJmYSBmYS1zb3J0IGNvbHVtbi1zb3J0YWJsZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSAhPT0gc29ydEJ5XCIgY2xhc3M9XCJmYVwiXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ZhLXNvcnQtYXNjJzogc29ydEFzYywgJ2ZhLXNvcnQtZGVzYyc6ICFzb3J0QXNjfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLnJlc2l6YWJsZVwiIGNsYXNzPVwiY29sdW1uLXJlc2l6ZS1oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJyZXNpemVDb2x1bW5TdGFydCgkZXZlbnQsIGNvbHVtbiwgdGgpXCI+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXg9aW5kZXhcIiBjbGFzcz1cImRhdGEtdGFibGUtcm93LXdyYXBwZXJcIlxuICAgICAgICAgICAgIGRhdGFUYWJsZVJvdyAjcm93IFtpdGVtXT1cIml0ZW1cIiBbaW5kZXhdPVwiaW5kZXhcIiAoc2VsZWN0ZWRDaGFuZ2UpPVwib25Sb3dTZWxlY3RDaGFuZ2VkKHJvdylcIj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgKm5nSWY9XCJpdGVtQ291bnQgPT09IDAgJiYgbm9EYXRhTWVzc2FnZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sdW1uQ291bnRcIj57eyBub0RhdGFNZXNzYWdlIH19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgY2xhc3M9XCJzdWJzdGl0dXRlLXJvd3NcIiAqbmdJZj1cInBhZ2luYXRpb24gJiYgc3Vic3RpdHV0ZVJvd3NcIj5cbiAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdWJzdGl0dXRlSXRlbXMsIGxldCBpbmRleCA9IGluZGV4XCJcbiAgICAgICAgICBbY2xhc3Mucm93LW9kZF09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1ldmVuXT1cIihpbmRleCArIGl0ZW1zLmxlbmd0aCkgJSAyID09PSAxXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWV4cGFuZENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiPiZuYnNwOzwvdGQ+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhc2VsZWN0Q29sdW1uVmlzaWJsZVwiPjwvdGQ+XG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIj5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGRpdiBjbGFzcz1cImJ1c3lcIiAqbmdJZj1cInNob3dSZWxvYWRpbmcgJiYgcmVsb2FkaW5nXCI+XG4gICAgICA8aT48aSBjbGFzcz1cImZhIGZhLXNwaW4gZmEtY29nIGZhLTJ4XCI+PC9pPjwvaT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRhdGEtdGFibGUtcGFnaW5hdGlvbiAqbmdJZj1cInBhZ2luYXRpb25cIiBbbGltaXRzXT1cInBhZ2VMaW1pdHNcIj48L2RhdGEtdGFibGUtcGFnaW5hdGlvbj5cbjwvZGl2PlxuIl19