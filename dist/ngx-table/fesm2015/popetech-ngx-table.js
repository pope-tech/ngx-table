import { Directive, ElementRef, Input, Renderer2, Pipe, ContentChild, Component, EventEmitter, forwardRef, Inject, Output, ContentChildren, ViewChildren, HostListener, ViewChild, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} obj
 * @return {?}
 */
function isBlank(obj) {
    return obj === undefined || obj === null;
}
class HideDirective {
    /**
     * @param {?} _elementRef
     * @param {?} renderer
     */
    constructor(_elementRef, renderer) {
        this._elementRef = _elementRef;
        this.renderer = renderer;
        this._prevCondition = false;
    }
    /**
     * @param {?} newCondition
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    initDisplayStyle() {
        if (this._displayStyle === undefined) {
            /** @type {?} */
            const displayStyle = this._elementRef.nativeElement.style.display;
            if (displayStyle !== 'none') {
                this._displayStyle = displayStyle;
            }
        }
    }
}
HideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hide]'
            },] },
];
/** @nocollapse */
HideDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
HideDirective.propDecorators = {
    hide: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MinPipe {
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    transform(value, args) {
        return Math.min.apply(null, value);
    }
}
MinPipe.decorators = [
    { type: Pipe, args: [{
                name: 'min'
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PixelConverter {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
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
PixelConverter.decorators = [
    { type: Pipe, args: [{
                name: 'px'
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DataTableResource {
    /**
     * @param {?} items
     */
    constructor(items) {
        this.items = items;
    }
    /**
     * @param {?} params
     * @param {?=} filter
     * @return {?}
     */
    query(params, filter) {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    count() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.items.length));
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DataTableColumnDirective {
    constructor() {
        this.styleClassObject = {};
        this.sortable = false;
        this.resizable = false;
        this.visible = true;
    }
    /**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    getCellColor(row, index) {
        if (this.cellColors !== undefined) {
            return (/** @type {?} */ (this.cellColors))(row.item, row, this, index);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._initCellClass();
    }
    /**
     * @return {?}
     */
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
DataTableColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'data-table-column'
            },] },
];
DataTableColumnDirective.propDecorators = {
    header: [{ type: Input }],
    sortable: [{ type: Input }],
    resizable: [{ type: Input }],
    property: [{ type: Input }],
    styleClass: [{ type: Input }],
    cellColors: [{ type: Input }],
    width: [{ type: Input }],
    visible: [{ type: Input }],
    cellTemplate: [{ type: ContentChild, args: ['dataTableCell',] }],
    headerTemplate: [{ type: ContentChild, args: ['dataTableHeader',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DataTableRowComponent {
    /**
     * @param {?} dataTable
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(dataTable, renderer, elementRef) {
        this.dataTable = dataTable;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._this = this;
        this._listeners = [];
        this.selectedChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        this._selected = selected;
        this.selectedChange.emit(selected);
    }
    /**
     * @return {?}
     */
    get displayIndex() {
        if (this.dataTable.pagination) {
            return this.dataTable.displayParams.offset + this.index + 1;
        }
        else {
            return this.index + 1;
        }
    }
    /**
     * @return {?}
     */
    getTooltip() {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.dataTable.rowClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => this.dataTable.rowClicked(this, event)));
        }
        if (this.dataTable.rowDoubleClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dblclick', (event) => this.dataTable.rowDoubleClicked(this, event)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.selected = false;
        this._listeners.forEach(fn => fn());
    }
}
DataTableRowComponent.decorators = [
    { type: Component, args: [{
                selector: '[dataTableRow]',
                template: `<tr class="data-table-row"
    [title]="getTooltip()"
    [style.background-color]="dataTable.getRowColor(item, index, _this)"
    [class.row-odd]="index % 2 === 0"
    [class.row-even]="index % 2 === 1"
    [class.selected]="selected"
    [class.clickable]="dataTable.selectOnRowClick">
  <td [hide]="!dataTable.expandColumnVisible">
    <button (click)="expanded = !expanded; $event.stopPropagation()" class="row-expand-button"
         [attr.aria-expanded]="expanded"
         [title]="dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])"
         [attr.aria-label]="dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])">
      <i [ngClass]="{'fa-caret-right': !expanded, 'fa-caret-down': expanded}" class="fa fa-lg" aria-hidden="true"></i>
    </button>
  </td>
  <td [hide]="!dataTable.indexColumnVisible" class="index-column" [textContent]="displayIndex"></td>
  <td [hide]="!dataTable.selectColumnVisible" class="select-column">
    <input type="checkbox" [(ngModel)]="selected"
           [title]="dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])"
           [attr.aria-label]="dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])"/>
  </td>
  <ng-template ngFor [ngForOf]="dataTable.columns" let-column>
    <th *ngIf="dataTable.primaryColumn === column.property" scope="row" [hide]="!column.visible" [ngClass]="column.styleClassObject"
        class="data-column"
        [style.background-color]="column.getCellColor(_this, index)">
      <div *ngIf="!column.cellTemplate" [textContent]="item[column.property]"></div>
      <div *ngIf="column.cellTemplate" [ngTemplateOutlet]="column.cellTemplate"
           [ngTemplateOutletContext]="{column: column, row: _this, item: item}"></div>
    </th>
    <td *ngIf="dataTable.primaryColumn !== column.property" [hide]="!column.visible" [ngClass]="column.styleClassObject"
        class="data-column"
        [style.background-color]="column.getCellColor(_this, index)">
      <div *ngIf="!column.cellTemplate" [textContent]="item[column.property]"></div>
      <div *ngIf="column.cellTemplate" [ngTemplateOutlet]="column.cellTemplate"
           [ngTemplateOutletContext]="{column: column, row: _this, item: item}"></div>
    </td>
  </ng-template>
</tr>
<tr *ngIf="dataTable.expandableRows" [hide]="!expanded" class="row-expansion">
  <td [attr.colspan]="dataTable.columnCount">
    <div [ngTemplateOutlet]="dataTable.expandTemplate" [ngTemplateOutletContext]="{row: _this, item: item}"></div>
  </td>
</tr>
`,
                styles: [`.select-column{text-align:center}.row-expand-button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable{cursor:pointer}th{font-weight:initial}`]
            },] },
];
/** @nocollapse */
DataTableRowComponent.ctorParameters = () => [
    { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(() => DataTableComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
DataTableRowComponent.propDecorators = {
    item: [{ type: Input }],
    index: [{ type: Input }],
    selectedChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} event
 * @param {?} __1
 * @return {?}
 */
function drag(event, { move: move, up: up }) {
    /** @type {?} */
    const startX = event.pageX;
    /** @type {?} */
    const startY = event.pageY;
    /** @type {?} */
    let x = startX;
    /** @type {?} */
    let y = startY;
    /** @type {?} */
    let moved = false;
    /**
     * @param {?} evt
     * @return {?}
     */
    function mouseMoveHandler(evt) {
        /** @type {?} */
        const dx = evt.pageX - x;
        /** @type {?} */
        const dy = evt.pageY - y;
        x = evt.pageX;
        y = evt.pageY;
        if (dx || dy) {
            moved = true;
        }
        move(evt, dx, dy, x, y);
        event.preventDefault(); // to avoid text selection
    }
    /**
     * @param {?} evt
     * @return {?}
     */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
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
        this._displayParams = /** @type {?} */ ({});
        this.subject = new Subject();
        this.notifier = new Subject();
        this.selectedRows = [];
        this.id = `datatable-${nextId++}`;
        this._selectAllCheckbox = false;
        this._resizeInProgress = false;
        this.resizeLimit = 30;
        // Reloading:
        this._reloading = false;
        this._sortAsc = true;
        this._offset = 0;
        this._limit = 10;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set items(items) {
        this._items = items;
        // no need to call notifier.next() because _onReloadFinished()
        // will change reloaded value causing notifier.next() to be called implicitly.
        this._onReloadFinished();
    }
    /**
     * @return {?}
     */
    get itemCount() {
        return this._itemCount;
    }
    /**
     * @param {?} count
     * @return {?}
     */
    set itemCount(count) {
        this._itemCount = count;
        this.notifier.next();
    }
    /**
     * @return {?}
     */
    get reloading() {
        return this._reloading;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set reloading(val) {
        this._reloading = val;
        this.notifier.next();
    }
    /**
     * @return {?}
     */
    get sortBy() {
        return this._sortBy;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sortBy(value) {
        this._sortBy = value;
        this.subject.next();
    }
    /**
     * @return {?}
     */
    get sortAsc() {
        return this._sortAsc;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sortAsc(value) {
        this._sortAsc = value;
        this.subject.next();
    }
    /**
     * @return {?}
     */
    get offset() {
        return this._offset;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set offset(value) {
        this._offset = value;
        this.subject.next();
    }
    /**
     * @return {?}
     */
    get limit() {
        return this._limit;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set limit(value) {
        this._limit = value;
        this.subject.next();
    }
    /**
     * @return {?}
     */
    get page() {
        return this.itemCount !== 0 ? Math.floor(this.offset / this.limit) + 1 : 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this.offset = (value - 1) * this.limit;
    }
    /**
     * @return {?}
     */
    get lastPage() {
        return Math.ceil(this.itemCount / this.limit);
    }
    /**
     * @param {?} sortBy
     * @param {?} asc
     * @return {?}
     */
    sort(sortBy, asc) {
        this.sortBy = sortBy;
        this.sortAsc = asc;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._initDefaultValues();
        this._initDefaultClickEvents();
        this._updateDisplayParams();
        if (this.pageLimits.indexOf(this.limit) < 0) {
            this.limit = this.pageLimits[0];
        }
        this.labels = Object.assign({}, defaultTranslations, this.labels);
        if (this.autoReload) {
            this.reloadItems();
        }
        this.notifier$ = this.notifier.subscribe(() => this._notify());
        this.subject$ = this.subject.pipe(debounceTime(100)).subscribe(() => this.reloadItems());
    }
    /**
     * @return {?}
     */
    _initDefaultValues() {
        this.indexColumnVisible = this.indexColumn;
        this.selectColumnVisible = this.selectColumn;
        this.expandColumnVisible = this.expandableRows;
    }
    /**
     * @return {?}
     */
    _initDefaultClickEvents() {
        this.headerClick.subscribe((tableEvent) => this.sortColumn(tableEvent.column));
        if (this.selectOnRowClick) {
            this.rowClick.subscribe((tableEvent) => tableEvent.row.selected = !tableEvent.row.selected);
        }
    }
    /**
     * @return {?}
     */
    reloadItems() {
        this.reloading = true;
        this.reload.emit(this._getRemoteParameters());
    }
    /**
     * @return {?}
     */
    _onReloadFinished() {
        if (this.reloading) {
            this._updateDisplayParams();
            this._selectAllCheckbox = false;
            this.reloading = false;
        }
    }
    /**
     * @return {?}
     */
    get displayParams() {
        return this._displayParams;
    }
    /**
     * @return {?}
     */
    _updateDisplayParams() {
        this._displayParams = {
            sortBy: this.sortBy,
            sortAsc: this.sortAsc,
            offset: this.offset,
            limit: this.limit
        };
    }
    /**
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    rowClicked(row, event) {
        this.rowClick.emit({ row, event });
    }
    /**
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    rowDoubleClicked(row, event) {
        this.rowDoubleClick.emit({ row, event });
    }
    /**
     * @param {?} column
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @param {?} column
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    cellClicked(column, row, event) {
        this.cellClick.emit({ row, column, event });
    }
    /**
     * @return {?}
     */
    _getRemoteParameters() {
        /** @type {?} */
        const params = /** @type {?} */ ({});
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
    /**
     * @param {?} column
     * @return {?}
     */
    sortColumn(column) {
        if (column.sortable) {
            /** @type {?} */
            const ascending = this.sortBy === column.property ? !this.sortAsc : true;
            this.sort(column.property, ascending);
        }
    }
    /**
     * @return {?}
     */
    get columnCount() {
        /** @type {?} */
        let count = 0;
        count += this.indexColumnVisible ? 1 : 0;
        count += this.selectColumnVisible ? 1 : 0;
        count += this.expandColumnVisible ? 1 : 0;
        this.columns.toArray().forEach(column => {
            count += column.visible ? 1 : 0;
        });
        return count;
    }
    /**
     * @param {?} item
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    getRowColor(item, index, row) {
        if (this.rowColors !== undefined) {
            return (/** @type {?} */ (this.rowColors))(item, row, index);
        }
    }
    /**
     * @return {?}
     */
    get selectAllCheckbox() {
        return this._selectAllCheckbox;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectAllCheckbox(value) {
        this._selectAllCheckbox = value;
        this._onSelectAllChanged(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _onSelectAllChanged(value) {
        this.rows.toArray().forEach(row => row.selected = value);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    onRowSelectChanged(row) {
        // maintain the selectedRow(s) view
        if (this.multiSelect) {
            /** @type {?} */
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
                if (row_ !== row) {
                    // avoid endless loop
                    row_.selected = false;
                }
            });
        }
    }
    /**
     * @return {?}
     */
    get substituteItems() {
        return Array.from({ length: this.displayParams.limit - this.items.length });
    }
    /**
     * @param {?} event
     * @param {?} column
     * @param {?} columnElement
     * @return {?}
     */
    resizeColumnStart(event, column, columnElement) {
        this._resizeInProgress = true;
        /** @type {?} */
        let startOffset = columnElement.offsetWidth - event.pageX;
        drag(event, {
            move: (moveEvent, dx) => {
                if (this._isResizeInLimit(columnElement, dx)) {
                    column.width = startOffset + moveEvent.pageX + dx;
                }
            },
        });
    }
    /**
     * @param {?} columnElement
     * @param {?} dx
     * @return {?}
     */
    _isResizeInLimit(columnElement, dx) {
        /* This is needed because CSS min-width didn't work on table-layout: fixed.
                 Without the limits, resizing can make the next column disappear completely,
                 and even increase the table width. The current implementation suffers from the fact,
                 that offsetWidth sometimes contains out-of-date values. */
        if ((dx < 0 && (columnElement.offsetWidth + dx) <= this.resizeLimit) ||
            !columnElement.nextElementSibling || // resizing doesn't make sense for the last visible column
            // resizing doesn't make sense for the last visible column
            (dx >= 0 && ((/** @type {?} */ (columnElement.nextElementSibling)).offsetWidth + dx) <= this.resizeLimit)) {
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.primaryColumn === '') {
            this.primaryColumn = (/** @type {?} */ (this.columns.first)).property;
        }
    }
    /**
     * @return {?}
     */
    _notify() {
        /** @type {?} */
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
                /** @type {?} */
                const col = /** @type {?} */ (this.columns.toArray().find(column => column.property === this.sortBy));
                this.sortNotification = (this.sortAsc ? this.labels.sortedAscending : this.labels.sortedDescending)
                    .replace('{title}', this.title)
                    .replace('{header}', col.header);
            }
            else {
                this.sortNotification = '';
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subject$.unsubscribe();
        this.notifier$.unsubscribe();
    }
}
DataTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'data-table',
                template: `<div class="data-table-wrapper">
  <span class="sr-only" role="status" aria-live="polite" aria-atomic="false" aria-relevant="text">
    <span [textContent]="reloadNotification"></span>
    <span [textContent]="paginationNotification"></span>
    <span [textContent]="sortNotification"></span>
    <span [textContent]="columnSelectorNotification"></span>
  </span>

  <data-table-header *ngIf="header"></data-table-header>

  <div class="data-table-box">
    <table class="table data-table" [id]="id">
      <caption class="sr-only" [textContent]="title"></caption>
      <thead>
      <tr>
        <td [hide]="!expandColumnVisible" class="expand-column-header">
        </td>
        <th scope="col" [hide]="!indexColumnVisible" class="index-column-header">
          <span [textContent]="indexColumnHeader"></span>
        </th>
        <td [hide]="!selectColumnVisible" class="select-column-header">
          <input [hide]="!multiSelect"
                 type="checkbox"
                 [(ngModel)]="selectAllCheckbox"
                 [disabled]="itemCount === 0"
                 [title]="labels.selectAllRows"
                 [attr.aria-label]="labels.selectAllRows"/>
        </td>
        <th *ngFor="let column of columns, index as i" #th
            [hide]="!column.visible"
            [class.sortable]="column.sortable"
            [class.resizable]="column.resizable"
            scope="col"
            [attr.aria-sort]="column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null"
            [ngClass]="column.styleClassObject" class="column-header" [style.width]="column.width | px" >
          <button *ngIf="column.sortable" (click)="headerClicked(column, $event)"
                  [attr.aria-controls]="column.sortable ? id : null"
                  [disabled]="itemCount === 0"
                  [attr.aria-labelledby]="'col-'+id+'-'+i"
                  [title]="!sortAsc ? labels.sortAscending : labels.sortDescending">
            <span *ngIf="!column.headerTemplate" [id]="'col-'+id+'-'+i"
                  [textContent]="column.header"></span>
            <span *ngIf="column.headerTemplate" [ngTemplateOutlet]="column.headerTemplate"
                  [ngTemplateOutletContext]="{column: column}"></span>
            <span class="column-sort-icon" *ngIf="column.sortable">
              <i [hide]="column.property === sortBy" class="fa fa-sort column-sortable-icon"
                aria-hidden="true"></i>
              <i [hide]="column.property !== sortBy" class="fa"
                [ngClass]="{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}" aria-hidden="true"></i>
            </span>
            <span *ngIf="column.resizable" class="column-resize-handle"
                  (mousedown)="resizeColumnStart($event, column, th)"></span>
          </button>
          <span *ngIf="!column.sortable">
            <span *ngIf="!column.headerTemplate"
                  [textContent]="column.header"></span>
            <span *ngIf="column.headerTemplate" [ngTemplateOutlet]="column.headerTemplate"
                  [ngTemplateOutletContext]="{column: column}"></span>
            <span class="column-sort-icon" *ngIf="column.sortable">
               <i [hide]="column.property === sortBy" class="fa fa-sort column-sortable-icon"
                  aria-hidden="true"></i>
               <i [hide]="column.property !== sortBy" class="fa"
                  [ngClass]="{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}" aria-hidden="true"></i>
            </span>
            <span *ngIf="column.resizable" class="column-resize-handle"
                  (mousedown)="resizeColumnStart($event, column, th)"></span>
          </span>
        </th>
      </tr>
      </thead>
      <tbody *ngFor="let item of items; let index=index" class="data-table-row-wrapper"
             dataTableRow #row [item]="item" [index]="index" (selectedChange)="onRowSelectChanged(row)">
      </tbody>
      <tbody *ngIf="itemCount === 0 && noDataMessage">
        <tr>
          <td [attr.colspan]="columnCount">{{ noDataMessage }}</td>
        </tr>
      </tbody>
      <tbody class="substitute-rows" *ngIf="pagination && substituteRows">
      <tr *ngFor="let item of substituteItems, let index = index"
          [class.row-odd]="(index + items.length) % 2 === 0"
          [class.row-even]="(index + items.length) % 2 === 1" role="presentation">
        <td [hide]="!expandColumnVisible"></td>
        <td [hide]="!indexColumnVisible">&nbsp;</td>
        <td [hide]="!selectColumnVisible"></td>
        <td *ngFor="let column of columns" [hide]="!column.visible">
      </tr>
      </tbody>
    </table>
    <div class="busy" *ngIf="showReloading && reloading">
      <i><i class="fa fa-spin fa-cog fa-2x"></i></i>
    </div>
  </div>

  <data-table-pagination *ngIf="pagination" [limits]="pageLimits"></data-table-pagination>
</div>
`,
                styles: [`:host /deep/ .data-table.table>tbody+tbody{border-top:none}:host /deep/ .data-table.table td{vertical-align:middle}:host /deep/ .data-table>tbody>tr>td,:host /deep/ .data-table>thead>tr>th{overflow:hidden}:host /deep/ .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host /deep/ .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host /deep/ .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec;table-layout:fixed}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy>i{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}`]
            },] },
];
/** @nocollapse */
DataTableComponent.ctorParameters = () => [];
DataTableComponent.propDecorators = {
    items: [{ type: Input }],
    itemCount: [{ type: Input }],
    columns: [{ type: ContentChildren, args: [DataTableColumnDirective,] }],
    rows: [{ type: ViewChildren, args: [DataTableRowComponent,] }],
    expandTemplate: [{ type: ContentChild, args: ['dataTableExpand',] }],
    title: [{ type: Input }],
    showTitle: [{ type: Input }],
    header: [{ type: Input }],
    pagination: [{ type: Input }],
    indexColumn: [{ type: Input }],
    indexColumnHeader: [{ type: Input }],
    rowColors: [{ type: Input }],
    rowTooltip: [{ type: Input }],
    selectColumn: [{ type: Input }],
    multiSelect: [{ type: Input }],
    substituteRows: [{ type: Input }],
    expandableRows: [{ type: Input }],
    labels: [{ type: Input }],
    selectOnRowClick: [{ type: Input }],
    autoReload: [{ type: Input }],
    showReloading: [{ type: Input }],
    noDataMessage: [{ type: Input }],
    pageLimits: [{ type: Input }],
    primaryColumn: [{ type: Input }],
    reload: [{ type: Output }],
    rowClick: [{ type: Output }],
    rowDoubleClick: [{ type: Output }],
    headerClick: [{ type: Output }],
    cellClick: [{ type: Output }],
    sortBy: [{ type: Input }],
    sortAsc: [{ type: Input }],
    offset: [{ type: Input }],
    limit: [{ type: Input }],
    page: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DataTableHeaderComponent {
    /**
     * @param {?} dataTable
     * @param {?} elemRef
     */
    constructor(dataTable, elemRef) {
        this.dataTable = dataTable;
        this.elemRef = elemRef;
        this.columnSelectorOpen = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickHandler(event) {
        if (!this.elemRef.nativeElement.contains(event.target)) {
            this.columnSelectorOpen = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUpHandler(event) {
        if (event.keyCode === 27 || (event.keyCode === 9 && !this.elemRef.nativeElement.contains(event.target))) {
            this.columnSelectorOpen = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /** @type {?} */
        const isChecked = (/** @type {?} */ (event.target)).checked;
        /** @type {?} */
        const columnName = (/** @type {?} */ (event.target)).parentElement.textContent.trim();
        /** @type {?} */
        const interpolateParams = {
            'column_name': columnName,
            'title': this.dataTable.title
        };
        this.dataTable.columnSelectorNotification = (isChecked ? this.dataTable.labels.headerColumnSelectorAdded :
            this.dataTable.labels.headerColumnSelectorRemoved)
            .replace('{column_name}', interpolateParams.column_name)
            .replace('{title}', interpolateParams.title);
    }
}
DataTableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'data-table-header',
                template: `<div class="data-table-header">
  <p class="h4 title" *ngIf="dataTable.showTitle" [textContent]="dataTable.title"></p>
  <div class="button-panel">
    <button type="button" class="btn btn-default btn-sm refresh-button"
            (click)="dataTable.reloadItems()">
      <i class="fa fa-refresh" aria-hidden="true"></i>
      <span class="sr-only">{{ dataTable.labels.headerReload.replace('{title}', dataTable.title) }}</span>
    </button>
    <button type="button" class="btn btn-default btn-sm column-selector-button" [class.active]="columnSelectorOpen"
            [attr.aria-haspopup]="true"
            [attr.aria-expanded]="columnSelectorOpen"
            (click)="columnSelectorOpen = !columnSelectorOpen;">
      <i class="fa fa-list" aria-hidden="true"></i>
      <span class="sr-only">{{ dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title) }}</span>
    </button>
    <div class="column-selector-wrapper">
      <div *ngIf="columnSelectorOpen" class="column-selector-box panel panel-default">
        <ul class="list-group list-group-flush">
          <li *ngIf="dataTable.expandableRows" class="list-group-item column-selector-column checkbox">
            <label class="d-flex align-items-center">
              <input type="checkbox" [(ngModel)]="dataTable.expandColumnVisible" (change)="onChange($event)" [attr.aria-controls]="dataTable.id"/>
              <span [textContent]="dataTable.labels.expandColumn"></span>
            </label>
          </li>
          <li *ngIf="dataTable.indexColumn" class="list-group-item column-selector-column checkbox">
            <label class="d-flex align-items-center">
              <input type="checkbox" [(ngModel)]="dataTable.indexColumnVisible" (change)="onChange($event)" [attr.aria-controls]="dataTable.id"/>
              <span [textContent]="dataTable.labels.indexColumn"></span>
            </label>
          </li>
          <li *ngIf="dataTable.selectColumn" class="list-group-item column-selector-column checkbox">
            <label class="d-flex align-items-center">
              <input type="checkbox" [(ngModel)]="dataTable.selectColumnVisible" (change)="onChange($event)" [attr.aria-controls]="dataTable.id"/>
              <span [textContent]="dataTable.labels.selectColumn"></span>
            </label>
          </li>
          <ng-template ngFor let-item let-i="index" [ngForOf]="dataTable.columns">
            <li class="list-group-item column-selector-column checkbox"
                *ngIf="dataTable.primaryColumn !== item.property">
              <label class="d-flex align-items-center">
                <input type="checkbox" [(ngModel)]="item.visible" (change)="onChange($event)" [attr.aria-controls]="dataTable.id"/>
                <span [textContent]="item.header"></span>
              </label>
            </li>
          </ng-template>
        </ul>
      </div>
    </div>
  </div>
</div>
`,
                styles: [`.data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:0!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}`]
            },] },
];
/** @nocollapse */
DataTableHeaderComponent.ctorParameters = () => [
    { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(() => DataTableComponent),] }] },
    { type: ElementRef }
];
DataTableHeaderComponent.propDecorators = {
    onClickHandler: [{ type: HostListener, args: ['document:click', ['$event'],] }],
    onKeyUpHandler: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
let nextId$1 = 0;
class DataTablePaginationComponent {
    /**
     * @param {?} dataTable
     */
    constructor(dataTable) {
        this.dataTable = dataTable;
        this.id = `pagination-${nextId$1++}`;
        this.Math = Math;
    }
    /**
     * @return {?}
     */
    pageBack() {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
        if (this.dataTable.offset <= 0) {
            this.pageInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    pageForward() {
        this.dataTable.offset += this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    pageFirst() {
        this.dataTable.offset = 0;
        this.pageInput.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    pageLast() {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    get maxPage() {
        return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
    }
    /**
     * @return {?}
     */
    get limit() {
        return this.dataTable.limit;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set limit(value) {
        this.dataTable.limit = +value;
        // returning back to the first page.
        this.page = 1;
    }
    /**
     * @return {?}
     */
    get page() {
        return this.dataTable.page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this.dataTable.page = +value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    validate(event) {
        /** @type {?} */
        const newValue = +event.target.value;
        if (newValue !== this.page) {
            this.page = (event.target.value > this.maxPage) ? this.maxPage : (newValue < 1) ? 1 : newValue;
            event.target.value = this.page;
        }
    }
}
DataTablePaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'data-table-pagination',
                template: `<div class="d-flex justify-content-between align-items-center">
  <div class="pagination-range">
    <span [textContent]="dataTable.labels.paginationText
        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')
        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')
        .replace('{total}', dataTable.itemCount + '')"></span>
  </div>
  <div class="pagination-controllers pagination-box d-flex justify-content-between">
    <div class="pagination-limit d-flex justify-content-between">
      <div class="input-group">
        <div class="input-group-prepend">
          <label [attr.for]="id + '-page-limit'" class="input-group-text" [textContent]="dataTable.labels.paginationLimit"></label>
        </div>
        <select [id]="id + '-page-limit'" class="form-control" [(ngModel)]="limit" [disabled]="dataTable.itemCount === 0">
          <option *ngFor="let l of limits" [value]="l">{{ l }}</option>
        </select>
      </div>
    </div>
    <div class="pagination-pages d-flex justify-content-between">
      <button [disabled]="dataTable.offset <= 0"
              (click)="pageFirst()"
              class="btn btn-default pagination-firstpage"
              [attr.aria-controls]="dataTable.id">
        <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        <span class="sr-only">{{ dataTable.labels.firstPage }} </span>
      </button>
      <button [disabled]="dataTable.offset <= 0"
              (click)="pageBack()"
              class="btn btn-default pagination-prevpage"
              [attr.aria-controls]="dataTable.id">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
        <span class="sr-only">{{ dataTable.labels.prevPage }} </span>
      </button>
      <div class="pagination-page">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" [attr.for]="id + '-page-input'">
              {{ dataTable.labels.pageNumberLabel }}
            </label>
          </div>
          <input #pageInput type="number"
                 [id]="id + '-page-input'"
                 class="form-control" min="1" step="1" max="{{maxPage}}"
                 [disabled]="dataTable.itemCount === 0"
                 [ngModel]="page"
                 (blur)="validate($event)"
                 (keyup.enter)="validate($event)"
                 (keyup.esc)="pageInput.value = page"
                 [title]="dataTable.labels.pageNumber + ' ' +
                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)"
                 [attr.aria-controls]="dataTable.id"/>
          <div class="input-group-append">
            <span class="input-group-text">
              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}
            </span>
          </div>
        </div>
      </div>
      <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount"
              (click)="pageForward()"
              class="btn btn-default pagination-nextpage"
              [attr.aria-controls]="dataTable.id">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        <span class="sr-only">{{ dataTable.labels.nextPage }}</span>
      </button>
      <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount"
              (click)="pageLast()"
              class="btn btn-default pagination-lastpage"
              [attr.aria-controls]="dataTable.id">
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        <span class="sr-only">{{ dataTable.labels.lastPage }}</span>
      </button>
    </div>
  </div>
</div>
`,
                styles: [`.pagination-controllers select{min-width:5rem;text-align:right}.pagination-pages>*{margin:0 .15rem}.pagination-limit{margin-right:1.5rem}.pagination-box button{outline:0!important}`]
            },] },
];
/** @nocollapse */
DataTablePaginationComponent.ctorParameters = () => [
    { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(() => DataTableComponent),] }] }
];
DataTablePaginationComponent.propDecorators = {
    pageInput: [{ type: ViewChild, args: ['pageInput',] }],
    limits: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxTableModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxTableModule,
            providers: []
        };
    }
}
NgxTableModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxTableModule, DataTableComponent as DataTable, DataTableColumnDirective as DataTableColumn, DataTableRowComponent as DataTableRow, DataTablePaginationComponent as DataTablePagination, DataTableHeaderComponent as DataTableHeader, DataTableResource, HideDirective as ɵb, MinPipe as ɵc, PixelConverter as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wZXRlY2gtbmd4LXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi91dGlscy9oaWRlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi91dGlscy9taW4udHMiLCJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvbGliL3V0aWxzL3B4LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi90b29scy9kYXRhLXRhYmxlLXJlc291cmNlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi9kaXJlY3RpdmVzL2NvbHVtbi9jb2x1bW4uZGlyZWN0aXZlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi90eXBlcy9kZWZhdWx0LXRyYW5zbGF0aW9ucy50eXBlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi91dGlscy9kcmFnLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS9saWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi9uZ3gtdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gaXNCbGFuayhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIEhpZGVEaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX3ByZXZDb25kaXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzcGxheVN0eWxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGlkZShuZXdDb25kaXRpb246IGJvb2xlYW4pIHtcbiAgICB0aGlzLmluaXREaXNwbGF5U3R5bGUoKTtcblxuICAgIGlmIChuZXdDb25kaXRpb24gJiYgKGlzQmxhbmsodGhpcy5fcHJldkNvbmRpdGlvbikgfHwgIXRoaXMuX3ByZXZDb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9wcmV2Q29uZGl0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSBlbHNlIGlmICghbmV3Q29uZGl0aW9uICYmIChpc0JsYW5rKHRoaXMuX3ByZXZDb25kaXRpb24pIHx8IHRoaXMuX3ByZXZDb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9wcmV2Q29uZGl0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCB0aGlzLl9kaXNwbGF5U3R5bGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdERpc3BsYXlTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fZGlzcGxheVN0eWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRpc3BsYXlTdHlsZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgaWYgKGRpc3BsYXlTdHlsZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlTdHlsZSA9IGRpc3BsYXlTdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AUGlwZSh7XG4gIG5hbWU6ICdtaW4nXG59KVxuZXhwb3J0IGNsYXNzIE1pblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXJbXSwgYXJnczogc3RyaW5nW10pOiBhbnkge1xuICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCB2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAncHgnXG59KVxuZXhwb3J0IGNsYXNzIFBpeGVsQ29udmVydGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBhcmdzOiBzdHJpbmdbXSA9IFtdKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHZhbHVlICsgJ3B4JztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7RGF0YVRhYmxlUGFyYW1zfSBmcm9tICcuLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcblxuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUmVzb3VyY2U8VD4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbXM6IFRbXSkge1xuICB9XG5cbiAgcXVlcnkocGFyYW1zOiBEYXRhVGFibGVQYXJhbXMsIGZpbHRlcj86IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBpdGVtczogVFtdKSA9PiBib29sZWFuKTogUHJvbWlzZTxUW10+IHtcblxuICAgIGxldCByZXN1bHQ6IFRbXSA9IFtdO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaXRlbXMuZmlsdGVyKGZpbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaXRlbXMuc2xpY2UoKTsgLy8gc2hhbGxvdyBjb3B5IHRvIHVzZSBmb3Igc29ydGluZyBpbnN0ZWFkIG9mIGNoYW5naW5nIHRoZSBvcmlnaW5hbFxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc29ydEJ5KSB7XG4gICAgICByZXN1bHQuc29ydCgoYTogRGF0YVRhYmxlUGFyYW1zLCBiOiBEYXRhVGFibGVQYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhW3BhcmFtcy5zb3J0QnldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBhW3BhcmFtcy5zb3J0QnldLmxvY2FsZUNvbXBhcmUoYltwYXJhbXMuc29ydEJ5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFbcGFyYW1zLnNvcnRCeV0gLSBiW3BhcmFtcy5zb3J0QnldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXJhbXMuc29ydEFzYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzdWx0LnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHBhcmFtcy5saW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShwYXJhbXMub2Zmc2V0LCByZXN1bHQubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShwYXJhbXMub2Zmc2V0LCBwYXJhbXMub2Zmc2V0ICsgcGFyYW1zLmxpbWl0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHJlc3VsdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRoaXMuaXRlbXMubGVuZ3RoKSk7XG4gICAgfSk7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHtDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFUYWJsZVJvd0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQge0NlbGxDYWxsYmFja30gZnJvbSAnLi4vLi4vdHlwZXMvY2VsbC1jYWxsYmFjay50eXBlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLWNvbHVtbidcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHN0eWxlQ2xhc3NPYmplY3QgPSB7fTsgLy8gZm9yIFtuZ0NsYXNzXVxuXG4gIC8vIGluaXQ6XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBzb3J0YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSByZXNpemFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJvcGVydHk6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjZWxsQ29sb3JzOiBDZWxsQ2FsbGJhY2s7XG5cbiAgLy8gaW5pdCBhbmQgc3RhdGU6XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUNlbGwnKSBjZWxsVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUhlYWRlcicpIGhlYWRlclRlbXBsYXRlOiBFbGVtZW50UmVmO1xuXG4gIGdldENlbGxDb2xvcihyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNlbGxDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Q2VsbENhbGxiYWNrPnRoaXMuY2VsbENvbG9ycykocm93Lml0ZW0sIHJvdywgdGhpcywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXRDZWxsQ2xhc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRDZWxsQ2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLnN0eWxlQ2xhc3MgJiYgdGhpcy5wcm9wZXJ0eSkge1xuICAgICAgaWYgKC9eW2EtekEtWjAtOV9dKyQvLnRlc3QodGhpcy5wcm9wZXJ0eSkpIHtcbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJ2NvbHVtbi0nICsgdGhpcy5wcm9wZXJ0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9ICdjb2x1bW4tJyArIHRoaXMucHJvcGVydHkucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3R5bGVDbGFzcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3NPYmplY3QgPSB7XG4gICAgICAgIFt0aGlzLnN0eWxlQ2xhc3NdOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tkYXRhVGFibGVSb3ddJyxcbiAgdGVtcGxhdGU6IGA8dHIgY2xhc3M9XCJkYXRhLXRhYmxlLXJvd1wiXG4gICAgW3RpdGxlXT1cImdldFRvb2x0aXAoKVwiXG4gICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiZGF0YVRhYmxlLmdldFJvd0NvbG9yKGl0ZW0sIGluZGV4LCBfdGhpcylcIlxuICAgIFtjbGFzcy5yb3ctb2RkXT1cImluZGV4ICUgMiA9PT0gMFwiXG4gICAgW2NsYXNzLnJvdy1ldmVuXT1cImluZGV4ICUgMiA9PT0gMVwiXG4gICAgW2NsYXNzLnNlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICBbY2xhc3MuY2xpY2thYmxlXT1cImRhdGFUYWJsZS5zZWxlY3RPblJvd0NsaWNrXCI+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLmV4cGFuZENvbHVtblZpc2libGVcIj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJleHBhbmRlZCA9ICFleHBhbmRlZDsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgY2xhc3M9XCJyb3ctZXhwYW5kLWJ1dHRvblwiXG4gICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImV4cGFuZGVkXCJcbiAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiXG4gICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kUm93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCI+XG4gICAgICA8aSBbbmdDbGFzc109XCJ7J2ZhLWNhcmV0LXJpZ2h0JzogIWV4cGFuZGVkLCAnZmEtY2FyZXQtZG93bic6IGV4cGFuZGVkfVwiIGNsYXNzPVwiZmEgZmEtbGdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gIDwvdGQ+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLmluZGV4Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiaW5kZXgtY29sdW1uXCIgW3RleHRDb250ZW50XT1cImRpc3BsYXlJbmRleFwiPjwvdGQ+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLnNlbGVjdENvbHVtblZpc2libGVcIiBjbGFzcz1cInNlbGVjdC1jb2x1bW5cIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLnNlbGVjdFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF0YVRhYmxlLmxhYmVscy5zZWxlY3RSb3cucmVwbGFjZSgne2NlbGxfY29udGVudH0nLCAnJytpdGVtW2RhdGFUYWJsZS5wcmltYXJ5Q29sdW1uXSlcIi8+XG4gIDwvdGQ+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJkYXRhVGFibGUuY29sdW1uc1wiIGxldC1jb2x1bW4+XG4gICAgPHRoICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gPT09IGNvbHVtbi5wcm9wZXJ0eVwiIHNjb3BlPVwicm93XCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCIgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIlxuICAgICAgICBjbGFzcz1cImRhdGEtY29sdW1uXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sdW1uLmdldENlbGxDb2xvcihfdGhpcywgaW5kZXgpXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbdGV4dENvbnRlbnRdPVwiaXRlbVtjb2x1bW4ucHJvcGVydHldXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1uLCByb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICAgIDwvdGg+XG4gICAgPHRkICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gIT09IGNvbHVtbi5wcm9wZXJ0eVwiIFtoaWRlXT1cIiFjb2x1bW4udmlzaWJsZVwiIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCJcbiAgICAgICAgY2xhc3M9XCJkYXRhLWNvbHVtblwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbHVtbi5nZXRDZWxsQ29sb3IoX3RoaXMsIGluZGV4KVwiPlxuICAgICAgPGRpdiAqbmdJZj1cIiFjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW3RleHRDb250ZW50XT1cIml0ZW1bY29sdW1uLnByb3BlcnR5XVwiPjwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbiwgcm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgICA8L3RkPlxuICA8L25nLXRlbXBsYXRlPlxuPC90cj5cbjx0ciAqbmdJZj1cImRhdGFUYWJsZS5leHBhbmRhYmxlUm93c1wiIFtoaWRlXT1cIiFleHBhbmRlZFwiIGNsYXNzPVwicm93LWV4cGFuc2lvblwiPlxuICA8dGQgW2F0dHIuY29sc3Bhbl09XCJkYXRhVGFibGUuY29sdW1uQ291bnRcIj5cbiAgICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRhdGFUYWJsZS5leHBhbmRUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7cm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgPC90ZD5cbjwvdHI+XG5gLFxuICBzdHlsZXM6IFtgLnNlbGVjdC1jb2x1bW57dGV4dC1hbGlnbjpjZW50ZXJ9LnJvdy1leHBhbmQtYnV0dG9ue2JveC1zaXppbmc6Y29udGVudC1ib3g7YmFja2dyb3VuZDowIDA7Ym9yZGVyOjA7Y29sb3I6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjtmb250OmluaGVyaXQ7bGluZS1oZWlnaHQ6bm9ybWFsO292ZXJmbG93OnZpc2libGU7cGFkZGluZzouMTVyZW0gLjc1cmVtOy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZX0uY2xpY2thYmxle2N1cnNvcjpwb2ludGVyfXRoe2ZvbnQtd2VpZ2h0OmluaXRpYWx9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBfdGhpcyA9IHRoaXM7XG5cbiAgQElucHV0KCkgaXRlbTogYW55O1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIGV4cGFuZGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IFtdO1xuXG4gIC8vIHJvdyBzZWxlY3Rpb246XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWQpO1xuICB9XG5cbiAgLy8gb3RoZXI6XG4gIGdldCBkaXNwbGF5SW5kZXgoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5kaXNwbGF5UGFyYW1zLm9mZnNldCArIHRoaXMuaW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleCArIDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG9vbHRpcCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93VG9vbHRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnJvd1Rvb2x0aXAodGhpcy5pdGVtLCB0aGlzLCB0aGlzLmluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd0NsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmRhdGFUYWJsZS5yb3dDbGlja2VkKHRoaXMsIGV2ZW50KSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dEb3VibGVDbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGJsY2xpY2snLFxuICAgICAgICAgIChldmVudCkgPT4gdGhpcy5kYXRhVGFibGUucm93RG91YmxlQ2xpY2tlZCh0aGlzLCBldmVudCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy50eXBlJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUcmFuc2xhdGlvbnM6IERhdGFUYWJsZVRyYW5zbGF0aW9ucyA9IHtcbiAgaGVhZGVyUmVsb2FkOiAncmVsb2FkIHt0aXRsZX0gdGFibGUnLFxuICBoZWFkZXJDb2x1bW5TZWxlY3RvcjogJ2NvbHVtbiBzZWxlY3RvciAtIGFkZHMgb3IgcmVtb3ZlcyBjb2x1bW5zIGZyb20ge3RpdGxlfSB0YWJsZScsXG4gIGhlYWRlckNvbHVtblNlbGVjdG9yQWRkZWQ6ICd7Y29sdW1uX25hbWV9IGFkZGVkIHRvIHt0aXRsZX0gdGFibGUnLFxuICBoZWFkZXJDb2x1bW5TZWxlY3RvclJlbW92ZWQ6ICd7Y29sdW1uX25hbWV9IHJlbW92ZWQgZnJvbSB7dGl0bGV9IHRhYmxlJyxcbiAgaW5kZXhDb2x1bW46ICdpbmRleCcsXG4gIHNlbGVjdENvbHVtbjogJ3NlbGVjdCcsXG4gIHNlbGVjdFJvdzogJ3NlbGVjdCB7Y2VsbF9jb250ZW50fScsXG4gIHNlbGVjdEFsbFJvd3M6ICdzZWxlY3QgYWxsIHJvd3MnLFxuICBleHBhbmRDb2x1bW46ICdleHBhbmQnLFxuICBleHBhbmRSb3c6ICdleHBhbmQge2NlbGxfY29udGVudH0nLFxuICBzb3J0ZWRBc2NlbmRpbmc6ICd7dGl0bGV9IHRhYmxlIHNvcnRlZCBieSB7aGVhZGVyfSBhc2NlbmRpbmcnLFxuICBzb3J0ZWREZXNjZW5kaW5nOiAne3RpdGxlfSB0YWJsZSBzb3J0ZWQgYnkge2hlYWRlcn0gZGVzY2VuZGluZycsXG4gIHNvcnRBc2NlbmRpbmc6ICdhY3RpdmF0ZSB0byBzb3J0IGFzY2VuZGluZycsXG4gIHNvcnREZXNjZW5kaW5nOiAnYWN0aXZhdGUgdG8gc29ydCBkZXNjZW5kaW5nJyxcbiAgcGFnaW5hdGlvbkxpbWl0OiAnTGltaXQnLFxuICBwYWdpbmF0aW9uVGV4dDogJ1Jlc3VsdHM6IHtmcm9tfSB0byB7dG99IG9mIHt0b3RhbH0nLFxuICBwYWdpbmF0aW9uVG90YWxQYWdlczogJ29mJyxcbiAgZmlyc3RQYWdlOiAnZmlyc3QgcGFnZScsXG4gIHByZXZQYWdlOiAncHJldmlvdXMgcGFnZScsXG4gIHBhZ2VOdW1iZXJMYWJlbDogJ1BhZ2UnLFxuICBwYWdlTnVtYmVyOiAncGFnZSBudW1iZXInLFxuICBwYWdlTnVtYmVyTm9mTTogJyh7Tn0gb2Yge019KScsXG4gIG5leHRQYWdlOiAnbmV4dCBwYWdlJyxcbiAgbGFzdFBhZ2U6ICdsYXN0IHBhZ2UnLFxuICBsb2FkaW5nVGV4dDogJ3t0aXRsZX0gdGFibGUgaXMgbG9hZGluZycsXG4gIGxvYWRlZFRleHQ6ICd7dGl0bGV9IHRhYmxlIGxvYWRlZCdcbn07XG4iLCJleHBvcnQgdHlwZSBNb3ZlSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlciwgZHk6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBVcEhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBtb3ZlZDogYm9vbGVhbikgPT4gdm9pZDtcblxuLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYWcoZXZlbnQ6IE1vdXNlRXZlbnQsIHttb3ZlOiBtb3ZlLCB1cDogdXB9OiB7IG1vdmU6IE1vdmVIYW5kbGVyLCB1cD86IFVwSGFuZGxlciB9KSB7XG5cbiAgY29uc3Qgc3RhcnRYID0gZXZlbnQucGFnZVg7XG4gIGNvbnN0IHN0YXJ0WSA9IGV2ZW50LnBhZ2VZO1xuICBsZXQgeCA9IHN0YXJ0WDtcbiAgbGV0IHkgPSBzdGFydFk7XG4gIGxldCBtb3ZlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZHggPSBldnQucGFnZVggLSB4O1xuICAgIGNvbnN0IGR5ID0gZXZ0LnBhZ2VZIC0geTtcbiAgICB4ID0gZXZ0LnBhZ2VYO1xuICAgIHkgPSBldnQucGFnZVk7XG4gICAgaWYgKGR4IHx8IGR5KSB7XG4gICAgICBtb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbW92ZShldnQsIGR4LCBkeSwgeCwgeSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyB0byBhdm9pZCB0ZXh0IHNlbGVjdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgeCA9IGV2dC5wYWdlWDtcbiAgICB5ID0gZXZ0LnBhZ2VZO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGlmICh1cCkge1xuICAgICAgdXAoZXZlbnQsIHgsIHksIG1vdmVkKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG5pbXBvcnQgeyBSb3dDYWxsYmFjayB9IGZyb20gJy4uLy4uL3R5cGVzL3Jvdy1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZGVmYXVsdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RlZmF1bHQtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZHJhZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RyYWcnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7IFxuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtd3JhcHBlclwiPlxuICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIiByb2xlPVwic3RhdHVzXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1hdG9taWM9XCJmYWxzZVwiIGFyaWEtcmVsZXZhbnQ9XCJ0ZXh0XCI+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cInJlbG9hZE5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwicGFnaW5hdGlvbk5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwic29ydE5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb25cIj48L3NwYW4+XG4gIDwvc3Bhbj5cblxuICA8ZGF0YS10YWJsZS1oZWFkZXIgKm5nSWY9XCJoZWFkZXJcIj48L2RhdGEtdGFibGUtaGVhZGVyPlxuXG4gIDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWJveFwiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGRhdGEtdGFibGVcIiBbaWRdPVwiaWRcIj5cbiAgICAgIDxjYXB0aW9uIGNsYXNzPVwic3Itb25seVwiIFt0ZXh0Q29udGVudF09XCJ0aXRsZVwiPjwvY2FwdGlvbj5cbiAgICAgIDx0aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFleHBhbmRDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJleHBhbmQtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBbaGlkZV09XCIhaW5kZXhDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJpbmRleC1jb2x1bW4taGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImluZGV4Q29sdW1uSGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICA8L3RoPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIXNlbGVjdENvbHVtblZpc2libGVcIiBjbGFzcz1cInNlbGVjdC1jb2x1bW4taGVhZGVyXCI+XG4gICAgICAgICAgPGlucHV0IFtoaWRlXT1cIiFtdWx0aVNlbGVjdFwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0QWxsQ2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImxhYmVscy5zZWxlY3RBbGxSb3dzXCJcbiAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbHMuc2VsZWN0QWxsUm93c1wiLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1ucywgaW5kZXggYXMgaVwiICN0aFxuICAgICAgICAgICAgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCJcbiAgICAgICAgICAgIFtjbGFzcy5zb3J0YWJsZV09XCJjb2x1bW4uc29ydGFibGVcIlxuICAgICAgICAgICAgW2NsYXNzLnJlc2l6YWJsZV09XCJjb2x1bW4ucmVzaXphYmxlXCJcbiAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtc29ydF09XCJjb2x1bW4uc29ydGFibGUgPyAoY29sdW1uLnByb3BlcnR5ID09PSBzb3J0QnkgPyAoc29ydEFzYyA/ICdhc2NlbmRpbmcnIDogJ2Rlc2NlbmRpbmcnKSA6ICdub25lJykgOiBudWxsXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCIgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCIgW3N0eWxlLndpZHRoXT1cImNvbHVtbi53aWR0aCB8IHB4XCIgPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIiAoY2xpY2spPVwiaGVhZGVyQ2xpY2tlZChjb2x1bW4sICRldmVudClcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJjb2x1bW4uc29ydGFibGUgPyBpZCA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiJ2NvbC0nK2lkKyctJytpXCJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCIhc29ydEFzYyA/IGxhYmVscy5zb3J0QXNjZW5kaW5nIDogbGFiZWxzLnNvcnREZXNjZW5kaW5nXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbaWRdPVwiJ2NvbC0nK2lkKyctJytpXCJcbiAgICAgICAgICAgICAgICAgIFt0ZXh0Q29udGVudF09XCJjb2x1bW4uaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbn1cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi1zb3J0LWljb25cIiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiPlxuICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeVwiIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeVwiIGNsYXNzPVwiZmFcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZmEtc29ydC1hc2MnOiBzb3J0QXNjLCAnZmEtc29ydC1kZXNjJzogIXNvcnRBc2N9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4ucmVzaXphYmxlXCIgY2xhc3M9XCJjb2x1bW4tcmVzaXplLWhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInJlc2l6ZUNvbHVtblN0YXJ0KCRldmVudCwgY29sdW1uLCB0aClcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1ufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLXNvcnQtaWNvblwiICpuZ0lmPVwiY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeVwiIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeVwiIGNsYXNzPVwiZmFcIlxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGluZGV4PWluZGV4XCIgY2xhc3M9XCJkYXRhLXRhYmxlLXJvdy13cmFwcGVyXCJcbiAgICAgICAgICAgICBkYXRhVGFibGVSb3cgI3JvdyBbaXRlbV09XCJpdGVtXCIgW2luZGV4XT1cImluZGV4XCIgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uUm93U2VsZWN0Q2hhbmdlZChyb3cpXCI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5ICpuZ0lmPVwiaXRlbUNvdW50ID09PSAwICYmIG5vRGF0YU1lc3NhZ2VcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImNvbHVtbkNvdW50XCI+e3sgbm9EYXRhTWVzc2FnZSB9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5IGNsYXNzPVwic3Vic3RpdHV0ZS1yb3dzXCIgKm5nSWY9XCJwYWdpbmF0aW9uICYmIHN1YnN0aXR1dGVSb3dzXCI+XG4gICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3Vic3RpdHV0ZUl0ZW1zLCBsZXQgaW5kZXggPSBpbmRleFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1vZGRdPVwiKGluZGV4ICsgaXRlbXMubGVuZ3RoKSAlIDIgPT09IDBcIlxuICAgICAgICAgIFtjbGFzcy5yb3ctZXZlbl09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFleHBhbmRDb2x1bW5WaXNpYmxlXCI+PC90ZD5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFpbmRleENvbHVtblZpc2libGVcIj4mbmJzcDs8L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIXNlbGVjdENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCI+XG4gICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgIDxkaXYgY2xhc3M9XCJidXN5XCIgKm5nSWY9XCJzaG93UmVsb2FkaW5nICYmIHJlbG9hZGluZ1wiPlxuICAgICAgPGk+PGkgY2xhc3M9XCJmYSBmYS1zcGluIGZhLWNvZyBmYS0yeFwiPjwvaT48L2k+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkYXRhLXRhYmxlLXBhZ2luYXRpb24gKm5nSWY9XCJwYWdpbmF0aW9uXCIgW2xpbWl0c109XCJwYWdlTGltaXRzXCI+PC9kYXRhLXRhYmxlLXBhZ2luYXRpb24+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2A6aG9zdCAvZGVlcC8gLmRhdGEtdGFibGUudGFibGU+dGJvZHkrdGJvZHl7Ym9yZGVyLXRvcDpub25lfTpob3N0IC9kZWVwLyAuZGF0YS10YWJsZS50YWJsZSB0ZHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Omhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlPnRib2R5PnRyPnRkLDpob3N0IC9kZWVwLyAuZGF0YS10YWJsZT50aGVhZD50cj50aHtvdmVyZmxvdzpoaWRkZW59Omhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlPnRoZWFkPnRyPnRke2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNkZWUyZTZ9Omhvc3QgL2RlZXAvIC5yb3ctb2Rke2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNn0uZGF0YS10YWJsZSAuc3Vic3RpdHV0ZS1yb3dzPnRyOmhvdmVyLDpob3N0IC9kZWVwLyAuZGF0YS10YWJsZSAuZGF0YS10YWJsZS1yb3c6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWNlY2VjfS5kYXRhLXRhYmxle2JveC1zaGFkb3c6MCAwIDE1cHggI2VjZWNlYzt0YWJsZS1sYXlvdXQ6Zml4ZWR9LmNvbHVtbi1oZWFkZXJ7cG9zaXRpb246cmVsYXRpdmV9LmV4cGFuZC1jb2x1bW4taGVhZGVye3dpZHRoOjUwcHh9LnNlbGVjdC1jb2x1bW4taGVhZGVye3dpZHRoOjUwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9LmluZGV4LWNvbHVtbi1oZWFkZXJ7d2lkdGg6NDBweH0uY29sdW1uLWhlYWRlci5zb3J0YWJsZSBidXR0b257Ym94LXNpemluZzpjb250ZW50LWJveDtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6MDtjb2xvcjppbmhlcml0O2N1cnNvcjpwb2ludGVyO2ZvbnQ6aW5oZXJpdDtsaW5lLWhlaWdodDpub3JtYWw7b3ZlcmZsb3c6dmlzaWJsZTtwYWRkaW5nOjA7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3RleHQtYWxpZ246bGVmdH0uY29sdW1uLWhlYWRlciAuY29sdW1uLXNvcnQtaWNvbnttYXJnaW4tbGVmdDo4cHh9LmNvbHVtbi1oZWFkZXIucmVzaXphYmxlIC5jb2x1bW4tc29ydC1pY29ue21hcmdpbi1yaWdodDo4cHh9LmNvbHVtbi1oZWFkZXIgLmNvbHVtbi1zb3J0LWljb24gLmNvbHVtbi1zb3J0YWJsZS1pY29ue2NvbG9yOiNkM2QzZDN9LmNvbHVtbi1oZWFkZXIgLmNvbHVtbi1yZXNpemUtaGFuZGxle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bWFyZ2luOjA7cGFkZGluZzowO3dpZHRoOjhweDtoZWlnaHQ6MTAwJTtjdXJzb3I6Y29sLXJlc2l6ZX0uZGF0YS10YWJsZS1ib3h7cG9zaXRpb246cmVsYXRpdmV9LmJ1c3l7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjUpfS5idXN5Pml7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgRGF0YVRhYmxlUGFyYW1zLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX2l0ZW1Db3VudDtcblxuICBASW5wdXQoKVxuICBnZXQgaXRlbXMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIHNldCBpdGVtcyhpdGVtczogYW55W10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIC8vIG5vIG5lZWQgdG8gY2FsbCBub3RpZmllci5uZXh0KCkgYmVjYXVzZSBfb25SZWxvYWRGaW5pc2hlZCgpXG4gICAgLy8gd2lsbCBjaGFuZ2UgcmVsb2FkZWQgdmFsdWUgY2F1c2luZyBub3RpZmllci5uZXh0KCkgdG8gYmUgY2FsbGVkIGltcGxpY2l0bHkuXG4gICAgdGhpcy5fb25SZWxvYWRGaW5pc2hlZCgpO1xuICB9XG5cblxuICBASW5wdXQoKVxuICBnZXQgaXRlbUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1Db3VudDtcbiAgfVxuXG4gIHNldCBpdGVtQ291bnQoY291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuX2l0ZW1Db3VudCA9IGNvdW50O1xuICAgIHRoaXMubm90aWZpZXIubmV4dCgpO1xuICB9XG5cbiAgLy8gVUkgY29tcG9uZW50czpcbiAgQENvbnRlbnRDaGlsZHJlbihEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpIGNvbHVtbnM6IFF1ZXJ5TGlzdDxEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU+O1xuICBAVmlld0NoaWxkcmVuKERhdGFUYWJsZVJvd0NvbXBvbmVudCkgcm93czogUXVlcnlMaXN0PERhdGFUYWJsZVJvd0NvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUV4cGFuZCcpIGV4cGFuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vIE9uZS10aW1lIG9wdGlvbmFsIGJpbmRpbmdzIHdpdGggZGVmYXVsdCB2YWx1ZXM6XG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGhlYWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBpbmRleENvbHVtbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uSGVhZGVyID0gJyc7XG4gIEBJbnB1dCgpIHJvd0NvbG9yczogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHJvd1Rvb2x0aXA6IFJvd0NhbGxiYWNrO1xuICBASW5wdXQoKSBzZWxlY3RDb2x1bW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbXVsdGlTZWxlY3QgPSB0cnVlO1xuICBASW5wdXQoKSBzdWJzdGl0dXRlUm93cyA9IHRydWU7XG4gIEBJbnB1dCgpIGV4cGFuZGFibGVSb3dzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsczogRGF0YVRhYmxlVHJhbnNsYXRpb25zO1xuICBASW5wdXQoKSBzZWxlY3RPblJvd0NsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9SZWxvYWQgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93UmVsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vRGF0YU1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgcGFnZUxpbWl0czogbnVtYmVyW10gPSBbMTAsIDI1LCA1MCwgMTAwLCAyNTBdO1xuICBASW5wdXQoKSBwcmltYXJ5Q29sdW1uID0gJyc7XG5cbiAgLy8gcmVsb2FkIGVtaXR0ZXJcbiAgQE91dHB1dCgpIHJlbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBldmVudCBoYW5kbGVyczpcbiAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcm93RG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoZWFkZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNlbGxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gVUkgc3RhdGUgd2l0aG91dCBpbnB1dDpcbiAgaW5kZXhDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuICBzZWxlY3RDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuICBleHBhbmRDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuXG4gIC8vIGFkYSBub3RpZmljYXRpb25zLlxuICByZWxvYWROb3RpZmljYXRpb246IHN0cmluZztcbiAgcGFnaW5hdGlvbk5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBzb3J0Tm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIGNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uOiBzdHJpbmc7XG5cbiAgX2Rpc3BsYXlQYXJhbXMgPSA8RGF0YVRhYmxlUGFyYW1zPnt9OyAvLyBwYXJhbXMgb2YgdGhlIGxhc3QgZmluaXNoZWQgcmVsb2FkXG5cbiAgc3ViamVjdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHN1YmplY3QkOiBTdWJzY3JpcHRpb247XG5cbiAgbm90aWZpZXIgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBub3RpZmllciQ6IFN1YnNjcmlwdGlvbjtcblxuICAvLyBzZWxlY3Rpb246XG4gIHNlbGVjdGVkUm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQ7XG4gIHNlbGVjdGVkUm93czogRGF0YVRhYmxlUm93Q29tcG9uZW50W10gPSBbXTtcblxuICBNYXRoOiBhbnk7XG4gIGlkID0gYGRhdGF0YWJsZS0ke25leHRJZCsrfWA7XG5cbiAgLy8gc2VsZWN0IGFsbCBjaGVja2JveCBmbGFnXG4gIHByaXZhdGUgX3NlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7XG5cbiAgLy8gY29sdW1uIHJlc2l6aW5nOlxuICBwcml2YXRlIF9yZXNpemVJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgcmVzaXplTGltaXQgPSAzMDtcblxuICAvLyBSZWxvYWRpbmc6XG4gIF9yZWxvYWRpbmcgPSBmYWxzZTtcblxuICBnZXQgcmVsb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWxvYWRpbmc7XG4gIH1cblxuICBzZXQgcmVsb2FkaW5nKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbG9hZGluZyA9IHZhbDtcbiAgICB0aGlzLm5vdGlmaWVyLm5leHQoKTtcbiAgfVxuXG4gIC8vIFVJIHN0YXRlOiB2aXNpYmxlIGdldC9zZXQgZm9yIHRoZSBvdXRzaWRlIHdpdGggQElucHV0IGZvciBvbmUtdGltZSBpbml0aWFsIHZhbHVlc1xuICBwcml2YXRlIF9zb3J0Qnk6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgc29ydEJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIHNldCBzb3J0QnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvcnRCeSA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9zb3J0QXNjID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgc29ydEFzYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEFzYztcbiAgfVxuXG4gIHNldCBzb3J0QXNjKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc29ydEFzYyA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXQgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBvZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICB9XG5cbiAgc2V0IG9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpbWl0ID0gMTA7XG5cbiAgQElucHV0KClcbiAgZ2V0IGxpbWl0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0O1xuICB9XG5cbiAgc2V0IGxpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9saW1pdCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVkIHByb3BlcnR5OlxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtQ291bnQgIT09IDAgPyBNYXRoLmZsb29yKHRoaXMub2Zmc2V0IC8gdGhpcy5saW1pdCkgKyAxIDogMDtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlKSB7XG4gICAgdGhpcy5vZmZzZXQgPSAodmFsdWUgLSAxKSAqIHRoaXMubGltaXQ7XG4gIH1cblxuICBnZXQgbGFzdFBhZ2UoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLml0ZW1Db3VudCAvIHRoaXMubGltaXQpO1xuICB9XG5cbiAgLy8gc2V0dGluZyBtdWx0aXBsZSBvYnNlcnZhYmxlIHByb3BlcnRpZXMgc2ltdWx0YW5lb3VzbHlcbiAgc29ydChzb3J0Qnk6IHN0cmluZywgYXNjOiBib29sZWFuKSB7XG4gICAgdGhpcy5zb3J0QnkgPSBzb3J0Qnk7XG4gICAgdGhpcy5zb3J0QXNjID0gYXNjO1xuICB9XG5cbiAgLy8gaW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pbml0RGVmYXVsdFZhbHVlcygpO1xuICAgIHRoaXMuX2luaXREZWZhdWx0Q2xpY2tFdmVudHMoKTtcbiAgICB0aGlzLl91cGRhdGVEaXNwbGF5UGFyYW1zKCk7XG5cbiAgICBpZiAodGhpcy5wYWdlTGltaXRzLmluZGV4T2YodGhpcy5saW1pdCkgPCAwKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gdGhpcy5wYWdlTGltaXRzWzBdO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxzID0gey4uLmRlZmF1bHRUcmFuc2xhdGlvbnMsIC4uLnRoaXMubGFiZWxzfTtcblxuICAgIGlmICh0aGlzLmF1dG9SZWxvYWQpIHtcbiAgICAgIHRoaXMucmVsb2FkSXRlbXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmaWVyJCA9IHRoaXMubm90aWZpZXIuc3Vic2NyaWJlKCgpID0+IHRoaXMuX25vdGlmeSgpKTtcbiAgICB0aGlzLnN1YmplY3QkID0gdGhpcy5zdWJqZWN0LnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbG9hZEl0ZW1zKCkpO1xuXG4gIH1cblxuICBwcml2YXRlIF9pbml0RGVmYXVsdFZhbHVlcygpIHtcbiAgICB0aGlzLmluZGV4Q29sdW1uVmlzaWJsZSA9IHRoaXMuaW5kZXhDb2x1bW47XG4gICAgdGhpcy5zZWxlY3RDb2x1bW5WaXNpYmxlID0gdGhpcy5zZWxlY3RDb2x1bW47XG4gICAgdGhpcy5leHBhbmRDb2x1bW5WaXNpYmxlID0gdGhpcy5leHBhbmRhYmxlUm93cztcbiAgfVxuXG4gIHByaXZhdGUgX2luaXREZWZhdWx0Q2xpY2tFdmVudHMoKSB7XG4gICAgdGhpcy5oZWFkZXJDbGljay5zdWJzY3JpYmUoXG4gICAgICAodGFibGVFdmVudDogeyBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgZXZlbnQ6IEV2ZW50IH0pID0+IHRoaXMuc29ydENvbHVtbih0YWJsZUV2ZW50LmNvbHVtbikpO1xuICAgIGlmICh0aGlzLnNlbGVjdE9uUm93Q2xpY2spIHtcbiAgICAgIHRoaXMucm93Q2xpY2suc3Vic2NyaWJlKFxuICAgICAgICAodGFibGVFdmVudDogeyByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50IH0pID0+IHRhYmxlRXZlbnQucm93LnNlbGVjdGVkID0gIXRhYmxlRXZlbnQucm93LnNlbGVjdGVkKTtcbiAgICB9XG4gIH1cblxuICByZWxvYWRJdGVtcygpIHtcbiAgICB0aGlzLnJlbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5yZWxvYWQuZW1pdCh0aGlzLl9nZXRSZW1vdGVQYXJhbWV0ZXJzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25SZWxvYWRGaW5pc2hlZCgpIHtcbiAgICBpZiAodGhpcy5yZWxvYWRpbmcpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlQYXJhbXMoKTtcbiAgICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBnZXQgZGlzcGxheVBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVBhcmFtcztcbiAgfVxuXG4gIF91cGRhdGVEaXNwbGF5UGFyYW1zKCkge1xuICAgIHRoaXMuX2Rpc3BsYXlQYXJhbXMgPSB7XG4gICAgICBzb3J0Qnk6IHRoaXMuc29ydEJ5LFxuICAgICAgc29ydEFzYzogdGhpcy5zb3J0QXNjLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHJvd0NsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93Q2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIHJvd0RvdWJsZUNsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93RG91YmxlQ2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIGhlYWRlckNsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCkge1xuICAgIGlmICghdGhpcy5fcmVzaXplSW5Qcm9ncmVzcykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5oZWFkZXJDbGljay5lbWl0KHtjb2x1bW4sIGV2ZW50fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTsgLy8gdGhpcyBpcyBiZWNhdXNlIEkgY2FuJ3QgcHJldmVudCBjbGljayBmcm9tIG1vdXN1cCBvZiB0aGUgZHJhZyBlbmRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmNlbGxDbGljay5lbWl0KHtyb3csIGNvbHVtbiwgZXZlbnR9KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uczpcbiAgcHJpdmF0ZSBfZ2V0UmVtb3RlUGFyYW1ldGVycygpOiBEYXRhVGFibGVQYXJhbXMge1xuICAgIGNvbnN0IHBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307XG5cbiAgICBpZiAodGhpcy5zb3J0QnkpIHtcbiAgICAgIHBhcmFtcy5zb3J0QnkgPSB0aGlzLnNvcnRCeTtcbiAgICAgIHBhcmFtcy5zb3J0QXNjID0gdGhpcy5zb3J0QXNjO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBwYXJhbXMub2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICBwYXJhbXMubGltaXQgPSB0aGlzLmxpbWl0O1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29sdW1uKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSB7XG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSkge1xuICAgICAgY29uc3QgYXNjZW5kaW5nID0gdGhpcy5zb3J0QnkgPT09IGNvbHVtbi5wcm9wZXJ0eSA/ICF0aGlzLnNvcnRBc2MgOiB0cnVlO1xuICAgICAgdGhpcy5zb3J0KGNvbHVtbi5wcm9wZXJ0eSwgYXNjZW5kaW5nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29sdW1uQ291bnQoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb3VudCArPSB0aGlzLmluZGV4Q29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIGNvdW50ICs9IHRoaXMuc2VsZWN0Q29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIGNvdW50ICs9IHRoaXMuZXhwYW5kQ29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIHRoaXMuY29sdW1ucy50b0FycmF5KCkuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgY291bnQgKz0gY29sdW1uLnZpc2libGUgPyAxIDogMDtcbiAgICB9KTtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Um93Q29sb3IoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuICAgIGlmICh0aGlzLnJvd0NvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKDxSb3dDYWxsYmFjaz50aGlzLnJvd0NvbG9ycykoaXRlbSwgcm93LCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdEFsbENoZWNrYm94KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RBbGxDaGVja2JveDtcbiAgfVxuXG4gIHNldCBzZWxlY3RBbGxDaGVja2JveCh2YWx1ZSkge1xuICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94ID0gdmFsdWU7XG4gICAgdGhpcy5fb25TZWxlY3RBbGxDaGFuZ2VkKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMucm93cy50b0FycmF5KCkuZm9yRWFjaChyb3cgPT4gcm93LnNlbGVjdGVkID0gdmFsdWUpO1xuICB9XG5cbiAgb25Sb3dTZWxlY3RDaGFuZ2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50KSB7XG5cbiAgICAvLyBtYWludGFpbiB0aGUgc2VsZWN0ZWRSb3cocykgdmlld1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KTtcbiAgICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgaW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICAgIH0gZWxzZSBpZiAoIXJvdy5zZWxlY3RlZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyb3cuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZFJvdyA9PT0gcm93KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkUm93O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVuc2VsZWN0IGFsbCBvdGhlciByb3dzOlxuICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgIXRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMucm93cy50b0FycmF5KCkuZmlsdGVyKHJvd18gPT4gcm93Xy5zZWxlY3RlZCkuZm9yRWFjaChyb3dfID0+IHtcbiAgICAgICAgaWYgKHJvd18gIT09IHJvdykgeyAvLyBhdm9pZCBlbmRsZXNzIGxvb3BcbiAgICAgICAgICByb3dfLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIG90aGVyOlxuXG4gIGdldCBzdWJzdGl0dXRlSXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogdGhpcy5kaXNwbGF5UGFyYW1zLmxpbWl0IC0gdGhpcy5pdGVtcy5sZW5ndGh9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydChldmVudDogTW91c2VFdmVudCwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fcmVzaXplSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0T2Zmc2V0ID0gY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCAtIGV2ZW50LnBhZ2VYO1xuICAgIGRyYWcoZXZlbnQsIHtcbiAgICAgIG1vdmU6IChtb3ZlRXZlbnQ6IE1vdXNlRXZlbnQsIGR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50LCBkeCkpIHtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBzdGFydE9mZnNldCArIG1vdmVFdmVudC5wYWdlWCArIGR4O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNSZXNpemVJbkxpbWl0KGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkeDogbnVtYmVyKSB7XG4gICAgLyogVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBDU1MgbWluLXdpZHRoIGRpZG4ndCB3b3JrIG9uIHRhYmxlLWxheW91dDogZml4ZWQuXG4gICAgICAgICBXaXRob3V0IHRoZSBsaW1pdHMsIHJlc2l6aW5nIGNhbiBtYWtlIHRoZSBuZXh0IGNvbHVtbiBkaXNhcHBlYXIgY29tcGxldGVseSxcbiAgICAgICAgIGFuZCBldmVuIGluY3JlYXNlIHRoZSB0YWJsZSB3aWR0aC4gVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gc3VmZmVycyBmcm9tIHRoZSBmYWN0LFxuICAgICAgICAgdGhhdCBvZmZzZXRXaWR0aCBzb21ldGltZXMgY29udGFpbnMgb3V0LW9mLWRhdGUgdmFsdWVzLiAqL1xuICAgIGlmICgoZHggPCAwICYmIChjb2x1bW5FbGVtZW50Lm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpIHx8XG4gICAgICAhY29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgLy8gcmVzaXppbmcgZG9lc24ndCBtYWtlIHNlbnNlIGZvciB0aGUgbGFzdCB2aXNpYmxlIGNvbHVtblxuICAgICAgKGR4ID49IDAgJiYgKCg8SFRNTEVsZW1lbnQ+IGNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmltYXJ5Q29sdW1uID09PSAnJykge1xuICAgICAgdGhpcy5wcmltYXJ5Q29sdW1uID0gKHRoaXMuY29sdW1ucy5maXJzdCBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpLnByb3BlcnR5O1xuICAgIH1cbiAgfVxuXG4gIF9ub3RpZnkoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMucmVsb2FkaW5nO1xuXG4gICAgdGhpcy5yZWxvYWROb3RpZmljYXRpb24gPSBsb2FkaW5nID9cbiAgICAgIHRoaXMubGFiZWxzLmxvYWRpbmdUZXh0LnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKSA6XG4gICAgICB0aGlzLmxhYmVscy5sb2FkZWRUZXh0LnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKTtcblxuICAgIGlmICghbG9hZGluZykge1xuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25Ob3RpZmljYXRpb24gPSB0aGlzLmxhYmVscy5wYWdpbmF0aW9uVGV4dFxuICAgICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCAnJyArIChNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KSAhPT0gMCA/IHRoaXMub2Zmc2V0ICsgMSA6ICcwJykpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCAnJyArIChNYXRoLm1pbih0aGlzLm9mZnNldCArIHRoaXMubGltaXQsIHRoaXMuaXRlbUNvdW50KSkpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCAnJyArIHRoaXMuaXRlbUNvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc29ydEJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5maW5kKGNvbHVtbiA9PiBjb2x1bW4ucHJvcGVydHkgPT09IHRoaXMuc29ydEJ5KSBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICh0aGlzLnNvcnRBc2MgPyB0aGlzLmxhYmVscy5zb3J0ZWRBc2NlbmRpbmcgOiB0aGlzLmxhYmVscy5zb3J0ZWREZXNjZW5kaW5nKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSlcbiAgICAgICAgICAucmVwbGFjZSgne2hlYWRlcn0nLCBjb2wuaGVhZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViamVjdCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmaWVyJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWhlYWRlclwiPlxuICA8cCBjbGFzcz1cImg0IHRpdGxlXCIgKm5nSWY9XCJkYXRhVGFibGUuc2hvd1RpdGxlXCIgW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS50aXRsZVwiPjwvcD5cbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1wYW5lbFwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSByZWZyZXNoLWJ1dHRvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGF0YVRhYmxlLnJlbG9hZEl0ZW1zKClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnt7IGRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyUmVsb2FkLnJlcGxhY2UoJ3t0aXRsZX0nLCBkYXRhVGFibGUudGl0bGUpIH19PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBjb2x1bW4tc2VsZWN0b3ItYnV0dG9uXCIgW2NsYXNzLmFjdGl2ZV09XCJjb2x1bW5TZWxlY3Rvck9wZW5cIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1oYXNwb3B1cF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiY29sdW1uU2VsZWN0b3JPcGVuXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjb2x1bW5TZWxlY3Rvck9wZW4gPSAhY29sdW1uU2VsZWN0b3JPcGVuO1wiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+e3sgZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3Rvci5yZXBsYWNlKCd7dGl0bGV9JywgZGF0YVRhYmxlLnRpdGxlKSB9fTwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNlbGVjdG9yLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW5TZWxlY3Rvck9wZW5cIiBjbGFzcz1cImNvbHVtbi1zZWxlY3Rvci1ib3ggcGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuZXhwYW5kYWJsZVJvd3NcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5leHBhbmRDb2x1bW5WaXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuaW5kZXhDb2x1bW5cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5pbmRleENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuaW5kZXhDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiZGF0YVRhYmxlLnNlbGVjdENvbHVtblwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLnNlbGVjdENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuc2VsZWN0Q29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBsZXQtaT1cImluZGV4XCIgW25nRm9yT2ZdPVwiZGF0YVRhYmxlLmNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGFUYWJsZS5wcmltYXJ5Q29sdW1uICE9PSBpdGVtLnByb3BlcnR5XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJpdGVtLnZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiaXRlbS5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AuZGF0YS10YWJsZS1oZWFkZXJ7bWluLWhlaWdodDoyNXB4O21hcmdpbi1ib3R0b206MTBweH0udGl0bGV7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjVweCAwIDAgNXB4fS5idXR0b24tcGFuZWx7ZmxvYXQ6cmlnaHR9LmJ1dHRvbi1wYW5lbCBidXR0b257b3V0bGluZTowIWltcG9ydGFudH0uY29sdW1uLXNlbGVjdG9yLXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmV9LmNvbHVtbi1zZWxlY3Rvci1ib3h7Ym94LXNoYWRvdzowIDAgMTBweCAjZDNkM2QzO2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxNTBweDtwYWRkaW5nOjEwcHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MXB4O3otaW5kZXg6MTA2MH0uY29sdW1uLXNlbGVjdG9yLWJveCAubGlzdC1ncm91cC1pdGVtLmNvbHVtbi1zZWxlY3Rvci1jb2x1bW57cGFkZGluZzouNXJlbSAuMjVyZW19LmNvbHVtbi1zZWxlY3Rvci1ib3ggLmxpc3QtZ3JvdXAtaXRlbS5jb2x1bW4tc2VsZWN0b3ItY29sdW1uIGxhYmVse21hcmdpbi1ib3R0b206MH0uY29sdW1uLXNlbGVjdG9yLWJveCAubGlzdC1ncm91cC1pdGVtLmNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gaW5wdXR7bWFyZ2luLXJpZ2h0OjRweDtmb250LXN0eWxlOml0YWxpY31gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQge1xuXG4gIGNvbHVtblNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpKSBwdWJsaWMgZGF0YVRhYmxlOiBEYXRhVGFibGVDb21wb25lbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGlmICghdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pIG9uS2V5VXBIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IChldmVudC5rZXlDb2RlID09PSA5ICYmICF0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSkge1xuICAgICAgdGhpcy5jb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50LnRhcmdldCkuY2hlY2tlZDtcbiAgICBjb25zdCBjb2x1bW5OYW1lID0gKDxIVE1MSW5wdXRFbGVtZW50PiBldmVudC50YXJnZXQpLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIGNvbnN0IGludGVycG9sYXRlUGFyYW1zID0ge1xuICAgICAgJ2NvbHVtbl9uYW1lJzogY29sdW1uTmFtZSxcbiAgICAgICd0aXRsZSc6IHRoaXMuZGF0YVRhYmxlLnRpdGxlXG4gICAgfTtcblxuICAgIHRoaXMuZGF0YVRhYmxlLmNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uID0gKGlzQ2hlY2tlZCA/IHRoaXMuZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3RvckFkZGVkIDpcbiAgICAgIHRoaXMuZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3RvclJlbW92ZWQpXG4gICAgICAucmVwbGFjZSgne2NvbHVtbl9uYW1lfScsIGludGVycG9sYXRlUGFyYW1zLmNvbHVtbl9uYW1lKVxuICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCBpbnRlcnBvbGF0ZVBhcmFtcy50aXRsZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50fSBmcm9tICcuLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1yYW5nZVwiPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCB0aGlzLk1hdGguY2VpbChkYXRhVGFibGUuaXRlbUNvdW50IC8gZGF0YVRhYmxlLmxpbWl0KSAhPT0gMCA/IGRhdGFUYWJsZS5vZmZzZXQgKyAxICsgJycgOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCd7dG99JywgdGhpcy5NYXRoLm1pbihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0LCBkYXRhVGFibGUuaXRlbUNvdW50KSArICcnKVxuICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsIGRhdGFUYWJsZS5pdGVtQ291bnQgKyAnJylcIj48L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1jb250cm9sbGVycyBwYWdpbmF0aW9uLWJveCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1saW1pdCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWQgKyAnLXBhZ2UtbGltaXQnXCIgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvbkxpbWl0XCI+PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWxlY3QgW2lkXT1cImlkICsgJy1wYWdlLWxpbWl0J1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJsaW1pdFwiIFtkaXNhYmxlZF09XCJkYXRhVGFibGUuaXRlbUNvdW50ID09PSAwXCI+XG4gICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbCBvZiBsaW1pdHNcIiBbdmFsdWVdPVwibFwiPnt7IGwgfX08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlcyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5vZmZzZXQgPD0gMFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJwYWdlRmlyc3QoKVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tZmlyc3RwYWdlXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+e3sgZGF0YVRhYmxlLmxhYmVscy5maXJzdFBhZ2UgfX0gPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkYXRhVGFibGUub2Zmc2V0IDw9IDBcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUJhY2soKVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tcHJldnBhZ2VcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnt7IGRhdGFUYWJsZS5sYWJlbHMucHJldlBhZ2UgfX0gPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgW2F0dHIuZm9yXT1cImlkICsgJy1wYWdlLWlucHV0J1wiPlxuICAgICAgICAgICAgICB7eyBkYXRhVGFibGUubGFiZWxzLnBhZ2VOdW1iZXJMYWJlbCB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgI3BhZ2VJbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgW2lkXT1cImlkICsgJy1wYWdlLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbWluPVwiMVwiIHN0ZXA9XCIxXCIgbWF4PVwie3ttYXhQYWdlfX1cIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLml0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cInBhZ2VcIlxuICAgICAgICAgICAgICAgICAoYmx1cik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInZhbGlkYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAoa2V5dXAuZXNjKT1cInBhZ2VJbnB1dC52YWx1ZSA9IHBhZ2VcIlxuICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTm9mTS5yZXBsYWNlKCd7Tn0nLCAnJytwYWdlKS5yZXBsYWNlKCd7TX0nLCAnJyttYXhQYWdlKVwiXG4gICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25Ub3RhbFBhZ2VzIH19Jm5ic3A7e3sgZGF0YVRhYmxlLmxhc3RQYWdlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIoZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCkgPj0gZGF0YVRhYmxlLml0ZW1Db3VudFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJwYWdlRm9yd2FyZCgpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1uZXh0cGFnZVwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnt7IGRhdGFUYWJsZS5sYWJlbHMubmV4dFBhZ2UgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0KSA+PSBkYXRhVGFibGUuaXRlbUNvdW50XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VMYXN0KClcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWxhc3RwYWdlXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnt7IGRhdGFUYWJsZS5sYWJlbHMubGFzdFBhZ2UgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AucGFnaW5hdGlvbi1jb250cm9sbGVycyBzZWxlY3R7bWluLXdpZHRoOjVyZW07dGV4dC1hbGlnbjpyaWdodH0ucGFnaW5hdGlvbi1wYWdlcz4qe21hcmdpbjowIC4xNXJlbX0ucGFnaW5hdGlvbi1saW1pdHttYXJnaW4tcmlnaHQ6MS41cmVtfS5wYWdpbmF0aW9uLWJveCBidXR0b257b3V0bGluZTowIWltcG9ydGFudH1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IHtcblxuICBpZCA9IGBwYWdpbmF0aW9uLSR7bmV4dElkKyt9YDtcblxuICBAVmlld0NoaWxkKCdwYWdlSW5wdXQnKSBwYWdlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgTWF0aDogYW55O1xuXG4gIEBJbnB1dCgpIGxpbWl0czogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCkge1xuICAgIHRoaXMuTWF0aCA9IE1hdGg7XG4gIH1cblxuICBwYWdlQmFjaygpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgLT0gTWF0aC5taW4odGhpcy5kYXRhVGFibGUubGltaXQsIHRoaXMuZGF0YVRhYmxlLm9mZnNldCk7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLm9mZnNldCA8PSAwKSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuICBwYWdlRm9yd2FyZCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKz0gdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKyB0aGlzLmRhdGFUYWJsZS5saW1pdCkgPj0gdGhpcy5kYXRhVGFibGUuaXRlbUNvdW50KSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcGFnZUZpcnN0KCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCA9IDA7XG4gICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcGFnZUxhc3QoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ID0gKHRoaXMubWF4UGFnZSAtIDEpICogdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKyB0aGlzLmRhdGFUYWJsZS5saW1pdCkgPj0gdGhpcy5kYXRhVGFibGUuaXRlbUNvdW50KSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heFBhZ2UoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQgLyB0aGlzLmRhdGFUYWJsZS5saW1pdCk7XG4gIH1cblxuICBnZXQgbGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICB9XG5cbiAgc2V0IGxpbWl0KHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhVGFibGUubGltaXQgPSArdmFsdWU7XG4gICAgLy8gcmV0dXJuaW5nIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgdGhpcy5wYWdlID0gMTtcbiAgfVxuXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5wYWdlID0gK3ZhbHVlO1xuICB9XG5cbiAgdmFsaWRhdGUoZXZlbnQpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZSA9IChldmVudC50YXJnZXQudmFsdWUgPiB0aGlzLm1heFBhZ2UpID8gdGhpcy5tYXhQYWdlIDogKG5ld1ZhbHVlIDwgMSApID8gMSA6IG5ld1ZhbHVlO1xuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5wYWdlO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gbW9kdWxlc1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdXRpbHNcbmltcG9ydCB7IEhpZGVEaXJlY3RpdmUgfSBmcm9tICcuL3V0aWxzL2hpZGUnO1xuaW1wb3J0IHsgTWluUGlwZSB9IGZyb20gJy4vdXRpbHMvbWluJztcbmltcG9ydCB7IFBpeGVsQ29udmVydGVyIH0gZnJvbSAnLi91dGlscy9weCc7XG4vLyB0eXBlcyAmIHRvb2xzXG5pbXBvcnQgeyBEYXRhVGFibGVUcmFuc2xhdGlvbnMgfSBmcm9tICcuL3R5cGVzL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgQ2VsbENhbGxiYWNrIH0gZnJvbSAnLi90eXBlcy9jZWxsLWNhbGxiYWNrLnR5cGUnO1xuaW1wb3J0IHsgUm93Q2FsbGJhY2sgfSBmcm9tICcuL3R5cGVzL3Jvdy1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZVJlc291cmNlIH0gZnJvbSAnLi90b29scy9kYXRhLXRhYmxlLXJlc291cmNlJztcbmltcG9ydCB7IERhdGFUYWJsZVBhcmFtcyB9IGZyb20gJy4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG4vLyBjb21wb25lbnRzICYgZGlyZWN0aXZlc1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbHVtbi9jb2x1bW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQge1xuICBEYXRhVGFibGVDb21wb25lbnQsIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgRGF0YVRhYmxlUm93Q29tcG9uZW50LCBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LCBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQsXG4gIERhdGFUYWJsZVJlc291cmNlLFxuICBEYXRhVGFibGVQYXJhbXMsIERhdGFUYWJsZVRyYW5zbGF0aW9ucyxcbiAgQ2VsbENhbGxiYWNrLCBSb3dDYWxsYmFja1xufTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0YVRhYmxlQ29tcG9uZW50LCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlUm93Q29tcG9uZW50LCBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LCBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQsXG4gICAgUGl4ZWxDb252ZXJ0ZXIsIEhpZGVEaXJlY3RpdmUsIE1pblBpcGVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbRGF0YVRhYmxlQ29tcG9uZW50LCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmVdXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4VGFibGVNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hUYWJsZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG5cblxuIl0sIm5hbWVzIjpbIm5leHRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBT0EsaUJBQWlCLEdBQVE7SUFDdkIsT0FBTyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUM7Q0FDMUM7QUFLRDs7Ozs7SUFLRSxZQUFvQixXQUF1QixFQUFVLFFBQW1CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzs4QkFIL0MsS0FBSztLQUk3Qjs7Ozs7SUFFRCxJQUNJLElBQUksQ0FBQyxZQUFxQjtRQUM1QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLFlBQVksS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzRTthQUFNLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDakYsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN2RjtLQUNGOzs7O0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7O1lBQ3BDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDbEUsSUFBSSxZQUFZLEtBQUssTUFBTSxFQUFFO2dCQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQzthQUNuQztTQUNGOzs7O1lBOUJKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTthQUNuQjs7OztZQVhDLFVBQVU7WUFFVixTQUFTOzs7bUJBa0JSLEtBQUs7Ozs7Ozs7QUN0QlI7Ozs7OztJQU9FLFNBQVMsQ0FBQyxLQUFlLEVBQUUsSUFBYztRQUN2QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNwQzs7O1lBTkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxLQUFLO2FBQ1o7Ozs7Ozs7QUNMRDs7Ozs7O0lBTUUsU0FBUyxDQUFDLEtBQXNCLEVBQUUsT0FBaUIsRUFBRTtRQUNuRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQztTQUNyQjtLQUNGOzs7WUFkRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLElBQUk7YUFDWDs7Ozs7Ozs7OztBQ0REOzs7O0lBRUUsWUFBb0IsS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7S0FDN0I7Ozs7OztJQUVELEtBQUssQ0FBQyxNQUF1QixFQUFFLE1BQXdEOztRQUVyRixJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDckIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFrQixFQUFFLENBQWtCO2dCQUNqRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ3hDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDNUM7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUM1QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7U0FDRjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwRTtTQUNGO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLFVBQVUsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ25DLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsS0FBSztRQUNILE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxVQUFVLENBQUMsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzlDLENBQUMsQ0FBQztLQUVKO0NBQ0Y7Ozs7OztBQ2hERDs7Z0NBVTZCLEVBQUU7d0JBSVQsS0FBSzt5QkFDSixLQUFLO3VCQU9QLElBQUk7Ozs7Ozs7SUFLdkIsWUFBWSxDQUFDLEdBQTBCLEVBQUUsS0FBYTtRQUNwRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE9BQU8sbUJBQWUsSUFBSSxDQUFDLFVBQVUsR0FBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEU7S0FDRjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzNFO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztnQkFDdEIsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUk7YUFDeEIsQ0FBQztTQUNIOzs7O1lBN0NKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOzs7cUJBTUUsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7b0JBR0wsS0FBSztzQkFDTCxLQUFLOzJCQUVMLFlBQVksU0FBQyxlQUFlOzZCQUM1QixZQUFZLFNBQUMsaUJBQWlCOzs7Ozs7O0FDekJqQzs7Ozs7O0lBdUdFLFlBQWlFLFNBQTZCLEVBQzFFLFVBQTZCLFVBQXNCO1FBRE4sY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDMUUsYUFBUSxHQUFSLFFBQVE7UUFBcUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtxQkF4Q3hELElBQUk7MEJBT0UsRUFBRTs4QkFLSSxJQUFJLFlBQVksRUFBRTtLQTRCOEI7Ozs7SUExQjNFLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBR0QsSUFBSSxZQUFZO1FBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUN2QjtLQUNGOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLEVBQUUsQ0FBQztLQUNYOzs7O0lBS0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFDekQsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQ3JELENBQUM7U0FDSDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFDNUQsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDM0QsQ0FBQztTQUNIO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDckM7OztZQTlHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkNYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHdWQUF3VixDQUFDO2FBQ25XOzs7O1lBakRRLGtCQUFrQix1QkEyRlosTUFBTSxTQUFDLFVBQVUsQ0FBQyxNQUFNLGtCQUFrQixDQUFDO1lBN0Z4RCxTQUFTO1lBUlQsVUFBVTs7O21CQWdFVCxLQUFLO29CQUNMLEtBQUs7NkJBU0wsTUFBTTs7Ozs7Ozs7QUMxRVQsTUFBYSxtQkFBbUIsR0FBMEI7SUFDeEQsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxvQkFBb0IsRUFBRSw4REFBOEQ7SUFDcEYseUJBQXlCLEVBQUUsc0NBQXNDO0lBQ2pFLDJCQUEyQixFQUFFLDBDQUEwQztJQUN2RSxXQUFXLEVBQUUsT0FBTztJQUNwQixZQUFZLEVBQUUsUUFBUTtJQUN0QixTQUFTLEVBQUUsdUJBQXVCO0lBQ2xDLGFBQWEsRUFBRSxpQkFBaUI7SUFDaEMsWUFBWSxFQUFFLFFBQVE7SUFDdEIsU0FBUyxFQUFFLHVCQUF1QjtJQUNsQyxlQUFlLEVBQUUsNENBQTRDO0lBQzdELGdCQUFnQixFQUFFLDZDQUE2QztJQUMvRCxhQUFhLEVBQUUsNEJBQTRCO0lBQzNDLGNBQWMsRUFBRSw2QkFBNkI7SUFDN0MsZUFBZSxFQUFFLE9BQU87SUFDeEIsY0FBYyxFQUFFLG9DQUFvQztJQUNwRCxvQkFBb0IsRUFBRSxJQUFJO0lBQzFCLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLGNBQWMsRUFBRSxjQUFjO0lBQzlCLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7SUFDdkMsVUFBVSxFQUFFLHNCQUFzQjtDQUNuQyxDQUFDOzs7Ozs7Ozs7OztBQ3pCRixjQUFxQixLQUFpQixFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUF3Qzs7SUFFakcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7SUFDM0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7SUFDM0IsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDOztJQUNmLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQzs7SUFDZixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7Ozs7O0lBRWxCLDBCQUEwQixHQUFlOztRQUN2QyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7UUFDekIsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNaLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3hCOzs7OztJQUVELHdCQUF3QixHQUFlO1FBQ3JDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2QsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFZCxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4RCxJQUFJLEVBQUUsRUFBRTtZQUNOLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QjtLQUNGO0lBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7Q0FDdEQ7Ozs7OztBQ3hDRDtBQTJCQSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUF1R2Y7SUE4T0U7c0JBNU93QixFQUFFOztxQkFnQ1QsRUFBRTt5QkFDRSxJQUFJO3NCQUNQLElBQUk7MEJBQ0EsSUFBSTsyQkFDSCxJQUFJO2lDQUNFLEVBQUU7NEJBR1AsS0FBSzsyQkFDTixJQUFJOzhCQUNELElBQUk7OEJBQ0osS0FBSztnQ0FFSCxLQUFLOzBCQUNYLElBQUk7NkJBQ0QsS0FBSzswQkFFRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7NkJBQzdCLEVBQUU7O3NCQUdSLElBQUksWUFBWSxFQUFFOzt3QkFHaEIsSUFBSSxZQUFZLEVBQUU7OEJBQ1osSUFBSSxZQUFZLEVBQUU7MkJBQ3JCLElBQUksWUFBWSxFQUFFO3lCQUNwQixJQUFJLFlBQVksRUFBRTtnREFZTixFQUFFO3VCQUUxQixJQUFJLE9BQU8sRUFBUTt3QkFHbEIsSUFBSSxPQUFPLEVBQVE7NEJBS1UsRUFBRTtrQkFHckMsYUFBYSxNQUFNLEVBQUUsRUFBRTtrQ0FHQyxLQUFLO2lDQUdOLEtBQUs7MkJBRW5CLEVBQUU7OzBCQUdILEtBQUs7d0JBd0JDLElBQUk7dUJBWUwsQ0FBQztzQkFZRixFQUFFO0tBNkZGOzs7O0lBek9qQixJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7O1FBR3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOzs7O0lBR0QsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7OztJQUVELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN0Qjs7OztJQXlFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBRUQsSUFBSSxTQUFTLENBQUMsR0FBWTtRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RCOzs7O0lBS0QsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNyQjs7OztJQUlELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDckI7Ozs7SUFJRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3JCOzs7O0lBSUQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNyQjs7OztJQUdELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVFOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3hDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9DOzs7Ozs7SUFHRCxJQUFJLENBQUMsTUFBYyxFQUFFLEdBQVk7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7S0FDcEI7Ozs7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxNQUFNLHFCQUFPLG1CQUFtQixFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FFMUY7Ozs7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7Ozs7O0lBR3pDLHVCQUF1QjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDeEIsQ0FBQyxVQUE4RCxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3JCLENBQUMsVUFBd0QsS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckg7Ozs7O0lBR0gsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7S0FDL0M7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7Ozs7O0lBRUgsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0tBQzVCOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7S0FDSDs7Ozs7O0lBSU0sVUFBVSxDQUFDLEdBQTBCLEVBQUUsS0FBWTtRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBRzVCLGdCQUFnQixDQUFDLEdBQTBCLEVBQUUsS0FBWTtRQUM5RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBR2xDLGFBQWEsQ0FBQyxNQUFnQyxFQUFFLEtBQVk7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7U0FDaEM7Ozs7Ozs7O0lBR0ssV0FBVyxDQUFDLE1BQWdDLEVBQUUsR0FBMEIsRUFBRSxLQUFpQjtRQUNqRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzs7Ozs7SUFJcEMsb0JBQW9COztRQUMxQixNQUFNLE1BQU0scUJBQW9CLEVBQUUsRUFBQztRQUVuQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDNUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFDRCxPQUFPLE1BQU0sQ0FBQzs7Ozs7O0lBR1IsVUFBVSxDQUFDLE1BQWdDO1FBQ2pELElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTs7WUFDbkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDekUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZDOzs7OztJQUdILElBQUksV0FBVzs7UUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFLLElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLEtBQUssSUFBSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ25DLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7OztJQUVNLFdBQVcsQ0FBQyxJQUFTLEVBQUUsS0FBYSxFQUFFLEdBQTBCO1FBQ3JFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDaEMsT0FBTyxtQkFBYyxJQUFJLENBQUMsU0FBUyxHQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEQ7Ozs7O0lBR0gsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7S0FDaEM7Ozs7O0lBRUQsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOzs7OztJQUVPLG1CQUFtQixDQUFDLEtBQWM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7Ozs7OztJQUczRCxrQkFBa0IsQ0FBQyxHQUEwQjs7UUFHM0MsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFOztZQUNwQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7YUFBTTtZQUNMLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7YUFDeEI7aUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEdBQUcsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pCO1NBQ0Y7O1FBR0QsSUFBSSxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJO2dCQUM1RCxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7O29CQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztpQkFDdkI7YUFDRixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBSUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7S0FDM0U7Ozs7Ozs7SUFFTSxpQkFBaUIsQ0FBQyxLQUFpQixFQUFFLE1BQWdDLEVBQUUsYUFBMEI7UUFDdEcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzs7UUFDOUIsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLEVBQUUsQ0FBQyxTQUFxQixFQUFFLEVBQVU7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDNUMsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7aUJBQ25EO2FBQ0Y7U0FDRixDQUFDLENBQUM7Ozs7Ozs7SUFHRyxnQkFBZ0IsQ0FBQyxhQUEwQixFQUFFLEVBQVU7Ozs7O1FBSzdELElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVc7WUFDakUsQ0FBQyxhQUFhLENBQUMsa0JBQWtCOzthQUNoQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQWUsYUFBYSxDQUFDLGtCQUFrQixHQUFFLFdBQVcsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RHLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQzs7Ozs7SUFHZCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBaUMsR0FBRSxRQUFRLENBQUM7U0FDaEY7S0FDRjs7OztJQUVELE9BQU87O1FBQ0wsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztxQkFDckQsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7cUJBQzlGLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3FCQUMxRSxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQzthQUNsQztZQUNELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7O2dCQUMzRCxNQUFNLEdBQUcscUJBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBNkIsRUFBQztnQkFDL0csSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQjtxQkFDL0YsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO3FCQUM5QixPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2FBQzVCO1NBQ0Y7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDOUI7OztZQTlmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0dYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLDI3Q0FBMjdDLENBQUM7YUFDdDhDOzs7OztvQkFNRSxLQUFLO3dCQWFMLEtBQUs7c0JBV0wsZUFBZSxTQUFDLHdCQUF3QjttQkFDeEMsWUFBWSxTQUFDLHFCQUFxQjs2QkFDbEMsWUFBWSxTQUFDLGlCQUFpQjtvQkFHOUIsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7cUJBQ0wsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQkFHTCxNQUFNO3VCQUdOLE1BQU07NkJBQ04sTUFBTTswQkFDTixNQUFNO3dCQUNOLE1BQU07cUJBa0ROLEtBQUs7c0JBWUwsS0FBSztxQkFZTCxLQUFLO29CQVlMLEtBQUs7bUJBV0wsS0FBSzs7Ozs7OztBQ2hTUjs7Ozs7SUFvRUUsWUFBaUUsU0FBNkIsRUFDMUU7UUFENkMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDMUUsWUFBTyxHQUFQLE9BQU87a0NBSE4sS0FBSztLQUl6Qjs7Ozs7SUFFMkMsY0FBYyxDQUFDLEtBQUs7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNqQztLQUNGOzs7OztJQUUyQyxjQUFjLENBQUMsS0FBSztRQUM5RCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ3ZHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDakM7S0FDRjs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBWTs7UUFDbkIsTUFBTSxTQUFTLEdBQUcsbUJBQW9CLEtBQUssQ0FBQyxNQUFNLEdBQUUsT0FBTyxDQUFDOztRQUM1RCxNQUFNLFVBQVUsR0FBRyxtQkFBb0IsS0FBSyxDQUFDLE1BQU0sR0FBRSxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOztRQUN0RixNQUFNLGlCQUFpQixHQUFHO1lBQ3hCLGFBQWEsRUFBRSxVQUFVO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7U0FDOUIsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMseUJBQXlCO1lBQ3RHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDJCQUEyQjthQUNoRCxPQUFPLENBQUMsZUFBZSxFQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQzthQUN2RCxPQUFPLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hEOzs7WUF2RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrRFg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMseW1CQUF5bUIsQ0FBQzthQUNwbkI7Ozs7WUF4RFEsa0JBQWtCLHVCQTZEWixNQUFNLFNBQUMsVUFBVSxDQUFDLE1BQU0sa0JBQWtCLENBQUM7WUFsRXhELFVBQVU7Ozs2QkFzRVQsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOzZCQU16QyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7QUM5RTVDO0FBVUEsSUFBSUEsUUFBTSxHQUFHLENBQUMsQ0FBQztBQWtGZjs7OztJQVVFLFlBQWlFLFNBQTZCO1FBQTdCLGNBQVMsR0FBVCxTQUFTLENBQW9CO2tCQVJ6RixjQUFjQSxRQUFNLEVBQUUsRUFBRTtRQVMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNsQjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEM7S0FDSjs7OztJQUNDLFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDOUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEM7S0FDRjs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdEM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDOUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEM7S0FDRjs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25FOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztLQUM3Qjs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0tBQzVCOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztLQUM5Qjs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBSzs7UUFDWixNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUNoRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2hDO0tBQ0Y7OztZQW5KRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyRVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsc0xBQXNMLENBQUM7YUFDak07Ozs7WUFuRlEsa0JBQWtCLHVCQThGWixNQUFNLFNBQUMsVUFBVSxDQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozt3QkFOdkQsU0FBUyxTQUFDLFdBQVc7cUJBSXJCLEtBQUs7Ozs7Ozs7QUNuR1I7Ozs7SUEyQ1MsT0FBTyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7Ozs7WUFsQkwsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixrQkFBa0IsRUFBRSx3QkFBd0I7b0JBQzVDLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLHdCQUF3QjtvQkFDN0UsY0FBYyxFQUFFLGFBQWEsRUFBRSxPQUFPO2lCQUN2QztnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO2lCQUNaO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHdCQUF3QixDQUFDO2FBQ3hEOzs7Ozs7Ozs7Ozs7Ozs7In0=