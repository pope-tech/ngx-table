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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsWUFBWSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQzs7SUFxVmI7c0JBNU93QixFQUFFOztxQkFnQ1QsRUFBRTt5QkFDRSxJQUFJO3NCQUNQLElBQUk7MEJBQ0EsSUFBSTsyQkFDSCxJQUFJO2lDQUNFLEVBQUU7NEJBR1AsS0FBSzsyQkFDTixJQUFJOzhCQUNELElBQUk7OEJBQ0osS0FBSztnQ0FFSCxLQUFLOzBCQUNYLElBQUk7NkJBQ0QsS0FBSzswQkFFRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7NkJBQzdCLEVBQUU7O3NCQUdSLElBQUksWUFBWSxFQUFFOzt3QkFHaEIsSUFBSSxZQUFZLEVBQUU7OEJBQ1osSUFBSSxZQUFZLEVBQUU7MkJBQ3JCLElBQUksWUFBWSxFQUFFO3lCQUNwQixJQUFJLFlBQVksRUFBRTtnREFZTixFQUFFO3VCQUUxQixJQUFJLE9BQU8sRUFBUTt3QkFHbEIsSUFBSSxPQUFPLEVBQVE7NEJBS1UsRUFBRTtrQkFHckMsZUFBYSxNQUFNLEVBQUk7a0NBR0MsS0FBSztpQ0FHTixLQUFLOzJCQUVuQixFQUFFOzswQkFHSCxLQUFLO3dCQXdCQyxJQUFJO3VCQVlMLENBQUM7c0JBWUYsRUFBRTtLQTZGRjtJQXpPakIsc0JBQ0kscUNBQUs7Ozs7UUFEVDtZQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQUVELFVBQVUsS0FBWTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7O1lBR3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCOzs7T0FQQTtJQVVELHNCQUNJLHlDQUFTOzs7O1FBRGI7WUFFRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7Ozs7UUFFRCxVQUFjLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0Qjs7O09BTEE7SUE4RUQsc0JBQUkseUNBQVM7Ozs7UUFBYjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQUVELFVBQWMsR0FBWTtZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCOzs7T0FMQTtJQVVELHNCQUNJLHNDQUFNOzs7O1FBRFY7WUFFRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFFRCxVQUFXLEtBQWE7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjs7O09BTEE7SUFTRCxzQkFDSSx1Q0FBTzs7OztRQURYO1lBRUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBRUQsVUFBWSxLQUFjO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7OztPQUxBO0lBU0Qsc0JBQ0ksc0NBQU07Ozs7UUFEVjtZQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQUVELFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCOzs7T0FMQTtJQVNELHNCQUNJLHFDQUFLOzs7O1FBRFQ7WUFFRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFFRCxVQUFVLEtBQWE7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjs7O09BTEE7SUFRRCxzQkFDSSxvQ0FBSTtRQUZSLHVCQUF1Qjs7OztRQUN2QjtZQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RTs7Ozs7UUFFRCxVQUFTLEtBQUs7WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDeEM7OztPQUpBO0lBTUQsc0JBQUksd0NBQVE7Ozs7UUFBWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DOzs7T0FBQTtJQUVELHdEQUF3RDs7Ozs7O0lBQ3hELGlDQUFJOzs7OztJQUFKLFVBQUssTUFBYyxFQUFFLEdBQVk7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7S0FDcEI7SUFFRCxPQUFPOzs7O0lBQ1AscUNBQVE7OztJQUFSO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRTVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxNQUFNLHdCQUFPLG1CQUFtQixFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0tBRTFGOzs7O0lBRU8sK0NBQWtCOzs7O1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDOzs7OztJQUd6QyxvREFBdUI7Ozs7O1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUN4QixVQUFDLFVBQThELElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1FBQzFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3JCLFVBQUMsVUFBd0QsSUFBSyxPQUFBLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQWxELENBQWtELENBQUMsQ0FBQztTQUNySDs7Ozs7SUFHSCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0tBQy9DOzs7O0lBRU8sOENBQWlCOzs7O1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7O0lBRUgsc0JBQUksNkNBQWE7Ozs7UUFBakI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM1Qjs7O09BQUE7Ozs7SUFFRCxpREFBb0I7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7S0FDSDs7Ozs7O0lBSU0sdUNBQVU7Ozs7O2NBQUMsR0FBMEIsRUFBRSxLQUFZO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBRzVCLDZDQUFnQjs7Ozs7Y0FBQyxHQUEwQixFQUFFLEtBQVk7UUFDOUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEtBQUEsRUFBRSxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7Ozs7Ozs7SUFHbEMsMENBQWE7Ozs7O2NBQUMsTUFBZ0MsRUFBRSxLQUFZO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1NBQ2hDOzs7Ozs7OztJQUdLLHdDQUFXOzs7Ozs7Y0FBQyxNQUFnQyxFQUFFLEdBQTBCLEVBQUUsS0FBaUI7UUFDakcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEtBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7Ozs7O0lBSXBDLGlEQUFvQjs7Ozs7UUFDMUIsSUFBTSxNQUFNLHFCQUFvQixFQUFFLEVBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMvQjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDOzs7Ozs7SUFHUix1Q0FBVTs7OztjQUFDLE1BQWdDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztZQUNwQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN2Qzs7SUFHSCxzQkFBSSwyQ0FBVzs7OztRQUFmOztZQUNFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLEtBQUssSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLEtBQUssSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLEtBQUssSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtnQkFDbkMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDs7O09BQUE7Ozs7Ozs7SUFFTSx3Q0FBVzs7Ozs7O2NBQUMsSUFBUyxFQUFFLEtBQWEsRUFBRSxHQUEwQjtRQUNyRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLG1CQUFjLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hEOztJQUdILHNCQUFJLGlEQUFpQjs7OztRQUFyQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDaEM7Ozs7O1FBRUQsVUFBc0IsS0FBSztZQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzs7O09BTEE7Ozs7O0lBT08sZ0RBQW1COzs7O2NBQUMsS0FBYztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxFQUFwQixDQUFvQixDQUFDLENBQUM7Ozs7OztJQUczRCwrQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsR0FBMEI7O1FBRzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztZQUNyQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM3QjtZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNwQztTQUNGO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7YUFDeEI7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDekI7U0FDRjs7UUFHRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxFQUFiLENBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQzVELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOztvQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3ZCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtJQUlELHNCQUFJLCtDQUFlO1FBRm5CLFNBQVM7Ozs7UUFFVDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUMzRTs7O09BQUE7Ozs7Ozs7SUFFTSw4Q0FBaUI7Ozs7OztjQUFDLEtBQWlCLEVBQUUsTUFBZ0MsRUFBRSxhQUEwQjs7UUFDdEcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzs7UUFDOUIsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLEVBQUUsVUFBQyxTQUFxQixFQUFFLEVBQVU7Z0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztpQkFDbkQ7YUFDRjtTQUNGLENBQUMsQ0FBQzs7Ozs7OztJQUdHLDZDQUFnQjs7Ozs7Y0FBQyxhQUEwQixFQUFFLEVBQVU7Ozs7O1FBSzdELEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNsRSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsSUFBSSwwREFBMEQ7O1lBQy9GLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFlLGFBQWEsQ0FBQyxrQkFBa0IsRUFBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Ozs7O0lBR2QsK0NBQWtCOzs7SUFBbEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQWlDLEVBQUMsQ0FBQyxRQUFRLENBQUM7U0FDaEY7S0FDRjs7OztJQUVELG9DQUFPOzs7SUFBUDtRQUFBLGlCQXlCQzs7UUF4QkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztxQkFDckQsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUM5RixPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3FCQUMxRSxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO2FBQ2xDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOztnQkFDNUQsSUFBTSxHQUFHLHFCQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsTUFBTSxFQUEvQixDQUErQixDQUE2QixFQUFDO2dCQUMvRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDaEcsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO3FCQUM5QixPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNwQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7YUFDNUI7U0FDRjtLQUNGOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzlCOztnQkE5ZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsa2xLQWdHWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQywyN0NBQTI3QyxDQUFDO2lCQUN0OEM7Ozs7O3dCQU1FLEtBQUs7NEJBYUwsS0FBSzswQkFXTCxlQUFlLFNBQUMsd0JBQXdCO3VCQUN4QyxZQUFZLFNBQUMscUJBQXFCO2lDQUNsQyxZQUFZLFNBQUMsaUJBQWlCO3dCQUc5QixLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7b0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLO21DQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUdMLE1BQU07MkJBR04sTUFBTTtpQ0FDTixNQUFNOzhCQUNOLE1BQU07NEJBQ04sTUFBTTt5QkFrRE4sS0FBSzswQkFZTCxLQUFLO3lCQVlMLEtBQUs7d0JBWUwsS0FBSzt1QkFXTCxLQUFLOzs2QkFoU1I7O1NBa0lhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG5pbXBvcnQgeyBSb3dDYWxsYmFjayB9IGZyb20gJy4uLy4uL3R5cGVzL3Jvdy1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZGVmYXVsdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RlZmF1bHQtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZHJhZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RyYWcnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7IFxuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtd3JhcHBlclwiPlxuICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIiByb2xlPVwic3RhdHVzXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1hdG9taWM9XCJmYWxzZVwiIGFyaWEtcmVsZXZhbnQ9XCJ0ZXh0XCI+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cInJlbG9hZE5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwicGFnaW5hdGlvbk5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwic29ydE5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb25cIj48L3NwYW4+XG4gIDwvc3Bhbj5cblxuICA8ZGF0YS10YWJsZS1oZWFkZXIgKm5nSWY9XCJoZWFkZXJcIj48L2RhdGEtdGFibGUtaGVhZGVyPlxuXG4gIDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWJveFwiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGRhdGEtdGFibGVcIiBbaWRdPVwiaWRcIj5cbiAgICAgIDxjYXB0aW9uIGNsYXNzPVwic3Itb25seVwiIFt0ZXh0Q29udGVudF09XCJ0aXRsZVwiPjwvY2FwdGlvbj5cbiAgICAgIDx0aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFleHBhbmRDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJleHBhbmQtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBbaGlkZV09XCIhaW5kZXhDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJpbmRleC1jb2x1bW4taGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImluZGV4Q29sdW1uSGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICA8L3RoPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIXNlbGVjdENvbHVtblZpc2libGVcIiBjbGFzcz1cInNlbGVjdC1jb2x1bW4taGVhZGVyXCI+XG4gICAgICAgICAgPGlucHV0IFtoaWRlXT1cIiFtdWx0aVNlbGVjdFwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0QWxsQ2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImxhYmVscy5zZWxlY3RBbGxSb3dzXCJcbiAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbHMuc2VsZWN0QWxsUm93c1wiLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1ucywgaW5kZXggYXMgaVwiICN0aFxuICAgICAgICAgICAgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCJcbiAgICAgICAgICAgIFtjbGFzcy5zb3J0YWJsZV09XCJjb2x1bW4uc29ydGFibGVcIlxuICAgICAgICAgICAgW2NsYXNzLnJlc2l6YWJsZV09XCJjb2x1bW4ucmVzaXphYmxlXCJcbiAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtc29ydF09XCJjb2x1bW4uc29ydGFibGUgPyAoY29sdW1uLnByb3BlcnR5ID09PSBzb3J0QnkgPyAoc29ydEFzYyA/ICdhc2NlbmRpbmcnIDogJ2Rlc2NlbmRpbmcnKSA6ICdub25lJykgOiBudWxsXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCIgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCIgW3N0eWxlLndpZHRoXT1cImNvbHVtbi53aWR0aCB8IHB4XCIgPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIiAoY2xpY2spPVwiaGVhZGVyQ2xpY2tlZChjb2x1bW4sICRldmVudClcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJjb2x1bW4uc29ydGFibGUgPyBpZCA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiJ2NvbC0nK2lkKyctJytpXCJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCIhc29ydEFzYyA/IGxhYmVscy5zb3J0QXNjZW5kaW5nIDogbGFiZWxzLnNvcnREZXNjZW5kaW5nXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbaWRdPVwiJ2NvbC0nK2lkKyctJytpXCJcbiAgICAgICAgICAgICAgICAgIFt0ZXh0Q29udGVudF09XCJjb2x1bW4uaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbn1cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi1zb3J0LWljb25cIiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiPlxuICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeVwiIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeVwiIGNsYXNzPVwiZmFcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZmEtc29ydC1hc2MnOiBzb3J0QXNjLCAnZmEtc29ydC1kZXNjJzogIXNvcnRBc2N9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4ucmVzaXphYmxlXCIgY2xhc3M9XCJjb2x1bW4tcmVzaXplLWhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInJlc2l6ZUNvbHVtblN0YXJ0KCRldmVudCwgY29sdW1uLCB0aClcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1ufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLXNvcnQtaWNvblwiICpuZ0lmPVwiY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeVwiIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeVwiIGNsYXNzPVwiZmFcIlxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGluZGV4PWluZGV4XCIgY2xhc3M9XCJkYXRhLXRhYmxlLXJvdy13cmFwcGVyXCJcbiAgICAgICAgICAgICBkYXRhVGFibGVSb3cgI3JvdyBbaXRlbV09XCJpdGVtXCIgW2luZGV4XT1cImluZGV4XCIgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uUm93U2VsZWN0Q2hhbmdlZChyb3cpXCI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5ICpuZ0lmPVwiaXRlbUNvdW50ID09PSAwICYmIG5vRGF0YU1lc3NhZ2VcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImNvbHVtbkNvdW50XCI+e3sgbm9EYXRhTWVzc2FnZSB9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5IGNsYXNzPVwic3Vic3RpdHV0ZS1yb3dzXCIgKm5nSWY9XCJwYWdpbmF0aW9uICYmIHN1YnN0aXR1dGVSb3dzXCI+XG4gICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3Vic3RpdHV0ZUl0ZW1zLCBsZXQgaW5kZXggPSBpbmRleFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1vZGRdPVwiKGluZGV4ICsgaXRlbXMubGVuZ3RoKSAlIDIgPT09IDBcIlxuICAgICAgICAgIFtjbGFzcy5yb3ctZXZlbl09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFleHBhbmRDb2x1bW5WaXNpYmxlXCI+PC90ZD5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFpbmRleENvbHVtblZpc2libGVcIj4mbmJzcDs8L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIXNlbGVjdENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCI+XG4gICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgIDxkaXYgY2xhc3M9XCJidXN5XCIgKm5nSWY9XCJzaG93UmVsb2FkaW5nICYmIHJlbG9hZGluZ1wiPlxuICAgICAgPGk+PGkgY2xhc3M9XCJmYSBmYS1zcGluIGZhLWNvZyBmYS0yeFwiPjwvaT48L2k+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkYXRhLXRhYmxlLXBhZ2luYXRpb24gKm5nSWY9XCJwYWdpbmF0aW9uXCIgW2xpbWl0c109XCJwYWdlTGltaXRzXCI+PC9kYXRhLXRhYmxlLXBhZ2luYXRpb24+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2A6aG9zdCAvZGVlcC8gLmRhdGEtdGFibGUudGFibGU+dGJvZHkrdGJvZHl7Ym9yZGVyLXRvcDpub25lfTpob3N0IC9kZWVwLyAuZGF0YS10YWJsZS50YWJsZSB0ZHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Omhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlPnRib2R5PnRyPnRkLDpob3N0IC9kZWVwLyAuZGF0YS10YWJsZT50aGVhZD50cj50aHtvdmVyZmxvdzpoaWRkZW59Omhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlPnRoZWFkPnRyPnRke2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNkZWUyZTZ9Omhvc3QgL2RlZXAvIC5yb3ctb2Rke2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNn0uZGF0YS10YWJsZSAuc3Vic3RpdHV0ZS1yb3dzPnRyOmhvdmVyLDpob3N0IC9kZWVwLyAuZGF0YS10YWJsZSAuZGF0YS10YWJsZS1yb3c6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWNlY2VjfS5kYXRhLXRhYmxle2JveC1zaGFkb3c6MCAwIDE1cHggI2VjZWNlYzt0YWJsZS1sYXlvdXQ6Zml4ZWR9LmNvbHVtbi1oZWFkZXJ7cG9zaXRpb246cmVsYXRpdmV9LmV4cGFuZC1jb2x1bW4taGVhZGVye3dpZHRoOjUwcHh9LnNlbGVjdC1jb2x1bW4taGVhZGVye3dpZHRoOjUwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9LmluZGV4LWNvbHVtbi1oZWFkZXJ7d2lkdGg6NDBweH0uY29sdW1uLWhlYWRlci5zb3J0YWJsZSBidXR0b257Ym94LXNpemluZzpjb250ZW50LWJveDtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6MDtjb2xvcjppbmhlcml0O2N1cnNvcjpwb2ludGVyO2ZvbnQ6aW5oZXJpdDtsaW5lLWhlaWdodDpub3JtYWw7b3ZlcmZsb3c6dmlzaWJsZTtwYWRkaW5nOjA7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3RleHQtYWxpZ246bGVmdH0uY29sdW1uLWhlYWRlciAuY29sdW1uLXNvcnQtaWNvbnttYXJnaW4tbGVmdDo4cHh9LmNvbHVtbi1oZWFkZXIucmVzaXphYmxlIC5jb2x1bW4tc29ydC1pY29ue21hcmdpbi1yaWdodDo4cHh9LmNvbHVtbi1oZWFkZXIgLmNvbHVtbi1zb3J0LWljb24gLmNvbHVtbi1zb3J0YWJsZS1pY29ue2NvbG9yOiNkM2QzZDN9LmNvbHVtbi1oZWFkZXIgLmNvbHVtbi1yZXNpemUtaGFuZGxle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bWFyZ2luOjA7cGFkZGluZzowO3dpZHRoOjhweDtoZWlnaHQ6MTAwJTtjdXJzb3I6Y29sLXJlc2l6ZX0uZGF0YS10YWJsZS1ib3h7cG9zaXRpb246cmVsYXRpdmV9LmJ1c3l7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjUpfS5idXN5Pml7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgRGF0YVRhYmxlUGFyYW1zLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX2l0ZW1Db3VudDtcblxuICBASW5wdXQoKVxuICBnZXQgaXRlbXMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIHNldCBpdGVtcyhpdGVtczogYW55W10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIC8vIG5vIG5lZWQgdG8gY2FsbCBub3RpZmllci5uZXh0KCkgYmVjYXVzZSBfb25SZWxvYWRGaW5pc2hlZCgpXG4gICAgLy8gd2lsbCBjaGFuZ2UgcmVsb2FkZWQgdmFsdWUgY2F1c2luZyBub3RpZmllci5uZXh0KCkgdG8gYmUgY2FsbGVkIGltcGxpY2l0bHkuXG4gICAgdGhpcy5fb25SZWxvYWRGaW5pc2hlZCgpO1xuICB9XG5cblxuICBASW5wdXQoKVxuICBnZXQgaXRlbUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1Db3VudDtcbiAgfVxuXG4gIHNldCBpdGVtQ291bnQoY291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuX2l0ZW1Db3VudCA9IGNvdW50O1xuICAgIHRoaXMubm90aWZpZXIubmV4dCgpO1xuICB9XG5cbiAgLy8gVUkgY29tcG9uZW50czpcbiAgQENvbnRlbnRDaGlsZHJlbihEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpIGNvbHVtbnM6IFF1ZXJ5TGlzdDxEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU+O1xuICBAVmlld0NoaWxkcmVuKERhdGFUYWJsZVJvd0NvbXBvbmVudCkgcm93czogUXVlcnlMaXN0PERhdGFUYWJsZVJvd0NvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUV4cGFuZCcpIGV4cGFuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vIE9uZS10aW1lIG9wdGlvbmFsIGJpbmRpbmdzIHdpdGggZGVmYXVsdCB2YWx1ZXM6XG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGhlYWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBpbmRleENvbHVtbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uSGVhZGVyID0gJyc7XG4gIEBJbnB1dCgpIHJvd0NvbG9yczogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHJvd1Rvb2x0aXA6IFJvd0NhbGxiYWNrO1xuICBASW5wdXQoKSBzZWxlY3RDb2x1bW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbXVsdGlTZWxlY3QgPSB0cnVlO1xuICBASW5wdXQoKSBzdWJzdGl0dXRlUm93cyA9IHRydWU7XG4gIEBJbnB1dCgpIGV4cGFuZGFibGVSb3dzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsczogRGF0YVRhYmxlVHJhbnNsYXRpb25zO1xuICBASW5wdXQoKSBzZWxlY3RPblJvd0NsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9SZWxvYWQgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93UmVsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vRGF0YU1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgcGFnZUxpbWl0czogbnVtYmVyW10gPSBbMTAsIDI1LCA1MCwgMTAwLCAyNTBdO1xuICBASW5wdXQoKSBwcmltYXJ5Q29sdW1uID0gJyc7XG5cbiAgLy8gcmVsb2FkIGVtaXR0ZXJcbiAgQE91dHB1dCgpIHJlbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBldmVudCBoYW5kbGVyczpcbiAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcm93RG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoZWFkZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNlbGxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gVUkgc3RhdGUgd2l0aG91dCBpbnB1dDpcbiAgaW5kZXhDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuICBzZWxlY3RDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuICBleHBhbmRDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuXG4gIC8vIGFkYSBub3RpZmljYXRpb25zLlxuICByZWxvYWROb3RpZmljYXRpb246IHN0cmluZztcbiAgcGFnaW5hdGlvbk5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBzb3J0Tm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIGNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uOiBzdHJpbmc7XG5cbiAgX2Rpc3BsYXlQYXJhbXMgPSA8RGF0YVRhYmxlUGFyYW1zPnt9OyAvLyBwYXJhbXMgb2YgdGhlIGxhc3QgZmluaXNoZWQgcmVsb2FkXG5cbiAgc3ViamVjdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHN1YmplY3QkOiBTdWJzY3JpcHRpb247XG5cbiAgbm90aWZpZXIgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBub3RpZmllciQ6IFN1YnNjcmlwdGlvbjtcblxuICAvLyBzZWxlY3Rpb246XG4gIHNlbGVjdGVkUm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQ7XG4gIHNlbGVjdGVkUm93czogRGF0YVRhYmxlUm93Q29tcG9uZW50W10gPSBbXTtcblxuICBNYXRoOiBhbnk7XG4gIGlkID0gYGRhdGF0YWJsZS0ke25leHRJZCsrfWA7XG5cbiAgLy8gc2VsZWN0IGFsbCBjaGVja2JveCBmbGFnXG4gIHByaXZhdGUgX3NlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7XG5cbiAgLy8gY29sdW1uIHJlc2l6aW5nOlxuICBwcml2YXRlIF9yZXNpemVJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgcmVzaXplTGltaXQgPSAzMDtcblxuICAvLyBSZWxvYWRpbmc6XG4gIF9yZWxvYWRpbmcgPSBmYWxzZTtcblxuICBnZXQgcmVsb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWxvYWRpbmc7XG4gIH1cblxuICBzZXQgcmVsb2FkaW5nKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbG9hZGluZyA9IHZhbDtcbiAgICB0aGlzLm5vdGlmaWVyLm5leHQoKTtcbiAgfVxuXG4gIC8vIFVJIHN0YXRlOiB2aXNpYmxlIGdldC9zZXQgZm9yIHRoZSBvdXRzaWRlIHdpdGggQElucHV0IGZvciBvbmUtdGltZSBpbml0aWFsIHZhbHVlc1xuICBwcml2YXRlIF9zb3J0Qnk6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgc29ydEJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIHNldCBzb3J0QnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvcnRCeSA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9zb3J0QXNjID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgc29ydEFzYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEFzYztcbiAgfVxuXG4gIHNldCBzb3J0QXNjKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc29ydEFzYyA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXQgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBvZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICB9XG5cbiAgc2V0IG9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpbWl0ID0gMTA7XG5cbiAgQElucHV0KClcbiAgZ2V0IGxpbWl0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0O1xuICB9XG5cbiAgc2V0IGxpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9saW1pdCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVkIHByb3BlcnR5OlxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtQ291bnQgIT09IDAgPyBNYXRoLmZsb29yKHRoaXMub2Zmc2V0IC8gdGhpcy5saW1pdCkgKyAxIDogMDtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlKSB7XG4gICAgdGhpcy5vZmZzZXQgPSAodmFsdWUgLSAxKSAqIHRoaXMubGltaXQ7XG4gIH1cblxuICBnZXQgbGFzdFBhZ2UoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLml0ZW1Db3VudCAvIHRoaXMubGltaXQpO1xuICB9XG5cbiAgLy8gc2V0dGluZyBtdWx0aXBsZSBvYnNlcnZhYmxlIHByb3BlcnRpZXMgc2ltdWx0YW5lb3VzbHlcbiAgc29ydChzb3J0Qnk6IHN0cmluZywgYXNjOiBib29sZWFuKSB7XG4gICAgdGhpcy5zb3J0QnkgPSBzb3J0Qnk7XG4gICAgdGhpcy5zb3J0QXNjID0gYXNjO1xuICB9XG5cbiAgLy8gaW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pbml0RGVmYXVsdFZhbHVlcygpO1xuICAgIHRoaXMuX2luaXREZWZhdWx0Q2xpY2tFdmVudHMoKTtcbiAgICB0aGlzLl91cGRhdGVEaXNwbGF5UGFyYW1zKCk7XG5cbiAgICBpZiAodGhpcy5wYWdlTGltaXRzLmluZGV4T2YodGhpcy5saW1pdCkgPCAwKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gdGhpcy5wYWdlTGltaXRzWzBdO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxzID0gey4uLmRlZmF1bHRUcmFuc2xhdGlvbnMsIC4uLnRoaXMubGFiZWxzfTtcblxuICAgIGlmICh0aGlzLmF1dG9SZWxvYWQpIHtcbiAgICAgIHRoaXMucmVsb2FkSXRlbXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmaWVyJCA9IHRoaXMubm90aWZpZXIuc3Vic2NyaWJlKCgpID0+IHRoaXMuX25vdGlmeSgpKTtcbiAgICB0aGlzLnN1YmplY3QkID0gdGhpcy5zdWJqZWN0LnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbG9hZEl0ZW1zKCkpO1xuXG4gIH1cblxuICBwcml2YXRlIF9pbml0RGVmYXVsdFZhbHVlcygpIHtcbiAgICB0aGlzLmluZGV4Q29sdW1uVmlzaWJsZSA9IHRoaXMuaW5kZXhDb2x1bW47XG4gICAgdGhpcy5zZWxlY3RDb2x1bW5WaXNpYmxlID0gdGhpcy5zZWxlY3RDb2x1bW47XG4gICAgdGhpcy5leHBhbmRDb2x1bW5WaXNpYmxlID0gdGhpcy5leHBhbmRhYmxlUm93cztcbiAgfVxuXG4gIHByaXZhdGUgX2luaXREZWZhdWx0Q2xpY2tFdmVudHMoKSB7XG4gICAgdGhpcy5oZWFkZXJDbGljay5zdWJzY3JpYmUoXG4gICAgICAodGFibGVFdmVudDogeyBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgZXZlbnQ6IEV2ZW50IH0pID0+IHRoaXMuc29ydENvbHVtbih0YWJsZUV2ZW50LmNvbHVtbikpO1xuICAgIGlmICh0aGlzLnNlbGVjdE9uUm93Q2xpY2spIHtcbiAgICAgIHRoaXMucm93Q2xpY2suc3Vic2NyaWJlKFxuICAgICAgICAodGFibGVFdmVudDogeyByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50IH0pID0+IHRhYmxlRXZlbnQucm93LnNlbGVjdGVkID0gIXRhYmxlRXZlbnQucm93LnNlbGVjdGVkKTtcbiAgICB9XG4gIH1cblxuICByZWxvYWRJdGVtcygpIHtcbiAgICB0aGlzLnJlbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5yZWxvYWQuZW1pdCh0aGlzLl9nZXRSZW1vdGVQYXJhbWV0ZXJzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25SZWxvYWRGaW5pc2hlZCgpIHtcbiAgICBpZiAodGhpcy5yZWxvYWRpbmcpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlQYXJhbXMoKTtcbiAgICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBnZXQgZGlzcGxheVBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVBhcmFtcztcbiAgfVxuXG4gIF91cGRhdGVEaXNwbGF5UGFyYW1zKCkge1xuICAgIHRoaXMuX2Rpc3BsYXlQYXJhbXMgPSB7XG4gICAgICBzb3J0Qnk6IHRoaXMuc29ydEJ5LFxuICAgICAgc29ydEFzYzogdGhpcy5zb3J0QXNjLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHJvd0NsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93Q2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIHJvd0RvdWJsZUNsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93RG91YmxlQ2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIGhlYWRlckNsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCkge1xuICAgIGlmICghdGhpcy5fcmVzaXplSW5Qcm9ncmVzcykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5oZWFkZXJDbGljay5lbWl0KHtjb2x1bW4sIGV2ZW50fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTsgLy8gdGhpcyBpcyBiZWNhdXNlIEkgY2FuJ3QgcHJldmVudCBjbGljayBmcm9tIG1vdXN1cCBvZiB0aGUgZHJhZyBlbmRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmNlbGxDbGljay5lbWl0KHtyb3csIGNvbHVtbiwgZXZlbnR9KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uczpcbiAgcHJpdmF0ZSBfZ2V0UmVtb3RlUGFyYW1ldGVycygpOiBEYXRhVGFibGVQYXJhbXMge1xuICAgIGNvbnN0IHBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307XG5cbiAgICBpZiAodGhpcy5zb3J0QnkpIHtcbiAgICAgIHBhcmFtcy5zb3J0QnkgPSB0aGlzLnNvcnRCeTtcbiAgICAgIHBhcmFtcy5zb3J0QXNjID0gdGhpcy5zb3J0QXNjO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBwYXJhbXMub2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICBwYXJhbXMubGltaXQgPSB0aGlzLmxpbWl0O1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29sdW1uKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSB7XG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSkge1xuICAgICAgY29uc3QgYXNjZW5kaW5nID0gdGhpcy5zb3J0QnkgPT09IGNvbHVtbi5wcm9wZXJ0eSA/ICF0aGlzLnNvcnRBc2MgOiB0cnVlO1xuICAgICAgdGhpcy5zb3J0KGNvbHVtbi5wcm9wZXJ0eSwgYXNjZW5kaW5nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29sdW1uQ291bnQoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb3VudCArPSB0aGlzLmluZGV4Q29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIGNvdW50ICs9IHRoaXMuc2VsZWN0Q29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIGNvdW50ICs9IHRoaXMuZXhwYW5kQ29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIHRoaXMuY29sdW1ucy50b0FycmF5KCkuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgY291bnQgKz0gY29sdW1uLnZpc2libGUgPyAxIDogMDtcbiAgICB9KTtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Um93Q29sb3IoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuICAgIGlmICh0aGlzLnJvd0NvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKDxSb3dDYWxsYmFjaz50aGlzLnJvd0NvbG9ycykoaXRlbSwgcm93LCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdEFsbENoZWNrYm94KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RBbGxDaGVja2JveDtcbiAgfVxuXG4gIHNldCBzZWxlY3RBbGxDaGVja2JveCh2YWx1ZSkge1xuICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94ID0gdmFsdWU7XG4gICAgdGhpcy5fb25TZWxlY3RBbGxDaGFuZ2VkKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMucm93cy50b0FycmF5KCkuZm9yRWFjaChyb3cgPT4gcm93LnNlbGVjdGVkID0gdmFsdWUpO1xuICB9XG5cbiAgb25Sb3dTZWxlY3RDaGFuZ2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50KSB7XG5cbiAgICAvLyBtYWludGFpbiB0aGUgc2VsZWN0ZWRSb3cocykgdmlld1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KTtcbiAgICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgaW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICAgIH0gZWxzZSBpZiAoIXJvdy5zZWxlY3RlZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyb3cuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZFJvdyA9PT0gcm93KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkUm93O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVuc2VsZWN0IGFsbCBvdGhlciByb3dzOlxuICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgIXRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMucm93cy50b0FycmF5KCkuZmlsdGVyKHJvd18gPT4gcm93Xy5zZWxlY3RlZCkuZm9yRWFjaChyb3dfID0+IHtcbiAgICAgICAgaWYgKHJvd18gIT09IHJvdykgeyAvLyBhdm9pZCBlbmRsZXNzIGxvb3BcbiAgICAgICAgICByb3dfLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIG90aGVyOlxuXG4gIGdldCBzdWJzdGl0dXRlSXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogdGhpcy5kaXNwbGF5UGFyYW1zLmxpbWl0IC0gdGhpcy5pdGVtcy5sZW5ndGh9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydChldmVudDogTW91c2VFdmVudCwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fcmVzaXplSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0T2Zmc2V0ID0gY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCAtIGV2ZW50LnBhZ2VYO1xuICAgIGRyYWcoZXZlbnQsIHtcbiAgICAgIG1vdmU6IChtb3ZlRXZlbnQ6IE1vdXNlRXZlbnQsIGR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50LCBkeCkpIHtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBzdGFydE9mZnNldCArIG1vdmVFdmVudC5wYWdlWCArIGR4O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNSZXNpemVJbkxpbWl0KGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkeDogbnVtYmVyKSB7XG4gICAgLyogVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBDU1MgbWluLXdpZHRoIGRpZG4ndCB3b3JrIG9uIHRhYmxlLWxheW91dDogZml4ZWQuXG4gICAgICAgICBXaXRob3V0IHRoZSBsaW1pdHMsIHJlc2l6aW5nIGNhbiBtYWtlIHRoZSBuZXh0IGNvbHVtbiBkaXNhcHBlYXIgY29tcGxldGVseSxcbiAgICAgICAgIGFuZCBldmVuIGluY3JlYXNlIHRoZSB0YWJsZSB3aWR0aC4gVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gc3VmZmVycyBmcm9tIHRoZSBmYWN0LFxuICAgICAgICAgdGhhdCBvZmZzZXRXaWR0aCBzb21ldGltZXMgY29udGFpbnMgb3V0LW9mLWRhdGUgdmFsdWVzLiAqL1xuICAgIGlmICgoZHggPCAwICYmIChjb2x1bW5FbGVtZW50Lm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpIHx8XG4gICAgICAhY29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgLy8gcmVzaXppbmcgZG9lc24ndCBtYWtlIHNlbnNlIGZvciB0aGUgbGFzdCB2aXNpYmxlIGNvbHVtblxuICAgICAgKGR4ID49IDAgJiYgKCg8SFRNTEVsZW1lbnQ+IGNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmltYXJ5Q29sdW1uID09PSAnJykge1xuICAgICAgdGhpcy5wcmltYXJ5Q29sdW1uID0gKHRoaXMuY29sdW1ucy5maXJzdCBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpLnByb3BlcnR5O1xuICAgIH1cbiAgfVxuXG4gIF9ub3RpZnkoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMucmVsb2FkaW5nO1xuXG4gICAgdGhpcy5yZWxvYWROb3RpZmljYXRpb24gPSBsb2FkaW5nID9cbiAgICAgIHRoaXMubGFiZWxzLmxvYWRpbmdUZXh0LnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKSA6XG4gICAgICB0aGlzLmxhYmVscy5sb2FkZWRUZXh0LnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKTtcblxuICAgIGlmICghbG9hZGluZykge1xuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25Ob3RpZmljYXRpb24gPSB0aGlzLmxhYmVscy5wYWdpbmF0aW9uVGV4dFxuICAgICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCAnJyArIChNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KSAhPT0gMCA/IHRoaXMub2Zmc2V0ICsgMSA6ICcwJykpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCAnJyArIChNYXRoLm1pbih0aGlzLm9mZnNldCArIHRoaXMubGltaXQsIHRoaXMuaXRlbUNvdW50KSkpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCAnJyArIHRoaXMuaXRlbUNvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc29ydEJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5maW5kKGNvbHVtbiA9PiBjb2x1bW4ucHJvcGVydHkgPT09IHRoaXMuc29ydEJ5KSBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICh0aGlzLnNvcnRBc2MgPyB0aGlzLmxhYmVscy5zb3J0ZWRBc2NlbmRpbmcgOiB0aGlzLmxhYmVscy5zb3J0ZWREZXNjZW5kaW5nKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSlcbiAgICAgICAgICAucmVwbGFjZSgne2hlYWRlcn0nLCBjb2wuaGVhZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViamVjdCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmaWVyJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=