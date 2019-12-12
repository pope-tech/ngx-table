/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.visibleColumnsChange = new EventEmitter();
        this._displayParams = (/** @type {?} */ ({})); // params of the last finished reload
        // params of the last finished reload
        this.subject = new Subject();
        this.notifier = new Subject();
        this.selectedRows = [];
        this.id = "datatable-" + nextId++;
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
        get: 
        // calculated property:
        /**
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
    // setting multiple observable properties simultaneously
    /**
     * @param {?} sortBy
     * @param {?} asc
     * @return {?}
     */
    DataTableComponent.prototype.sort = 
    // setting multiple observable properties simultaneously
    /**
     * @param {?} sortBy
     * @param {?} asc
     * @return {?}
     */
    function (sortBy, asc) {
        this.sortBy = sortBy;
        this.sortAsc = asc;
    };
    // init
    // init
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnInit = 
    // init
    /**
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
        this.notifier$ = this.notifier.subscribe((/**
         * @return {?}
         */
        function () { return _this._notify(); }));
        this.subject$ = this.subject.pipe(debounceTime(100)).subscribe((/**
         * @return {?}
         */
        function () { return _this.reloadItems(); }));
    };
    /**
     * @private
     * @return {?}
     */
    DataTableComponent.prototype._initDefaultValues = /**
     * @private
     * @return {?}
     */
    function () {
        this.indexColumnVisible = this.indexColumn;
        this.selectColumnVisible = this.selectColumn;
        this.expandColumnVisible = this.expandableRows;
    };
    /**
     * @private
     * @return {?}
     */
    DataTableComponent.prototype._initDefaultClickEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.headerClick.subscribe((/**
         * @param {?} tableEvent
         * @return {?}
         */
        function (tableEvent) { return _this.sortColumn(tableEvent.column); }));
        if (this.selectOnRowClick) {
            this.rowClick.subscribe((/**
             * @param {?} tableEvent
             * @return {?}
             */
            function (tableEvent) { return tableEvent.row.selected = !tableEvent.row.selected; }));
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
     * @private
     * @return {?}
     */
    DataTableComponent.prototype._onReloadFinished = /**
     * @private
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
     * @private
     * @param {?} column
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    DataTableComponent.prototype.cellClicked = /**
     * @private
     * @param {?} column
     * @param {?} row
     * @param {?} event
     * @return {?}
     */
    function (column, row, event) {
        this.cellClick.emit({ row: row, column: column, event: event });
    };
    // functions:
    // functions:
    /**
     * @private
     * @return {?}
     */
    DataTableComponent.prototype._getRemoteParameters = 
    // functions:
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var params = (/** @type {?} */ ({}));
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
     * @private
     * @param {?} column
     * @return {?}
     */
    DataTableComponent.prototype.sortColumn = /**
     * @private
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (column.sortable) {
            /** @type {?} */
            var ascending = this.sortBy === column.property ? !this.sortAsc : true;
            if (column.property === this.sortBy && !this.sortAsc) {
                this.sort(undefined, true);
                return;
            }
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
            this.columns.toArray().forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                count += column.visible ? 1 : 0;
            }));
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
            return ((/** @type {?} */ (this.rowColors)))(item, row, index);
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
     * @private
     * @param {?} value
     * @return {?}
     */
    DataTableComponent.prototype._onSelectAllChanged = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.rows.toArray().forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) { return row.selected = value; }));
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
            this.rows.toArray().filter((/**
             * @param {?} row_
             * @return {?}
             */
            function (row_) { return row_.selected; })).forEach((/**
             * @param {?} row_
             * @return {?}
             */
            function (row_) {
                if (row_ !== row) { // avoid endless loop
                    row_.selected = false;
                }
            }));
        }
        this.selectedRowsChange.emit(this.selectedRows);
    };
    Object.defineProperty(DataTableComponent.prototype, "substituteItems", {
        // other:
        get: 
        // other:
        /**
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
            move: (/**
             * @param {?} moveEvent
             * @param {?} dx
             * @return {?}
             */
            function (moveEvent, dx) {
                if (_this._isResizeInLimit(columnElement, dx)) {
                    column.width = startOffset + moveEvent.pageX + dx;
                }
            }),
        });
    };
    /**
     * @private
     * @param {?} columnElement
     * @param {?} dx
     * @return {?}
     */
    DataTableComponent.prototype._isResizeInLimit = /**
     * @private
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
            (dx >= 0 && (((/** @type {?} */ (columnElement.nextElementSibling))).offsetWidth + dx) <= this.resizeLimit)) {
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
            this.primaryColumn = ((/** @type {?} */ (this.columns.first))).property;
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
                var col = (/** @type {?} */ (this.columns.toArray().find((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) { return column.property === _this.sortBy; }))));
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
                    styles: [":host /deep/ .data-table.table>tbody+tbody{border-top:none}:host /deep/ .data-table.table td{vertical-align:middle}:host /deep/ .data-table>tbody>tr>td,:host /deep/ .data-table>thead>tr>th{overflow:hidden}:host /deep/ .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host /deep/ .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host /deep/ .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy>i{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]
                }] }
    ];
    /** @nocollapse */
    DataTableComponent.ctorParameters = function () { return []; };
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
    return DataTableComponent;
}());
export { DataTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsWUFBWSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7O0lBRS9DLE1BQU0sR0FBRyxDQUFDO0FBRWQ7SUF3UEU7UUFqUFEsV0FBTSxHQUFVLEVBQUUsQ0FBQzs7UUFrQ2xCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUd2QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7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eUI7O0lBQ3pCLHdEQUFtQzs7SUFFbkMsNENBQXFDOztJQUVyQyxxQ0FBOEI7O0lBQzlCLHNDQUF1Qjs7SUFFdkIsc0NBQStCOztJQUMvQix1Q0FBd0I7O0lBR3hCLHlDQUFtQzs7SUFDbkMsMENBQTJDOztJQUUzQyxrQ0FBVTs7SUFDVixnQ0FBNkI7Ozs7O0lBRzdCLGdEQUFtQzs7Ozs7SUFHbkMsK0NBQWtDOztJQUVsQyx5Q0FBaUI7O0lBR2pCLHdDQUFtQjs7Ozs7SUFZbkIscUNBQXdCOzs7OztJQVl4QixzQ0FBd0I7Ozs7O0lBWXhCLHFDQUFvQjs7Ozs7SUFZcEIsb0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuLi9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYXJhbXMgfSBmcm9tICcuLi8uLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcbmltcG9ydCB7IFJvd0NhbGxiYWNrIH0gZnJvbSAnLi4vLi4vdHlwZXMvcm93LWNhbGxiYWNrLnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkZWZhdWx0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGVmYXVsdC10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkcmFnIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHJhZyc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgRGF0YVRhYmxlUGFyYW1zLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX2l0ZW1Db3VudDtcblxuICBASW5wdXQoKSB3cmFwcGVyQ2xhc3M7XG5cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBzZXQgaXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICAvLyBubyBuZWVkIHRvIGNhbGwgbm90aWZpZXIubmV4dCgpIGJlY2F1c2UgX29uUmVsb2FkRmluaXNoZWQoKVxuICAgIC8vIHdpbGwgY2hhbmdlIHJlbG9hZGVkIHZhbHVlIGNhdXNpbmcgbm90aWZpZXIubmV4dCgpIHRvIGJlIGNhbGxlZCBpbXBsaWNpdGx5LlxuICAgIHRoaXMuX29uUmVsb2FkRmluaXNoZWQoKTtcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1Db3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pdGVtQ291bnQ7XG4gIH1cblxuICBzZXQgaXRlbUNvdW50KGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9pdGVtQ291bnQgPSBjb3VudDtcbiAgICB0aGlzLm5vdGlmaWVyLm5leHQoKTtcbiAgfVxuXG4gIC8vIFVJIGNvbXBvbmVudHM6XG4gIEBDb250ZW50Q2hpbGRyZW4oRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSBjb2x1bW5zOiBRdWVyeUxpc3Q8RGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlPjtcbiAgQFZpZXdDaGlsZHJlbihEYXRhVGFibGVSb3dDb21wb25lbnQpIHJvd3M6IFF1ZXJ5TGlzdDxEYXRhVGFibGVSb3dDb21wb25lbnQ+O1xuICBAQ29udGVudENoaWxkKCdkYXRhVGFibGVFeHBhbmQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHBhbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvLyBPbmUtdGltZSBvcHRpb25hbCBiaW5kaW5ncyB3aXRoIGRlZmF1bHQgdmFsdWVzOlxuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzaG93VGl0bGUgPSB0cnVlO1xuICBASW5wdXQoKSBoZWFkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5kZXhDb2x1bW4gPSB0cnVlO1xuICBASW5wdXQoKSBpbmRleENvbHVtbkhlYWRlciA9ICcnO1xuICBASW5wdXQoKSByb3dDb2xvcnM6IFJvd0NhbGxiYWNrO1xuICBASW5wdXQoKSByb3dUb29sdGlwOiBSb3dDYWxsYmFjaztcbiAgQElucHV0KCkgc2VsZWN0Q29sdW1uID0gZmFsc2U7XG4gIEBJbnB1dCgpIG11bHRpU2VsZWN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgc3Vic3RpdHV0ZVJvd3MgPSB0cnVlO1xuICBASW5wdXQoKSBleHBhbmRhYmxlUm93cyA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbHM6IERhdGFUYWJsZVRyYW5zbGF0aW9ucztcbiAgQElucHV0KCkgc2VsZWN0T25Sb3dDbGljayA9IGZhbHNlO1xuICBASW5wdXQoKSBhdXRvUmVsb2FkID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1JlbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBub0RhdGFNZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VMaW1pdHM6IG51bWJlcltdID0gWzEwLCAyNSwgNTAsIDEwMCwgMjUwXTtcbiAgQElucHV0KCkgcHJpbWFyeUNvbHVtbiA9ICcnO1xuXG4gIC8vIHJlbG9hZCBlbWl0dGVyXG4gIEBPdXRwdXQoKSByZWxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gZXZlbnQgaGFuZGxlcnM6XG4gIEBPdXRwdXQoKSByb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJvd0RvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGVhZGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjZWxsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFJvd3NDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB2aXNpYmxlQ29sdW1uc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gVUkgc3RhdGUgd2l0aG91dCBpbnB1dDpcbiAgaW5kZXhDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuICBzZWxlY3RDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuICBleHBhbmRDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuXG4gIC8vIGFkYSBub3RpZmljYXRpb25zLlxuICByZWxvYWROb3RpZmljYXRpb246IHN0cmluZztcbiAgcGFnaW5hdGlvbk5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBzb3J0Tm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIGNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uOiBzdHJpbmc7XG5cbiAgX2Rpc3BsYXlQYXJhbXMgPSA8RGF0YVRhYmxlUGFyYW1zPnt9OyAvLyBwYXJhbXMgb2YgdGhlIGxhc3QgZmluaXNoZWQgcmVsb2FkXG5cbiAgc3ViamVjdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHN1YmplY3QkOiBTdWJzY3JpcHRpb247XG5cbiAgbm90aWZpZXIgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBub3RpZmllciQ6IFN1YnNjcmlwdGlvbjtcblxuICAvLyBzZWxlY3Rpb246XG4gIHNlbGVjdGVkUm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQ7XG4gIHNlbGVjdGVkUm93czogRGF0YVRhYmxlUm93Q29tcG9uZW50W10gPSBbXTtcblxuICBNYXRoOiBhbnk7XG4gIGlkID0gYGRhdGF0YWJsZS0ke25leHRJZCsrfWA7XG5cbiAgLy8gc2VsZWN0IGFsbCBjaGVja2JveCBmbGFnXG4gIHByaXZhdGUgX3NlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7XG5cbiAgLy8gY29sdW1uIHJlc2l6aW5nOlxuICBwcml2YXRlIF9yZXNpemVJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgcmVzaXplTGltaXQgPSAzMDtcblxuICAvLyBSZWxvYWRpbmc6XG4gIF9yZWxvYWRpbmcgPSBmYWxzZTtcblxuICBnZXQgcmVsb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWxvYWRpbmc7XG4gIH1cblxuICBzZXQgcmVsb2FkaW5nKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbG9hZGluZyA9IHZhbDtcbiAgICB0aGlzLm5vdGlmaWVyLm5leHQoKTtcbiAgfVxuXG4gIC8vIFVJIHN0YXRlOiB2aXNpYmxlIGdldC9zZXQgZm9yIHRoZSBvdXRzaWRlIHdpdGggQElucHV0IGZvciBvbmUtdGltZSBpbml0aWFsIHZhbHVlc1xuICBwcml2YXRlIF9zb3J0Qnk6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgc29ydEJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIHNldCBzb3J0QnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvcnRCeSA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9zb3J0QXNjID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgc29ydEFzYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEFzYztcbiAgfVxuXG4gIHNldCBzb3J0QXNjKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc29ydEFzYyA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXQgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBvZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICB9XG5cbiAgc2V0IG9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpbWl0ID0gMTA7XG5cbiAgQElucHV0KClcbiAgZ2V0IGxpbWl0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0O1xuICB9XG5cbiAgc2V0IGxpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9saW1pdCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVkIHByb3BlcnR5OlxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtQ291bnQgIT09IDAgPyBNYXRoLmZsb29yKHRoaXMub2Zmc2V0IC8gdGhpcy5saW1pdCkgKyAxIDogMDtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlKSB7XG4gICAgdGhpcy5vZmZzZXQgPSAodmFsdWUgLSAxKSAqIHRoaXMubGltaXQ7XG4gIH1cblxuICBnZXQgbGFzdFBhZ2UoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLml0ZW1Db3VudCAvIHRoaXMubGltaXQpO1xuICB9XG5cbiAgLy8gc2V0dGluZyBtdWx0aXBsZSBvYnNlcnZhYmxlIHByb3BlcnRpZXMgc2ltdWx0YW5lb3VzbHlcbiAgc29ydChzb3J0Qnk6IHN0cmluZywgYXNjOiBib29sZWFuKSB7XG4gICAgdGhpcy5zb3J0QnkgPSBzb3J0Qnk7XG4gICAgdGhpcy5zb3J0QXNjID0gYXNjO1xuICB9XG5cbiAgLy8gaW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pbml0RGVmYXVsdFZhbHVlcygpO1xuICAgIHRoaXMuX2luaXREZWZhdWx0Q2xpY2tFdmVudHMoKTtcbiAgICB0aGlzLl91cGRhdGVEaXNwbGF5UGFyYW1zKCk7XG5cbiAgICBpZiAodGhpcy5wYWdlTGltaXRzLmluZGV4T2YodGhpcy5saW1pdCkgPCAwKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gdGhpcy5wYWdlTGltaXRzWzBdO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxzID0gey4uLmRlZmF1bHRUcmFuc2xhdGlvbnMsIC4uLnRoaXMubGFiZWxzfTtcblxuICAgIGlmICh0aGlzLmF1dG9SZWxvYWQpIHtcbiAgICAgIHRoaXMucmVsb2FkSXRlbXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmaWVyJCA9IHRoaXMubm90aWZpZXIuc3Vic2NyaWJlKCgpID0+IHRoaXMuX25vdGlmeSgpKTtcbiAgICB0aGlzLnN1YmplY3QkID0gdGhpcy5zdWJqZWN0LnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbG9hZEl0ZW1zKCkpO1xuXG4gIH1cblxuICBwcml2YXRlIF9pbml0RGVmYXVsdFZhbHVlcygpIHtcbiAgICB0aGlzLmluZGV4Q29sdW1uVmlzaWJsZSA9IHRoaXMuaW5kZXhDb2x1bW47XG4gICAgdGhpcy5zZWxlY3RDb2x1bW5WaXNpYmxlID0gdGhpcy5zZWxlY3RDb2x1bW47XG4gICAgdGhpcy5leHBhbmRDb2x1bW5WaXNpYmxlID0gdGhpcy5leHBhbmRhYmxlUm93cztcbiAgfVxuXG4gIHByaXZhdGUgX2luaXREZWZhdWx0Q2xpY2tFdmVudHMoKSB7XG4gICAgdGhpcy5oZWFkZXJDbGljay5zdWJzY3JpYmUoXG4gICAgICAodGFibGVFdmVudDogeyBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgZXZlbnQ6IEV2ZW50IH0pID0+IHRoaXMuc29ydENvbHVtbih0YWJsZUV2ZW50LmNvbHVtbikpO1xuICAgIGlmICh0aGlzLnNlbGVjdE9uUm93Q2xpY2spIHtcbiAgICAgIHRoaXMucm93Q2xpY2suc3Vic2NyaWJlKFxuICAgICAgICAodGFibGVFdmVudDogeyByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50IH0pID0+IHRhYmxlRXZlbnQucm93LnNlbGVjdGVkID0gIXRhYmxlRXZlbnQucm93LnNlbGVjdGVkKTtcbiAgICB9XG4gIH1cblxuICByZWxvYWRJdGVtcygpIHtcbiAgICB0aGlzLnJlbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5yZWxvYWQuZW1pdCh0aGlzLl9nZXRSZW1vdGVQYXJhbWV0ZXJzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25SZWxvYWRGaW5pc2hlZCgpIHtcbiAgICBpZiAodGhpcy5yZWxvYWRpbmcpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlQYXJhbXMoKTtcbiAgICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkaXNwbGF5UGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5UGFyYW1zO1xuICB9XG5cbiAgX3VwZGF0ZURpc3BsYXlQYXJhbXMoKSB7XG4gICAgdGhpcy5fZGlzcGxheVBhcmFtcyA9IHtcbiAgICAgIHNvcnRCeTogdGhpcy5zb3J0QnksXG4gICAgICBzb3J0QXNjOiB0aGlzLnNvcnRBc2MsXG4gICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgbGltaXQ6IHRoaXMubGltaXRcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwdWJsaWMgcm93Q2xpY2tlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5yb3dDbGljay5lbWl0KHtyb3csIGV2ZW50fSk7XG4gIH1cblxuICBwdWJsaWMgcm93RG91YmxlQ2xpY2tlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5yb3dEb3VibGVDbGljay5lbWl0KHtyb3csIGV2ZW50fSk7XG4gIH1cblxuICBwdWJsaWMgaGVhZGVyQ2xpY2tlZChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9yZXNpemVJblByb2dyZXNzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmhlYWRlckNsaWNrLmVtaXQoe2NvbHVtbiwgZXZlbnR9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVzaXplSW5Qcm9ncmVzcyA9IGZhbHNlOyAvLyB0aGlzIGlzIGJlY2F1c2UgSSBjYW4ndCBwcmV2ZW50IGNsaWNrIGZyb20gbW91c3VwIG9mIHRoZSBkcmFnIGVuZFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2VsbENsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuY2VsbENsaWNrLmVtaXQoe3JvdywgY29sdW1uLCBldmVudH0pO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25zOlxuICBwcml2YXRlIF9nZXRSZW1vdGVQYXJhbWV0ZXJzKCk6IERhdGFUYWJsZVBhcmFtcyB7XG4gICAgY29uc3QgcGFyYW1zID0gPERhdGFUYWJsZVBhcmFtcz57fTtcblxuICAgIGlmICh0aGlzLnNvcnRCeSkge1xuICAgICAgcGFyYW1zLnNvcnRCeSA9IHRoaXMuc29ydEJ5O1xuICAgICAgcGFyYW1zLnNvcnRBc2MgPSB0aGlzLnNvcnRBc2M7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIHBhcmFtcy5vZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgIHBhcmFtcy5saW1pdCA9IHRoaXMubGltaXQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb2x1bW4oY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpIHtcbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlKSB7XG5cbiAgICAgIGNvbnN0IGFzY2VuZGluZyA9IHRoaXMuc29ydEJ5ID09PSBjb2x1bW4ucHJvcGVydHkgPyAhdGhpcy5zb3J0QXNjIDogdHJ1ZTtcblxuICAgICAgaWYoY29sdW1uLnByb3BlcnR5ID09PSB0aGlzLnNvcnRCeSAmJiAgISB0aGlzLnNvcnRBc2MpIHtcbiAgICAgICAgdGhpcy5zb3J0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zb3J0KGNvbHVtbi5wcm9wZXJ0eSwgYXNjZW5kaW5nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29sdW1uQ291bnQoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb3VudCArPSB0aGlzLmluZGV4Q29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIGNvdW50ICs9IHRoaXMuc2VsZWN0Q29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIGNvdW50ICs9IHRoaXMuZXhwYW5kQ29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIHRoaXMuY29sdW1ucy50b0FycmF5KCkuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgY291bnQgKz0gY29sdW1uLnZpc2libGUgPyAxIDogMDtcbiAgICB9KTtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Um93Q29sb3IoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuICAgIGlmICh0aGlzLnJvd0NvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKDxSb3dDYWxsYmFjaz50aGlzLnJvd0NvbG9ycykoaXRlbSwgcm93LCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdEFsbENoZWNrYm94KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RBbGxDaGVja2JveDtcbiAgfVxuXG4gIHNldCBzZWxlY3RBbGxDaGVja2JveCh2YWx1ZSkge1xuICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94ID0gdmFsdWU7XG4gICAgdGhpcy5fb25TZWxlY3RBbGxDaGFuZ2VkKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMucm93cy50b0FycmF5KCkuZm9yRWFjaChyb3cgPT4gcm93LnNlbGVjdGVkID0gdmFsdWUpO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgb25Sb3dTZWxlY3RDaGFuZ2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50KSB7XG5cbiAgICAvLyBtYWludGFpbiB0aGUgc2VsZWN0ZWRSb3cocykgdmlld1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KTtcbiAgICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgaW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICAgIH0gZWxzZSBpZiAoIXJvdy5zZWxlY3RlZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyb3cuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZFJvdyA9PT0gcm93KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkUm93O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVuc2VsZWN0IGFsbCBvdGhlciByb3dzOlxuICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgIXRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMucm93cy50b0FycmF5KCkuZmlsdGVyKHJvd18gPT4gcm93Xy5zZWxlY3RlZCkuZm9yRWFjaChyb3dfID0+IHtcbiAgICAgICAgaWYgKHJvd18gIT09IHJvdykgeyAvLyBhdm9pZCBlbmRsZXNzIGxvb3BcbiAgICAgICAgICByb3dfLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgLy8gb3RoZXI6XG5cbiAgZ2V0IHN1YnN0aXR1dGVJdGVtcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB0aGlzLmRpc3BsYXlQYXJhbXMubGltaXQgLSB0aGlzLml0ZW1zLmxlbmd0aH0pO1xuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtblN0YXJ0KGV2ZW50OiBNb3VzZUV2ZW50LCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgY29sdW1uRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9yZXNpemVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRPZmZzZXQgPSBjb2x1bW5FbGVtZW50Lm9mZnNldFdpZHRoIC0gZXZlbnQucGFnZVg7XG4gICAgZHJhZyhldmVudCwge1xuICAgICAgbW92ZTogKG1vdmVFdmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNSZXNpemVJbkxpbWl0KGNvbHVtbkVsZW1lbnQsIGR4KSkge1xuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IHN0YXJ0T2Zmc2V0ICsgbW92ZUV2ZW50LnBhZ2VYICsgZHg7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1Jlc2l6ZUluTGltaXQoY29sdW1uRWxlbWVudDogSFRNTEVsZW1lbnQsIGR4OiBudW1iZXIpIHtcbiAgICAvKiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIENTUyBtaW4td2lkdGggZGlkbid0IHdvcmsgb24gdGFibGUtbGF5b3V0OiBmaXhlZC5cbiAgICAgICAgIFdpdGhvdXQgdGhlIGxpbWl0cywgcmVzaXppbmcgY2FuIG1ha2UgdGhlIG5leHQgY29sdW1uIGRpc2FwcGVhciBjb21wbGV0ZWx5LFxuICAgICAgICAgYW5kIGV2ZW4gaW5jcmVhc2UgdGhlIHRhYmxlIHdpZHRoLiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBzdWZmZXJzIGZyb20gdGhlIGZhY3QsXG4gICAgICAgICB0aGF0IG9mZnNldFdpZHRoIHNvbWV0aW1lcyBjb250YWlucyBvdXQtb2YtZGF0ZSB2YWx1ZXMuICovXG4gICAgaWYgKChkeCA8IDAgJiYgKGNvbHVtbkVsZW1lbnQub2Zmc2V0V2lkdGggKyBkeCkgPD0gdGhpcy5yZXNpemVMaW1pdCkgfHxcbiAgICAgICFjb2x1bW5FbGVtZW50Lm5leHRFbGVtZW50U2libGluZyB8fCAvLyByZXNpemluZyBkb2Vzbid0IG1ha2Ugc2Vuc2UgZm9yIHRoZSBsYXN0IHZpc2libGUgY29sdW1uXG4gICAgICAoZHggPj0gMCAmJiAoKDxIVE1MRWxlbWVudD5jb2x1bW5FbGVtZW50Lm5leHRFbGVtZW50U2libGluZykub2Zmc2V0V2lkdGggKyBkeCkgPD0gdGhpcy5yZXNpemVMaW1pdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJpbWFyeUNvbHVtbiA9PT0gJycpIHtcbiAgICAgIHRoaXMucHJpbWFyeUNvbHVtbiA9ICh0aGlzLmNvbHVtbnMuZmlyc3QgYXMgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKS5wcm9wZXJ0eTtcbiAgICB9XG4gIH1cblxuICBfbm90aWZ5KCk6IHZvaWQge1xuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnJlbG9hZGluZztcblxuICAgIHRoaXMucmVsb2FkTm90aWZpY2F0aW9uID0gbG9hZGluZyA/XG4gICAgICB0aGlzLmxhYmVscy5sb2FkaW5nVGV4dC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSkgOlxuICAgICAgdGhpcy5sYWJlbHMubG9hZGVkVGV4dC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSk7XG5cbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uTm90aWZpY2F0aW9uID0gdGhpcy5sYWJlbHMucGFnaW5hdGlvblRleHRcbiAgICAgICAgICAucmVwbGFjZSgne2Zyb219JywgJycgKyAoTWF0aC5jZWlsKHRoaXMuaXRlbUNvdW50IC8gdGhpcy5saW1pdCkgIT09IDAgPyB0aGlzLm9mZnNldCArIDEgOiAnMCcpKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dG99JywgJycgKyAoTWF0aC5taW4odGhpcy5vZmZzZXQgKyB0aGlzLmxpbWl0LCB0aGlzLml0ZW1Db3VudCkpKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dG90YWx9JywgJycgKyB0aGlzLml0ZW1Db3VudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25Ob3RpZmljYXRpb24gPSAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbHVtbnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNvcnRCeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuY29sdW1ucy50b0FycmF5KCkuZmluZChjb2x1bW4gPT4gY29sdW1uLnByb3BlcnR5ID09PSB0aGlzLnNvcnRCeSkgYXMgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlO1xuICAgICAgICB0aGlzLnNvcnROb3RpZmljYXRpb24gPSAodGhpcy5zb3J0QXNjID8gdGhpcy5sYWJlbHMuc29ydGVkQXNjZW5kaW5nIDogdGhpcy5sYWJlbHMuc29ydGVkRGVzY2VuZGluZylcbiAgICAgICAgICAucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpXG4gICAgICAgICAgLnJlcGxhY2UoJ3toZWFkZXJ9JywgY29sLmhlYWRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvcnROb3RpZmljYXRpb24gPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YmplY3QkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5ub3RpZmllciQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19