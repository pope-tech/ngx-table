/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { DataTableColumnDirective } from '../../directives/column/column.directive';
import { DataTableRowComponent } from '../row/row.component';
import { defaultTranslations } from '../../types/default-translations.type';
import { drag } from '../../utils/drag';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
/** @type {?} */
var nextId = 0;
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
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
        this._displayParams = /** @type {?} */ ({});
        this.subject = new Subject();
        this.notifier = new Subject();
        this.selectedRows = [];
        this.id = "datatable-" + nextId++;
        this._selectAllCheckbox = false;
        this._resizeInProgress = false;
        this.resizeLimit = 30;
        // Reloading:
        this._reloading = false;
        this._sortAsc = true;
        this._offset = 0;
        this._limit = 10;
    }
    Object.defineProperty(DataTableComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._items = items;
            // no need to call notifier.next() because _onReloadFinished()
            // will change reloaded value causing notifier.next() to be called implicitly.
            this._onReloadFinished();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "itemCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemCount;
        },
        set: /**
         * @param {?} count
         * @return {?}
         */
        function (count) {
            this._itemCount = count;
            this.notifier.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "reloading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._reloading;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._reloading = val;
            this.notifier.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "sortBy", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortBy;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortBy = value;
            this.subject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "sortAsc", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortAsc;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortAsc = value;
            this.subject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "offset", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offset;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._offset = value;
            this.subject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "limit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._limit;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._limit = value;
            this.subject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "page", {
        // calculated property:
        get: /**
         * @return {?}
         */
        function () {
            return this.itemCount !== 0 ? Math.floor(this.offset / this.limit) + 1 : 0;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.offset = (value - 1) * this.limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "lastPage", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.ceil(this.itemCount / this.limit);
        },
        enumerable: true,
        configurable: true
    });
    // setting multiple observable properties simultaneously
    /**
     * @param {?} sortBy
     * @param {?} asc
     * @return {?}
     */
    DataTableComponent.prototype.sort = /**
     * @param {?} sortBy
     * @param {?} asc
     * @return {?}
     */
    function (sortBy, asc) {
        this.sortBy = sortBy;
        this.sortAsc = asc;
    };
    // init
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._initDefaultValues();
        this._initDefaultClickEvents();
        this._updateDisplayParams();
        if (this.pageLimits.indexOf(this.limit) < 0) {
            this.limit = this.pageLimits[0];
        }
        this.labels = tslib_1.__assign({}, defaultTranslations, this.labels);
        if (this.autoReload) {
            this.reloadItems();
        }
        this.notifier$ = this.notifier.subscribe(function () { return _this._notify(); });
        this.subject$ = this.subject.pipe(debounceTime(100)).subscribe(function () { return _this.reloadItems(); });
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype._initDefaultValues = /**
     * @return {?}
     */
    function () {
        this.indexColumnVisible = this.indexColumn;
        this.selectColumnVisible = this.selectColumn;
        this.expandColumnVisible = this.expandableRows;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype._initDefaultClickEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.headerClick.subscribe(function (tableEvent) { return _this.sortColumn(tableEvent.column); });
        if (this.selectOnRowClick) {
            this.rowClick.subscribe(function (tableEvent) { return tableEvent.row.selected = !tableEvent.row.selected; });
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.reloadItems = /**
     * @return {?}
     */
    function () {
        this.reloading = true;
        this.reload.emit(this._getRemoteParameters());
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype._onReloadFinished = /**
     * @return {?}
     */
    function () {
        if (this.reloading) {
            this._updateDisplayParams();
            this._selectAllCheckbox = false;
            this.reloading = false;
        }
    };
    Object.defineProperty(DataTableComponent.prototype, "displayParams", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayParams;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTableComponent.prototype._updateDisplayParams = /**
     * @return {?}
     */
    function () {
        this._displayParams = {
            sortBy: this.sortBy,
            sortAsc: this.sortAsc,
            offset: this.offset,
            limit: this.limit
        };
    };
    /**
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    DataTableComponent.prototype.rowClicked = /**
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    function (row, event) {
        this.rowClick.emit({ row: row, event: event });
    };
    /**
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    DataTableComponent.prototype.rowDoubleClicked = /**
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    function (row, event) {
        this.rowDoubleClick.emit({ row: row, event: event });
    };
    /**
     * @param {?} column
     * @param {?} event
     * @return {?}
     */
    DataTableComponent.prototype.headerClicked = /**
     * @param {?} column
     * @param {?} event
     * @return {?}
     */
    function (column, event) {
        if (!this._resizeInProgress) {
            event.preventDefault();
            event.stopPropagation();
            this.headerClick.emit({ column: column, event: event });
        }
        else {
            this._resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
        }
    };
    /**
     * @param {?} column
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    DataTableComponent.prototype.cellClicked = /**
     * @param {?} column
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    function (column, row, event) {
        this.cellClick.emit({ row: row, column: column, event: event });
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype._getRemoteParameters = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var params = /** @type {?} */ ({});
        if (this.sortBy) {
            params.sortBy = this.sortBy;
            params.sortAsc = this.sortAsc;
        }
        if (this.pagination) {
            params.offset = this.offset;
            params.limit = this.limit;
        }
        return params;
    };
    /**
     * @param {?} column
     * @return {?}
     */
    DataTableComponent.prototype.sortColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (column.sortable) {
            /** @type {?} */
            var ascending = this.sortBy === column.property ? !this.sortAsc : true;
            this.sort(column.property, ascending);
        }
    };
    Object.defineProperty(DataTableComponent.prototype, "columnCount", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var count = 0;
            count += this.indexColumnVisible ? 1 : 0;
            count += this.selectColumnVisible ? 1 : 0;
            count += this.expandColumnVisible ? 1 : 0;
            this.columns.toArray().forEach(function (column) {
                count += column.visible ? 1 : 0;
            });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    DataTableComponent.prototype.getRowColor = /**
     * @param {?} item
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    function (item, index, row) {
        if (this.rowColors !== undefined) {
            return (/** @type {?} */ (this.rowColors))(item, row, index);
        }
    };
    Object.defineProperty(DataTableComponent.prototype, "selectAllCheckbox", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectAllCheckbox;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectAllCheckbox = value;
            this._onSelectAllChanged(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    DataTableComponent.prototype._onSelectAllChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.rows.toArray().forEach(function (row) { return row.selected = value; });
        this.selectedRowsChange.emit(this.selectedRows);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    DataTableComponent.prototype.onRowSelectChanged = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        // maintain the selectedRow(s) view
        if (this.multiSelect) {
            /** @type {?} */
            var index = this.selectedRows.indexOf(row);
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
            this.rows.toArray().filter(function (row_) { return row_.selected; }).forEach(function (row_) {
                if (row_ !== row) {
                    // avoid endless loop
                    row_.selected = false;
                }
            });
        }
        this.selectedRowsChange.emit(this.selectedRows);
    };
    Object.defineProperty(DataTableComponent.prototype, "substituteItems", {
        // other:
        get: /**
         * @return {?}
         */
        function () {
            return Array.from({ length: this.displayParams.limit - this.items.length });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} column
     * @param {?} columnElement
     * @return {?}
     */
    DataTableComponent.prototype.resizeColumnStart = /**
     * @param {?} event
     * @param {?} column
     * @param {?} columnElement
     * @return {?}
     */
    function (event, column, columnElement) {
        var _this = this;
        this._resizeInProgress = true;
        /** @type {?} */
        var startOffset = columnElement.offsetWidth - event.pageX;
        drag(event, {
            move: function (moveEvent, dx) {
                if (_this._isResizeInLimit(columnElement, dx)) {
                    column.width = startOffset + moveEvent.pageX + dx;
                }
            },
        });
    };
    /**
     * @param {?} columnElement
     * @param {?} dx
     * @return {?}
     */
    DataTableComponent.prototype._isResizeInLimit = /**
     * @param {?} columnElement
     * @param {?} dx
     * @return {?}
     */
    function (columnElement, dx) {
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
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.primaryColumn === '') {
            this.primaryColumn = (/** @type {?} */ (this.columns.first)).property;
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype._notify = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var loading = this.reloading;
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
                var col = /** @type {?} */ (this.columns.toArray().find(function (column) { return column.property === _this.sortBy; }));
                this.sortNotification = (this.sortAsc ? this.labels.sortedAscending : this.labels.sortedDescending)
                    .replace('{title}', this.title)
                    .replace('{header}', col.header);
            }
            else {
                this.sortNotification = '';
            }
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subject$.unsubscribe();
        this.notifier$.unsubscribe();
    };
    DataTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'data-table',
                    template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    <span [textContent]=\"reloadNotification\"></span>\n    <span [textContent]=\"paginationNotification\"></span>\n    <span [textContent]=\"sortNotification\"></span>\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\" [class]=\"wrapperClass\">\n    <table class=\"table data-table\" [id]=\"id\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <td [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <input [hide]=\"!multiSelect\"\n                 type=\"checkbox\"\n                 [(ngModel)]=\"selectAllCheckbox\"\n                 [disabled]=\"itemCount === 0\"\n                 [title]=\"labels.selectAllRows\"\n                 [attr.aria-label]=\"labels.selectAllRows\"/>\n        </td>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\"\n                  [title]=\"!sortAsc ? labels.sortAscending : labels.sortDescending\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                aria-hidden=\"true\"></i>\n              <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n",
                    styles: [":host /deep/ .data-table.table>tbody+tbody{border-top:none}:host /deep/ .data-table.table td{vertical-align:middle}:host /deep/ .data-table>tbody>tr>td,:host /deep/ .data-table>thead>tr>th{overflow:hidden}:host /deep/ .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host /deep/ .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host /deep/ .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy>i{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
                },] },
    ];
    /** @nocollapse */
    DataTableComponent.ctorParameters = function () { return []; };
    DataTableComponent.propDecorators = {
        wrapperClass: [{ type: Input }],
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
        selectedRowsChange: [{ type: Output }],
        sortBy: [{ type: Input }],
        sortAsc: [{ type: Input }],
        offset: [{ type: Input }],
        limit: [{ type: Input }],
        page: [{ type: Input }]
    };
    return DataTableComponent;
}());
export { DataTableComponent };
if (false) {
    /** @type {?} */
    DataTableComponent.prototype._items;
    /** @type {?} */
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
    /** @type {?} */
    DataTableComponent.prototype._selectAllCheckbox;
    /** @type {?} */
    DataTableComponent.prototype._resizeInProgress;
    /** @type {?} */
    DataTableComponent.prototype.resizeLimit;
    /** @type {?} */
    DataTableComponent.prototype._reloading;
    /** @type {?} */
    DataTableComponent.prototype._sortBy;
    /** @type {?} */
    DataTableComponent.prototype._sortAsc;
    /** @type {?} */
    DataTableComponent.prototype._offset;
    /** @type {?} */
    DataTableComponent.prototype._limit;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsWUFBWSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQzs7SUF5VmI7c0JBaFB3QixFQUFFOztxQkFrQ1QsRUFBRTt5QkFDRSxJQUFJO3NCQUNQLElBQUk7MEJBQ0EsSUFBSTsyQkFDSCxJQUFJO2lDQUNFLEVBQUU7NEJBR1AsS0FBSzsyQkFDTixJQUFJOzhCQUNELElBQUk7OEJBQ0osS0FBSztnQ0FFSCxLQUFLOzBCQUNYLElBQUk7NkJBQ0QsS0FBSzswQkFFRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7NkJBQzdCLEVBQUU7O3NCQUdSLElBQUksWUFBWSxFQUFFOzt3QkFHaEIsSUFBSSxZQUFZLEVBQUU7OEJBQ1osSUFBSSxZQUFZLEVBQUU7MkJBQ3JCLElBQUksWUFBWSxF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QUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzlCOztnQkF0Z0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDJtS0FnR1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsdzZDQUF3NkMsQ0FBQztpQkFDbjdDOzs7OzsrQkFNRSxLQUFLO3dCQUVMLEtBQUs7NEJBYUwsS0FBSzswQkFXTCxlQUFlLFNBQUMsd0JBQXdCO3VCQUN4QyxZQUFZLFNBQUMscUJBQXFCO2lDQUNsQyxZQUFZLFNBQUMsaUJBQWlCO3dCQUc5QixLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7b0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLO21DQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUdMLE1BQU07MkJBR04sTUFBTTtpQ0FDTixNQUFNOzhCQUNOLE1BQU07NEJBQ04sTUFBTTtxQ0FDTixNQUFNO3lCQWtETixLQUFLOzBCQVlMLEtBQUs7eUJBWUwsS0FBSzt3QkFZTCxLQUFLO3VCQVdMLEtBQUs7OzZCQW5TUjs7U0FrSWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuLi9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYXJhbXMgfSBmcm9tICcuLi8uLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcbmltcG9ydCB7IFJvd0NhbGxiYWNrIH0gZnJvbSAnLi4vLi4vdHlwZXMvcm93LWNhbGxiYWNrLnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkZWZhdWx0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGVmYXVsdC10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkcmFnIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHJhZyc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLXdyYXBwZXJcIj5cbiAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtYXRvbWljPVwiZmFsc2VcIiBhcmlhLXJlbGV2YW50PVwidGV4dFwiPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJyZWxvYWROb3RpZmljYXRpb25cIj48L3NwYW4+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cInBhZ2luYXRpb25Ob3RpZmljYXRpb25cIj48L3NwYW4+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cInNvcnROb3RpZmljYXRpb25cIj48L3NwYW4+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cImNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICA8L3NwYW4+XG5cbiAgPGRhdGEtdGFibGUtaGVhZGVyICpuZ0lmPVwiaGVhZGVyXCI+PC9kYXRhLXRhYmxlLWhlYWRlcj5cblxuICA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1ib3hcIiBbY2xhc3NdPVwid3JhcHBlckNsYXNzXCI+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgZGF0YS10YWJsZVwiIFtpZF09XCJpZFwiPlxuICAgICAgPGNhcHRpb24gY2xhc3M9XCJzci1vbmx5XCIgW3RleHRDb250ZW50XT1cInRpdGxlXCI+PC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWV4cGFuZENvbHVtblZpc2libGVcIiBjbGFzcz1cImV4cGFuZC1jb2x1bW4taGVhZGVyXCI+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiIFtoaWRlXT1cIiFpbmRleENvbHVtblZpc2libGVcIiBjbGFzcz1cImluZGV4LWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiaW5kZXhDb2x1bW5IZWFkZXJcIj48L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhc2VsZWN0Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwic2VsZWN0LWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgICA8aW5wdXQgW2hpZGVdPVwiIW11bHRpU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgICBbdGl0bGVdPVwibGFiZWxzLnNlbGVjdEFsbFJvd3NcIlxuICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVscy5zZWxlY3RBbGxSb3dzXCIvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zLCBpbmRleCBhcyBpXCIgI3RoXG4gICAgICAgICAgICBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIlxuICAgICAgICAgICAgW2NsYXNzLnNvcnRhYmxlXT1cImNvbHVtbi5zb3J0YWJsZVwiXG4gICAgICAgICAgICBbY2xhc3MucmVzaXphYmxlXT1cImNvbHVtbi5yZXNpemFibGVcIlxuICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1zb3J0XT1cImNvbHVtbi5zb3J0YWJsZSA/IChjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeSA/IChzb3J0QXNjID8gJ2FzY2VuZGluZycgOiAnZGVzY2VuZGluZycpIDogJ25vbmUnKSA6IG51bGxcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIiBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIiBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoIHwgcHhcIiA+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiIChjbGljayk9XCJoZWFkZXJDbGlja2VkKGNvbHVtbiwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImNvbHVtbi5zb3J0YWJsZSA/IGlkIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cIiFzb3J0QXNjID8gbGFiZWxzLnNvcnRBc2NlbmRpbmcgOiBsYWJlbHMuc29ydERlc2NlbmRpbmdcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtpZF09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1ufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLXNvcnQtaWNvblwiICpuZ0lmPVwiY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5XCIgY2xhc3M9XCJmYSBmYS1zb3J0IGNvbHVtbi1zb3J0YWJsZS1pY29uXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSAhPT0gc29ydEJ5XCIgY2xhc3M9XCJmYVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbdGV4dENvbnRlbnRdPVwiY29sdW1uLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4tc29ydC1pY29uXCIgKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5XCIgY2xhc3M9XCJmYSBmYS1zb3J0IGNvbHVtbi1zb3J0YWJsZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSAhPT0gc29ydEJ5XCIgY2xhc3M9XCJmYVwiXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ZhLXNvcnQtYXNjJzogc29ydEFzYywgJ2ZhLXNvcnQtZGVzYyc6ICFzb3J0QXNjfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLnJlc2l6YWJsZVwiIGNsYXNzPVwiY29sdW1uLXJlc2l6ZS1oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJyZXNpemVDb2x1bW5TdGFydCgkZXZlbnQsIGNvbHVtbiwgdGgpXCI+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXg9aW5kZXhcIiBjbGFzcz1cImRhdGEtdGFibGUtcm93LXdyYXBwZXJcIlxuICAgICAgICAgICAgIGRhdGFUYWJsZVJvdyAjcm93IFtpdGVtXT1cIml0ZW1cIiBbaW5kZXhdPVwiaW5kZXhcIiAoc2VsZWN0ZWRDaGFuZ2UpPVwib25Sb3dTZWxlY3RDaGFuZ2VkKHJvdylcIj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgKm5nSWY9XCJpdGVtQ291bnQgPT09IDAgJiYgbm9EYXRhTWVzc2FnZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sdW1uQ291bnRcIj57eyBub0RhdGFNZXNzYWdlIH19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgY2xhc3M9XCJzdWJzdGl0dXRlLXJvd3NcIiAqbmdJZj1cInBhZ2luYXRpb24gJiYgc3Vic3RpdHV0ZVJvd3NcIj5cbiAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdWJzdGl0dXRlSXRlbXMsIGxldCBpbmRleCA9IGluZGV4XCJcbiAgICAgICAgICBbY2xhc3Mucm93LW9kZF09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1ldmVuXT1cIihpbmRleCArIGl0ZW1zLmxlbmd0aCkgJSAyID09PSAxXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWV4cGFuZENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiPiZuYnNwOzwvdGQ+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhc2VsZWN0Q29sdW1uVmlzaWJsZVwiPjwvdGQ+XG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIj5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGRpdiBjbGFzcz1cImJ1c3lcIiAqbmdJZj1cInNob3dSZWxvYWRpbmcgJiYgcmVsb2FkaW5nXCI+XG4gICAgICA8aT48aSBjbGFzcz1cImZhIGZhLXNwaW4gZmEtY29nIGZhLTJ4XCI+PC9pPjwvaT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRhdGEtdGFibGUtcGFnaW5hdGlvbiAqbmdJZj1cInBhZ2luYXRpb25cIiBbbGltaXRzXT1cInBhZ2VMaW1pdHNcIj48L2RhdGEtdGFibGUtcGFnaW5hdGlvbj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0IC9kZWVwLyAuZGF0YS10YWJsZS50YWJsZT50Ym9keSt0Ym9keXtib3JkZXItdG9wOm5vbmV9Omhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlLnRhYmxlIHRke3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdCAvZGVlcC8gLmRhdGEtdGFibGU+dGJvZHk+dHI+dGQsOmhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlPnRoZWFkPnRyPnRoe292ZXJmbG93OmhpZGRlbn06aG9zdCAvZGVlcC8gLmRhdGEtdGFibGU+dGhlYWQ+dHI+dGR7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2RlZTJlNn06aG9zdCAvZGVlcC8gLnJvdy1vZGR7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2fS5kYXRhLXRhYmxlIC5zdWJzdGl0dXRlLXJvd3M+dHI6aG92ZXIsOmhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlIC5kYXRhLXRhYmxlLXJvdzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlY2VjZWN9LmRhdGEtdGFibGV7Ym94LXNoYWRvdzowIDAgMTVweCAjZWNlY2VjfS5jb2x1bW4taGVhZGVye3Bvc2l0aW9uOnJlbGF0aXZlfS5leHBhbmQtY29sdW1uLWhlYWRlcnt3aWR0aDo1MHB4fS5zZWxlY3QtY29sdW1uLWhlYWRlcnt3aWR0aDo1MHB4O3RleHQtYWxpZ246Y2VudGVyfS5pbmRleC1jb2x1bW4taGVhZGVye3dpZHRoOjQwcHh9LmNvbHVtbi1oZWFkZXIuc29ydGFibGUgYnV0dG9ue2JveC1zaXppbmc6Y29udGVudC1ib3g7YmFja2dyb3VuZDowIDA7Ym9yZGVyOjA7Y29sb3I6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjtmb250OmluaGVyaXQ7bGluZS1oZWlnaHQ6bm9ybWFsO292ZXJmbG93OnZpc2libGU7cGFkZGluZzowOy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt0ZXh0LWFsaWduOmxlZnR9LmNvbHVtbi1oZWFkZXIgLmNvbHVtbi1zb3J0LWljb257bWFyZ2luLWxlZnQ6OHB4fS5jb2x1bW4taGVhZGVyLnJlc2l6YWJsZSAuY29sdW1uLXNvcnQtaWNvbnttYXJnaW4tcmlnaHQ6OHB4fS5jb2x1bW4taGVhZGVyIC5jb2x1bW4tc29ydC1pY29uIC5jb2x1bW4tc29ydGFibGUtaWNvbntjb2xvcjojZDNkM2QzfS5jb2x1bW4taGVhZGVyIC5jb2x1bW4tcmVzaXplLWhhbmRsZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO21hcmdpbjowO3BhZGRpbmc6MDt3aWR0aDo4cHg7aGVpZ2h0OjEwMCU7Y3Vyc29yOmNvbC1yZXNpemV9LmRhdGEtdGFibGUtYm94e3Bvc2l0aW9uOnJlbGF0aXZlfS5idXN5e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI1KX0uYnVzeT5pe3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfWBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIERhdGFUYWJsZVBhcmFtcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9pdGVtQ291bnQ7XG5cbiAgQElucHV0KCkgd3JhcHBlckNsYXNzO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgLy8gbm8gbmVlZCB0byBjYWxsIG5vdGlmaWVyLm5leHQoKSBiZWNhdXNlIF9vblJlbG9hZEZpbmlzaGVkKClcbiAgICAvLyB3aWxsIGNoYW5nZSByZWxvYWRlZCB2YWx1ZSBjYXVzaW5nIG5vdGlmaWVyLm5leHQoKSB0byBiZSBjYWxsZWQgaW1wbGljaXRseS5cbiAgICB0aGlzLl9vblJlbG9hZEZpbmlzaGVkKCk7XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbUNvdW50O1xuICB9XG5cbiAgc2V0IGl0ZW1Db3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbUNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBjb21wb25lbnRzOlxuICBAQ29udGVudENoaWxkcmVuKERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkgY29sdW1uczogUXVlcnlMaXN0PERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YVRhYmxlUm93Q29tcG9uZW50KSByb3dzOiBRdWVyeUxpc3Q8RGF0YVRhYmxlUm93Q29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlRXhwYW5kJykgZXhwYW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gT25lLXRpbWUgb3B0aW9uYWwgYmluZGluZ3Mgd2l0aCBkZWZhdWx0IHZhbHVlczpcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgaGVhZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5kZXhDb2x1bW5IZWFkZXIgPSAnJztcbiAgQElucHV0KCkgcm93Q29sb3JzOiBSb3dDYWxsYmFjaztcbiAgQElucHV0KCkgcm93VG9vbHRpcDogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHNlbGVjdENvbHVtbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtdWx0aVNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHN1YnN0aXR1dGVSb3dzID0gdHJ1ZTtcbiAgQElucHV0KCkgZXhwYW5kYWJsZVJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWxzOiBEYXRhVGFibGVUcmFuc2xhdGlvbnM7XG4gIEBJbnB1dCgpIHNlbGVjdE9uUm93Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b1JlbG9hZCA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dSZWxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9EYXRhTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlTGltaXRzOiBudW1iZXJbXSA9IFsxMCwgMjUsIDUwLCAxMDAsIDI1MF07XG4gIEBJbnB1dCgpIHByaW1hcnlDb2x1bW4gPSAnJztcblxuICAvLyByZWxvYWQgZW1pdHRlclxuICBAT3V0cHV0KCkgcmVsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGV2ZW50IGhhbmRsZXJzOlxuICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByb3dEb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhlYWRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2VsbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRSb3dzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBVSSBzdGF0ZSB3aXRob3V0IGlucHV0OlxuICBpbmRleENvbHVtblZpc2libGU6IGJvb2xlYW47XG4gIHNlbGVjdENvbHVtblZpc2libGU6IGJvb2xlYW47XG4gIGV4cGFuZENvbHVtblZpc2libGU6IGJvb2xlYW47XG5cbiAgLy8gYWRhIG5vdGlmaWNhdGlvbnMuXG4gIHJlbG9hZE5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBwYWdpbmF0aW9uTm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIHNvcnROb3RpZmljYXRpb246IHN0cmluZztcbiAgY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb246IHN0cmluZztcblxuICBfZGlzcGxheVBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307IC8vIHBhcmFtcyBvZiB0aGUgbGFzdCBmaW5pc2hlZCByZWxvYWRcblxuICBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgc3ViamVjdCQ6IFN1YnNjcmlwdGlvbjtcblxuICBub3RpZmllciA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIG5vdGlmaWVyJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIHNlbGVjdGlvbjpcbiAgc2VsZWN0ZWRSb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudDtcbiAgc2VsZWN0ZWRSb3dzOiBEYXRhVGFibGVSb3dDb21wb25lbnRbXSA9IFtdO1xuXG4gIE1hdGg6IGFueTtcbiAgaWQgPSBgZGF0YXRhYmxlLSR7bmV4dElkKyt9YDtcblxuICAvLyBzZWxlY3QgYWxsIGNoZWNrYm94IGZsYWdcbiAgcHJpdmF0ZSBfc2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcblxuICAvLyBjb2x1bW4gcmVzaXppbmc6XG4gIHByaXZhdGUgX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICByZXNpemVMaW1pdCA9IDMwO1xuXG4gIC8vIFJlbG9hZGluZzpcbiAgX3JlbG9hZGluZyA9IGZhbHNlO1xuXG4gIGdldCByZWxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbG9hZGluZztcbiAgfVxuXG4gIHNldCByZWxvYWRpbmcodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVsb2FkaW5nID0gdmFsO1xuICAgIHRoaXMubm90aWZpZXIubmV4dCgpO1xuICB9XG5cbiAgLy8gVUkgc3RhdGU6IHZpc2libGUgZ2V0L3NldCBmb3IgdGhlIG91dHNpZGUgd2l0aCBASW5wdXQgZm9yIG9uZS10aW1lIGluaXRpYWwgdmFsdWVzXG4gIHByaXZhdGUgX3NvcnRCeTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3J0QnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEJ5O1xuICB9XG5cbiAgc2V0IHNvcnRCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc29ydEJ5ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NvcnRBc2MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3J0QXNjKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0QXNjO1xuICB9XG5cbiAgc2V0IHNvcnRBc2ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zb3J0QXNjID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldCA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IG9mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cblxuICBzZXQgb2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGltaXQgPSAxMDtcblxuICBASW5wdXQoKVxuICBnZXQgbGltaXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGltaXQ7XG4gIH1cblxuICBzZXQgbGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xpbWl0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZWQgcHJvcGVydHk6XG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1Db3VudCAhPT0gMCA/IE1hdGguZmxvb3IodGhpcy5vZmZzZXQgLyB0aGlzLmxpbWl0KSArIDEgOiAwO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWUpIHtcbiAgICB0aGlzLm9mZnNldCA9ICh2YWx1ZSAtIDEpICogdGhpcy5saW1pdDtcbiAgfVxuXG4gIGdldCBsYXN0UGFnZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuaXRlbUNvdW50IC8gdGhpcy5saW1pdCk7XG4gIH1cblxuICAvLyBzZXR0aW5nIG11bHRpcGxlIG9ic2VydmFibGUgcHJvcGVydGllcyBzaW11bHRhbmVvdXNseVxuICBzb3J0KHNvcnRCeTogc3RyaW5nLCBhc2M6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNvcnRCeSA9IHNvcnRCeTtcbiAgICB0aGlzLnNvcnRBc2MgPSBhc2M7XG4gIH1cblxuICAvLyBpbml0XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXREZWZhdWx0VmFsdWVzKCk7XG4gICAgdGhpcy5faW5pdERlZmF1bHRDbGlja0V2ZW50cygpO1xuICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlQYXJhbXMoKTtcblxuICAgIGlmICh0aGlzLnBhZ2VMaW1pdHMuaW5kZXhPZih0aGlzLmxpbWl0KSA8IDApIHtcbiAgICAgIHRoaXMubGltaXQgPSB0aGlzLnBhZ2VMaW1pdHNbMF07XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbHMgPSB7Li4uZGVmYXVsdFRyYW5zbGF0aW9ucywgLi4udGhpcy5sYWJlbHN9O1xuXG4gICAgaWYgKHRoaXMuYXV0b1JlbG9hZCkge1xuICAgICAgdGhpcy5yZWxvYWRJdGVtcygpO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZpZXIkID0gdGhpcy5ub3RpZmllci5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbm90aWZ5KCkpO1xuICAgIHRoaXMuc3ViamVjdCQgPSB0aGlzLnN1YmplY3QucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVsb2FkSXRlbXMoKSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2luaXREZWZhdWx0VmFsdWVzKCkge1xuICAgIHRoaXMuaW5kZXhDb2x1bW5WaXNpYmxlID0gdGhpcy5pbmRleENvbHVtbjtcbiAgICB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPSB0aGlzLnNlbGVjdENvbHVtbjtcbiAgICB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPSB0aGlzLmV4cGFuZGFibGVSb3dzO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERlZmF1bHRDbGlja0V2ZW50cygpIHtcbiAgICB0aGlzLmhlYWRlckNsaWNrLnN1YnNjcmliZShcbiAgICAgICh0YWJsZUV2ZW50OiB7IGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBldmVudDogRXZlbnQgfSkgPT4gdGhpcy5zb3J0Q29sdW1uKHRhYmxlRXZlbnQuY29sdW1uKSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0T25Sb3dDbGljaykge1xuICAgICAgdGhpcy5yb3dDbGljay5zdWJzY3JpYmUoXG4gICAgICAgICh0YWJsZUV2ZW50OiB7IHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQgfSkgPT4gdGFibGVFdmVudC5yb3cuc2VsZWN0ZWQgPSAhdGFibGVFdmVudC5yb3cuc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbG9hZEl0ZW1zKCkge1xuICAgIHRoaXMucmVsb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlbG9hZC5lbWl0KHRoaXMuX2dldFJlbW90ZVBhcmFtZXRlcnMoKSk7XG4gIH1cblxuICBwcml2YXRlIF9vblJlbG9hZEZpbmlzaGVkKCkge1xuICAgIGlmICh0aGlzLnJlbG9hZGluZykge1xuICAgICAgdGhpcy5fdXBkYXRlRGlzcGxheVBhcmFtcygpO1xuICAgICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcbiAgICAgIHRoaXMucmVsb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3BsYXlQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlQYXJhbXM7XG4gIH1cblxuICBfdXBkYXRlRGlzcGxheVBhcmFtcygpIHtcbiAgICB0aGlzLl9kaXNwbGF5UGFyYW1zID0ge1xuICAgICAgc29ydEJ5OiB0aGlzLnNvcnRCeSxcbiAgICAgIHNvcnRBc2M6IHRoaXMuc29ydEFzYyxcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyByb3dDbGlja2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJvd0NsaWNrLmVtaXQoe3JvdywgZXZlbnR9KTtcbiAgfVxuXG4gIHB1YmxpYyByb3dEb3VibGVDbGlja2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJvd0RvdWJsZUNsaWNrLmVtaXQoe3JvdywgZXZlbnR9KTtcbiAgfVxuXG4gIHB1YmxpYyBoZWFkZXJDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBldmVudDogRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuaGVhZGVyQ2xpY2suZW1pdCh7Y29sdW1uLCBldmVudH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXNpemVJblByb2dyZXNzID0gZmFsc2U7IC8vIHRoaXMgaXMgYmVjYXVzZSBJIGNhbid0IHByZXZlbnQgY2xpY2sgZnJvbSBtb3VzdXAgb2YgdGhlIGRyYWcgZW5kXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjZWxsQ2xpY2tlZChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5jZWxsQ2xpY2suZW1pdCh7cm93LCBjb2x1bW4sIGV2ZW50fSk7XG4gIH1cblxuICAvLyBmdW5jdGlvbnM6XG4gIHByaXZhdGUgX2dldFJlbW90ZVBhcmFtZXRlcnMoKTogRGF0YVRhYmxlUGFyYW1zIHtcbiAgICBjb25zdCBwYXJhbXMgPSA8RGF0YVRhYmxlUGFyYW1zPnt9O1xuXG4gICAgaWYgKHRoaXMuc29ydEJ5KSB7XG4gICAgICBwYXJhbXMuc29ydEJ5ID0gdGhpcy5zb3J0Qnk7XG4gICAgICBwYXJhbXMuc29ydEFzYyA9IHRoaXMuc29ydEFzYztcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgcGFyYW1zLm9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgcGFyYW1zLmxpbWl0ID0gdGhpcy5saW1pdDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvbHVtbihjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkge1xuICAgIGlmIChjb2x1bW4uc29ydGFibGUpIHtcbiAgICAgIGNvbnN0IGFzY2VuZGluZyA9IHRoaXMuc29ydEJ5ID09PSBjb2x1bW4ucHJvcGVydHkgPyAhdGhpcy5zb3J0QXNjIDogdHJ1ZTtcbiAgICAgIHRoaXMuc29ydChjb2x1bW4ucHJvcGVydHksIGFzY2VuZGluZyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbHVtbkNvdW50KCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgKz0gdGhpcy5pbmRleENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIGNvdW50ICs9IGNvbHVtbi52aXNpYmxlID8gMSA6IDA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgcHVibGljIGdldFJvd0NvbG9yKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQpIHtcbiAgICBpZiAodGhpcy5yb3dDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Um93Q2FsbGJhY2s+dGhpcy5yb3dDb2xvcnMpKGl0ZW0sIHJvdywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RBbGxDaGVja2JveCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3g7XG4gIH1cblxuICBzZXQgc2VsZWN0QWxsQ2hlY2tib3godmFsdWUpIHtcbiAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IHZhbHVlO1xuICAgIHRoaXMuX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9vblNlbGVjdEFsbENoYW5nZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJvd3MudG9BcnJheSgpLmZvckVhY2gocm93ID0+IHJvdy5zZWxlY3RlZCA9IHZhbHVlKTtcbiAgICB0aGlzLnNlbGVjdGVkUm93c0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0Q2hhbmdlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuXG4gICAgLy8gbWFpbnRhaW4gdGhlIHNlbGVjdGVkUm93KHMpIHZpZXdcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdyk7XG4gICAgICBpZiAocm93LnNlbGVjdGVkICYmIGluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICB9IGVsc2UgaWYgKCFyb3cuc2VsZWN0ZWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocm93LnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3cgPSByb3c7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRSb3cgPT09IHJvdykge1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFJvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1bnNlbGVjdCBhbGwgb3RoZXIgcm93czpcbiAgICBpZiAocm93LnNlbGVjdGVkICYmICF0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLnJvd3MudG9BcnJheSgpLmZpbHRlcihyb3dfID0+IHJvd18uc2VsZWN0ZWQpLmZvckVhY2gocm93XyA9PiB7XG4gICAgICAgIGlmIChyb3dfICE9PSByb3cpIHsgLy8gYXZvaWQgZW5kbGVzcyBsb29wXG4gICAgICAgICAgcm93Xy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkUm93c0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIC8vIG90aGVyOlxuXG4gIGdldCBzdWJzdGl0dXRlSXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogdGhpcy5kaXNwbGF5UGFyYW1zLmxpbWl0IC0gdGhpcy5pdGVtcy5sZW5ndGh9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydChldmVudDogTW91c2VFdmVudCwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fcmVzaXplSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0T2Zmc2V0ID0gY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCAtIGV2ZW50LnBhZ2VYO1xuICAgIGRyYWcoZXZlbnQsIHtcbiAgICAgIG1vdmU6IChtb3ZlRXZlbnQ6IE1vdXNlRXZlbnQsIGR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50LCBkeCkpIHtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBzdGFydE9mZnNldCArIG1vdmVFdmVudC5wYWdlWCArIGR4O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNSZXNpemVJbkxpbWl0KGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkeDogbnVtYmVyKSB7XG4gICAgLyogVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBDU1MgbWluLXdpZHRoIGRpZG4ndCB3b3JrIG9uIHRhYmxlLWxheW91dDogZml4ZWQuXG4gICAgICAgICBXaXRob3V0IHRoZSBsaW1pdHMsIHJlc2l6aW5nIGNhbiBtYWtlIHRoZSBuZXh0IGNvbHVtbiBkaXNhcHBlYXIgY29tcGxldGVseSxcbiAgICAgICAgIGFuZCBldmVuIGluY3JlYXNlIHRoZSB0YWJsZSB3aWR0aC4gVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gc3VmZmVycyBmcm9tIHRoZSBmYWN0LFxuICAgICAgICAgdGhhdCBvZmZzZXRXaWR0aCBzb21ldGltZXMgY29udGFpbnMgb3V0LW9mLWRhdGUgdmFsdWVzLiAqL1xuICAgIGlmICgoZHggPCAwICYmIChjb2x1bW5FbGVtZW50Lm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpIHx8XG4gICAgICAhY29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgLy8gcmVzaXppbmcgZG9lc24ndCBtYWtlIHNlbnNlIGZvciB0aGUgbGFzdCB2aXNpYmxlIGNvbHVtblxuICAgICAgKGR4ID49IDAgJiYgKCg8SFRNTEVsZW1lbnQ+Y29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByaW1hcnlDb2x1bW4gPT09ICcnKSB7XG4gICAgICB0aGlzLnByaW1hcnlDb2x1bW4gPSAodGhpcy5jb2x1bW5zLmZpcnN0IGFzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkucHJvcGVydHk7XG4gICAgfVxuICB9XG5cbiAgX25vdGlmeSgpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5yZWxvYWRpbmc7XG5cbiAgICB0aGlzLnJlbG9hZE5vdGlmaWNhdGlvbiA9IGxvYWRpbmcgP1xuICAgICAgdGhpcy5sYWJlbHMubG9hZGluZ1RleHQucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpIDpcbiAgICAgIHRoaXMubGFiZWxzLmxvYWRlZFRleHQucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpO1xuXG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9IHRoaXMubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsICcnICsgKE1hdGguY2VpbCh0aGlzLml0ZW1Db3VudCAvIHRoaXMubGltaXQpICE9PSAwID8gdGhpcy5vZmZzZXQgKyAxIDogJzAnKSlcbiAgICAgICAgICAucmVwbGFjZSgne3RvfScsICcnICsgKE1hdGgubWluKHRoaXMub2Zmc2V0ICsgdGhpcy5saW1pdCwgdGhpcy5pdGVtQ291bnQpKSlcbiAgICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsICcnICsgdGhpcy5pdGVtQ291bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uTm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zb3J0QnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZpbmQoY29sdW1uID0+IGNvbHVtbi5wcm9wZXJ0eSA9PT0gdGhpcy5zb3J0QnkpIGFzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZTtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gKHRoaXMuc29ydEFzYyA/IHRoaXMubGFiZWxzLnNvcnRlZEFzY2VuZGluZyA6IHRoaXMubGFiZWxzLnNvcnRlZERlc2NlbmRpbmcpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKVxuICAgICAgICAgIC5yZXBsYWNlKCd7aGVhZGVyfScsIGNvbC5oZWFkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZpZXIkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==