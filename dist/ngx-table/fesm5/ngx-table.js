import { Directive, ElementRef, Input, Renderer2, Pipe, ContentChild, Component, EventEmitter, forwardRef, Inject, Output, ContentChildren, ViewChildren, HostListener, ViewChild, NgModule } from '@angular/core';
import { __assign } from 'tslib';
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
var HideDirective = /** @class */ (function () {
    function HideDirective(_elementRef, renderer) {
        this._elementRef = _elementRef;
        this.renderer = renderer;
        this._prevCondition = false;
    }
    Object.defineProperty(HideDirective.prototype, "hide", {
        set: /**
         * @param {?} newCondition
         * @return {?}
         */
        function (newCondition) {
            this.initDisplayStyle();
            if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
                this._prevCondition = true;
                this.renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
            }
            else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
                this._prevCondition = false;
                this.renderer.setStyle(this._elementRef.nativeElement, 'display', this._displayStyle);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HideDirective.prototype.initDisplayStyle = /**
     * @return {?}
     */
    function () {
        if (this._displayStyle === undefined) {
            /** @type {?} */
            var displayStyle = this._elementRef.nativeElement.style.display;
            if (displayStyle !== 'none') {
                this._displayStyle = displayStyle;
            }
        }
    };
    HideDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[hide]'
                },] },
    ];
    /** @nocollapse */
    HideDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    HideDirective.propDecorators = {
        hide: [{ type: Input }]
    };
    return HideDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MinPipe = /** @class */ (function () {
    function MinPipe() {
    }
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    MinPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    function (value, args) {
        return Math.min.apply(null, value);
    };
    MinPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'min'
                },] },
    ];
    return MinPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PixelConverter = /** @class */ (function () {
    function PixelConverter() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    PixelConverter.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (args === void 0) { args = []; }
        if (value === undefined) {
            return;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return value + 'px';
        }
    };
    PixelConverter.decorators = [
        { type: Pipe, args: [{
                    name: 'px'
                },] },
    ];
    return PixelConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
DataTableResource = /** @class */ (function () {
    function DataTableResource(items) {
        this.items = items;
    }
    /**
     * @param {?} params
     * @param {?=} filter
     * @return {?}
     */
    DataTableResource.prototype.query = /**
     * @param {?} params
     * @param {?=} filter
     * @return {?}
     */
    function (params, filter) {
        /** @type {?} */
        var result = [];
        if (filter) {
            result = this.items.filter(filter);
        }
        else {
            result = this.items.slice(); // shallow copy to use for sorting instead of changing the original
        }
        if (params.sortBy) {
            result.sort(function (a, b) {
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
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(result); });
        });
    };
    /**
     * @return {?}
     */
    DataTableResource.prototype.count = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.items.length); });
        });
    };
    return DataTableResource;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DataTableColumnDirective = /** @class */ (function () {
    function DataTableColumnDirective() {
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
    DataTableColumnDirective.prototype.getCellColor = /**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    function (row, index) {
        if (this.cellColors !== undefined) {
            return (/** @type {?} */ (this.cellColors))(row.item, row, this, index);
        }
    };
    /**
     * @return {?}
     */
    DataTableColumnDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._initCellClass();
    };
    /**
     * @return {?}
     */
    DataTableColumnDirective.prototype._initCellClass = /**
     * @return {?}
     */
    function () {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            }
            else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }
        if (this.styleClass != null) {
            this.styleClassObject = (_a = {},
                _a[this.styleClass] = true,
                _a);
        }
        var _a;
    };
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
    return DataTableColumnDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DataTableRowComponent = /** @class */ (function () {
    function DataTableRowComponent(dataTable, renderer, elementRef) {
        this.dataTable = dataTable;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._this = this;
        this._listeners = [];
        this.selectedChange = new EventEmitter();
    }
    Object.defineProperty(DataTableRowComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.selectedChange.emit(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableRowComponent.prototype, "displayIndex", {
        // other:
        get: /**
         * @return {?}
         */
        function () {
            if (this.dataTable.pagination) {
                return this.dataTable.displayParams.offset + this.index + 1;
            }
            else {
                return this.index + 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTableRowComponent.prototype.getTooltip = /**
     * @return {?}
     */
    function () {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    };
    /**
     * @return {?}
     */
    DataTableRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dataTable.rowClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'click', function (event) { return _this.dataTable.rowClicked(_this, event); }));
        }
        if (this.dataTable.rowDoubleClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dblclick', function (event) { return _this.dataTable.rowDoubleClicked(_this, event); }));
        }
    };
    /**
     * @return {?}
     */
    DataTableRowComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.selected = false;
        this._listeners.forEach(function (fn) { return fn(); });
    };
    DataTableRowComponent.decorators = [
        { type: Component, args: [{
                    selector: '[dataTableRow]',
                    template: "<tr class=\"data-table-row\"\n    [title]=\"getTooltip()\"\n    [style.background-color]=\"dataTable.getRowColor(item, index, _this)\"\n    [class.row-odd]=\"index % 2 === 0\"\n    [class.row-even]=\"index % 2 === 1\"\n    [class.selected]=\"selected\"\n    [class.clickable]=\"dataTable.selectOnRowClick\">\n  <td [hide]=\"!dataTable.expandColumnVisible\">\n    <button (click)=\"expanded = !expanded; $event.stopPropagation()\" class=\"row-expand-button\"\n         [attr.aria-expanded]=\"expanded\"\n         [title]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n         [attr.aria-label]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\">\n      <i [ngClass]=\"{'fa-caret-right': !expanded, 'fa-caret-down': expanded}\" class=\"fa fa-lg\" aria-hidden=\"true\"></i>\n    </button>\n  </td>\n  <td [hide]=\"!dataTable.indexColumnVisible\" class=\"index-column\" [textContent]=\"displayIndex\"></td>\n  <td [hide]=\"!dataTable.selectColumnVisible\" class=\"select-column\">\n    <input type=\"checkbox\" [(ngModel)]=\"selected\"\n           [title]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n           [attr.aria-label]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"/>\n  </td>\n  <ng-template ngFor [ngForOf]=\"dataTable.columns\" let-column>\n    <th *ngIf=\"dataTable.primaryColumn === column.property\" scope=\"row\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </th>\n    <td *ngIf=\"dataTable.primaryColumn !== column.property\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </td>\n  </ng-template>\n</tr>\n<tr *ngIf=\"dataTable.expandableRows\" [hide]=\"!expanded\" class=\"row-expansion\">\n  <td [attr.colspan]=\"dataTable.columnCount\">\n    <div [ngTemplateOutlet]=\"dataTable.expandTemplate\" [ngTemplateOutletContext]=\"{row: _this, item: item}\"></div>\n  </td>\n</tr>\n",
                    styles: [".select-column{text-align:center}.row-expand-button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable{cursor:pointer}th{font-weight:initial}"]
                },] },
    ];
    /** @nocollapse */
    DataTableRowComponent.ctorParameters = function () { return [
        { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return DataTableComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    DataTableRowComponent.propDecorators = {
        item: [{ type: Input }],
        index: [{ type: Input }],
        selectedChange: [{ type: Output }]
    };
    return DataTableRowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultTranslations = {
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
function drag(event, _a) {
    var move = _a.move, up = _a.up;
    /** @type {?} */
    var startX = event.pageX;
    /** @type {?} */
    var startY = event.pageY;
    /** @type {?} */
    var x = startX;
    /** @type {?} */
    var y = startY;
    /** @type {?} */
    var moved = false;
    /**
     * @param {?} evt
     * @return {?}
     */
    function mouseMoveHandler(evt) {
        /** @type {?} */
        var dx = evt.pageX - x;
        /** @type {?} */
        var dy = evt.pageY - y;
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
        this.labels = __assign({}, defaultTranslations, this.labels);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DataTableHeaderComponent = /** @class */ (function () {
    function DataTableHeaderComponent(dataTable, elemRef) {
        this.dataTable = dataTable;
        this.elemRef = elemRef;
        this.columnSelectorOpen = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onClickHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.elemRef.nativeElement.contains(event.target)) {
            this.columnSelectorOpen = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onKeyUpHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 27 || (event.keyCode === 9 && !this.elemRef.nativeElement.contains(event.target))) {
            this.columnSelectorOpen = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var isChecked = (/** @type {?} */ (event.target)).checked;
        /** @type {?} */
        var columnName = (/** @type {?} */ (event.target)).parentElement.textContent.trim();
        /** @type {?} */
        var interpolateParams = {
            'column_name': columnName,
            'title': this.dataTable.title
        };
        this.dataTable.columnSelectorNotification = (isChecked ? this.dataTable.labels.headerColumnSelectorAdded :
            this.dataTable.labels.headerColumnSelectorRemoved)
            .replace('{column_name}', interpolateParams.column_name)
            .replace('{title}', interpolateParams.title);
    };
    DataTableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'data-table-header',
                    template: "<div class=\"data-table-header\">\n  <p class=\"h4 title\" *ngIf=\"dataTable.showTitle\" [textContent]=\"dataTable.title\"></p>\n  <div class=\"button-panel\">\n    <button type=\"button\" class=\"btn btn-default btn-sm refresh-button\"\n            (click)=\"dataTable.reloadItems()\"\n            [title]=\"dataTable.labels.headerReload.replace('{title}', dataTable.title)\">\n      <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-default btn-sm column-selector-button\" [class.active]=\"columnSelectorOpen\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.aria-expanded]=\"columnSelectorOpen\"\n            (click)=\"columnSelectorOpen = !columnSelectorOpen;\"\n            [title]=\"dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title)\">\n      <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"column-selector-wrapper\">\n      <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box panel panel-default\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngIf=\"dataTable.expandableRows\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.expandColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.expandColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.indexColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.indexColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.indexColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.selectColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.selectColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.selectColumn\"></span>\n            </label>\n          </li>\n          <ng-template ngFor let-item let-i=\"index\" [ngForOf]=\"dataTable.columns\">\n            <li class=\"list-group-item column-selector-column checkbox\"\n                *ngIf=\"dataTable.primaryColumn !== item.property\">\n              <label class=\"d-flex align-items-center\">\n                <input type=\"checkbox\" [(ngModel)]=\"item.visible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n                <span [textContent]=\"item.header\"></span>\n              </label>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:0!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}"]
                },] },
    ];
    /** @nocollapse */
    DataTableHeaderComponent.ctorParameters = function () { return [
        { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return DataTableComponent; }),] }] },
        { type: ElementRef }
    ]; };
    DataTableHeaderComponent.propDecorators = {
        onClickHandler: [{ type: HostListener, args: ['document:click', ['$event'],] }],
        onKeyUpHandler: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
    };
    return DataTableHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var nextId$1 = 0;
var DataTablePaginationComponent = /** @class */ (function () {
    function DataTablePaginationComponent(dataTable) {
        this.dataTable = dataTable;
        this.id = "pagination-" + nextId$1++;
        this.Math = Math;
    }
    /**
     * @return {?}
     */
    DataTablePaginationComponent.prototype.pageBack = /**
     * @return {?}
     */
    function () {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
        if (this.dataTable.offset <= 0) {
            this.pageInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    DataTablePaginationComponent.prototype.pageForward = /**
     * @return {?}
     */
    function () {
        this.dataTable.offset += this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    DataTablePaginationComponent.prototype.pageFirst = /**
     * @return {?}
     */
    function () {
        this.dataTable.offset = 0;
        this.pageInput.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    DataTablePaginationComponent.prototype.pageLast = /**
     * @return {?}
     */
    function () {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    };
    Object.defineProperty(DataTablePaginationComponent.prototype, "maxPage", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePaginationComponent.prototype, "limit", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dataTable.limit;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataTable.limit = +value;
            // returning back to the first page.
            this.page = 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePaginationComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dataTable.page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataTable.page = +value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    DataTablePaginationComponent.prototype.validate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var newValue = +event.target.value;
        if (newValue !== this.page) {
            this.page = (event.target.value > this.maxPage) ? this.maxPage : (newValue < 1) ? 1 : newValue;
            event.target.value = this.page;
        }
    };
    DataTablePaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'data-table-pagination',
                    template: "<div class=\"d-flex justify-content-between align-items-center\">\n  <div class=\"pagination-range\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n  </div>\n  <div class=\"pagination-controllers pagination-box d-flex justify-content-between\">\n    <div class=\"pagination-limit d-flex justify-content-between\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n        </div>\n        <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\" [disabled]=\"dataTable.itemCount === 0\">\n          <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"pagination-pages d-flex justify-content-between\">\n      <button [disabled]=\"dataTable.offset <= 0\"\n              (click)=\"pageFirst()\"\n              class=\"btn btn-default pagination-firstpage\"\n              [title]=\"dataTable.labels.firstPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n      <button [disabled]=\"dataTable.offset <= 0\"\n              (click)=\"pageBack()\"\n              class=\"btn btn-default pagination-prevpage\"\n              [title]=\"dataTable.labels.prevPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n      <div class=\"pagination-page\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n              {{ dataTable.labels.pageNumberLabel }}\n            </label>\n          </div>\n          <input #pageInput type=\"number\"\n                 [id]=\"id + '-page-input'\"\n                 class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n                 [disabled]=\"dataTable.itemCount === 0\"\n                 [ngModel]=\"page\"\n                 (blur)=\"validate($event)\"\n                 (keyup.enter)=\"validate($event)\"\n                 (keyup.esc)=\"pageInput.value = page\"\n                 [title]=\"dataTable.labels.pageNumber + ' ' +\n                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)\"\n                 [attr.aria-controls]=\"dataTable.id\"/>\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n          </div>\n        </div>\n      </div>\n      <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n              (click)=\"pageForward()\"\n              class=\"btn btn-default pagination-nextpage\"\n              [title]=\"dataTable.labels.nextPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n      <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n              (click)=\"pageLast()\"\n              class=\"btn btn-default pagination-lastpage\"\n              [title]=\"dataTable.labels.lastPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n",
                    styles: [".pagination-controllers select{min-width:5rem;text-align:right}.pagination-pages>*{margin:0 .15rem}.pagination-limit{margin-right:1.5rem}.pagination-box button{outline:0!important}"]
                },] },
    ];
    /** @nocollapse */
    DataTablePaginationComponent.ctorParameters = function () { return [
        { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return DataTableComponent; }),] }] }
    ]; };
    DataTablePaginationComponent.propDecorators = {
        pageInput: [{ type: ViewChild, args: ['pageInput',] }],
        limits: [{ type: Input }]
    };
    return DataTablePaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxTableModule = /** @class */ (function () {
    function NgxTableModule() {
    }
    /**
     * @return {?}
     */
    NgxTableModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxTableModule,
            providers: []
        };
    };
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
    return NgxTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxTableModule, DataTableComponent as DataTable, DataTableColumnDirective as DataTableColumn, DataTableRowComponent as DataTableRow, DataTablePaginationComponent as DataTablePagination, DataTableHeaderComponent as DataTableHeader, DataTableResource, HideDirective as ɵb, MinPipe as ɵc, PixelConverter as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtdGFibGUvbGliL3V0aWxzL2hpZGUudHMiLCJuZzovL25neC10YWJsZS9saWIvdXRpbHMvbWluLnRzIiwibmc6Ly9uZ3gtdGFibGUvbGliL3V0aWxzL3B4LnRzIiwibmc6Ly9uZ3gtdGFibGUvbGliL3Rvb2xzL2RhdGEtdGFibGUtcmVzb3VyY2UudHMiLCJuZzovL25neC10YWJsZS9saWIvZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LXRhYmxlL2xpYi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtdGFibGUvbGliL3R5cGVzL2RlZmF1bHQtdHJhbnNsYXRpb25zLnR5cGUudHMiLCJuZzovL25neC10YWJsZS9saWIvdXRpbHMvZHJhZy50cyIsIm5nOi8vbmd4LXRhYmxlL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXRhYmxlL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtdGFibGUvbGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXRhYmxlL2xpYi9uZ3gtdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gaXNCbGFuayhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIEhpZGVEaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX3ByZXZDb25kaXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzcGxheVN0eWxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGlkZShuZXdDb25kaXRpb246IGJvb2xlYW4pIHtcbiAgICB0aGlzLmluaXREaXNwbGF5U3R5bGUoKTtcblxuICAgIGlmIChuZXdDb25kaXRpb24gJiYgKGlzQmxhbmsodGhpcy5fcHJldkNvbmRpdGlvbikgfHwgIXRoaXMuX3ByZXZDb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9wcmV2Q29uZGl0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSBlbHNlIGlmICghbmV3Q29uZGl0aW9uICYmIChpc0JsYW5rKHRoaXMuX3ByZXZDb25kaXRpb24pIHx8IHRoaXMuX3ByZXZDb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9wcmV2Q29uZGl0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCB0aGlzLl9kaXNwbGF5U3R5bGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdERpc3BsYXlTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fZGlzcGxheVN0eWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRpc3BsYXlTdHlsZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgaWYgKGRpc3BsYXlTdHlsZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlTdHlsZSA9IGRpc3BsYXlTdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AUGlwZSh7XG4gIG5hbWU6ICdtaW4nXG59KVxuZXhwb3J0IGNsYXNzIE1pblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXJbXSwgYXJnczogc3RyaW5nW10pOiBhbnkge1xuICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCB2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAncHgnXG59KVxuZXhwb3J0IGNsYXNzIFBpeGVsQ29udmVydGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBhcmdzOiBzdHJpbmdbXSA9IFtdKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHZhbHVlICsgJ3B4JztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7RGF0YVRhYmxlUGFyYW1zfSBmcm9tICcuLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcblxuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUmVzb3VyY2U8VD4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbXM6IFRbXSkge1xuICB9XG5cbiAgcXVlcnkocGFyYW1zOiBEYXRhVGFibGVQYXJhbXMsIGZpbHRlcj86IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBpdGVtczogVFtdKSA9PiBib29sZWFuKTogUHJvbWlzZTxUW10+IHtcblxuICAgIGxldCByZXN1bHQ6IFRbXSA9IFtdO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaXRlbXMuZmlsdGVyKGZpbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaXRlbXMuc2xpY2UoKTsgLy8gc2hhbGxvdyBjb3B5IHRvIHVzZSBmb3Igc29ydGluZyBpbnN0ZWFkIG9mIGNoYW5naW5nIHRoZSBvcmlnaW5hbFxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc29ydEJ5KSB7XG4gICAgICByZXN1bHQuc29ydCgoYTogRGF0YVRhYmxlUGFyYW1zLCBiOiBEYXRhVGFibGVQYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhW3BhcmFtcy5zb3J0QnldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBhW3BhcmFtcy5zb3J0QnldLmxvY2FsZUNvbXBhcmUoYltwYXJhbXMuc29ydEJ5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFbcGFyYW1zLnNvcnRCeV0gLSBiW3BhcmFtcy5zb3J0QnldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXJhbXMuc29ydEFzYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzdWx0LnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHBhcmFtcy5saW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShwYXJhbXMub2Zmc2V0LCByZXN1bHQubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShwYXJhbXMub2Zmc2V0LCBwYXJhbXMub2Zmc2V0ICsgcGFyYW1zLmxpbWl0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHJlc3VsdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRoaXMuaXRlbXMubGVuZ3RoKSk7XG4gICAgfSk7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHtDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFUYWJsZVJvd0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQge0NlbGxDYWxsYmFja30gZnJvbSAnLi4vLi4vdHlwZXMvY2VsbC1jYWxsYmFjay50eXBlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLWNvbHVtbidcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHN0eWxlQ2xhc3NPYmplY3QgPSB7fTsgLy8gZm9yIFtuZ0NsYXNzXVxuXG4gIC8vIGluaXQ6XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBzb3J0YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSByZXNpemFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJvcGVydHk6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjZWxsQ29sb3JzOiBDZWxsQ2FsbGJhY2s7XG5cbiAgLy8gaW5pdCBhbmQgc3RhdGU6XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUNlbGwnKSBjZWxsVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUhlYWRlcicpIGhlYWRlclRlbXBsYXRlOiBFbGVtZW50UmVmO1xuXG4gIGdldENlbGxDb2xvcihyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNlbGxDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Q2VsbENhbGxiYWNrPnRoaXMuY2VsbENvbG9ycykocm93Lml0ZW0sIHJvdywgdGhpcywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXRDZWxsQ2xhc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRDZWxsQ2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLnN0eWxlQ2xhc3MgJiYgdGhpcy5wcm9wZXJ0eSkge1xuICAgICAgaWYgKC9eW2EtekEtWjAtOV9dKyQvLnRlc3QodGhpcy5wcm9wZXJ0eSkpIHtcbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJ2NvbHVtbi0nICsgdGhpcy5wcm9wZXJ0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9ICdjb2x1bW4tJyArIHRoaXMucHJvcGVydHkucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3R5bGVDbGFzcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3NPYmplY3QgPSB7XG4gICAgICAgIFt0aGlzLnN0eWxlQ2xhc3NdOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tkYXRhVGFibGVSb3ddJyxcbiAgdGVtcGxhdGU6IGA8dHIgY2xhc3M9XCJkYXRhLXRhYmxlLXJvd1wiXG4gICAgW3RpdGxlXT1cImdldFRvb2x0aXAoKVwiXG4gICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiZGF0YVRhYmxlLmdldFJvd0NvbG9yKGl0ZW0sIGluZGV4LCBfdGhpcylcIlxuICAgIFtjbGFzcy5yb3ctb2RkXT1cImluZGV4ICUgMiA9PT0gMFwiXG4gICAgW2NsYXNzLnJvdy1ldmVuXT1cImluZGV4ICUgMiA9PT0gMVwiXG4gICAgW2NsYXNzLnNlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICBbY2xhc3MuY2xpY2thYmxlXT1cImRhdGFUYWJsZS5zZWxlY3RPblJvd0NsaWNrXCI+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLmV4cGFuZENvbHVtblZpc2libGVcIj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJleHBhbmRlZCA9ICFleHBhbmRlZDsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgY2xhc3M9XCJyb3ctZXhwYW5kLWJ1dHRvblwiXG4gICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImV4cGFuZGVkXCJcbiAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiXG4gICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kUm93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCI+XG4gICAgICA8aSBbbmdDbGFzc109XCJ7J2ZhLWNhcmV0LXJpZ2h0JzogIWV4cGFuZGVkLCAnZmEtY2FyZXQtZG93bic6IGV4cGFuZGVkfVwiIGNsYXNzPVwiZmEgZmEtbGdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gIDwvdGQ+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLmluZGV4Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiaW5kZXgtY29sdW1uXCIgW3RleHRDb250ZW50XT1cImRpc3BsYXlJbmRleFwiPjwvdGQ+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLnNlbGVjdENvbHVtblZpc2libGVcIiBjbGFzcz1cInNlbGVjdC1jb2x1bW5cIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLnNlbGVjdFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF0YVRhYmxlLmxhYmVscy5zZWxlY3RSb3cucmVwbGFjZSgne2NlbGxfY29udGVudH0nLCAnJytpdGVtW2RhdGFUYWJsZS5wcmltYXJ5Q29sdW1uXSlcIi8+XG4gIDwvdGQ+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJkYXRhVGFibGUuY29sdW1uc1wiIGxldC1jb2x1bW4+XG4gICAgPHRoICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gPT09IGNvbHVtbi5wcm9wZXJ0eVwiIHNjb3BlPVwicm93XCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCIgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIlxuICAgICAgICBjbGFzcz1cImRhdGEtY29sdW1uXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sdW1uLmdldENlbGxDb2xvcihfdGhpcywgaW5kZXgpXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbdGV4dENvbnRlbnRdPVwiaXRlbVtjb2x1bW4ucHJvcGVydHldXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1uLCByb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICAgIDwvdGg+XG4gICAgPHRkICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gIT09IGNvbHVtbi5wcm9wZXJ0eVwiIFtoaWRlXT1cIiFjb2x1bW4udmlzaWJsZVwiIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCJcbiAgICAgICAgY2xhc3M9XCJkYXRhLWNvbHVtblwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbHVtbi5nZXRDZWxsQ29sb3IoX3RoaXMsIGluZGV4KVwiPlxuICAgICAgPGRpdiAqbmdJZj1cIiFjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW3RleHRDb250ZW50XT1cIml0ZW1bY29sdW1uLnByb3BlcnR5XVwiPjwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbiwgcm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgICA8L3RkPlxuICA8L25nLXRlbXBsYXRlPlxuPC90cj5cbjx0ciAqbmdJZj1cImRhdGFUYWJsZS5leHBhbmRhYmxlUm93c1wiIFtoaWRlXT1cIiFleHBhbmRlZFwiIGNsYXNzPVwicm93LWV4cGFuc2lvblwiPlxuICA8dGQgW2F0dHIuY29sc3Bhbl09XCJkYXRhVGFibGUuY29sdW1uQ291bnRcIj5cbiAgICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRhdGFUYWJsZS5leHBhbmRUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7cm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgPC90ZD5cbjwvdHI+XG5gLFxuICBzdHlsZXM6IFtgLnNlbGVjdC1jb2x1bW57dGV4dC1hbGlnbjpjZW50ZXJ9LnJvdy1leHBhbmQtYnV0dG9ue2JveC1zaXppbmc6Y29udGVudC1ib3g7YmFja2dyb3VuZDowIDA7Ym9yZGVyOjA7Y29sb3I6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjtmb250OmluaGVyaXQ7bGluZS1oZWlnaHQ6bm9ybWFsO292ZXJmbG93OnZpc2libGU7cGFkZGluZzouMTVyZW0gLjc1cmVtOy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZX0uY2xpY2thYmxle2N1cnNvcjpwb2ludGVyfXRoe2ZvbnQtd2VpZ2h0OmluaXRpYWx9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBfdGhpcyA9IHRoaXM7XG5cbiAgQElucHV0KCkgaXRlbTogYW55O1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIGV4cGFuZGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IFtdO1xuXG4gIC8vIHJvdyBzZWxlY3Rpb246XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWQpO1xuICB9XG5cbiAgLy8gb3RoZXI6XG4gIGdldCBkaXNwbGF5SW5kZXgoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5kaXNwbGF5UGFyYW1zLm9mZnNldCArIHRoaXMuaW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleCArIDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG9vbHRpcCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93VG9vbHRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnJvd1Rvb2x0aXAodGhpcy5pdGVtLCB0aGlzLCB0aGlzLmluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd0NsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmRhdGFUYWJsZS5yb3dDbGlja2VkKHRoaXMsIGV2ZW50KSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dEb3VibGVDbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGJsY2xpY2snLFxuICAgICAgICAgIChldmVudCkgPT4gdGhpcy5kYXRhVGFibGUucm93RG91YmxlQ2xpY2tlZCh0aGlzLCBldmVudCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy50eXBlJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUcmFuc2xhdGlvbnM6IERhdGFUYWJsZVRyYW5zbGF0aW9ucyA9IHtcbiAgaGVhZGVyUmVsb2FkOiAncmVsb2FkIHt0aXRsZX0gdGFibGUnLFxuICBoZWFkZXJDb2x1bW5TZWxlY3RvcjogJ2NvbHVtbiBzZWxlY3RvciAtIGFkZHMgb3IgcmVtb3ZlcyBjb2x1bW5zIGZyb20ge3RpdGxlfSB0YWJsZScsXG4gIGhlYWRlckNvbHVtblNlbGVjdG9yQWRkZWQ6ICd7Y29sdW1uX25hbWV9IGFkZGVkIHRvIHt0aXRsZX0gdGFibGUnLFxuICBoZWFkZXJDb2x1bW5TZWxlY3RvclJlbW92ZWQ6ICd7Y29sdW1uX25hbWV9IHJlbW92ZWQgZnJvbSB7dGl0bGV9IHRhYmxlJyxcbiAgaW5kZXhDb2x1bW46ICdpbmRleCcsXG4gIHNlbGVjdENvbHVtbjogJ3NlbGVjdCcsXG4gIHNlbGVjdFJvdzogJ3NlbGVjdCB7Y2VsbF9jb250ZW50fScsXG4gIHNlbGVjdEFsbFJvd3M6ICdzZWxlY3QgYWxsIHJvd3MnLFxuICBleHBhbmRDb2x1bW46ICdleHBhbmQnLFxuICBleHBhbmRSb3c6ICdleHBhbmQge2NlbGxfY29udGVudH0nLFxuICBzb3J0ZWRBc2NlbmRpbmc6ICd7dGl0bGV9IHRhYmxlIHNvcnRlZCBieSB7aGVhZGVyfSBhc2NlbmRpbmcnLFxuICBzb3J0ZWREZXNjZW5kaW5nOiAne3RpdGxlfSB0YWJsZSBzb3J0ZWQgYnkge2hlYWRlcn0gZGVzY2VuZGluZycsXG4gIHNvcnRBc2NlbmRpbmc6ICdhY3RpdmF0ZSB0byBzb3J0IGFzY2VuZGluZycsXG4gIHNvcnREZXNjZW5kaW5nOiAnYWN0aXZhdGUgdG8gc29ydCBkZXNjZW5kaW5nJyxcbiAgcGFnaW5hdGlvbkxpbWl0OiAnTGltaXQnLFxuICBwYWdpbmF0aW9uVGV4dDogJ1Jlc3VsdHM6IHtmcm9tfSB0byB7dG99IG9mIHt0b3RhbH0nLFxuICBwYWdpbmF0aW9uVG90YWxQYWdlczogJ29mJyxcbiAgZmlyc3RQYWdlOiAnZmlyc3QgcGFnZScsXG4gIHByZXZQYWdlOiAncHJldmlvdXMgcGFnZScsXG4gIHBhZ2VOdW1iZXJMYWJlbDogJ1BhZ2UnLFxuICBwYWdlTnVtYmVyOiAncGFnZSBudW1iZXInLFxuICBwYWdlTnVtYmVyTm9mTTogJyh7Tn0gb2Yge019KScsXG4gIG5leHRQYWdlOiAnbmV4dCBwYWdlJyxcbiAgbGFzdFBhZ2U6ICdsYXN0IHBhZ2UnLFxuICBsb2FkaW5nVGV4dDogJ3t0aXRsZX0gdGFibGUgaXMgbG9hZGluZycsXG4gIGxvYWRlZFRleHQ6ICd7dGl0bGV9IHRhYmxlIGxvYWRlZCdcbn07XG4iLCJleHBvcnQgdHlwZSBNb3ZlSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlciwgZHk6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBVcEhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBtb3ZlZDogYm9vbGVhbikgPT4gdm9pZDtcblxuLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYWcoZXZlbnQ6IE1vdXNlRXZlbnQsIHttb3ZlOiBtb3ZlLCB1cDogdXB9OiB7IG1vdmU6IE1vdmVIYW5kbGVyLCB1cD86IFVwSGFuZGxlciB9KSB7XG5cbiAgY29uc3Qgc3RhcnRYID0gZXZlbnQucGFnZVg7XG4gIGNvbnN0IHN0YXJ0WSA9IGV2ZW50LnBhZ2VZO1xuICBsZXQgeCA9IHN0YXJ0WDtcbiAgbGV0IHkgPSBzdGFydFk7XG4gIGxldCBtb3ZlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZHggPSBldnQucGFnZVggLSB4O1xuICAgIGNvbnN0IGR5ID0gZXZ0LnBhZ2VZIC0geTtcbiAgICB4ID0gZXZ0LnBhZ2VYO1xuICAgIHkgPSBldnQucGFnZVk7XG4gICAgaWYgKGR4IHx8IGR5KSB7XG4gICAgICBtb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbW92ZShldnQsIGR4LCBkeSwgeCwgeSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyB0byBhdm9pZCB0ZXh0IHNlbGVjdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgeCA9IGV2dC5wYWdlWDtcbiAgICB5ID0gZXZ0LnBhZ2VZO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGlmICh1cCkge1xuICAgICAgdXAoZXZlbnQsIHgsIHksIG1vdmVkKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG5pbXBvcnQgeyBSb3dDYWxsYmFjayB9IGZyb20gJy4uLy4uL3R5cGVzL3Jvdy1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZGVmYXVsdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RlZmF1bHQtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZHJhZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RyYWcnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7IFxuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtd3JhcHBlclwiPlxuICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIiByb2xlPVwic3RhdHVzXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1hdG9taWM9XCJmYWxzZVwiIGFyaWEtcmVsZXZhbnQ9XCJ0ZXh0XCI+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cInJlbG9hZE5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwicGFnaW5hdGlvbk5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwic29ydE5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb25cIj48L3NwYW4+XG4gIDwvc3Bhbj5cblxuICA8ZGF0YS10YWJsZS1oZWFkZXIgKm5nSWY9XCJoZWFkZXJcIj48L2RhdGEtdGFibGUtaGVhZGVyPlxuXG4gIDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWJveFwiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGRhdGEtdGFibGVcIiBbaWRdPVwiaWRcIj5cbiAgICAgIDxjYXB0aW9uIGNsYXNzPVwic3Itb25seVwiIFt0ZXh0Q29udGVudF09XCJ0aXRsZVwiPjwvY2FwdGlvbj5cbiAgICAgIDx0aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFleHBhbmRDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJleHBhbmQtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBbaGlkZV09XCIhaW5kZXhDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJpbmRleC1jb2x1bW4taGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImluZGV4Q29sdW1uSGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICA8L3RoPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIXNlbGVjdENvbHVtblZpc2libGVcIiBjbGFzcz1cInNlbGVjdC1jb2x1bW4taGVhZGVyXCI+XG4gICAgICAgICAgPGlucHV0IFtoaWRlXT1cIiFtdWx0aVNlbGVjdFwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0QWxsQ2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImxhYmVscy5zZWxlY3RBbGxSb3dzXCJcbiAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbHMuc2VsZWN0QWxsUm93c1wiLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1ucywgaW5kZXggYXMgaVwiICN0aFxuICAgICAgICAgICAgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCJcbiAgICAgICAgICAgIFtjbGFzcy5zb3J0YWJsZV09XCJjb2x1bW4uc29ydGFibGVcIlxuICAgICAgICAgICAgW2NsYXNzLnJlc2l6YWJsZV09XCJjb2x1bW4ucmVzaXphYmxlXCJcbiAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtc29ydF09XCJjb2x1bW4uc29ydGFibGUgPyAoY29sdW1uLnByb3BlcnR5ID09PSBzb3J0QnkgPyAoc29ydEFzYyA/ICdhc2NlbmRpbmcnIDogJ2Rlc2NlbmRpbmcnKSA6ICdub25lJykgOiBudWxsXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCIgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCIgW3N0eWxlLndpZHRoXT1cImNvbHVtbi53aWR0aCB8IHB4XCIgPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIiAoY2xpY2spPVwiaGVhZGVyQ2xpY2tlZChjb2x1bW4sICRldmVudClcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJjb2x1bW4uc29ydGFibGUgPyBpZCA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiJ2NvbC0nK2lkKyctJytpXCJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCIhc29ydEFzYyA/IGxhYmVscy5zb3J0QXNjZW5kaW5nIDogbGFiZWxzLnNvcnREZXNjZW5kaW5nXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbaWRdPVwiJ2NvbC0nK2lkKyctJytpXCJcbiAgICAgICAgICAgICAgICAgIFt0ZXh0Q29udGVudF09XCJjb2x1bW4uaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbn1cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi1zb3J0LWljb25cIiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiPlxuICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeVwiIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeVwiIGNsYXNzPVwiZmFcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZmEtc29ydC1hc2MnOiBzb3J0QXNjLCAnZmEtc29ydC1kZXNjJzogIXNvcnRBc2N9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4ucmVzaXphYmxlXCIgY2xhc3M9XCJjb2x1bW4tcmVzaXplLWhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInJlc2l6ZUNvbHVtblN0YXJ0KCRldmVudCwgY29sdW1uLCB0aClcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1ufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLXNvcnQtaWNvblwiICpuZ0lmPVwiY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeVwiIGNsYXNzPVwiZmEgZmEtc29ydCBjb2x1bW4tc29ydGFibGUtaWNvblwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICA8aSBbaGlkZV09XCJjb2x1bW4ucHJvcGVydHkgIT09IHNvcnRCeVwiIGNsYXNzPVwiZmFcIlxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGluZGV4PWluZGV4XCIgY2xhc3M9XCJkYXRhLXRhYmxlLXJvdy13cmFwcGVyXCJcbiAgICAgICAgICAgICBkYXRhVGFibGVSb3cgI3JvdyBbaXRlbV09XCJpdGVtXCIgW2luZGV4XT1cImluZGV4XCIgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uUm93U2VsZWN0Q2hhbmdlZChyb3cpXCI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5ICpuZ0lmPVwiaXRlbUNvdW50ID09PSAwICYmIG5vRGF0YU1lc3NhZ2VcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImNvbHVtbkNvdW50XCI+e3sgbm9EYXRhTWVzc2FnZSB9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5IGNsYXNzPVwic3Vic3RpdHV0ZS1yb3dzXCIgKm5nSWY9XCJwYWdpbmF0aW9uICYmIHN1YnN0aXR1dGVSb3dzXCI+XG4gICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3Vic3RpdHV0ZUl0ZW1zLCBsZXQgaW5kZXggPSBpbmRleFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1vZGRdPVwiKGluZGV4ICsgaXRlbXMubGVuZ3RoKSAlIDIgPT09IDBcIlxuICAgICAgICAgIFtjbGFzcy5yb3ctZXZlbl09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFleHBhbmRDb2x1bW5WaXNpYmxlXCI+PC90ZD5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFpbmRleENvbHVtblZpc2libGVcIj4mbmJzcDs8L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIXNlbGVjdENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCI+XG4gICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgIDxkaXYgY2xhc3M9XCJidXN5XCIgKm5nSWY9XCJzaG93UmVsb2FkaW5nICYmIHJlbG9hZGluZ1wiPlxuICAgICAgPGk+PGkgY2xhc3M9XCJmYSBmYS1zcGluIGZhLWNvZyBmYS0yeFwiPjwvaT48L2k+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkYXRhLXRhYmxlLXBhZ2luYXRpb24gKm5nSWY9XCJwYWdpbmF0aW9uXCIgW2xpbWl0c109XCJwYWdlTGltaXRzXCI+PC9kYXRhLXRhYmxlLXBhZ2luYXRpb24+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2A6aG9zdCAvZGVlcC8gLmRhdGEtdGFibGUudGFibGU+dGJvZHkrdGJvZHl7Ym9yZGVyLXRvcDpub25lfTpob3N0IC9kZWVwLyAuZGF0YS10YWJsZS50YWJsZSB0ZHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Omhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlPnRib2R5PnRyPnRkLDpob3N0IC9kZWVwLyAuZGF0YS10YWJsZT50aGVhZD50cj50aHtvdmVyZmxvdzpoaWRkZW59Omhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlPnRoZWFkPnRyPnRke2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNkZWUyZTZ9Omhvc3QgL2RlZXAvIC5yb3ctb2Rke2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNn0uZGF0YS10YWJsZSAuc3Vic3RpdHV0ZS1yb3dzPnRyOmhvdmVyLDpob3N0IC9kZWVwLyAuZGF0YS10YWJsZSAuZGF0YS10YWJsZS1yb3c6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWNlY2VjfS5kYXRhLXRhYmxle2JveC1zaGFkb3c6MCAwIDE1cHggI2VjZWNlYzt0YWJsZS1sYXlvdXQ6Zml4ZWR9LmNvbHVtbi1oZWFkZXJ7cG9zaXRpb246cmVsYXRpdmV9LmV4cGFuZC1jb2x1bW4taGVhZGVye3dpZHRoOjUwcHh9LnNlbGVjdC1jb2x1bW4taGVhZGVye3dpZHRoOjUwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9LmluZGV4LWNvbHVtbi1oZWFkZXJ7d2lkdGg6NDBweH0uY29sdW1uLWhlYWRlci5zb3J0YWJsZSBidXR0b257Ym94LXNpemluZzpjb250ZW50LWJveDtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6MDtjb2xvcjppbmhlcml0O2N1cnNvcjpwb2ludGVyO2ZvbnQ6aW5oZXJpdDtsaW5lLWhlaWdodDpub3JtYWw7b3ZlcmZsb3c6dmlzaWJsZTtwYWRkaW5nOjA7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3RleHQtYWxpZ246bGVmdH0uY29sdW1uLWhlYWRlciAuY29sdW1uLXNvcnQtaWNvbnttYXJnaW4tbGVmdDo4cHh9LmNvbHVtbi1oZWFkZXIucmVzaXphYmxlIC5jb2x1bW4tc29ydC1pY29ue21hcmdpbi1yaWdodDo4cHh9LmNvbHVtbi1oZWFkZXIgLmNvbHVtbi1zb3J0LWljb24gLmNvbHVtbi1zb3J0YWJsZS1pY29ue2NvbG9yOiNkM2QzZDN9LmNvbHVtbi1oZWFkZXIgLmNvbHVtbi1yZXNpemUtaGFuZGxle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bWFyZ2luOjA7cGFkZGluZzowO3dpZHRoOjhweDtoZWlnaHQ6MTAwJTtjdXJzb3I6Y29sLXJlc2l6ZX0uZGF0YS10YWJsZS1ib3h7cG9zaXRpb246cmVsYXRpdmV9LmJ1c3l7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjUpfS5idXN5Pml7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgRGF0YVRhYmxlUGFyYW1zLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX2l0ZW1Db3VudDtcblxuICBASW5wdXQoKVxuICBnZXQgaXRlbXMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIHNldCBpdGVtcyhpdGVtczogYW55W10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIC8vIG5vIG5lZWQgdG8gY2FsbCBub3RpZmllci5uZXh0KCkgYmVjYXVzZSBfb25SZWxvYWRGaW5pc2hlZCgpXG4gICAgLy8gd2lsbCBjaGFuZ2UgcmVsb2FkZWQgdmFsdWUgY2F1c2luZyBub3RpZmllci5uZXh0KCkgdG8gYmUgY2FsbGVkIGltcGxpY2l0bHkuXG4gICAgdGhpcy5fb25SZWxvYWRGaW5pc2hlZCgpO1xuICB9XG5cblxuICBASW5wdXQoKVxuICBnZXQgaXRlbUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1Db3VudDtcbiAgfVxuXG4gIHNldCBpdGVtQ291bnQoY291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuX2l0ZW1Db3VudCA9IGNvdW50O1xuICAgIHRoaXMubm90aWZpZXIubmV4dCgpO1xuICB9XG5cbiAgLy8gVUkgY29tcG9uZW50czpcbiAgQENvbnRlbnRDaGlsZHJlbihEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpIGNvbHVtbnM6IFF1ZXJ5TGlzdDxEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU+O1xuICBAVmlld0NoaWxkcmVuKERhdGFUYWJsZVJvd0NvbXBvbmVudCkgcm93czogUXVlcnlMaXN0PERhdGFUYWJsZVJvd0NvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUV4cGFuZCcpIGV4cGFuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vIE9uZS10aW1lIG9wdGlvbmFsIGJpbmRpbmdzIHdpdGggZGVmYXVsdCB2YWx1ZXM6XG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGhlYWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBpbmRleENvbHVtbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uSGVhZGVyID0gJyc7XG4gIEBJbnB1dCgpIHJvd0NvbG9yczogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHJvd1Rvb2x0aXA6IFJvd0NhbGxiYWNrO1xuICBASW5wdXQoKSBzZWxlY3RDb2x1bW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbXVsdGlTZWxlY3QgPSB0cnVlO1xuICBASW5wdXQoKSBzdWJzdGl0dXRlUm93cyA9IHRydWU7XG4gIEBJbnB1dCgpIGV4cGFuZGFibGVSb3dzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsczogRGF0YVRhYmxlVHJhbnNsYXRpb25zO1xuICBASW5wdXQoKSBzZWxlY3RPblJvd0NsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9SZWxvYWQgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93UmVsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vRGF0YU1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgcGFnZUxpbWl0czogbnVtYmVyW10gPSBbMTAsIDI1LCA1MCwgMTAwLCAyNTBdO1xuICBASW5wdXQoKSBwcmltYXJ5Q29sdW1uID0gJyc7XG5cbiAgLy8gcmVsb2FkIGVtaXR0ZXJcbiAgQE91dHB1dCgpIHJlbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBldmVudCBoYW5kbGVyczpcbiAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcm93RG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoZWFkZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNlbGxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gVUkgc3RhdGUgd2l0aG91dCBpbnB1dDpcbiAgaW5kZXhDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuICBzZWxlY3RDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuICBleHBhbmRDb2x1bW5WaXNpYmxlOiBib29sZWFuO1xuXG4gIC8vIGFkYSBub3RpZmljYXRpb25zLlxuICByZWxvYWROb3RpZmljYXRpb246IHN0cmluZztcbiAgcGFnaW5hdGlvbk5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBzb3J0Tm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIGNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uOiBzdHJpbmc7XG5cbiAgX2Rpc3BsYXlQYXJhbXMgPSA8RGF0YVRhYmxlUGFyYW1zPnt9OyAvLyBwYXJhbXMgb2YgdGhlIGxhc3QgZmluaXNoZWQgcmVsb2FkXG5cbiAgc3ViamVjdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHN1YmplY3QkOiBTdWJzY3JpcHRpb247XG5cbiAgbm90aWZpZXIgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBub3RpZmllciQ6IFN1YnNjcmlwdGlvbjtcblxuICAvLyBzZWxlY3Rpb246XG4gIHNlbGVjdGVkUm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQ7XG4gIHNlbGVjdGVkUm93czogRGF0YVRhYmxlUm93Q29tcG9uZW50W10gPSBbXTtcblxuICBNYXRoOiBhbnk7XG4gIGlkID0gYGRhdGF0YWJsZS0ke25leHRJZCsrfWA7XG5cbiAgLy8gc2VsZWN0IGFsbCBjaGVja2JveCBmbGFnXG4gIHByaXZhdGUgX3NlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7XG5cbiAgLy8gY29sdW1uIHJlc2l6aW5nOlxuICBwcml2YXRlIF9yZXNpemVJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgcmVzaXplTGltaXQgPSAzMDtcblxuICAvLyBSZWxvYWRpbmc6XG4gIF9yZWxvYWRpbmcgPSBmYWxzZTtcblxuICBnZXQgcmVsb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWxvYWRpbmc7XG4gIH1cblxuICBzZXQgcmVsb2FkaW5nKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbG9hZGluZyA9IHZhbDtcbiAgICB0aGlzLm5vdGlmaWVyLm5leHQoKTtcbiAgfVxuXG4gIC8vIFVJIHN0YXRlOiB2aXNpYmxlIGdldC9zZXQgZm9yIHRoZSBvdXRzaWRlIHdpdGggQElucHV0IGZvciBvbmUtdGltZSBpbml0aWFsIHZhbHVlc1xuICBwcml2YXRlIF9zb3J0Qnk6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgc29ydEJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIHNldCBzb3J0QnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvcnRCeSA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9zb3J0QXNjID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgc29ydEFzYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEFzYztcbiAgfVxuXG4gIHNldCBzb3J0QXNjKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc29ydEFzYyA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXQgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBvZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICB9XG5cbiAgc2V0IG9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpbWl0ID0gMTA7XG5cbiAgQElucHV0KClcbiAgZ2V0IGxpbWl0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0O1xuICB9XG5cbiAgc2V0IGxpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9saW1pdCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVkIHByb3BlcnR5OlxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtQ291bnQgIT09IDAgPyBNYXRoLmZsb29yKHRoaXMub2Zmc2V0IC8gdGhpcy5saW1pdCkgKyAxIDogMDtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlKSB7XG4gICAgdGhpcy5vZmZzZXQgPSAodmFsdWUgLSAxKSAqIHRoaXMubGltaXQ7XG4gIH1cblxuICBnZXQgbGFzdFBhZ2UoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLml0ZW1Db3VudCAvIHRoaXMubGltaXQpO1xuICB9XG5cbiAgLy8gc2V0dGluZyBtdWx0aXBsZSBvYnNlcnZhYmxlIHByb3BlcnRpZXMgc2ltdWx0YW5lb3VzbHlcbiAgc29ydChzb3J0Qnk6IHN0cmluZywgYXNjOiBib29sZWFuKSB7XG4gICAgdGhpcy5zb3J0QnkgPSBzb3J0Qnk7XG4gICAgdGhpcy5zb3J0QXNjID0gYXNjO1xuICB9XG5cbiAgLy8gaW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pbml0RGVmYXVsdFZhbHVlcygpO1xuICAgIHRoaXMuX2luaXREZWZhdWx0Q2xpY2tFdmVudHMoKTtcbiAgICB0aGlzLl91cGRhdGVEaXNwbGF5UGFyYW1zKCk7XG5cbiAgICBpZiAodGhpcy5wYWdlTGltaXRzLmluZGV4T2YodGhpcy5saW1pdCkgPCAwKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gdGhpcy5wYWdlTGltaXRzWzBdO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxzID0gey4uLmRlZmF1bHRUcmFuc2xhdGlvbnMsIC4uLnRoaXMubGFiZWxzfTtcblxuICAgIGlmICh0aGlzLmF1dG9SZWxvYWQpIHtcbiAgICAgIHRoaXMucmVsb2FkSXRlbXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmaWVyJCA9IHRoaXMubm90aWZpZXIuc3Vic2NyaWJlKCgpID0+IHRoaXMuX25vdGlmeSgpKTtcbiAgICB0aGlzLnN1YmplY3QkID0gdGhpcy5zdWJqZWN0LnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbG9hZEl0ZW1zKCkpO1xuXG4gIH1cblxuICBwcml2YXRlIF9pbml0RGVmYXVsdFZhbHVlcygpIHtcbiAgICB0aGlzLmluZGV4Q29sdW1uVmlzaWJsZSA9IHRoaXMuaW5kZXhDb2x1bW47XG4gICAgdGhpcy5zZWxlY3RDb2x1bW5WaXNpYmxlID0gdGhpcy5zZWxlY3RDb2x1bW47XG4gICAgdGhpcy5leHBhbmRDb2x1bW5WaXNpYmxlID0gdGhpcy5leHBhbmRhYmxlUm93cztcbiAgfVxuXG4gIHByaXZhdGUgX2luaXREZWZhdWx0Q2xpY2tFdmVudHMoKSB7XG4gICAgdGhpcy5oZWFkZXJDbGljay5zdWJzY3JpYmUoXG4gICAgICAodGFibGVFdmVudDogeyBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgZXZlbnQ6IEV2ZW50IH0pID0+IHRoaXMuc29ydENvbHVtbih0YWJsZUV2ZW50LmNvbHVtbikpO1xuICAgIGlmICh0aGlzLnNlbGVjdE9uUm93Q2xpY2spIHtcbiAgICAgIHRoaXMucm93Q2xpY2suc3Vic2NyaWJlKFxuICAgICAgICAodGFibGVFdmVudDogeyByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50IH0pID0+IHRhYmxlRXZlbnQucm93LnNlbGVjdGVkID0gIXRhYmxlRXZlbnQucm93LnNlbGVjdGVkKTtcbiAgICB9XG4gIH1cblxuICByZWxvYWRJdGVtcygpIHtcbiAgICB0aGlzLnJlbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5yZWxvYWQuZW1pdCh0aGlzLl9nZXRSZW1vdGVQYXJhbWV0ZXJzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25SZWxvYWRGaW5pc2hlZCgpIHtcbiAgICBpZiAodGhpcy5yZWxvYWRpbmcpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlQYXJhbXMoKTtcbiAgICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBnZXQgZGlzcGxheVBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVBhcmFtcztcbiAgfVxuXG4gIF91cGRhdGVEaXNwbGF5UGFyYW1zKCkge1xuICAgIHRoaXMuX2Rpc3BsYXlQYXJhbXMgPSB7XG4gICAgICBzb3J0Qnk6IHRoaXMuc29ydEJ5LFxuICAgICAgc29ydEFzYzogdGhpcy5zb3J0QXNjLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHJvd0NsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93Q2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIHJvd0RvdWJsZUNsaWNrZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucm93RG91YmxlQ2xpY2suZW1pdCh7cm93LCBldmVudH0pO1xuICB9XG5cbiAgcHVibGljIGhlYWRlckNsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCkge1xuICAgIGlmICghdGhpcy5fcmVzaXplSW5Qcm9ncmVzcykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5oZWFkZXJDbGljay5lbWl0KHtjb2x1bW4sIGV2ZW50fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTsgLy8gdGhpcyBpcyBiZWNhdXNlIEkgY2FuJ3QgcHJldmVudCBjbGljayBmcm9tIG1vdXN1cCBvZiB0aGUgZHJhZyBlbmRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmNlbGxDbGljay5lbWl0KHtyb3csIGNvbHVtbiwgZXZlbnR9KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uczpcbiAgcHJpdmF0ZSBfZ2V0UmVtb3RlUGFyYW1ldGVycygpOiBEYXRhVGFibGVQYXJhbXMge1xuICAgIGNvbnN0IHBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307XG5cbiAgICBpZiAodGhpcy5zb3J0QnkpIHtcbiAgICAgIHBhcmFtcy5zb3J0QnkgPSB0aGlzLnNvcnRCeTtcbiAgICAgIHBhcmFtcy5zb3J0QXNjID0gdGhpcy5zb3J0QXNjO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBwYXJhbXMub2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICBwYXJhbXMubGltaXQgPSB0aGlzLmxpbWl0O1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29sdW1uKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSB7XG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSkge1xuICAgICAgY29uc3QgYXNjZW5kaW5nID0gdGhpcy5zb3J0QnkgPT09IGNvbHVtbi5wcm9wZXJ0eSA/ICF0aGlzLnNvcnRBc2MgOiB0cnVlO1xuICAgICAgdGhpcy5zb3J0KGNvbHVtbi5wcm9wZXJ0eSwgYXNjZW5kaW5nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29sdW1uQ291bnQoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb3VudCArPSB0aGlzLmluZGV4Q29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIGNvdW50ICs9IHRoaXMuc2VsZWN0Q29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIGNvdW50ICs9IHRoaXMuZXhwYW5kQ29sdW1uVmlzaWJsZSA/IDEgOiAwO1xuICAgIHRoaXMuY29sdW1ucy50b0FycmF5KCkuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgY291bnQgKz0gY29sdW1uLnZpc2libGUgPyAxIDogMDtcbiAgICB9KTtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Um93Q29sb3IoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCByb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuICAgIGlmICh0aGlzLnJvd0NvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKDxSb3dDYWxsYmFjaz50aGlzLnJvd0NvbG9ycykoaXRlbSwgcm93LCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdEFsbENoZWNrYm94KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RBbGxDaGVja2JveDtcbiAgfVxuXG4gIHNldCBzZWxlY3RBbGxDaGVja2JveCh2YWx1ZSkge1xuICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94ID0gdmFsdWU7XG4gICAgdGhpcy5fb25TZWxlY3RBbGxDaGFuZ2VkKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMucm93cy50b0FycmF5KCkuZm9yRWFjaChyb3cgPT4gcm93LnNlbGVjdGVkID0gdmFsdWUpO1xuICB9XG5cbiAgb25Sb3dTZWxlY3RDaGFuZ2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50KSB7XG5cbiAgICAvLyBtYWludGFpbiB0aGUgc2VsZWN0ZWRSb3cocykgdmlld1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KTtcbiAgICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgaW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICAgIH0gZWxzZSBpZiAoIXJvdy5zZWxlY3RlZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyb3cuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZFJvdyA9PT0gcm93KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkUm93O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVuc2VsZWN0IGFsbCBvdGhlciByb3dzOlxuICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgIXRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMucm93cy50b0FycmF5KCkuZmlsdGVyKHJvd18gPT4gcm93Xy5zZWxlY3RlZCkuZm9yRWFjaChyb3dfID0+IHtcbiAgICAgICAgaWYgKHJvd18gIT09IHJvdykgeyAvLyBhdm9pZCBlbmRsZXNzIGxvb3BcbiAgICAgICAgICByb3dfLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIG90aGVyOlxuXG4gIGdldCBzdWJzdGl0dXRlSXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogdGhpcy5kaXNwbGF5UGFyYW1zLmxpbWl0IC0gdGhpcy5pdGVtcy5sZW5ndGh9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydChldmVudDogTW91c2VFdmVudCwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fcmVzaXplSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0T2Zmc2V0ID0gY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCAtIGV2ZW50LnBhZ2VYO1xuICAgIGRyYWcoZXZlbnQsIHtcbiAgICAgIG1vdmU6IChtb3ZlRXZlbnQ6IE1vdXNlRXZlbnQsIGR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50LCBkeCkpIHtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBzdGFydE9mZnNldCArIG1vdmVFdmVudC5wYWdlWCArIGR4O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNSZXNpemVJbkxpbWl0KGNvbHVtbkVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkeDogbnVtYmVyKSB7XG4gICAgLyogVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBDU1MgbWluLXdpZHRoIGRpZG4ndCB3b3JrIG9uIHRhYmxlLWxheW91dDogZml4ZWQuXG4gICAgICAgICBXaXRob3V0IHRoZSBsaW1pdHMsIHJlc2l6aW5nIGNhbiBtYWtlIHRoZSBuZXh0IGNvbHVtbiBkaXNhcHBlYXIgY29tcGxldGVseSxcbiAgICAgICAgIGFuZCBldmVuIGluY3JlYXNlIHRoZSB0YWJsZSB3aWR0aC4gVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gc3VmZmVycyBmcm9tIHRoZSBmYWN0LFxuICAgICAgICAgdGhhdCBvZmZzZXRXaWR0aCBzb21ldGltZXMgY29udGFpbnMgb3V0LW9mLWRhdGUgdmFsdWVzLiAqL1xuICAgIGlmICgoZHggPCAwICYmIChjb2x1bW5FbGVtZW50Lm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpIHx8XG4gICAgICAhY29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgLy8gcmVzaXppbmcgZG9lc24ndCBtYWtlIHNlbnNlIGZvciB0aGUgbGFzdCB2aXNpYmxlIGNvbHVtblxuICAgICAgKGR4ID49IDAgJiYgKCg8SFRNTEVsZW1lbnQ+IGNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmltYXJ5Q29sdW1uID09PSAnJykge1xuICAgICAgdGhpcy5wcmltYXJ5Q29sdW1uID0gKHRoaXMuY29sdW1ucy5maXJzdCBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpLnByb3BlcnR5O1xuICAgIH1cbiAgfVxuXG4gIF9ub3RpZnkoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMucmVsb2FkaW5nO1xuXG4gICAgdGhpcy5yZWxvYWROb3RpZmljYXRpb24gPSBsb2FkaW5nID9cbiAgICAgIHRoaXMubGFiZWxzLmxvYWRpbmdUZXh0LnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKSA6XG4gICAgICB0aGlzLmxhYmVscy5sb2FkZWRUZXh0LnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKTtcblxuICAgIGlmICghbG9hZGluZykge1xuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25Ob3RpZmljYXRpb24gPSB0aGlzLmxhYmVscy5wYWdpbmF0aW9uVGV4dFxuICAgICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCAnJyArIChNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KSAhPT0gMCA/IHRoaXMub2Zmc2V0ICsgMSA6ICcwJykpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCAnJyArIChNYXRoLm1pbih0aGlzLm9mZnNldCArIHRoaXMubGltaXQsIHRoaXMuaXRlbUNvdW50KSkpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCAnJyArIHRoaXMuaXRlbUNvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc29ydEJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5maW5kKGNvbHVtbiA9PiBjb2x1bW4ucHJvcGVydHkgPT09IHRoaXMuc29ydEJ5KSBhcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICh0aGlzLnNvcnRBc2MgPyB0aGlzLmxhYmVscy5zb3J0ZWRBc2NlbmRpbmcgOiB0aGlzLmxhYmVscy5zb3J0ZWREZXNjZW5kaW5nKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSlcbiAgICAgICAgICAucmVwbGFjZSgne2hlYWRlcn0nLCBjb2wuaGVhZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc29ydE5vdGlmaWNhdGlvbiA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViamVjdCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmaWVyJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWhlYWRlclwiPlxuICA8cCBjbGFzcz1cImg0IHRpdGxlXCIgKm5nSWY9XCJkYXRhVGFibGUuc2hvd1RpdGxlXCIgW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS50aXRsZVwiPjwvcD5cbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1wYW5lbFwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSByZWZyZXNoLWJ1dHRvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGF0YVRhYmxlLnJlbG9hZEl0ZW1zKClcIlxuICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyUmVsb2FkLnJlcGxhY2UoJ3t0aXRsZX0nLCBkYXRhVGFibGUudGl0bGUpXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZnJlc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGNvbHVtbi1zZWxlY3Rvci1idXR0b25cIiBbY2xhc3MuYWN0aXZlXT1cImNvbHVtblNlbGVjdG9yT3BlblwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWhhc3BvcHVwXT1cInRydWVcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJjb2x1bW5TZWxlY3Rvck9wZW5cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNvbHVtblNlbGVjdG9yT3BlbiA9ICFjb2x1bW5TZWxlY3Rvck9wZW47XCJcbiAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yLnJlcGxhY2UoJ3t0aXRsZX0nLCBkYXRhVGFibGUudGl0bGUpXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWxpc3RcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZWxlY3Rvci13cmFwcGVyXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uU2VsZWN0b3JPcGVuXCIgY2xhc3M9XCJjb2x1bW4tc2VsZWN0b3ItYm94IHBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiZGF0YVRhYmxlLmV4cGFuZGFibGVSb3dzXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBjaGVja2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJkYXRhVGFibGUuZXhwYW5kQ29sdW1uVmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5leHBhbmRDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiZGF0YVRhYmxlLmluZGV4Q29sdW1uXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBjaGVja2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJkYXRhVGFibGUuaW5kZXhDb2x1bW5WaXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLmluZGV4Q29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSAqbmdJZj1cImRhdGFUYWJsZS5zZWxlY3RDb2x1bW5cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5zZWxlY3RDb2x1bW5WaXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnNlbGVjdENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWl0ZW0gbGV0LWk9XCJpbmRleFwiIFtuZ0Zvck9mXT1cImRhdGFUYWJsZS5jb2x1bW5zXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhVGFibGUucHJpbWFyeUNvbHVtbiAhPT0gaXRlbS5wcm9wZXJ0eVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiaXRlbS52aXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cIml0ZW0uaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLmRhdGEtdGFibGUtaGVhZGVye21pbi1oZWlnaHQ6MjVweDttYXJnaW4tYm90dG9tOjEwcHh9LnRpdGxle2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjo1cHggMCAwIDVweH0uYnV0dG9uLXBhbmVse2Zsb2F0OnJpZ2h0fS5idXR0b24tcGFuZWwgYnV0dG9ue291dGxpbmU6MCFpbXBvcnRhbnR9LmNvbHVtbi1zZWxlY3Rvci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlfS5jb2x1bW4tc2VsZWN0b3ItYm94e2JveC1zaGFkb3c6MCAwIDEwcHggI2QzZDNkMztiYWNrZ3JvdW5kOiNmZmY7d2lkdGg6MTUwcHg7cGFkZGluZzoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjFweDt6LWluZGV4OjEwNjB9LmNvbHVtbi1zZWxlY3Rvci1ib3ggLmxpc3QtZ3JvdXAtaXRlbS5jb2x1bW4tc2VsZWN0b3ItY29sdW1ue3BhZGRpbmc6LjVyZW0gLjI1cmVtfS5jb2x1bW4tc2VsZWN0b3ItYm94IC5saXN0LWdyb3VwLWl0ZW0uY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBsYWJlbHttYXJnaW4tYm90dG9tOjB9LmNvbHVtbi1zZWxlY3Rvci1ib3ggLmxpc3QtZ3JvdXAtaXRlbS5jb2x1bW4tc2VsZWN0b3ItY29sdW1uIGlucHV0e21hcmdpbi1yaWdodDo0cHg7Zm9udC1zdHlsZTppdGFsaWN9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50IHtcblxuICBjb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSkgb25DbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKSBvbktleVVwSGFuZGxlcihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCAoZXZlbnQua2V5Q29kZSA9PT0gOSAmJiAhdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkpIHtcbiAgICAgIHRoaXMuY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaXNDaGVja2VkID0gKDxIVE1MSW5wdXRFbGVtZW50PiBldmVudC50YXJnZXQpLmNoZWNrZWQ7XG4gICAgY29uc3QgY29sdW1uTmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD4gZXZlbnQudGFyZ2V0KS5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICBjb25zdCBpbnRlcnBvbGF0ZVBhcmFtcyA9IHtcbiAgICAgICdjb2x1bW5fbmFtZSc6IGNvbHVtbk5hbWUsXG4gICAgICAndGl0bGUnOiB0aGlzLmRhdGFUYWJsZS50aXRsZVxuICAgIH07XG5cbiAgICB0aGlzLmRhdGFUYWJsZS5jb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvbiA9IChpc0NoZWNrZWQgPyB0aGlzLmRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyQ29sdW1uU2VsZWN0b3JBZGRlZCA6XG4gICAgICB0aGlzLmRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyQ29sdW1uU2VsZWN0b3JSZW1vdmVkKVxuICAgICAgLnJlcGxhY2UoJ3tjb2x1bW5fbmFtZX0nLCBpbnRlcnBvbGF0ZVBhcmFtcy5jb2x1bW5fbmFtZSlcbiAgICAgIC5yZXBsYWNlKCd7dGl0bGV9JywgaW50ZXJwb2xhdGVQYXJhbXMudGl0bGUpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcmFuZ2VcIj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uVGV4dFxuICAgICAgICAucmVwbGFjZSgne2Zyb219JywgdGhpcy5NYXRoLmNlaWwoZGF0YVRhYmxlLml0ZW1Db3VudCAvIGRhdGFUYWJsZS5saW1pdCkgIT09IDAgPyBkYXRhVGFibGUub2Zmc2V0ICsgMSArICcnIDogJzAnKVxuICAgICAgICAucmVwbGFjZSgne3RvfScsIHRoaXMuTWF0aC5taW4oZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCwgZGF0YVRhYmxlLml0ZW1Db3VudCkgKyAnJylcbiAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCBkYXRhVGFibGUuaXRlbUNvdW50ICsgJycpXCI+PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tY29udHJvbGxlcnMgcGFnaW5hdGlvbi1ib3ggZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tbGltaXQgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImlkICsgJy1wYWdlLWxpbWl0J1wiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25MaW1pdFwiPjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2VsZWN0IFtpZF09XCJpZCArICctcGFnZS1saW1pdCdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwibGltaXRcIiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLml0ZW1Db3VudCA9PT0gMFwiPlxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGwgb2YgbGltaXRzXCIgW3ZhbHVlXT1cImxcIj57eyBsIH19PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcGFnZXMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkYXRhVGFibGUub2Zmc2V0IDw9IDBcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZpcnN0KClcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWZpcnN0cGFnZVwiXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmZpcnN0UGFnZVwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5vZmZzZXQgPD0gMFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJwYWdlQmFjaygpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1wcmV2cGFnZVwiXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLnByZXZQYWdlXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgW2F0dHIuZm9yXT1cImlkICsgJy1wYWdlLWlucHV0J1wiPlxuICAgICAgICAgICAgICB7eyBkYXRhVGFibGUubGFiZWxzLnBhZ2VOdW1iZXJMYWJlbCB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgI3BhZ2VJbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgW2lkXT1cImlkICsgJy1wYWdlLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbWluPVwiMVwiIHN0ZXA9XCIxXCIgbWF4PVwie3ttYXhQYWdlfX1cIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLml0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cInBhZ2VcIlxuICAgICAgICAgICAgICAgICAoYmx1cik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInZhbGlkYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAoa2V5dXAuZXNjKT1cInBhZ2VJbnB1dC52YWx1ZSA9IHBhZ2VcIlxuICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTm9mTS5yZXBsYWNlKCd7Tn0nLCAnJytwYWdlKS5yZXBsYWNlKCd7TX0nLCAnJyttYXhQYWdlKVwiXG4gICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25Ub3RhbFBhZ2VzIH19Jm5ic3A7e3sgZGF0YVRhYmxlLmxhc3RQYWdlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIoZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCkgPj0gZGF0YVRhYmxlLml0ZW1Db3VudFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJwYWdlRm9yd2FyZCgpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1uZXh0cGFnZVwiXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLm5leHRQYWdlXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUxhc3QoKVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tbGFzdHBhZ2VcIlxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5sYXN0UGFnZVwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLnBhZ2luYXRpb24tY29udHJvbGxlcnMgc2VsZWN0e21pbi13aWR0aDo1cmVtO3RleHQtYWxpZ246cmlnaHR9LnBhZ2luYXRpb24tcGFnZXM+KnttYXJnaW46MCAuMTVyZW19LnBhZ2luYXRpb24tbGltaXR7bWFyZ2luLXJpZ2h0OjEuNXJlbX0ucGFnaW5hdGlvbi1ib3ggYnV0dG9ue291dGxpbmU6MCFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB7XG5cbiAgaWQgPSBgcGFnaW5hdGlvbi0ke25leHRJZCsrfWA7XG5cbiAgQFZpZXdDaGlsZCgncGFnZUlucHV0JykgcGFnZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gIE1hdGg6IGFueTtcblxuICBASW5wdXQoKSBsaW1pdHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpKSBwdWJsaWMgZGF0YVRhYmxlOiBEYXRhVGFibGVDb21wb25lbnQpIHtcbiAgICB0aGlzLk1hdGggPSBNYXRoO1xuICB9XG5cbiAgcGFnZUJhY2soKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0IC09IE1hdGgubWluKHRoaXMuZGF0YVRhYmxlLmxpbWl0LCB0aGlzLmRhdGFUYWJsZS5vZmZzZXQpO1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPD0gMCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cbiAgcGFnZUZvcndhcmQoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ICs9IHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICAgIGlmICgodGhpcy5kYXRhVGFibGUub2Zmc2V0ICsgdGhpcy5kYXRhVGFibGUubGltaXQpID49IHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHBhZ2VGaXJzdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPSAwO1xuICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHBhZ2VMYXN0KCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCA9ICh0aGlzLm1heFBhZ2UgLSAxKSAqIHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICAgIGlmICgodGhpcy5kYXRhVGFibGUub2Zmc2V0ICsgdGhpcy5kYXRhVGFibGUubGltaXQpID49IHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhQYWdlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5kYXRhVGFibGUuaXRlbUNvdW50IC8gdGhpcy5kYXRhVGFibGUubGltaXQpO1xuICB9XG5cbiAgZ2V0IGxpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgfVxuXG4gIHNldCBsaW1pdCh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlLmxpbWl0ID0gK3ZhbHVlO1xuICAgIC8vIHJldHVybmluZyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgIHRoaXMucGFnZSA9IDE7XG4gIH1cblxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUucGFnZTtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhVGFibGUucGFnZSA9ICt2YWx1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGV2ZW50KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2UgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID4gdGhpcy5tYXhQYWdlKSA/IHRoaXMubWF4UGFnZSA6IChuZXdWYWx1ZSA8IDEgKSA/IDEgOiBuZXdWYWx1ZTtcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHRoaXMucGFnZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIG1vZHVsZXNcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHV0aWxzXG5pbXBvcnQgeyBIaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi91dGlscy9oaWRlJztcbmltcG9ydCB7IE1pblBpcGUgfSBmcm9tICcuL3V0aWxzL21pbic7XG5pbXBvcnQgeyBQaXhlbENvbnZlcnRlciB9IGZyb20gJy4vdXRpbHMvcHgnO1xuLy8gdHlwZXMgJiB0b29sc1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi90eXBlcy9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy50eXBlJztcbmltcG9ydCB7IENlbGxDYWxsYmFjayB9IGZyb20gJy4vdHlwZXMvY2VsbC1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IFJvd0NhbGxiYWNrIH0gZnJvbSAnLi90eXBlcy9yb3ctY2FsbGJhY2sudHlwZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSZXNvdXJjZSB9IGZyb20gJy4vdG9vbHMvZGF0YS10YWJsZS1yZXNvdXJjZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYXJhbXMgfSBmcm9tICcuL3R5cGVzL2RhdGEtdGFibGUtcGFyYW1zLnR5cGUnO1xuLy8gY29tcG9uZW50cyAmIGRpcmVjdGl2ZXNcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IHtcbiAgRGF0YVRhYmxlQ29tcG9uZW50LCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIERhdGFUYWJsZVJvd0NvbXBvbmVudCwgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCwgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICBEYXRhVGFibGVSZXNvdXJjZSxcbiAgRGF0YVRhYmxlUGFyYW1zLCBEYXRhVGFibGVUcmFuc2xhdGlvbnMsXG4gIENlbGxDYWxsYmFjaywgUm93Q2FsbGJhY2tcbn07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERhdGFUYWJsZUNvbXBvbmVudCwgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZVJvd0NvbXBvbmVudCwgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCwgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICAgIFBpeGVsQ29udmVydGVyLCBIaWRlRGlyZWN0aXZlLCBNaW5QaXBlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0RhdGFUYWJsZUNvbXBvbmVudCwgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neFRhYmxlTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4VGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAg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