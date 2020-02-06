import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵsetClassMetadata, Directive, Input, ɵɵdefinePipe, Pipe, ɵɵstaticContentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ContentChild, ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵpureFunction3, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵstyleProp, ɵɵadvance, ɵɵattribute, ɵɵpureFunction2, EventEmitter, forwardRef, ɵɵdefineComponent, ɵɵlistener, ɵɵclassProp, Component, Inject, Output, ɵɵpureFunction1, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵreference, ɵɵpipe, ɵɵpipeBind1, ɵɵtext, ɵɵtextInterpolate, ɵɵcontentQuery, ɵɵviewQuery, ɵɵclassMap, ContentChildren, ViewChildren, ɵɵresolveDocument, HostListener, ɵɵstaticViewQuery, ɵɵtextInterpolate1, ɵɵpropertyInterpolate, ɵɵtextInterpolate2, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgTemplateOutlet, CommonModule, NgComponentOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { CheckboxControlValueAccessor, NgControlStatus, NgModel, SelectControlValueAccessor, NumberValueAccessor, DefaultValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, FormsModule, ɵangular_packages_forms_forms_y, RangeValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModelGroup, NgForm } from '@angular/forms';
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
HideDirective.ɵfac = function HideDirective_Factory(t) { return new (t || HideDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
HideDirective.ɵdir = ɵɵdefineDirective({ type: HideDirective, selectors: [["", "hide", ""]], inputs: { hide: "hide" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HideDirective, [{
        type: Directive,
        args: [{
                selector: '[hide]'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { hide: [{
            type: Input
        }] }); })();

class MinPipe {
    transform(value, args) {
        return Math.min.apply(null, value);
    }
}
MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
MinPipe.ɵpipe = ɵɵdefinePipe({ name: "min", type: MinPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MinPipe, [{
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
PixelConverter.ɵpipe = ɵɵdefinePipe({ name: "px", type: PixelConverter, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PixelConverter, [{
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

const _c0 = ["dataTableCell"];
const _c1 = ["dataTableHeader"];
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
DataTableColumnDirective.ɵdir = ɵɵdefineDirective({ type: DataTableColumnDirective, selectors: [["data-table-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵstaticContentQuery(dirIndex, _c0, true);
        ɵɵstaticContentQuery(dirIndex, _c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
    } }, inputs: { header: "header", sortable: "sortable", resizable: "resizable", property: "property", styleClass: "styleClass", cellColors: "cellColors", width: "width", visible: "visible" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataTableColumnDirective, [{
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

const _c0$1 = ["dataTableRow", ""];
function DataTableRowComponent_ng_template_7_th_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const column_r49 = ɵɵnextContext(2).$implicit;
    const ctx_r52 = ɵɵnextContext();
    ɵɵproperty("textContent", ctx_r52.item[column_r49.property]);
} }
const _c1$1 = function (a0, a1, a2) { return { column: a0, row: a1, item: a2 }; };
function DataTableRowComponent_ng_template_7_th_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const column_r49 = ɵɵnextContext(2).$implicit;
    const ctx_r53 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", column_r49.cellTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c1$1, column_r49, ctx_r53._this, ctx_r53.item));
} }
function DataTableRowComponent_ng_template_7_th_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtemplate(1, DataTableRowComponent_ng_template_7_th_0_div_1_Template, 1, 1, "div", 12);
    ɵɵtemplate(2, DataTableRowComponent_ng_template_7_th_0_div_2_Template, 1, 6, "div", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r49 = ɵɵnextContext().$implicit;
    const ctx_r50 = ɵɵnextContext();
    ɵɵstyleProp("background-color", column_r49.getCellColor(ctx_r50._this, ctx_r50.index));
    ɵɵproperty("hide", !column_r49.visible)("ngClass", column_r49.styleClassObject);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !column_r49.cellTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r49.cellTemplate);
} }
function DataTableRowComponent_ng_template_7_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const column_r49 = ɵɵnextContext(2).$implicit;
    const ctx_r57 = ɵɵnextContext();
    ɵɵproperty("textContent", ctx_r57.item[column_r49.property]);
} }
function DataTableRowComponent_ng_template_7_td_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const column_r49 = ɵɵnextContext(2).$implicit;
    const ctx_r58 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", column_r49.cellTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c1$1, column_r49, ctx_r58._this, ctx_r58.item));
} }
function DataTableRowComponent_ng_template_7_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 16);
    ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_div_1_Template, 1, 1, "div", 12);
    ɵɵtemplate(2, DataTableRowComponent_ng_template_7_td_1_div_2_Template, 1, 6, "div", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r49 = ɵɵnextContext().$implicit;
    const ctx_r51 = ɵɵnextContext();
    ɵɵstyleProp("background-color", column_r49.getCellColor(ctx_r51._this, ctx_r51.index));
    ɵɵproperty("hide", !column_r49.visible)("ngClass", column_r49.styleClassObject);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !column_r49.cellTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r49.cellTemplate);
} }
function DataTableRowComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, DataTableRowComponent_ng_template_7_th_0_Template, 3, 6, "th", 9);
    ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_Template, 3, 6, "td", 10);
} if (rf & 2) {
    const column_r49 = ctx.$implicit;
    const ctx_r47 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r47.dataTable.primaryColumn === column_r49.property);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r47.dataTable.primaryColumn !== column_r49.property);
} }
const _c2 = function (a0, a1) { return { row: a0, item: a1 }; };
function DataTableRowComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 17);
    ɵɵelementStart(1, "td");
    ɵɵelement(2, "div", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = ɵɵnextContext();
    ɵɵproperty("hide", !ctx_r48.expanded);
    ɵɵadvance(1);
    ɵɵattribute("colspan", ctx_r48.dataTable.columnCount);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r48.dataTable.expandTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c2, ctx_r48._this, ctx_r48.item));
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
DataTableRowComponent.ɵfac = function DataTableRowComponent_Factory(t) { return new (t || DataTableRowComponent)(ɵɵdirectiveInject(forwardRef(() => DataTableComponent)), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
DataTableRowComponent.ɵcmp = ɵɵdefineComponent({ type: DataTableRowComponent, selectors: [["", "dataTableRow", ""]], inputs: { item: "item", index: "index" }, outputs: { selectedChange: "selectedChange" }, attrs: _c0$1, decls: 9, vars: 27, consts: [[1, "data-table-row", 3, "title"], [3, "hide"], [1, "row-expand-button", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-lg", 3, "ngClass"], [1, "index-column", 3, "hide", "textContent"], [1, "select-column", 3, "hide"], ["type", "checkbox", 3, "ngModel", "title", "ngModelChange"], ["ngFor", "", 3, "ngForOf"], ["class", "row-expansion", 3, "hide", 4, "ngIf"], ["scope", "row", "class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["scope", "row", 1, "data-column", 3, "hide", "ngClass"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "textContent"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "data-column", 3, "hide", "ngClass"], [1, "row-expansion", 3, "hide"]], template: function DataTableRowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "tr", 0);
        ɵɵelementStart(1, "td", 1);
        ɵɵelementStart(2, "button", 2);
        ɵɵlistener("click", function DataTableRowComponent_Template_button_click_2_listener($event) { ctx.expanded = !ctx.expanded; return $event.stopPropagation(); });
        ɵɵelement(3, "i", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(4, "td", 4);
        ɵɵelementStart(5, "td", 5);
        ɵɵelementStart(6, "input", 6);
        ɵɵlistener("ngModelChange", function DataTableRowComponent_Template_input_ngModelChange_6_listener($event) { return ctx.selected = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(7, DataTableRowComponent_ng_template_7_Template, 2, 2, "ng-template", 7);
        ɵɵelementEnd();
        ɵɵtemplate(8, DataTableRowComponent_tr_8_Template, 3, 7, "tr", 8);
    } if (rf & 2) {
        ɵɵstyleProp("background-color", ctx.dataTable.getRowColor(ctx.item, ctx.index, ctx._this));
        ɵɵclassProp("row-odd", ctx.index % 2 === 0)("row-even", ctx.index % 2 === 1)("selected", ctx.selected)("clickable", ctx.dataTable.selectOnRowClick);
        ɵɵproperty("title", ctx.getTooltip());
        ɵɵadvance(1);
        ɵɵproperty("hide", !ctx.dataTable.expandColumnVisible);
        ɵɵadvance(1);
        ɵɵproperty("title", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
        ɵɵattribute("aria-expanded", ctx.expanded)("aria-label", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction2(24, _c3, !ctx.expanded, ctx.expanded));
        ɵɵadvance(1);
        ɵɵproperty("hide", !ctx.dataTable.indexColumnVisible)("textContent", ctx.displayIndex);
        ɵɵadvance(1);
        ɵɵproperty("hide", !ctx.dataTable.selectColumnVisible);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.selected)("title", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
        ɵɵattribute("aria-label", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.dataTable.columns);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.dataTable.expandableRows);
    } }, directives: [HideDirective, NgClass, CheckboxControlValueAccessor, NgControlStatus, NgModel, NgForOf, NgIf, NgTemplateOutlet], styles: [".select-column[_ngcontent-%COMP%]{text-align:center}.row-expand-button[_ngcontent-%COMP%]{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable[_ngcontent-%COMP%]{cursor:pointer}th[_ngcontent-%COMP%]{font-weight:initial}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataTableRowComponent, [{
        type: Component,
        args: [{
                selector: '[dataTableRow]',
                templateUrl: './row.component.html',
                styleUrls: ['./row.component.css']
            }]
    }], function () { return [{ type: DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }, { type: Renderer2 }, { type: ElementRef }]; }, { item: [{
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

const _c0$2 = ["dataTableExpand"];
function DataTableComponent_data_table_header_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "data-table-header");
} }
function DataTableComponent_th_17_button_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 24);
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    const i_r8 = ctx_r16.index;
    const column_r7 = ctx_r16.$implicit;
    const ctx_r12 = ɵɵnextContext();
    ɵɵproperty("id", "col-" + ctx_r12.id + "-" + i_r8)("textContent", column_r7.header);
} }
const _c1$2 = function (a0) { return { column: a0 }; };
function DataTableComponent_th_17_button_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 25);
} if (rf & 2) {
    const column_r7 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", column_r7.headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1$2, column_r7));
} }
const _c2$1 = function (a0, a1) { return { "fa-sort-asc": a0, "fa-sort-desc": a1 }; };
function DataTableComponent_th_17_button_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 26);
    ɵɵelement(1, "i", 27);
    ɵɵelement(2, "i", 28);
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = ɵɵnextContext(2).$implicit;
    const ctx_r14 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("hide", column_r7.property === ctx_r14.sortBy);
    ɵɵadvance(1);
    ɵɵproperty("hide", column_r7.property !== ctx_r14.sortBy)("ngClass", ɵɵpureFunction2(3, _c2$1, ctx_r14.sortAsc, !ctx_r14.sortAsc));
} }
function DataTableComponent_th_17_button_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 29);
    ɵɵlistener("mousedown", function DataTableComponent_th_17_button_3_span_4_Template_span_mousedown_0_listener($event) { ɵɵrestoreView(_r20); const column_r7 = ɵɵnextContext(2).$implicit; const _r9 = ɵɵreference(1); const ctx_r19 = ɵɵnextContext(); return ctx_r19.resizeColumnStart($event, column_r7, _r9); });
    ɵɵelementEnd();
} }
function DataTableComponent_th_17_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 19);
    ɵɵlistener("click", function DataTableComponent_th_17_button_3_Template_button_click_0_listener($event) { ɵɵrestoreView(_r24); const column_r7 = ɵɵnextContext().$implicit; const ctx_r22 = ɵɵnextContext(); return ctx_r22.headerClicked(column_r7, $event); });
    ɵɵtemplate(1, DataTableComponent_th_17_button_3_span_1_Template, 1, 2, "span", 20);
    ɵɵtemplate(2, DataTableComponent_th_17_button_3_span_2_Template, 1, 4, "span", 21);
    ɵɵtemplate(3, DataTableComponent_th_17_button_3_span_3_Template, 3, 6, "span", 22);
    ɵɵtemplate(4, DataTableComponent_th_17_button_3_span_4_Template, 1, 0, "span", 23);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = ɵɵnextContext();
    const column_r7 = ctx_r25.$implicit;
    const i_r8 = ctx_r25.index;
    const ctx_r10 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r10.itemCount === 0)("title", !ctx_r10.sortAsc ? ctx_r10.labels.sortAscending : ctx_r10.labels.sortDescending);
    ɵɵattribute("aria-controls", column_r7.sortable ? ctx_r10.id : null)("aria-labelledby", "col-" + ctx_r10.id + "-" + i_r8);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !column_r7.headerTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r7.headerTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r7.sortable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r7.resizable);
} }
function DataTableComponent_th_17_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const column_r7 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("textContent", column_r7.header);
} }
function DataTableComponent_th_17_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 25);
} if (rf & 2) {
    const column_r7 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", column_r7.headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1$2, column_r7));
} }
function DataTableComponent_th_17_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 26);
    ɵɵelement(1, "i", 27);
    ɵɵelement(2, "i", 28);
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = ɵɵnextContext(2).$implicit;
    const ctx_r28 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("hide", column_r7.property === ctx_r28.sortBy);
    ɵɵadvance(1);
    ɵɵproperty("hide", column_r7.property !== ctx_r28.sortBy)("ngClass", ɵɵpureFunction2(3, _c2$1, ctx_r28.sortAsc, !ctx_r28.sortAsc));
} }
function DataTableComponent_th_17_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 29);
    ɵɵlistener("mousedown", function DataTableComponent_th_17_span_4_span_4_Template_span_mousedown_0_listener($event) { ɵɵrestoreView(_r34); const column_r7 = ɵɵnextContext(2).$implicit; const _r9 = ɵɵreference(1); const ctx_r33 = ɵɵnextContext(); return ctx_r33.resizeColumnStart($event, column_r7, _r9); });
    ɵɵelementEnd();
} }
function DataTableComponent_th_17_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, DataTableComponent_th_17_span_4_span_1_Template, 1, 1, "span", 30);
    ɵɵtemplate(2, DataTableComponent_th_17_span_4_span_2_Template, 1, 4, "span", 21);
    ɵɵtemplate(3, DataTableComponent_th_17_span_4_span_3_Template, 3, 6, "span", 22);
    ɵɵtemplate(4, DataTableComponent_th_17_span_4_span_4_Template, 1, 0, "span", 23);
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !column_r7.headerTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r7.headerTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r7.sortable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r7.resizable);
} }
function DataTableComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16, 17);
    ɵɵpipe(2, "px");
    ɵɵtemplate(3, DataTableComponent_th_17_button_3_Template, 5, 8, "button", 18);
    ɵɵtemplate(4, DataTableComponent_th_17_span_4_Template, 5, 4, "span", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("width", ɵɵpipeBind1(2, 11, column_r7.width));
    ɵɵclassProp("sortable", column_r7.sortable)("resizable", column_r7.resizable);
    ɵɵproperty("hide", !column_r7.visible)("ngClass", column_r7.styleClassObject);
    ɵɵattribute("aria-sort", column_r7.sortable ? column_r7.property === ctx_r1.sortBy ? ctx_r1.sortAsc ? "ascending" : "descending" : "none" : null);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", column_r7.sortable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !column_r7.sortable);
} }
function DataTableComponent_tbody_18_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tbody", 31, 32);
    ɵɵlistener("selectedChange", function DataTableComponent_tbody_18_Template_tbody_selectedChange_0_listener($event) { ɵɵrestoreView(_r41); const _r39 = ɵɵreference(1); const ctx_r40 = ɵɵnextContext(); return ctx_r40.onRowSelectChanged(_r39); });
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const index_r38 = ctx.index;
    ɵɵproperty("item", item_r37)("index", index_r38);
} }
function DataTableComponent_tbody_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tbody");
    ɵɵelementStart(1, "tr");
    ɵɵelementStart(2, "td");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵattribute("colspan", ctx_r3.columnCount);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.noDataMessage);
} }
function DataTableComponent_tbody_20_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "td", 36);
} if (rf & 2) {
    const column_r46 = ctx.$implicit;
    ɵɵproperty("hide", !column_r46.visible);
} }
function DataTableComponent_tbody_20_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 35);
    ɵɵelement(1, "td", 36);
    ɵɵelementStart(2, "td", 36);
    ɵɵtext(3, "\u00A0");
    ɵɵelementEnd();
    ɵɵelement(4, "td", 36);
    ɵɵtemplate(5, DataTableComponent_tbody_20_tr_1_td_5_Template, 1, 1, "td", 37);
    ɵɵelementEnd();
} if (rf & 2) {
    const index_r44 = ctx.index;
    const ctx_r42 = ɵɵnextContext(2);
    ɵɵclassProp("row-odd", (index_r44 + ctx_r42.items.length) % 2 === 0)("row-even", (index_r44 + ctx_r42.items.length) % 2 === 1);
    ɵɵadvance(1);
    ɵɵproperty("hide", !ctx_r42.expandColumnVisible);
    ɵɵadvance(1);
    ɵɵproperty("hide", !ctx_r42.indexColumnVisible);
    ɵɵadvance(2);
    ɵɵproperty("hide", !ctx_r42.selectColumnVisible);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r42.columns);
} }
function DataTableComponent_tbody_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tbody", 33);
    ɵɵtemplate(1, DataTableComponent_tbody_20_tr_1_Template, 6, 8, "tr", 34);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.substituteItems);
} }
function DataTableComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 38);
    ɵɵelementStart(1, "i");
    ɵɵelement(2, "i", 39);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function DataTableComponent_data_table_pagination_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "data-table-pagination", 40);
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("limits", ctx_r6.pageLimits);
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
DataTableComponent.ɵcmp = ɵɵdefineComponent({ type: DataTableComponent, selectors: [["data-table"]], contentQueries: function DataTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵstaticContentQuery(dirIndex, _c0$2, true);
        ɵɵcontentQuery(dirIndex, DataTableColumnDirective, false);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.expandTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columns = _t);
    } }, viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(DataTableRowComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rows = _t);
    } }, inputs: { wrapperClass: "wrapperClass", items: "items", itemCount: "itemCount", title: "title", showTitle: "showTitle", header: "header", pagination: "pagination", indexColumn: "indexColumn", indexColumnHeader: "indexColumnHeader", rowColors: "rowColors", rowTooltip: "rowTooltip", selectColumn: "selectColumn", multiSelect: "multiSelect", substituteRows: "substituteRows", expandableRows: "expandableRows", labels: "labels", selectOnRowClick: "selectOnRowClick", autoReload: "autoReload", showReloading: "showReloading", noDataMessage: "noDataMessage", pageLimits: "pageLimits", primaryColumn: "primaryColumn", sortBy: "sortBy", sortAsc: "sortAsc", offset: "offset", limit: "limit", page: "page" }, outputs: { reload: "reload", rowClick: "rowClick", rowDoubleClick: "rowDoubleClick", headerClick: "headerClick", cellClick: "cellClick", selectedRowsChange: "selectedRowsChange", visibleColumnsChange: "visibleColumnsChange" }, decls: 23, vars: 24, consts: [[1, "data-table-wrapper"], ["role", "status", "aria-live", "polite", "aria-atomic", "false", "aria-relevant", "text", 1, "sr-only"], [3, "textContent"], [4, "ngIf"], [1, "data-table-box"], [1, "table", "data-table", 3, "id"], [1, "sr-only", 3, "textContent"], [1, "expand-column-header", 3, "hide"], ["scope", "col", 1, "index-column-header", 3, "hide"], [1, "select-column-header", 3, "hide"], ["type", "checkbox", 3, "hide", "ngModel", "disabled", "title", "ngModelChange"], ["scope", "col", "class", "column-header", 3, "hide", "sortable", "resizable", "ngClass", "width", 4, "ngFor", "ngForOf"], ["class", "data-table-row-wrapper", "dataTableRow", "", 3, "item", "index", "selectedChange", 4, "ngFor", "ngForOf"], ["class", "substitute-rows", 4, "ngIf"], ["class", "busy", 4, "ngIf"], [3, "limits", 4, "ngIf"], ["scope", "col", 1, "column-header", 3, "hide", "ngClass"], ["th", ""], [3, "disabled", "title", "click", 4, "ngIf"], [3, "disabled", "title", "click"], [3, "id", "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "column-sort-icon", 4, "ngIf"], ["class", "column-resize-handle", 3, "mousedown", 4, "ngIf"], [3, "id", "textContent"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-sort-icon"], ["aria-hidden", "true", 1, "fa", "fa-sort", "column-sortable-icon", 3, "hide"], ["aria-hidden", "true", 1, "fa", 3, "hide", "ngClass"], [1, "column-resize-handle", 3, "mousedown"], [3, "textContent", 4, "ngIf"], ["dataTableRow", "", 1, "data-table-row-wrapper", 3, "item", "index", "selectedChange"], ["row", ""], [1, "substitute-rows"], ["role", "presentation", 3, "row-odd", "row-even", 4, "ngFor", "ngForOf"], ["role", "presentation"], [3, "hide"], [3, "hide", 4, "ngFor", "ngForOf"], [1, "busy"], [1, "fa", "fa-spin", "fa-cog", "fa-2x"], [3, "limits"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "span", 1);
        ɵɵelement(2, "span", 2);
        ɵɵelement(3, "span", 2);
        ɵɵelement(4, "span", 2);
        ɵɵelement(5, "span", 2);
        ɵɵelementEnd();
        ɵɵtemplate(6, DataTableComponent_data_table_header_6_Template, 1, 0, "data-table-header", 3);
        ɵɵelementStart(7, "div", 4);
        ɵɵelementStart(8, "table", 5);
        ɵɵelement(9, "caption", 6);
        ɵɵelementStart(10, "thead");
        ɵɵelementStart(11, "tr");
        ɵɵelement(12, "td", 7);
        ɵɵelementStart(13, "th", 8);
        ɵɵelement(14, "span", 2);
        ɵɵelementEnd();
        ɵɵelementStart(15, "td", 9);
        ɵɵelementStart(16, "input", 10);
        ɵɵlistener("ngModelChange", function DataTableComponent_Template_input_ngModelChange_16_listener($event) { return ctx.selectAllCheckbox = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(17, DataTableComponent_th_17_Template, 5, 13, "th", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(18, DataTableComponent_tbody_18_Template, 2, 2, "tbody", 12);
        ɵɵtemplate(19, DataTableComponent_tbody_19_Template, 4, 2, "tbody", 3);
        ɵɵtemplate(20, DataTableComponent_tbody_20_Template, 2, 1, "tbody", 13);
        ɵɵelementEnd();
        ɵɵtemplate(21, DataTableComponent_div_21_Template, 3, 0, "div", 14);
        ɵɵelementEnd();
        ɵɵtemplate(22, DataTableComponent_data_table_pagination_22_Template, 1, 1, "data-table-pagination", 15);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("textContent", ctx.reloadNotification);
        ɵɵadvance(1);
        ɵɵproperty("textContent", ctx.paginationNotification);
        ɵɵadvance(1);
        ɵɵproperty("textContent", ctx.sortNotification);
        ɵɵadvance(1);
        ɵɵproperty("textContent", ctx.columnSelectorNotification);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.header);
        ɵɵadvance(1);
        ɵɵclassMap(ctx.wrapperClass);
        ɵɵadvance(1);
        ɵɵproperty("id", ctx.id);
        ɵɵadvance(1);
        ɵɵproperty("textContent", ctx.title);
        ɵɵadvance(3);
        ɵɵproperty("hide", !ctx.expandColumnVisible);
        ɵɵadvance(1);
        ɵɵproperty("hide", !ctx.indexColumnVisible);
        ɵɵadvance(1);
        ɵɵproperty("textContent", ctx.indexColumnHeader);
        ɵɵadvance(1);
        ɵɵproperty("hide", !ctx.selectColumnVisible);
        ɵɵadvance(1);
        ɵɵproperty("hide", !ctx.multiSelect)("ngModel", ctx.selectAllCheckbox)("disabled", ctx.itemCount === 0)("title", ctx.labels.selectAllRows);
        ɵɵattribute("aria-label", ctx.labels.selectAllRows);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.columns);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.items);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.itemCount === 0 && ctx.noDataMessage);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.pagination && ctx.substituteRows);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showReloading && ctx.reloading);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.pagination);
    } }, styles: ["[_nghost-%COMP%]     .data-table.table>tbody+tbody{border-top:none}[_nghost-%COMP%]     .data-table.table td{vertical-align:middle}[_nghost-%COMP%]     .data-table>tbody>tr>td, [_nghost-%COMP%]     .data-table>thead>tr>th{overflow:hidden}[_nghost-%COMP%]     .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}[_nghost-%COMP%]     .row-odd{background-color:#f6f6f6}.data-table[_ngcontent-%COMP%]   .substitute-rows[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]     .data-table .data-table-row:hover{background-color:#ececec}.data-table[_ngcontent-%COMP%]{box-shadow:0 0 15px #ececec}.column-header[_ngcontent-%COMP%]{position:relative}.expand-column-header[_ngcontent-%COMP%]{width:50px}.select-column-header[_ngcontent-%COMP%]{width:50px;text-align:center}.index-column-header[_ngcontent-%COMP%]{width:40px}.column-header.sortable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-left:8px}.column-header.resizable[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-right:8px}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]   .column-sortable-icon[_ngcontent-%COMP%]{color:#d3d3d3}.column-header[_ngcontent-%COMP%]   .column-resize-handle[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box[_ngcontent-%COMP%]{position:relative}.busy[_ngcontent-%COMP%]{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataTableComponent, [{
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

function DataTableHeaderComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "p", 10);
} if (rf & 2) {
    const ctx_r62 = ɵɵnextContext();
    ɵɵproperty("textContent", ctx_r62.dataTable.title);
} }
function DataTableHeaderComponent_div_12_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r69 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵelementStart(1, "label", 16);
    ɵɵelementStart(2, "input", 17);
    ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_2_Template_input_ngModelChange_2_listener($event) { ɵɵrestoreView(_r69); const ctx_r68 = ɵɵnextContext(2); return ctx_r68.dataTable.expandColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_2_Template_input_change_2_listener($event) { ɵɵrestoreView(_r69); const ctx_r70 = ɵɵnextContext(2); return ctx_r70.onChange($event); });
    ɵɵelementEnd();
    ɵɵelement(3, "span", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r64 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r64.dataTable.expandColumnVisible);
    ɵɵattribute("aria-controls", ctx_r64.dataTable.id);
    ɵɵadvance(1);
    ɵɵproperty("textContent", ctx_r64.dataTable.labels.expandColumn);
} }
function DataTableHeaderComponent_div_12_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r72 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵelementStart(1, "label", 16);
    ɵɵelementStart(2, "input", 17);
    ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_3_Template_input_ngModelChange_2_listener($event) { ɵɵrestoreView(_r72); const ctx_r71 = ɵɵnextContext(2); return ctx_r71.dataTable.indexColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_3_Template_input_change_2_listener($event) { ɵɵrestoreView(_r72); const ctx_r73 = ɵɵnextContext(2); return ctx_r73.onChange($event); });
    ɵɵelementEnd();
    ɵɵelement(3, "span", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r65 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r65.dataTable.indexColumnVisible);
    ɵɵattribute("aria-controls", ctx_r65.dataTable.id);
    ɵɵadvance(1);
    ɵɵproperty("textContent", ctx_r65.dataTable.labels.indexColumn);
} }
function DataTableHeaderComponent_div_12_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r75 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵelementStart(1, "label", 16);
    ɵɵelementStart(2, "input", 17);
    ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_4_Template_input_ngModelChange_2_listener($event) { ɵɵrestoreView(_r75); const ctx_r74 = ɵɵnextContext(2); return ctx_r74.dataTable.selectColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_4_Template_input_change_2_listener($event) { ɵɵrestoreView(_r75); const ctx_r76 = ɵɵnextContext(2); return ctx_r76.onChange($event); });
    ɵɵelementEnd();
    ɵɵelement(3, "span", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r66 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r66.dataTable.selectColumnVisible);
    ɵɵattribute("aria-controls", ctx_r66.dataTable.id);
    ɵɵadvance(1);
    ɵɵproperty("textContent", ctx_r66.dataTable.labels.selectColumn);
} }
function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r82 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵelementStart(1, "label", 16);
    ɵɵelementStart(2, "input", 17);
    ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_ngModelChange_2_listener($event) { ɵɵrestoreView(_r82); const item_r77 = ɵɵnextContext().$implicit; return item_r77.visible = $event; })("change", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_change_2_listener($event) { ɵɵrestoreView(_r82); const ctx_r83 = ɵɵnextContext(3); return ctx_r83.onChange($event); });
    ɵɵelementEnd();
    ɵɵelement(3, "span", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r77 = ɵɵnextContext().$implicit;
    const ctx_r79 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", item_r77.visible);
    ɵɵattribute("aria-controls", ctx_r79.dataTable.id);
    ɵɵadvance(1);
    ɵɵproperty("textContent", item_r77.header);
} }
function DataTableHeaderComponent_div_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, DataTableHeaderComponent_div_12_ng_template_5_li_0_Template, 4, 3, "li", 13);
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    const ctx_r67 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r67.dataTable.primaryColumn !== item_r77.property);
} }
function DataTableHeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelementStart(1, "ul", 12);
    ɵɵtemplate(2, DataTableHeaderComponent_div_12_li_2_Template, 4, 3, "li", 13);
    ɵɵtemplate(3, DataTableHeaderComponent_div_12_li_3_Template, 4, 3, "li", 13);
    ɵɵtemplate(4, DataTableHeaderComponent_div_12_li_4_Template, 4, 3, "li", 13);
    ɵɵtemplate(5, DataTableHeaderComponent_div_12_ng_template_5_Template, 1, 1, "ng-template", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r63 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r63.dataTable.expandableRows);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r63.dataTable.indexColumn);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r63.dataTable.selectColumn);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r63.dataTable.columns);
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
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(ɵɵdirectiveInject(forwardRef(() => DataTableComponent)), ɵɵdirectiveInject(ElementRef)); };
DataTableHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: DataTableHeaderComponent, selectors: [["data-table-header"]], hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function DataTableHeaderComponent_click_HostBindingHandler($event) { return ctx.onClickHandler($event); }, false, ɵɵresolveDocument)("keyup", function DataTableHeaderComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUpHandler($event); }, false, ɵɵresolveDocument);
    } }, decls: 13, vars: 8, consts: [[1, "data-table-header"], ["class", "h4 title", 3, "textContent", 4, "ngIf"], [1, "button-panel"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "refresh-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "column-selector-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-list"], [1, "column-selector-wrapper"], ["class", "column-selector-box panel panel-default", 4, "ngIf"], [1, "h4", "title", 3, "textContent"], [1, "column-selector-box", "panel", "panel-default"], [1, "list-group", "list-group-flush"], ["class", "list-group-item column-selector-column checkbox", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "list-group-item", "column-selector-column", "checkbox"], [1, "d-flex", "align-items-center"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [3, "textContent"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, DataTableHeaderComponent_p_1_Template, 1, 1, "p", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "button", 3);
        ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_3_listener($event) { return ctx.dataTable.reloadItems(); });
        ɵɵelement(4, "i", 4);
        ɵɵelementStart(5, "span", 5);
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "button", 6);
        ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_7_listener($event) { return ctx.columnSelectorOpen = !ctx.columnSelectorOpen; });
        ɵɵelement(8, "i", 7);
        ɵɵelementStart(9, "span", 5);
        ɵɵtext(10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 8);
        ɵɵtemplate(12, DataTableHeaderComponent_div_12_Template, 6, 4, "div", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.dataTable.showTitle);
        ɵɵadvance(5);
        ɵɵtextInterpolate(ctx.dataTable.labels.headerReload.replace("{title}", ctx.dataTable.title));
        ɵɵadvance(1);
        ɵɵclassProp("active", ctx.columnSelectorOpen);
        ɵɵattribute("aria-haspopup", true)("aria-expanded", ctx.columnSelectorOpen);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.dataTable.labels.headerColumnSelector.replace("{title}", ctx.dataTable.title));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.columnSelectorOpen);
    } }, directives: [NgIf, NgForOf, CheckboxControlValueAccessor, NgControlStatus, NgModel], styles: [".data-table-header[_ngcontent-%COMP%]{min-height:25px;margin-bottom:10px}.title[_ngcontent-%COMP%]{display:inline-block;margin:5px 0 0 5px}.button-panel[_ngcontent-%COMP%]{float:right}.button-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:0!important}.column-selector-wrapper[_ngcontent-%COMP%]{position:relative}.column-selector-box[_ngcontent-%COMP%]{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]{padding:.5rem .25rem}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:4px;font-style:italic}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataTableHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'data-table-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }, { type: ElementRef }]; }, { onClickHandler: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], onKeyUpHandler: [{
            type: HostListener,
            args: ['document:keyup', ['$event']]
        }] }); })();

const _c0$3 = ["pageInput"];
function DataTablePaginationComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const l_r87 = ctx.$implicit;
    ɵɵproperty("value", l_r87);
    ɵɵadvance(1);
    ɵɵtextInterpolate(l_r87);
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
DataTablePaginationComponent.ɵfac = function DataTablePaginationComponent_Factory(t) { return new (t || DataTablePaginationComponent)(ɵɵdirectiveInject(forwardRef(() => DataTableComponent))); };
DataTablePaginationComponent.ɵcmp = ɵɵdefineComponent({ type: DataTablePaginationComponent, selectors: [["data-table-pagination"]], viewQuery: function DataTablePaginationComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$3, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageInput = _t.first);
    } }, inputs: { limits: "limits" }, decls: 29, vars: 29, consts: [[1, "row"], [1, "pagination-range", "col"], [3, "textContent"], [1, "pagination-limit", "col-md-3"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text", 3, "textContent"], [1, "form-control", 3, "id", "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pagination-pages", "offset-md-3", "col-md-6"], [1, "pagination-page"], [1, "btn", "btn-default", "pagination-firstpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "btn", "btn-default", "pagination-prevpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "input-group-prepend", "d-sm-block", "d-none"], [1, "input-group-text"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "id", "max", "disabled", "ngModel", "title", "blur", "keyup.enter", "keyup.esc"], ["pageInput", ""], [1, "input-group-append"], [1, "btn", "btn-default", "pagination-nextpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "btn", "btn-default", "pagination-lastpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [3, "value"]], template: function DataTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r88 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelement(2, "span", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 0);
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "div", 4);
        ɵɵelementStart(6, "div", 5);
        ɵɵelement(7, "label", 6);
        ɵɵelementEnd();
        ɵɵelementStart(8, "select", 7);
        ɵɵlistener("ngModelChange", function DataTablePaginationComponent_Template_select_ngModelChange_8_listener($event) { return ctx.limit = $event; });
        ɵɵtemplate(9, DataTablePaginationComponent_option_9_Template, 2, 2, "option", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 9);
        ɵɵelementStart(11, "div", 10);
        ɵɵelementStart(12, "div", 4);
        ɵɵelementStart(13, "button", 11);
        ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_13_listener($event) { return ctx.pageFirst(); });
        ɵɵelement(14, "i", 12);
        ɵɵelementEnd();
        ɵɵelementStart(15, "button", 13);
        ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_15_listener($event) { return ctx.pageBack(); });
        ɵɵelement(16, "i", 14);
        ɵɵelementEnd();
        ɵɵelementStart(17, "div", 15);
        ɵɵelementStart(18, "label", 16);
        ɵɵtext(19);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "input", 17, 18);
        ɵɵlistener("blur", function DataTablePaginationComponent_Template_input_blur_20_listener($event) { return ctx.validate($event); })("keyup.enter", function DataTablePaginationComponent_Template_input_keyup_enter_20_listener($event) { return ctx.validate($event); })("keyup.esc", function DataTablePaginationComponent_Template_input_keyup_esc_20_listener($event) { ɵɵrestoreView(_r88); const _r86 = ɵɵreference(21); return _r86.value = ctx.page; });
        ɵɵelementEnd();
        ɵɵelementStart(22, "div", 19);
        ɵɵelementStart(23, "span", 16);
        ɵɵtext(24);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(25, "button", 20);
        ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_25_listener($event) { return ctx.pageForward(); });
        ɵɵelement(26, "i", 21);
        ɵɵelementEnd();
        ɵɵelementStart(27, "button", 22);
        ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_27_listener($event) { return ctx.pageLast(); });
        ɵɵelement(28, "i", 23);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("textContent", ctx.dataTable.labels.paginationText.replace("{from}", ctx.Math.ceil(ctx.dataTable.itemCount / ctx.dataTable.limit) !== 0 ? ctx.dataTable.offset + 1 + "" : "0").replace("{to}", ctx.Math.min(ctx.dataTable.offset + ctx.dataTable.limit, ctx.dataTable.itemCount) + "").replace("{total}", ctx.dataTable.itemCount + ""));
        ɵɵadvance(5);
        ɵɵproperty("textContent", ctx.dataTable.labels.paginationLimit);
        ɵɵattribute("for", ctx.id + "-page-limit");
        ɵɵadvance(1);
        ɵɵproperty("id", ctx.id + "-page-limit")("ngModel", ctx.limit)("disabled", ctx.dataTable.itemCount === 0);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.limits);
        ɵɵadvance(4);
        ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.firstPage);
        ɵɵattribute("aria-controls", ctx.dataTable.id);
        ɵɵadvance(2);
        ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.prevPage);
        ɵɵattribute("aria-controls", ctx.dataTable.id);
        ɵɵadvance(3);
        ɵɵattribute("for", ctx.id + "-page-input");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.dataTable.labels.pageNumberLabel, " ");
        ɵɵadvance(1);
        ɵɵpropertyInterpolate("max", ctx.maxPage);
        ɵɵproperty("id", ctx.id + "-page-input")("disabled", ctx.dataTable.itemCount === 0)("ngModel", ctx.page)("title", ctx.dataTable.labels.pageNumber + " " + ctx.dataTable.labels.pageNumberNofM.replace("{N}", "" + ctx.page).replace("{M}", "" + ctx.maxPage));
        ɵɵattribute("aria-controls", ctx.dataTable.id);
        ɵɵadvance(4);
        ɵɵtextInterpolate2(" ", ctx.dataTable.labels.paginationTotalPages, "\u00A0", ctx.dataTable.lastPage, " ");
        ɵɵadvance(1);
        ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.nextPage);
        ɵɵattribute("aria-controls", ctx.dataTable.id);
        ɵɵadvance(2);
        ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.lastPage);
        ɵɵattribute("aria-controls", ctx.dataTable.id);
    } }, directives: [SelectControlValueAccessor, NgControlStatus, NgModel, NgForOf, NumberValueAccessor, DefaultValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x], styles: [".pagination-controllers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{text-align:right}.pagination-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:0!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataTablePaginationComponent, [{
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

// modules
class NgxTableModule {
    static forRoot() {
        return {
            ngModule: NgxTableModule,
            providers: []
        };
    }
}
NgxTableModule.ɵmod = ɵɵdefineNgModule({ type: NgxTableModule });
NgxTableModule.ɵinj = ɵɵdefineInjector({ factory: function NgxTableModule_Factory(t) { return new (t || NgxTableModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxTableModule, { declarations: [DataTableComponent, DataTableColumnDirective,
        DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
        PixelConverter, HideDirective, MinPipe], imports: [CommonModule,
        FormsModule], exports: [DataTableComponent, DataTableColumnDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxTableModule, [{
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
ɵɵsetComponentScope(DataTableComponent, [DataTableComponent, DataTableColumnDirective,
    DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
    HideDirective, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm], [PixelConverter, MinPipe, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

/**
 * Generated bundle index. Do not edit.
 */

export { DataTableComponent as DataTable, DataTableColumnDirective as DataTableColumn, DataTableHeaderComponent as DataTableHeader, DataTablePaginationComponent as DataTablePagination, DataTableResource, DataTableRowComponent as DataTableRow, NgxTableModule };
//# sourceMappingURL=popetech-ngx-table.js.map
