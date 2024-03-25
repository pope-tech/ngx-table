import * as i0 from '@angular/core';
import { Directive, Input, Pipe, ContentChild, EventEmitter, forwardRef, Component, Inject, Output, ViewChild, ContentChildren, ViewChildren, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

function isBlank(obj) {
    return obj === undefined || obj === null;
}
class HideDirective {
    constructor(_elementRef, renderer) {
        this._elementRef = _elementRef;
        this.renderer = renderer;
        this._prevCondition = false;
    }
    set hide(newCondition) {
        this.initDisplayStyle();
        if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
            this._prevCondition = true;
            this.renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
            this._prevCondition = false;
            this.renderer.setStyle(this._elementRef.nativeElement, 'display', this._displayStyle);
        }
    }
    initDisplayStyle() {
        if (this._displayStyle === undefined) {
            const displayStyle = this._elementRef.nativeElement.style.display;
            if (displayStyle !== 'none') {
                this._displayStyle = displayStyle;
            }
        }
    }
}
HideDirective.ɵfac = function HideDirective_Factory(t) { return new (t || HideDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
HideDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HideDirective, selectors: [["", "hide", ""]], inputs: { hide: "hide" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HideDirective, [{
        type: Directive,
        args: [{
                selector: '[hide]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { hide: [{
            type: Input
        }] }); })();

class MinPipe {
    transform(value, args) {
        return Math.min.apply(null, value);
    }
}
MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
MinPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "min", type: MinPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MinPipe, [{
        type: Pipe,
        args: [{
                name: 'min'
            }]
    }], null, null); })();

class PixelConverter {
    transform(value, args = []) {
        if (value === undefined) {
            return;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return value + 'px';
        }
    }
}
PixelConverter.ɵfac = function PixelConverter_Factory(t) { return new (t || PixelConverter)(); };
PixelConverter.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "px", type: PixelConverter, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PixelConverter, [{
        type: Pipe,
        args: [{
                name: 'px'
            }]
    }], null, null); })();

class DataTableResource {
    constructor(items) {
        this.items = items;
    }
    query(params, filter) {
        let result = [];
        if (filter) {
            result = this.items.filter(filter);
        }
        else {
            result = this.items.slice(); // shallow copy to use for sorting instead of changing the original
        }
        if (params.sortBy) {
            result.sort((a, b) => {
                if (typeof a[params.sortBy] === 'string') {
                    return a[params.sortBy].localeCompare(b[params.sortBy]);
                }
                else {
                    return a[params.sortBy] - b[params.sortBy];
                }
            });
            if (params.sortAsc === false) {
                result.reverse();
            }
        }
        if (params.offset !== undefined) {
            if (params.limit === undefined) {
                result = result.slice(params.offset, result.length);
            }
            else {
                result = result.slice(params.offset, params.offset + params.limit);
            }
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result));
        });
    }
    count() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.items.length));
        });
    }
}

const _c0$3 = ["dataTableCell"];
const _c1$2 = ["dataTableHeader"];
class DataTableColumnDirective {
    constructor() {
        this.styleClassObject = {}; // for [ngClass]
        this.sortable = false;
        this.resizable = false;
        this.visible = true;
    }
    getCellColor(row, index) {
        if (this.cellColors !== undefined) {
            return this.cellColors(row.item, row, this, index);
        }
    }
    ngOnInit() {
        this._initCellClass();
    }
    _initCellClass() {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            }
            else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }
        if (this.styleClass != null) {
            this.styleClassObject = {
                [this.styleClass]: true
            };
        }
    }
}
DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(); };
DataTableColumnDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DataTableColumnDirective, selectors: [["data-table-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0$3, 7);
        i0.ɵɵcontentQuery(dirIndex, _c1$2, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
    } }, inputs: { header: "header", sortable: "sortable", resizable: "resizable", property: "property", styleClass: "styleClass", cellColors: "cellColors", width: "width", visible: "visible" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableColumnDirective, [{
        type: Directive,
        args: [{
                selector: 'data-table-column'
            }]
    }], null, { header: [{
            type: Input
        }], sortable: [{
            type: Input
        }], resizable: [{
            type: Input
        }], property: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], cellColors: [{
            type: Input
        }], width: [{
            type: Input
        }], visible: [{
            type: Input
        }], cellTemplate: [{
            type: ContentChild,
            args: ['dataTableCell', { static: true }]
        }], headerTemplate: [{
            type: ContentChild,
            args: ['dataTableHeader', { static: true }]
        }] }); })();

const _c0$2 = ["dataTableRow", ""];
function DataTableRowComponent_ng_template_7_th_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r5.item[column_r2.property]);
} }
const _c1$1 = function (a0, a1, a2) { return { column: a0, row: a1, item: a2 }; };
function DataTableRowComponent_ng_template_7_th_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", column_r2.cellTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c1$1, column_r2, ctx_r6._this, ctx_r6.item));
} }
function DataTableRowComponent_ng_template_7_th_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_th_0_div_1_Template, 1, 1, "div", 12);
    i0.ɵɵtemplate(2, DataTableRowComponent_ng_template_7_th_0_div_2_Template, 1, 6, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", column_r2.getCellColor(ctx_r3._this, ctx_r3.index));
    i0.ɵɵproperty("hide", !column_r2.visible)("ngClass", column_r2.styleClassObject);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r2.cellTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r2.cellTemplate);
} }
function DataTableRowComponent_ng_template_7_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r10.item[column_r2.property]);
} }
function DataTableRowComponent_ng_template_7_td_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", column_r2.cellTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c1$1, column_r2, ctx_r11._this, ctx_r11.item));
} }
function DataTableRowComponent_ng_template_7_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_div_1_Template, 1, 1, "div", 12);
    i0.ɵɵtemplate(2, DataTableRowComponent_ng_template_7_td_1_div_2_Template, 1, 6, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", column_r2.getCellColor(ctx_r4._this, ctx_r4.index));
    i0.ɵɵproperty("hide", !column_r2.visible)("ngClass", column_r2.styleClassObject);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r2.cellTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r2.cellTemplate);
} }
function DataTableRowComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataTableRowComponent_ng_template_7_th_0_Template, 3, 6, "th", 9);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_Template, 3, 6, "td", 10);
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r0.dataTable.primaryColumn === column_r2.property);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.dataTable.primaryColumn !== column_r2.property);
} }
const _c2$1 = function (a0, a1) { return { row: a0, item: a1 }; };
function DataTableRowComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 17);
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelement(2, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hide", !ctx_r1.expanded);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", ctx_r1.dataTable.columnCount);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.dataTable.expandTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c2$1, ctx_r1._this, ctx_r1.item));
} }
const _c3 = function (a0, a1) { return { "fa-caret-right": a0, "fa-caret-down": a1 }; };
class DataTableRowComponent {
    constructor(dataTable, renderer, elementRef) {
        this.dataTable = dataTable;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._this = this;
        this._listeners = [];
        this.selectedChange = new EventEmitter();
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        this.selectedChange.emit(selected);
    }
    // other:
    get displayIndex() {
        if (this.dataTable.pagination) {
            return this.dataTable.displayParams.offset + this.index + 1;
        }
        else {
            return this.index + 1;
        }
    }
    getTooltip() {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    }
    ngOnInit() {
        if (this.dataTable.rowClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => this.dataTable.rowClicked(this, event)));
        }
        if (this.dataTable.rowDoubleClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dblclick', (event) => this.dataTable.rowDoubleClicked(this, event)));
        }
    }
    ngOnDestroy() {
        this.selected = false;
        this._listeners.forEach(fn => fn());
    }
}
DataTableRowComponent.ɵfac = function DataTableRowComponent_Factory(t) { return new (t || DataTableRowComponent)(i0.ɵɵdirectiveInject(forwardRef(() => DataTableComponent)), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
DataTableRowComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableRowComponent, selectors: [["", "dataTableRow", ""]], inputs: { item: "item", index: "index" }, outputs: { selectedChange: "selectedChange" }, attrs: _c0$2, decls: 9, vars: 27, consts: [[1, "data-table-row", 3, "title"], [3, "hide"], [1, "row-expand-button", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-lg", 3, "ngClass"], [1, "index-column", 3, "hide", "textContent"], [1, "select-column", 3, "hide"], ["type", "checkbox", 3, "ngModel", "title", "ngModelChange"], ["ngFor", "", 3, "ngForOf"], ["class", "row-expansion", 3, "hide", 4, "ngIf"], ["scope", "row", "class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["scope", "row", 1, "data-column", 3, "hide", "ngClass"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "textContent"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "data-column", 3, "hide", "ngClass"], [1, "row-expansion", 3, "hide"]], template: function DataTableRowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "tr", 0);
        i0.ɵɵelementStart(1, "td", 1);
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵlistener("click", function DataTableRowComponent_Template_button_click_2_listener($event) { ctx.expanded = !ctx.expanded; return $event.stopPropagation(); });
        i0.ɵɵelement(3, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "td", 4);
        i0.ɵɵelementStart(5, "td", 5);
        i0.ɵɵelementStart(6, "input", 6);
        i0.ɵɵlistener("ngModelChange", function DataTableRowComponent_Template_input_ngModelChange_6_listener($event) { return ctx.selected = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, DataTableRowComponent_ng_template_7_Template, 2, 2, "ng-template", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, DataTableRowComponent_tr_8_Template, 3, 7, "tr", 8);
    } if (rf & 2) {
        i0.ɵɵstyleProp("background-color", ctx.dataTable.getRowColor(ctx.item, ctx.index, ctx._this));
        i0.ɵɵclassProp("row-odd", ctx.index % 2 === 0)("row-even", ctx.index % 2 === 1)("selected", ctx.selected)("clickable", ctx.dataTable.selectOnRowClick);
        i0.ɵɵproperty("title", ctx.getTooltip());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hide", !ctx.dataTable.expandColumnVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("title", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
        i0.ɵɵattribute("aria-expanded", ctx.expanded)("aria-label", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(24, _c3, !ctx.expanded, ctx.expanded));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hide", !ctx.dataTable.indexColumnVisible)("textContent", ctx.displayIndex);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hide", !ctx.dataTable.selectColumnVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.selected)("title", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
        i0.ɵɵattribute("aria-label", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.dataTable.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.dataTable.expandableRows);
    } }, directives: [HideDirective, i1.NgClass, i1$1.CheckboxControlValueAccessor, i1$1.NgControlStatus, i1$1.NgModel, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet], styles: [".select-column[_ngcontent-%COMP%]{text-align:center}.row-expand-button[_ngcontent-%COMP%]{box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable[_ngcontent-%COMP%]{cursor:pointer}th[_ngcontent-%COMP%]{font-weight:normal;font-weight:initial}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableRowComponent, [{
        type: Component,
        args: [{
                selector: '[dataTableRow]',
                templateUrl: './row.component.html',
                styleUrls: ['./row.component.css']
            }]
    }], function () { return [{ type: DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { item: [{
            type: Input
        }], index: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }] }); })();

const defaultTranslations = {
    headerReload: 'reload {title} table',
    headerColumnSelector: 'column selector - adds or removes columns from {title} table',
    headerColumnSelectorAdded: '{column_name} added to {title} table',
    headerColumnSelectorRemoved: '{column_name} removed from {title} table',
    indexColumn: 'index',
    selectColumn: 'select',
    selectRow: 'select {cell_content}',
    selectAllRows: 'select all rows',
    expandColumn: 'expand',
    expandRow: 'expand {cell_content}',
    sortedAscending: '{title} table sorted by {header} ascending',
    sortedDescending: '{title} table sorted by {header} descending',
    sortAscending: 'activate to sort ascending',
    sortDescending: 'activate to sort descending',
    paginationLimit: 'Limit',
    paginationText: 'Results: {from} to {to} of {total}',
    paginationTotalPages: 'of',
    firstPage: 'first page',
    prevPage: 'previous page',
    pageNumberLabel: 'Page',
    pageNumber: 'page number',
    pageNumberNofM: '({N} of {M})',
    nextPage: 'next page',
    lastPage: 'last page',
    loadingText: '{title} table is loading',
    loadedText: '{title} table loaded'
};

/*tslint:disable-next-line*/
function drag(event, { move: move, up: up }) {
    const startX = event.pageX;
    const startY = event.pageY;
    let x = startX;
    let y = startY;
    let moved = false;
    function mouseMoveHandler(evt) {
        const dx = evt.pageX - x;
        const dy = evt.pageY - y;
        x = evt.pageX;
        y = evt.pageY;
        if (dx || dy) {
            moved = true;
        }
        move(evt, dx, dy, x, y);
        event.preventDefault(); // to avoid text selection
    }
    function mouseUpHandler(evt) {
        x = evt.pageX;
        y = evt.pageY;
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        if (up) {
            up(event, x, y, moved);
        }
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}

const _c0$1 = ["pageInput"];
function DataTablePaginationComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", l_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(l_r2);
} }
let nextId$1 = 0;
class DataTablePaginationComponent {
    constructor(dataTable) {
        this.dataTable = dataTable;
        this.id = `pagination-${nextId$1++}`;
        this.Math = Math;
    }
    pageBack() {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
        if (this.dataTable.offset <= 0) {
            this.pageInput.nativeElement.focus();
        }
    }
    pageForward() {
        this.dataTable.offset += this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    }
    pageFirst() {
        this.dataTable.offset = 0;
        this.pageInput.nativeElement.focus();
    }
    pageLast() {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    }
    get maxPage() {
        return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
    }
    get limit() {
        return this.dataTable.limit;
    }
    set limit(value) {
        this.dataTable.limit = +value;
        // returning back to the first page.
        this.page = 1;
    }
    get page() {
        return this.dataTable.page;
    }
    set page(value) {
        this.dataTable.page = +value;
    }
    validate(event) {
        const newValue = +event.target.value;
        if (newValue !== this.page) {
            this.page = (event.target.value > this.maxPage) ? this.maxPage : (newValue < 1) ? 1 : newValue;
            event.target.value = this.page;
        }
    }
}
DataTablePaginationComponent.ɵfac = function DataTablePaginationComponent_Factory(t) { return new (t || DataTablePaginationComponent)(i0.ɵɵdirectiveInject(forwardRef(() => DataTableComponent))); };
DataTablePaginationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTablePaginationComponent, selectors: [["data-table-pagination"]], viewQuery: function DataTablePaginationComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageInput = _t.first);
    } }, inputs: { limits: "limits" }, decls: 37, vars: 29, consts: [[1, "row"], [1, "pagination-range", "col"], [3, "textContent"], [1, "pagination-limit", "col-md-3"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text", 3, "textContent"], [1, "form-control", 3, "id", "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pagination-pages", "offset-md-3", "col-md-6"], [1, "pagination-page"], [1, "btn", "btn-default", "pagination-firstpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "sr-only"], [1, "btn", "btn-default", "pagination-prevpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "input-group-prepend", "d-sm-block", "d-none"], [1, "input-group-text"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "id", "max", "disabled", "ngModel", "title", "blur", "keyup.enter", "keyup.esc"], ["pageInput", ""], [1, "input-group-append"], [1, "btn", "btn-default", "pagination-nextpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "btn", "btn-default", "pagination-lastpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [3, "value"]], template: function DataTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 0);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelement(7, "label", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "select", 7);
        i0.ɵɵlistener("ngModelChange", function DataTablePaginationComponent_Template_select_ngModelChange_8_listener($event) { return ctx.limit = $event; });
        i0.ɵɵtemplate(9, DataTablePaginationComponent_option_9_Template, 2, 2, "option", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 9);
        i0.ɵɵelementStart(11, "div", 10);
        i0.ɵɵelementStart(12, "div", 4);
        i0.ɵɵelementStart(13, "button", 11);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_13_listener() { return ctx.pageFirst(); });
        i0.ɵɵelement(14, "i", 12);
        i0.ɵɵelementStart(15, "span", 13);
        i0.ɵɵtext(16, "first page");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "button", 14);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_17_listener() { return ctx.pageBack(); });
        i0.ɵɵelement(18, "i", 15);
        i0.ɵɵelementStart(19, "span", 13);
        i0.ɵɵtext(20, "previous page");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 16);
        i0.ɵɵelementStart(22, "label", 17);
        i0.ɵɵtext(23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "input", 18, 19);
        i0.ɵɵlistener("blur", function DataTablePaginationComponent_Template_input_blur_24_listener($event) { return ctx.validate($event); })("keyup.enter", function DataTablePaginationComponent_Template_input_keyup_enter_24_listener($event) { return ctx.validate($event); })("keyup.esc", function DataTablePaginationComponent_Template_input_keyup_esc_24_listener() { i0.ɵɵrestoreView(_r3); const _r1 = i0.ɵɵreference(25); return _r1.value = ctx.page; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 20);
        i0.ɵɵelementStart(27, "span", 17);
        i0.ɵɵtext(28);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "button", 21);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_29_listener() { return ctx.pageForward(); });
        i0.ɵɵelement(30, "i", 22);
        i0.ɵɵelementStart(31, "span", 13);
        i0.ɵɵtext(32, "next page");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "button", 23);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_33_listener() { return ctx.pageLast(); });
        i0.ɵɵelement(34, "i", 24);
        i0.ɵɵelementStart(35, "span", 13);
        i0.ɵɵtext(36, "last page");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("textContent", ctx.dataTable.labels.paginationText.replace("{from}", ctx.Math.ceil(ctx.dataTable.itemCount / ctx.dataTable.limit) !== 0 ? ctx.dataTable.offset + 1 + "" : "0").replace("{to}", ctx.Math.min(ctx.dataTable.offset + ctx.dataTable.limit, ctx.dataTable.itemCount) + "").replace("{total}", ctx.dataTable.itemCount + ""));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("textContent", ctx.dataTable.labels.paginationLimit);
        i0.ɵɵattribute("for", ctx.id + "-page-limit");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.id + "-page-limit")("ngModel", ctx.limit)("disabled", ctx.dataTable.itemCount === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.limits);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.firstPage);
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.prevPage);
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
        i0.ɵɵadvance(5);
        i0.ɵɵattribute("for", ctx.id + "-page-input");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.dataTable.labels.pageNumberLabel, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("max", ctx.maxPage);
        i0.ɵɵproperty("id", ctx.id + "-page-input")("disabled", ctx.dataTable.itemCount === 0)("ngModel", ctx.page)("title", ctx.dataTable.labels.pageNumber + " " + ctx.dataTable.labels.pageNumberNofM.replace("{N}", "" + ctx.page).replace("{M}", "" + ctx.maxPage));
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate2(" ", ctx.dataTable.labels.paginationTotalPages, "\u00A0", ctx.dataTable.lastPage, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.nextPage);
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.lastPage);
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
    } }, directives: [i1$1.SelectControlValueAccessor, i1$1.NgControlStatus, i1$1.NgModel, i1.NgForOf, i1$1.MinValidator, i1$1.MaxValidator, i1$1.NumberValueAccessor, i1$1.DefaultValueAccessor, i1$1.NgSelectOption, i1$1.ɵNgSelectMultipleOption], styles: [".pagination-controllers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{text-align:right}.pagination-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTablePaginationComponent, [{
        type: Component,
        args: [{
                selector: 'data-table-pagination',
                templateUrl: './pagination.component.html',
                styleUrls: ['./pagination.component.css']
            }]
    }], function () { return [{ type: DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }]; }, { pageInput: [{
            type: ViewChild,
            args: ['pageInput', { static: true }]
        }], limits: [{
            type: Input
        }] }); })();

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
    i0.ɵɵelement(1, "i", 28);
    i0.ɵɵelement(2, "i", 29);
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
    i0.ɵɵelement(1, "i", 28);
    i0.ɵɵelement(2, "i", 29);
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
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵelement(2, "i", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function DataTableComponent_data_table_pagination_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "data-table-pagination", 43);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("limits", ctx_r6.pageLimits);
} }
let nextId = 0;
class DataTableComponent {
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
        i0.ɵɵelementStart(16, "label", 10);
        i0.ɵɵtext(17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "input", 11);
        i0.ɵɵlistener("ngModelChange", function DataTableComponent_Template_input_ngModelChange_18_listener($event) { return ctx.selectAllCheckbox = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(19, DataTableComponent_th_19_Template, 5, 13, "th", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
    } }, styles: ["[_nghost-%COMP%]     .data-table.table>tbody+tbody{border-top:none}[_nghost-%COMP%]     .data-table.table td{vertical-align:middle}[_nghost-%COMP%]     .data-table>thead>tr>th, [_nghost-%COMP%]     .data-table>tbody>tr>td{overflow:hidden}[_nghost-%COMP%]     .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}[_nghost-%COMP%]     .row-odd{background-color:#f6f6f6}.data-table[_ngcontent-%COMP%]   .substitute-rows[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]     .data-table .data-table-row:hover{background-color:#ececec}.data-table[_ngcontent-%COMP%]{box-shadow:0 0 15px #ececec}.column-header[_ngcontent-%COMP%]{position:relative}.expand-column-header[_ngcontent-%COMP%]{width:50px}.select-column-header[_ngcontent-%COMP%]{width:50px;text-align:center}.index-column-header[_ngcontent-%COMP%]{width:40px}.column-header.sortable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-left:8px}.column-header.resizable[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-right:8px}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]   .column-sortable-icon[_ngcontent-%COMP%]{color:#d3d3d3}.column-header[_ngcontent-%COMP%]   .column-resize-handle[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box[_ngcontent-%COMP%]{position:relative}.busy[_ngcontent-%COMP%]{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:#00000040}.busy[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableComponent, [{
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

function DataTableHeaderComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 10);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r0.dataTable.title);
} }
function DataTableHeaderComponent_div_12_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.dataTable.expandColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.dataTable.expandColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r2.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", ctx_r2.dataTable.labels.expandColumn);
} }
function DataTableHeaderComponent_div_12_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.dataTable.indexColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_3_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r3.dataTable.indexColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r3.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", ctx_r3.dataTable.labels.indexColumn);
} }
function DataTableHeaderComponent_div_12_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_4_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.dataTable.selectColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_4_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r4.dataTable.selectColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r4.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", ctx_r4.dataTable.labels.selectColumn);
} }
function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r20); const item_r15 = i0.ɵɵnextContext().$implicit; return item_r15.visible = $event; })("change", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r15.visible);
    i0.ɵɵattribute("aria-controls", ctx_r17.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", item_r15.header);
} }
function DataTableHeaderComponent_div_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataTableHeaderComponent_div_12_ng_template_5_li_0_Template, 4, 3, "li", 13);
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r5.dataTable.primaryColumn !== item_r15.property);
} }
function DataTableHeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "ul", 12);
    i0.ɵɵtemplate(2, DataTableHeaderComponent_div_12_li_2_Template, 4, 3, "li", 13);
    i0.ɵɵtemplate(3, DataTableHeaderComponent_div_12_li_3_Template, 4, 3, "li", 13);
    i0.ɵɵtemplate(4, DataTableHeaderComponent_div_12_li_4_Template, 4, 3, "li", 13);
    i0.ɵɵtemplate(5, DataTableHeaderComponent_div_12_ng_template_5_Template, 1, 1, "ng-template", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.dataTable.expandableRows);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.dataTable.indexColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.dataTable.selectColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.dataTable.columns);
} }
class DataTableHeaderComponent {
    constructor(dataTable, elemRef) {
        this.dataTable = dataTable;
        this.elemRef = elemRef;
        this.columnSelectorOpen = false;
    }
    onClickHandler(event) {
        if (!this.elemRef.nativeElement.contains(event.target)) {
            this.columnSelectorOpen = false;
        }
    }
    onKeyUpHandler(event) {
        if (event.keyCode === 27 || (event.keyCode === 9 && !this.elemRef.nativeElement.contains(event.target))) {
            this.columnSelectorOpen = false;
        }
    }
    onChange(event) {
        const isChecked = event.target.checked;
        const columnName = event.target.parentElement.textContent.trim();
        const interpolateParams = {
            'column_name': columnName,
            'title': this.dataTable.title
        };
        this.dataTable.visibleColumnsChange.emit(event);
        this.dataTable.columnSelectorNotification = (isChecked ? this.dataTable.labels.headerColumnSelectorAdded :
            this.dataTable.labels.headerColumnSelectorRemoved)
            .replace('{column_name}', interpolateParams.column_name)
            .replace('{title}', interpolateParams.title);
    }
}
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(i0.ɵɵdirectiveInject(forwardRef(() => DataTableComponent)), i0.ɵɵdirectiveInject(i0.ElementRef)); };
DataTableHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableHeaderComponent, selectors: [["data-table-header"]], hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function DataTableHeaderComponent_click_HostBindingHandler($event) { return ctx.onClickHandler($event); }, false, i0.ɵɵresolveDocument)("keyup", function DataTableHeaderComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUpHandler($event); }, false, i0.ɵɵresolveDocument);
    } }, decls: 13, vars: 8, consts: [[1, "data-table-header"], ["class", "h4 title", 3, "textContent", 4, "ngIf"], [1, "button-panel"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "refresh-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "column-selector-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-list"], [1, "column-selector-wrapper"], ["class", "column-selector-box panel panel-default", 4, "ngIf"], [1, "h4", "title", 3, "textContent"], [1, "column-selector-box", "panel", "panel-default"], [1, "list-group", "list-group-flush"], ["class", "list-group-item column-selector-column checkbox", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "list-group-item", "column-selector-column", "checkbox"], [1, "d-flex", "align-items-center"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [3, "textContent"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DataTableHeaderComponent_p_1_Template, 1, 1, "p", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_3_listener() { return ctx.dataTable.reloadItems(); });
        i0.ɵɵelement(4, "i", 4);
        i0.ɵɵelementStart(5, "span", 5);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 6);
        i0.ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_7_listener() { return ctx.columnSelectorOpen = !ctx.columnSelectorOpen; });
        i0.ɵɵelement(8, "i", 7);
        i0.ɵɵelementStart(9, "span", 5);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵtemplate(12, DataTableHeaderComponent_div_12_Template, 6, 4, "div", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.dataTable.showTitle);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.dataTable.labels.headerReload.replace("{title}", ctx.dataTable.title));
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("active", ctx.columnSelectorOpen);
        i0.ɵɵattribute("aria-haspopup", true)("aria-expanded", ctx.columnSelectorOpen);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.dataTable.labels.headerColumnSelector.replace("{title}", ctx.dataTable.title));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.columnSelectorOpen);
    } }, directives: [i1.NgIf, i1.NgForOf, i1$1.CheckboxControlValueAccessor, i1$1.NgControlStatus, i1$1.NgModel], styles: [".data-table-header[_ngcontent-%COMP%]{min-height:25px;margin-bottom:10px}.title[_ngcontent-%COMP%]{display:inline-block;margin:5px 0 0 5px}.button-panel[_ngcontent-%COMP%]{float:right}.button-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important}.column-selector-wrapper[_ngcontent-%COMP%]{position:relative}.column-selector-box[_ngcontent-%COMP%]{box-shadow:0 0 10px #d3d3d3;background:white;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]{padding:.5rem .25rem}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:4px;font-style:italic}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'data-table-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }, { type: i0.ElementRef }]; }, { onClickHandler: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], onKeyUpHandler: [{
            type: HostListener,
            args: ['document:keyup', ['$event']]
        }] }); })();

// modules
class NgxTableModule {
    static forRoot() {
        return {
            ngModule: NgxTableModule,
            providers: []
        };
    }
}
NgxTableModule.ɵfac = function NgxTableModule_Factory(t) { return new (t || NgxTableModule)(); };
NgxTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxTableModule });
NgxTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxTableModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    DataTableComponent, DataTableColumnDirective,
                    DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
                    PixelConverter, HideDirective, MinPipe
                ],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [DataTableComponent, DataTableColumnDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxTableModule, { declarations: [DataTableComponent, DataTableColumnDirective,
        DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
        PixelConverter, HideDirective, MinPipe], imports: [CommonModule,
        FormsModule], exports: [DataTableComponent, DataTableColumnDirective] }); })();
i0.ɵɵsetComponentScope(DataTableComponent, [i1.NgIf, DataTableHeaderComponent,
    HideDirective, i1$1.CheckboxControlValueAccessor, i1$1.NgControlStatus, i1$1.NgModel, i1.NgForOf, i1.NgClass, i1.NgTemplateOutlet, DataTableRowComponent, DataTablePaginationComponent], [PixelConverter]);

/**
 * Generated bundle index. Do not edit.
 */

export { DataTableComponent as DataTable, DataTableColumnDirective as DataTableColumn, DataTableHeaderComponent as DataTableHeader, DataTablePaginationComponent as DataTablePagination, DataTableResource, DataTableRowComponent as DataTableRow, NgxTableModule };
//# sourceMappingURL=popetech-ngx-table.js.map
