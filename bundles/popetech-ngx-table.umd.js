(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@popetech/ngx-table', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.popetech = global.popetech || {}, global.popetech['ngx-table'] = {}), global.ng.core, global.ng.common, global.ng.forms, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, forms, rxjs, operators) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            set: function (newCondition) {
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
        HideDirective.prototype.initDisplayStyle = function () {
            if (this._displayStyle === undefined) {
                var displayStyle = this._elementRef.nativeElement.style.display;
                if (displayStyle !== 'none') {
                    this._displayStyle = displayStyle;
                }
            }
        };
        HideDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input()
        ], HideDirective.prototype, "hide", null);
        HideDirective = __decorate([
            core.Directive({
                selector: '[hide]'
            })
        ], HideDirective);
        return HideDirective;
    }());

    var MinPipe = /** @class */ (function () {
        function MinPipe() {
        }
        MinPipe.prototype.transform = function (value, args) {
            return Math.min.apply(null, value);
        };
        MinPipe = __decorate([
            core.Pipe({
                name: 'min'
            })
        ], MinPipe);
        return MinPipe;
    }());

    var PixelConverter = /** @class */ (function () {
        function PixelConverter() {
        }
        PixelConverter.prototype.transform = function (value, args) {
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
        PixelConverter = __decorate([
            core.Pipe({
                name: 'px'
            })
        ], PixelConverter);
        return PixelConverter;
    }());

    var DataTableResource = /** @class */ (function () {
        function DataTableResource(items) {
            this.items = items;
        }
        DataTableResource.prototype.query = function (params, filter) {
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
        DataTableResource.prototype.count = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                setTimeout(function () { return resolve(_this.items.length); });
            });
        };
        return DataTableResource;
    }());

    var DataTableColumnDirective = /** @class */ (function () {
        function DataTableColumnDirective() {
            this.styleClassObject = {}; // for [ngClass]
            this.sortable = false;
            this.resizable = false;
            this.visible = true;
        }
        DataTableColumnDirective.prototype.getCellColor = function (row, index) {
            if (this.cellColors !== undefined) {
                return this.cellColors(row.item, row, this, index);
            }
        };
        DataTableColumnDirective.prototype.ngOnInit = function () {
            this._initCellClass();
        };
        DataTableColumnDirective.prototype._initCellClass = function () {
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
        __decorate([
            core.Input()
        ], DataTableColumnDirective.prototype, "header", void 0);
        __decorate([
            core.Input()
        ], DataTableColumnDirective.prototype, "sortable", void 0);
        __decorate([
            core.Input()
        ], DataTableColumnDirective.prototype, "resizable", void 0);
        __decorate([
            core.Input()
        ], DataTableColumnDirective.prototype, "property", void 0);
        __decorate([
            core.Input()
        ], DataTableColumnDirective.prototype, "styleClass", void 0);
        __decorate([
            core.Input()
        ], DataTableColumnDirective.prototype, "cellColors", void 0);
        __decorate([
            core.Input()
        ], DataTableColumnDirective.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], DataTableColumnDirective.prototype, "visible", void 0);
        __decorate([
            core.ContentChild('dataTableCell', { static: true })
        ], DataTableColumnDirective.prototype, "cellTemplate", void 0);
        __decorate([
            core.ContentChild('dataTableHeader', { static: true })
        ], DataTableColumnDirective.prototype, "headerTemplate", void 0);
        DataTableColumnDirective = __decorate([
            core.Directive({
                selector: 'data-table-column'
            })
        ], DataTableColumnDirective);
        return DataTableColumnDirective;
    }());

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
            get: function () {
                return this._selected;
            },
            set: function (selected) {
                this._selected = selected;
                this.selectedChange.emit(selected);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTableRowComponent.prototype, "displayIndex", {
            // other:
            get: function () {
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
        DataTableRowComponent.prototype.getTooltip = function () {
            if (this.dataTable.rowTooltip) {
                return this.dataTable.rowTooltip(this.item, this, this.index);
            }
            return '';
        };
        DataTableRowComponent.prototype.ngOnInit = function () {
            var _this_1 = this;
            if (this.dataTable.rowClick.observers.length > 0) {
                this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'click', function (event) { return _this_1.dataTable.rowClicked(_this_1, event); }));
            }
            if (this.dataTable.rowDoubleClick.observers.length > 0) {
                this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dblclick', function (event) { return _this_1.dataTable.rowDoubleClicked(_this_1, event); }));
            }
        };
        DataTableRowComponent.prototype.ngOnDestroy = function () {
            this.selected = false;
            this._listeners.forEach(function (fn) { return fn(); });
        };
        DataTableRowComponent.ctorParameters = function () { return [
            { type: DataTableComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return DataTableComponent; }),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], DataTableRowComponent.prototype, "item", void 0);
        __decorate([
            core.Input()
        ], DataTableRowComponent.prototype, "index", void 0);
        __decorate([
            core.Output()
        ], DataTableRowComponent.prototype, "selectedChange", void 0);
        DataTableRowComponent = __decorate([
            core.Component({
                selector: '[dataTableRow]',
                template: "<tr class=\"data-table-row\"\n    [title]=\"getTooltip()\"\n    [style.background-color]=\"dataTable.getRowColor(item, index, _this)\"\n    [class.row-odd]=\"index % 2 === 0\"\n    [class.row-even]=\"index % 2 === 1\"\n    [class.selected]=\"selected\"\n    [class.clickable]=\"dataTable.selectOnRowClick\">\n  <td [hide]=\"!dataTable.expandColumnVisible\">\n    <button (click)=\"expanded = !expanded; $event.stopPropagation()\" class=\"row-expand-button\"\n         [attr.aria-expanded]=\"expanded\"\n         [title]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n         [attr.aria-label]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\">\n      <i [ngClass]=\"{'fa-caret-right': !expanded, 'fa-caret-down': expanded}\" class=\"fa fa-lg\" aria-hidden=\"true\"></i>\n    </button>\n  </td>\n  <td [hide]=\"!dataTable.indexColumnVisible\" class=\"index-column\" [textContent]=\"displayIndex\"></td>\n  <td [hide]=\"!dataTable.selectColumnVisible\" class=\"select-column\">\n    <input\n           type=\"checkbox\" [(ngModel)]=\"selected\"\n           [title]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n           [attr.aria-label]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"/>\n  </td>\n  <ng-template ngFor [ngForOf]=\"dataTable.columns\" let-column>\n    <th *ngIf=\"dataTable.primaryColumn === column.property\" scope=\"row\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </th>\n    <td *ngIf=\"dataTable.primaryColumn !== column.property\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </td>\n  </ng-template>\n</tr>\n<tr *ngIf=\"dataTable.expandableRows\" [hide]=\"!expanded\" class=\"row-expansion\">\n  <td [attr.colspan]=\"dataTable.columnCount\">\n    <div [ngTemplateOutlet]=\"dataTable.expandTemplate\" [ngTemplateOutletContext]=\"{row: _this, item: item}\"></div>\n  </td>\n</tr>\n",
                styles: [".select-column{text-align:center}.row-expand-button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable{cursor:pointer}th{font-weight:initial}"]
            }),
            __param(0, core.Inject(core.forwardRef(function () { return DataTableComponent; })))
        ], DataTableRowComponent);
        return DataTableRowComponent;
    }());

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

    /*tslint:disable-next-line*/
    function drag(event, _a) {
        var move = _a.move, up = _a.up;
        var startX = event.pageX;
        var startY = event.pageY;
        var x = startX;
        var y = startY;
        var moved = false;
        function mouseMoveHandler(evt) {
            var dx = evt.pageX - x;
            var dy = evt.pageY - y;
            x = evt.pageX;
            y = evt.pageY;
            if (dx || dy) {
                moved = true;
            }
            move(evt, dx, dy, x, y);
            event.preventDefault(); // to avoid text selection
        }
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
            this.visibleColumnsChange = new core.EventEmitter();
            this._displayParams = {}; // params of the last finished reload
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
            this.subject$ = this.subject.pipe(operators.debounceTime(100)).subscribe(function () { return _this.reloadItems(); });
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
            core.Input()
        ], DataTableComponent.prototype, "wrapperClass", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "items", null);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "itemCount", null);
        __decorate([
            core.ContentChildren(DataTableColumnDirective)
        ], DataTableComponent.prototype, "columns", void 0);
        __decorate([
            core.ViewChildren(DataTableRowComponent)
        ], DataTableComponent.prototype, "rows", void 0);
        __decorate([
            core.ContentChild('dataTableExpand', { static: true })
        ], DataTableComponent.prototype, "expandTemplate", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "showTitle", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "header", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "pagination", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "indexColumn", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "indexColumnHeader", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "rowColors", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "rowTooltip", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "selectColumn", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "multiSelect", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "substituteRows", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "expandableRows", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "labels", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "selectOnRowClick", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "autoReload", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "showReloading", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "noDataMessage", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "pageLimits", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "primaryColumn", void 0);
        __decorate([
            core.Output()
        ], DataTableComponent.prototype, "reload", void 0);
        __decorate([
            core.Output()
        ], DataTableComponent.prototype, "rowClick", void 0);
        __decorate([
            core.Output()
        ], DataTableComponent.prototype, "rowDoubleClick", void 0);
        __decorate([
            core.Output()
        ], DataTableComponent.prototype, "headerClick", void 0);
        __decorate([
            core.Output()
        ], DataTableComponent.prototype, "cellClick", void 0);
        __decorate([
            core.Output()
        ], DataTableComponent.prototype, "selectedRowsChange", void 0);
        __decorate([
            core.Output()
        ], DataTableComponent.prototype, "visibleColumnsChange", void 0);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "sortBy", null);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "sortAsc", null);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "offset", null);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "limit", null);
        __decorate([
            core.Input()
        ], DataTableComponent.prototype, "page", null);
        DataTableComponent = __decorate([
            core.Component({
                selector: 'data-table',
                template: "<div class=\"data-table-wrapper\">\n  <span class=\"sr-only\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"text\">\n    <span [textContent]=\"reloadNotification\"></span>\n    <span [textContent]=\"paginationNotification\"></span>\n    <span [textContent]=\"sortNotification\"></span>\n    <span [textContent]=\"columnSelectorNotification\"></span>\n  </span>\n\n  <data-table-header *ngIf=\"header\"></data-table-header>\n\n  <div class=\"data-table-box\" [class]=\"wrapperClass\">\n    <table class=\"table data-table\" [id]=\"id\">\n      <caption class=\"sr-only\" [textContent]=\"title\"></caption>\n      <thead>\n      <tr>\n        <td [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n        </td>\n        <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n          <span [textContent]=\"indexColumnHeader\"></span>\n        </th>\n        <td [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n          <label [for]=\"id + '-select-all-column'\" class=\"sr-only\">\n            {{ labels.selectAllRows }}\n          </label>\n          <input\n            [id]=\"id + '-select-all-column'\"\n            [hide]=\"!multiSelect\"\n                 type=\"checkbox\"\n                 [(ngModel)]=\"selectAllCheckbox\"\n                 [disabled]=\"itemCount === 0\"\n                 [title]=\"labels.selectAllRows\"/>\n        </td>\n        <th *ngFor=\"let column of columns, index as i\" #th\n            [hide]=\"!column.visible\"\n            [class.sortable]=\"column.sortable\"\n            [class.resizable]=\"column.resizable\"\n            scope=\"col\"\n            [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n            [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\" >\n          <button *ngIf=\"column.sortable\" (click)=\"headerClicked(column, $event)\"\n                  [attr.aria-controls]=\"column.sortable ? id : null\"\n                  [disabled]=\"itemCount === 0\"\n                  [attr.aria-labelledby]=\"'col-'+id+'-'+i\"\n                  [title]=\"!sortAsc ? labels.sortAscending : labels.sortDescending\">\n            <span *ngIf=\"!column.headerTemplate\" [id]=\"'col-'+id+'-'+i\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n              <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                aria-hidden=\"true\"></i>\n              <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </button>\n          <span *ngIf=\"!column.sortable\">\n            <span *ngIf=\"!column.headerTemplate\"\n                  [textContent]=\"column.header\"></span>\n            <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\"\n                  [ngTemplateOutletContext]=\"{column: column}\"></span>\n            <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n               <i [hide]=\"column.property === sortBy\" class=\"fa fa-sort column-sortable-icon\"\n                  aria-hidden=\"true\"></i>\n               <i [hide]=\"column.property !== sortBy\" class=\"fa\"\n                  [ngClass]=\"{'fa-sort-asc': sortAsc, 'fa-sort-desc': !sortAsc}\" aria-hidden=\"true\"></i>\n            </span>\n            <span *ngIf=\"column.resizable\" class=\"column-resize-handle\"\n                  (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n          </span>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n             dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n      </tbody>\n      <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n        <tr>\n          <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n        </tr>\n      </tbody>\n      <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n      <tr *ngFor=\"let item of substituteItems, let index = index\"\n          [class.row-odd]=\"(index + items.length) % 2 === 0\"\n          [class.row-even]=\"(index + items.length) % 2 === 1\" role=\"presentation\">\n        <td [hide]=\"!expandColumnVisible\"></td>\n        <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n        <td [hide]=\"!selectColumnVisible\"></td>\n        <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"busy\" *ngIf=\"showReloading && reloading\">\n      <i><i class=\"fa fa-spin fa-cog fa-2x\"></i></i>\n    </div>\n  </div>\n\n  <data-table-pagination *ngIf=\"pagination\" [limits]=\"pageLimits\"></data-table-pagination>\n</div>\n",
                styles: [":host /deep/ .data-table.table>tbody+tbody{border-top:none}:host /deep/ .data-table.table td{vertical-align:middle}:host /deep/ .data-table>tbody>tr>td,:host /deep/ .data-table>thead>tr>th{overflow:hidden}:host /deep/ .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}:host /deep/ .row-odd{background-color:#f6f6f6}.data-table .substitute-rows>tr:hover,:host /deep/ .data-table .data-table-row:hover{background-color:#ececec}.data-table{box-shadow:0 0 15px #ececec}.column-header{position:relative}.expand-column-header{width:50px}.select-column-header{width:50px;text-align:center}.index-column-header{width:40px}.column-header.sortable button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header .column-sort-icon{margin-left:8px}.column-header.resizable .column-sort-icon{margin-right:8px}.column-header .column-sort-icon .column-sortable-icon{color:#d3d3d3}.column-header .column-resize-handle{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box{position:relative}.busy{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy>i{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
            })
        ], DataTableComponent);
        return DataTableComponent;
    }());

    var DataTableHeaderComponent = /** @class */ (function () {
        function DataTableHeaderComponent(dataTable, elemRef) {
            this.dataTable = dataTable;
            this.elemRef = elemRef;
            this.columnSelectorOpen = false;
        }
        DataTableHeaderComponent.prototype.onClickHandler = function (event) {
            if (!this.elemRef.nativeElement.contains(event.target)) {
                this.columnSelectorOpen = false;
            }
        };
        DataTableHeaderComponent.prototype.onKeyUpHandler = function (event) {
            if (event.keyCode === 27 || (event.keyCode === 9 && !this.elemRef.nativeElement.contains(event.target))) {
                this.columnSelectorOpen = false;
            }
        };
        DataTableHeaderComponent.prototype.onChange = function (event) {
            var isChecked = event.target.checked;
            var columnName = event.target.parentElement.textContent.trim();
            var interpolateParams = {
                'column_name': columnName,
                'title': this.dataTable.title
            };
            this.dataTable.visibleColumnsChange.emit(event);
            this.dataTable.columnSelectorNotification = (isChecked ? this.dataTable.labels.headerColumnSelectorAdded :
                this.dataTable.labels.headerColumnSelectorRemoved)
                .replace('{column_name}', interpolateParams.column_name)
                .replace('{title}', interpolateParams.title);
        };
        DataTableHeaderComponent.ctorParameters = function () { return [
            { type: DataTableComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return DataTableComponent; }),] }] },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.HostListener('document:click', ['$event'])
        ], DataTableHeaderComponent.prototype, "onClickHandler", null);
        __decorate([
            core.HostListener('document:keyup', ['$event'])
        ], DataTableHeaderComponent.prototype, "onKeyUpHandler", null);
        DataTableHeaderComponent = __decorate([
            core.Component({
                selector: 'data-table-header',
                template: "<div class=\"data-table-header\">\n  <p class=\"h4 title\" *ngIf=\"dataTable.showTitle\" [textContent]=\"dataTable.title\"></p>\n  <div class=\"button-panel\">\n    <button type=\"button\" class=\"btn btn-default btn-sm refresh-button\"\n            (click)=\"dataTable.reloadItems()\">\n      <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerReload.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default btn-sm column-selector-button\" [class.active]=\"columnSelectorOpen\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.aria-expanded]=\"columnSelectorOpen\"\n            (click)=\"columnSelectorOpen = !columnSelectorOpen;\">\n      <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <div class=\"column-selector-wrapper\">\n      <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box panel panel-default\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngIf=\"dataTable.expandableRows\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.expandColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.expandColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.indexColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.indexColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.indexColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.selectColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.selectColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.selectColumn\"></span>\n            </label>\n          </li>\n          <ng-template ngFor let-item let-i=\"index\" [ngForOf]=\"dataTable.columns\">\n            <li class=\"list-group-item column-selector-column checkbox\"\n                *ngIf=\"dataTable.primaryColumn !== item.property\">\n              <label class=\"d-flex align-items-center\">\n                <input type=\"checkbox\" [(ngModel)]=\"item.visible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n                <span [textContent]=\"item.header\"></span>\n              </label>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:0!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}"]
            }),
            __param(0, core.Inject(core.forwardRef(function () { return DataTableComponent; })))
        ], DataTableHeaderComponent);
        return DataTableHeaderComponent;
    }());

    var nextId$1 = 0;
    var DataTablePaginationComponent = /** @class */ (function () {
        function DataTablePaginationComponent(dataTable) {
            this.dataTable = dataTable;
            this.id = "pagination-" + nextId$1++;
            this.Math = Math;
        }
        DataTablePaginationComponent.prototype.pageBack = function () {
            this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
            if (this.dataTable.offset <= 0) {
                this.pageInput.nativeElement.focus();
            }
        };
        DataTablePaginationComponent.prototype.pageForward = function () {
            this.dataTable.offset += this.dataTable.limit;
            if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
                this.pageInput.nativeElement.focus();
            }
        };
        DataTablePaginationComponent.prototype.pageFirst = function () {
            this.dataTable.offset = 0;
            this.pageInput.nativeElement.focus();
        };
        DataTablePaginationComponent.prototype.pageLast = function () {
            this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
            if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
                this.pageInput.nativeElement.focus();
            }
        };
        Object.defineProperty(DataTablePaginationComponent.prototype, "maxPage", {
            get: function () {
                return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTablePaginationComponent.prototype, "limit", {
            get: function () {
                return this.dataTable.limit;
            },
            set: function (value) {
                this.dataTable.limit = +value;
                // returning back to the first page.
                this.page = 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTablePaginationComponent.prototype, "page", {
            get: function () {
                return this.dataTable.page;
            },
            set: function (value) {
                this.dataTable.page = +value;
            },
            enumerable: true,
            configurable: true
        });
        DataTablePaginationComponent.prototype.validate = function (event) {
            var newValue = +event.target.value;
            if (newValue !== this.page) {
                this.page = (event.target.value > this.maxPage) ? this.maxPage : (newValue < 1) ? 1 : newValue;
                event.target.value = this.page;
            }
        };
        DataTablePaginationComponent.ctorParameters = function () { return [
            { type: DataTableComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return DataTableComponent; }),] }] }
        ]; };
        __decorate([
            core.ViewChild('pageInput', { static: true })
        ], DataTablePaginationComponent.prototype, "pageInput", void 0);
        __decorate([
            core.Input()
        ], DataTablePaginationComponent.prototype, "limits", void 0);
        DataTablePaginationComponent = __decorate([
            core.Component({
                selector: 'data-table-pagination',
                template: "<div class=\"row\">\n  <div class=\"pagination-range col\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"pagination-limit col-md-3\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n      </div>\n      <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\" [disabled]=\"dataTable.itemCount === 0\">\n        <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"pagination-pages offset-md-3 col-md-6\">\n    <div class=\"pagination-page\">\n      <div class=\"input-group\">\n        <button [disabled]=\"dataTable.offset <= 0\"\n                (click)=\"pageFirst()\"\n                class=\"btn btn-default pagination-firstpage\"\n                [title]=\"dataTable.labels.firstPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">first page</span>\n        </button>\n        <button [disabled]=\"dataTable.offset <= 0\"\n                (click)=\"pageBack()\"\n                class=\"btn btn-default pagination-prevpage\"\n                [title]=\"dataTable.labels.prevPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">previous page</span>\n        </button>\n\n        <div class=\"input-group-prepend d-sm-block d-none\">\n          <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n            {{ dataTable.labels.pageNumberLabel }}\n          </label>\n        </div>\n        <input #pageInput type=\"number\"\n               [id]=\"id + '-page-input'\"\n               class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n               [disabled]=\"dataTable.itemCount === 0\"\n               [ngModel]=\"page\"\n               (blur)=\"validate($event)\"\n               (keyup.enter)=\"validate($event)\"\n               (keyup.esc)=\"pageInput.value = page\"\n               [title]=\"dataTable.labels.pageNumber + ' ' +\n                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)\"\n               [attr.aria-controls]=\"dataTable.id\"/>\n        <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n        </div>\n\n        <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                (click)=\"pageForward()\"\n                class=\"btn btn-default pagination-nextpage\"\n                [title]=\"dataTable.labels.nextPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">next page</span>\n        </button>\n        <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                (click)=\"pageLast()\"\n                class=\"btn btn-default pagination-lastpage\"\n                [title]=\"dataTable.labels.lastPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">last page</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".pagination-controllers select{text-align:right}.pagination-box button{outline:0!important}"]
            }),
            __param(0, core.Inject(core.forwardRef(function () { return DataTableComponent; })))
        ], DataTablePaginationComponent);
        return DataTablePaginationComponent;
    }());

    var NgxTableModule = /** @class */ (function () {
        function NgxTableModule() {
        }
        NgxTableModule_1 = NgxTableModule;
        NgxTableModule.forRoot = function () {
            return {
                ngModule: NgxTableModule_1,
                providers: []
            };
        };
        var NgxTableModule_1;
        NgxTableModule = NgxTableModule_1 = __decorate([
            core.NgModule({
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
            })
        ], NgxTableModule);
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

})));
//# sourceMappingURL=popetech-ngx-table.umd.js.map
