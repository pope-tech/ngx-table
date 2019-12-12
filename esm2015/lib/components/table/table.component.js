/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { DataTableColumnDirective } from '../../directives/column/column.directive';
import { DataTableRowComponent } from '../row/row.component';
import { defaultTranslations } from '../../types/default-translations.type';
import { drag } from '../../utils/drag';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
/** @type {?} */
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
        this._displayParams = (/** @type {?} */ ({})); // params of the last finished reload
        // params of the last finished reload
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
    // calculated property:
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
    // setting multiple observable properties simultaneously
    /**
     * @param {?} sortBy
     * @param {?} asc
     * @return {?}
     */
    sort(sortBy, asc) {
        this.sortBy = sortBy;
        this.sortAsc = asc;
    }
    // init
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
        this.notifier$ = this.notifier.subscribe((/**
         * @return {?}
         */
        () => this._notify()));
        this.subject$ = this.subject.pipe(debounceTime(100)).subscribe((/**
         * @return {?}
         */
        () => this.reloadItems()));
    }
    /**
     * @private
     * @return {?}
     */
    _initDefaultValues() {
        this.indexColumnVisible = this.indexColumn;
        this.selectColumnVisible = this.selectColumn;
        this.expandColumnVisible = this.expandableRows;
    }
    /**
     * @private
     * @return {?}
     */
    _initDefaultClickEvents() {
        this.headerClick.subscribe((/**
         * @param {?} tableEvent
         * @return {?}
         */
        (tableEvent) => this.sortColumn(tableEvent.column)));
        if (this.selectOnRowClick) {
            this.rowClick.subscribe((/**
             * @param {?} tableEvent
             * @return {?}
             */
            (tableEvent) => tableEvent.row.selected = !tableEvent.row.selected));
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
     * @private
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
     * @private
     * @param {?} column
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    cellClicked(column, row, event) {
        this.cellClick.emit({ row, column, event });
    }
    // functions:
    /**
     * @private
     * @return {?}
     */
    _getRemoteParameters() {
        /** @type {?} */
        const params = (/** @type {?} */ ({}));
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
     * @private
     * @param {?} column
     * @return {?}
     */
    sortColumn(column) {
        if (column.sortable) {
            /** @type {?} */
            const ascending = this.sortBy === column.property ? !this.sortAsc : true;
            if (column.property === this.sortBy && !this.sortAsc) {
                this.sort(undefined, true);
                return;
            }
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
        this.columns.toArray().forEach((/**
         * @param {?} column
         * @return {?}
         */
        column => {
            count += column.visible ? 1 : 0;
        }));
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
            return ((/** @type {?} */ (this.rowColors)))(item, row, index);
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
     * @private
     * @param {?} value
     * @return {?}
     */
    _onSelectAllChanged(value) {
        this.rows.toArray().forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => row.selected = value));
        this.selectedRowsChange.emit(this.selectedRows);
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
            this.rows.toArray().filter((/**
             * @param {?} row_
             * @return {?}
             */
            row_ => row_.selected)).forEach((/**
             * @param {?} row_
             * @return {?}
             */
            row_ => {
                if (row_ !== row) { // avoid endless loop
                    row_.selected = false;
                }
            }));
        }
        this.selectedRowsChange.emit(this.selectedRows);
    }
    // other:
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
            move: (/**
             * @param {?} moveEvent
             * @param {?} dx
             * @return {?}
             */
            (moveEvent, dx) => {
                if (this._isResizeInLimit(columnElement, dx)) {
                    column.width = startOffset + moveEvent.pageX + dx;
                }
            }),
        });
    }
    /**
     * @private
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
            (dx >= 0 && (((/** @type {?} */ (columnElement.nextElementSibling))).offsetWidth + dx) <= this.resizeLimit)) {
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.primaryColumn === '') {
            this.primaryColumn = ((/** @type {?} */ (this.columns.first))).property;
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
                const col = (/** @type {?} */ (this.columns.toArray().find((/**
                 * @param {?} column
                 * @return {?}
                 */
                column => column.property === this.sortBy))));
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
                template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    <span [textContent]=\"reloadNotification\"></span>\n    <span [textContent]=\"paginationNotification\"></span>\n    <span [textContent]=\"sortNotification\"></span>\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\" [class]=\"wrapperClass\">\n    <table class=\"table data-table\" [id]=\"id\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <td [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <input [hide]=\"!multiSelect\"\n                 type=\"checkbox\"\n                 [(ngModel)]=\"selectAllCheckbox\"\n                 [disabled]=\"itemCount === 0\"\n                 [title]=\"labels.selectAllRows\"\n                 [attr.aria-label]=\"labels.selectAllRows\"/>\n        </td>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\"\n                  [title]=\"!sortAsc ? labels.sortAscending : labels.sortDescending\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                aria-hidden=\"true\"></i>\n              <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n",
                styles: [":host /deep/ .data-table.table>tbody+tbody{border-top:none}:host /deep/ .data-table.table td{vertical-align:middle}:host /deep/ .data-table>tbody>tr>td,:host /deep/ .data-table>thead>tr>th{overflow:hidden}:host /deep/ .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host /deep/ .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host /deep/ .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy>i{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]
            }] }
];
/** @nocollapse */
DataTableComponent.ctorParameters = () => [];
DataTableComponent.propDecorators = {
    wrapperClass: [{ type: Input }],
    items: [{ type: Input }],
    itemCount: [{ type: Input }],
    columns: [{ type: ContentChildren, args: [DataTableColumnDirective,] }],
    rows: [{ type: ViewChildren, args: [DataTableRowComponent,] }],
    expandTemplate: [{ type: ContentChild, args: ['dataTableExpand', { static: true },] }],
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
    selectedRowsChange: [{ type: Output }],
    visibleColumnsChange: [{ type: Output }],
    sortBy: [{ type: Input }],
    sortAsc: [{ type: Input }],
    offset: [{ type: Input }],
    limit: [{ type: Input }],
    page: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype._items;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype._itemCount;
    /** @type {?} */
    DataTableComponent.prototype.wrapperClass;
    /** @type {?} */
    DataTableComponent.prototype.columns;
    /** @type {?} */
    DataTableComponent.prototype.rows;
    /** @type {?} */
    DataTableComponent.prototype.expandTemplate;
    /** @type {?} */
    DataTableComponent.prototype.title;
    /** @type {?} */
    DataTableComponent.prototype.showTitle;
    /** @type {?} */
    DataTableComponent.prototype.header;
    /** @type {?} */
    DataTableComponent.prototype.pagination;
    /** @type {?} */
    DataTableComponent.prototype.indexColumn;
    /** @type {?} */
    DataTableComponent.prototype.indexColumnHeader;
    /** @type {?} */
    DataTableComponent.prototype.rowColors;
    /** @type {?} */
    DataTableComponent.prototype.rowTooltip;
    /** @type {?} */
    DataTableComponent.prototype.selectColumn;
    /** @type {?} */
    DataTableComponent.prototype.multiSelect;
    /** @type {?} */
    DataTableComponent.prototype.substituteRows;
    /** @type {?} */
    DataTableComponent.prototype.expandableRows;
    /** @type {?} */
    DataTableComponent.prototype.labels;
    /** @type {?} */
    DataTableComponent.prototype.selectOnRowClick;
    /** @type {?} */
    DataTableComponent.prototype.autoReload;
    /** @type {?} */
    DataTableComponent.prototype.showReloading;
    /** @type {?} */
    DataTableComponent.prototype.noDataMessage;
    /** @type {?} */
    DataTableComponent.prototype.pageLimits;
    /** @type {?} */
    DataTableComponent.prototype.primaryColumn;
    /** @type {?} */
    DataTableComponent.prototype.reload;
    /** @type {?} */
    DataTableComponent.prototype.rowClick;
    /** @type {?} */
    DataTableComponent.prototype.rowDoubleClick;
    /** @type {?} */
    DataTableComponent.prototype.headerClick;
    /** @type {?} */
    DataTableComponent.prototype.cellClick;
    /** @type {?} */
    DataTableComponent.prototype.selectedRowsChange;
    /** @type {?} */
    DataTableComponent.prototype.visibleColumnsChange;
    /** @type {?} */
    DataTableComponent.prototype.indexColumnVisible;
    /** @type {?} */
    DataTableComponent.prototype.selectColumnVisible;
    /** @type {?} */
    DataTableComponent.prototype.expandColumnVisible;
    /** @type {?} */
    DataTableComponent.prototype.reloadNotification;
    /** @type {?} */
    DataTableComponent.prototype.paginationNotification;
    /** @type {?} */
    DataTableComponent.prototype.sortNotification;
    /** @type {?} */
    DataTableComponent.prototype.columnSelectorNotification;
    /** @type {?} */
    DataTableComponent.prototype._displayParams;
    /** @type {?} */
    DataTableComponent.prototype.subject;
    /** @type {?} */
    DataTableComponent.prototype.subject$;
    /** @type {?} */
    DataTableComponent.prototype.notifier;
    /** @type {?} */
    DataTableComponent.prototype.notifier$;
    /** @type {?} */
    DataTableComponent.prototype.selectedRow;
    /** @type {?} */
    DataTableComponent.prototype.selectedRows;
    /** @type {?} */
    DataTableComponent.prototype.Math;
    /** @type {?} */
    DataTableComponent.prototype.id;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype._selectAllCheckbox;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype._resizeInProgress;
    /** @type {?} */
    DataTableComponent.prototype.resizeLimit;
    /** @type {?} */
    DataTableComponent.prototype._reloading;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype._sortBy;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype._sortAsc;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype._offset;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype._limit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSTdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxZQUFZLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFL0MsTUFBTSxHQUFHLENBQUM7QUFPZCxNQUFNLE9BQU8sa0JBQWtCO0lBbVA3QjtRQWpQUSxXQUFNLEdBQVUsRUFBRSxDQUFDOztRQWtDbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBR3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLHFCQUFn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eUNBQTRCOztJQUM1QiwrQ0FBZ0M7O0lBQ2hDLHVDQUFnQzs7SUFDaEMsd0NBQWlDOztJQUNqQywwQ0FBOEI7O0lBQzlCLHlDQUE0Qjs7SUFDNUIsNENBQStCOztJQUMvQiw0Q0FBZ0M7O0lBQ2hDLG9DQUF1Qzs7SUFDdkMsOENBQWtDOztJQUNsQyx3Q0FBMkI7O0lBQzNCLDJDQUErQjs7SUFDL0IsMkNBQStCOztJQUMvQix3Q0FBdUQ7O0lBQ3ZELDJDQUE0Qjs7SUFHNUIsb0NBQXNDOztJQUd0QyxzQ0FBd0M7O0lBQ3hDLDRDQUE4Qzs7SUFDOUMseUNBQTJDOztJQUMzQyx1Q0FBeUM7O0lBQ3pDLGdEQUFrRDs7SUFDbEQsa0RBQW9EOztJQUVwRCxnREFBNEI7O0lBQzVCLGlEQUE2Qjs7SUFDN0IsaURBQTZCOztJQUc3QixnREFBMkI7O0lBQzNCLG9EQUErQjs7SUFDL0IsOENBQXlCOztJQUN6Qix3REFBbUM7O0lBRW5DLDRDQUFxQzs7SUFFckMscUNBQThCOztJQUM5QixzQ0FBdUI7O0lBRXZCLHNDQUErQjs7SUFDL0IsdUNBQXdCOztJQUd4Qix5Q0FBbUM7O0lBQ25DLDBDQUEyQzs7SUFFM0Msa0NBQVU7O0lBQ1YsZ0NBQTZCOzs7OztJQUc3QixnREFBbUM7Ozs7O0lBR25DLCtDQUFrQzs7SUFFbEMseUNBQWlCOztJQUdqQix3Q0FBbUI7Ozs7O0lBWW5CLHFDQUF3Qjs7Ozs7SUFZeEIsc0NBQXdCOzs7OztJQVl4QixxQ0FBb0I7Ozs7O0lBWXBCLG9DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG5pbXBvcnQgeyBSb3dDYWxsYmFjayB9IGZyb20gJy4uLy4uL3R5cGVzL3Jvdy1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZGVmYXVsdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RlZmF1bHQtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZHJhZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RyYWcnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIERhdGFUYWJsZVBhcmFtcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9pdGVtQ291bnQ7XG5cbiAgQElucHV0KCkgd3JhcHBlckNsYXNzO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgLy8gbm8gbmVlZCB0byBjYWxsIG5vdGlmaWVyLm5leHQoKSBiZWNhdXNlIF9vblJlbG9hZEZpbmlzaGVkKClcbiAgICAvLyB3aWxsIGNoYW5nZSByZWxvYWRlZCB2YWx1ZSBjYXVzaW5nIG5vdGlmaWVyLm5leHQoKSB0byBiZSBjYWxsZWQgaW1wbGljaXRseS5cbiAgICB0aGlzLl9vblJlbG9hZEZpbmlzaGVkKCk7XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbUNvdW50O1xuICB9XG5cbiAgc2V0IGl0ZW1Db3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbUNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBjb21wb25lbnRzOlxuICBAQ29udGVudENoaWxkcmVuKERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkgY29sdW1uczogUXVlcnlMaXN0PERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YVRhYmxlUm93Q29tcG9uZW50KSByb3dzOiBRdWVyeUxpc3Q8RGF0YVRhYmxlUm93Q29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlRXhwYW5kJywgeyBzdGF0aWM6IHRydWUgfSkgZXhwYW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gT25lLXRpbWUgb3B0aW9uYWwgYmluZGluZ3Mgd2l0aCBkZWZhdWx0IHZhbHVlczpcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgaGVhZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5kZXhDb2x1bW5IZWFkZXIgPSAnJztcbiAgQElucHV0KCkgcm93Q29sb3JzOiBSb3dDYWxsYmFjaztcbiAgQElucHV0KCkgcm93VG9vbHRpcDogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHNlbGVjdENvbHVtbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtdWx0aVNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHN1YnN0aXR1dGVSb3dzID0gdHJ1ZTtcbiAgQElucHV0KCkgZXhwYW5kYWJsZVJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWxzOiBEYXRhVGFibGVUcmFuc2xhdGlvbnM7XG4gIEBJbnB1dCgpIHNlbGVjdE9uUm93Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b1JlbG9hZCA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dSZWxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9EYXRhTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlTGltaXRzOiBudW1iZXJbXSA9IFsxMCwgMjUsIDUwLCAxMDAsIDI1MF07XG4gIEBJbnB1dCgpIHByaW1hcnlDb2x1bW4gPSAnJztcblxuICAvLyByZWxvYWQgZW1pdHRlclxuICBAT3V0cHV0KCkgcmVsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGV2ZW50IGhhbmRsZXJzOlxuICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByb3dEb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhlYWRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2VsbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRSb3dzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmlzaWJsZUNvbHVtbnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIFVJIHN0YXRlIHdpdGhvdXQgaW5wdXQ6XG4gIGluZGV4Q29sdW1uVmlzaWJsZTogYm9vbGVhbjtcbiAgc2VsZWN0Q29sdW1uVmlzaWJsZTogYm9vbGVhbjtcbiAgZXhwYW5kQ29sdW1uVmlzaWJsZTogYm9vbGVhbjtcblxuICAvLyBhZGEgbm90aWZpY2F0aW9ucy5cbiAgcmVsb2FkTm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIHBhZ2luYXRpb25Ob3RpZmljYXRpb246IHN0cmluZztcbiAgc29ydE5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvbjogc3RyaW5nO1xuXG4gIF9kaXNwbGF5UGFyYW1zID0gPERhdGFUYWJsZVBhcmFtcz57fTsgLy8gcGFyYW1zIG9mIHRoZSBsYXN0IGZpbmlzaGVkIHJlbG9hZFxuXG4gIHN1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBzdWJqZWN0JDogU3Vic2NyaXB0aW9uO1xuXG4gIG5vdGlmaWVyID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgbm90aWZpZXIkOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gc2VsZWN0aW9uOlxuICBzZWxlY3RlZFJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50O1xuICBzZWxlY3RlZFJvd3M6IERhdGFUYWJsZVJvd0NvbXBvbmVudFtdID0gW107XG5cbiAgTWF0aDogYW55O1xuICBpZCA9IGBkYXRhdGFibGUtJHtuZXh0SWQrK31gO1xuXG4gIC8vIHNlbGVjdCBhbGwgY2hlY2tib3ggZmxhZ1xuICBwcml2YXRlIF9zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuXG4gIC8vIGNvbHVtbiByZXNpemluZzpcbiAgcHJpdmF0ZSBfcmVzaXplSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gIHJlc2l6ZUxpbWl0ID0gMzA7XG5cbiAgLy8gUmVsb2FkaW5nOlxuICBfcmVsb2FkaW5nID0gZmFsc2U7XG5cbiAgZ2V0IHJlbG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVsb2FkaW5nO1xuICB9XG5cbiAgc2V0IHJlbG9hZGluZyh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZWxvYWRpbmcgPSB2YWw7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBzdGF0ZTogdmlzaWJsZSBnZXQvc2V0IGZvciB0aGUgb3V0c2lkZSB3aXRoIEBJbnB1dCBmb3Igb25lLXRpbWUgaW5pdGlhbCB2YWx1ZXNcbiAgcHJpdmF0ZSBfc29ydEJ5OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRCeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zb3J0Qnk7XG4gIH1cblxuICBzZXQgc29ydEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3J0QnkgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc29ydEFzYyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRBc2MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRBc2M7XG4gIH1cblxuICBzZXQgc29ydEFzYyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRBc2MgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb2Zmc2V0ID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgb2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgfVxuXG4gIHNldCBvZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9saW1pdCA9IDEwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9saW1pdDtcbiAgfVxuXG4gIHNldCBsaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGltaXQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlZCBwcm9wZXJ0eTpcbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUNvdW50ICE9PSAwID8gTWF0aC5mbG9vcih0aGlzLm9mZnNldCAvIHRoaXMubGltaXQpICsgMSA6IDA7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gKHZhbHVlIC0gMSkgKiB0aGlzLmxpbWl0O1xuICB9XG5cbiAgZ2V0IGxhc3RQYWdlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KTtcbiAgfVxuXG4gIC8vIHNldHRpbmcgbXVsdGlwbGUgb2JzZXJ2YWJsZSBwcm9wZXJ0aWVzIHNpbXVsdGFuZW91c2x5XG4gIHNvcnQoc29ydEJ5OiBzdHJpbmcsIGFzYzogYm9vbGVhbikge1xuICAgIHRoaXMuc29ydEJ5ID0gc29ydEJ5O1xuICAgIHRoaXMuc29ydEFzYyA9IGFzYztcbiAgfVxuXG4gIC8vIGluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5faW5pdERlZmF1bHRWYWx1ZXMoKTtcbiAgICB0aGlzLl9pbml0RGVmYXVsdENsaWNrRXZlbnRzKCk7XG4gICAgdGhpcy5fdXBkYXRlRGlzcGxheVBhcmFtcygpO1xuXG4gICAgaWYgKHRoaXMucGFnZUxpbWl0cy5pbmRleE9mKHRoaXMubGltaXQpIDwgMCkge1xuICAgICAgdGhpcy5saW1pdCA9IHRoaXMucGFnZUxpbWl0c1swXTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVscyA9IHsuLi5kZWZhdWx0VHJhbnNsYXRpb25zLCAuLi50aGlzLmxhYmVsc307XG5cbiAgICBpZiAodGhpcy5hdXRvUmVsb2FkKSB7XG4gICAgICB0aGlzLnJlbG9hZEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZmllciQgPSB0aGlzLm5vdGlmaWVyLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9ub3RpZnkoKSk7XG4gICAgdGhpcy5zdWJqZWN0JCA9IHRoaXMuc3ViamVjdC5waXBlKGRlYm91bmNlVGltZSgxMDApKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWxvYWRJdGVtcygpKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERlZmF1bHRWYWx1ZXMoKSB7XG4gICAgdGhpcy5pbmRleENvbHVtblZpc2libGUgPSB0aGlzLmluZGV4Q29sdW1uO1xuICAgIHRoaXMuc2VsZWN0Q29sdW1uVmlzaWJsZSA9IHRoaXMuc2VsZWN0Q29sdW1uO1xuICAgIHRoaXMuZXhwYW5kQ29sdW1uVmlzaWJsZSA9IHRoaXMuZXhwYW5kYWJsZVJvd3M7XG4gIH1cblxuICBwcml2YXRlIF9pbml0RGVmYXVsdENsaWNrRXZlbnRzKCkge1xuICAgIHRoaXMuaGVhZGVyQ2xpY2suc3Vic2NyaWJlKFxuICAgICAgKHRhYmxlRXZlbnQ6IHsgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCB9KSA9PiB0aGlzLnNvcnRDb2x1bW4odGFibGVFdmVudC5jb2x1bW4pKTtcbiAgICBpZiAodGhpcy5zZWxlY3RPblJvd0NsaWNrKSB7XG4gICAgICB0aGlzLnJvd0NsaWNrLnN1YnNjcmliZShcbiAgICAgICAgKHRhYmxlRXZlbnQ6IHsgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCB9KSA9PiB0YWJsZUV2ZW50LnJvdy5zZWxlY3RlZCA9ICF0YWJsZUV2ZW50LnJvdy5zZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgcmVsb2FkSXRlbXMoKSB7XG4gICAgdGhpcy5yZWxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMucmVsb2FkLmVtaXQodGhpcy5fZ2V0UmVtb3RlUGFyYW1ldGVycygpKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUmVsb2FkRmluaXNoZWQoKSB7XG4gICAgaWYgKHRoaXMucmVsb2FkaW5nKSB7XG4gICAgICB0aGlzLl91cGRhdGVEaXNwbGF5UGFyYW1zKCk7XG4gICAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzcGxheVBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVBhcmFtcztcbiAgfVxuXG4gIF91cGRhdGVEaXNwbGF5UGFyYW1zKCkge1xuICAgIHRoaXMuX2Rpc3BsYXlQYXJhbXMgPSB7XG4gICAgICBzb3J0Qnk6IHRoaXMuc29ydEJ5LFxuICAgICAgc29ydEFzYzogdGhpcy5zb3J0QXNjLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHVibGljIHJvd0NsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93Q2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIHJvd0RvdWJsZUNsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93RG91YmxlQ2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIGhlYWRlckNsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCkge1xuICAgIGlmICghdGhpcy5fcmVzaXplSW5Qcm9ncmVzcykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5oZWFkZXJDbGljay5lbWl0KHtjb2x1bW4sIGV2ZW50fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTsgLy8gdGhpcyBpcyBiZWNhdXNlIEkgY2FuJ3QgcHJldmVudCBjbGljayBmcm9tIG1vdXN1cCBvZiB0aGUgZHJhZyBlbmRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmNlbGxDbGljay5lbWl0KHtyb3csIGNvbHVtbiwgZXZlbnR9KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uczpcbiAgcHJpdmF0ZSBfZ2V0UmVtb3RlUGFyYW1ldGVycygpOiBEYXRhVGFibGVQYXJhbXMge1xuICAgIGNvbnN0IHBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307XG5cbiAgICBpZiAodGhpcy5zb3J0QnkpIHtcbiAgICAgIHBhcmFtcy5zb3J0QnkgPSB0aGlzLnNvcnRCeTtcbiAgICAgIHBhcmFtcy5zb3J0QXNjID0gdGhpcy5zb3J0QXNjO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBwYXJhbXMub2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICBwYXJhbXMubGltaXQgPSB0aGlzLmxpbWl0O1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29sdW1uKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSB7XG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSkge1xuXG4gICAgICBjb25zdCBhc2NlbmRpbmcgPSB0aGlzLnNvcnRCeSA9PT0gY29sdW1uLnByb3BlcnR5ID8gIXRoaXMuc29ydEFzYyA6IHRydWU7XG5cbiAgICAgIGlmKGNvbHVtbi5wcm9wZXJ0eSA9PT0gdGhpcy5zb3J0QnkgJiYgICEgdGhpcy5zb3J0QXNjKSB7XG4gICAgICAgIHRoaXMuc29ydCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc29ydChjb2x1bW4ucHJvcGVydHksIGFzY2VuZGluZyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbHVtbkNvdW50KCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgKz0gdGhpcy5pbmRleENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIGNvdW50ICs9IGNvbHVtbi52aXNpYmxlID8gMSA6IDA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgcHVibGljIGdldFJvd0NvbG9yKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQpIHtcbiAgICBpZiAodGhpcy5yb3dDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Um93Q2FsbGJhY2s+dGhpcy5yb3dDb2xvcnMpKGl0ZW0sIHJvdywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RBbGxDaGVja2JveCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3g7XG4gIH1cblxuICBzZXQgc2VsZWN0QWxsQ2hlY2tib3godmFsdWUpIHtcbiAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IHZhbHVlO1xuICAgIHRoaXMuX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9vblNlbGVjdEFsbENoYW5nZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJvd3MudG9BcnJheSgpLmZvckVhY2gocm93ID0+IHJvdy5zZWxlY3RlZCA9IHZhbHVlKTtcbiAgICB0aGlzLnNlbGVjdGVkUm93c0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0Q2hhbmdlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuXG4gICAgLy8gbWFpbnRhaW4gdGhlIHNlbGVjdGVkUm93KHMpIHZpZXdcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdyk7XG4gICAgICBpZiAocm93LnNlbGVjdGVkICYmIGluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICB9IGVsc2UgaWYgKCFyb3cuc2VsZWN0ZWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocm93LnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3cgPSByb3c7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRSb3cgPT09IHJvdykge1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFJvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1bnNlbGVjdCBhbGwgb3RoZXIgcm93czpcbiAgICBpZiAocm93LnNlbGVjdGVkICYmICF0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLnJvd3MudG9BcnJheSgpLmZpbHRlcihyb3dfID0+IHJvd18uc2VsZWN0ZWQpLmZvckVhY2gocm93XyA9PiB7XG4gICAgICAgIGlmIChyb3dfICE9PSByb3cpIHsgLy8gYXZvaWQgZW5kbGVzcyBsb29wXG4gICAgICAgICAgcm93Xy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkUm93c0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIC8vIG90aGVyOlxuXG4gIGdldCBzdWJzdGl0dXRlSXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogdGhpcy5kaXNwbGF5UGFyYW1zLmxpbWl0IC0gdGhpcy5pdGVtcy5sZW5ndGh9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydChldmVudDogTW91c2VFdmVudCwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fcmVzaXplSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0T2Zmc2V0ID0gY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCAtIGV2ZW50LnBhZ2VYO1xuICAgIGRyYWcoZXZlbnQsIHtcbiAgICAgIG1vdmU6IChtb3ZlRXZlbnQ6IE1vdXNlRXZlbnQsIGR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50LCBkeCkpIHtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBzdGFydE9mZnNldCArIG1vdmVFdmVudC5wYWdlWCArIGR4O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNSZXNpemVJbkxpbWl0KGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkeDogbnVtYmVyKSB7XG4gICAgLyogVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBDU1MgbWluLXdpZHRoIGRpZG4ndCB3b3JrIG9uIHRhYmxlLWxheW91dDogZml4ZWQuXG4gICAgICAgICBXaXRob3V0IHRoZSBsaW1pdHMsIHJlc2l6aW5nIGNhbiBtYWtlIHRoZSBuZXh0IGNvbHVtbiBkaXNhcHBlYXIgY29tcGxldGVseSxcbiAgICAgICAgIGFuZCBldmVuIGluY3JlYXNlIHRoZSB0YWJsZSB3aWR0aC4gVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gc3VmZmVycyBmcm9tIHRoZSBmYWN0LFxuICAgICAgICAgdGhhdCBvZmZzZXRXaWR0aCBzb21ldGltZXMgY29udGFpbnMgb3V0LW9mLWRhdGUgdmFsdWVzLiAqL1xuICAgIGlmICgoZHggPCAwICYmIChjb2x1bW5FbGVtZW50Lm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpIHx8XG4gICAgICAhY29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgLy8gcmVzaXppbmcgZG9lc24ndCBtYWtlIHNlbnNlIGZvciB0aGUgbGFzdCB2aXNpYmxlIGNvbHVtblxuICAgICAgKGR4ID49IDAgJiYgKCg8SFRNTEVsZW1lbnQ+Y29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByaW1hcnlDb2x1bW4gPT09ICcnKSB7XG4gICAgICB0aGlzLnByaW1hcnlDb2x1bW4gPSAodGhpcy5jb2x1bW5zLmZpcnN0IGFzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkucHJvcGVydHk7XG4gICAgfVxuICB9XG5cbiAgX25vdGlmeSgpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5yZWxvYWRpbmc7XG5cbiAgICB0aGlzLnJlbG9hZE5vdGlmaWNhdGlvbiA9IGxvYWRpbmcgP1xuICAgICAgdGhpcy5sYWJlbHMubG9hZGluZ1RleHQucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpIDpcbiAgICAgIHRoaXMubGFiZWxzLmxvYWRlZFRleHQucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpO1xuXG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9IHRoaXMubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsICcnICsgKE1hdGguY2VpbCh0aGlzLml0ZW1Db3VudCAvIHRoaXMubGltaXQpICE9PSAwID8gdGhpcy5vZmZzZXQgKyAxIDogJzAnKSlcbiAgICAgICAgICAucmVwbGFjZSgne3RvfScsICcnICsgKE1hdGgubWluKHRoaXMub2Zmc2V0ICsgdGhpcy5saW1pdCwgdGhpcy5pdGVtQ291bnQpKSlcbiAgICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsICcnICsgdGhpcy5pdGVtQ291bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uTm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zb3J0QnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZpbmQoY29sdW1uID0+IGNvbHVtbi5wcm9wZXJ0eSA9PT0gdGhpcy5zb3J0QnkpIGFzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZTtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gKHRoaXMuc29ydEFzYyA/IHRoaXMubGFiZWxzLnNvcnRlZEFzY2VuZGluZyA6IHRoaXMubGFiZWxzLnNvcnRlZERlc2NlbmRpbmcpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKVxuICAgICAgICAgIC5yZXBsYWNlKCd7aGVhZGVyfScsIGNvbC5oZWFkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZpZXIkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==