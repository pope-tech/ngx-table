import { __assign, __decorate } from "tslib";
import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output, ViewChildren } from '@angular/core';
import { DataTableColumnDirective } from '../../directives/column/column.directive';
import { DataTableRowComponent } from '../row/row.component';
import { defaultTranslations } from '../../types/default-translations.type';
import { drag } from '../../utils/drag';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
        this._displayParams = {}; // params of the last finished reload
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
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            // no need to call notifier.next() because _onReloadFinished()
            // will change reloaded value causing notifier.next() to be called implicitly.
            this._onReloadFinished();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "itemCount", {
        get: function () {
            return this._itemCount;
        },
        set: function (count) {
            this._itemCount = count;
            this.notifier.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "reloading", {
        get: function () {
            return this._reloading;
        },
        set: function (val) {
            this._reloading = val;
            this.notifier.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "sortBy", {
        get: function () {
            return this._sortBy;
        },
        set: function (value) {
            this._sortBy = value;
            this.subject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "sortAsc", {
        get: function () {
            return this._sortAsc;
        },
        set: function (value) {
            this._sortAsc = value;
            this.subject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            this._offset = value;
            this.subject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        set: function (value) {
            this._limit = value;
            this.subject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "page", {
        // calculated property:
        get: function () {
            return this.itemCount !== 0 ? Math.floor(this.offset / this.limit) + 1 : 0;
        },
        set: function (value) {
            this.offset = (value - 1) * this.limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "lastPage", {
        get: function () {
            return Math.ceil(this.itemCount / this.limit);
        },
        enumerable: true,
        configurable: true
    });
    // setting multiple observable properties simultaneously
    DataTableComponent.prototype.sort = function (sortBy, asc) {
        this.sortBy = sortBy;
        this.sortAsc = asc;
    };
    // init
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._initDefaultValues();
        this._initDefaultClickEvents();
        this._updateDisplayParams();
        if (this.pageLimits.indexOf(this.limit) < 0) {
            this.limit = this.pageLimits[0];
        }
        this.labels = __assign(__assign({}, defaultTranslations), this.labels);
        if (this.autoReload) {
            this.reloadItems();
        }
        this.notifier$ = this.notifier.subscribe(function () { return _this._notify(); });
        this.subject$ = this.subject.pipe(debounceTime(100)).subscribe(function () { return _this.reloadItems(); });
    };
    DataTableComponent.prototype._initDefaultValues = function () {
        this.indexColumnVisible = this.indexColumn;
        this.selectColumnVisible = this.selectColumn;
        this.expandColumnVisible = this.expandableRows;
    };
    DataTableComponent.prototype._initDefaultClickEvents = function () {
        var _this = this;
        this.headerClick.subscribe(function (tableEvent) { return _this.sortColumn(tableEvent.column); });
        if (this.selectOnRowClick) {
            this.rowClick.subscribe(function (tableEvent) { return tableEvent.row.selected = !tableEvent.row.selected; });
        }
    };
    DataTableComponent.prototype.reloadItems = function () {
        this.reloading = true;
        this.reload.emit(this._getRemoteParameters());
    };
    DataTableComponent.prototype._onReloadFinished = function () {
        if (this.reloading) {
            this._updateDisplayParams();
            this._selectAllCheckbox = false;
            this.reloading = false;
        }
    };
    Object.defineProperty(DataTableComponent.prototype, "displayParams", {
        get: function () {
            return this._displayParams;
        },
        enumerable: true,
        configurable: true
    });
    DataTableComponent.prototype._updateDisplayParams = function () {
        this._displayParams = {
            sortBy: this.sortBy,
            sortAsc: this.sortAsc,
            offset: this.offset,
            limit: this.limit
        };
    };
    DataTableComponent.prototype.rowClicked = function (row, event) {
        this.rowClick.emit({ row: row, event: event });
    };
    DataTableComponent.prototype.rowDoubleClicked = function (row, event) {
        this.rowDoubleClick.emit({ row: row, event: event });
    };
    DataTableComponent.prototype.headerClicked = function (column, event) {
        if (!this._resizeInProgress) {
            event.preventDefault();
            event.stopPropagation();
            this.headerClick.emit({ column: column, event: event });
        }
        else {
            this._resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
        }
    };
    DataTableComponent.prototype.cellClicked = function (column, row, event) {
        this.cellClick.emit({ row: row, column: column, event: event });
    };
    // functions:
    DataTableComponent.prototype._getRemoteParameters = function () {
        var params = {};
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
    DataTableComponent.prototype.sortColumn = function (column) {
        if (column.sortable) {
            var ascending = this.sortBy === column.property ? !this.sortAsc : true;
            if (column.property === this.sortBy && !this.sortAsc) {
                this.sort(undefined, true);
                return;
            }
            this.sort(column.property, ascending);
        }
    };
    Object.defineProperty(DataTableComponent.prototype, "columnCount", {
        get: function () {
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
    DataTableComponent.prototype.getRowColor = function (item, index, row) {
        if (this.rowColors !== undefined) {
            return this.rowColors(item, row, index);
        }
    };
    Object.defineProperty(DataTableComponent.prototype, "selectAllCheckbox", {
        get: function () {
            return this._selectAllCheckbox;
        },
        set: function (value) {
            this._selectAllCheckbox = value;
            this._onSelectAllChanged(value);
        },
        enumerable: true,
        configurable: true
    });
    DataTableComponent.prototype._onSelectAllChanged = function (value) {
        this.rows.toArray().forEach(function (row) { return row.selected = value; });
        this.selectedRowsChange.emit(this.selectedRows);
    };
    DataTableComponent.prototype.onRowSelectChanged = function (row) {
        // maintain the selectedRow(s) view
        if (this.multiSelect) {
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
                if (row_ !== row) { // avoid endless loop
                    row_.selected = false;
                }
            });
        }
        this.selectedRowsChange.emit(this.selectedRows);
    };
    Object.defineProperty(DataTableComponent.prototype, "substituteItems", {
        // other:
        get: function () {
            return Array.from({ length: this.displayParams.limit - this.items.length });
        },
        enumerable: true,
        configurable: true
    });
    DataTableComponent.prototype.resizeColumnStart = function (event, column, columnElement) {
        var _this = this;
        this._resizeInProgress = true;
        var startOffset = columnElement.offsetWidth - event.pageX;
        drag(event, {
            move: function (moveEvent, dx) {
                if (_this._isResizeInLimit(columnElement, dx)) {
                    column.width = startOffset + moveEvent.pageX + dx;
                }
            },
        });
    };
    DataTableComponent.prototype._isResizeInLimit = function (columnElement, dx) {
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
    };
    DataTableComponent.prototype.ngAfterContentInit = function () {
        if (this.primaryColumn === '') {
            this.primaryColumn = this.columns.first.property;
        }
    };
    DataTableComponent.prototype._notify = function () {
        var _this = this;
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
                var col = this.columns.toArray().find(function (column) { return column.property === _this.sortBy; });
                this.sortNotification = (this.sortAsc ? this.labels.sortedAscending : this.labels.sortedDescending)
                    .replace('{title}', this.title)
                    .replace('{header}', col.header);
            }
            else {
                this.sortNotification = '';
            }
        }
    };
    DataTableComponent.prototype.ngOnDestroy = function () {
        this.subject$.unsubscribe();
        this.notifier$.unsubscribe();
    };
    __decorate([
        Input()
    ], DataTableComponent.prototype, "wrapperClass", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "itemCount", null);
    __decorate([
        ContentChildren(DataTableColumnDirective)
    ], DataTableComponent.prototype, "columns", void 0);
    __decorate([
        ViewChildren(DataTableRowComponent)
    ], DataTableComponent.prototype, "rows", void 0);
    __decorate([
        ContentChild('dataTableExpand', { static: true })
    ], DataTableComponent.prototype, "expandTemplate", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "showTitle", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "header", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "pagination", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "indexColumn", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "indexColumnHeader", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "rowColors", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "rowTooltip", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "selectColumn", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "multiSelect", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "substituteRows", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "expandableRows", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "labels", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "selectOnRowClick", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "autoReload", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "showReloading", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "noDataMessage", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "pageLimits", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "primaryColumn", void 0);
    __decorate([
        Output()
    ], DataTableComponent.prototype, "reload", void 0);
    __decorate([
        Output()
    ], DataTableComponent.prototype, "rowClick", void 0);
    __decorate([
        Output()
    ], DataTableComponent.prototype, "rowDoubleClick", void 0);
    __decorate([
        Output()
    ], DataTableComponent.prototype, "headerClick", void 0);
    __decorate([
        Output()
    ], DataTableComponent.prototype, "cellClick", void 0);
    __decorate([
        Output()
    ], DataTableComponent.prototype, "selectedRowsChange", void 0);
    __decorate([
        Output()
    ], DataTableComponent.prototype, "visibleColumnsChange", void 0);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "sortBy", null);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "sortAsc", null);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "offset", null);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "limit", null);
    __decorate([
        Input()
    ], DataTableComponent.prototype, "page", null);
    DataTableComponent = __decorate([
        Component({
            selector: 'data-table',
            template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    <span [textContent]=\"reloadNotification\"></span>\n    <span [textContent]=\"paginationNotification\"></span>\n    <span [textContent]=\"sortNotification\"></span>\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\" [class]=\"wrapperClass\">\n    <table class=\"table data-table\" [id]=\"id\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <td [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <label [for]=\"id + '-select-all-column'\" class=\"sr-only\">\n            {{ labels.selectAllRows }}\n          </label>\n          <input\n            [id]=\"id + '-select-all-column'\"\n            [hide]=\"!multiSelect\"\n                 type=\"checkbox\"\n                 [(ngModel)]=\"selectAllCheckbox\"\n                 [disabled]=\"itemCount === 0\"\n                 [title]=\"labels.selectAllRows\"/>\n        </td>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\"\n                  [title]=\"!sortAsc ? labels.sortAscending : labels.sortDescending\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [id]=\"'col-'+id+'-'+i\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                aria-hidden=\"true\"></i>\n              <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n",
            styles: [":host /deep/ .data-table.table>tbody+tbody{border-top:none}:host /deep/ .data-table.table td{vertical-align:middle}:host /deep/ .data-table>tbody>tr>td,:host /deep/ .data-table>thead>tr>th{overflow:hidden}:host /deep/ .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host /deep/ .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host /deep/ .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy>i{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
        })
    ], DataTableComponent);
    return DataTableComponent;
}());
export { DataTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUdOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsWUFBWSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBT2Y7SUFtUEU7UUFqUFEsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQWlDM0Isa0RBQWtEO1FBQ3pDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUd2QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFD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QUssRUFBRTsyREFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7OERBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFOzhEQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTtzREFBK0I7SUFDOUI7UUFBUixLQUFLLEVBQUU7Z0VBQTBCO0lBQ3pCO1FBQVIsS0FBSyxFQUFFOzBEQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTs2REFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7NkRBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFOzBEQUErQztJQUM5QztRQUFSLEtBQUssRUFBRTs2REFBb0I7SUFHbEI7UUFBVCxNQUFNLEVBQUU7c0RBQTZCO0lBRzVCO1FBQVQsTUFBTSxFQUFFO3dEQUErQjtJQUM5QjtRQUFULE1BQU0sRUFBRTs4REFBcUM7SUFDcEM7UUFBVCxNQUFNLEVBQUU7MkRBQWtDO0lBQ2pDO1FBQVQsTUFBTSxFQUFFO3lEQUFnQztJQUMvQjtRQUFULE1BQU0sRUFBRTtrRUFBeUM7SUFDeEM7UUFBVCxNQUFNLEVBQUU7b0VBQTJDO0lBbURwRDtRQURDLEtBQUssRUFBRTtvREFHUDtJQVVEO1FBREMsS0FBSyxFQUFFO3FEQUdQO0lBVUQ7UUFEQyxLQUFLLEVBQUU7b0RBR1A7SUFVRDtRQURDLEtBQUssRUFBRTttREFHUDtJQVNEO1FBREMsS0FBSyxFQUFFO2tEQUdQO0lBcktVLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixteEtBQXFDOztTQUV0QyxDQUFDO09BQ1csa0JBQWtCLENBMGE5QjtJQUFELHlCQUFDO0NBQUEsQUExYUQsSUEwYUM7U0ExYVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuLi9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYXJhbXMgfSBmcm9tICcuLi8uLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcbmltcG9ydCB7IFJvd0NhbGxiYWNrIH0gZnJvbSAnLi4vLi4vdHlwZXMvcm93LWNhbGxiYWNrLnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkZWZhdWx0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGVmYXVsdC10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkcmFnIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHJhZyc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgRGF0YVRhYmxlUGFyYW1zLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX2l0ZW1Db3VudDtcblxuICBASW5wdXQoKSB3cmFwcGVyQ2xhc3M7XG5cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBzZXQgaXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICAvLyBubyBuZWVkIHRvIGNhbGwgbm90aWZpZXIubmV4dCgpIGJlY2F1c2UgX29uUmVsb2FkRmluaXNoZWQoKVxuICAgIC8vIHdpbGwgY2hhbmdlIHJlbG9hZGVkIHZhbHVlIGNhdXNpbmcgbm90aWZpZXIubmV4dCgpIHRvIGJlIGNhbGxlZCBpbXBsaWNpdGx5LlxuICAgIHRoaXMuX29uUmVsb2FkRmluaXNoZWQoKTtcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1Db3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pdGVtQ291bnQ7XG4gIH1cblxuICBzZXQgaXRlbUNvdW50KGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9pdGVtQ291bnQgPSBjb3VudDtcbiAgICB0aGlzLm5vdGlmaWVyLm5leHQoKTtcbiAgfVxuXG4gIC8vIFVJIGNvbXBvbmVudHM6XG4gIEBDb250ZW50Q2hpbGRyZW4oRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSBjb2x1bW5zOiBRdWVyeUxpc3Q8RGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlPjtcbiAgQFZpZXdDaGlsZHJlbihEYXRhVGFibGVSb3dDb21wb25lbnQpIHJvd3M6IFF1ZXJ5TGlzdDxEYXRhVGFibGVSb3dDb21wb25lbnQ+O1xuICBAQ29udGVudENoaWxkKCdkYXRhVGFibGVFeHBhbmQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHBhbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvLyBPbmUtdGltZSBvcHRpb25hbCBiaW5kaW5ncyB3aXRoIGRlZmF1bHQgdmFsdWVzOlxuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzaG93VGl0bGUgPSB0cnVlO1xuICBASW5wdXQoKSBoZWFkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5kZXhDb2x1bW4gPSB0cnVlO1xuICBASW5wdXQoKSBpbmRleENvbHVtbkhlYWRlciA9ICcnO1xuICBASW5wdXQoKSByb3dDb2xvcnM6IFJvd0NhbGxiYWNrO1xuICBASW5wdXQoKSByb3dUb29sdGlwOiBSb3dDYWxsYmFjaztcbiAgQElucHV0KCkgc2VsZWN0Q29sdW1uID0gZmFsc2U7XG4gIEBJbnB1dCgpIG11bHRpU2VsZWN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgc3Vic3RpdHV0ZVJvd3MgPSB0cnVlO1xuICBASW5wdXQoKSBleHBhbmRhYmxlUm93cyA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbHM6IERhdGFUYWJsZVRyYW5zbGF0aW9ucztcbiAgQElucHV0KCkgc2VsZWN0T25Sb3dDbGljayA9IGZhbHNlO1xuICBASW5wdXQoKSBhdXRvUmVsb2FkID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1JlbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBub0RhdGFNZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VMaW1pdHM6IG51bWJlcltdID0gWzEwLCAyNSwgNTAsIDEwMCwgMjUwXTtcbiAgQElucHV0KCkgcHJpbWFyeUNvbHVtbiA9ICcnO1xuXG4gIC8vIHJlbG9hZCBlbWl0dGVyXG4gIEBPdXRwdXQoKSByZWxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gZXZlbnQgaGFuZGxlcnM6XG4gIEBPdXRwdXQoKSByb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJvd0RvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGVhZGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjZWxsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFJvd3NDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB2aXNpYmxlQ29sdW1uc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gVUkgc3RhdGUgd2l0aG91dCBpbnB1dDpcbiAgaW5kZXhDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuICBzZWxlY3RDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuICBleHBhbmRDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuXG4gIC8vIGFkYSBub3RpZmljYXRpb25zLlxuICByZWxvYWROb3RpZmljYXRpb246IHN0cmluZztcbiAgcGFnaW5hdGlvbk5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBzb3J0Tm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIGNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uOiBzdHJpbmc7XG5cbiAgX2Rpc3BsYXlQYXJhbXMgPSA8RGF0YVRhYmxlUGFyYW1zPnt9OyAvLyBwYXJhbXMgb2YgdGhlIGxhc3QgZmluaXNoZWQgcmVsb2FkXG5cbiAgc3ViamVjdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHN1YmplY3QkOiBTdWJzY3JpcHRpb247XG5cbiAgbm90aWZpZXIgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBub3RpZmllciQ6IFN1YnNjcmlwdGlvbjtcblxuICAvLyBzZWxlY3Rpb246XG4gIHNlbGVjdGVkUm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQ7XG4gIHNlbGVjdGVkUm93czogRGF0YVRhYmxlUm93Q29tcG9uZW50W10gPSBbXTtcblxuICBNYXRoOiBhbnk7XG4gIGlkID0gYGRhdGF0YWJsZS0ke25leHRJZCsrfWA7XG5cbiAgLy8gc2VsZWN0IGFsbCBjaGVja2JveCBmbGFnXG4gIHByaXZhdGUgX3NlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7XG5cbiAgLy8gY29sdW1uIHJlc2l6aW5nOlxuICBwcml2YXRlIF9yZXNpemVJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgcmVzaXplTGltaXQgPSAzMDtcblxuICAvLyBSZWxvYWRpbmc6XG4gIF9yZWxvYWRpbmcgPSBmYWxzZTtcblxuICBnZXQgcmVsb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWxvYWRpbmc7XG4gIH1cblxuICBzZXQgcmVsb2FkaW5nKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbG9hZGluZyA9IHZhbDtcbiAgICB0aGlzLm5vdGlmaWVyLm5leHQoKTtcbiAgfVxuXG4gIC8vIFVJIHN0YXRlOiB2aXNpYmxlIGdldC9zZXQgZm9yIHRoZSBvdXRzaWRlIHdpdGggQElucHV0IGZvciBvbmUtdGltZSBpbml0aWFsIHZhbHVlc1xuICBwcml2YXRlIF9zb3J0Qnk6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgc29ydEJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIHNldCBzb3J0QnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvcnRCeSA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9zb3J0QXNjID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgc29ydEFzYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEFzYztcbiAgfVxuXG4gIHNldCBzb3J0QXNjKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc29ydEFzYyA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXQgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBvZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICB9XG5cbiAgc2V0IG9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpbWl0ID0gMTA7XG5cbiAgQElucHV0KClcbiAgZ2V0IGxpbWl0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0O1xuICB9XG5cbiAgc2V0IGxpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9saW1pdCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVkIHByb3BlcnR5OlxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtQ291bnQgIT09IDAgPyBNYXRoLmZsb29yKHRoaXMub2Zmc2V0IC8gdGhpcy5saW1pdCkgKyAxIDogMDtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlKSB7XG4gICAgdGhpcy5vZmZzZXQgPSAodmFsdWUgLSAxKSAqIHRoaXMubGltaXQ7XG4gIH1cblxuICBnZXQgbGFzdFBhZ2UoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLml0ZW1Db3VudCAvIHRoaXMubGltaXQpO1xuICB9XG5cbiAgLy8gc2V0dGluZyBtdWx0aXBsZSBvYnNlcnZhYmxlIHByb3BlcnRpZXMgc2ltdWx0YW5lb3VzbHlcbiAgc29ydChzb3J0Qnk6IHN0cmluZywgYXNjOiBib29sZWFuKSB7XG4gICAgdGhpcy5zb3J0QnkgPSBzb3J0Qnk7XG4gICAgdGhpcy5zb3J0QXNjID0gYXNjO1xuICB9XG5cbiAgLy8gaW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pbml0RGVmYXVsdFZhbHVlcygpO1xuICAgIHRoaXMuX2luaXREZWZhdWx0Q2xpY2tFdmVudHMoKTtcbiAgICB0aGlzLl91cGRhdGVEaXNwbGF5UGFyYW1zKCk7XG5cbiAgICBpZiAodGhpcy5wYWdlTGltaXRzLmluZGV4T2YodGhpcy5saW1pdCkgPCAwKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gdGhpcy5wYWdlTGltaXRzWzBdO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxzID0gey4uLmRlZmF1bHRUcmFuc2xhdGlvbnMsIC4uLnRoaXMubGFiZWxzfTtcblxuICAgIGlmICh0aGlzLmF1dG9SZWxvYWQpIHtcbiAgICAgIHRoaXMucmVsb2FkSXRlbXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmaWVyJCA9IHRoaXMubm90aWZpZXIuc3Vic2NyaWJlKCgpID0+IHRoaXMuX25vdGlmeSgpKTtcbiAgICB0aGlzLnN1YmplY3QkID0gdGhpcy5zdWJqZWN0LnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbG9hZEl0ZW1zKCkpO1xuXG4gIH1cblxuICBwcml2YXRlIF9pbml0RGVmYXVsdFZhbHVlcygpIHtcbiAgICB0aGlzLmluZGV4Q29sdW1uVmlzaWJsZSA9IHRoaXMuaW5kZXhDb2x1bW47XG4gICAgdGhpcy5zZWxlY3RDb2x1bW5WaXNpYmxlID0gdGhpcy5zZWxlY3RDb2x1bW47XG4gICAgdGhpcy5leHBhbmRDb2x1bW5WaXNpYmxlID0gdGhpcy5leHBhbmRhYmxlUm93cztcbiAgfVxuXG4gIHByaXZhdGUgX2luaXREZWZhdWx0Q2xpY2tFdmVudHMoKSB7XG4gICAgdGhpcy5oZWFkZXJDbGljay5zdWJzY3JpYmUoXG4gICAgICAodGFibGVFdmVudDogeyBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgZXZlbnQ6IEV2ZW50IH0pID0+IHRoaXMuc29ydENvbHVtbih0YWJsZUV2ZW50LmNvbHVtbikpO1xuICAgIGlmICh0aGlzLnNlbGVjdE9uUm93Q2xpY2spIHtcbiAgICAgIHRoaXMucm93Q2xpY2suc3Vic2NyaWJlKFxuICAgICAgICAodGFibGVFdmVudDogeyByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50IH0pID0+IHRhYmxlRXZlbnQucm93LnNlbGVjdGVkID0gIXRhYmxlRXZlbnQucm93LnNlbGVjdGVkKTtcbiAgICB9XG4gIH1cblxuICByZWxvYWRJdGVtcygpIHtcbiAgICB0aGlzLnJlbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5yZWxvYWQuZW1pdCh0aGlzLl9nZXRSZW1vdGVQYXJhbWV0ZXJzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25SZWxvYWRGaW5pc2hlZCgpIHtcbiAgICBpZiAodGhpcy5yZWxvYWRpbmcpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlQYXJhbXMoKTtcbiAgICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkaXNwbGF5UGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5UGFyYW1zO1xuICB9XG5cbiAgX3VwZGF0ZURpc3BsYXlQYXJhbXMoKSB7XG4gICAgdGhpcy5fZGlzcGxheVBhcmFtcyA9IHtcbiAgICAgIHNvcnRCeTogdGhpcy5zb3J0QnksXG4gICAgICBzb3J0QXNjOiB0aGlzLnNvcnRBc2MsXG4gICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgbGltaXQ6IHRoaXMubGltaXRcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwdWJsaWMgcm93Q2xpY2tlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5yb3dDbGljay5lbWl0KHtyb3csIGV2ZW50fSk7XG4gIH1cblxuICBwdWJsaWMgcm93RG91YmxlQ2xpY2tlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5yb3dEb3VibGVDbGljay5lbWl0KHtyb3csIGV2ZW50fSk7XG4gIH1cblxuICBwdWJsaWMgaGVhZGVyQ2xpY2tlZChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9yZXNpemVJblByb2dyZXNzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmhlYWRlckNsaWNrLmVtaXQoe2NvbHVtbiwgZXZlbnR9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVzaXplSW5Qcm9ncmVzcyA9IGZhbHNlOyAvLyB0aGlzIGlzIGJlY2F1c2UgSSBjYW4ndCBwcmV2ZW50IGNsaWNrIGZyb20gbW91c3VwIG9mIHRoZSBkcmFnIGVuZFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2VsbENsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuY2VsbENsaWNrLmVtaXQoe3JvdywgY29sdW1uLCBldmVudH0pO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25zOlxuICBwcml2YXRlIF9nZXRSZW1vdGVQYXJhbWV0ZXJzKCk6IERhdGFUYWJsZVBhcmFtcyB7XG4gICAgY29uc3QgcGFyYW1zID0gPERhdGFUYWJsZVBhcmFtcz57fTtcblxuICAgIGlmICh0aGlzLnNvcnRCeSkge1xuICAgICAgcGFyYW1zLnNvcnRCeSA9IHRoaXMuc29ydEJ5O1xuICAgICAgcGFyYW1zLnNvcnRBc2MgPSB0aGlzLnNvcnRBc2M7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIHBhcmFtcy5vZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgIHBhcmFtcy5saW1pdCA9IHRoaXMubGltaXQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb2x1bW4oY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpIHtcbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlKSB7XG5cbiAgICAgIGNvbnN0IGFzY2VuZGluZyA9IHRoaXMuc29ydEJ5ID09PSBjb2x1bW4ucHJvcGVydHkgPyAhdGhpcy5zb3J0QXNjIDogdHJ1ZTtcblxuICAgICAgaWYoY29sdW1uLnByb3BlcnR5ID09PSB0aGlzLnNvcnRCeSAmJiAgISB0aGlzLnNvcnRBc2MpIHtcbiAgICAgICAgdGhpcy5zb3J0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zb3J0KGNvbHVtbi5wcm9wZXJ0eSwgYXNjZW5kaW5nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29sdW1uQ291bnQoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb3VudCArPSB0aGlzLmluZGV4Q29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIGNvdW50ICs9IHRoaXMuc2VsZWN0Q29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIGNvdW50ICs9IHRoaXMuZXhwYW5kQ29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIHRoaXMuY29sdW1ucy50b0FycmF5KCkuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgY291bnQgKz0gY29sdW1uLnZpc2libGUgPyAxIDogMDtcbiAgICB9KTtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Um93Q29sb3IoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuICAgIGlmICh0aGlzLnJvd0NvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKDxSb3dDYWxsYmFjaz50aGlzLnJvd0NvbG9ycykoaXRlbSwgcm93LCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdEFsbENoZWNrYm94KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RBbGxDaGVja2JveDtcbiAgfVxuXG4gIHNldCBzZWxlY3RBbGxDaGVja2JveCh2YWx1ZSkge1xuICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94ID0gdmFsdWU7XG4gICAgdGhpcy5fb25TZWxlY3RBbGxDaGFuZ2VkKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMucm93cy50b0FycmF5KCkuZm9yRWFjaChyb3cgPT4gcm93LnNlbGVjdGVkID0gdmFsdWUpO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgb25Sb3dTZWxlY3RDaGFuZ2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50KSB7XG5cbiAgICAvLyBtYWludGFpbiB0aGUgc2VsZWN0ZWRSb3cocykgdmlld1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KTtcbiAgICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgaW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICAgIH0gZWxzZSBpZiAoIXJvdy5zZWxlY3RlZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyb3cuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZFJvdyA9PT0gcm93KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkUm93O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVuc2VsZWN0IGFsbCBvdGhlciByb3dzOlxuICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgIXRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMucm93cy50b0FycmF5KCkuZmlsdGVyKHJvd18gPT4gcm93Xy5zZWxlY3RlZCkuZm9yRWFjaChyb3dfID0+IHtcbiAgICAgICAgaWYgKHJvd18gIT09IHJvdykgeyAvLyBhdm9pZCBlbmRsZXNzIGxvb3BcbiAgICAgICAgICByb3dfLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgLy8gb3RoZXI6XG5cbiAgZ2V0IHN1YnN0aXR1dGVJdGVtcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB0aGlzLmRpc3BsYXlQYXJhbXMubGltaXQgLSB0aGlzLml0ZW1zLmxlbmd0aH0pO1xuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtblN0YXJ0KGV2ZW50OiBNb3VzZUV2ZW50LCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgY29sdW1uRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9yZXNpemVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRPZmZzZXQgPSBjb2x1bW5FbGVtZW50Lm9mZnNldFdpZHRoIC0gZXZlbnQucGFnZVg7XG4gICAgZHJhZyhldmVudCwge1xuICAgICAgbW92ZTogKG1vdmVFdmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNSZXNpemVJbkxpbWl0KGNvbHVtbkVsZW1lbnQsIGR4KSkge1xuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IHN0YXJ0T2Zmc2V0ICsgbW92ZUV2ZW50LnBhZ2VYICsgZHg7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1Jlc2l6ZUluTGltaXQoY29sdW1uRWxlbWVudDogSFRNTEVsZW1lbnQsIGR4OiBudW1iZXIpIHtcbiAgICAvKiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIENTUyBtaW4td2lkdGggZGlkbid0IHdvcmsgb24gdGFibGUtbGF5b3V0OiBmaXhlZC5cbiAgICAgICAgIFdpdGhvdXQgdGhlIGxpbWl0cywgcmVzaXppbmcgY2FuIG1ha2UgdGhlIG5leHQgY29sdW1uIGRpc2FwcGVhciBjb21wbGV0ZWx5LFxuICAgICAgICAgYW5kIGV2ZW4gaW5jcmVhc2UgdGhlIHRhYmxlIHdpZHRoLiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBzdWZmZXJzIGZyb20gdGhlIGZhY3QsXG4gICAgICAgICB0aGF0IG9mZnNldFdpZHRoIHNvbWV0aW1lcyBjb250YWlucyBvdXQtb2YtZGF0ZSB2YWx1ZXMuICovXG4gICAgaWYgKChkeCA8IDAgJiYgKGNvbHVtbkVsZW1lbnQub2Zmc2V0V2lkdGggKyBkeCkgPD0gdGhpcy5yZXNpemVMaW1pdCkgfHxcbiAgICAgICFjb2x1bW5FbGVtZW50Lm5leHRFbGVtZW50U2libGluZyB8fCAvLyByZXNpemluZyBkb2Vzbid0IG1ha2Ugc2Vuc2UgZm9yIHRoZSBsYXN0IHZpc2libGUgY29sdW1uXG4gICAgICAoZHggPj0gMCAmJiAoKDxIVE1MRWxlbWVudD5jb2x1bW5FbGVtZW50Lm5leHRFbGVtZW50U2libGluZykub2Zmc2V0V2lkdGggKyBkeCkgPD0gdGhpcy5yZXNpemVMaW1pdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJpbWFyeUNvbHVtbiA9PT0gJycpIHtcbiAgICAgIHRoaXMucHJpbWFyeUNvbHVtbiA9ICh0aGlzLmNvbHVtbnMuZmlyc3QgYXMgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKS5wcm9wZXJ0eTtcbiAgICB9XG4gIH1cblxuICBfbm90aWZ5KCk6IHZvaWQge1xuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnJlbG9hZGluZztcblxuICAgIHRoaXMucmVsb2FkTm90aWZpY2F0aW9uID0gbG9hZGluZyA/XG4gICAgICB0aGlzLmxhYmVscy5sb2FkaW5nVGV4dC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSkgOlxuICAgICAgdGhpcy5sYWJlbHMubG9hZGVkVGV4dC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSk7XG5cbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uTm90aWZpY2F0aW9uID0gdGhpcy5sYWJlbHMucGFnaW5hdGlvblRleHRcbiAgICAgICAgICAucmVwbGFjZSgne2Zyb219JywgJycgKyAoTWF0aC5jZWlsKHRoaXMuaXRlbUNvdW50IC8gdGhpcy5saW1pdCkgIT09IDAgPyB0aGlzLm9mZnNldCArIDEgOiAnMCcpKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dG99JywgJycgKyAoTWF0aC5taW4odGhpcy5vZmZzZXQgKyB0aGlzLmxpbWl0LCB0aGlzLml0ZW1Db3VudCkpKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dG90YWx9JywgJycgKyB0aGlzLml0ZW1Db3VudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25Ob3RpZmljYXRpb24gPSAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbHVtbnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNvcnRCeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuY29sdW1ucy50b0FycmF5KCkuZmluZChjb2x1bW4gPT4gY29sdW1uLnByb3BlcnR5ID09PSB0aGlzLnNvcnRCeSkgYXMgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlO1xuICAgICAgICB0aGlzLnNvcnROb3RpZmljYXRpb24gPSAodGhpcy5zb3J0QXNjID8gdGhpcy5sYWJlbHMuc29ydGVkQXNjZW5kaW5nIDogdGhpcy5sYWJlbHMuc29ydGVkRGVzY2VuZGluZylcbiAgICAgICAgICAucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpXG4gICAgICAgICAgLnJlcGxhY2UoJ3toZWFkZXJ9JywgY29sLmhlYWRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvcnROb3RpZmljYXRpb24gPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YmplY3QkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5ub3RpZmllciQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19