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
                    template: "<div class=\"row\">\n  <div class=\"pagination-range col\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"pagination-limit col-md-3\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n        </div>\n        <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\" [disabled]=\"dataTable.itemCount === 0\">\n          <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"pagination-pages offset-md-3 col-md-6\">\n      <div class=\"pagination-page\">\n        <div class=\"input-group\">\n          <button [disabled]=\"dataTable.offset <= 0\"\n                  (click)=\"pageFirst()\"\n                  class=\"btn btn-default pagination-firstpage\"\n                  [title]=\"dataTable.labels.firstPage\"\n                  [attr.aria-controls]=\"dataTable.id\">\n            <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n          </button>\n          <button [disabled]=\"dataTable.offset <= 0\"\n                  (click)=\"pageBack()\"\n                  class=\"btn btn-default pagination-prevpage\"\n                  [title]=\"dataTable.labels.prevPage\"\n                  [attr.aria-controls]=\"dataTable.id\">\n            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n          </button>\n\n          <div class=\"input-group-prepend d-sm-block d-none\">\n            <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n              {{ dataTable.labels.pageNumberLabel }}\n            </label>\n          </div>\n          <input #pageInput type=\"number\"\n                 [id]=\"id + '-page-input'\"\n                 class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n                 [disabled]=\"dataTable.itemCount === 0\"\n                 [ngModel]=\"page\"\n                 (blur)=\"validate($event)\"\n                 (keyup.enter)=\"validate($event)\"\n                 (keyup.esc)=\"pageInput.value = page\"\n                 [title]=\"dataTable.labels.pageNumber + ' ' +\n                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)\"\n                 [attr.aria-controls]=\"dataTable.id\"/>\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n          </div>\n\n          <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                  (click)=\"pageForward()\"\n                  class=\"btn btn-default pagination-nextpage\"\n                  [title]=\"dataTable.labels.nextPage\"\n                  [attr.aria-controls]=\"dataTable.id\">\n            <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n          </button>\n          <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                  (click)=\"pageLast()\"\n                  class=\"btn btn-default pagination-lastpage\"\n                  [title]=\"dataTable.labels.lastPage\"\n                  [attr.aria-controls]=\"dataTable.id\">\n            <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n</div>\n",
                    styles: [".pagination-controllers select{text-align:right}.pagination-box button{outline:0!important}"]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wZXRlY2gtbmd4LXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi91dGlscy9oaWRlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi91dGlscy9taW4udHMiLCJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvbGliL3V0aWxzL3B4LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi90b29scy9kYXRhLXRhYmxlLXJlc291cmNlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi9kaXJlY3RpdmVzL2NvbHVtbi9jb2x1bW4uZGlyZWN0aXZlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi90eXBlcy9kZWZhdWx0LXRyYW5zbGF0aW9ucy50eXBlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi91dGlscy9kcmFnLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS9saWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlL2xpYi9uZ3gtdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gaXNCbGFuayhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIEhpZGVEaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX3ByZXZDb25kaXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzcGxheVN0eWxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGlkZShuZXdDb25kaXRpb246IGJvb2xlYW4pIHtcbiAgICB0aGlzLmluaXREaXNwbGF5U3R5bGUoKTtcblxuICAgIGlmIChuZXdDb25kaXRpb24gJiYgKGlzQmxhbmsodGhpcy5fcHJldkNvbmRpdGlvbikgfHwgIXRoaXMuX3ByZXZDb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9wcmV2Q29uZGl0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSBlbHNlIGlmICghbmV3Q29uZGl0aW9uICYmIChpc0JsYW5rKHRoaXMuX3ByZXZDb25kaXRpb24pIHx8IHRoaXMuX3ByZXZDb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9wcmV2Q29uZGl0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCB0aGlzLl9kaXNwbGF5U3R5bGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdERpc3BsYXlTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fZGlzcGxheVN0eWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRpc3BsYXlTdHlsZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgaWYgKGRpc3BsYXlTdHlsZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlTdHlsZSA9IGRpc3BsYXlTdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AUGlwZSh7XG4gIG5hbWU6ICdtaW4nXG59KVxuZXhwb3J0IGNsYXNzIE1pblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXJbXSwgYXJnczogc3RyaW5nW10pOiBhbnkge1xuICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCB2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAncHgnXG59KVxuZXhwb3J0IGNsYXNzIFBpeGVsQ29udmVydGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBhcmdzOiBzdHJpbmdbXSA9IFtdKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHZhbHVlICsgJ3B4JztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7RGF0YVRhYmxlUGFyYW1zfSBmcm9tICcuLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcblxuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUmVzb3VyY2U8VD4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbXM6IFRbXSkge1xuICB9XG5cbiAgcXVlcnkocGFyYW1zOiBEYXRhVGFibGVQYXJhbXMsIGZpbHRlcj86IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBpdGVtczogVFtdKSA9PiBib29sZWFuKTogUHJvbWlzZTxUW10+IHtcblxuICAgIGxldCByZXN1bHQ6IFRbXSA9IFtdO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaXRlbXMuZmlsdGVyKGZpbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaXRlbXMuc2xpY2UoKTsgLy8gc2hhbGxvdyBjb3B5IHRvIHVzZSBmb3Igc29ydGluZyBpbnN0ZWFkIG9mIGNoYW5naW5nIHRoZSBvcmlnaW5hbFxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc29ydEJ5KSB7XG4gICAgICByZXN1bHQuc29ydCgoYTogRGF0YVRhYmxlUGFyYW1zLCBiOiBEYXRhVGFibGVQYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhW3BhcmFtcy5zb3J0QnldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBhW3BhcmFtcy5zb3J0QnldLmxvY2FsZUNvbXBhcmUoYltwYXJhbXMuc29ydEJ5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFbcGFyYW1zLnNvcnRCeV0gLSBiW3BhcmFtcy5zb3J0QnldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXJhbXMuc29ydEFzYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzdWx0LnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHBhcmFtcy5saW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShwYXJhbXMub2Zmc2V0LCByZXN1bHQubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShwYXJhbXMub2Zmc2V0LCBwYXJhbXMub2Zmc2V0ICsgcGFyYW1zLmxpbWl0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHJlc3VsdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRoaXMuaXRlbXMubGVuZ3RoKSk7XG4gICAgfSk7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHtDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFUYWJsZVJvd0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQge0NlbGxDYWxsYmFja30gZnJvbSAnLi4vLi4vdHlwZXMvY2VsbC1jYWxsYmFjay50eXBlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLWNvbHVtbidcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHN0eWxlQ2xhc3NPYmplY3QgPSB7fTsgLy8gZm9yIFtuZ0NsYXNzXVxuXG4gIC8vIGluaXQ6XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBzb3J0YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSByZXNpemFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJvcGVydHk6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjZWxsQ29sb3JzOiBDZWxsQ2FsbGJhY2s7XG5cbiAgLy8gaW5pdCBhbmQgc3RhdGU6XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUNlbGwnKSBjZWxsVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUhlYWRlcicpIGhlYWRlclRlbXBsYXRlOiBFbGVtZW50UmVmO1xuXG4gIGdldENlbGxDb2xvcihyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNlbGxDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Q2VsbENhbGxiYWNrPnRoaXMuY2VsbENvbG9ycykocm93Lml0ZW0sIHJvdywgdGhpcywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXRDZWxsQ2xhc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRDZWxsQ2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLnN0eWxlQ2xhc3MgJiYgdGhpcy5wcm9wZXJ0eSkge1xuICAgICAgaWYgKC9eW2EtekEtWjAtOV9dKyQvLnRlc3QodGhpcy5wcm9wZXJ0eSkpIHtcbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJ2NvbHVtbi0nICsgdGhpcy5wcm9wZXJ0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9ICdjb2x1bW4tJyArIHRoaXMucHJvcGVydHkucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3R5bGVDbGFzcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3NPYmplY3QgPSB7XG4gICAgICAgIFt0aGlzLnN0eWxlQ2xhc3NdOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tkYXRhVGFibGVSb3ddJyxcbiAgdGVtcGxhdGU6IGA8dHIgY2xhc3M9XCJkYXRhLXRhYmxlLXJvd1wiXG4gICAgW3RpdGxlXT1cImdldFRvb2x0aXAoKVwiXG4gICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiZGF0YVRhYmxlLmdldFJvd0NvbG9yKGl0ZW0sIGluZGV4LCBfdGhpcylcIlxuICAgIFtjbGFzcy5yb3ctb2RkXT1cImluZGV4ICUgMiA9PT0gMFwiXG4gICAgW2NsYXNzLnJvdy1ldmVuXT1cImluZGV4ICUgMiA9PT0gMVwiXG4gICAgW2NsYXNzLnNlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICBbY2xhc3MuY2xpY2thYmxlXT1cImRhdGFUYWJsZS5zZWxlY3RPblJvd0NsaWNrXCI+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLmV4cGFuZENvbHVtblZpc2libGVcIj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJleHBhbmRlZCA9ICFleHBhbmRlZDsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgY2xhc3M9XCJyb3ctZXhwYW5kLWJ1dHRvblwiXG4gICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImV4cGFuZGVkXCJcbiAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiXG4gICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kUm93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCI+XG4gICAgICA8aSBbbmdDbGFzc109XCJ7J2ZhLWNhcmV0LXJpZ2h0JzogIWV4cGFuZGVkLCAnZmEtY2FyZXQtZG93bic6IGV4cGFuZGVkfVwiIGNsYXNzPVwiZmEgZmEtbGdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gIDwvdGQ+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLmluZGV4Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiaW5kZXgtY29sdW1uXCIgW3RleHRDb250ZW50XT1cImRpc3BsYXlJbmRleFwiPjwvdGQ+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLnNlbGVjdENvbHVtblZpc2libGVcIiBjbGFzcz1cInNlbGVjdC1jb2x1bW5cIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLnNlbGVjdFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF0YVRhYmxlLmxhYmVscy5zZWxlY3RSb3cucmVwbGFjZSgne2NlbGxfY29udGVudH0nLCAnJytpdGVtW2RhdGFUYWJsZS5wcmltYXJ5Q29sdW1uXSlcIi8+XG4gIDwvdGQ+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJkYXRhVGFibGUuY29sdW1uc1wiIGxldC1jb2x1bW4+XG4gICAgPHRoICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gPT09IGNvbHVtbi5wcm9wZXJ0eVwiIHNjb3BlPVwicm93XCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCIgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIlxuICAgICAgICBjbGFzcz1cImRhdGEtY29sdW1uXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sdW1uLmdldENlbGxDb2xvcihfdGhpcywgaW5kZXgpXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbdGV4dENvbnRlbnRdPVwiaXRlbVtjb2x1bW4ucHJvcGVydHldXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1uLCByb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICAgIDwvdGg+XG4gICAgPHRkICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gIT09IGNvbHVtbi5wcm9wZXJ0eVwiIFtoaWRlXT1cIiFjb2x1bW4udmlzaWJsZVwiIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCJcbiAgICAgICAgY2xhc3M9XCJkYXRhLWNvbHVtblwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbHVtbi5nZXRDZWxsQ29sb3IoX3RoaXMsIGluZGV4KVwiPlxuICAgICAgPGRpdiAqbmdJZj1cIiFjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW3RleHRDb250ZW50XT1cIml0ZW1bY29sdW1uLnByb3BlcnR5XVwiPjwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbiwgcm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgICA8L3RkPlxuICA8L25nLXRlbXBsYXRlPlxuPC90cj5cbjx0ciAqbmdJZj1cImRhdGFUYWJsZS5leHBhbmRhYmxlUm93c1wiIFtoaWRlXT1cIiFleHBhbmRlZFwiIGNsYXNzPVwicm93LWV4cGFuc2lvblwiPlxuICA8dGQgW2F0dHIuY29sc3Bhbl09XCJkYXRhVGFibGUuY29sdW1uQ291bnRcIj5cbiAgICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRhdGFUYWJsZS5leHBhbmRUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7cm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgPC90ZD5cbjwvdHI+XG5gLFxuICBzdHlsZXM6IFtgLnNlbGVjdC1jb2x1bW57dGV4dC1hbGlnbjpjZW50ZXJ9LnJvdy1leHBhbmQtYnV0dG9ue2JveC1zaXppbmc6Y29udGVudC1ib3g7YmFja2dyb3VuZDowIDA7Ym9yZGVyOjA7Y29sb3I6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjtmb250OmluaGVyaXQ7bGluZS1oZWlnaHQ6bm9ybWFsO292ZXJmbG93OnZpc2libGU7cGFkZGluZzouMTVyZW0gLjc1cmVtOy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZX0uY2xpY2thYmxle2N1cnNvcjpwb2ludGVyfXRoe2ZvbnQtd2VpZ2h0OmluaXRpYWx9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBfdGhpcyA9IHRoaXM7XG5cbiAgQElucHV0KCkgaXRlbTogYW55O1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIGV4cGFuZGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IFtdO1xuXG4gIC8vIHJvdyBzZWxlY3Rpb246XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWQpO1xuICB9XG5cbiAgLy8gb3RoZXI6XG4gIGdldCBkaXNwbGF5SW5kZXgoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5kaXNwbGF5UGFyYW1zLm9mZnNldCArIHRoaXMuaW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleCArIDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG9vbHRpcCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93VG9vbHRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnJvd1Rvb2x0aXAodGhpcy5pdGVtLCB0aGlzLCB0aGlzLmluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd0NsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmRhdGFUYWJsZS5yb3dDbGlja2VkKHRoaXMsIGV2ZW50KSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dEb3VibGVDbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGJsY2xpY2snLFxuICAgICAgICAgIChldmVudCkgPT4gdGhpcy5kYXRhVGFibGUucm93RG91YmxlQ2xpY2tlZCh0aGlzLCBldmVudCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy50eXBlJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUcmFuc2xhdGlvbnM6IERhdGFUYWJsZVRyYW5zbGF0aW9ucyA9IHtcbiAgaGVhZGVyUmVsb2FkOiAncmVsb2FkIHt0aXRsZX0gdGFibGUnLFxuICBoZWFkZXJDb2x1bW5TZWxlY3RvcjogJ2NvbHVtbiBzZWxlY3RvciAtIGFkZHMgb3IgcmVtb3ZlcyBjb2x1bW5zIGZyb20ge3RpdGxlfSB0YWJsZScsXG4gIGhlYWRlckNvbHVtblNlbGVjdG9yQWRkZWQ6ICd7Y29sdW1uX25hbWV9IGFkZGVkIHRvIHt0aXRsZX0gdGFibGUnLFxuICBoZWFkZXJDb2x1bW5TZWxlY3RvclJlbW92ZWQ6ICd7Y29sdW1uX25hbWV9IHJlbW92ZWQgZnJvbSB7dGl0bGV9IHRhYmxlJyxcbiAgaW5kZXhDb2x1bW46ICdpbmRleCcsXG4gIHNlbGVjdENvbHVtbjogJ3NlbGVjdCcsXG4gIHNlbGVjdFJvdzogJ3NlbGVjdCB7Y2VsbF9jb250ZW50fScsXG4gIHNlbGVjdEFsbFJvd3M6ICdzZWxlY3QgYWxsIHJvd3MnLFxuICBleHBhbmRDb2x1bW46ICdleHBhbmQnLFxuICBleHBhbmRSb3c6ICdleHBhbmQge2NlbGxfY29udGVudH0nLFxuICBzb3J0ZWRBc2NlbmRpbmc6ICd7dGl0bGV9IHRhYmxlIHNvcnRlZCBieSB7aGVhZGVyfSBhc2NlbmRpbmcnLFxuICBzb3J0ZWREZXNjZW5kaW5nOiAne3RpdGxlfSB0YWJsZSBzb3J0ZWQgYnkge2hlYWRlcn0gZGVzY2VuZGluZycsXG4gIHNvcnRBc2NlbmRpbmc6ICdhY3RpdmF0ZSB0byBzb3J0IGFzY2VuZGluZycsXG4gIHNvcnREZXNjZW5kaW5nOiAnYWN0aXZhdGUgdG8gc29ydCBkZXNjZW5kaW5nJyxcbiAgcGFnaW5hdGlvbkxpbWl0OiAnTGltaXQnLFxuICBwYWdpbmF0aW9uVGV4dDogJ1Jlc3VsdHM6IHtmcm9tfSB0byB7dG99IG9mIHt0b3RhbH0nLFxuICBwYWdpbmF0aW9uVG90YWxQYWdlczogJ29mJyxcbiAgZmlyc3RQYWdlOiAnZmlyc3QgcGFnZScsXG4gIHByZXZQYWdlOiAncHJldmlvdXMgcGFnZScsXG4gIHBhZ2VOdW1iZXJMYWJlbDogJ1BhZ2UnLFxuICBwYWdlTnVtYmVyOiAncGFnZSBudW1iZXInLFxuICBwYWdlTnVtYmVyTm9mTTogJyh7Tn0gb2Yge019KScsXG4gIG5leHRQYWdlOiAnbmV4dCBwYWdlJyxcbiAgbGFzdFBhZ2U6ICdsYXN0IHBhZ2UnLFxuICBsb2FkaW5nVGV4dDogJ3t0aXRsZX0gdGFibGUgaXMgbG9hZGluZycsXG4gIGxvYWRlZFRleHQ6ICd7dGl0bGV9IHRhYmxlIGxvYWRlZCdcbn07XG4iLCJleHBvcnQgdHlwZSBNb3ZlSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlciwgZHk6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBVcEhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBtb3ZlZDogYm9vbGVhbikgPT4gdm9pZDtcblxuLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYWcoZXZlbnQ6IE1vdXNlRXZlbnQsIHttb3ZlOiBtb3ZlLCB1cDogdXB9OiB7IG1vdmU6IE1vdmVIYW5kbGVyLCB1cD86IFVwSGFuZGxlciB9KSB7XG5cbiAgY29uc3Qgc3RhcnRYID0gZXZlbnQucGFnZVg7XG4gIGNvbnN0IHN0YXJ0WSA9IGV2ZW50LnBhZ2VZO1xuICBsZXQgeCA9IHN0YXJ0WDtcbiAgbGV0IHkgPSBzdGFydFk7XG4gIGxldCBtb3ZlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZHggPSBldnQucGFnZVggLSB4O1xuICAgIGNvbnN0IGR5ID0gZXZ0LnBhZ2VZIC0geTtcbiAgICB4ID0gZXZ0LnBhZ2VYO1xuICAgIHkgPSBldnQucGFnZVk7XG4gICAgaWYgKGR4IHx8IGR5KSB7XG4gICAgICBtb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbW92ZShldnQsIGR4LCBkeSwgeCwgeSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyB0byBhdm9pZCB0ZXh0IHNlbGVjdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgeCA9IGV2dC5wYWdlWDtcbiAgICB5ID0gZXZ0LnBhZ2VZO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGlmICh1cCkge1xuICAgICAgdXAoZXZlbnQsIHgsIHksIG1vdmVkKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG5pbXBvcnQgeyBSb3dDYWxsYmFjayB9IGZyb20gJy4uLy4uL3R5cGVzL3Jvdy1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZGVmYXVsdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL2RlZmF1bHQtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgZHJhZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RyYWcnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7IFxuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtd3JhcHBlclwiPlxuICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIiByb2xlPVwic3RhdHVzXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1hdG9taWM9XCJmYWxzZVwiIGFyaWEtcmVsZXZhbnQ9XCJ0ZXh0XCI+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cInJlbG9hZE5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwicGFnaW5hdGlvbk5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwic29ydE5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb25cIj48L3NwYW4+XG4gIDwvc3Bhbj5cblxuICA8ZGF0YS10YWJsZS1oZWFkZXIgKm5nSWY9XCJoZWFkZXJcIj48L2RhdGEtdGFibGUtaGVhZGVyPlxuXG4gIDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWJveFwiIFtjbGFzc109XCJ3cmFwcGVyQ2xhc3NcIj5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBkYXRhLXRhYmxlXCIgW2lkXT1cImlkXCI+XG4gICAgICA8Y2FwdGlvbiBjbGFzcz1cInNyLW9ubHlcIiBbdGV4dENvbnRlbnRdPVwidGl0bGVcIj48L2NhcHRpb24+XG4gICAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhZXhwYW5kQ29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiZXhwYW5kLWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiaW5kZXgtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJpbmRleENvbHVtbkhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFzZWxlY3RDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJzZWxlY3QtY29sdW1uLWhlYWRlclwiPlxuICAgICAgICAgIDxpbnB1dCBbaGlkZV09XCIhbXVsdGlTZWxlY3RcIlxuICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdEFsbENoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgIFt0aXRsZV09XCJsYWJlbHMuc2VsZWN0QWxsUm93c1wiXG4gICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxzLnNlbGVjdEFsbFJvd3NcIi8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnMsIGluZGV4IGFzIGlcIiAjdGhcbiAgICAgICAgICAgIFtoaWRlXT1cIiFjb2x1bW4udmlzaWJsZVwiXG4gICAgICAgICAgICBbY2xhc3Muc29ydGFibGVdPVwiY29sdW1uLnNvcnRhYmxlXCJcbiAgICAgICAgICAgIFtjbGFzcy5yZXNpemFibGVdPVwiY29sdW1uLnJlc2l6YWJsZVwiXG4gICAgICAgICAgICBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLXNvcnRdPVwiY29sdW1uLnNvcnRhYmxlID8gKGNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5ID8gKHNvcnRBc2MgPyAnYXNjZW5kaW5nJyA6ICdkZXNjZW5kaW5nJykgOiAnbm9uZScpIDogbnVsbFwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJjb2x1bW4uc3R5bGVDbGFzc09iamVjdFwiIGNsYXNzPVwiY29sdW1uLWhlYWRlclwiIFtzdHlsZS53aWR0aF09XCJjb2x1bW4ud2lkdGggfCBweFwiID5cbiAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY29sdW1uLnNvcnRhYmxlXCIgKGNsaWNrKT1cImhlYWRlckNsaWNrZWQoY29sdW1uLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiY29sdW1uLnNvcnRhYmxlID8gaWQgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cIidjb2wtJytpZCsnLScraVwiXG4gICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiIXNvcnRBc2MgPyBsYWJlbHMuc29ydEFzY2VuZGluZyA6IGxhYmVscy5zb3J0RGVzY2VuZGluZ1wiPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29sdW1uLmhlYWRlclRlbXBsYXRlXCIgW2lkXT1cIidjb2wtJytpZCsnLScraVwiXG4gICAgICAgICAgICAgICAgICBbdGV4dENvbnRlbnRdPVwiY29sdW1uLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4tc29ydC1pY29uXCIgKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgICAgPGkgW2hpZGVdPVwiY29sdW1uLnByb3BlcnR5ID09PSBzb3J0QnlcIiBjbGFzcz1cImZhIGZhLXNvcnQgY29sdW1uLXNvcnRhYmxlLWljb25cIlxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPGkgW2hpZGVdPVwiY29sdW1uLnByb3BlcnR5ICE9PSBzb3J0QnlcIiBjbGFzcz1cImZhXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ZhLXNvcnQtYXNjJzogc29ydEFzYywgJ2ZhLXNvcnQtZGVzYyc6ICFzb3J0QXNjfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLnJlc2l6YWJsZVwiIGNsYXNzPVwiY29sdW1uLXJlc2l6ZS1oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJyZXNpemVDb2x1bW5TdGFydCgkZXZlbnQsIGNvbHVtbiwgdGgpXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5zb3J0YWJsZVwiPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29sdW1uLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFt0ZXh0Q29udGVudF09XCJjb2x1bW4uaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbn1cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi1zb3J0LWljb25cIiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiPlxuICAgICAgICAgICAgICAgPGkgW2hpZGVdPVwiY29sdW1uLnByb3BlcnR5ID09PSBzb3J0QnlcIiBjbGFzcz1cImZhIGZhLXNvcnQgY29sdW1uLXNvcnRhYmxlLWljb25cIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgPGkgW2hpZGVdPVwiY29sdW1uLnByb3BlcnR5ICE9PSBzb3J0QnlcIiBjbGFzcz1cImZhXCJcbiAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZmEtc29ydC1hc2MnOiBzb3J0QXNjLCAnZmEtc29ydC1kZXNjJzogIXNvcnRBc2N9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4ucmVzaXphYmxlXCIgY2xhc3M9XCJjb2x1bW4tcmVzaXplLWhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInJlc2l6ZUNvbHVtblN0YXJ0KCRldmVudCwgY29sdW1uLCB0aClcIj48L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3RoPlxuICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpbmRleD1pbmRleFwiIGNsYXNzPVwiZGF0YS10YWJsZS1yb3ctd3JhcHBlclwiXG4gICAgICAgICAgICAgZGF0YVRhYmxlUm93ICNyb3cgW2l0ZW1dPVwiaXRlbVwiIFtpbmRleF09XCJpbmRleFwiIChzZWxlY3RlZENoYW5nZSk9XCJvblJvd1NlbGVjdENoYW5nZWQocm93KVwiPlxuICAgICAgPC90Ym9keT5cbiAgICAgIDx0Ym9keSAqbmdJZj1cIml0ZW1Db3VudCA9PT0gMCAmJiBub0RhdGFNZXNzYWdlXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgW2F0dHIuY29sc3Bhbl09XCJjb2x1bW5Db3VudFwiPnt7IG5vRGF0YU1lc3NhZ2UgfX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICAgIDx0Ym9keSBjbGFzcz1cInN1YnN0aXR1dGUtcm93c1wiICpuZ0lmPVwicGFnaW5hdGlvbiAmJiBzdWJzdGl0dXRlUm93c1wiPlxuICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN1YnN0aXR1dGVJdGVtcywgbGV0IGluZGV4ID0gaW5kZXhcIlxuICAgICAgICAgIFtjbGFzcy5yb3ctb2RkXT1cIihpbmRleCArIGl0ZW1zLmxlbmd0aCkgJSAyID09PSAwXCJcbiAgICAgICAgICBbY2xhc3Mucm93LWV2ZW5dPVwiKGluZGV4ICsgaXRlbXMubGVuZ3RoKSAlIDIgPT09IDFcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhZXhwYW5kQ29sdW1uVmlzaWJsZVwiPjwvdGQ+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhaW5kZXhDb2x1bW5WaXNpYmxlXCI+Jm5ic3A7PC90ZD5cbiAgICAgICAgPHRkIFtoaWRlXT1cIiFzZWxlY3RDb2x1bW5WaXNpYmxlXCI+PC90ZD5cbiAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFtoaWRlXT1cIiFjb2x1bW4udmlzaWJsZVwiPlxuICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICA8ZGl2IGNsYXNzPVwiYnVzeVwiICpuZ0lmPVwic2hvd1JlbG9hZGluZyAmJiByZWxvYWRpbmdcIj5cbiAgICAgIDxpPjxpIGNsYXNzPVwiZmEgZmEtc3BpbiBmYS1jb2cgZmEtMnhcIj48L2k+PC9pPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGF0YS10YWJsZS1wYWdpbmF0aW9uICpuZ0lmPVwicGFnaW5hdGlvblwiIFtsaW1pdHNdPVwicGFnZUxpbWl0c1wiPjwvZGF0YS10YWJsZS1wYWdpbmF0aW9uPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlLnRhYmxlPnRib2R5K3Rib2R5e2JvcmRlci10b3A6bm9uZX06aG9zdCAvZGVlcC8gLmRhdGEtdGFibGUudGFibGUgdGR7dmVydGljYWwtYWxpZ246bWlkZGxlfTpob3N0IC9kZWVwLyAuZGF0YS10YWJsZT50Ym9keT50cj50ZCw6aG9zdCAvZGVlcC8gLmRhdGEtdGFibGU+dGhlYWQ+dHI+dGh7b3ZlcmZsb3c6aGlkZGVufTpob3N0IC9kZWVwLyAuZGF0YS10YWJsZT50aGVhZD50cj50ZHtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZGVlMmU2fTpob3N0IC9kZWVwLyAucm93LW9kZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjZ9LmRhdGEtdGFibGUgLnN1YnN0aXR1dGUtcm93cz50cjpob3Zlciw6aG9zdCAvZGVlcC8gLmRhdGEtdGFibGUgLmRhdGEtdGFibGUtcm93OmhvdmVye2JhY2tncm91bmQtY29sb3I6I2VjZWNlY30uZGF0YS10YWJsZXtib3gtc2hhZG93OjAgMCAxNXB4ICNlY2VjZWN9LmNvbHVtbi1oZWFkZXJ7cG9zaXRpb246cmVsYXRpdmV9LmV4cGFuZC1jb2x1bW4taGVhZGVye3dpZHRoOjUwcHh9LnNlbGVjdC1jb2x1bW4taGVhZGVye3dpZHRoOjUwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9LmluZGV4LWNvbHVtbi1oZWFkZXJ7d2lkdGg6NDBweH0uY29sdW1uLWhlYWRlci5zb3J0YWJsZSBidXR0b257Ym94LXNpemluZzpjb250ZW50LWJveDtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6MDtjb2xvcjppbmhlcml0O2N1cnNvcjpwb2ludGVyO2ZvbnQ6aW5oZXJpdDtsaW5lLWhlaWdodDpub3JtYWw7b3ZlcmZsb3c6dmlzaWJsZTtwYWRkaW5nOjA7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3RleHQtYWxpZ246bGVmdH0uY29sdW1uLWhlYWRlciAuY29sdW1uLXNvcnQtaWNvbnttYXJnaW4tbGVmdDo4cHh9LmNvbHVtbi1oZWFkZXIucmVzaXphYmxlIC5jb2x1bW4tc29ydC1pY29ue21hcmdpbi1yaWdodDo4cHh9LmNvbHVtbi1oZWFkZXIgLmNvbHVtbi1zb3J0LWljb24gLmNvbHVtbi1zb3J0YWJsZS1pY29ue2NvbG9yOiNkM2QzZDN9LmNvbHVtbi1oZWFkZXIgLmNvbHVtbi1yZXNpemUtaGFuZGxle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bWFyZ2luOjA7cGFkZGluZzowO3dpZHRoOjhweDtoZWlnaHQ6MTAwJTtjdXJzb3I6Y29sLXJlc2l6ZX0uZGF0YS10YWJsZS1ib3h7cG9zaXRpb246cmVsYXRpdmV9LmJ1c3l7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjUpfS5idXN5Pml7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgRGF0YVRhYmxlUGFyYW1zLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX2l0ZW1Db3VudDtcblxuICBASW5wdXQoKSB3cmFwcGVyQ2xhc3M7XG5cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBzZXQgaXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICAvLyBubyBuZWVkIHRvIGNhbGwgbm90aWZpZXIubmV4dCgpIGJlY2F1c2UgX29uUmVsb2FkRmluaXNoZWQoKVxuICAgIC8vIHdpbGwgY2hhbmdlIHJlbG9hZGVkIHZhbHVlIGNhdXNpbmcgbm90aWZpZXIubmV4dCgpIHRvIGJlIGNhbGxlZCBpbXBsaWNpdGx5LlxuICAgIHRoaXMuX29uUmVsb2FkRmluaXNoZWQoKTtcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1Db3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pdGVtQ291bnQ7XG4gIH1cblxuICBzZXQgaXRlbUNvdW50KGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9pdGVtQ291bnQgPSBjb3VudDtcbiAgICB0aGlzLm5vdGlmaWVyLm5leHQoKTtcbiAgfVxuXG4gIC8vIFVJIGNvbXBvbmVudHM6XG4gIEBDb250ZW50Q2hpbGRyZW4oRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKSBjb2x1bW5zOiBRdWVyeUxpc3Q8RGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlPjtcbiAgQFZpZXdDaGlsZHJlbihEYXRhVGFibGVSb3dDb21wb25lbnQpIHJvd3M6IFF1ZXJ5TGlzdDxEYXRhVGFibGVSb3dDb21wb25lbnQ+O1xuICBAQ29udGVudENoaWxkKCdkYXRhVGFibGVFeHBhbmQnKSBleHBhbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvLyBPbmUtdGltZSBvcHRpb25hbCBiaW5kaW5ncyB3aXRoIGRlZmF1bHQgdmFsdWVzOlxuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzaG93VGl0bGUgPSB0cnVlO1xuICBASW5wdXQoKSBoZWFkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5kZXhDb2x1bW4gPSB0cnVlO1xuICBASW5wdXQoKSBpbmRleENvbHVtbkhlYWRlciA9ICcnO1xuICBASW5wdXQoKSByb3dDb2xvcnM6IFJvd0NhbGxiYWNrO1xuICBASW5wdXQoKSByb3dUb29sdGlwOiBSb3dDYWxsYmFjaztcbiAgQElucHV0KCkgc2VsZWN0Q29sdW1uID0gZmFsc2U7XG4gIEBJbnB1dCgpIG11bHRpU2VsZWN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgc3Vic3RpdHV0ZVJvd3MgPSB0cnVlO1xuICBASW5wdXQoKSBleHBhbmRhYmxlUm93cyA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbHM6IERhdGFUYWJsZVRyYW5zbGF0aW9ucztcbiAgQElucHV0KCkgc2VsZWN0T25Sb3dDbGljayA9IGZhbHNlO1xuICBASW5wdXQoKSBhdXRvUmVsb2FkID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1JlbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBub0RhdGFNZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VMaW1pdHM6IG51bWJlcltdID0gWzEwLCAyNSwgNTAsIDEwMCwgMjUwXTtcbiAgQElucHV0KCkgcHJpbWFyeUNvbHVtbiA9ICcnO1xuXG4gIC8vIHJlbG9hZCBlbWl0dGVyXG4gIEBPdXRwdXQoKSByZWxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gZXZlbnQgaGFuZGxlcnM6XG4gIEBPdXRwdXQoKSByb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJvd0RvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGVhZGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjZWxsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIFVJIHN0YXRlIHdpdGhvdXQgaW5wdXQ6XG4gIGluZGV4Q29sdW1uVmlzaWJsZTogYm9vbGVhbjtcbiAgc2VsZWN0Q29sdW1uVmlzaWJsZTogYm9vbGVhbjtcbiAgZXhwYW5kQ29sdW1uVmlzaWJsZTogYm9vbGVhbjtcblxuICAvLyBhZGEgbm90aWZpY2F0aW9ucy5cbiAgcmVsb2FkTm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIHBhZ2luYXRpb25Ob3RpZmljYXRpb246IHN0cmluZztcbiAgc29ydE5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvbjogc3RyaW5nO1xuXG4gIF9kaXNwbGF5UGFyYW1zID0gPERhdGFUYWJsZVBhcmFtcz57fTsgLy8gcGFyYW1zIG9mIHRoZSBsYXN0IGZpbmlzaGVkIHJlbG9hZFxuXG4gIHN1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBzdWJqZWN0JDogU3Vic2NyaXB0aW9uO1xuXG4gIG5vdGlmaWVyID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgbm90aWZpZXIkOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gc2VsZWN0aW9uOlxuICBzZWxlY3RlZFJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50O1xuICBzZWxlY3RlZFJvd3M6IERhdGFUYWJsZVJvd0NvbXBvbmVudFtdID0gW107XG5cbiAgTWF0aDogYW55O1xuICBpZCA9IGBkYXRhdGFibGUtJHtuZXh0SWQrK31gO1xuXG4gIC8vIHNlbGVjdCBhbGwgY2hlY2tib3ggZmxhZ1xuICBwcml2YXRlIF9zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuXG4gIC8vIGNvbHVtbiByZXNpemluZzpcbiAgcHJpdmF0ZSBfcmVzaXplSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gIHJlc2l6ZUxpbWl0ID0gMzA7XG5cbiAgLy8gUmVsb2FkaW5nOlxuICBfcmVsb2FkaW5nID0gZmFsc2U7XG5cbiAgZ2V0IHJlbG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVsb2FkaW5nO1xuICB9XG5cbiAgc2V0IHJlbG9hZGluZyh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZWxvYWRpbmcgPSB2YWw7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBzdGF0ZTogdmlzaWJsZSBnZXQvc2V0IGZvciB0aGUgb3V0c2lkZSB3aXRoIEBJbnB1dCBmb3Igb25lLXRpbWUgaW5pdGlhbCB2YWx1ZXNcbiAgcHJpdmF0ZSBfc29ydEJ5OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRCeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zb3J0Qnk7XG4gIH1cblxuICBzZXQgc29ydEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3J0QnkgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc29ydEFzYyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRBc2MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRBc2M7XG4gIH1cblxuICBzZXQgc29ydEFzYyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRBc2MgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb2Zmc2V0ID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgb2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgfVxuXG4gIHNldCBvZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9saW1pdCA9IDEwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9saW1pdDtcbiAgfVxuXG4gIHNldCBsaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGltaXQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlZCBwcm9wZXJ0eTpcbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUNvdW50ICE9PSAwID8gTWF0aC5mbG9vcih0aGlzLm9mZnNldCAvIHRoaXMubGltaXQpICsgMSA6IDA7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gKHZhbHVlIC0gMSkgKiB0aGlzLmxpbWl0O1xuICB9XG5cbiAgZ2V0IGxhc3RQYWdlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5pdGVtQ291bnQgLyB0aGlzLmxpbWl0KTtcbiAgfVxuXG4gIC8vIHNldHRpbmcgbXVsdGlwbGUgb2JzZXJ2YWJsZSBwcm9wZXJ0aWVzIHNpbXVsdGFuZW91c2x5XG4gIHNvcnQoc29ydEJ5OiBzdHJpbmcsIGFzYzogYm9vbGVhbikge1xuICAgIHRoaXMuc29ydEJ5ID0gc29ydEJ5O1xuICAgIHRoaXMuc29ydEFzYyA9IGFzYztcbiAgfVxuXG4gIC8vIGluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5faW5pdERlZmF1bHRWYWx1ZXMoKTtcbiAgICB0aGlzLl9pbml0RGVmYXVsdENsaWNrRXZlbnRzKCk7XG4gICAgdGhpcy5fdXBkYXRlRGlzcGxheVBhcmFtcygpO1xuXG4gICAgaWYgKHRoaXMucGFnZUxpbWl0cy5pbmRleE9mKHRoaXMubGltaXQpIDwgMCkge1xuICAgICAgdGhpcy5saW1pdCA9IHRoaXMucGFnZUxpbWl0c1swXTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVscyA9IHsuLi5kZWZhdWx0VHJhbnNsYXRpb25zLCAuLi50aGlzLmxhYmVsc307XG5cbiAgICBpZiAodGhpcy5hdXRvUmVsb2FkKSB7XG4gICAgICB0aGlzLnJlbG9hZEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZmllciQgPSB0aGlzLm5vdGlmaWVyLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9ub3RpZnkoKSk7XG4gICAgdGhpcy5zdWJqZWN0JCA9IHRoaXMuc3ViamVjdC5waXBlKGRlYm91bmNlVGltZSgxMDApKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWxvYWRJdGVtcygpKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERlZmF1bHRWYWx1ZXMoKSB7XG4gICAgdGhpcy5pbmRleENvbHVtblZpc2libGUgPSB0aGlzLmluZGV4Q29sdW1uO1xuICAgIHRoaXMuc2VsZWN0Q29sdW1uVmlzaWJsZSA9IHRoaXMuc2VsZWN0Q29sdW1uO1xuICAgIHRoaXMuZXhwYW5kQ29sdW1uVmlzaWJsZSA9IHRoaXMuZXhwYW5kYWJsZVJvd3M7XG4gIH1cblxuICBwcml2YXRlIF9pbml0RGVmYXVsdENsaWNrRXZlbnRzKCkge1xuICAgIHRoaXMuaGVhZGVyQ2xpY2suc3Vic2NyaWJlKFxuICAgICAgKHRhYmxlRXZlbnQ6IHsgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIGV2ZW50OiBFdmVudCB9KSA9PiB0aGlzLnNvcnRDb2x1bW4odGFibGVFdmVudC5jb2x1bW4pKTtcbiAgICBpZiAodGhpcy5zZWxlY3RPblJvd0NsaWNrKSB7XG4gICAgICB0aGlzLnJvd0NsaWNrLnN1YnNjcmliZShcbiAgICAgICAgKHRhYmxlRXZlbnQ6IHsgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBFdmVudCB9KSA9PiB0YWJsZUV2ZW50LnJvdy5zZWxlY3RlZCA9ICF0YWJsZUV2ZW50LnJvdy5zZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgcmVsb2FkSXRlbXMoKSB7XG4gICAgdGhpcy5yZWxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMucmVsb2FkLmVtaXQodGhpcy5fZ2V0UmVtb3RlUGFyYW1ldGVycygpKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUmVsb2FkRmluaXNoZWQoKSB7XG4gICAgaWYgKHRoaXMucmVsb2FkaW5nKSB7XG4gICAgICB0aGlzLl91cGRhdGVEaXNwbGF5UGFyYW1zKCk7XG4gICAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpc3BsYXlQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlQYXJhbXM7XG4gIH1cblxuICBfdXBkYXRlRGlzcGxheVBhcmFtcygpIHtcbiAgICB0aGlzLl9kaXNwbGF5UGFyYW1zID0ge1xuICAgICAgc29ydEJ5OiB0aGlzLnNvcnRCeSxcbiAgICAgIHNvcnRBc2M6IHRoaXMuc29ydEFzYyxcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyByb3dDbGlja2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJvd0NsaWNrLmVtaXQoe3JvdywgZXZlbnR9KTtcbiAgfVxuXG4gIHB1YmxpYyByb3dEb3VibGVDbGlja2VkKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJvd0RvdWJsZUNsaWNrLmVtaXQoe3JvdywgZXZlbnR9KTtcbiAgfVxuXG4gIHB1YmxpYyBoZWFkZXJDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBldmVudDogRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuaGVhZGVyQ2xpY2suZW1pdCh7Y29sdW1uLCBldmVudH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXNpemVJblByb2dyZXNzID0gZmFsc2U7IC8vIHRoaXMgaXMgYmVjYXVzZSBJIGNhbid0IHByZXZlbnQgY2xpY2sgZnJvbSBtb3VzdXAgb2YgdGhlIGRyYWcgZW5kXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjZWxsQ2xpY2tlZChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5jZWxsQ2xpY2suZW1pdCh7cm93LCBjb2x1bW4sIGV2ZW50fSk7XG4gIH1cblxuICAvLyBmdW5jdGlvbnM6XG4gIHByaXZhdGUgX2dldFJlbW90ZVBhcmFtZXRlcnMoKTogRGF0YVRhYmxlUGFyYW1zIHtcbiAgICBjb25zdCBwYXJhbXMgPSA8RGF0YVRhYmxlUGFyYW1zPnt9O1xuXG4gICAgaWYgKHRoaXMuc29ydEJ5KSB7XG4gICAgICBwYXJhbXMuc29ydEJ5ID0gdGhpcy5zb3J0Qnk7XG4gICAgICBwYXJhbXMuc29ydEFzYyA9IHRoaXMuc29ydEFzYztcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgcGFyYW1zLm9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgcGFyYW1zLmxpbWl0ID0gdGhpcy5saW1pdDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvbHVtbihjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkge1xuICAgIGlmIChjb2x1bW4uc29ydGFibGUpIHtcbiAgICAgIGNvbnN0IGFzY2VuZGluZyA9IHRoaXMuc29ydEJ5ID09PSBjb2x1bW4ucHJvcGVydHkgPyAhdGhpcy5zb3J0QXNjIDogdHJ1ZTtcbiAgICAgIHRoaXMuc29ydChjb2x1bW4ucHJvcGVydHksIGFzY2VuZGluZyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbHVtbkNvdW50KCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgKz0gdGhpcy5pbmRleENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPyAxIDogMDtcbiAgICB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIGNvdW50ICs9IGNvbHVtbi52aXNpYmxlID8gMSA6IDA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgcHVibGljIGdldFJvd0NvbG9yKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgcm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQpIHtcbiAgICBpZiAodGhpcy5yb3dDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Um93Q2FsbGJhY2s+dGhpcy5yb3dDb2xvcnMpKGl0ZW0sIHJvdywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RBbGxDaGVja2JveCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3g7XG4gIH1cblxuICBzZXQgc2VsZWN0QWxsQ2hlY2tib3godmFsdWUpIHtcbiAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2JveCA9IHZhbHVlO1xuICAgIHRoaXMuX29uU2VsZWN0QWxsQ2hhbmdlZCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9vblNlbGVjdEFsbENoYW5nZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJvd3MudG9BcnJheSgpLmZvckVhY2gocm93ID0+IHJvdy5zZWxlY3RlZCA9IHZhbHVlKTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0Q2hhbmdlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCkge1xuXG4gICAgLy8gbWFpbnRhaW4gdGhlIHNlbGVjdGVkUm93KHMpIHZpZXdcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdyk7XG4gICAgICBpZiAocm93LnNlbGVjdGVkICYmIGluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICB9IGVsc2UgaWYgKCFyb3cuc2VsZWN0ZWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocm93LnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3cgPSByb3c7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRSb3cgPT09IHJvdykge1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFJvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1bnNlbGVjdCBhbGwgb3RoZXIgcm93czpcbiAgICBpZiAocm93LnNlbGVjdGVkICYmICF0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLnJvd3MudG9BcnJheSgpLmZpbHRlcihyb3dfID0+IHJvd18uc2VsZWN0ZWQpLmZvckVhY2gocm93XyA9PiB7XG4gICAgICAgIGlmIChyb3dfICE9PSByb3cpIHsgLy8gYXZvaWQgZW5kbGVzcyBsb29wXG4gICAgICAgICAgcm93Xy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBvdGhlcjpcblxuICBnZXQgc3Vic3RpdHV0ZUl0ZW1zKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMuZGlzcGxheVBhcmFtcy5saW1pdCAtIHRoaXMuaXRlbXMubGVuZ3RofSk7XG4gIH1cblxuICBwdWJsaWMgcmVzaXplQ29sdW1uU3RhcnQoZXZlbnQ6IE1vdXNlRXZlbnQsIGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBjb2x1bW5FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3Jlc2l6ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIGxldCBzdGFydE9mZnNldCA9IGNvbHVtbkVsZW1lbnQub2Zmc2V0V2lkdGggLSBldmVudC5wYWdlWDtcbiAgICBkcmFnKGV2ZW50LCB7XG4gICAgICBtb3ZlOiAobW92ZUV2ZW50OiBNb3VzZUV2ZW50LCBkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Jlc2l6ZUluTGltaXQoY29sdW1uRWxlbWVudCwgZHgpKSB7XG4gICAgICAgICAgY29sdW1uLndpZHRoID0gc3RhcnRPZmZzZXQgKyBtb3ZlRXZlbnQucGFnZVggKyBkeDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzUmVzaXplSW5MaW1pdChjb2x1bW5FbGVtZW50OiBIVE1MRWxlbWVudCwgZHg6IG51bWJlcikge1xuICAgIC8qIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgQ1NTIG1pbi13aWR0aCBkaWRuJ3Qgd29yayBvbiB0YWJsZS1sYXlvdXQ6IGZpeGVkLlxuICAgICAgICAgV2l0aG91dCB0aGUgbGltaXRzLCByZXNpemluZyBjYW4gbWFrZSB0aGUgbmV4dCBjb2x1bW4gZGlzYXBwZWFyIGNvbXBsZXRlbHksXG4gICAgICAgICBhbmQgZXZlbiBpbmNyZWFzZSB0aGUgdGFibGUgd2lkdGguIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHN1ZmZlcnMgZnJvbSB0aGUgZmFjdCxcbiAgICAgICAgIHRoYXQgb2Zmc2V0V2lkdGggc29tZXRpbWVzIGNvbnRhaW5zIG91dC1vZi1kYXRlIHZhbHVlcy4gKi9cbiAgICBpZiAoKGR4IDwgMCAmJiAoY29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aCArIGR4KSA8PSB0aGlzLnJlc2l6ZUxpbWl0KSB8fFxuICAgICAgIWNvbHVtbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nIHx8IC8vIHJlc2l6aW5nIGRvZXNuJ3QgbWFrZSBzZW5zZSBmb3IgdGhlIGxhc3QgdmlzaWJsZSBjb2x1bW5cbiAgICAgIChkeCA+PSAwICYmICgoPEhUTUxFbGVtZW50PiBjb2x1bW5FbGVtZW50Lm5leHRFbGVtZW50U2libGluZykub2Zmc2V0V2lkdGggKyBkeCkgPD0gdGhpcy5yZXNpemVMaW1pdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJpbWFyeUNvbHVtbiA9PT0gJycpIHtcbiAgICAgIHRoaXMucHJpbWFyeUNvbHVtbiA9ICh0aGlzLmNvbHVtbnMuZmlyc3QgYXMgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKS5wcm9wZXJ0eTtcbiAgICB9XG4gIH1cblxuICBfbm90aWZ5KCk6IHZvaWQge1xuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnJlbG9hZGluZztcblxuICAgIHRoaXMucmVsb2FkTm90aWZpY2F0aW9uID0gbG9hZGluZyA/XG4gICAgICB0aGlzLmxhYmVscy5sb2FkaW5nVGV4dC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSkgOlxuICAgICAgdGhpcy5sYWJlbHMubG9hZGVkVGV4dC5yZXBsYWNlKCd7dGl0bGV9JywgdGhpcy50aXRsZSk7XG5cbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uTm90aWZpY2F0aW9uID0gdGhpcy5sYWJlbHMucGFnaW5hdGlvblRleHRcbiAgICAgICAgICAucmVwbGFjZSgne2Zyb219JywgJycgKyAoTWF0aC5jZWlsKHRoaXMuaXRlbUNvdW50IC8gdGhpcy5saW1pdCkgIT09IDAgPyB0aGlzLm9mZnNldCArIDEgOiAnMCcpKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dG99JywgJycgKyAoTWF0aC5taW4odGhpcy5vZmZzZXQgKyB0aGlzLmxpbWl0LCB0aGlzLml0ZW1Db3VudCkpKVxuICAgICAgICAgIC5yZXBsYWNlKCd7dG90YWx9JywgJycgKyB0aGlzLml0ZW1Db3VudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25Ob3RpZmljYXRpb24gPSAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbHVtbnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNvcnRCeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuY29sdW1ucy50b0FycmF5KCkuZmluZChjb2x1bW4gPT4gY29sdW1uLnByb3BlcnR5ID09PSB0aGlzLnNvcnRCeSkgYXMgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlO1xuICAgICAgICB0aGlzLnNvcnROb3RpZmljYXRpb24gPSAodGhpcy5zb3J0QXNjID8gdGhpcy5sYWJlbHMuc29ydGVkQXNjZW5kaW5nIDogdGhpcy5sYWJlbHMuc29ydGVkRGVzY2VuZGluZylcbiAgICAgICAgICAucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpXG4gICAgICAgICAgLnJlcGxhY2UoJ3toZWFkZXJ9JywgY29sLmhlYWRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvcnROb3RpZmljYXRpb24gPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YmplY3QkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5ub3RpZmllciQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1oZWFkZXJcIj5cbiAgPHAgY2xhc3M9XCJoNCB0aXRsZVwiICpuZ0lmPVwiZGF0YVRhYmxlLnNob3dUaXRsZVwiIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUudGl0bGVcIj48L3A+XG4gIDxkaXYgY2xhc3M9XCJidXR0b24tcGFuZWxcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcmVmcmVzaC1idXR0b25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImRhdGFUYWJsZS5yZWxvYWRJdGVtcygpXCJcbiAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmhlYWRlclJlbG9hZC5yZXBsYWNlKCd7dGl0bGV9JywgZGF0YVRhYmxlLnRpdGxlKVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBjb2x1bW4tc2VsZWN0b3ItYnV0dG9uXCIgW2NsYXNzLmFjdGl2ZV09XCJjb2x1bW5TZWxlY3Rvck9wZW5cIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1oYXNwb3B1cF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiY29sdW1uU2VsZWN0b3JPcGVuXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjb2x1bW5TZWxlY3Rvck9wZW4gPSAhY29sdW1uU2VsZWN0b3JPcGVuO1wiXG4gICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3Rvci5yZXBsYWNlKCd7dGl0bGV9JywgZGF0YVRhYmxlLnRpdGxlKVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2VsZWN0b3Itd3JhcHBlclwiPlxuICAgICAgPGRpdiAqbmdJZj1cImNvbHVtblNlbGVjdG9yT3BlblwiIGNsYXNzPVwiY29sdW1uLXNlbGVjdG9yLWJveCBwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgIDxsaSAqbmdJZj1cImRhdGFUYWJsZS5leHBhbmRhYmxlUm93c1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLmV4cGFuZENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kQ29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSAqbmdJZj1cImRhdGFUYWJsZS5pbmRleENvbHVtblwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLmluZGV4Q29sdW1uVmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5pbmRleENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuc2VsZWN0Q29sdW1uXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBjaGVja2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJkYXRhVGFibGUuc2VsZWN0Q29sdW1uVmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5zZWxlY3RDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pdGVtIGxldC1pPVwiaW5kZXhcIiBbbmdGb3JPZl09XCJkYXRhVGFibGUuY29sdW1uc1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gIT09IGl0ZW0ucHJvcGVydHlcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIml0ZW0udmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJpdGVtLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5kYXRhLXRhYmxlLWhlYWRlcnttaW4taGVpZ2h0OjI1cHg7bWFyZ2luLWJvdHRvbToxMHB4fS50aXRsZXtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46NXB4IDAgMCA1cHh9LmJ1dHRvbi1wYW5lbHtmbG9hdDpyaWdodH0uYnV0dG9uLXBhbmVsIGJ1dHRvbntvdXRsaW5lOjAhaW1wb3J0YW50fS5jb2x1bW4tc2VsZWN0b3Itd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZX0uY29sdW1uLXNlbGVjdG9yLWJveHtib3gtc2hhZG93OjAgMCAxMHB4ICNkM2QzZDM7YmFja2dyb3VuZDojZmZmO3dpZHRoOjE1MHB4O3BhZGRpbmc6MTBweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDoxcHg7ei1pbmRleDoxMDYwfS5jb2x1bW4tc2VsZWN0b3ItYm94IC5saXN0LWdyb3VwLWl0ZW0uY29sdW1uLXNlbGVjdG9yLWNvbHVtbntwYWRkaW5nOi41cmVtIC4yNXJlbX0uY29sdW1uLXNlbGVjdG9yLWJveCAubGlzdC1ncm91cC1pdGVtLmNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gbGFiZWx7bWFyZ2luLWJvdHRvbTowfS5jb2x1bW4tc2VsZWN0b3ItYm94IC5saXN0LWdyb3VwLWl0ZW0uY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBpbnB1dHttYXJnaW4tcmlnaHQ6NHB4O2ZvbnQtc3R5bGU6aXRhbGljfWBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCB7XG5cbiAgY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNvbHVtblNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwJywgWyckZXZlbnQnXSkgb25LZXlVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgKGV2ZW50LmtleUNvZGUgPT09IDkgJiYgIXRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpKSB7XG4gICAgICB0aGlzLmNvbHVtblNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGlzQ2hlY2tlZCA9ICg8SFRNTElucHV0RWxlbWVudD4gZXZlbnQudGFyZ2V0KS5jaGVja2VkO1xuICAgIGNvbnN0IGNvbHVtbk5hbWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50LnRhcmdldCkucGFyZW50RWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgY29uc3QgaW50ZXJwb2xhdGVQYXJhbXMgPSB7XG4gICAgICAnY29sdW1uX25hbWUnOiBjb2x1bW5OYW1lLFxuICAgICAgJ3RpdGxlJzogdGhpcy5kYXRhVGFibGUudGl0bGVcbiAgICB9O1xuXG4gICAgdGhpcy5kYXRhVGFibGUuY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb24gPSAoaXNDaGVja2VkID8gdGhpcy5kYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yQWRkZWQgOlxuICAgICAgdGhpcy5kYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yUmVtb3ZlZClcbiAgICAgIC5yZXBsYWNlKCd7Y29sdW1uX25hbWV9JywgaW50ZXJwb2xhdGVQYXJhbXMuY29sdW1uX25hbWUpXG4gICAgICAucmVwbGFjZSgne3RpdGxlfScsIGludGVycG9sYXRlUGFyYW1zLnRpdGxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnR9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcmFuZ2UgY29sXCI+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvblRleHRcbiAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsIHRoaXMuTWF0aC5jZWlsKGRhdGFUYWJsZS5pdGVtQ291bnQgLyBkYXRhVGFibGUubGltaXQpICE9PSAwID8gZGF0YVRhYmxlLm9mZnNldCArIDEgKyAnJyA6ICcwJylcbiAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCB0aGlzLk1hdGgubWluKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQsIGRhdGFUYWJsZS5pdGVtQ291bnQpICsgJycpXG4gICAgICAgIC5yZXBsYWNlKCd7dG90YWx9JywgZGF0YVRhYmxlLml0ZW1Db3VudCArICcnKVwiPjwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1saW1pdCBjb2wtbWQtM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1saW1pdCdcIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uTGltaXRcIj48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlbGVjdCBbaWRdPVwiaWQgKyAnLXBhZ2UtbGltaXQnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cImxpbWl0XCIgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIj5cbiAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsIG9mIGxpbWl0c1wiIFt2YWx1ZV09XCJsXCI+e3sgbCB9fTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXBhZ2VzIG9mZnNldC1tZC0zIGNvbC1tZC02XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5vZmZzZXQgPD0gMFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZpcnN0KClcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1maXJzdHBhZ2VcIlxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuZmlyc3RQYWdlXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5vZmZzZXQgPD0gMFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUJhY2soKVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLXByZXZwYWdlXCJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLnByZXZQYWdlXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZCBkLXNtLWJsb2NrIGQtbm9uZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1pbnB1dCdcIj5cbiAgICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTGFiZWwgfX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0ICNwYWdlSW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgIFtpZF09XCJpZCArICctcGFnZS1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1pbj1cIjFcIiBzdGVwPVwiMVwiIG1heD1cInt7bWF4UGFnZX19XCJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgKGJsdXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKGtleXVwLmVzYyk9XCJwYWdlSW5wdXQudmFsdWUgPSBwYWdlXCJcbiAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlciArICcgJyArXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlck5vZk0ucmVwbGFjZSgne059JywgJycrcGFnZSkucmVwbGFjZSgne019JywgJycrbWF4UGFnZSlcIlxuICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cbiAgICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uVG90YWxQYWdlcyB9fSZuYnNwO3t7IGRhdGFUYWJsZS5sYXN0UGFnZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VGb3J3YXJkKClcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1uZXh0cGFnZVwiXG4gICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5uZXh0UGFnZVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIoZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCkgPj0gZGF0YVRhYmxlLml0ZW1Db3VudFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUxhc3QoKVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWxhc3RwYWdlXCJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmxhc3RQYWdlXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5wYWdpbmF0aW9uLWNvbnRyb2xsZXJzIHNlbGVjdHt0ZXh0LWFsaWduOnJpZ2h0fS5wYWdpbmF0aW9uLWJveCBidXR0b257b3V0bGluZTowIWltcG9ydGFudH1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IHtcblxuICBpZCA9IGBwYWdpbmF0aW9uLSR7bmV4dElkKyt9YDtcblxuICBAVmlld0NoaWxkKCdwYWdlSW5wdXQnKSBwYWdlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgTWF0aDogYW55O1xuXG4gIEBJbnB1dCgpIGxpbWl0czogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCkge1xuICAgIHRoaXMuTWF0aCA9IE1hdGg7XG4gIH1cblxuICBwYWdlQmFjaygpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgLT0gTWF0aC5taW4odGhpcy5kYXRhVGFibGUubGltaXQsIHRoaXMuZGF0YVRhYmxlLm9mZnNldCk7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLm9mZnNldCA8PSAwKSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuICBwYWdlRm9yd2FyZCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKz0gdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKyB0aGlzLmRhdGFUYWJsZS5saW1pdCkgPj0gdGhpcy5kYXRhVGFibGUuaXRlbUNvdW50KSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcGFnZUZpcnN0KCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCA9IDA7XG4gICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcGFnZUxhc3QoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ID0gKHRoaXMubWF4UGFnZSAtIDEpICogdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKyB0aGlzLmRhdGFUYWJsZS5saW1pdCkgPj0gdGhpcy5kYXRhVGFibGUuaXRlbUNvdW50KSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heFBhZ2UoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQgLyB0aGlzLmRhdGFUYWJsZS5saW1pdCk7XG4gIH1cblxuICBnZXQgbGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICB9XG5cbiAgc2V0IGxpbWl0KHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhVGFibGUubGltaXQgPSArdmFsdWU7XG4gICAgLy8gcmV0dXJuaW5nIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgdGhpcy5wYWdlID0gMTtcbiAgfVxuXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5wYWdlID0gK3ZhbHVlO1xuICB9XG5cbiAgdmFsaWRhdGUoZXZlbnQpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZSA9IChldmVudC50YXJnZXQudmFsdWUgPiB0aGlzLm1heFBhZ2UpID8gdGhpcy5tYXhQYWdlIDogKG5ld1ZhbHVlIDwgMSApID8gMSA6IG5ld1ZhbHVlO1xuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5wYWdlO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gbW9kdWxlc1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdXRpbHNcbmltcG9ydCB7IEhpZGVEaXJlY3RpdmUgfSBmcm9tICcuL3V0aWxzL2hpZGUnO1xuaW1wb3J0IHsgTWluUGlwZSB9IGZyb20gJy4vdXRpbHMvbWluJztcbmltcG9ydCB7IFBpeGVsQ29udmVydGVyIH0gZnJvbSAnLi91dGlscy9weCc7XG4vLyB0eXBlcyAmIHRvb2xzXG5pbXBvcnQgeyBEYXRhVGFibGVUcmFuc2xhdGlvbnMgfSBmcm9tICcuL3R5cGVzL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgQ2VsbENhbGxiYWNrIH0gZnJvbSAnLi90eXBlcy9jZWxsLWNhbGxiYWNrLnR5cGUnO1xuaW1wb3J0IHsgUm93Q2FsbGJhY2sgfSBmcm9tICcuL3R5cGVzL3Jvdy1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZVJlc291cmNlIH0gZnJvbSAnLi90b29scy9kYXRhLXRhYmxlLXJlc291cmNlJztcbmltcG9ydCB7IERhdGFUYWJsZVBhcmFtcyB9IGZyb20gJy4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG4vLyBjb21wb25lbnRzICYgZGlyZWN0aXZlc1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbHVtbi9jb2x1bW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQge1xuICBEYXRhVGFibGVDb21wb25lbnQsIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgRGF0YVRhYmxlUm93Q29tcG9uZW50LCBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LCBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQsXG4gIERhdGFUYWJsZVJlc291cmNlLFxuICBEYXRhVGFibGVQYXJhbXMsIERhdGFUYWJsZVRyYW5zbGF0aW9ucyxcbiAgQ2VsbENhbGxiYWNrLCBSb3dDYWxsYmFja1xufTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0YVRhYmxlQ29tcG9uZW50LCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlUm93Q29tcG9uZW50LCBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LCBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQsXG4gICAgUGl4ZWxDb252ZXJ0ZXIsIEhpZGVEaXJlY3RpdmUsIE1pblBpcGVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbRGF0YVRhYmxlQ29tcG9uZW50LCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmVdXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4VGFibGVNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hUYWJsZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG5cblxuIl0sIm5hbWVzIjpbIm5leHRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQU9BLGlCQUFpQixHQUFRO0lBQ3ZCLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0NBQzFDOztJQVVDLHVCQUFvQixXQUF1QixFQUFVLFFBQW1CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzs4QkFIL0MsS0FBSztLQUk3QjtJQUVELHNCQUNJLCtCQUFJOzs7OztRQURSLFVBQ1MsWUFBcUI7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFeEIsSUFBSSxZQUFZLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDMUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMzRTtpQkFBTSxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNqRixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN2RjtTQUNGOzs7T0FBQTs7OztJQUVPLHdDQUFnQjs7OztRQUN0QixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFOztZQUNwQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2xFLElBQUksWUFBWSxLQUFLLE1BQU0sRUFBRTtnQkFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7YUFDbkM7U0FDRjs7O2dCQTlCSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzs7O2dCQVhDLFVBQVU7Z0JBRVYsU0FBUzs7O3VCQWtCUixLQUFLOzt3QkF0QlI7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFPRSwyQkFBUzs7Ozs7SUFBVCxVQUFVLEtBQWUsRUFBRSxJQUFjO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOztnQkFORixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLEtBQUs7aUJBQ1o7O2tCQUxEOzs7Ozs7O0FDQUE7Ozs7Ozs7O0lBTUUsa0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFzQixFQUFFLElBQW1CO1FBQW5CLHFCQUFBLEVBQUEsU0FBbUI7UUFDbkQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDckI7S0FDRjs7Z0JBZEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxJQUFJO2lCQUNYOzt5QkFKRDs7Ozs7Ozs7OztBQ0dBOzs7QUFBQTtJQUVFLDJCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztLQUM3Qjs7Ozs7O0lBRUQsaUNBQUs7Ozs7O0lBQUwsVUFBTSxNQUF1QixFQUFFLE1BQXdEOztRQUVyRixJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDckIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFrQixFQUFFLENBQWtCO2dCQUNqRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ3hDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDNUM7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUM1QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7U0FDRjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwRTtTQUNGO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFBLENBQUMsQ0FBQztTQUNuQyxDQUFDLENBQUM7S0FDSjs7OztJQUVELGlDQUFLOzs7SUFBTDtRQUFBLGlCQUtDO1FBSkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQzlDLENBQUMsQ0FBQztLQUVKOzRCQS9DSDtJQWdEQzs7Ozs7O0FDaEREOztnQ0FVNkIsRUFBRTt3QkFJVCxLQUFLO3lCQUNKLEtBQUs7dUJBT1AsSUFBSTs7Ozs7OztJQUt2QiwrQ0FBWTs7Ozs7SUFBWixVQUFhLEdBQTBCLEVBQUUsS0FBYTtRQUNwRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE9BQU8sbUJBQWUsSUFBSSxDQUFDLFVBQVUsR0FBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEU7S0FDRjs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7OztJQUVPLGlEQUFjOzs7O1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzNFO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ25CLEdBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRyxJQUFJO21CQUN4QixDQUFDO1NBQ0g7Ozs7Z0JBN0NKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7O3lCQU1FLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3dCQUdMLEtBQUs7MEJBQ0wsS0FBSzsrQkFFTCxZQUFZLFNBQUMsZUFBZTtpQ0FDNUIsWUFBWSxTQUFDLGlCQUFpQjs7bUNBekJqQzs7Ozs7OztBQ0FBO0lBdUdFLCtCQUFpRSxTQUE2QixFQUMxRSxVQUE2QixVQUFzQjtRQUROLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzFFLGFBQVEsR0FBUixRQUFRO1FBQXFCLGVBQVUsR0FBVixVQUFVLENBQVk7cUJBeEN4RCxJQUFJOzBCQU9FLEVBQUU7OEJBS0ksSUFBSSxZQUFZLEVBQUU7S0E0QjhCO0lBMUIzRSxzQkFBSSwyQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQUVELFVBQWEsUUFBUTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQzs7O09BTEE7SUFRRCxzQkFBSSwrQ0FBWTs7Ozs7UUFBaEI7WUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO2dCQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUM3RDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7OztPQUFBOzs7O0lBRUQsMENBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvRDtRQUNELE9BQU8sRUFBRSxDQUFDO0tBQ1g7Ozs7SUFLRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFDekQsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUNyRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQzVELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUMzRCxDQUFDO1NBQ0g7S0FDRjs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQ3JDOztnQkE5R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxvc0ZBMkNYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHdWQUF3VixDQUFDO2lCQUNuVzs7OztnQkFqRFEsa0JBQWtCLHVCQTJGWixNQUFNLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsR0FBQSxDQUFDO2dCQTdGeEQsU0FBUztnQkFSVCxVQUFVOzs7dUJBZ0VULEtBQUs7d0JBQ0wsS0FBSztpQ0FTTCxNQUFNOztnQ0E1RVQ7Ozs7Ozs7O0FDRUEsSUFBYSxtQkFBbUIsR0FBMEI7SUFDeEQsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxvQkFBb0IsRUFBRSw4REFBOEQ7SUFDcEYseUJBQXlCLEVBQUUsc0NBQXNDO0lBQ2pFLDJCQUEyQixFQUFFLDBDQUEwQztJQUN2RSxXQUFXLEVBQUUsT0FBTztJQUNwQixZQUFZLEVBQUUsUUFBUTtJQUN0QixTQUFTLEVBQUUsdUJBQXVCO0lBQ2xDLGFBQWEsRUFBRSxpQkFBaUI7SUFDaEMsWUFBWSxFQUFFLFFBQVE7SUFDdEIsU0FBUyxFQUFFLHVCQUF1QjtJQUNsQyxlQUFlLEVBQUUsNENBQTRDO0lBQzdELGdCQUFnQixFQUFFLDZDQUE2QztJQUMvRCxhQUFhLEVBQUUsNEJBQTRCO0lBQzNDLGNBQWMsRUFBRSw2QkFBNkI7SUFDN0MsZUFBZSxFQUFFLE9BQU87SUFDeEIsY0FBYyxFQUFFLG9DQUFvQztJQUNwRCxvQkFBb0IsRUFBRSxJQUFJO0lBQzFCLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLGNBQWMsRUFBRSxjQUFjO0lBQzlCLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7SUFDdkMsVUFBVSxFQUFFLHNCQUFzQjtDQUNuQyxDQUFDOzs7Ozs7Ozs7OztBQ3pCRixjQUFxQixLQUFpQixFQUFFLEVBQTJEO1FBQTFELGNBQVUsRUFBRSxVQUFNOztJQUV6RCxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztJQUMzQixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztJQUMzQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7O0lBQ2YsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDOztJQUNmLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFFbEIsMEJBQTBCLEdBQWU7O1FBQ3ZDLElBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztRQUN6QixJQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2QsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1osS0FBSyxHQUFHLElBQUksQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDeEI7Ozs7O0lBRUQsd0JBQXdCLEdBQWU7UUFDckMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUVkLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXhELElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztDQUN0RDs7Ozs7OztBQ2JELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQzs7SUF1VmI7c0JBOU93QixFQUFFOztxQkFrQ1QsRUFBRTt5QkFDRSxJQUFJO3NCQUNQLElBQUk7MEJBQ0EsSUFBSTsyQkFDSCxJQUFJO2lDQUNFLEVBQUU7NEJBR1AsS0FBSzsyQkFDTixJQUFJOzhCQUNELElBQUk7OEJBQ0osS0FBSztnQ0FFSCxLQUFLOzBCQUNYLElBQUk7NkJBQ0QsS0FBSzswQkFFRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7NkJBQzdCLEVBQUU7O3NCQUdSLElBQUksWUFBWSxFQUFFOzt3QkFHaEIsSUFBSSxZQUFZLEVBQUU7OEJBQ1osSUFBSSxZQUFZLEVBQUU7MkJBQ3JCLElBQUksWUFBWSxFQUFFO3lCQUNwQixJQUFJLFlBQVksRUFBRTtnREFZTixFQUFFO3VCQUUxQixJQUFJLE9BQU8sRUFBUTt3QkFHbEIsSUFBSSxPQUFPLEVBQVE7NEJBS1UsRUFBRTtrQkFHckMsZUFBYSxNQUFNLEVBQUk7a0NBR0MsS0FBSztpQ0FHTixLQUFLOzJCQUVuQixFQUFFOzswQkFHSCxLQUFLO3dCQXdCQyxJQUFJO3VCQVlMLENBQUM7c0JBWUYsRUFBRTtLQTZGRjtJQXpPakIsc0JBQ0kscUNBQUs7Ozs7UUFEVDtZQUVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFFRCxVQUFVLEtBQVk7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7OztZQUdwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjs7O09BUEE7SUFVRCxzQkFDSSx5Q0FBUzs7OztRQURiO1lBRUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQUVELFVBQWMsS0FBYTtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCOzs7T0FMQTtJQThFRCxzQkFBSSx5Q0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQUVELFVBQWMsR0FBWTtZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCOzs7T0FMQTtJQVVELHNCQUNJLHNDQUFNOzs7O1FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBRUQsVUFBVyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7OztPQUxBO0lBU0Qsc0JBQ0ksdUNBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFFRCxVQUFZLEtBQWM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjs7O09BTEE7SUFTRCxzQkFDSSxzQ0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQUVELFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCOzs7T0FMQTtJQVNELHNCQUNJLHFDQUFLOzs7O1FBRFQ7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBRUQsVUFBVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7OztPQUxBO0lBUUQsc0JBQ0ksb0NBQUk7Ozs7O1FBRFI7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1RTs7Ozs7UUFFRCxVQUFTLEtBQUs7WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3hDOzs7T0FKQTtJQU1ELHNCQUFJLHdDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0M7OztPQUFBOzs7Ozs7O0lBR0QsaUNBQUk7Ozs7O0lBQUosVUFBSyxNQUFjLEVBQUUsR0FBWTtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztLQUNwQjs7Ozs7SUFHRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxNQUFNLGdCQUFPLG1CQUFtQixFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxHQUFBLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxHQUFBLENBQUMsQ0FBQztLQUUxRjs7OztJQUVPLCtDQUFrQjs7OztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7Ozs7SUFHekMsb0RBQXVCOzs7OztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDeEIsVUFBQyxVQUE4RCxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUEsQ0FBQyxDQUFDO1FBQzFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQixVQUFDLFVBQXdELElBQUssT0FBQSxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFBLENBQUMsQ0FBQztTQUNySDs7Ozs7SUFHSCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0tBQy9DOzs7O0lBRU8sOENBQWlCOzs7O1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOztJQUVILHNCQUFJLDZDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQzVCOzs7T0FBQTs7OztJQUVELGlEQUFvQjs7O0lBQXBCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztLQUNIOzs7Ozs7SUFJTSx1Q0FBVTs7Ozs7Y0FBQyxHQUEwQixFQUFFLEtBQVk7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEtBQUEsRUFBRSxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7Ozs7Ozs7SUFHNUIsNkNBQWdCOzs7OztjQUFDLEdBQTBCLEVBQUUsS0FBWTtRQUM5RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsS0FBQSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQzs7Ozs7OztJQUdsQywwQ0FBYTs7Ozs7Y0FBQyxNQUFnQyxFQUFFLEtBQVk7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1NBQ2hDOzs7Ozs7OztJQUdLLHdDQUFXOzs7Ozs7Y0FBQyxNQUFnQyxFQUFFLEdBQTBCLEVBQUUsS0FBaUI7UUFDakcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEtBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7Ozs7O0lBSXBDLGlEQUFvQjs7Ozs7UUFDMUIsSUFBTSxNQUFNLHFCQUFvQixFQUFFLEVBQUM7UUFFbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMvQjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDNUIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxNQUFNLENBQUM7Ozs7OztJQUdSLHVDQUFVOzs7O2NBQUMsTUFBZ0M7UUFDakQsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFOztZQUNuQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkM7O0lBR0gsc0JBQUksMkNBQVc7Ozs7UUFBZjs7WUFDRSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxLQUFLLElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLEtBQUssSUFBSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07Z0JBQ25DLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDZDs7O09BQUE7Ozs7Ozs7SUFFTSx3Q0FBVzs7Ozs7O2NBQUMsSUFBUyxFQUFFLEtBQWEsRUFBRSxHQUEwQjtRQUNyRSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ2hDLE9BQU8sbUJBQWMsSUFBSSxDQUFDLFNBQVMsR0FBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hEOztJQUdILHNCQUFJLGlEQUFpQjs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2hDOzs7OztRQUVELFVBQXNCLEtBQUs7WUFDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7OztPQUxBOzs7OztJQU9PLGdEQUFtQjs7OztjQUFDLEtBQWM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBQSxDQUFDLENBQUM7Ozs7OztJQUczRCwrQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsR0FBMEI7O1FBRzNDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTs7WUFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsSUFBSSxHQUFHLENBQUMsUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO2lCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNwQztTQUNGO2FBQU07WUFDTCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2FBQ3hCO2lCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxHQUFHLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN6QjtTQUNGOztRQUdELElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxHQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUM1RCxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7O29CQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztpQkFDdkI7YUFDRixDQUFDLENBQUM7U0FDSjtLQUNGO0lBSUQsc0JBQUksK0NBQWU7Ozs7O1FBQW5CO1lBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUMzRTs7O09BQUE7Ozs7Ozs7SUFFTSw4Q0FBaUI7Ozs7OztjQUFDLEtBQWlCLEVBQUUsTUFBZ0MsRUFBRSxhQUEwQjs7UUFDdEcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzs7UUFDOUIsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLEVBQUUsVUFBQyxTQUFxQixFQUFFLEVBQVU7Z0JBQ3RDLElBQUksS0FBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDNUMsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7aUJBQ25EO2FBQ0Y7U0FDRixDQUFDLENBQUM7Ozs7Ozs7SUFHRyw2Q0FBZ0I7Ozs7O2NBQUMsYUFBMEIsRUFBRSxFQUFVOzs7OztRQUs3RCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXO1lBQ2pFLENBQUMsYUFBYSxDQUFDLGtCQUFrQjs7YUFDaEMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFlLGFBQWEsQ0FBQyxrQkFBa0IsR0FBRSxXQUFXLEdBQUcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN0RyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7Ozs7O0lBR2QsK0NBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFpQyxHQUFFLFFBQVEsQ0FBQztTQUNoRjtLQUNGOzs7O0lBRUQsb0NBQU87OztJQUFQO1FBQUEsaUJBeUJDOztRQXhCQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRS9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO3FCQUNyRCxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztxQkFDOUYsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7cUJBQzFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTs7Z0JBQzNELElBQU0sR0FBRyxxQkFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxRQUFRLEtBQUssS0FBSSxDQUFDLE1BQU0sR0FBQSxDQUE2QixFQUFDO2dCQUMvRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCO3FCQUMvRixPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7cUJBQzlCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7YUFDNUI7U0FDRjtLQUNGOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzlCOztnQkFoZ0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDJtS0FnR1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsdzZDQUF3NkMsQ0FBQztpQkFDbjdDOzs7OzsrQkFNRSxLQUFLO3dCQUVMLEtBQUs7NEJBYUwsS0FBSzswQkFXTCxlQUFlLFNBQUMsd0JBQXdCO3VCQUN4QyxZQUFZLFNBQUMscUJBQXFCO2lDQUNsQyxZQUFZLFNBQUMsaUJBQWlCO3dCQUc5QixLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7b0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLO21DQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUdMLE1BQU07MkJBR04sTUFBTTtpQ0FDTixNQUFNOzhCQUNOLE1BQU07NEJBQ04sTUFBTTt5QkFrRE4sS0FBSzswQkFZTCxLQUFLO3lCQVlMLEtBQUs7d0JBWUwsS0FBSzt1QkFXTCxLQUFLOzs2QkFsU1I7Ozs7Ozs7QUNBQTtJQW9FRSxrQ0FBaUUsU0FBNkIsRUFDMUU7UUFENkMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDMUUsWUFBTyxHQUFQLE9BQU87a0NBSE4sS0FBSztLQUl6Qjs7Ozs7SUFFMkMsaURBQWM7Ozs7SUFBMUQsVUFBMkQsS0FBSztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7O0lBRTJDLGlEQUFjOzs7O0lBQTFELFVBQTJELEtBQUs7UUFDOUQsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUN2RyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7O0lBRUQsMkNBQVE7Ozs7SUFBUixVQUFTLEtBQVk7O1FBQ25CLElBQU0sU0FBUyxHQUFHLG1CQUFvQixLQUFLLENBQUMsTUFBTSxHQUFFLE9BQU8sQ0FBQzs7UUFDNUQsSUFBTSxVQUFVLEdBQUcsbUJBQW9CLEtBQUssQ0FBQyxNQUFNLEdBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7UUFDdEYsSUFBTSxpQkFBaUIsR0FBRztZQUN4QixhQUFhLEVBQUUsVUFBVTtZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1NBQzlCLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLDBCQUEwQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHlCQUF5QjtZQUN0RyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQywyQkFBMkI7YUFDaEQsT0FBTyxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7YUFDdkQsT0FBTyxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoRDs7Z0JBdkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsNDlGQWtEWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyx5bUJBQXltQixDQUFDO2lCQUNwbkI7Ozs7Z0JBeERRLGtCQUFrQix1QkE2RFosTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEdBQUEsQ0FBQztnQkFsRXhELFVBQVU7OztpQ0FzRVQsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO2lDQU16QyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O21DQTlFNUM7Ozs7Ozs7QUNBQTtBQVVBLElBQUlBLFFBQU0sR0FBRyxDQUFDLENBQUM7O0lBOEZiLHNDQUFpRSxTQUE2QjtRQUE3QixjQUFTLEdBQVQsU0FBUyxDQUFvQjtrQkFSekYsZ0JBQWNBLFFBQU0sRUFBSTtRQVMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNsQjs7OztJQUVELCtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztLQUNKOzs7O0lBQ0Msa0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzlFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDO0tBQ0Y7Ozs7SUFFRCxnREFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdEM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUM5RSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztLQUNGO0lBRUQsc0JBQUksaURBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25FOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQzdCOzs7OztRQUVELFVBQVUsS0FBSztZQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDOztZQUU5QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNmOzs7T0FOQTtJQVFELHNCQUFJLDhDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzVCOzs7OztRQUVELFVBQVMsS0FBSztZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzlCOzs7T0FKQTs7Ozs7SUFNRCwrQ0FBUTs7OztJQUFSLFVBQVMsS0FBSzs7UUFDWixJQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUNoRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2hDO0tBQ0Y7O2dCQXJKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLHN4SEE2RVg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsNkZBQTZGLENBQUM7aUJBQ3hHOzs7O2dCQXJGUSxrQkFBa0IsdUJBZ0daLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixHQUFBLENBQUM7Ozs0QkFOdkQsU0FBUyxTQUFDLFdBQVc7eUJBSXJCLEtBQUs7O3VDQXRHUjs7Ozs7OztBQ0NBOzs7Ozs7SUEyQ2dCLHNCQUFPOzs7O1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7OztnQkFsQkwsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0IsRUFBRSx3QkFBd0I7d0JBQzVDLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLHdCQUF3Qjt3QkFDN0UsY0FBYyxFQUFFLGFBQWEsRUFBRSxPQUFPO3FCQUN2QztvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHdCQUF3QixDQUFDO2lCQUN4RDs7eUJBekNEOzs7Ozs7Ozs7Ozs7Ozs7In0=