(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-table', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/forms'], factory) :
    (factory((global['ngx-table'] = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.ng.common,global.ng.forms));
}(this, (function (exports,core,rxjs,operators,common,forms) { 'use strict';

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
    var HideDirective = (function () {
        function HideDirective(_elementRef, renderer) {
            this._elementRef = _elementRef;
            this.renderer = renderer;
            this._prevCondition = false;
        }
        Object.defineProperty(HideDirective.prototype, "hide", {
            set: /**
             * @param {?} newCondition
             * @return {?}
             */ function (newCondition) {
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
            { type: core.Directive, args: [{
                        selector: '[hide]'
                    },] },
        ];
        /** @nocollapse */
        HideDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        HideDirective.propDecorators = {
            hide: [{ type: core.Input }]
        };
        return HideDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MinPipe = (function () {
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
            { type: core.Pipe, args: [{
                        name: 'min'
                    },] },
        ];
        return MinPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PixelConverter = (function () {
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
                if (args === void 0) {
                    args = [];
                }
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
            { type: core.Pipe, args: [{
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
    var /**
     * @template T
     */ DataTableResource = (function () {
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DataTableColumnDirective = (function () {
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
                    return ((this.cellColors))(row.item, row, this, index);
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
            { type: core.Directive, args: [{
                        selector: 'data-table-column'
                    },] },
        ];
        DataTableColumnDirective.propDecorators = {
            header: [{ type: core.Input }],
            sortable: [{ type: core.Input }],
            resizable: [{ type: core.Input }],
            property: [{ type: core.Input }],
            styleClass: [{ type: core.Input }],
            cellColors: [{ type: core.Input }],
            width: [{ type: core.Input }],
            visible: [{ type: core.Input }],
            cellTemplate: [{ type: core.ContentChild, args: ['dataTableCell',] }],
            headerTemplate: [{ type: core.ContentChild, args: ['dataTableHeader',] }]
        };
        return DataTableColumnDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DataTableRowComponent = (function () {
        function DataTableRowComponent(dataTable, renderer, elementRef) {
            this.dataTable = dataTable;
            this.renderer = renderer;
            this.elementRef = elementRef;
            this._this = this;
            this._listeners = [];
            this.selectedChange = new core.EventEmitter();
        }
        Object.defineProperty(DataTableRowComponent.prototype, "selected", {
            get: /**
             * @return {?}
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} selected
             * @return {?}
             */ function (selected) {
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: '[dataTableRow]',
                        template: "<tr class=\"data-table-row\"\n    [title]=\"getTooltip()\"\n    [style.background-color]=\"dataTable.getRowColor(item, index, _this)\"\n    [class.row-odd]=\"index % 2 === 0\"\n    [class.row-even]=\"index % 2 === 1\"\n    [class.selected]=\"selected\"\n    [class.clickable]=\"dataTable.selectOnRowClick\">\n  <td [hide]=\"!dataTable.expandColumnVisible\">\n    <button (click)=\"expanded = !expanded; $event.stopPropagation()\" class=\"row-expand-button\"\n         [attr.aria-expanded]=\"expanded\"\n         [title]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n         [attr.aria-label]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\">\n      <i [ngClass]=\"{'fa-caret-right': !expanded, 'fa-caret-down': expanded}\" class=\"fa fa-lg\" aria-hidden=\"true\"></i>\n    </button>\n  </td>\n  <td [hide]=\"!dataTable.indexColumnVisible\" class=\"index-column\" [textContent]=\"displayIndex\"></td>\n  <td [hide]=\"!dataTable.selectColumnVisible\" class=\"select-column\">\n    <input type=\"checkbox\" [(ngModel)]=\"selected\"\n           [title]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n           [attr.aria-label]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"/>\n  </td>\n  <ng-template ngFor [ngForOf]=\"dataTable.columns\" let-column>\n    <th *ngIf=\"dataTable.primaryColumn === column.property\" scope=\"row\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </th>\n    <td *ngIf=\"dataTable.primaryColumn !== column.property\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </td>\n  </ng-template>\n</tr>\n<tr *ngIf=\"dataTable.expandableRows\" [hide]=\"!expanded\" class=\"row-expansion\">\n  <td [attr.colspan]=\"dataTable.columnCount\">\n    <div [ngTemplateOutlet]=\"dataTable.expandTemplate\" [ngTemplateOutletContext]=\"{row: _this, item: item}\"></div>\n  </td>\n</tr>\n",
                        styles: [".select-column{text-align:center}.row-expand-button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable{cursor:pointer}th{font-weight:initial}"]
                    },] },
        ];
        /** @nocollapse */
        DataTableRowComponent.ctorParameters = function () {
            return [
                { type: DataTableComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return DataTableComponent; }),] }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        DataTableRowComponent.propDecorators = {
            item: [{ type: core.Input }],
            index: [{ type: core.Input }],
            selectedChange: [{ type: core.Output }]
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
    var DataTableComponent = (function () {
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
            this.reload = new core.EventEmitter();
            // event handlers:
            this.rowClick = new core.EventEmitter();
            this.rowDoubleClick = new core.EventEmitter();
            this.headerClick = new core.EventEmitter();
            this.cellClick = new core.EventEmitter();
            this._displayParams = /** @type {?} */ ({});
            this.subject = new rxjs.Subject();
            this.notifier = new rxjs.Subject();
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
             */ function () {
                return this._items;
            },
            set: /**
             * @param {?} items
             * @return {?}
             */ function (items) {
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
             */ function () {
                return this._itemCount;
            },
            set: /**
             * @param {?} count
             * @return {?}
             */ function (count) {
                this._itemCount = count;
                this.notifier.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTableComponent.prototype, "reloading", {
            get: /**
             * @return {?}
             */ function () {
                return this._reloading;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._reloading = val;
                this.notifier.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTableComponent.prototype, "sortBy", {
            get: /**
             * @return {?}
             */ function () {
                return this._sortBy;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._sortBy = value;
                this.subject.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTableComponent.prototype, "sortAsc", {
            get: /**
             * @return {?}
             */ function () {
                return this._sortAsc;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._sortAsc = value;
                this.subject.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTableComponent.prototype, "offset", {
            get: /**
             * @return {?}
             */ function () {
                return this._offset;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._offset = value;
                this.subject.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTableComponent.prototype, "limit", {
            get: /**
             * @return {?}
             */ function () {
                return this._limit;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this.itemCount !== 0 ? Math.floor(this.offset / this.limit) + 1 : 0;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.offset = (value - 1) * this.limit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTableComponent.prototype, "lastPage", {
            get: /**
             * @return {?}
             */ function () {
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
                this.subject$ = this.subject.pipe(operators.debounceTime(100)).subscribe(function () { return _this.reloadItems(); });
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
             */ function () {
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
                var params = ({});
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
             */ function () {
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
                    return ((this.rowColors))(item, row, index);
                }
            };
        Object.defineProperty(DataTableComponent.prototype, "selectAllCheckbox", {
            get: /**
             * @return {?}
             */ function () {
                return this._selectAllCheckbox;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
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
                    (dx >= 0 && (((columnElement.nextElementSibling)).offsetWidth + dx) <= this.resizeLimit)) {
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
                    this.primaryColumn = ((this.columns.first)).property;
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
                        var col = (this.columns.toArray().find(function (column) { return column.property === _this.sortBy; }));
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
            { type: core.Component, args: [{
                        selector: 'data-table',
                        template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    <span [textContent]=\"reloadNotification\"></span>\n    <span [textContent]=\"paginationNotification\"></span>\n    <span [textContent]=\"sortNotification\"></span>\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\">\n    <table class=\"table data-table\" [id]=\"id\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <td [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <input [hide]=\"!multiSelect\"\n                 type=\"checkbox\"\n                 [(ngModel)]=\"selectAllCheckbox\"\n                 [disabled]=\"itemCount === 0\"\n                 [title]=\"labels.selectAllRows\"\n                 [attr.aria-label]=\"labels.selectAllRows\"/>\n        </td>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\"\n                  [title]=\"!sortAsc ? labels.sortAscending : labels.sortDescending\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                aria-hidden=\"true\"></i>\n              <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n",
                        styles: [":host /deep/ .data-table.table>tbody+tbody{border-top:none}:host /deep/ .data-table.table td{vertical-align:middle}:host /deep/ .data-table>tbody>tr>td,:host /deep/ .data-table>thead>tr>th{overflow:hidden}:host /deep/ .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host /deep/ .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host /deep/ .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec;table-layout:fixed}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy>i{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
                    },] },
        ];
        /** @nocollapse */
        DataTableComponent.ctorParameters = function () { return []; };
        DataTableComponent.propDecorators = {
            items: [{ type: core.Input }],
            itemCount: [{ type: core.Input }],
            columns: [{ type: core.ContentChildren, args: [DataTableColumnDirective,] }],
            rows: [{ type: core.ViewChildren, args: [DataTableRowComponent,] }],
            expandTemplate: [{ type: core.ContentChild, args: ['dataTableExpand',] }],
            title: [{ type: core.Input }],
            showTitle: [{ type: core.Input }],
            header: [{ type: core.Input }],
            pagination: [{ type: core.Input }],
            indexColumn: [{ type: core.Input }],
            indexColumnHeader: [{ type: core.Input }],
            rowColors: [{ type: core.Input }],
            rowTooltip: [{ type: core.Input }],
            selectColumn: [{ type: core.Input }],
            multiSelect: [{ type: core.Input }],
            substituteRows: [{ type: core.Input }],
            expandableRows: [{ type: core.Input }],
            labels: [{ type: core.Input }],
            selectOnRowClick: [{ type: core.Input }],
            autoReload: [{ type: core.Input }],
            showReloading: [{ type: core.Input }],
            noDataMessage: [{ type: core.Input }],
            pageLimits: [{ type: core.Input }],
            primaryColumn: [{ type: core.Input }],
            reload: [{ type: core.Output }],
            rowClick: [{ type: core.Output }],
            rowDoubleClick: [{ type: core.Output }],
            headerClick: [{ type: core.Output }],
            cellClick: [{ type: core.Output }],
            sortBy: [{ type: core.Input }],
            sortAsc: [{ type: core.Input }],
            offset: [{ type: core.Input }],
            limit: [{ type: core.Input }],
            page: [{ type: core.Input }]
        };
        return DataTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DataTableHeaderComponent = (function () {
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
                var isChecked = ((event.target)).checked;
                /** @type {?} */
                var columnName = ((event.target)).parentElement.textContent.trim();
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
            { type: core.Component, args: [{
                        selector: 'data-table-header',
                        template: "<div class=\"data-table-header\">\n  <p class=\"h4 title\" *ngIf=\"dataTable.showTitle\" [textContent]=\"dataTable.title\"></p>\n  <div class=\"button-panel\">\n    <button type=\"button\" class=\"btn btn-default btn-sm refresh-button\"\n            (click)=\"dataTable.reloadItems()\"\n            [title]=\"dataTable.labels.headerReload.replace('{title}', dataTable.title)\">\n      <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-default btn-sm column-selector-button\" [class.active]=\"columnSelectorOpen\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.aria-expanded]=\"columnSelectorOpen\"\n            (click)=\"columnSelectorOpen = !columnSelectorOpen;\"\n            [title]=\"dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title)\">\n      <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"column-selector-wrapper\">\n      <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box panel panel-default\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngIf=\"dataTable.expandableRows\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.expandColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.expandColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.indexColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.indexColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.indexColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.selectColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.selectColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.selectColumn\"></span>\n            </label>\n          </li>\n          <ng-template ngFor let-item let-i=\"index\" [ngForOf]=\"dataTable.columns\">\n            <li class=\"list-group-item column-selector-column checkbox\"\n                *ngIf=\"dataTable.primaryColumn !== item.property\">\n              <label class=\"d-flex align-items-center\">\n                <input type=\"checkbox\" [(ngModel)]=\"item.visible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n                <span [textContent]=\"item.header\"></span>\n              </label>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:0!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}"]
                    },] },
        ];
        /** @nocollapse */
        DataTableHeaderComponent.ctorParameters = function () {
            return [
                { type: DataTableComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return DataTableComponent; }),] }] },
                { type: core.ElementRef }
            ];
        };
        DataTableHeaderComponent.propDecorators = {
            onClickHandler: [{ type: core.HostListener, args: ['document:click', ['$event'],] }],
            onKeyUpHandler: [{ type: core.HostListener, args: ['document:keyup', ['$event'],] }]
        };
        return DataTableHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextId$1 = 0;
    var DataTablePaginationComponent = (function () {
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
             */ function () {
                return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTablePaginationComponent.prototype, "limit", {
            get: /**
             * @return {?}
             */ function () {
                return this.dataTable.limit;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this.dataTable.page;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'data-table-pagination',
                        template: "<div class=\"d-flex justify-content-between align-items-center\">\n  <div class=\"pagination-range\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n  </div>\n  <div class=\"pagination-controllers pagination-box d-flex justify-content-between\">\n    <div class=\"pagination-limit d-flex justify-content-between\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n        </div>\n        <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\" [disabled]=\"dataTable.itemCount === 0\">\n          <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"pagination-pages d-flex justify-content-between\">\n      <button [disabled]=\"dataTable.offset <= 0\"\n              (click)=\"pageFirst()\"\n              class=\"btn btn-default pagination-firstpage\"\n              [title]=\"dataTable.labels.firstPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n      <button [disabled]=\"dataTable.offset <= 0\"\n              (click)=\"pageBack()\"\n              class=\"btn btn-default pagination-prevpage\"\n              [title]=\"dataTable.labels.prevPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n      <div class=\"pagination-page\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n              {{ dataTable.labels.pageNumberLabel }}\n            </label>\n          </div>\n          <input #pageInput type=\"number\"\n                 [id]=\"id + '-page-input'\"\n                 class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n                 [disabled]=\"dataTable.itemCount === 0\"\n                 [ngModel]=\"page\"\n                 (blur)=\"validate($event)\"\n                 (keyup.enter)=\"validate($event)\"\n                 (keyup.esc)=\"pageInput.value = page\"\n                 [title]=\"dataTable.labels.pageNumber + ' ' +\n                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)\"\n                 [attr.aria-controls]=\"dataTable.id\"/>\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n          </div>\n        </div>\n      </div>\n      <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n              (click)=\"pageForward()\"\n              class=\"btn btn-default pagination-nextpage\"\n              [title]=\"dataTable.labels.nextPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n      <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n              (click)=\"pageLast()\"\n              class=\"btn btn-default pagination-lastpage\"\n              [title]=\"dataTable.labels.lastPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n",
                        styles: [".pagination-controllers select{min-width:5rem;text-align:right}.pagination-pages>*{margin:0 .15rem}.pagination-limit{margin-right:1.5rem}.pagination-box button{outline:0!important}"]
                    },] },
        ];
        /** @nocollapse */
        DataTablePaginationComponent.ctorParameters = function () {
            return [
                { type: DataTableComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return DataTableComponent; }),] }] }
            ];
        };
        DataTablePaginationComponent.propDecorators = {
            pageInput: [{ type: core.ViewChild, args: ['pageInput',] }],
            limits: [{ type: core.Input }]
        };
        return DataTablePaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxTableModule = (function () {
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
            { type: core.NgModule, args: [{
                        declarations: [
                            DataTableComponent, DataTableColumnDirective,
                            DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
                            PixelConverter, HideDirective, MinPipe
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
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

    exports.NgxTableModule = NgxTableModule;
    exports.DataTable = DataTableComponent;
    exports.DataTableColumn = DataTableColumnDirective;
    exports.DataTableRow = DataTableRowComponent;
    exports.DataTablePagination = DataTablePaginationComponent;
    exports.DataTableHeader = DataTableHeaderComponent;
    exports.DataTableResource = DataTableResource;
    exports.ɵb = HideDirective;
    exports.ɵc = MinPipe;
    exports.ɵa = PixelConverter;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRhYmxlL2xpYi91dGlscy9oaWRlLnRzIiwibmc6Ly9uZ3gtdGFibGUvbGliL3V0aWxzL21pbi50cyIsIm5nOi8vbmd4LXRhYmxlL2xpYi91dGlscy9weC50cyIsIm5nOi8vbmd4LXRhYmxlL2xpYi90b29scy9kYXRhLXRhYmxlLXJlc291cmNlLnRzIixudWxsLCJuZzovL25neC10YWJsZS9saWIvZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LXRhYmxlL2xpYi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtdGFibGUvbGliL3R5cGVzL2RlZmF1bHQtdHJhbnNsYXRpb25zLnR5cGUudHMiLCJuZzovL25neC10YWJsZS9saWIvdXRpbHMvZHJhZy50cyIsIm5nOi8vbmd4LXRhYmxlL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXRhYmxlL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtdGFibGUvbGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXRhYmxlL2xpYi9uZ3gtdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gaXNCbGFuayhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIEhpZGVEaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX3ByZXZDb25kaXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzcGxheVN0eWxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGlkZShuZXdDb25kaXRpb246IGJvb2xlYW4pIHtcbiAgICB0aGlzLmluaXREaXNwbGF5U3R5bGUoKTtcblxuICAgIGlmIChuZXdDb25kaXRpb24gJiYgKGlzQmxhbmsodGhpcy5fcHJldkNvbmRpdGlvbikgfHwgIXRoaXMuX3ByZXZDb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9wcmV2Q29uZGl0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSBlbHNlIGlmICghbmV3Q29uZGl0aW9uICYmIChpc0JsYW5rKHRoaXMuX3ByZXZDb25kaXRpb24pIHx8IHRoaXMuX3ByZXZDb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9wcmV2Q29uZGl0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCB0aGlzLl9kaXNwbGF5U3R5bGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdERpc3BsYXlTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fZGlzcGxheVN0eWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRpc3BsYXlTdHlsZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgaWYgKGRpc3BsYXlTdHlsZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlTdHlsZSA9IGRpc3BsYXlTdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AUGlwZSh7XG4gIG5hbWU6ICdtaW4nXG59KVxuZXhwb3J0IGNsYXNzIE1pblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXJbXSwgYXJnczogc3RyaW5nW10pOiBhbnkge1xuICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCB2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAncHgnXG59KVxuZXhwb3J0IGNsYXNzIFBpeGVsQ29udmVydGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBhcmdzOiBzdHJpbmdbXSA9IFtdKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHZhbHVlICsgJ3B4JztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7RGF0YVRhYmxlUGFyYW1zfSBmcm9tICcuLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcblxuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUmVzb3VyY2U8VD4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbXM6IFRbXSkge1xuICB9XG5cbiAgcXVlcnkocGFyYW1zOiBEYXRhVGFibGVQYXJhbXMsIGZpbHRlcj86IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBpdGVtczogVFtdKSA9PiBib29sZWFuKTogUHJvbWlzZTxUW10+IHtcblxuICAgIGxldCByZXN1bHQ6IFRbXSA9IFtdO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaXRlbXMuZmlsdGVyKGZpbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaXRlbXMuc2xpY2UoKTsgLy8gc2hhbGxvdyBjb3B5IHRvIHVzZSBmb3Igc29ydGluZyBpbnN0ZWFkIG9mIGNoYW5naW5nIHRoZSBvcmlnaW5hbFxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc29ydEJ5KSB7XG4gICAgICByZXN1bHQuc29ydCgoYTogRGF0YVRhYmxlUGFyYW1zLCBiOiBEYXRhVGFibGVQYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhW3BhcmFtcy5zb3J0QnldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBhW3BhcmFtcy5zb3J0QnldLmxvY2FsZUNvbXBhcmUoYltwYXJhbXMuc29ydEJ5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFbcGFyYW1zLnNvcnRCeV0gLSBiW3BhcmFtcy5zb3J0QnldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXJhbXMuc29ydEFzYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzdWx0LnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHBhcmFtcy5saW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShwYXJhbXMub2Zmc2V0LCByZXN1bHQubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShwYXJhbXMub2Zmc2V0LCBwYXJhbXMub2Zmc2V0ICsgcGFyYW1zLmxpbWl0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHJlc3VsdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRoaXMuaXRlbXMubGVuZ3RoKSk7XG4gICAgfSk7XG5cbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge0NvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVRhYmxlUm93Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7Q2VsbENhbGxiYWNrfSBmcm9tICcuLi8uLi90eXBlcy9jZWxsLWNhbGxiYWNrLnR5cGUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtY29sdW1uJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc3R5bGVDbGFzc09iamVjdCA9IHt9OyAvLyBmb3IgW25nQ2xhc3NdXG5cbiAgLy8gaW5pdDpcbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNvcnRhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlc2l6YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBwcm9wZXJ0eTogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNlbGxDb2xvcnM6IENlbGxDYWxsYmFjaztcblxuICAvLyBpbml0IGFuZCBzdGF0ZTpcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgdmlzaWJsZSA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlQ2VsbCcpIGNlbGxUZW1wbGF0ZTogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlSGVhZGVyJykgaGVhZGVyVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0Q2VsbENvbG9yKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY2VsbENvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKDxDZWxsQ2FsbGJhY2s+dGhpcy5jZWxsQ29sb3JzKShyb3cuaXRlbSwgcm93LCB0aGlzLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5faW5pdENlbGxDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdENlbGxDbGFzcygpIHtcbiAgICBpZiAoIXRoaXMuc3R5bGVDbGFzcyAmJiB0aGlzLnByb3BlcnR5KSB7XG4gICAgICBpZiAoL15bYS16QS1aMC05X10rJC8udGVzdCh0aGlzLnByb3BlcnR5KSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAnY29sdW1uLScgKyB0aGlzLnByb3BlcnR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJ2NvbHVtbi0nICsgdGhpcy5wcm9wZXJ0eS5yZXBsYWNlKC9bXmEtekEtWjAtOV9dL2csICcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdHlsZUNsYXNzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzc09iamVjdCA9IHtcbiAgICAgICAgW3RoaXMuc3R5bGVDbGFzc106IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2RhdGFUYWJsZVJvd10nLFxuICB0ZW1wbGF0ZTogYDx0ciBjbGFzcz1cImRhdGEtdGFibGUtcm93XCJcbiAgICBbdGl0bGVdPVwiZ2V0VG9vbHRpcCgpXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJkYXRhVGFibGUuZ2V0Um93Q29sb3IoaXRlbSwgaW5kZXgsIF90aGlzKVwiXG4gICAgW2NsYXNzLnJvdy1vZGRdPVwiaW5kZXggJSAyID09PSAwXCJcbiAgICBbY2xhc3Mucm93LWV2ZW5dPVwiaW5kZXggJSAyID09PSAxXCJcbiAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxuICAgIFtjbGFzcy5jbGlja2FibGVdPVwiZGF0YVRhYmxlLnNlbGVjdE9uUm93Q2xpY2tcIj5cbiAgPHRkIFtoaWRlXT1cIiFkYXRhVGFibGUuZXhwYW5kQ29sdW1uVmlzaWJsZVwiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cImV4cGFuZGVkID0gIWV4cGFuZGVkOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiBjbGFzcz1cInJvdy1leHBhbmQtYnV0dG9uXCJcbiAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiZXhwYW5kZWRcIlxuICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kUm93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCJcbiAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF0YVRhYmxlLmxhYmVscy5leHBhbmRSb3cucmVwbGFjZSgne2NlbGxfY29udGVudH0nLCAnJytpdGVtW2RhdGFUYWJsZS5wcmltYXJ5Q29sdW1uXSlcIj5cbiAgICAgIDxpIFtuZ0NsYXNzXT1cInsnZmEtY2FyZXQtcmlnaHQnOiAhZXhwYW5kZWQsICdmYS1jYXJldC1kb3duJzogZXhwYW5kZWR9XCIgY2xhc3M9XCJmYSBmYS1sZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgPC90ZD5cbiAgPHRkIFtoaWRlXT1cIiFkYXRhVGFibGUuaW5kZXhDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJpbmRleC1jb2x1bW5cIiBbdGV4dENvbnRlbnRdPVwiZGlzcGxheUluZGV4XCI+PC90ZD5cbiAgPHRkIFtoaWRlXT1cIiFkYXRhVGFibGUuc2VsZWN0Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwic2VsZWN0LWNvbHVtblwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuc2VsZWN0Um93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCJcbiAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJkYXRhVGFibGUubGFiZWxzLnNlbGVjdFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiLz5cbiAgPC90ZD5cbiAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cImRhdGFUYWJsZS5jb2x1bW5zXCIgbGV0LWNvbHVtbj5cbiAgICA8dGggKm5nSWY9XCJkYXRhVGFibGUucHJpbWFyeUNvbHVtbiA9PT0gY29sdW1uLnByb3BlcnR5XCIgc2NvcGU9XCJyb3dcIiBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIiBbbmdDbGFzc109XCJjb2x1bW4uc3R5bGVDbGFzc09iamVjdFwiXG4gICAgICAgIGNsYXNzPVwiZGF0YS1jb2x1bW5cIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2x1bW4uZ2V0Q2VsbENvbG9yKF90aGlzLCBpbmRleClcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCIhY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFt0ZXh0Q29udGVudF09XCJpdGVtW2NvbHVtbi5wcm9wZXJ0eV1cIj48L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW4sIHJvdzogX3RoaXMsIGl0ZW06IGl0ZW19XCI+PC9kaXY+XG4gICAgPC90aD5cbiAgICA8dGQgKm5nSWY9XCJkYXRhVGFibGUucHJpbWFyeUNvbHVtbiAhPT0gY29sdW1uLnByb3BlcnR5XCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCIgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIlxuICAgICAgICBjbGFzcz1cImRhdGEtY29sdW1uXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sdW1uLmdldENlbGxDb2xvcihfdGhpcywgaW5kZXgpXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbdGV4dENvbnRlbnRdPVwiaXRlbVtjb2x1bW4ucHJvcGVydHldXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1uLCByb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICAgIDwvdGQ+XG4gIDwvbmctdGVtcGxhdGU+XG48L3RyPlxuPHRyICpuZ0lmPVwiZGF0YVRhYmxlLmV4cGFuZGFibGVSb3dzXCIgW2hpZGVdPVwiIWV4cGFuZGVkXCIgY2xhc3M9XCJyb3ctZXhwYW5zaW9uXCI+XG4gIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImRhdGFUYWJsZS5jb2x1bW5Db3VudFwiPlxuICAgIDxkaXYgW25nVGVtcGxhdGVPdXRsZXRdPVwiZGF0YVRhYmxlLmV4cGFuZFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntyb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICA8L3RkPlxuPC90cj5cbmAsXG4gIHN0eWxlczogW2Auc2VsZWN0LWNvbHVtbnt0ZXh0LWFsaWduOmNlbnRlcn0ucm93LWV4cGFuZC1idXR0b257Ym94LXNpemluZzpjb250ZW50LWJveDtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6MDtjb2xvcjppbmhlcml0O2N1cnNvcjpwb2ludGVyO2ZvbnQ6aW5oZXJpdDtsaW5lLWhlaWdodDpub3JtYWw7b3ZlcmZsb3c6dmlzaWJsZTtwYWRkaW5nOi4xNXJlbSAuNzVyZW07LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lfS5jbGlja2FibGV7Y3Vyc29yOnBvaW50ZXJ9dGh7Zm9udC13ZWlnaHQ6aW5pdGlhbH1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIF90aGlzID0gdGhpcztcblxuICBASW5wdXQoKSBpdGVtOiBhbnk7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfbGlzdGVuZXJzID0gW107XG5cbiAgLy8gcm93IHNlbGVjdGlvbjpcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChzZWxlY3RlZCk7XG4gIH1cblxuICAvLyBvdGhlcjpcbiAgZ2V0IGRpc3BsYXlJbmRleCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucGFnaW5hdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLmRpc3BsYXlQYXJhbXMub2Zmc2V0ICsgdGhpcy5pbmRleCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV4ICsgMTtcbiAgICB9XG4gIH1cblxuICBnZXRUb29sdGlwKCkge1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dUb29sdGlwKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUucm93VG9vbHRpcCh0aGlzLml0ZW0sIHRoaXMsIHRoaXMuaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93Q2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJyxcbiAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuZGF0YVRhYmxlLnJvd0NsaWNrZWQodGhpcywgZXZlbnQpKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd0RvdWJsZUNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYmxjbGljaycsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmRhdGFUYWJsZS5yb3dEb3VibGVDbGlja2VkKHRoaXMsIGV2ZW50KSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVGFibGVUcmFuc2xhdGlvbnMgfSBmcm9tICcuL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLnR5cGUnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRyYW5zbGF0aW9uczogRGF0YVRhYmxlVHJhbnNsYXRpb25zID0ge1xuICBoZWFkZXJSZWxvYWQ6ICdyZWxvYWQge3RpdGxlfSB0YWJsZScsXG4gIGhlYWRlckNvbHVtblNlbGVjdG9yOiAnY29sdW1uIHNlbGVjdG9yIC0gYWRkcyBvciByZW1vdmVzIGNvbHVtbnMgZnJvbSB7dGl0bGV9IHRhYmxlJyxcbiAgaGVhZGVyQ29sdW1uU2VsZWN0b3JBZGRlZDogJ3tjb2x1bW5fbmFtZX0gYWRkZWQgdG8ge3RpdGxlfSB0YWJsZScsXG4gIGhlYWRlckNvbHVtblNlbGVjdG9yUmVtb3ZlZDogJ3tjb2x1bW5fbmFtZX0gcmVtb3ZlZCBmcm9tIHt0aXRsZX0gdGFibGUnLFxuICBpbmRleENvbHVtbjogJ2luZGV4JyxcbiAgc2VsZWN0Q29sdW1uOiAnc2VsZWN0JyxcbiAgc2VsZWN0Um93OiAnc2VsZWN0IHtjZWxsX2NvbnRlbnR9JyxcbiAgc2VsZWN0QWxsUm93czogJ3NlbGVjdCBhbGwgcm93cycsXG4gIGV4cGFuZENvbHVtbjogJ2V4cGFuZCcsXG4gIGV4cGFuZFJvdzogJ2V4cGFuZCB7Y2VsbF9jb250ZW50fScsXG4gIHNvcnRlZEFzY2VuZGluZzogJ3t0aXRsZX0gdGFibGUgc29ydGVkIGJ5IHtoZWFkZXJ9IGFzY2VuZGluZycsXG4gIHNvcnRlZERlc2NlbmRpbmc6ICd7dGl0bGV9IHRhYmxlIHNvcnRlZCBieSB7aGVhZGVyfSBkZXNjZW5kaW5nJyxcbiAgc29ydEFzY2VuZGluZzogJ2FjdGl2YXRlIHRvIHNvcnQgYXNjZW5kaW5nJyxcbiAgc29ydERlc2NlbmRpbmc6ICdhY3RpdmF0ZSB0byBzb3J0IGRlc2NlbmRpbmcnLFxuICBwYWdpbmF0aW9uTGltaXQ6ICdMaW1pdCcsXG4gIHBhZ2luYXRpb25UZXh0OiAnUmVzdWx0czoge2Zyb219IHRvIHt0b30gb2Yge3RvdGFsfScsXG4gIHBhZ2luYXRpb25Ub3RhbFBhZ2VzOiAnb2YnLFxuICBmaXJzdFBhZ2U6ICdmaXJzdCBwYWdlJyxcbiAgcHJldlBhZ2U6ICdwcmV2aW91cyBwYWdlJyxcbiAgcGFnZU51bWJlckxhYmVsOiAnUGFnZScsXG4gIHBhZ2VOdW1iZXI6ICdwYWdlIG51bWJlcicsXG4gIHBhZ2VOdW1iZXJOb2ZNOiAnKHtOfSBvZiB7TX0pJyxcbiAgbmV4dFBhZ2U6ICduZXh0IHBhZ2UnLFxuICBsYXN0UGFnZTogJ2xhc3QgcGFnZScsXG4gIGxvYWRpbmdUZXh0OiAne3RpdGxlfSB0YWJsZSBpcyBsb2FkaW5nJyxcbiAgbG9hZGVkVGV4dDogJ3t0aXRsZX0gdGFibGUgbG9hZGVkJ1xufTtcbiIsImV4cG9ydCB0eXBlIE1vdmVIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50LCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIFVwSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG1vdmVkOiBib29sZWFuKSA9PiB2b2lkO1xuXG4vKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSovXG5leHBvcnQgZnVuY3Rpb24gZHJhZyhldmVudDogTW91c2VFdmVudCwge21vdmU6IG1vdmUsIHVwOiB1cH06IHsgbW92ZTogTW92ZUhhbmRsZXIsIHVwPzogVXBIYW5kbGVyIH0pIHtcblxuICBjb25zdCBzdGFydFggPSBldmVudC5wYWdlWDtcbiAgY29uc3Qgc3RhcnRZID0gZXZlbnQucGFnZVk7XG4gIGxldCB4ID0gc3RhcnRYO1xuICBsZXQgeSA9IHN0YXJ0WTtcbiAgbGV0IG1vdmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBkeCA9IGV2dC5wYWdlWCAtIHg7XG4gICAgY29uc3QgZHkgPSBldnQucGFnZVkgLSB5O1xuICAgIHggPSBldnQucGFnZVg7XG4gICAgeSA9IGV2dC5wYWdlWTtcbiAgICBpZiAoZHggfHwgZHkpIHtcbiAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBtb3ZlKGV2dCwgZHgsIGR5LCB4LCB5KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHRvIGF2b2lkIHRleHQgc2VsZWN0aW9uXG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB4ID0gZXZ0LnBhZ2VYO1xuICAgIHkgPSBldnQucGFnZVk7XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuXG4gICAgaWYgKHVwKSB7XG4gICAgICB1cChldmVudCwgeCwgeSwgbW92ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuLi9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYXJhbXMgfSBmcm9tICcuLi8uLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcbmltcG9ydCB7IFJvd0NhbGxiYWNrIH0gZnJvbSAnLi4vLi4vdHlwZXMvcm93LWNhbGxiYWNrLnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0YS10YWJsZS10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkZWZhdWx0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGVmYXVsdC10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBkcmFnIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHJhZyc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJzsgXG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS13cmFwcGVyXCI+XG4gIDxzcGFuIGNsYXNzPVwic3Itb25seVwiIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWF0b21pYz1cImZhbHNlXCIgYXJpYS1yZWxldmFudD1cInRleHRcIj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwicmVsb2FkTm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJwYWdpbmF0aW9uTm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3J0Tm90aWZpY2F0aW9uXCI+PC9zcGFuPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJjb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvblwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuXG4gIDxkYXRhLXRhYmxlLWhlYWRlciAqbmdJZj1cImhlYWRlclwiPjwvZGF0YS10YWJsZS1oZWFkZXI+XG5cbiAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtYm94XCI+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgZGF0YS10YWJsZVwiIFtpZF09XCJpZFwiPlxuICAgICAgPGNhcHRpb24gY2xhc3M9XCJzci1vbmx5XCIgW3RleHRDb250ZW50XT1cInRpdGxlXCI+PC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWV4cGFuZENvbHVtblZpc2libGVcIiBjbGFzcz1cImV4cGFuZC1jb2x1bW4taGVhZGVyXCI+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiIFtoaWRlXT1cIiFpbmRleENvbHVtblZpc2libGVcIiBjbGFzcz1cImluZGV4LWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiaW5kZXhDb2x1bW5IZWFkZXJcIj48L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhc2VsZWN0Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwic2VsZWN0LWNvbHVtbi1oZWFkZXJcIj5cbiAgICAgICAgICA8aW5wdXQgW2hpZGVdPVwiIW11bHRpU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgICBbdGl0bGVdPVwibGFiZWxzLnNlbGVjdEFsbFJvd3NcIlxuICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVscy5zZWxlY3RBbGxSb3dzXCIvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zLCBpbmRleCBhcyBpXCIgI3RoXG4gICAgICAgICAgICBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIlxuICAgICAgICAgICAgW2NsYXNzLnNvcnRhYmxlXT1cImNvbHVtbi5zb3J0YWJsZVwiXG4gICAgICAgICAgICBbY2xhc3MucmVzaXphYmxlXT1cImNvbHVtbi5yZXNpemFibGVcIlxuICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1zb3J0XT1cImNvbHVtbi5zb3J0YWJsZSA/IChjb2x1bW4ucHJvcGVydHkgPT09IHNvcnRCeSA/IChzb3J0QXNjID8gJ2FzY2VuZGluZycgOiAnZGVzY2VuZGluZycpIDogJ25vbmUnKSA6IG51bGxcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIiBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIiBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoIHwgcHhcIiA+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNvbHVtbi5zb3J0YWJsZVwiIChjbGljayk9XCJoZWFkZXJDbGlja2VkKGNvbHVtbiwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImNvbHVtbi5zb3J0YWJsZSA/IGlkIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cIiFzb3J0QXNjID8gbGFiZWxzLnNvcnRBc2NlbmRpbmcgOiBsYWJlbHMuc29ydERlc2NlbmRpbmdcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtpZF09XCInY29sLScraWQrJy0nK2lcIlxuICAgICAgICAgICAgICAgICAgW3RleHRDb250ZW50XT1cImNvbHVtbi5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1ufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLXNvcnQtaWNvblwiICpuZ0lmPVwiY29sdW1uLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5XCIgY2xhc3M9XCJmYSBmYS1zb3J0IGNvbHVtbi1zb3J0YWJsZS1pY29uXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSAhPT0gc29ydEJ5XCIgY2xhc3M9XCJmYVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmYS1zb3J0LWFzYyc6IHNvcnRBc2MsICdmYS1zb3J0LWRlc2MnOiAhc29ydEFzY31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbHVtbi5yZXNpemFibGVcIiBjbGFzcz1cImNvbHVtbi1yZXNpemUtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwicmVzaXplQ29sdW1uU3RhcnQoJGV2ZW50LCBjb2x1bW4sIHRoKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbdGV4dENvbnRlbnRdPVwiY29sdW1uLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4tc29ydC1pY29uXCIgKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIj5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gc29ydEJ5XCIgY2xhc3M9XCJmYSBmYS1zb3J0IGNvbHVtbi1zb3J0YWJsZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgIDxpIFtoaWRlXT1cImNvbHVtbi5wcm9wZXJ0eSAhPT0gc29ydEJ5XCIgY2xhc3M9XCJmYVwiXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ZhLXNvcnQtYXNjJzogc29ydEFzYywgJ2ZhLXNvcnQtZGVzYyc6ICFzb3J0QXNjfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sdW1uLnJlc2l6YWJsZVwiIGNsYXNzPVwiY29sdW1uLXJlc2l6ZS1oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJyZXNpemVDb2x1bW5TdGFydCgkZXZlbnQsIGNvbHVtbiwgdGgpXCI+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXg9aW5kZXhcIiBjbGFzcz1cImRhdGEtdGFibGUtcm93LXdyYXBwZXJcIlxuICAgICAgICAgICAgIGRhdGFUYWJsZVJvdyAjcm93IFtpdGVtXT1cIml0ZW1cIiBbaW5kZXhdPVwiaW5kZXhcIiAoc2VsZWN0ZWRDaGFuZ2UpPVwib25Sb3dTZWxlY3RDaGFuZ2VkKHJvdylcIj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgKm5nSWY9XCJpdGVtQ291bnQgPT09IDAgJiYgbm9EYXRhTWVzc2FnZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sdW1uQ291bnRcIj57eyBub0RhdGFNZXNzYWdlIH19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgY2xhc3M9XCJzdWJzdGl0dXRlLXJvd3NcIiAqbmdJZj1cInBhZ2luYXRpb24gJiYgc3Vic3RpdHV0ZVJvd3NcIj5cbiAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdWJzdGl0dXRlSXRlbXMsIGxldCBpbmRleCA9IGluZGV4XCJcbiAgICAgICAgICBbY2xhc3Mucm93LW9kZF09XCIoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgMiA9PT0gMFwiXG4gICAgICAgICAgW2NsYXNzLnJvdy1ldmVuXT1cIihpbmRleCArIGl0ZW1zLmxlbmd0aCkgJSAyID09PSAxXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWV4cGFuZENvbHVtblZpc2libGVcIj48L3RkPlxuICAgICAgICA8dGQgW2hpZGVdPVwiIWluZGV4Q29sdW1uVmlzaWJsZVwiPiZuYnNwOzwvdGQ+XG4gICAgICAgIDx0ZCBbaGlkZV09XCIhc2VsZWN0Q29sdW1uVmlzaWJsZVwiPjwvdGQ+XG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIj5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGRpdiBjbGFzcz1cImJ1c3lcIiAqbmdJZj1cInNob3dSZWxvYWRpbmcgJiYgcmVsb2FkaW5nXCI+XG4gICAgICA8aT48aSBjbGFzcz1cImZhIGZhLXNwaW4gZmEtY29nIGZhLTJ4XCI+PC9pPjwvaT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRhdGEtdGFibGUtcGFnaW5hdGlvbiAqbmdJZj1cInBhZ2luYXRpb25cIiBbbGltaXRzXT1cInBhZ2VMaW1pdHNcIj48L2RhdGEtdGFibGUtcGFnaW5hdGlvbj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0IC9kZWVwLyAuZGF0YS10YWJsZS50YWJsZT50Ym9keSt0Ym9keXtib3JkZXItdG9wOm5vbmV9Omhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlLnRhYmxlIHRke3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdCAvZGVlcC8gLmRhdGEtdGFibGU+dGJvZHk+dHI+dGQsOmhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlPnRoZWFkPnRyPnRoe292ZXJmbG93OmhpZGRlbn06aG9zdCAvZGVlcC8gLmRhdGEtdGFibGU+dGhlYWQ+dHI+dGR7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2RlZTJlNn06aG9zdCAvZGVlcC8gLnJvdy1vZGR7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2fS5kYXRhLXRhYmxlIC5zdWJzdGl0dXRlLXJvd3M+dHI6aG92ZXIsOmhvc3QgL2RlZXAvIC5kYXRhLXRhYmxlIC5kYXRhLXRhYmxlLXJvdzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlY2VjZWN9LmRhdGEtdGFibGV7Ym94LXNoYWRvdzowIDAgMTVweCAjZWNlY2VjO3RhYmxlLWxheW91dDpmaXhlZH0uY29sdW1uLWhlYWRlcntwb3NpdGlvbjpyZWxhdGl2ZX0uZXhwYW5kLWNvbHVtbi1oZWFkZXJ7d2lkdGg6NTBweH0uc2VsZWN0LWNvbHVtbi1oZWFkZXJ7d2lkdGg6NTBweDt0ZXh0LWFsaWduOmNlbnRlcn0uaW5kZXgtY29sdW1uLWhlYWRlcnt3aWR0aDo0MHB4fS5jb2x1bW4taGVhZGVyLnNvcnRhYmxlIGJ1dHRvbntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JhY2tncm91bmQ6MCAwO2JvcmRlcjowO2NvbG9yOmluaGVyaXQ7Y3Vyc29yOnBvaW50ZXI7Zm9udDppbmhlcml0O2xpbmUtaGVpZ2h0Om5vcm1hbDtvdmVyZmxvdzp2aXNpYmxlO3BhZGRpbmc6MDstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dGV4dC1hbGlnbjpsZWZ0fS5jb2x1bW4taGVhZGVyIC5jb2x1bW4tc29ydC1pY29ue21hcmdpbi1sZWZ0OjhweH0uY29sdW1uLWhlYWRlci5yZXNpemFibGUgLmNvbHVtbi1zb3J0LWljb257bWFyZ2luLXJpZ2h0OjhweH0uY29sdW1uLWhlYWRlciAuY29sdW1uLXNvcnQtaWNvbiAuY29sdW1uLXNvcnRhYmxlLWljb257Y29sb3I6I2QzZDNkM30uY29sdW1uLWhlYWRlciAuY29sdW1uLXJlc2l6ZS1oYW5kbGV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDttYXJnaW46MDtwYWRkaW5nOjA7d2lkdGg6OHB4O2hlaWdodDoxMDAlO2N1cnNvcjpjb2wtcmVzaXplfS5kYXRhLXRhYmxlLWJveHtwb3NpdGlvbjpyZWxhdGl2ZX0uYnVzeXtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNSl9LmJ1c3k+aXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBEYXRhVGFibGVQYXJhbXMsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9pdGVtczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfaXRlbUNvdW50O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgLy8gbm8gbmVlZCB0byBjYWxsIG5vdGlmaWVyLm5leHQoKSBiZWNhdXNlIF9vblJlbG9hZEZpbmlzaGVkKClcbiAgICAvLyB3aWxsIGNoYW5nZSByZWxvYWRlZCB2YWx1ZSBjYXVzaW5nIG5vdGlmaWVyLm5leHQoKSB0byBiZSBjYWxsZWQgaW1wbGljaXRseS5cbiAgICB0aGlzLl9vblJlbG9hZEZpbmlzaGVkKCk7XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbUNvdW50O1xuICB9XG5cbiAgc2V0IGl0ZW1Db3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbUNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5ub3RpZmllci5uZXh0KCk7XG4gIH1cblxuICAvLyBVSSBjb21wb25lbnRzOlxuICBAQ29udGVudENoaWxkcmVuKERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkgY29sdW1uczogUXVlcnlMaXN0PERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YVRhYmxlUm93Q29tcG9uZW50KSByb3dzOiBRdWVyeUxpc3Q8RGF0YVRhYmxlUm93Q29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlRXhwYW5kJykgZXhwYW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gT25lLXRpbWUgb3B0aW9uYWwgYmluZGluZ3Mgd2l0aCBkZWZhdWx0IHZhbHVlczpcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgaGVhZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGluZGV4Q29sdW1uID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5kZXhDb2x1bW5IZWFkZXIgPSAnJztcbiAgQElucHV0KCkgcm93Q29sb3JzOiBSb3dDYWxsYmFjaztcbiAgQElucHV0KCkgcm93VG9vbHRpcDogUm93Q2FsbGJhY2s7XG4gIEBJbnB1dCgpIHNlbGVjdENvbHVtbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtdWx0aVNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHN1YnN0aXR1dGVSb3dzID0gdHJ1ZTtcbiAgQElucHV0KCkgZXhwYW5kYWJsZVJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWxzOiBEYXRhVGFibGVUcmFuc2xhdGlvbnM7XG4gIEBJbnB1dCgpIHNlbGVjdE9uUm93Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b1JlbG9hZCA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dSZWxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9EYXRhTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlTGltaXRzOiBudW1iZXJbXSA9IFsxMCwgMjUsIDUwLCAxMDAsIDI1MF07XG4gIEBJbnB1dCgpIHByaW1hcnlDb2x1bW4gPSAnJztcblxuICAvLyByZWxvYWQgZW1pdHRlclxuICBAT3V0cHV0KCkgcmVsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGV2ZW50IGhhbmRsZXJzOlxuICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByb3dEb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhlYWRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2VsbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBVSSBzdGF0ZSB3aXRob3V0IGlucHV0OlxuICBpbmRleENvbHVtblZpc2libGU6IGJvb2xlYW47XG4gIHNlbGVjdENvbHVtblZpc2libGU6IGJvb2xlYW47XG4gIGV4cGFuZENvbHVtblZpc2libGU6IGJvb2xlYW47XG5cbiAgLy8gYWRhIG5vdGlmaWNhdGlvbnMuXG4gIHJlbG9hZE5vdGlmaWNhdGlvbjogc3RyaW5nO1xuICBwYWdpbmF0aW9uTm90aWZpY2F0aW9uOiBzdHJpbmc7XG4gIHNvcnROb3RpZmljYXRpb246IHN0cmluZztcbiAgY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb246IHN0cmluZztcblxuICBfZGlzcGxheVBhcmFtcyA9IDxEYXRhVGFibGVQYXJhbXM+e307IC8vIHBhcmFtcyBvZiB0aGUgbGFzdCBmaW5pc2hlZCByZWxvYWRcblxuICBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgc3ViamVjdCQ6IFN1YnNjcmlwdGlvbjtcblxuICBub3RpZmllciA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIG5vdGlmaWVyJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIHNlbGVjdGlvbjpcbiAgc2VsZWN0ZWRSb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudDtcbiAgc2VsZWN0ZWRSb3dzOiBEYXRhVGFibGVSb3dDb21wb25lbnRbXSA9IFtdO1xuXG4gIE1hdGg6IGFueTtcbiAgaWQgPSBgZGF0YXRhYmxlLSR7bmV4dElkKyt9YDtcblxuICAvLyBzZWxlY3QgYWxsIGNoZWNrYm94IGZsYWdcbiAgcHJpdmF0ZSBfc2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcblxuICAvLyBjb2x1bW4gcmVzaXppbmc6XG4gIHByaXZhdGUgX3Jlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICByZXNpemVMaW1pdCA9IDMwO1xuXG4gIC8vIFJlbG9hZGluZzpcbiAgX3JlbG9hZGluZyA9IGZhbHNlO1xuXG4gIGdldCByZWxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbG9hZGluZztcbiAgfVxuXG4gIHNldCByZWxvYWRpbmcodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVsb2FkaW5nID0gdmFsO1xuICAgIHRoaXMubm90aWZpZXIubmV4dCgpO1xuICB9XG5cbiAgLy8gVUkgc3RhdGU6IHZpc2libGUgZ2V0L3NldCBmb3IgdGhlIG91dHNpZGUgd2l0aCBASW5wdXQgZm9yIG9uZS10aW1lIGluaXRpYWwgdmFsdWVzXG4gIHByaXZhdGUgX3NvcnRCeTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3J0QnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEJ5O1xuICB9XG5cbiAgc2V0IHNvcnRCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc29ydEJ5ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NvcnRBc2MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3J0QXNjKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0QXNjO1xuICB9XG5cbiAgc2V0IHNvcnRBc2ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zb3J0QXNjID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldCA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IG9mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cblxuICBzZXQgb2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGltaXQgPSAxMDtcblxuICBASW5wdXQoKVxuICBnZXQgbGltaXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGltaXQ7XG4gIH1cblxuICBzZXQgbGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xpbWl0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZWQgcHJvcGVydHk6XG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1Db3VudCAhPT0gMCA/IE1hdGguZmxvb3IodGhpcy5vZmZzZXQgLyB0aGlzLmxpbWl0KSArIDEgOiAwO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWUpIHtcbiAgICB0aGlzLm9mZnNldCA9ICh2YWx1ZSAtIDEpICogdGhpcy5saW1pdDtcbiAgfVxuXG4gIGdldCBsYXN0UGFnZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuaXRlbUNvdW50IC8gdGhpcy5saW1pdCk7XG4gIH1cblxuICAvLyBzZXR0aW5nIG11bHRpcGxlIG9ic2VydmFibGUgcHJvcGVydGllcyBzaW11bHRhbmVvdXNseVxuICBzb3J0KHNvcnRCeTogc3RyaW5nLCBhc2M6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNvcnRCeSA9IHNvcnRCeTtcbiAgICB0aGlzLnNvcnRBc2MgPSBhc2M7XG4gIH1cblxuICAvLyBpbml0XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXREZWZhdWx0VmFsdWVzKCk7XG4gICAgdGhpcy5faW5pdERlZmF1bHRDbGlja0V2ZW50cygpO1xuICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlQYXJhbXMoKTtcblxuICAgIGlmICh0aGlzLnBhZ2VMaW1pdHMuaW5kZXhPZih0aGlzLmxpbWl0KSA8IDApIHtcbiAgICAgIHRoaXMubGltaXQgPSB0aGlzLnBhZ2VMaW1pdHNbMF07XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbHMgPSB7Li4uZGVmYXVsdFRyYW5zbGF0aW9ucywgLi4udGhpcy5sYWJlbHN9O1xuXG4gICAgaWYgKHRoaXMuYXV0b1JlbG9hZCkge1xuICAgICAgdGhpcy5yZWxvYWRJdGVtcygpO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZpZXIkID0gdGhpcy5ub3RpZmllci5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbm90aWZ5KCkpO1xuICAgIHRoaXMuc3ViamVjdCQgPSB0aGlzLnN1YmplY3QucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVsb2FkSXRlbXMoKSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2luaXREZWZhdWx0VmFsdWVzKCkge1xuICAgIHRoaXMuaW5kZXhDb2x1bW5WaXNpYmxlID0gdGhpcy5pbmRleENvbHVtbjtcbiAgICB0aGlzLnNlbGVjdENvbHVtblZpc2libGUgPSB0aGlzLnNlbGVjdENvbHVtbjtcbiAgICB0aGlzLmV4cGFuZENvbHVtblZpc2libGUgPSB0aGlzLmV4cGFuZGFibGVSb3dzO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERlZmF1bHRDbGlja0V2ZW50cygpIHtcbiAgICB0aGlzLmhlYWRlckNsaWNrLnN1YnNjcmliZShcbiAgICAgICh0YWJsZUV2ZW50OiB7IGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBldmVudDogRXZlbnQgfSkgPT4gdGhpcy5zb3J0Q29sdW1uKHRhYmxlRXZlbnQuY29sdW1uKSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0T25Sb3dDbGljaykge1xuICAgICAgdGhpcy5yb3dDbGljay5zdWJzY3JpYmUoXG4gICAgICAgICh0YWJsZUV2ZW50OiB7IHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogRXZlbnQgfSkgPT4gdGFibGVFdmVudC5yb3cuc2VsZWN0ZWQgPSAhdGFibGVFdmVudC5yb3cuc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbG9hZEl0ZW1zKCkge1xuICAgIHRoaXMucmVsb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlbG9hZC5lbWl0KHRoaXMuX2dldFJlbW90ZVBhcmFtZXRlcnMoKSk7XG4gIH1cblxuICBwcml2YXRlIF9vblJlbG9hZEZpbmlzaGVkKCkge1xuICAgIGlmICh0aGlzLnJlbG9hZGluZykge1xuICAgICAgdGhpcy5fdXBkYXRlRGlzcGxheVBhcmFtcygpO1xuICAgICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcbiAgICAgIHRoaXMucmVsb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdldCBkaXNwbGF5UGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5UGFyYW1zO1xuICB9XG5cbiAgX3VwZGF0ZURpc3BsYXlQYXJhbXMoKSB7XG4gICAgdGhpcy5fZGlzcGxheVBhcmFtcyA9IHtcbiAgICAgIHNvcnRCeTogdGhpcy5zb3J0QnksXG4gICAgICBzb3J0QXNjOiB0aGlzLnNvcnRBc2MsXG4gICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgbGltaXQ6IHRoaXMubGltaXRcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgcm93Q2xpY2tlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5yb3dDbGljay5lbWl0KHtyb3csIGV2ZW50fSk7XG4gIH1cblxuICBwdWJsaWMgcm93RG91YmxlQ2xpY2tlZChyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5yb3dEb3VibGVDbGljay5lbWl0KHtyb3csIGV2ZW50fSk7XG4gIH1cblxuICBwdWJsaWMgaGVhZGVyQ2xpY2tlZChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9yZXNpemVJblByb2dyZXNzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmhlYWRlckNsaWNrLmVtaXQoe2NvbHVtbiwgZXZlbnR9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVzaXplSW5Qcm9ncmVzcyA9IGZhbHNlOyAvLyB0aGlzIGlzIGJlY2F1c2UgSSBjYW4ndCBwcmV2ZW50IGNsaWNrIGZyb20gbW91c3VwIG9mIHRoZSBkcmFnIGVuZFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2VsbENsaWNrZWQoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuY2VsbENsaWNrLmVtaXQoe3JvdywgY29sdW1uLCBldmVudH0pO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25zOlxuICBwcml2YXRlIF9nZXRSZW1vdGVQYXJhbWV0ZXJzKCk6IERhdGFUYWJsZVBhcmFtcyB7XG4gICAgY29uc3QgcGFyYW1zID0gPERhdGFUYWJsZVBhcmFtcz57fTtcblxuICAgIGlmICh0aGlzLnNvcnRCeSkge1xuICAgICAgcGFyYW1zLnNvcnRCeSA9IHRoaXMuc29ydEJ5O1xuICAgICAgcGFyYW1zLnNvcnRBc2MgPSB0aGlzLnNvcnRBc2M7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIHBhcmFtcy5vZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgIHBhcmFtcy5saW1pdCA9IHRoaXMubGltaXQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb2x1bW4oY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpIHtcbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlKSB7XG4gICAgICBjb25zdCBhc2NlbmRpbmcgPSB0aGlzLnNvcnRCeSA9PT0gY29sdW1uLnByb3BlcnR5ID8gIXRoaXMuc29ydEFzYyA6IHRydWU7XG4gICAgICB0aGlzLnNvcnQoY29sdW1uLnByb3BlcnR5LCBhc2NlbmRpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb2x1bW5Db3VudCgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvdW50ICs9IHRoaXMuaW5kZXhDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgY291bnQgKz0gdGhpcy5zZWxlY3RDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgY291bnQgKz0gdGhpcy5leHBhbmRDb2x1bW5WaXNpYmxlID8gMSA6IDA7XG4gICAgdGhpcy5jb2x1bW5zLnRvQXJyYXkoKS5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBjb3VudCArPSBjb2x1bW4udmlzaWJsZSA/IDEgOiAwO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSb3dDb2xvcihpdGVtOiBhbnksIGluZGV4OiBudW1iZXIsIHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50KSB7XG4gICAgaWYgKHRoaXMucm93Q29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoPFJvd0NhbGxiYWNrPnRoaXMucm93Q29sb3JzKShpdGVtLCByb3csIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0QWxsQ2hlY2tib3goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdEFsbENoZWNrYm94O1xuICB9XG5cbiAgc2V0IHNlbGVjdEFsbENoZWNrYm94KHZhbHVlKSB7XG4gICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tib3ggPSB2YWx1ZTtcbiAgICB0aGlzLl9vblNlbGVjdEFsbENoYW5nZWQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25TZWxlY3RBbGxDaGFuZ2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5yb3dzLnRvQXJyYXkoKS5mb3JFYWNoKHJvdyA9PiByb3cuc2VsZWN0ZWQgPSB2YWx1ZSk7XG4gIH1cblxuICBvblJvd1NlbGVjdENoYW5nZWQocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQpIHtcblxuICAgIC8vIG1haW50YWluIHRoZSBzZWxlY3RlZFJvdyhzKSB2aWV3XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZFJvd3MuaW5kZXhPZihyb3cpO1xuICAgICAgaWYgKHJvdy5zZWxlY3RlZCAmJiBpbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MucHVzaChyb3cpO1xuICAgICAgfSBlbHNlIGlmICghcm93LnNlbGVjdGVkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJvdy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUm93ID09PSByb3cpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRSb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdW5zZWxlY3QgYWxsIG90aGVyIHJvd3M6XG4gICAgaWYgKHJvdy5zZWxlY3RlZCAmJiAhdGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5yb3dzLnRvQXJyYXkoKS5maWx0ZXIocm93XyA9PiByb3dfLnNlbGVjdGVkKS5mb3JFYWNoKHJvd18gPT4ge1xuICAgICAgICBpZiAocm93XyAhPT0gcm93KSB7IC8vIGF2b2lkIGVuZGxlc3MgbG9vcFxuICAgICAgICAgIHJvd18uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gb3RoZXI6XG5cbiAgZ2V0IHN1YnN0aXR1dGVJdGVtcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB0aGlzLmRpc3BsYXlQYXJhbXMubGltaXQgLSB0aGlzLml0ZW1zLmxlbmd0aH0pO1xuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtblN0YXJ0KGV2ZW50OiBNb3VzZUV2ZW50LCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgY29sdW1uRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9yZXNpemVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRPZmZzZXQgPSBjb2x1bW5FbGVtZW50Lm9mZnNldFdpZHRoIC0gZXZlbnQucGFnZVg7XG4gICAgZHJhZyhldmVudCwge1xuICAgICAgbW92ZTogKG1vdmVFdmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNSZXNpemVJbkxpbWl0KGNvbHVtbkVsZW1lbnQsIGR4KSkge1xuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IHN0YXJ0T2Zmc2V0ICsgbW92ZUV2ZW50LnBhZ2VYICsgZHg7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1Jlc2l6ZUluTGltaXQoY29sdW1uRWxlbWVudDogSFRNTEVsZW1lbnQsIGR4OiBudW1iZXIpIHtcbiAgICAvKiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIENTUyBtaW4td2lkdGggZGlkbid0IHdvcmsgb24gdGFibGUtbGF5b3V0OiBmaXhlZC5cbiAgICAgICAgIFdpdGhvdXQgdGhlIGxpbWl0cywgcmVzaXppbmcgY2FuIG1ha2UgdGhlIG5leHQgY29sdW1uIGRpc2FwcGVhciBjb21wbGV0ZWx5LFxuICAgICAgICAgYW5kIGV2ZW4gaW5jcmVhc2UgdGhlIHRhYmxlIHdpZHRoLiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBzdWZmZXJzIGZyb20gdGhlIGZhY3QsXG4gICAgICAgICB0aGF0IG9mZnNldFdpZHRoIHNvbWV0aW1lcyBjb250YWlucyBvdXQtb2YtZGF0ZSB2YWx1ZXMuICovXG4gICAgaWYgKChkeCA8IDAgJiYgKGNvbHVtbkVsZW1lbnQub2Zmc2V0V2lkdGggKyBkeCkgPD0gdGhpcy5yZXNpemVMaW1pdCkgfHxcbiAgICAgICFjb2x1bW5FbGVtZW50Lm5leHRFbGVtZW50U2libGluZyB8fCAvLyByZXNpemluZyBkb2Vzbid0IG1ha2Ugc2Vuc2UgZm9yIHRoZSBsYXN0IHZpc2libGUgY29sdW1uXG4gICAgICAoZHggPj0gMCAmJiAoKDxIVE1MRWxlbWVudD4gY29sdW1uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFdpZHRoICsgZHgpIDw9IHRoaXMucmVzaXplTGltaXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByaW1hcnlDb2x1bW4gPT09ICcnKSB7XG4gICAgICB0aGlzLnByaW1hcnlDb2x1bW4gPSAodGhpcy5jb2x1bW5zLmZpcnN0IGFzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkucHJvcGVydHk7XG4gICAgfVxuICB9XG5cbiAgX25vdGlmeSgpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5yZWxvYWRpbmc7XG5cbiAgICB0aGlzLnJlbG9hZE5vdGlmaWNhdGlvbiA9IGxvYWRpbmcgP1xuICAgICAgdGhpcy5sYWJlbHMubG9hZGluZ1RleHQucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpIDpcbiAgICAgIHRoaXMubGFiZWxzLmxvYWRlZFRleHQucmVwbGFjZSgne3RpdGxlfScsIHRoaXMudGl0bGUpO1xuXG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbk5vdGlmaWNhdGlvbiA9IHRoaXMubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsICcnICsgKE1hdGguY2VpbCh0aGlzLml0ZW1Db3VudCAvIHRoaXMubGltaXQpICE9PSAwID8gdGhpcy5vZmZzZXQgKyAxIDogJzAnKSlcbiAgICAgICAgICAucmVwbGFjZSgne3RvfScsICcnICsgKE1hdGgubWluKHRoaXMub2Zmc2V0ICsgdGhpcy5saW1pdCwgdGhpcy5pdGVtQ291bnQpKSlcbiAgICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsICcnICsgdGhpcy5pdGVtQ291bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uTm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zb3J0QnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbHVtbnMudG9BcnJheSgpLmZpbmQoY29sdW1uID0+IGNvbHVtbi5wcm9wZXJ0eSA9PT0gdGhpcy5zb3J0QnkpIGFzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZTtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gKHRoaXMuc29ydEFzYyA/IHRoaXMubGFiZWxzLnNvcnRlZEFzY2VuZGluZyA6IHRoaXMubGFiZWxzLnNvcnRlZERlc2NlbmRpbmcpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCB0aGlzLnRpdGxlKVxuICAgICAgICAgIC5yZXBsYWNlKCd7aGVhZGVyfScsIGNvbC5oZWFkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3J0Tm90aWZpY2F0aW9uID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZpZXIkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtaGVhZGVyXCI+XG4gIDxwIGNsYXNzPVwiaDQgdGl0bGVcIiAqbmdJZj1cImRhdGFUYWJsZS5zaG93VGl0bGVcIiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLnRpdGxlXCI+PC9wPlxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXBhbmVsXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHJlZnJlc2gtYnV0dG9uXCJcbiAgICAgICAgICAgIChjbGljayk9XCJkYXRhVGFibGUucmVsb2FkSXRlbXMoKVwiXG4gICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJSZWxvYWQucmVwbGFjZSgne3RpdGxlfScsIGRhdGFUYWJsZS50aXRsZSlcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gY29sdW1uLXNlbGVjdG9yLWJ1dHRvblwiIFtjbGFzcy5hY3RpdmVdPVwiY29sdW1uU2VsZWN0b3JPcGVuXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtaGFzcG9wdXBdPVwidHJ1ZVwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImNvbHVtblNlbGVjdG9yT3BlblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY29sdW1uU2VsZWN0b3JPcGVuID0gIWNvbHVtblNlbGVjdG9yT3BlbjtcIlxuICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyQ29sdW1uU2VsZWN0b3IucmVwbGFjZSgne3RpdGxlfScsIGRhdGFUYWJsZS50aXRsZSlcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGlzdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNlbGVjdG9yLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW5TZWxlY3Rvck9wZW5cIiBjbGFzcz1cImNvbHVtbi1zZWxlY3Rvci1ib3ggcGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuZXhwYW5kYWJsZVJvd3NcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5leHBhbmRDb2x1bW5WaXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuaW5kZXhDb2x1bW5cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5pbmRleENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuaW5kZXhDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiZGF0YVRhYmxlLnNlbGVjdENvbHVtblwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLnNlbGVjdENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuc2VsZWN0Q29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBsZXQtaT1cImluZGV4XCIgW25nRm9yT2ZdPVwiZGF0YVRhYmxlLmNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGFUYWJsZS5wcmltYXJ5Q29sdW1uICE9PSBpdGVtLnByb3BlcnR5XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJpdGVtLnZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiaXRlbS5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AuZGF0YS10YWJsZS1oZWFkZXJ7bWluLWhlaWdodDoyNXB4O21hcmdpbi1ib3R0b206MTBweH0udGl0bGV7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjVweCAwIDAgNXB4fS5idXR0b24tcGFuZWx7ZmxvYXQ6cmlnaHR9LmJ1dHRvbi1wYW5lbCBidXR0b257b3V0bGluZTowIWltcG9ydGFudH0uY29sdW1uLXNlbGVjdG9yLXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmV9LmNvbHVtbi1zZWxlY3Rvci1ib3h7Ym94LXNoYWRvdzowIDAgMTBweCAjZDNkM2QzO2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxNTBweDtwYWRkaW5nOjEwcHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MXB4O3otaW5kZXg6MTA2MH0uY29sdW1uLXNlbGVjdG9yLWJveCAubGlzdC1ncm91cC1pdGVtLmNvbHVtbi1zZWxlY3Rvci1jb2x1bW57cGFkZGluZzouNXJlbSAuMjVyZW19LmNvbHVtbi1zZWxlY3Rvci1ib3ggLmxpc3QtZ3JvdXAtaXRlbS5jb2x1bW4tc2VsZWN0b3ItY29sdW1uIGxhYmVse21hcmdpbi1ib3R0b206MH0uY29sdW1uLXNlbGVjdG9yLWJveCAubGlzdC1ncm91cC1pdGVtLmNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gaW5wdXR7bWFyZ2luLXJpZ2h0OjRweDtmb250LXN0eWxlOml0YWxpY31gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQge1xuXG4gIGNvbHVtblNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpKSBwdWJsaWMgZGF0YVRhYmxlOiBEYXRhVGFibGVDb21wb25lbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGlmICghdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pIG9uS2V5VXBIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IChldmVudC5rZXlDb2RlID09PSA5ICYmICF0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSkge1xuICAgICAgdGhpcy5jb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50LnRhcmdldCkuY2hlY2tlZDtcbiAgICBjb25zdCBjb2x1bW5OYW1lID0gKDxIVE1MSW5wdXRFbGVtZW50PiBldmVudC50YXJnZXQpLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIGNvbnN0IGludGVycG9sYXRlUGFyYW1zID0ge1xuICAgICAgJ2NvbHVtbl9uYW1lJzogY29sdW1uTmFtZSxcbiAgICAgICd0aXRsZSc6IHRoaXMuZGF0YVRhYmxlLnRpdGxlXG4gICAgfTtcblxuICAgIHRoaXMuZGF0YVRhYmxlLmNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uID0gKGlzQ2hlY2tlZCA/IHRoaXMuZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3RvckFkZGVkIDpcbiAgICAgIHRoaXMuZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3RvclJlbW92ZWQpXG4gICAgICAucmVwbGFjZSgne2NvbHVtbl9uYW1lfScsIGludGVycG9sYXRlUGFyYW1zLmNvbHVtbl9uYW1lKVxuICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCBpbnRlcnBvbGF0ZVBhcmFtcy50aXRsZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50fSBmcm9tICcuLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1yYW5nZVwiPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCB0aGlzLk1hdGguY2VpbChkYXRhVGFibGUuaXRlbUNvdW50IC8gZGF0YVRhYmxlLmxpbWl0KSAhPT0gMCA/IGRhdGFUYWJsZS5vZmZzZXQgKyAxICsgJycgOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCd7dG99JywgdGhpcy5NYXRoLm1pbihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0LCBkYXRhVGFibGUuaXRlbUNvdW50KSArICcnKVxuICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsIGRhdGFUYWJsZS5pdGVtQ291bnQgKyAnJylcIj48L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1jb250cm9sbGVycyBwYWdpbmF0aW9uLWJveCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1saW1pdCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWQgKyAnLXBhZ2UtbGltaXQnXCIgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvbkxpbWl0XCI+PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWxlY3QgW2lkXT1cImlkICsgJy1wYWdlLWxpbWl0J1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJsaW1pdFwiIFtkaXNhYmxlZF09XCJkYXRhVGFibGUuaXRlbUNvdW50ID09PSAwXCI+XG4gICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbCBvZiBsaW1pdHNcIiBbdmFsdWVdPVwibFwiPnt7IGwgfX08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlcyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5vZmZzZXQgPD0gMFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJwYWdlRmlyc3QoKVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tZmlyc3RwYWdlXCJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuZmlyc3RQYWdlXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLm9mZnNldCA8PSAwXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VCYWNrKClcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLXByZXZwYWdlXCJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucHJldlBhZ2VcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiBbYXR0ci5mb3JdPVwiaWQgKyAnLXBhZ2UtaW5wdXQnXCI+XG4gICAgICAgICAgICAgIHt7IGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlckxhYmVsIH19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dCAjcGFnZUlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBbaWRdPVwiaWQgKyAnLXBhZ2UtaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBtaW49XCIxXCIgc3RlcD1cIjFcIiBtYXg9XCJ7e21heFBhZ2V9fVwiXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRhVGFibGUuaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwicGFnZVwiXG4gICAgICAgICAgICAgICAgIChibHVyKT1cInZhbGlkYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIChrZXl1cC5lc2MpPVwicGFnZUlucHV0LnZhbHVlID0gcGFnZVwiXG4gICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2VOdW1iZXIgKyAnICcgK1xuICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGUubGFiZWxzLnBhZ2VOdW1iZXJOb2ZNLnJlcGxhY2UoJ3tOfScsICcnK3BhZ2UpLnJlcGxhY2UoJ3tNfScsICcnK21heFBhZ2UpXCJcbiAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICAgICAgICAgIHt7IGRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvblRvdGFsUGFnZXMgfX0mbmJzcDt7eyBkYXRhVGFibGUubGFzdFBhZ2UgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0KSA+PSBkYXRhVGFibGUuaXRlbUNvdW50XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VGb3J3YXJkKClcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLW5leHRwYWdlXCJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMubmV4dFBhZ2VcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIoZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCkgPj0gZGF0YVRhYmxlLml0ZW1Db3VudFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJwYWdlTGFzdCgpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1sYXN0cGFnZVwiXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmxhc3RQYWdlXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AucGFnaW5hdGlvbi1jb250cm9sbGVycyBzZWxlY3R7bWluLXdpZHRoOjVyZW07dGV4dC1hbGlnbjpyaWdodH0ucGFnaW5hdGlvbi1wYWdlcz4qe21hcmdpbjowIC4xNXJlbX0ucGFnaW5hdGlvbi1saW1pdHttYXJnaW4tcmlnaHQ6MS41cmVtfS5wYWdpbmF0aW9uLWJveCBidXR0b257b3V0bGluZTowIWltcG9ydGFudH1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IHtcblxuICBpZCA9IGBwYWdpbmF0aW9uLSR7bmV4dElkKyt9YDtcblxuICBAVmlld0NoaWxkKCdwYWdlSW5wdXQnKSBwYWdlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgTWF0aDogYW55O1xuXG4gIEBJbnB1dCgpIGxpbWl0czogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCkge1xuICAgIHRoaXMuTWF0aCA9IE1hdGg7XG4gIH1cblxuICBwYWdlQmFjaygpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgLT0gTWF0aC5taW4odGhpcy5kYXRhVGFibGUubGltaXQsIHRoaXMuZGF0YVRhYmxlLm9mZnNldCk7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLm9mZnNldCA8PSAwKSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuICBwYWdlRm9yd2FyZCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKz0gdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKyB0aGlzLmRhdGFUYWJsZS5saW1pdCkgPj0gdGhpcy5kYXRhVGFibGUuaXRlbUNvdW50KSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcGFnZUZpcnN0KCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCA9IDA7XG4gICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcGFnZUxhc3QoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ID0gKHRoaXMubWF4UGFnZSAtIDEpICogdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKyB0aGlzLmRhdGFUYWJsZS5saW1pdCkgPj0gdGhpcy5kYXRhVGFibGUuaXRlbUNvdW50KSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heFBhZ2UoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQgLyB0aGlzLmRhdGFUYWJsZS5saW1pdCk7XG4gIH1cblxuICBnZXQgbGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICB9XG5cbiAgc2V0IGxpbWl0KHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhVGFibGUubGltaXQgPSArdmFsdWU7XG4gICAgLy8gcmV0dXJuaW5nIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgdGhpcy5wYWdlID0gMTtcbiAgfVxuXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5wYWdlID0gK3ZhbHVlO1xuICB9XG5cbiAgdmFsaWRhdGUoZXZlbnQpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZSA9IChldmVudC50YXJnZXQudmFsdWUgPiB0aGlzLm1heFBhZ2UpID8gdGhpcy5tYXhQYWdlIDogKG5ld1ZhbHVlIDwgMSApID8gMSA6IG5ld1ZhbHVlO1xuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5wYWdlO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gbW9kdWxlc1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdXRpbHNcbmltcG9ydCB7IEhpZGVEaXJlY3RpdmUgfSBmcm9tICcuL3V0aWxzL2hpZGUnO1xuaW1wb3J0IHsgTWluUGlwZSB9IGZyb20gJy4vdXRpbHMvbWluJztcbmltcG9ydCB7IFBpeGVsQ29udmVydGVyIH0gZnJvbSAnLi91dGlscy9weCc7XG4vLyB0eXBlcyAmIHRvb2xzXG5pbXBvcnQgeyBEYXRhVGFibGVUcmFuc2xhdGlvbnMgfSBmcm9tICcuL3R5cGVzL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLnR5cGUnO1xuaW1wb3J0IHsgQ2VsbENhbGxiYWNrIH0gZnJvbSAnLi90eXBlcy9jZWxsLWNhbGxiYWNrLnR5cGUnO1xuaW1wb3J0IHsgUm93Q2FsbGJhY2sgfSBmcm9tICcuL3R5cGVzL3Jvdy1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZVJlc291cmNlIH0gZnJvbSAnLi90b29scy9kYXRhLXRhYmxlLXJlc291cmNlJztcbmltcG9ydCB7IERhdGFUYWJsZVBhcmFtcyB9IGZyb20gJy4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG4vLyBjb21wb25lbnRzICYgZGlyZWN0aXZlc1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbHVtbi9jb2x1bW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQge1xuICBEYXRhVGFibGVDb21wb25lbnQsIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSwgRGF0YVRhYmxlUm93Q29tcG9uZW50LCBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LCBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQsXG4gIERhdGFUYWJsZVJlc291cmNlLFxuICBEYXRhVGFibGVQYXJhbXMsIERhdGFUYWJsZVRyYW5zbGF0aW9ucyxcbiAgQ2VsbENhbGxiYWNrLCBSb3dDYWxsYmFja1xufTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0YVRhYmxlQ29tcG9uZW50LCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlUm93Q29tcG9uZW50LCBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LCBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQsXG4gICAgUGl4ZWxDb252ZXJ0ZXIsIEhpZGVEaXJlY3RpdmUsIE1pblBpcGVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbRGF0YVRhYmxlQ29tcG9uZW50LCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmVdXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4VGFibGVNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hUYWJsZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG5cblxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJJbnB1dCIsIlBpcGUiLCJDb250ZW50Q2hpbGQiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbmplY3QiLCJmb3J3YXJkUmVmIiwiT3V0cHV0IiwiU3ViamVjdCIsImRlYm91bmNlVGltZSIsIkNvbnRlbnRDaGlsZHJlbiIsIlZpZXdDaGlsZHJlbiIsIkhvc3RMaXN0ZW5lciIsIm5leHRJZCIsIlZpZXdDaGlsZCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9BLGlCQUFpQixHQUFRO1FBQ3ZCLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0tBQzFDOztRQVVDLHVCQUFv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