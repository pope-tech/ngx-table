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
const _c1 = a0 => ({ "sr-only": a0 });
const _c2 = a0 => ({ column: a0 });
const _c3 = (a0, a1) => ({ "fa-sort-asc": a0, "fa-sort-desc": a1 });
function DataTableComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title, " table ");
} }
function DataTableComponent_data_table_header_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-header");
} }
function DataTableComponent_th_24_button_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const column_r3 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "col-" + ctx_r0.id + "-" + i_r5)("textContent", column_r3.header);
} }
function DataTableComponent_th_24_button_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 28);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const column_r3 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "col-" + ctx_r0.id + "-" + i_r5)("ngTemplateOutlet", column_r3.headerTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c2, column_r3));
} }
function DataTableComponent_th_24_button_3_span_3_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 30);
    i0.ɵɵelementStart(1, "span", 31);
    i0.ɵɵtext(2, "Not Sorted");
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_24_button_3_span_3_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Sorted Ascending ");
} }
function DataTableComponent_th_24_button_3_span_3_Conditional_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Sorted Descending ");
} }
function DataTableComponent_th_24_button_3_span_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 32);
    i0.ɵɵelementStart(1, "span", 31);
    i0.ɵɵtemplate(2, DataTableComponent_th_24_button_3_span_3_Conditional_2_Conditional_2_Template, 1, 0)(3, DataTableComponent_th_24_button_3_span_3_Conditional_2_Conditional_3_Template, 1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c3, ctx_r0.sortAsc, !ctx_r0.sortAsc));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.sortAsc ? 2 : 3);
} }
function DataTableComponent_th_24_button_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtemplate(1, DataTableComponent_th_24_button_3_span_3_Conditional_1_Template, 3, 0)(2, DataTableComponent_th_24_button_3_span_3_Conditional_2_Template, 4, 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(column_r3.property !== ctx_r0.sortBy ? 1 : 2);
} }
function DataTableComponent_th_24_button_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("mousedown", function DataTableComponent_th_24_button_3_span_4_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r6); const column_r3 = i0.ɵɵnextContext(2).$implicit; const th_r7 = i0.ɵɵreference(1); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.resizeColumnStart($event, column_r3, th_r7)); });
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_24_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function DataTableComponent_th_24_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const column_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.headerClicked(column_r3, $event)); });
    i0.ɵɵtemplate(1, DataTableComponent_th_24_button_3_span_1_Template, 1, 2, "span", 23)(2, DataTableComponent_th_24_button_3_span_2_Template, 1, 5, "span", 24)(3, DataTableComponent_th_24_button_3_span_3_Template, 3, 1, "span", 25)(4, DataTableComponent_th_24_button_3_span_4_Template, 1, 0, "span", 26);
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
function DataTableComponent_th_24_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("textContent", column_r3.header);
} }
function DataTableComponent_th_24_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 36);
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", column_r3.headerTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, column_r3));
} }
function DataTableComponent_th_24_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵelement(1, "i", 37)(2, "i", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", column_r3.property === ctx_r0.sortBy);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hide", column_r3.property !== ctx_r0.sortBy)("ngClass", i0.ɵɵpureFunction2(3, _c3, ctx_r0.sortAsc, !ctx_r0.sortAsc));
} }
function DataTableComponent_th_24_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("mousedown", function DataTableComponent_th_24_span_4_span_4_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r8); const column_r3 = i0.ɵɵnextContext(2).$implicit; const th_r7 = i0.ɵɵreference(1); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.resizeColumnStart($event, column_r3, th_r7)); });
    i0.ɵɵelementEnd();
} }
function DataTableComponent_th_24_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, DataTableComponent_th_24_span_4_span_1_Template, 1, 1, "span", 34)(2, DataTableComponent_th_24_span_4_span_2_Template, 1, 4, "span", 35)(3, DataTableComponent_th_24_span_4_span_3_Template, 3, 6, "span", 25)(4, DataTableComponent_th_24_span_4_span_4_Template, 1, 0, "span", 26);
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
function DataTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 20, 0);
    i0.ɵɵpipe(2, "px");
    i0.ɵɵtemplate(3, DataTableComponent_th_24_button_3_Template, 5, 7, "button", 21)(4, DataTableComponent_th_24_span_4_Template, 5, 4, "span", 5);
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
function DataTableComponent_tbody_25_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 39, 1);
    i0.ɵɵlistener("selectedChange", function DataTableComponent_tbody_25_Template_tbody_selectedChange_0_listener() { i0.ɵɵrestoreView(_r9); const row_r10 = i0.ɵɵreference(1); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onRowSelectChanged(row_r10)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    i0.ɵɵproperty("item", item_r11)("index", index_r12);
} }
function DataTableComponent_tbody_26_Template(rf, ctx) { if (rf & 1) {
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
function DataTableComponent_tbody_27_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 43);
} if (rf & 2) {
    const column_r13 = ctx.$implicit;
    i0.ɵɵproperty("hide", !column_r13.visible);
} }
function DataTableComponent_tbody_27_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 42);
    i0.ɵɵelement(1, "td", 43);
    i0.ɵɵelementStart(2, "td", 43);
    i0.ɵɵtext(3, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "td", 43);
    i0.ɵɵtemplate(5, DataTableComponent_tbody_27_tr_1_td_5_Template, 1, 1, "td", 44);
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
function DataTableComponent_tbody_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 40);
    i0.ɵɵtemplate(1, DataTableComponent_tbody_27_tr_1_Template, 6, 8, "tr", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.substituteItems);
} }
function DataTableComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "i");
    i0.ɵɵelement(2, "i", 46);
    i0.ɵɵelementEnd()();
} }
function DataTableComponent_data_table_pagination_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-pagination", 47);
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
        this.selectColumnLabelVisible = false;
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
        } }, inputs: { wrapperClass: "wrapperClass", items: "items", itemCount: "itemCount", title: "title", showTitle: "showTitle", header: "header", pagination: "pagination", indexColumn: "indexColumn", indexColumnHeader: "indexColumnHeader", rowColors: "rowColors", rowTooltip: "rowTooltip", selectColumn: "selectColumn", selectColumnLabelVisible: "selectColumnLabelVisible", selectVisibilityKey: "selectVisibilityKey", multiSelect: "multiSelect", substituteRows: "substituteRows", expandableRows: "expandableRows", labels: "labels", selectOnRowClick: "selectOnRowClick", autoReload: "autoReload", showReloading: "showReloading", noDataMessage: "noDataMessage", pageLimits: "pageLimits", primaryColumn: "primaryColumn", sortBy: "sortBy", sortAsc: "sortAsc", offset: "offset", limit: "limit", page: "page" }, outputs: { reload: "reload", rowClick: "rowClick", rowDoubleClick: "rowDoubleClick", headerClick: "headerClick", cellClick: "cellClick", selectedRowsChange: "selectedRowsChange", visibleColumnsChange: "visibleColumnsChange" }, decls: 30, vars: 30, consts: [["th", ""], ["row", ""], [1, "data-table-wrapper"], ["role", "status", "aria-live", "polite", "aria-atomic", "false", "aria-relevant", "text", 1, "sr-only"], [3, "textContent"], [4, "ngIf"], [1, "data-table-box"], ["tabindex", "-1", 1, "table", "data-table", 3, "id"], [1, "sr-only", 3, "textContent"], [1, "expand-column-header", 3, "hide"], ["scope", "col", 1, "index-column-header", 3, "hide"], [1, "select-column-header", 3, "hide"], [1, "select-all-rows-header"], [3, "for", "ngClass"], ["type", "checkbox", 3, "ngModelChange", "id", "hide", "ngModel", "disabled", "title"], ["scope", "col", "class", "column-header", 3, "hide", "sortable", "resizable", "ngClass", "width", 4, "ngFor", "ngForOf"], ["class", "data-table-row-wrapper", "dataTableRow", "", 3, "item", "index", "selectedChange", 4, "ngFor", "ngForOf"], ["class", "substitute-rows", 4, "ngIf"], ["class", "busy", 4, "ngIf"], [3, "limits", 4, "ngIf"], ["scope", "col", 1, "column-header", 3, "hide", "ngClass"], [3, "disabled", "click", 4, "ngIf"], [3, "click", "disabled"], [3, "id", "textContent", 4, "ngIf"], [3, "id", "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "column-sort-icon", 4, "ngIf"], ["class", "column-resize-handle", 3, "mousedown", 4, "ngIf"], [3, "id", "textContent"], [3, "id", "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-sort-icon"], ["aria-hidden", "true", 1, "fa", "fa-sort", "column-sortable-icon"], [1, "sr-only"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"], [1, "column-resize-handle", 3, "mousedown"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "fa", "fa-sort", "column-sortable-icon", 3, "hide"], ["aria-hidden", "true", 1, "fa", 3, "hide", "ngClass"], ["dataTableRow", "", 1, "data-table-row-wrapper", 3, "selectedChange", "item", "index"], [1, "substitute-rows"], ["role", "presentation", 3, "row-odd", "row-even", 4, "ngFor", "ngForOf"], ["role", "presentation"], [3, "hide"], [3, "hide", 4, "ngFor", "ngForOf"], [1, "busy"], [1, "fa", "fa-spin", "fa-cog", "fa-2x"], [3, "limits"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵelementStart(19, "th", 11)(20, "div", 12)(21, "label", 13);
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "input", 14);
            i0.ɵɵtwoWayListener("ngModelChange", function DataTableComponent_Template_input_ngModelChange_23_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectAllCheckbox, $event) || (ctx.selectAllCheckbox = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(24, DataTableComponent_th_24_Template, 5, 13, "th", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(25, DataTableComponent_tbody_25_Template, 2, 2, "tbody", 16)(26, DataTableComponent_tbody_26_Template, 4, 2, "tbody", 5)(27, DataTableComponent_tbody_27_Template, 2, 1, "tbody", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(28, DataTableComponent_div_28_Template, 3, 0, "div", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(29, DataTableComponent_data_table_pagination_29_Template, 1, 1, "data-table-pagination", 19);
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
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("for", ctx.id + "-select-all-column")("ngClass", i0.ɵɵpureFunction1(28, _c1, !ctx.selectColumnLabelVisible));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.labels.selectColumn, " ");
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
        } }, styles: ["[_nghost-%COMP%]     .data-table.table>tbody+tbody{border-top:none}[_nghost-%COMP%]     .data-table.table td{vertical-align:middle}[_nghost-%COMP%]     .data-table>thead>tr>th, [_nghost-%COMP%]     .data-table>tbody>tr>td{overflow:hidden}[_nghost-%COMP%]     .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}[_nghost-%COMP%]     .row-odd{background-color:#f6f6f6}.data-table[_ngcontent-%COMP%]   .substitute-rows[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]     .data-table .data-table-row:hover{background-color:#ececec}.data-table[_ngcontent-%COMP%]{box-shadow:0 0 15px #ececec}.column-header[_ngcontent-%COMP%]{position:relative}.expand-column-header[_ngcontent-%COMP%]{width:50px}.select-column-header[_ngcontent-%COMP%]{width:50px;text-align:center}.index-column-header[_ngcontent-%COMP%]{width:40px}.column-header.sortable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-left:8px}.column-header.resizable[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-right:8px}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]   .column-sortable-icon[_ngcontent-%COMP%]{color:#d3d3d3}.column-header[_ngcontent-%COMP%]   .column-resize-handle[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.select-column-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:has( + input[type=checkbox])[_ngcontent-%COMP%]{margin:0}.select-all-rows-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px}.select-all-rows-header[_ngcontent-%COMP%]:has( > label.sr-only)[_ngcontent-%COMP%]{display:revert}.data-table-box[_ngcontent-%COMP%]{position:relative}.busy[_ngcontent-%COMP%]{position:absolute;z-index:1;inset:0;background-color:#00000040}.busy[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableComponent, [{
        type: Component,
        args: [{ selector: 'data-table', template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    @if (reloadNotification || paginationNotification || sortNotification || columnSelectorNotification) {\n      {{ this.title }} table\n    }\n    <span [textContent]=\"reloadNotification\"></span>&nbsp;\n    <span [textContent]=\"paginationNotification\"></span>&nbsp;\n    <span [textContent]=\"sortNotification\"></span>&nbsp;\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\" [class]=\"wrapperClass\">\n    <table class=\"table data-table\" [id]=\"id\" tabindex=\"-1\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <th [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <div class=\"select-all-rows-header\">\n            <label\n              [for]=\"id + '-select-all-column'\"\n              [ngClass]=\"{'sr-only': !selectColumnLabelVisible}\">\n              {{ labels.selectColumn }}\n            </label>\n            <input\n              [id]=\"id + '-select-all-column'\"\n              [hide]=\"!multiSelect\"\n              type=\"checkbox\"\n              [(ngModel)]=\"selectAllCheckbox\"\n              [disabled]=\"selectableItemCount === 0\"\n              [title]=\"labels.selectAllRows\"/>\n          </div>\n        </th>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [id]=\"'col-'+id+'-'+i\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              @if (column.property !== sortBy) {\n                <i class=\"fa fa-sort column-sortable-icon\" aria-hidden=\"true\"></i>\n                <span class=\"sr-only\">Not Sorted</span>\n              } @else {\n                <i class=\"fa\" [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n                <span class=\"sr-only\">\n                  @if (sortAsc) {\n                    Sorted Ascending\n                  } @else {\n                    Sorted Descending\n                  }\n                </span>\n              }\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n", styles: [":host ::ng-deep .data-table.table>tbody+tbody{border-top:none}:host ::ng-deep .data-table.table td{vertical-align:middle}:host ::ng-deep .data-table>thead>tr>th,:host ::ng-deep .data-table>tbody>tr>td{overflow:hidden}:host ::ng-deep .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host ::ng-deep .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host ::ng-deep .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.select-column-header label:has(+input[type=checkbox]){margin:0}.select-all-rows-header{display:flex;flex-direction:row;gap:8px}.select-all-rows-header:has(>label.sr-only){display:revert}.data-table-box{position:relative}.busy{position:absolute;z-index:1;inset:0;background-color:#00000040}.busy>i{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}\n"] }]
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
        }], selectColumnLabelVisible: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTyxTQUFTLEVBQ3RCLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsWUFBWSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7SUN2QjVFLFlBQ0Y7OztJQURFLG1EQUNGOzs7SUFPRixvQ0FBc0Q7OztJQXVDNUMsMkJBQzJDOzs7Ozs7SUFBckMsQUFEK0Isb0RBQXNCLGlDQUN4Qjs7O0lBQ25DLDJCQUMwRDs7Ozs7O0lBQXBELEFBRHFELEFBQXZCLG9EQUFzQiw4Q0FBMkMsa0VBQ25EOzs7SUFHOUMsd0JBQWtFO0lBQ2xFLGdDQUFzQjtJQUFBLDBCQUFVO0lBQUEsaUJBQU87OztJQUtuQyxrQ0FDRjs7O0lBQ0Us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Q0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUdJLE1BQU07a0JBQWYsTUFBTTtZQUdHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxrQkFBa0I7a0JBQTNCLE1BQU07WUFDRyxvQkFBb0I7a0JBQTdCLE1BQU07WUFtREgsTUFBTTtrQkFEVCxLQUFLO1lBYUYsT0FBTztrQkFEVixLQUFLO1lBYUYsTUFBTTtrQkFEVCxLQUFLO1lBYUYsS0FBSztrQkFEUixLQUFLO1lBWUYsSUFBSTtrQkFEUCxLQUFLOztrRkE5S0ssa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NvbHVtbi9jb2x1bW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4uL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVBhcmFtcyB9IGZyb20gJy4uLy4uL3R5cGVzL2RhdGEtdGFibGUtcGFyYW1zLnR5cGUnO1xuaW1wb3J0IHsgUm93Q2FsbGJhY2sgfSBmcm9tICcuLi8uLi90eXBlcy9yb3ctY2FsbGJhY2sudHlwZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy50eXBlJztcbmltcG9ydCB7IGRlZmF1bHRUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy9kZWZhdWx0LXRyYW5zbGF0aW9ucy50eXBlJztcbmltcG9ydCB7IGRyYWcgfSBmcm9tICcuLi8uLi91dGlscy9kcmFnJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50XCI7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIERhdGFUYWJsZVBhcmFtcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9pdGVtQ291bnQ7XG5cbiAgQElucHV0KCkgd3JhcHBlckNsYXNzO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgLy8gbm8gbmVlZCB0byBjYWxsIG5vdGlmaWVyLm5leHQoKSBiZWNhdXNlIF9vblJlbG9hZEZpbmlzaGVkKClcbiAgICAvLyB3aWxsIGNoYW5nZSByZWxvYWRlZCB2YWx1ZSBjYXVzaW5nIG5vdGlmaWVyLm5leHQoKSB0byBiZSBjYWxsZWQgaW1wbGljaXRseS5cbiAgICB0aGlzLl9vblJlbG9hZEZpbmlzaGVkKCk7XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbUNvdW50O1xuICB9XG5cbiAgZ2V0IHNlbGVjdGFibGVJdGVtQ291bnQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5zZWxlY3RWaXNpYmlsaXR5S2V5ICE9PSAnJyAmJiB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1Db3VudCAtIHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gQm9vbGVhbihpdGVtW3RoaXMuc2VsZWN0VmlzaWJpbGl0eUtleV0pID09PSB0cnVlKS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pdGVtQ291bnQ7XG4gIH1cblxuICBzZXQgaXRlbUNvdW50KGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9pdGVtQ291bnQgPSBjb3VudDtcbiAgICB0aGlzLm5vdGlmaWVyLm5leHQoKTtcbiAgfVxuXG4gIC8vIFVJIGNvbXBvbmVudHM6XG4gIEBDb250ZW50Q2hpbGRyZW4oRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSBjb2x1bW5zOiBRdWVyeUxpc3Q8RGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlPjtcbiAgQFZpZXdDaGlsZHJlbihEYXRhVGFibGVSb3dDb21wb25lbnQpIHJvd3M6IFF1ZXJ5TGlzdDxEYXRhVGFibGVSb3dDb21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCwge3N0YXRpYzogZmFsc2V9KSBwYWdpbmF0b3I7XG5cbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlRXhwYW5kJywgeyBzdGF0aWM6IHRydWUgfSkgZXhwYW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gT25lLXRpbWUgb3B0aW9uYWwgYmluZGluZ3Mgd2l0aCBkZWZhdWx0IHZhbHVlczpcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgaGVhZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5kZXhDb2x1bW5IZWFkZXIgPSAnJztcbiAgQElucHV0KCkgcm93Q29sb3JzOiBSb3dDYWxsYmFjaztcbiAgQElucHV0KCkgcm93VG9vbHRpcDogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHNlbGVjdENvbHVtbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RDb2x1bW5MYWJlbFZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0VmlzaWJpbGl0eUtleSA9ICcnO1xuICBASW5wdXQoKSBtdWx0aVNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHN1YnN0aXR1dGVSb3dzID0gdHJ1ZTtcbiAgQElucHV0KCkgZXhwYW5kYWJsZVJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWxzOiBEYXRhVGFibGVUcmFuc2xhdGlvbnM7XG4gIEBJbnB1dCgpIHNlbGVjdE9uUm93Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b1JlbG9hZCA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dSZWxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9EYXRhTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlTGltaXRzOiBudW1iZXJbXSA9IFsxMCwgMjUsIDUwLCAxMDAsIDI1MF07XG4gIEBJbnB1dCgpIHByaW1hcnlDb2x1bW4gPSAnJztcblxuICAvLyByZWxvYWQgZW1pdHRlclxuICBAT3V0cHV0KCkgcmVsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGV2ZW50IGhhbmRsZXJzOlxuICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByb3dEb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhlYWRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2VsbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRSb3dzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmlzaWJsZUNvbHVtbnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIFVJIHN0YXRlIHdpdGhvdXQgaW5wdXQ6XG4gIGluZGV4Q29sdW1uVmlzaWJsZTogYm9vbGVhbjtcbiAgc2VsZWN0Q29sdW1uVmlzaWJsZTogYm9vbGVhbjtcbiAgZXhwYW5kQ29sdW1uVmlzaWJsZTogYm9vbGVhbjtcblxuICAvLyBhZGEgbm90aWZpY2F0aW9ucy5cbiAgcmVsb2FkTm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIHBhZ2luYXRpb25Ob3RpZmljYXRpb246IHN0cmluZztcbiAgc29ydE5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvbjogc3RyaW5nO1xuXG4gIF9kaXNwbGF5UGFyYW1zID0gPERhdGFUYWJsZVBhcmFtcz57fTsgLy8gcGFyYW1zIG9mIHRoZSBsYXN0IGZpbmlzaGVkIHJlbG9hZFxuXG4gIHN1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBzdWJqZWN0JDogU3Vic2NyaXB0aW9uO1xuXG4gIG5vdGlmaWVyID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgbm90aWZpZXIkOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gc2VsZWN0aW9uOlxuICBzZWxlY3RlZFJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50O1xuICBzZWxlY3RlZFJvd3M6IERhdGFUYWJsZVJvd0NvbXBvbmVudFtdID0gW107XG5cbiAgTWF0aDogYW55O1xuICBpZCA9IGBkYXRhdGFibGUtJHtuZXh0SWQrK31gO1xuXG4gIC8vIHNlbGVjdCBhbGwgY2hlY2tib3ggZmxhZ1xuICBwcml2YXRlIF9zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuXG4gIC8vIGNvbHVtbiByZXNpemluZzpcbiAgcHJpdmF0ZSBfcmVzaXplSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gIHJlc2l6ZUxpbWl0ID0gMzA7XG5cbiAgLy8gUmVsb2FkaW5nOlxuICBfcmVsb2FkaW5nID0gZmFsc2U7XG5cbiAgZ2V0IHJlbG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVsb2FkaW5nO1xuICB9XG5cbiAgc2V0IHJlbG9hZGluZyh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZWxvYWRpbmcgPSB2YWw7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBzdGF0ZTogdmlzaWJsZSBnZXQvc2V0IGZvciB0aGUgb3V0c2lkZSB3aXRoIEBJbnB1dCBmb3Igb25lLXRpbWUgaW5pdGlhbCB2YWx1ZXNcbiAgcHJpdmF0ZSBfc29ydEJ5OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRCeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zb3J0Qnk7XG4gIH1cblxuICBzZXQgc29ydEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3J0QnkgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc29ydEFzYyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRBc2MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRBc2M7XG4gIH1cblxuICBzZXQgc29ydEFzYyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRBc2MgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb2Zmc2V0ID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgb2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgfVxuXG4gIHNldCBvZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9saW1pdCA9IDEwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9saW1pdDtcbiAgfVxuXG4gIHNldCBsaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGltaXQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlZCBwcm9wZXJ0eTpcbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUNvdW50ICE9PSAwID8gTWF0aC5mbG9vcih0aGlzLm9mZnNldCAvIHRoaXMubGltaXQpICsgMSA6IDA7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gKHZhbHVlIC0gMSkgKiB0aGlzLmxpbWl0O1xuICB9XG5cbiAgZ2V0IGxhc3RQYWdlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KTtcbiAgfVxuXG4gIC8vIHNldHRpbmcgbXVsdGlwbGUgb2JzZXJ2YWJsZSBwcm9wZXJ0aWVzIHNpbXVsdGFuZW91c2x5XG4gIHNvcnQoc29ydEJ5OiBzdHJpbmcsIGFzYzogYm9vbGVhbikge1xuICAgIHRoaXMuc29ydEJ5ID0gc29ydEJ5O1xuICAgIHRoaXMuc29ydEFzYyA9IGFzYztcbiAgfVxuXG4gIC8vIGluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5faW5pdERlZmF1bHRWYWx1ZXMoKTtcbiAgICB0aGlzLl9pbml0RGVmYXVsdENsaWNrRXZlbnRzKCk7XG4gICAgdGhpcy5fdXBkYXRlRGlzcGxheVBhcmFtcygpO1xuXG4gICAgaWYgKHRoaXMucGFnZUxpbWl0cy5pbmRleE9mKHRoaXMubGltaXQpIDwgMCkge1xuICAgICAgdGhpcy5saW1pdCA9IHRoaXMucGFnZUxpbWl0c1swXTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVscyA9IHsuLi5kZWZhdWx0VHJhbnNsYXRpb25zLCAuLi50aGlzLmxhYmVsc307XG5cbiAgICBpZiAodGhpcy5hdXRvUmVsb2FkKSB7XG4gICAgICB0aGlzLnJlbG9hZEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZmllciQgPSB0aGlzLm5vdGlmaWVyLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9ub3RpZnkoKSk7XG4gICAgdGhpcy5zdWJqZWN0JCA9IHRoaXMuc3ViamVjdC5waXBlKGRlYm91bmNlVGltZSgxMDApKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWxvYWRJdGVtcygpKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERlZmF1bHRWYWx1ZXMoKSB7XG4gICAgdGhpcy5pbmRleENvbHVtblZpc2libGUgPSB0aGlzLmluZGV4Q29sdW1uO1xuICAgIHRoaXMuc2VsZWN0Q29sdW1uVmlzaWJsZSA9IHRoaXMuc2VsZWN0Q29sdW1uO1xuICAgIHRoaXMuZXhwYW5kQ29sdW1uVmlzaWJsZSA9IHRoaXMuZXhwYW5kYWJsZVJvd3M7XG4gIH1cblxuICBwcml2YXRlIF9pbml0RGVmYXVsdENsaWNrRXZlbnRzKCkge1xuICAgIHRoaXMuaGVhZGVyQ2xpY2suc3Vic2NyaWJlKFxuICAgICAgKHRhYmxlRXZlbnQ6IHsgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCB9KSA9PiB0aGlzLnNvcnRDb2x1bW4odGFibGVFdmVudC5jb2x1bW4pKTtcbiAgICBpZiAodGhpcy5zZWxlY3RPblJvd0NsaWNrKSB7XG4gICAgICB0aGlzLnJvd0NsaWNrLnN1YnNjcmliZShcbiAgICAgICAgKHRhYmxlRXZlbnQ6IHsgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCB9KSA9PiB0YWJsZUV2ZW50LnJvdy5zZWxlY3RlZCA9ICF0YWJsZUV2ZW50LnJvdy5zZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgcmVsb2FkSXRlbXMoKSB7XG4gICAgdGhpcy5yZWxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMucmVsb2FkLmVtaXQodGhpcy5fZ2V0UmVtb3RlUGFyYW1ldGVycygpKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUmVsb2FkRmluaXNoZWQoKSB7XG4gICAgaWYgKHRoaXMucmVsb2FkaW5nKSB7XG4gICAgICB0aGlzLl91cGRhdGVEaXNwbGF5UGFyYW1zKCk7XG4gICAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzcGxheVBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVBhcmFtcztcbiAgfVxuXG4gIF91cGRhdGVEaXNwbGF5UGFyYW1zKCkge1xuICAgIHRoaXMuX2Rpc3BsYXlQYXJhbXMgPSB7XG4gICAgICBzb3J0Qnk6IHRoaXMuc29ydEJ5LFxuICAgICAgc29ydEFzYzogdGhpcy5zb3J0QXNjLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHVibGljIHJvd0NsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93Q2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIHJvd0RvdWJsZUNsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93RG91YmxlQ2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIGhlYWRlckNsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCkge1xuICAgIGlmICghdGhpcy5fcmVzaXplSW5Qcm9ncmVzcykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5oZWFkZXJDbGljay5lbWl0KHtjb2x1bW4sIGV2ZW50fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTsgLy8gdGhpcyBpcyBiZWNhdXNlIEkgY2FuJ3QgcHJldmVudCBjbGljayBmcm9tIG1vdXN1cCBvZiB0aGUgZHJhZyBlbmRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmNlbGxDbGljay5lbWl0KHtyb3csIGNvbHVtbiwgZXZlbnR9KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uczpcbiAgcHJpdmF0ZSBfZ2V0UmVtb3RlUGFyYW1ldGVycygpOiBEYXRhVGFibGVQYXJhbXMge1xuICAgIGNvbnN0IHBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307XG5cbiAgICBpZiAodGhpcy5zb3J0QnkpIHtcbiAgICAgIHBhcmFtcy5zb3J0QnkgPSB0aGlzLnNvcnRCeTtcbiAgICAgIHBhcmFtcy5zb3J0QXNjID0gdGhpcy5zb3J0QXNjO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBwYXJhbXMub2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICBwYXJhbXMubGltaXQgPSB0aGlzLmxpbWl0O1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29sdW1uKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSB7XG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSkge1xuXG4gICAgICBjb25zdCBhc2NlbmRpbmcgPSB0aGlzLnNvcnRCeSA9PT0gY29sdW1uLnByb3BlcnR5ID8gIXRoaXMuc29ydEFzYyA6IHRydWU7XG5cbiAgICAgIGlmKGNvbHVtbi5wcm9wZXJ0eSA9PT0gdGhpcy5zb3J0QnkgJiYgICEgdGhpcy5zb3J0QXNjKSB7XG4gICAgICAgIHRoaXMuc29ydCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc29ydChjb2x1bW4ucHJvcGVydHksIGFzY2VuZGluZyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbHVtbkNvdW50KCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgKz0gdGhpcy5pbmRleENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIGNvdW50ICs9IGNvbHVtbi52aXNpYmxlID8gMSA6IDA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgcHVibGljIGdldFJvd0NvbG9yKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQpIHtcbiAgICBpZiAodGhpcy5yb3dDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Um93Q2FsbGJhY2s+dGhpcy5yb3dDb2xvcnMpKGl0ZW0sIHJvdywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RBbGxDaGVja2JveCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3g7XG4gIH1cblxuICBzZXQgc2VsZWN0QWxsQ2hlY2tib3godmFsdWUpIHtcbiAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IHZhbHVlO1xuICAgIHRoaXMuX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9vblNlbGVjdEFsbENoYW5nZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJvd3MudG9BcnJheSgpLmZvckVhY2gocm93ID0+IHJvdy5zZWxlY3RlZCA9IHZhbHVlKTtcbiAgICB0aGlzLnNlbGVjdGVkUm93c0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0Q2hhbmdlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuXG4gICAgLy8gbWFpbnRhaW4gdGhlIHNlbGVjdGVkUm93KHMpIHZpZXdcbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tyb3cuaW5kZXhdO1xuICAgIGNvbnN0IHNlbGVjdFNob3VsZEJlSGlkZGVuID0gdGhpcy5zZWxlY3RWaXNpYmlsaXR5S2V5ICE9PSAnJyAmJiBpdGVtICYmIEJvb2xlYW4oaXRlbVt0aGlzLnNlbGVjdFZpc2liaWxpdHlLZXldKTtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdyk7XG4gICAgICBpZiAocm93LnNlbGVjdGVkICYmIGluZGV4IDwgMCAmJiAhc2VsZWN0U2hvdWxkQmVIaWRkZW4pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MucHVzaChyb3cpO1xuICAgICAgfSBlbHNlIGlmICgoIXJvdy5zZWxlY3RlZCB8fCBzZWxlY3RTaG91bGRCZUhpZGRlbikgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocm93LnNlbGVjdGVkICYmICFzZWxlY3RTaG91bGRCZUhpZGRlbikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUm93ID09PSByb3cpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRSb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdW5zZWxlY3QgYWxsIG90aGVyIHJvd3M6XG4gICAgaWYgKHJvdy5zZWxlY3RlZCAmJiAhdGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5yb3dzLnRvQXJyYXkoKS5maWx0ZXIocm93XyA9PiByb3dfLnNlbGVjdGVkKS5mb3JFYWNoKHJvd18gPT4ge1xuICAgICAgICBpZiAocm93XyAhPT0gcm93KSB7IC8vIGF2b2lkIGVuZGxlc3MgbG9vcFxuICAgICAgICAgIHJvd18uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkUm93cyk7XG4gIH1cblxuICAvLyBvdGhlcjpcblxuICBnZXQgc3Vic3RpdHV0ZUl0ZW1zKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMuZGlzcGxheVBhcmFtcy5saW1pdCAtIHRoaXMuaXRlbXMubGVuZ3RofSk7XG4gIH1cblxuICBwdWJsaWMgcmVzaXplQ29sdW1uU3RhcnQoZXZlbnQ6IE1vdXNlRXZlbnQsIGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBjb2x1bW5FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIGxldCBzdGFydE9mZnNldCA9IGNvbHVtbkVsZW1lbnQub2Zmc2V0V2lkdGggLSBldmVudC5wYWdlWDtcbiAgICBkcmFnKGV2ZW50LCB7XG4gICAgICBtb3ZlOiAobW92ZUV2ZW50OiBNb3VzZUV2ZW50LCBkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Jlc2l6ZUluTGltaXQoY29sdW1uRWxlbWVudCwgZHgpKSB7XG4gICAgICAgICAgY29sdW1uLndpZHRoID0gc3RhcnRPZmZzZXQgKyBtb3ZlRXZlbnQucGFnZVggKyBkeDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50OiBIVE1MRWxlbWVudCwgZHg6IG51bWJlcikge1xuICAgIC8qIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgQ1NTIG1pbi13aWR0aCBkaWRuJ3Qgd29yayBvbiB0YWJsZS1sYXlvdXQ6IGZpeGVkLlxuICAgICAgICAgV2l0aG91dCB0aGUgbGltaXRzLCByZXNpemluZyBjYW4gbWFrZSB0aGUgbmV4dCBjb2x1bW4gZGlzYXBwZWFyIGNvbXBsZXRlbHksXG4gICAgICAgICBhbmQgZXZlbiBpbmNyZWFzZSB0aGUgdGFibGUgd2lkdGguIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHN1ZmZlcnMgZnJvbSB0aGUgZmFjdCxcbiAgICAgICAgIHRoYXQgb2Zmc2V0V2lkdGggc29tZXRpbWVzIGNvbnRhaW5zIG91dC1vZi1kYXRlIHZhbHVlcy4gKi9cbiAgICBpZiAoKGR4IDwgMCAmJiAoY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSB8fFxuICAgICAgIWNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nIHx8IC8vIHJlc2l6aW5nIGRvZXNuJ3QgbWFrZSBzZW5zZSBmb3IgdGhlIGxhc3QgdmlzaWJsZSBjb2x1bW5cbiAgICAgIChkeCA+PSAwICYmICgoPEhUTUxFbGVtZW50PmNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmltYXJ5Q29sdW1uID09PSAnJykge1xuICAgICAgdGhpcy5wcmltYXJ5Q29sdW1uID0gKHRoaXMuY29sdW1ucy5maXJzdCBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpLnByb3BlcnR5O1xuICAgIH1cbiAgfVxuXG4gIF9ub3RpZnkoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMucmVsb2FkaW5nO1xuXG4gICAgdGhpcy5yZWxvYWROb3RpZmljYXRpb24gPSBsb2FkaW5nID8gdGhpcy5sYWJlbHMubG9hZGluZ1RleHQ6IHRoaXMubGFiZWxzLmxvYWRlZFRleHQ7XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uTm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB0aGlzLnNvcnROb3RpZmljYXRpb24gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25Ob3RpZmljYXRpb24gPSB0aGlzLmxhYmVscy5wYWdpbmF0aW9uVGV4dFxuICAgICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCAnJyArIChNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KSAhPT0gMCA/IHRoaXMub2Zmc2V0ICsgMSA6ICcwJykpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCAnJyArIChNYXRoLm1pbih0aGlzLm9mZnNldCArIHRoaXMubGltaXQsIHRoaXMuaXRlbUNvdW50KSkpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCAnJyArIHRoaXMuaXRlbUNvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc29ydEJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5maW5kKGNvbHVtbiA9PiBjb2x1bW4ucHJvcGVydHkgPT09IHRoaXMuc29ydEJ5KSBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICh0aGlzLnNvcnRBc2MgPyB0aGlzLmxhYmVscy5zb3J0ZWRBc2NlbmRpbmcgOiB0aGlzLmxhYmVscy5zb3J0ZWREZXNjZW5kaW5nKVxuICAgICAgICAgIC5yZXBsYWNlKCd7aGVhZGVyfScsIGNvbC5oZWFkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZpZXIkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLXdyYXBwZXJcIj5cbiAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtYXRvbWljPVwiZmFsc2VcIiBhcmlhLXJlbGV2YW50PVwidGV4dFwiPlxuICAgIEBpZiAocmVsb2FkTm90aWZpY2F0aW9uIHx8IHBhZ2luYXRpb25Ob3RpZmljYXRpb24gfHwgc29ydE5vdGlmaWNhdGlvbiB8fCBjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvbikge1xuICAgICAge3sgdGhpcy50aXRsZSB9fSB0YWJsZVxuICAgIH1cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwicmVsb2FkTm90aWZpY2F0aW9uXCI+PC9zcGFuPiZuYnNwO1xuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJwYWdpbmF0aW9uTm90aWZpY2F0aW9uXCI+PC9zcGFuPiZuYnNwO1xuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3J0Tm90aWZpY2F0aW9uXCI+PC9zcGFuPiZuYnNwO1xuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuXG4gIDxkYXRhLXRhYmxlLWhlYWRlciAqbmdJZj1cImhlYWRlclwiPjwvZGF0YS10YWJsZS1oZWFkZXI+XG5cbiAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtYm94XCIgW2NsYXNzXT1cIndyYXBwZXJDbGFzc1wiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGRhdGEtdGFibGVcIiBbaWRdPVwiaWRcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICA8Y2FwdGlvbiBjbGFzcz1cInNyLW9ubHlcIiBbdGV4dENvbnRlbnRdPVwidGl0bGVcIj48L2NhcHRpb24+XG4gICAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhZXhwYW5kQ29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiZXhwYW5kLWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiaW5kZXgtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJpbmRleENvbHVtbkhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRoIFtoaWRlXT1cIiFzZWxlY3RDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJzZWxlY3QtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtYWxsLXJvd3MtaGVhZGVyXCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgW2Zvcl09XCJpZCArICctc2VsZWN0LWFsbC1jb2x1bW4nXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydzci1vbmx5JzogIXNlbGVjdENvbHVtbkxhYmVsVmlzaWJsZX1cIj5cbiAgICAgICAgICAgICAge3sgbGFiZWxzLnNlbGVjdENvbHVtbiB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBbaWRdPVwiaWQgKyAnLXNlbGVjdC1hbGwtY29sdW1uJ1wiXG4gICAgICAgICAgICAgIFtoaWRlXT1cIiFtdWx0aVNlbGVjdFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0QWxsQ2hlY2tib3hcIlxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwic2VsZWN0YWJsZUl0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJsYWJlbHMuc2VsZWN0QWxsUm93c1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1ucywgaW5kZXggYXMgaVwiICN0aFxuICAgICAgICAgICAgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCJcbiAgICAgICAgICAgIFtjbGFzcy5zb3J0YWJsZV09XCJjb2x1bW4uc29ydGFibGVcIlxuICAgICAgICAgICAgW2NsYXNzLnJlc2l6YWJsZV09XCJjb2x1bW4ucmVzaXphYmxlXCJcbiAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtc29ydF09XCJjb2x1bW4uc29ydGFibGUgPyAoY29sdW1uLnByb3BlcnR5ID09PSBzb3J0QnkgPyAoc29ydEFzYyA/ICdhc2NlbmRpbmcnIDogJ2Rlc2NlbmRpbmcnKSA6ICdub25lJykgOiBudWxsXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCIgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCIgW3N0eWxlLndpZHRoXT1cImNvbHVtbi53aWR0aCB8IHB4XCIgPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIiAoY2xpY2spPVwiaGVhZGVyQ2xpY2tlZChjb2x1bW4sICRldmVudClcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJjb2x1bW4uc29ydGFibGUgPyBpZCA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiJ2NvbC0nK2lkKyctJytpXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbaWRdPVwiJ2NvbC0nK2lkKyctJytpXCJcbiAgICAgICAgICAgICAgICAgIFt0ZXh0Q29udGVudF09XCJjb2x1bW4uaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbaWRdPVwiJ2NvbC0nK2lkKyctJytpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4tc29ydC1pY29uXCIgKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgICAgQGlmIChjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeSkge1xuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ob3QgU29ydGVkPC9zcGFuPlxuICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhXCIgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICAgICAgICBAaWYgKHNvcnRBc2MpIHtcbiAgICAgICAgICAgICAgICAgICAgU29ydGVkIEFzY2VuZGluZ1xuICAgICAgICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFNvcnRlZCBEZXNjZW5kaW5nXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbdGV4dENvbnRlbnRdPVwiY29sdW1uLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4tc29ydC1pY29uXCIgKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5XCIgY2xhc3M9XCJmYSBmYS1zb3J0IGNvbHVtbi1zb3J0YWJsZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSAhPT0gc29ydEJ5XCIgY2xhc3M9XCJmYVwiXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ZhLXNvcnQtYXNjJzogc29ydEFzYywgJ2ZhLXNvcnQtZGVzYyc6ICFzb3J0QXNjfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLnJlc2l6YWJsZVwiIGNsYXNzPVwiY29sdW1uLXJlc2l6ZS1oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJyZXNpemVDb2x1bW5TdGFydCgkZXZlbnQsIGNvbHVtbiwgdGgpXCI+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXg9aW5kZXhcIiBjbGFzcz1cImRhdGEtdGFibGUtcm93LXdyYXBwZXJcIlxuICAgICAgICAgICAgIGRhdGFUYWJsZVJvdyAjcm93IFtpdGVtXT1cIml0ZW1cIiBbaW5kZXhdPVwiaW5kZXhcIiAoc2VsZWN0ZWRDaGFuZ2UpPVwib25Sb3dTZWxlY3RDaGFuZ2VkKHJvdylcIj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgKm5nSWY9XCJpdGVtQ291bnQgPT09IDAgJiYgbm9EYXRhTWVzc2FnZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sdW1uQ291bnRcIj57eyBub0RhdGFNZXNzYWdlIH19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgY2xhc3M9XCJzdWJzdGl0dXRlLXJvd3NcIiAqbmdJZj1cInBhZ2luYXRpb24gJiYgc3Vic3RpdHV0ZVJvd3NcIj5cbiAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdWJzdGl0dXRlSXRlbXMsIGxldCBpbmRleCA9IGluZGV4XCJcbiAgICAgICAgICBbY2xhc3Mucm93LW9kZF09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1ldmVuXT1cIihpbmRleCArIGl0ZW1zLmxlbmd0aCkgJSAyID09PSAxXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWV4cGFuZENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiPiZuYnNwOzwvdGQ+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhc2VsZWN0Q29sdW1uVmlzaWJsZVwiPjwvdGQ+XG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIj5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGRpdiBjbGFzcz1cImJ1c3lcIiAqbmdJZj1cInNob3dSZWxvYWRpbmcgJiYgcmVsb2FkaW5nXCI+XG4gICAgICA8aT48aSBjbGFzcz1cImZhIGZhLXNwaW4gZmEtY29nIGZhLTJ4XCI+PC9pPjwvaT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRhdGEtdGFibGUtcGFnaW5hdGlvbiAqbmdJZj1cInBhZ2luYXRpb25cIiBbbGltaXRzXT1cInBhZ2VMaW1pdHNcIj48L2RhdGEtdGFibGUtcGFnaW5hdGlvbj5cbjwvZGl2PlxuIl19