(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@popetech/ngx-table', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.popetech = global.popetech || {}, global.popetech['ngx-table'] = {}), global.ng.core, global.ng.common, global.ng.forms, global.rxjs, global.rxjs.operators));
}(this, function (exports, core, common, forms, rxjs, operators) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * @private
         * @return {?}
         */
        HideDirective.prototype.initDisplayStyle = /**
         * @private
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
                    },] }
        ];
        /** @nocollapse */
        HideDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        HideDirective.propDecorators = {
            hide: [{ type: core.Input }]
        };
        return HideDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Pipe, args: [{
                        name: 'min'
                    },] }
        ];
        return MinPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    },] }
        ];
        return PixelConverter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var   /**
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
                result.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) {
                    if (typeof a[params.sortBy] === 'string') {
                        return a[params.sortBy].localeCompare(b[params.sortBy]);
                    }
                    else {
                        return a[params.sortBy] - b[params.sortBy];
                    }
                }));
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
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return resolve(result); }));
            }));
        };
        /**
         * @return {?}
         */
        DataTableResource.prototype.count = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return resolve(_this.items.length); }));
            }));
        };
        return DataTableResource;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataTableColumnDirective = /** @class */ (function () {
        function DataTableColumnDirective() {
            this.styleClassObject = {}; // for [ngClass]
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
                return ((/** @type {?} */ (this.cellColors)))(row.item, row, this, index);
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
         * @private
         * @return {?}
         */
        DataTableColumnDirective.prototype._initCellClass = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
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
        };
        DataTableColumnDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'data-table-column'
                    },] }
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
            cellTemplate: [{ type: core.ContentChild, args: ['dataTableCell', { static: true },] }],
            headerTemplate: [{ type: core.ContentChild, args: ['dataTableHeader', { static: true },] }]
        };
        return DataTableColumnDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataTableRowComponent = /** @class */ (function () {
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
            get: 
            // other:
            /**
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
            var _this_1 = this;
            if (this.dataTable.rowClick.observers.length > 0) {
                this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'click', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return _this_1.dataTable.rowClicked(_this_1, event); })));
            }
            if (this.dataTable.rowDoubleClick.observers.length > 0) {
                this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dblclick', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return _this_1.dataTable.rowDoubleClicked(_this_1, event); })));
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
            this._listeners.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            function (fn) { return fn(); }));
        };
        DataTableRowComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[dataTableRow]',
                        template: "<tr class=\"data-table-row\"\n    [title]=\"getTooltip()\"\n    [style.background-color]=\"dataTable.getRowColor(item, index, _this)\"\n    [class.row-odd]=\"index % 2 === 0\"\n    [class.row-even]=\"index % 2 === 1\"\n    [class.selected]=\"selected\"\n    [class.clickable]=\"dataTable.selectOnRowClick\">\n  <td [hide]=\"!dataTable.expandColumnVisible\">\n    <button (click)=\"expanded = !expanded; $event.stopPropagation()\" class=\"row-expand-button\"\n         [attr.aria-expanded]=\"expanded\"\n         [title]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n         [attr.aria-label]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\">\n      <i [ngClass]=\"{'fa-caret-right': !expanded, 'fa-caret-down': expanded}\" class=\"fa fa-lg\" aria-hidden=\"true\"></i>\n    </button>\n  </td>\n  <td [hide]=\"!dataTable.indexColumnVisible\" class=\"index-column\" [textContent]=\"displayIndex\"></td>\n  <td [hide]=\"!dataTable.selectColumnVisible\" class=\"select-column\">\n    <input type=\"checkbox\" [(ngModel)]=\"selected\"\n           [title]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n           [attr.aria-label]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"/>\n  </td>\n  <ng-template ngFor [ngForOf]=\"dataTable.columns\" let-column>\n    <th *ngIf=\"dataTable.primaryColumn === column.property\" scope=\"row\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </th>\n    <td *ngIf=\"dataTable.primaryColumn !== column.property\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </td>\n  </ng-template>\n</tr>\n<tr *ngIf=\"dataTable.expandableRows\" [hide]=\"!expanded\" class=\"row-expansion\">\n  <td [attr.colspan]=\"dataTable.columnCount\">\n    <div [ngTemplateOutlet]=\"dataTable.expandTemplate\" [ngTemplateOutletContext]=\"{row: _this, item: item}\"></div>\n  </td>\n</tr>\n",
                        styles: [".select-column{text-align:center}.row-expand-button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable{cursor:pointer}th{font-weight:initial}"]
                    }] }
        ];
        /** @nocollapse */
        DataTableRowComponent.ctorParameters = function () { return [
            { type: DataTableComponent, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return DataTableComponent; })),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        DataTableRowComponent.propDecorators = {
            item: [{ type: core.Input }],
            index: [{ type: core.Input }],
            selectedChange: [{ type: core.Output }]
        };
        return DataTableRowComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*tslint:disable-next-line*/
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.reload = new core.EventEmitter();
            // event handlers:
            this.rowClick = new core.EventEmitter();
            this.rowDoubleClick = new core.EventEmitter();
            this.headerClick = new core.EventEmitter();
            this.cellClick = new core.EventEmitter();
            this.selectedRowsChange = new core.EventEmitter();
            this._displayParams = (/** @type {?} */ ({})); // params of the last finished reload
            // params of the last finished reload
            this.subject = new rxjs.Subject();
            this.notifier = new rxjs.Subject();
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
            this.labels = __assign({}, defaultTranslations, this.labels);
            if (this.autoReload) {
                this.reloadItems();
            }
            this.notifier$ = this.notifier.subscribe((/**
             * @return {?}
             */
            function () { return _this._notify(); }));
            this.subject$ = this.subject.pipe(operators.debounceTime(100)).subscribe((/**
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
            { type: core.Component, args: [{
                        selector: 'data-table',
                        template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    <span [textContent]=\"reloadNotification\"></span>\n    <span [textContent]=\"paginationNotification\"></span>\n    <span [textContent]=\"sortNotification\"></span>\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\" [class]=\"wrapperClass\">\n    <table class=\"table data-table\" [id]=\"id\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <td [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <input [hide]=\"!multiSelect\"\n                 type=\"checkbox\"\n                 [(ngModel)]=\"selectAllCheckbox\"\n                 [disabled]=\"itemCount === 0\"\n                 [title]=\"labels.selectAllRows\"\n                 [attr.aria-label]=\"labels.selectAllRows\"/>\n        </td>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\"\n                  [title]=\"!sortAsc ? labels.sortAscending : labels.sortDescending\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                aria-hidden=\"true\"></i>\n              <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n",
                        styles: [":host /deep/ .data-table.table>tbody+tbody{border-top:none}:host /deep/ .data-table.table td{vertical-align:middle}:host /deep/ .data-table>tbody>tr>td,:host /deep/ .data-table>thead>tr>th{overflow:hidden}:host /deep/ .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host /deep/ .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host /deep/ .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy>i{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]
                    }] }
        ];
        /** @nocollapse */
        DataTableComponent.ctorParameters = function () { return []; };
        DataTableComponent.propDecorators = {
            wrapperClass: [{ type: core.Input }],
            items: [{ type: core.Input }],
            itemCount: [{ type: core.Input }],
            columns: [{ type: core.ContentChildren, args: [DataTableColumnDirective,] }],
            rows: [{ type: core.ViewChildren, args: [DataTableRowComponent,] }],
            expandTemplate: [{ type: core.ContentChild, args: ['dataTableExpand', { static: true },] }],
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
            selectedRowsChange: [{ type: core.Output }],
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            var isChecked = ((/** @type {?} */ (event.target))).checked;
            /** @type {?} */
            var columnName = ((/** @type {?} */ (event.target))).parentElement.textContent.trim();
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
                        template: "<div class=\"data-table-header\">\n  <p class=\"h4 title\" *ngIf=\"dataTable.showTitle\" [textContent]=\"dataTable.title\"></p>\n  <div class=\"button-panel\">\n    <button type=\"button\" class=\"btn btn-default btn-sm refresh-button\"\n            (click)=\"dataTable.reloadItems()\">\n      <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerReload.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default btn-sm column-selector-button\" [class.active]=\"columnSelectorOpen\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.aria-expanded]=\"columnSelectorOpen\"\n            (click)=\"columnSelectorOpen = !columnSelectorOpen;\">\n      <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <div class=\"column-selector-wrapper\">\n      <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box panel panel-default\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngIf=\"dataTable.expandableRows\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.expandColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.expandColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.indexColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.indexColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.indexColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.selectColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.selectColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.selectColumn\"></span>\n            </label>\n          </li>\n          <ng-template ngFor let-item let-i=\"index\" [ngForOf]=\"dataTable.columns\">\n            <li class=\"list-group-item column-selector-column checkbox\"\n                *ngIf=\"dataTable.primaryColumn !== item.property\">\n              <label class=\"d-flex align-items-center\">\n                <input type=\"checkbox\" [(ngModel)]=\"item.visible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n                <span [textContent]=\"item.header\"></span>\n              </label>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:0!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}"]
                    }] }
        ];
        /** @nocollapse */
        DataTableHeaderComponent.ctorParameters = function () { return [
            { type: DataTableComponent, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return DataTableComponent; })),] }] },
            { type: core.ElementRef }
        ]; };
        DataTableHeaderComponent.propDecorators = {
            onClickHandler: [{ type: core.HostListener, args: ['document:click', ['$event'],] }],
            onKeyUpHandler: [{ type: core.HostListener, args: ['document:keyup', ['$event'],] }]
        };
        return DataTableHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Component, args: [{
                        selector: 'data-table-pagination',
                        template: "<div class=\"row\">\n  <div class=\"pagination-range col\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"pagination-limit col-md-3\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n      </div>\n      <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\" [disabled]=\"dataTable.itemCount === 0\">\n        <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"pagination-pages offset-md-3 col-md-6\">\n    <div class=\"pagination-page\">\n      <div class=\"input-group\">\n        <button [disabled]=\"dataTable.offset <= 0\"\n                (click)=\"pageFirst()\"\n                class=\"btn btn-default pagination-firstpage\"\n                [title]=\"dataTable.labels.firstPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n        </button>\n        <button [disabled]=\"dataTable.offset <= 0\"\n                (click)=\"pageBack()\"\n                class=\"btn btn-default pagination-prevpage\"\n                [title]=\"dataTable.labels.prevPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n        </button>\n\n        <div class=\"input-group-prepend d-sm-block d-none\">\n          <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n            {{ dataTable.labels.pageNumberLabel }}\n          </label>\n        </div>\n        <input #pageInput type=\"number\"\n               [id]=\"id + '-page-input'\"\n               class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n               [disabled]=\"dataTable.itemCount === 0\"\n               [ngModel]=\"page\"\n               (blur)=\"validate($event)\"\n               (keyup.enter)=\"validate($event)\"\n               (keyup.esc)=\"pageInput.value = page\"\n               [title]=\"dataTable.labels.pageNumber + ' ' +\n                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)\"\n               [attr.aria-controls]=\"dataTable.id\"/>\n        <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n        </div>\n\n        <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                (click)=\"pageForward()\"\n                class=\"btn btn-default pagination-nextpage\"\n                [title]=\"dataTable.labels.nextPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n        </button>\n        <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                (click)=\"pageLast()\"\n                class=\"btn btn-default pagination-lastpage\"\n                [title]=\"dataTable.labels.lastPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: [".pagination-controllers select{text-align:right}.pagination-box button{outline:0!important}"]
                    }] }
        ];
        /** @nocollapse */
        DataTablePaginationComponent.ctorParameters = function () { return [
            { type: DataTableComponent, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return DataTableComponent; })),] }] }
        ]; };
        DataTablePaginationComponent.propDecorators = {
            pageInput: [{ type: core.ViewChild, args: ['pageInput', { static: true },] }],
            limits: [{ type: core.Input }]
        };
        return DataTablePaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    },] }
        ];
        return NgxTableModule;
    }());

    exports.DataTable = DataTableComponent;
    exports.DataTableColumn = DataTableColumnDirective;
    exports.DataTableHeader = DataTableHeaderComponent;
    exports.DataTablePagination = DataTablePaginationComponent;
    exports.DataTableResource = DataTableResource;
    exports.DataTableRow = DataTableRowComponent;
    exports.NgxTableModule = NgxTableModule;
    exports.ɵa = PixelConverter;
    exports.ɵb = HideDirective;
    exports.ɵc = MinPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=popetech-ngx-table.umd.js.map
