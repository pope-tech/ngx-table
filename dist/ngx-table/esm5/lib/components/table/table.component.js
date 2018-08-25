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
                    template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    <span [textContent]=\"reloadNotification\"></span>\n    <span [textContent]=\"paginationNotification\"></span>\n    <span [textContent]=\"sortNotification\"></span>\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\">\n    <table class=\"table data-table\" [id]=\"id\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <td [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <input [hide]=\"!multiSelect\"\n                 type=\"checkbox\"\n                 [(ngModel)]=\"selectAllCheckbox\"\n                 [disabled]=\"itemCount === 0\"\n                 [title]=\"labels.selectAllRows\"\n                 [attr.aria-label]=\"labels.selectAllRows\"/>\n        </td>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\"\n                  [title]=\"!sortAsc ? labels.sortAscending : labels.sortDescending\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                aria-hidden=\"true\"></i>\n              <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n",
                    styles: [":host /deep/ .data-table.table>tbody+tbody{border-top:none}:host /deep/ .data-table.table td{vertical-align:middle}:host /deep/ .data-table>tbody>tr>td,:host /deep/ .data-table>thead>tr>th{overflow:hidden}:host /deep/ .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host /deep/ .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host /deep/ .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec;table-layout:fixed}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy>i{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
                },] },
    ];
    /** @nocollapse */
    DataTableComponent.ctorParameters = function () { return []; };
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
    return DataTableComponent;
}());
export { DataTableComponent };
if (false) {
    /** @type {?} */
    DataTableComponent.prototype._items;
    /** @type {?} */
    DataTableComponent.prototype._itemCount;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSTdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxZQUFZLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDOztJQXFWYjtzQkE1T3dCLEVBQUU7O3FCQWdDVCxFQUFFO3lCQUNFLElBQUk7c0JBQ1AsSUFBSTswQkFDQSxJQUFJOzJCQUNILElBQUk7aUNBQ0UsRUFBRTs0QkFHUCxLQUFLOzJCQUNOLElBQUk7OEJBQ0QsSUFBSTs4QkFDSixLQUFLO2dDQUVILEtBQUs7MEJBQ1gsSUFBSTs2QkFDRCxLQUFLOzBCQUVFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs2QkFDN0IsRUFBRTs7c0JBR1IsSUFBSSxZQUFZLEVBQUU7O3dCQUdoQixJQUFJLFlBQVksRUFBRTs4QkFDWixJQUFJLFlBQVksRUFBRTsyQkFDckIsSUFBSSxZQUFZLEVBQUU7eUJBQ3BC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QkFhTCxLQUFLOzBCQVdMLGVBQWUsU0FBQyx3QkFBd0I7dUJBQ3hDLFlBQVksU0FBQyxxQkFBcUI7aUNBQ2xDLFlBQVksU0FBQyxpQkFBaUI7d0JBRzlCLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FDTCxLQUFLO3lCQUNMLEtBQUs7bUNBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7eUJBR0wsTUFBTTsyQkFHTixNQUFNO2lDQUNOLE1BQU07OEJBQ04sTUFBTTs0QkFDTixNQUFNO3lCQWtETixLQUFLOzBCQVlMLEtBQUs7eUJBWUwsS0FBSzt3QkFZTCxLQUFLO3VCQVdMLEtBQUs7OzZCQWhTUjs7U0FrSWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuLi9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYXJhbXMgfSBmcm9tICcuLi8uLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcbmltcG9ydCB7IFJvd0NhbGxiYWNrIH0gZnJvbSAnLi4vLi4vdHlwZXMvcm93LWNhbGxiYWNrLnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkZWZhdWx0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGVmYXVsdC10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkcmFnIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHJhZyc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJzsgXG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS13cmFwcGVyXCI+XG4gIDxzcGFuIGNsYXNzPVwic3Itb25seVwiIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWF0b21pYz1cImZhbHNlXCIgYXJpYS1yZWxldmFudD1cInRleHRcIj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwicmVsb2FkTm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJwYWdpbmF0aW9uTm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3J0Tm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuXG4gIDxkYXRhLXRhYmxlLWhlYWRlciAqbmdJZj1cImhlYWRlclwiPjwvZGF0YS10YWJsZS1oZWFkZXI+XG5cbiAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtYm94XCI+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgZGF0YS10YWJsZVwiIFtpZF09XCJpZFwiPlxuICAgICAgPGNhcHRpb24gY2xhc3M9XCJzci1vbmx5XCIgW3RleHRDb250ZW50XT1cInRpdGxlXCI+PC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWV4cGFuZENvbHVtblZpc2libGVcIiBjbGFzcz1cImV4cGFuZC1jb2x1bW4taGVhZGVyXCI+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiIFtoaWRlXT1cIiFpbmRleENvbHVtblZpc2libGVcIiBjbGFzcz1cImluZGV4LWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiaW5kZXhDb2x1bW5IZWFkZXJcIj48L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhc2VsZWN0Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwic2VsZWN0LWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgICA8aW5wdXQgW2hpZGVdPVwiIW11bHRpU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgICBbdGl0bGVdPVwibGFiZWxzLnNlbGVjdEFsbFJvd3NcIlxuICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVscy5zZWxlY3RBbGxSb3dzXCIvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zLCBpbmRleCBhcyBpXCIgI3RoXG4gICAgICAgICAgICBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIlxuICAgICAgICAgICAgW2NsYXNzLnNvcnRhYmxlXT1cImNvbHVtbi5zb3J0YWJsZVwiXG4gICAgICAgICAgICBbY2xhc3MucmVzaXphYmxlXT1cImNvbHVtbi5yZXNpemFibGVcIlxuICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1zb3J0XT1cImNvbHVtbi5zb3J0YWJsZSA/IChjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeSA/IChzb3J0QXNjID8gJ2FzY2VuZGluZycgOiAnZGVzY2VuZGluZycpIDogJ25vbmUnKSA6IG51bGxcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIiBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIiBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoIHwgcHhcIiA+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiIChjbGljayk9XCJoZWFkZXJDbGlja2VkKGNvbHVtbiwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImNvbHVtbi5zb3J0YWJsZSA/IGlkIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cIiFzb3J0QXNjID8gbGFiZWxzLnNvcnRBc2NlbmRpbmcgOiBsYWJlbHMuc29ydERlc2NlbmRpbmdcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtpZF09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1ufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLXNvcnQtaWNvblwiICpuZ0lmPVwiY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5XCIgY2xhc3M9XCJmYSBmYS1zb3J0IGNvbHVtbi1zb3J0YWJsZS1pY29uXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSAhPT0gc29ydEJ5XCIgY2xhc3M9XCJmYVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbdGV4dENvbnRlbnRdPVwiY29sdW1uLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4tc29ydC1pY29uXCIgKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5XCIgY2xhc3M9XCJmYSBmYS1zb3J0IGNvbHVtbi1zb3J0YWJsZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSAhPT0gc29ydEJ5XCIgY2xhc3M9XCJmYVwiXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ZhLXNvcnQtYXNjJzogc29ydEFzYywgJ2ZhLXNvcnQtZGVzYyc6ICFzb3J0QXNjfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLnJlc2l6YWJsZVwiIGNsYXNzPVwiY29sdW1uLXJlc2l6ZS1oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJyZXNpemVDb2x1bW5TdGFydCgkZXZlbnQsIGNvbHVtbiwgdGgpXCI+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXg9aW5kZXhcIiBjbGFzcz1cImRhdGEtdGFibGUtcm93LXdyYXBwZXJcIlxuICAgICAgICAgICAgIGRhdGFUYWJsZVJvdyAjcm93IFtpdGVtXT1cIml0ZW1cIiBbaW5kZXhdPVwiaW5kZXhcIiAoc2VsZWN0ZWRDaGFuZ2UpPVwib25Sb3dTZWxlY3RDaGFuZ2VkKHJvdylcIj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgKm5nSWY9XCJpdGVtQ291bnQgPT09IDAgJiYgbm9EYXRhTWVzc2FnZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sdW1uQ291bnRcIj57eyBub0RhdGFNZXNzYWdlIH19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgY2xhc3M9XCJzdWJzdGl0dXRlLXJvd3NcIiAqbmdJZj1cInBhZ2luYXRpb24gJiYgc3Vic3RpdHV0ZVJvd3NcIj5cbiAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdWJzdGl0dXRlSXRlbXMsIGxldCBpbmRleCA9IGluZGV4XCJcbiAgICAgICAgICBbY2xhc3Mucm93LW9kZF09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1ldmVuXT1cIihpbmRleCArIGl0ZW1zLmxlbmd0aCkgJSAyID09PSAxXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWV4cGFuZENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiPiZuYnNwOzwvdGQ+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhc2VsZWN0Q29sdW1uVmlzaWJsZVwiPjwvdGQ+XG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIj5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGRpdiBjbGFzcz1cImJ1c3lcIiAqbmdJZj1cInNob3dSZWxvYWRpbmcgJiYgcmVsb2FkaW5nXCI+XG4gICAgICA8aT48aSBjbGFzcz1cImZhIGZhLXNwaW4gZmEtY29nIGZhLTJ4XCI+PC9pPjwvaT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRhdGEtdGFibGUtcGFnaW5hdGlvbiAqbmdJZj1cInBhZ2luYXRpb25cIiBbbGltaXRzXT1cInBhZ2VMaW1pdHNcIj48L2RhdGEtdGFibGUtcGFnaW5hdGlvbj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0IC9kZWVwLyAuZGF0YS10YWJsZS50YWJsZT50Ym9keSt0Ym9keXtib3JkZXItdG9wOm5vbmV9Omhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlLnRhYmxlIHRke3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdCAvZGVlcC8gLmRhdGEtdGFibGU+dGJvZHk+dHI+dGQsOmhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlPnRoZWFkPnRyPnRoe292ZXJmbG93OmhpZGRlbn06aG9zdCAvZGVlcC8gLmRhdGEtdGFibGU+dGhlYWQ+dHI+dGR7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2RlZTJlNn06aG9zdCAvZGVlcC8gLnJvdy1vZGR7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2fS5kYXRhLXRhYmxlIC5zdWJzdGl0dXRlLXJvd3M+dHI6aG92ZXIsOmhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlIC5kYXRhLXRhYmxlLXJvdzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlY2VjZWN9LmRhdGEtdGFibGV7Ym94LXNoYWRvdzowIDAgMTVweCAjZWNlY2VjO3RhYmxlLWxheW91dDpmaXhlZH0uY29sdW1uLWhlYWRlcntwb3NpdGlvbjpyZWxhdGl2ZX0uZXhwYW5kLWNvbHVtbi1oZWFkZXJ7d2lkdGg6NTBweH0uc2VsZWN0LWNvbHVtbi1oZWFkZXJ7d2lkdGg6NTBweDt0ZXh0LWFsaWduOmNlbnRlcn0uaW5kZXgtY29sdW1uLWhlYWRlcnt3aWR0aDo0MHB4fS5jb2x1bW4taGVhZGVyLnNvcnRhYmxlIGJ1dHRvbntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JhY2tncm91bmQ6MCAwO2JvcmRlcjowO2NvbG9yOmluaGVyaXQ7Y3Vyc29yOnBvaW50ZXI7Zm9udDppbmhlcml0O2xpbmUtaGVpZ2h0Om5vcm1hbDtvdmVyZmxvdzp2aXNpYmxlO3BhZGRpbmc6MDstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dGV4dC1hbGlnbjpsZWZ0fS5jb2x1bW4taGVhZGVyIC5jb2x1bW4tc29ydC1pY29ue21hcmdpbi1sZWZ0OjhweH0uY29sdW1uLWhlYWRlci5yZXNpemFibGUgLmNvbHVtbi1zb3J0LWljb257bWFyZ2luLXJpZ2h0OjhweH0uY29sdW1uLWhlYWRlciAuY29sdW1uLXNvcnQtaWNvbiAuY29sdW1uLXNvcnRhYmxlLWljb257Y29sb3I6I2QzZDNkM30uY29sdW1uLWhlYWRlciAuY29sdW1uLXJlc2l6ZS1oYW5kbGV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDttYXJnaW46MDtwYWRkaW5nOjA7d2lkdGg6OHB4O2hlaWdodDoxMDAlO2N1cnNvcjpjb2wtcmVzaXplfS5kYXRhLXRhYmxlLWJveHtwb3NpdGlvbjpyZWxhdGl2ZX0uYnVzeXtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNSl9LmJ1c3k+aXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBEYXRhVGFibGVQYXJhbXMsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9pdGVtczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfaXRlbUNvdW50O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgLy8gbm8gbmVlZCB0byBjYWxsIG5vdGlmaWVyLm5leHQoKSBiZWNhdXNlIF9vblJlbG9hZEZpbmlzaGVkKClcbiAgICAvLyB3aWxsIGNoYW5nZSByZWxvYWRlZCB2YWx1ZSBjYXVzaW5nIG5vdGlmaWVyLm5leHQoKSB0byBiZSBjYWxsZWQgaW1wbGljaXRseS5cbiAgICB0aGlzLl9vblJlbG9hZEZpbmlzaGVkKCk7XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbUNvdW50O1xuICB9XG5cbiAgc2V0IGl0ZW1Db3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbUNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBjb21wb25lbnRzOlxuICBAQ29udGVudENoaWxkcmVuKERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkgY29sdW1uczogUXVlcnlMaXN0PERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YVRhYmxlUm93Q29tcG9uZW50KSByb3dzOiBRdWVyeUxpc3Q8RGF0YVRhYmxlUm93Q29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlRXhwYW5kJykgZXhwYW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gT25lLXRpbWUgb3B0aW9uYWwgYmluZGluZ3Mgd2l0aCBkZWZhdWx0IHZhbHVlczpcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgaGVhZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5kZXhDb2x1bW5IZWFkZXIgPSAnJztcbiAgQElucHV0KCkgcm93Q29sb3JzOiBSb3dDYWxsYmFjaztcbiAgQElucHV0KCkgcm93VG9vbHRpcDogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHNlbGVjdENvbHVtbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtdWx0aVNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHN1YnN0aXR1dGVSb3dzID0gdHJ1ZTtcbiAgQElucHV0KCkgZXhwYW5kYWJsZVJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWxzOiBEYXRhVGFibGVUcmFuc2xhdGlvbnM7XG4gIEBJbnB1dCgpIHNlbGVjdE9uUm93Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b1JlbG9hZCA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dSZWxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9EYXRhTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlTGltaXRzOiBudW1iZXJbXSA9IFsxMCwgMjUsIDUwLCAxMDAsIDI1MF07XG4gIEBJbnB1dCgpIHByaW1hcnlDb2x1bW4gPSAnJztcblxuICAvLyByZWxvYWQgZW1pdHRlclxuICBAT3V0cHV0KCkgcmVsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGV2ZW50IGhhbmRsZXJzOlxuICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByb3dEb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhlYWRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2VsbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBVSSBzdGF0ZSB3aXRob3V0IGlucHV0OlxuICBpbmRleENvbHVtblZpc2libGU6IGJvb2xlYW47XG4gIHNlbGVjdENvbHVtblZpc2libGU6IGJvb2xlYW47XG4gIGV4cGFuZENvbHVtblZpc2libGU6IGJvb2xlYW47XG5cbiAgLy8gYWRhIG5vdGlmaWNhdGlvbnMuXG4gIHJlbG9hZE5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBwYWdpbmF0aW9uTm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIHNvcnROb3RpZmljYXRpb246IHN0cmluZztcbiAgY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb246IHN0cmluZztcblxuICBfZGlzcGxheVBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307IC8vIHBhcmFtcyBvZiB0aGUgbGFzdCBmaW5pc2hlZCByZWxvYWRcblxuICBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgc3ViamVjdCQ6IFN1YnNjcmlwdGlvbjtcblxuICBub3RpZmllciA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIG5vdGlmaWVyJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIHNlbGVjdGlvbjpcbiAgc2VsZWN0ZWRSb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudDtcbiAgc2VsZWN0ZWRSb3dzOiBEYXRhVGFibGVSb3dDb21wb25lbnRbXSA9IFtdO1xuXG4gIE1hdGg6IGFueTtcbiAgaWQgPSBgZGF0YXRhYmxlLSR7bmV4dElkKyt9YDtcblxuICAvLyBzZWxlY3QgYWxsIGNoZWNrYm94IGZsYWdcbiAgcHJpdmF0ZSBfc2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcblxuICAvLyBjb2x1bW4gcmVzaXppbmc6XG4gIHByaXZhdGUgX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICByZXNpemVMaW1pdCA9IDMwO1xuXG4gIC8vIFJlbG9hZGluZzpcbiAgX3JlbG9hZGluZyA9IGZhbHNlO1xuXG4gIGdldCByZWxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbG9hZGluZztcbiAgfVxuXG4gIHNldCByZWxvYWRpbmcodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVsb2FkaW5nID0gdmFsO1xuICAgIHRoaXMubm90aWZpZXIubmV4dCgpO1xuICB9XG5cbiAgLy8gVUkgc3RhdGU6IHZpc2libGUgZ2V0L3NldCBmb3IgdGhlIG91dHNpZGUgd2l0aCBASW5wdXQgZm9yIG9uZS10aW1lIGluaXRpYWwgdmFsdWVzXG4gIHByaXZhdGUgX3NvcnRCeTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3J0QnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEJ5O1xuICB9XG5cbiAgc2V0IHNvcnRCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc29ydEJ5ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NvcnRBc2MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3J0QXNjKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0QXNjO1xuICB9XG5cbiAgc2V0IHNvcnRBc2ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zb3J0QXNjID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldCA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IG9mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cblxuICBzZXQgb2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGltaXQgPSAxMDtcblxuICBASW5wdXQoKVxuICBnZXQgbGltaXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGltaXQ7XG4gIH1cblxuICBzZXQgbGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xpbWl0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZWQgcHJvcGVydHk6XG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1Db3VudCAhPT0gMCA/IE1hdGguZmxvb3IodGhpcy5vZmZzZXQgLyB0aGlzLmxpbWl0KSArIDEgOiAwO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWUpIHtcbiAgICB0aGlzLm9mZnNldCA9ICh2YWx1ZSAtIDEpICogdGhpcy5saW1pdDtcbiAgfVxuXG4gIGdldCBsYXN0UGFnZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuaXRlbUNvdW50IC8gdGhpcy5saW1pdCk7XG4gIH1cblxuICAvLyBzZXR0aW5nIG11bHRpcGxlIG9ic2VydmFibGUgcHJvcGVydGllcyBzaW11bHRhbmVvdXNseVxuICBzb3J0KHNvcnRCeTogc3RyaW5nLCBhc2M6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNvcnRCeSA9IHNvcnRCeTtcbiAgICB0aGlzLnNvcnRBc2MgPSBhc2M7XG4gIH1cblxuICAvLyBpbml0XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXREZWZhdWx0VmFsdWVzKCk7XG4gICAgdGhpcy5faW5pdERlZmF1bHRDbGlja0V2ZW50cygpO1xuICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlQYXJhbXMoKTtcblxuICAgIGlmICh0aGlzLnBhZ2VMaW1pdHMuaW5kZXhPZih0aGlzLmxpbWl0KSA8IDApIHtcbiAgICAgIHRoaXMubGltaXQgPSB0aGlzLnBhZ2VMaW1pdHNbMF07XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbHMgPSB7Li4uZGVmYXVsdFRyYW5zbGF0aW9ucywgLi4udGhpcy5sYWJlbHN9O1xuXG4gICAgaWYgKHRoaXMuYXV0b1JlbG9hZCkge1xuICAgICAgdGhpcy5yZWxvYWRJdGVtcygpO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZpZXIkID0gdGhpcy5ub3RpZmllci5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbm90aWZ5KCkpO1xuICAgIHRoaXMuc3ViamVjdCQgPSB0aGlzLnN1YmplY3QucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVsb2FkSXRlbXMoKSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2luaXREZWZhdWx0VmFsdWVzKCkge1xuICAgIHRoaXMuaW5kZXhDb2x1bW5WaXNpYmxlID0gdGhpcy5pbmRleENvbHVtbjtcbiAgICB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPSB0aGlzLnNlbGVjdENvbHVtbjtcbiAgICB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPSB0aGlzLmV4cGFuZGFibGVSb3dzO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERlZmF1bHRDbGlja0V2ZW50cygpIHtcbiAgICB0aGlzLmhlYWRlckNsaWNrLnN1YnNjcmliZShcbiAgICAgICh0YWJsZUV2ZW50OiB7IGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBldmVudDogRXZlbnQgfSkgPT4gdGhpcy5zb3J0Q29sdW1uKHRhYmxlRXZlbnQuY29sdW1uKSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0T25Sb3dDbGljaykge1xuICAgICAgdGhpcy5yb3dDbGljay5zdWJzY3JpYmUoXG4gICAgICAgICh0YWJsZUV2ZW50OiB7IHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQgfSkgPT4gdGFibGVFdmVudC5yb3cuc2VsZWN0ZWQgPSAhdGFibGVFdmVudC5yb3cuc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbG9hZEl0ZW1zKCkge1xuICAgIHRoaXMucmVsb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlbG9hZC5lbWl0KHRoaXMuX2dldFJlbW90ZVBhcmFtZXRlcnMoKSk7XG4gIH1cblxuICBwcml2YXRlIF9vblJlbG9hZEZpbmlzaGVkKCkge1xuICAgIGlmICh0aGlzLnJlbG9hZGluZykge1xuICAgICAgdGhpcy5fdXBkYXRlRGlzcGxheVBhcmFtcygpO1xuICAgICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcbiAgICAgIHRoaXMucmVsb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdldCBkaXNwbGF5UGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5UGFyYW1zO1xuICB9XG5cbiAgX3VwZGF0ZURpc3BsYXlQYXJhbXMoKSB7XG4gICAgdGhpcy5fZGlzcGxheVBhcmFtcyA9IHtcbiAgICAgIHNvcnRCeTogdGhpcy5zb3J0QnksXG4gICAgICBzb3J0QXNjOiB0aGlzLnNvcnRBc2MsXG4gICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgbGltaXQ6IHRoaXMubGltaXRcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgcm93Q2xpY2tlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5yb3dDbGljay5lbWl0KHtyb3csIGV2ZW50fSk7XG4gIH1cblxuICBwdWJsaWMgcm93RG91YmxlQ2xpY2tlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5yb3dEb3VibGVDbGljay5lbWl0KHtyb3csIGV2ZW50fSk7XG4gIH1cblxuICBwdWJsaWMgaGVhZGVyQ2xpY2tlZChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9yZXNpemVJblByb2dyZXNzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmhlYWRlckNsaWNrLmVtaXQoe2NvbHVtbiwgZXZlbnR9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVzaXplSW5Qcm9ncmVzcyA9IGZhbHNlOyAvLyB0aGlzIGlzIGJlY2F1c2UgSSBjYW4ndCBwcmV2ZW50IGNsaWNrIGZyb20gbW91c3VwIG9mIHRoZSBkcmFnIGVuZFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2VsbENsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuY2VsbENsaWNrLmVtaXQoe3JvdywgY29sdW1uLCBldmVudH0pO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25zOlxuICBwcml2YXRlIF9nZXRSZW1vdGVQYXJhbWV0ZXJzKCk6IERhdGFUYWJsZVBhcmFtcyB7XG4gICAgY29uc3QgcGFyYW1zID0gPERhdGFUYWJsZVBhcmFtcz57fTtcblxuICAgIGlmICh0aGlzLnNvcnRCeSkge1xuICAgICAgcGFyYW1zLnNvcnRCeSA9IHRoaXMuc29ydEJ5O1xuICAgICAgcGFyYW1zLnNvcnRBc2MgPSB0aGlzLnNvcnRBc2M7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIHBhcmFtcy5vZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgIHBhcmFtcy5saW1pdCA9IHRoaXMubGltaXQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb2x1bW4oY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpIHtcbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlKSB7XG4gICAgICBjb25zdCBhc2NlbmRpbmcgPSB0aGlzLnNvcnRCeSA9PT0gY29sdW1uLnByb3BlcnR5ID8gIXRoaXMuc29ydEFzYyA6IHRydWU7XG4gICAgICB0aGlzLnNvcnQoY29sdW1uLnByb3BlcnR5LCBhc2NlbmRpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb2x1bW5Db3VudCgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvdW50ICs9IHRoaXMuaW5kZXhDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgY291bnQgKz0gdGhpcy5zZWxlY3RDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgY291bnQgKz0gdGhpcy5leHBhbmRDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBjb3VudCArPSBjb2x1bW4udmlzaWJsZSA/IDEgOiAwO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSb3dDb2xvcihpdGVtOiBhbnksIGluZGV4OiBudW1iZXIsIHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50KSB7XG4gICAgaWYgKHRoaXMucm93Q29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoPFJvd0NhbGxiYWNrPnRoaXMucm93Q29sb3JzKShpdGVtLCByb3csIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0QWxsQ2hlY2tib3goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94O1xuICB9XG5cbiAgc2V0IHNlbGVjdEFsbENoZWNrYm94KHZhbHVlKSB7XG4gICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3ggPSB2YWx1ZTtcbiAgICB0aGlzLl9vblNlbGVjdEFsbENoYW5nZWQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25TZWxlY3RBbGxDaGFuZ2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5yb3dzLnRvQXJyYXkoKS5mb3JFYWNoKHJvdyA9PiByb3cuc2VsZWN0ZWQgPSB2YWx1ZSk7XG4gIH1cblxuICBvblJvd1NlbGVjdENoYW5nZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQpIHtcblxuICAgIC8vIG1haW50YWluIHRoZSBzZWxlY3RlZFJvdyhzKSB2aWV3XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZFJvd3MuaW5kZXhPZihyb3cpO1xuICAgICAgaWYgKHJvdy5zZWxlY3RlZCAmJiBpbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MucHVzaChyb3cpO1xuICAgICAgfSBlbHNlIGlmICghcm93LnNlbGVjdGVkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJvdy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUm93ID09PSByb3cpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRSb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdW5zZWxlY3QgYWxsIG90aGVyIHJvd3M6XG4gICAgaWYgKHJvdy5zZWxlY3RlZCAmJiAhdGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5yb3dzLnRvQXJyYXkoKS5maWx0ZXIocm93XyA9PiByb3dfLnNlbGVjdGVkKS5mb3JFYWNoKHJvd18gPT4ge1xuICAgICAgICBpZiAocm93XyAhPT0gcm93KSB7IC8vIGF2b2lkIGVuZGxlc3MgbG9vcFxuICAgICAgICAgIHJvd18uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gb3RoZXI6XG5cbiAgZ2V0IHN1YnN0aXR1dGVJdGVtcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB0aGlzLmRpc3BsYXlQYXJhbXMubGltaXQgLSB0aGlzLml0ZW1zLmxlbmd0aH0pO1xuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtblN0YXJ0KGV2ZW50OiBNb3VzZUV2ZW50LCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgY29sdW1uRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9yZXNpemVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRPZmZzZXQgPSBjb2x1bW5FbGVtZW50Lm9mZnNldFdpZHRoIC0gZXZlbnQucGFnZVg7XG4gICAgZHJhZyhldmVudCwge1xuICAgICAgbW92ZTogKG1vdmVFdmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNSZXNpemVJbkxpbWl0KGNvbHVtbkVsZW1lbnQsIGR4KSkge1xuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IHN0YXJ0T2Zmc2V0ICsgbW92ZUV2ZW50LnBhZ2VYICsgZHg7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1Jlc2l6ZUluTGltaXQoY29sdW1uRWxlbWVudDogSFRNTEVsZW1lbnQsIGR4OiBudW1iZXIpIHtcbiAgICAvKiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIENTUyBtaW4td2lkdGggZGlkbid0IHdvcmsgb24gdGFibGUtbGF5b3V0OiBmaXhlZC5cbiAgICAgICAgIFdpdGhvdXQgdGhlIGxpbWl0cywgcmVzaXppbmcgY2FuIG1ha2UgdGhlIG5leHQgY29sdW1uIGRpc2FwcGVhciBjb21wbGV0ZWx5LFxuICAgICAgICAgYW5kIGV2ZW4gaW5jcmVhc2UgdGhlIHRhYmxlIHdpZHRoLiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBzdWZmZXJzIGZyb20gdGhlIGZhY3QsXG4gICAgICAgICB0aGF0IG9mZnNldFdpZHRoIHNvbWV0aW1lcyBjb250YWlucyBvdXQtb2YtZGF0ZSB2YWx1ZXMuICovXG4gICAgaWYgKChkeCA8IDAgJiYgKGNvbHVtbkVsZW1lbnQub2Zmc2V0V2lkdGggKyBkeCkgPD0gdGhpcy5yZXNpemVMaW1pdCkgfHxcbiAgICAgICFjb2x1bW5FbGVtZW50Lm5leHRFbGVtZW50U2libGluZyB8fCAvLyByZXNpemluZyBkb2Vzbid0IG1ha2Ugc2Vuc2UgZm9yIHRoZSBsYXN0IHZpc2libGUgY29sdW1uXG4gICAgICAoZHggPj0gMCAmJiAoKDxIVE1MRWxlbWVudD4gY29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByaW1hcnlDb2x1bW4gPT09ICcnKSB7XG4gICAgICB0aGlzLnByaW1hcnlDb2x1bW4gPSAodGhpcy5jb2x1bW5zLmZpcnN0IGFzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkucHJvcGVydHk7XG4gICAgfVxuICB9XG5cbiAgX25vdGlmeSgpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5yZWxvYWRpbmc7XG5cbiAgICB0aGlzLnJlbG9hZE5vdGlmaWNhdGlvbiA9IGxvYWRpbmcgP1xuICAgICAgdGhpcy5sYWJlbHMubG9hZGluZ1RleHQucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpIDpcbiAgICAgIHRoaXMubGFiZWxzLmxvYWRlZFRleHQucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpO1xuXG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9IHRoaXMubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsICcnICsgKE1hdGguY2VpbCh0aGlzLml0ZW1Db3VudCAvIHRoaXMubGltaXQpICE9PSAwID8gdGhpcy5vZmZzZXQgKyAxIDogJzAnKSlcbiAgICAgICAgICAucmVwbGFjZSgne3RvfScsICcnICsgKE1hdGgubWluKHRoaXMub2Zmc2V0ICsgdGhpcy5saW1pdCwgdGhpcy5pdGVtQ291bnQpKSlcbiAgICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsICcnICsgdGhpcy5pdGVtQ291bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uTm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zb3J0QnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZpbmQoY29sdW1uID0+IGNvbHVtbi5wcm9wZXJ0eSA9PT0gdGhpcy5zb3J0QnkpIGFzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZTtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gKHRoaXMuc29ydEFzYyA/IHRoaXMubGFiZWxzLnNvcnRlZEFzY2VuZGluZyA6IHRoaXMubGFiZWxzLnNvcnRlZERlc2NlbmRpbmcpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKVxuICAgICAgICAgIC5yZXBsYWNlKCd7aGVhZGVyfScsIGNvbC5oZWFkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZpZXIkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==