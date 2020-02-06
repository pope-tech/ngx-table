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
        HideDirective.ɵfac = function HideDirective_Factory(t) { return new (t || HideDirective)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.Renderer2)); };
        HideDirective.ɵdir = core["ɵɵdefineDirective"]({ type: HideDirective, selectors: [["", "hide", ""]], inputs: { hide: "hide" } });
        return HideDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HideDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[hide]'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, { hide: [{
                type: core.Input
            }] }); })();

    var MinPipe = /** @class */ (function () {
        function MinPipe() {
        }
        MinPipe.prototype.transform = function (value, args) {
            return Math.min.apply(null, value);
        };
        MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
        MinPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "min", type: MinPipe, pure: true });
        return MinPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](MinPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'min'
                }]
        }], null, null); })();

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
        PixelConverter.ɵfac = function PixelConverter_Factory(t) { return new (t || PixelConverter)(); };
        PixelConverter.ɵpipe = core["ɵɵdefinePipe"]({ name: "px", type: PixelConverter, pure: true });
        return PixelConverter;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PixelConverter, [{
            type: core.Pipe,
            args: [{
                    name: 'px'
                }]
        }], null, null); })();

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

    var _c0 = ["dataTableCell"];
    var _c1 = ["dataTableHeader"];
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
        DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(); };
        DataTableColumnDirective.ɵdir = core["ɵɵdefineDirective"]({ type: DataTableColumnDirective, selectors: [["data-table-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵstaticContentQuery"](dirIndex, _c0, true);
                core["ɵɵstaticContentQuery"](dirIndex, _c1, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
            } }, inputs: { header: "header", sortable: "sortable", resizable: "resizable", property: "property", styleClass: "styleClass", cellColors: "cellColors", width: "width", visible: "visible" } });
        return DataTableColumnDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DataTableColumnDirective, [{
            type: core.Directive,
            args: [{
                    selector: 'data-table-column'
                }]
        }], null, { header: [{
                type: core.Input
            }], sortable: [{
                type: core.Input
            }], resizable: [{
                type: core.Input
            }], property: [{
                type: core.Input
            }], styleClass: [{
                type: core.Input
            }], cellColors: [{
                type: core.Input
            }], width: [{
                type: core.Input
            }], visible: [{
                type: core.Input
            }], cellTemplate: [{
                type: core.ContentChild,
                args: ['dataTableCell', { static: true }]
            }], headerTemplate: [{
                type: core.ContentChild,
                args: ['dataTableHeader', { static: true }]
            }] }); })();

    var _c0$1 = ["dataTableRow", ""];
    function DataTableRowComponent_ng_template_7_th_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "div", 14);
    } if (rf & 2) {
        var column_r138 = core["ɵɵnextContext"](2).$implicit;
        var ctx_r141 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("textContent", ctx_r141.item[column_r138.property]);
    } }
    var _c1$1 = function (a0, a1, a2) { return { column: a0, row: a1, item: a2 }; };
    function DataTableRowComponent_ng_template_7_th_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "div", 15);
    } if (rf & 2) {
        var column_r138 = core["ɵɵnextContext"](2).$implicit;
        var ctx_r142 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngTemplateOutlet", column_r138.cellTemplate)("ngTemplateOutletContext", core["ɵɵpureFunction3"](2, _c1$1, column_r138, ctx_r142._this, ctx_r142.item));
    } }
    function DataTableRowComponent_ng_template_7_th_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "th", 11);
        core["ɵɵtemplate"](1, DataTableRowComponent_ng_template_7_th_0_div_1_Template, 1, 1, "div", 12);
        core["ɵɵtemplate"](2, DataTableRowComponent_ng_template_7_th_0_div_2_Template, 1, 6, "div", 13);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var column_r138 = core["ɵɵnextContext"]().$implicit;
        var ctx_r139 = core["ɵɵnextContext"]();
        core["ɵɵstyleProp"]("background-color", column_r138.getCellColor(ctx_r139._this, ctx_r139.index));
        core["ɵɵproperty"]("hide", !column_r138.visible)("ngClass", column_r138.styleClassObject);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", !column_r138.cellTemplate);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", column_r138.cellTemplate);
    } }
    function DataTableRowComponent_ng_template_7_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "div", 14);
    } if (rf & 2) {
        var column_r138 = core["ɵɵnextContext"](2).$implicit;
        var ctx_r146 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("textContent", ctx_r146.item[column_r138.property]);
    } }
    function DataTableRowComponent_ng_template_7_td_1_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "div", 15);
    } if (rf & 2) {
        var column_r138 = core["ɵɵnextContext"](2).$implicit;
        var ctx_r147 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngTemplateOutlet", column_r138.cellTemplate)("ngTemplateOutletContext", core["ɵɵpureFunction3"](2, _c1$1, column_r138, ctx_r147._this, ctx_r147.item));
    } }
    function DataTableRowComponent_ng_template_7_td_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "td", 16);
        core["ɵɵtemplate"](1, DataTableRowComponent_ng_template_7_td_1_div_1_Template, 1, 1, "div", 12);
        core["ɵɵtemplate"](2, DataTableRowComponent_ng_template_7_td_1_div_2_Template, 1, 6, "div", 13);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var column_r138 = core["ɵɵnextContext"]().$implicit;
        var ctx_r140 = core["ɵɵnextContext"]();
        core["ɵɵstyleProp"]("background-color", column_r138.getCellColor(ctx_r140._this, ctx_r140.index));
        core["ɵɵproperty"]("hide", !column_r138.visible)("ngClass", column_r138.styleClassObject);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", !column_r138.cellTemplate);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", column_r138.cellTemplate);
    } }
    function DataTableRowComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, DataTableRowComponent_ng_template_7_th_0_Template, 3, 6, "th", 9);
        core["ɵɵtemplate"](1, DataTableRowComponent_ng_template_7_td_1_Template, 3, 6, "td", 10);
    } if (rf & 2) {
        var column_r138 = ctx.$implicit;
        var ctx_r136 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngIf", ctx_r136.dataTable.primaryColumn === column_r138.property);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r136.dataTable.primaryColumn !== column_r138.property);
    } }
    var _c2 = function (a0, a1) { return { row: a0, item: a1 }; };
    function DataTableRowComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "tr", 17);
        core["ɵɵelementStart"](1, "td");
        core["ɵɵelement"](2, "div", 15);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r137 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("hide", !ctx_r137.expanded);
        core["ɵɵadvance"](1);
        core["ɵɵattribute"]("colspan", ctx_r137.dataTable.columnCount);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngTemplateOutlet", ctx_r137.dataTable.expandTemplate)("ngTemplateOutletContext", core["ɵɵpureFunction2"](4, _c2, ctx_r137._this, ctx_r137.item));
    } }
    var _c3 = function (a0, a1) { return { "fa-caret-right": a0, "fa-caret-down": a1 }; };
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
        DataTableRowComponent.ɵfac = function DataTableRowComponent_Factory(t) { return new (t || DataTableRowComponent)(core["ɵɵdirectiveInject"](core.forwardRef(function () { return DataTableComponent; })), core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef)); };
        DataTableRowComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: DataTableRowComponent, selectors: [["", "dataTableRow", ""]], inputs: { item: "item", index: "index" }, outputs: { selectedChange: "selectedChange" }, attrs: _c0$1, decls: 9, vars: 27, consts: [[1, "data-table-row", 3, "title"], [3, "hide"], [1, "row-expand-button", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-lg", 3, "ngClass"], [1, "index-column", 3, "hide", "textContent"], [1, "select-column", 3, "hide"], ["type", "checkbox", 3, "ngModel", "title", "ngModelChange"], ["ngFor", "", 3, "ngForOf"], ["class", "row-expansion", 3, "hide", 4, "ngIf"], ["scope", "row", "class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["scope", "row", 1, "data-column", 3, "hide", "ngClass"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "textContent"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "data-column", 3, "hide", "ngClass"], [1, "row-expansion", 3, "hide"]], template: function DataTableRowComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "tr", 0);
                core["ɵɵelementStart"](1, "td", 1);
                core["ɵɵelementStart"](2, "button", 2);
                core["ɵɵlistener"]("click", function DataTableRowComponent_Template_button_click_2_listener($event) { ctx.expanded = !ctx.expanded; return $event.stopPropagation(); });
                core["ɵɵelement"](3, "i", 3);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelement"](4, "td", 4);
                core["ɵɵelementStart"](5, "td", 5);
                core["ɵɵelementStart"](6, "input", 6);
                core["ɵɵlistener"]("ngModelChange", function DataTableRowComponent_Template_input_ngModelChange_6_listener($event) { return ctx.selected = $event; });
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](7, DataTableRowComponent_ng_template_7_Template, 2, 2, "ng-template", 7);
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](8, DataTableRowComponent_tr_8_Template, 3, 7, "tr", 8);
            } if (rf & 2) {
                core["ɵɵstyleProp"]("background-color", ctx.dataTable.getRowColor(ctx.item, ctx.index, ctx._this));
                core["ɵɵclassProp"]("row-odd", ctx.index % 2 === 0)("row-even", ctx.index % 2 === 1)("selected", ctx.selected)("clickable", ctx.dataTable.selectOnRowClick);
                core["ɵɵproperty"]("title", ctx.getTooltip());
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("hide", !ctx.dataTable.expandColumnVisible);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("title", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
                core["ɵɵattribute"]("aria-expanded", ctx.expanded)("aria-label", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction2"](24, _c3, !ctx.expanded, ctx.expanded));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("hide", !ctx.dataTable.indexColumnVisible)("textContent", ctx.displayIndex);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("hide", !ctx.dataTable.selectColumnVisible);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngModel", ctx.selected)("title", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
                core["ɵɵattribute"]("aria-label", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.dataTable.columns);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.dataTable.expandableRows);
            } }, directives: [HideDirective, common.NgClass, forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.NgModel, common.NgForOf, common.NgIf, common.NgTemplateOutlet], styles: [".select-column[_ngcontent-%COMP%]{text-align:center}.row-expand-button[_ngcontent-%COMP%]{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable[_ngcontent-%COMP%]{cursor:pointer}th[_ngcontent-%COMP%]{font-weight:initial}"] });
        return DataTableRowComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DataTableRowComponent, [{
            type: core.Component,
            args: [{
                    selector: '[dataTableRow]',
                    templateUrl: './row.component.html',
                    styleUrls: ['./row.component.css']
                }]
        }], function () { return [{ type: DataTableComponent, decorators: [{
                    type: core.Inject,
                    args: [core.forwardRef(function () { return DataTableComponent; })]
                }] }, { type: core.Renderer2 }, { type: core.ElementRef }]; }, { item: [{
                type: core.Input
            }], index: [{
                type: core.Input
            }], selectedChange: [{
                type: core.Output
            }] }); })();

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

    var _c0$2 = ["dataTableExpand"];
    function DataTableComponent_data_table_header_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "data-table-header");
    } }
    function DataTableComponent_th_17_button_3_span_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "span", 24);
    } if (rf & 2) {
        var ctx_r105 = core["ɵɵnextContext"](2);
        var i_r97 = ctx_r105.index;
        var column_r96 = ctx_r105.$implicit;
        var ctx_r101 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("id", "col-" + ctx_r101.id + "-" + i_r97)("textContent", column_r96.header);
    } }
    var _c1$2 = function (a0) { return { column: a0 }; };
    function DataTableComponent_th_17_button_3_span_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "span", 25);
    } if (rf & 2) {
        var column_r96 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵproperty"]("ngTemplateOutlet", column_r96.headerTemplate)("ngTemplateOutletContext", core["ɵɵpureFunction1"](2, _c1$2, column_r96));
    } }
    var _c2$1 = function (a0, a1) { return { "fa-sort-asc": a0, "fa-sort-desc": a1 }; };
    function DataTableComponent_th_17_button_3_span_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "span", 26);
        core["ɵɵelement"](1, "i", 27);
        core["ɵɵelement"](2, "i", 28);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var column_r96 = core["ɵɵnextContext"](2).$implicit;
        var ctx_r103 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("hide", column_r96.property === ctx_r103.sortBy);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("hide", column_r96.property !== ctx_r103.sortBy)("ngClass", core["ɵɵpureFunction2"](3, _c2$1, ctx_r103.sortAsc, !ctx_r103.sortAsc));
    } }
    function DataTableComponent_th_17_button_3_span_4_Template(rf, ctx) { if (rf & 1) {
        var _r109 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "span", 29);
        core["ɵɵlistener"]("mousedown", function DataTableComponent_th_17_button_3_span_4_Template_span_mousedown_0_listener($event) { core["ɵɵrestoreView"](_r109); var column_r96 = core["ɵɵnextContext"](2).$implicit; var _r98 = core["ɵɵreference"](1); var ctx_r108 = core["ɵɵnextContext"](); return ctx_r108.resizeColumnStart($event, column_r96, _r98); });
        core["ɵɵelementEnd"]();
    } }
    function DataTableComponent_th_17_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r113 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "button", 19);
        core["ɵɵlistener"]("click", function DataTableComponent_th_17_button_3_Template_button_click_0_listener($event) { core["ɵɵrestoreView"](_r113); var column_r96 = core["ɵɵnextContext"]().$implicit; var ctx_r111 = core["ɵɵnextContext"](); return ctx_r111.headerClicked(column_r96, $event); });
        core["ɵɵtemplate"](1, DataTableComponent_th_17_button_3_span_1_Template, 1, 2, "span", 20);
        core["ɵɵtemplate"](2, DataTableComponent_th_17_button_3_span_2_Template, 1, 4, "span", 21);
        core["ɵɵtemplate"](3, DataTableComponent_th_17_button_3_span_3_Template, 3, 6, "span", 22);
        core["ɵɵtemplate"](4, DataTableComponent_th_17_button_3_span_4_Template, 1, 0, "span", 23);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r114 = core["ɵɵnextContext"]();
        var column_r96 = ctx_r114.$implicit;
        var i_r97 = ctx_r114.index;
        var ctx_r99 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("disabled", ctx_r99.itemCount === 0)("title", !ctx_r99.sortAsc ? ctx_r99.labels.sortAscending : ctx_r99.labels.sortDescending);
        core["ɵɵattribute"]("aria-controls", column_r96.sortable ? ctx_r99.id : null)("aria-labelledby", "col-" + ctx_r99.id + "-" + i_r97);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", !column_r96.headerTemplate);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", column_r96.headerTemplate);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", column_r96.sortable);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", column_r96.resizable);
    } }
    function DataTableComponent_th_17_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "span", 2);
    } if (rf & 2) {
        var column_r96 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵproperty"]("textContent", column_r96.header);
    } }
    function DataTableComponent_th_17_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "span", 25);
    } if (rf & 2) {
        var column_r96 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵproperty"]("ngTemplateOutlet", column_r96.headerTemplate)("ngTemplateOutletContext", core["ɵɵpureFunction1"](2, _c1$2, column_r96));
    } }
    function DataTableComponent_th_17_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "span", 26);
        core["ɵɵelement"](1, "i", 27);
        core["ɵɵelement"](2, "i", 28);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var column_r96 = core["ɵɵnextContext"](2).$implicit;
        var ctx_r117 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("hide", column_r96.property === ctx_r117.sortBy);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("hide", column_r96.property !== ctx_r117.sortBy)("ngClass", core["ɵɵpureFunction2"](3, _c2$1, ctx_r117.sortAsc, !ctx_r117.sortAsc));
    } }
    function DataTableComponent_th_17_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
        var _r123 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "span", 29);
        core["ɵɵlistener"]("mousedown", function DataTableComponent_th_17_span_4_span_4_Template_span_mousedown_0_listener($event) { core["ɵɵrestoreView"](_r123); var column_r96 = core["ɵɵnextContext"](2).$implicit; var _r98 = core["ɵɵreference"](1); var ctx_r122 = core["ɵɵnextContext"](); return ctx_r122.resizeColumnStart($event, column_r96, _r98); });
        core["ɵɵelementEnd"]();
    } }
    function DataTableComponent_th_17_span_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "span");
        core["ɵɵtemplate"](1, DataTableComponent_th_17_span_4_span_1_Template, 1, 1, "span", 30);
        core["ɵɵtemplate"](2, DataTableComponent_th_17_span_4_span_2_Template, 1, 4, "span", 21);
        core["ɵɵtemplate"](3, DataTableComponent_th_17_span_4_span_3_Template, 3, 6, "span", 22);
        core["ɵɵtemplate"](4, DataTableComponent_th_17_span_4_span_4_Template, 1, 0, "span", 23);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var column_r96 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", !column_r96.headerTemplate);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", column_r96.headerTemplate);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", column_r96.sortable);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", column_r96.resizable);
    } }
    function DataTableComponent_th_17_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "th", 16, 17);
        core["ɵɵpipe"](2, "px");
        core["ɵɵtemplate"](3, DataTableComponent_th_17_button_3_Template, 5, 8, "button", 18);
        core["ɵɵtemplate"](4, DataTableComponent_th_17_span_4_Template, 5, 4, "span", 3);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var column_r96 = ctx.$implicit;
        var ctx_r90 = core["ɵɵnextContext"]();
        core["ɵɵstyleProp"]("width", core["ɵɵpipeBind1"](2, 11, column_r96.width));
        core["ɵɵclassProp"]("sortable", column_r96.sortable)("resizable", column_r96.resizable);
        core["ɵɵproperty"]("hide", !column_r96.visible)("ngClass", column_r96.styleClassObject);
        core["ɵɵattribute"]("aria-sort", column_r96.sortable ? column_r96.property === ctx_r90.sortBy ? ctx_r90.sortAsc ? "ascending" : "descending" : "none" : null);
        core["ɵɵadvance"](3);
        core["ɵɵproperty"]("ngIf", column_r96.sortable);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", !column_r96.sortable);
    } }
    function DataTableComponent_tbody_18_Template(rf, ctx) { if (rf & 1) {
        var _r130 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "tbody", 31, 32);
        core["ɵɵlistener"]("selectedChange", function DataTableComponent_tbody_18_Template_tbody_selectedChange_0_listener($event) { core["ɵɵrestoreView"](_r130); var _r128 = core["ɵɵreference"](1); var ctx_r129 = core["ɵɵnextContext"](); return ctx_r129.onRowSelectChanged(_r128); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var item_r126 = ctx.$implicit;
        var index_r127 = ctx.index;
        core["ɵɵproperty"]("item", item_r126)("index", index_r127);
    } }
    function DataTableComponent_tbody_19_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "tbody");
        core["ɵɵelementStart"](1, "tr");
        core["ɵɵelementStart"](2, "td");
        core["ɵɵtext"](3);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r92 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](2);
        core["ɵɵattribute"]("colspan", ctx_r92.columnCount);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](ctx_r92.noDataMessage);
    } }
    function DataTableComponent_tbody_20_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "td", 36);
    } if (rf & 2) {
        var column_r135 = ctx.$implicit;
        core["ɵɵproperty"]("hide", !column_r135.visible);
    } }
    function DataTableComponent_tbody_20_tr_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "tr", 35);
        core["ɵɵelement"](1, "td", 36);
        core["ɵɵelementStart"](2, "td", 36);
        core["ɵɵtext"](3, "\u00A0");
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](4, "td", 36);
        core["ɵɵtemplate"](5, DataTableComponent_tbody_20_tr_1_td_5_Template, 1, 1, "td", 37);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var index_r133 = ctx.index;
        var ctx_r131 = core["ɵɵnextContext"](2);
        core["ɵɵclassProp"]("row-odd", (index_r133 + ctx_r131.items.length) % 2 === 0)("row-even", (index_r133 + ctx_r131.items.length) % 2 === 1);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("hide", !ctx_r131.expandColumnVisible);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("hide", !ctx_r131.indexColumnVisible);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("hide", !ctx_r131.selectColumnVisible);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r131.columns);
    } }
    function DataTableComponent_tbody_20_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "tbody", 33);
        core["ɵɵtemplate"](1, DataTableComponent_tbody_20_tr_1_Template, 6, 8, "tr", 34);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r93 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r93.substituteItems);
    } }
    function DataTableComponent_div_21_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 38);
        core["ɵɵelementStart"](1, "i");
        core["ɵɵelement"](2, "i", 39);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } }
    function DataTableComponent_data_table_pagination_22_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "data-table-pagination", 40);
    } if (rf & 2) {
        var ctx_r95 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("limits", ctx_r95.pageLimits);
    } }
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
        DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(); };
        DataTableComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["data-table"]], contentQueries: function DataTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵstaticContentQuery"](dirIndex, _c0$2, true);
                core["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, false);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.expandTemplate = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.columns = _t);
            } }, viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵviewQuery"](DataTableRowComponent, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.rows = _t);
            } }, inputs: { wrapperClass: "wrapperClass", items: "items", itemCount: "itemCount", title: "title", showTitle: "showTitle", header: "header", pagination: "pagination", indexColumn: "indexColumn", indexColumnHeader: "indexColumnHeader", rowColors: "rowColors", rowTooltip: "rowTooltip", selectColumn: "selectColumn", multiSelect: "multiSelect", substituteRows: "substituteRows", expandableRows: "expandableRows", labels: "labels", selectOnRowClick: "selectOnRowClick", autoReload: "autoReload", showReloading: "showReloading", noDataMessage: "noDataMessage", pageLimits: "pageLimits", primaryColumn: "primaryColumn", sortBy: "sortBy", sortAsc: "sortAsc", offset: "offset", limit: "limit", page: "page" }, outputs: { reload: "reload", rowClick: "rowClick", rowDoubleClick: "rowDoubleClick", headerClick: "headerClick", cellClick: "cellClick", selectedRowsChange: "selectedRowsChange", visibleColumnsChange: "visibleColumnsChange" }, decls: 23, vars: 24, consts: [[1, "data-table-wrapper"], ["role", "status", "aria-live", "polite", "aria-atomic", "false", "aria-relevant", "text", 1, "sr-only"], [3, "textContent"], [4, "ngIf"], [1, "data-table-box"], [1, "table", "data-table", 3, "id"], [1, "sr-only", 3, "textContent"], [1, "expand-column-header", 3, "hide"], ["scope", "col", 1, "index-column-header", 3, "hide"], [1, "select-column-header", 3, "hide"], ["type", "checkbox", 3, "hide", "ngModel", "disabled", "title", "ngModelChange"], ["scope", "col", "class", "column-header", 3, "hide", "sortable", "resizable", "ngClass", "width", 4, "ngFor", "ngForOf"], ["class", "data-table-row-wrapper", "dataTableRow", "", 3, "item", "index", "selectedChange", 4, "ngFor", "ngForOf"], ["class", "substitute-rows", 4, "ngIf"], ["class", "busy", 4, "ngIf"], [3, "limits", 4, "ngIf"], ["scope", "col", 1, "column-header", 3, "hide", "ngClass"], ["th", ""], [3, "disabled", "title", "click", 4, "ngIf"], [3, "disabled", "title", "click"], [3, "id", "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "column-sort-icon", 4, "ngIf"], ["class", "column-resize-handle", 3, "mousedown", 4, "ngIf"], [3, "id", "textContent"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-sort-icon"], ["aria-hidden", "true", 1, "fa", "fa-sort", "column-sortable-icon", 3, "hide"], ["aria-hidden", "true", 1, "fa", 3, "hide", "ngClass"], [1, "column-resize-handle", 3, "mousedown"], [3, "textContent", 4, "ngIf"], ["dataTableRow", "", 1, "data-table-row-wrapper", 3, "item", "index", "selectedChange"], ["row", ""], [1, "substitute-rows"], ["role", "presentation", 3, "row-odd", "row-even", 4, "ngFor", "ngForOf"], ["role", "presentation"], [3, "hide"], [3, "hide", 4, "ngFor", "ngForOf"], [1, "busy"], [1, "fa", "fa-spin", "fa-cog", "fa-2x"], [3, "limits"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵelementStart"](1, "span", 1);
                core["ɵɵelement"](2, "span", 2);
                core["ɵɵelement"](3, "span", 2);
                core["ɵɵelement"](4, "span", 2);
                core["ɵɵelement"](5, "span", 2);
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](6, DataTableComponent_data_table_header_6_Template, 1, 0, "data-table-header", 3);
                core["ɵɵelementStart"](7, "div", 4);
                core["ɵɵelementStart"](8, "table", 5);
                core["ɵɵelement"](9, "caption", 6);
                core["ɵɵelementStart"](10, "thead");
                core["ɵɵelementStart"](11, "tr");
                core["ɵɵelement"](12, "td", 7);
                core["ɵɵelementStart"](13, "th", 8);
                core["ɵɵelement"](14, "span", 2);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](15, "td", 9);
                core["ɵɵelementStart"](16, "input", 10);
                core["ɵɵlistener"]("ngModelChange", function DataTableComponent_Template_input_ngModelChange_16_listener($event) { return ctx.selectAllCheckbox = $event; });
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](17, DataTableComponent_th_17_Template, 5, 13, "th", 11);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](18, DataTableComponent_tbody_18_Template, 2, 2, "tbody", 12);
                core["ɵɵtemplate"](19, DataTableComponent_tbody_19_Template, 4, 2, "tbody", 3);
                core["ɵɵtemplate"](20, DataTableComponent_tbody_20_Template, 2, 1, "tbody", 13);
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](21, DataTableComponent_div_21_Template, 3, 0, "div", 14);
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](22, DataTableComponent_data_table_pagination_22_Template, 1, 1, "data-table-pagination", 15);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("textContent", ctx.reloadNotification);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("textContent", ctx.paginationNotification);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("textContent", ctx.sortNotification);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("textContent", ctx.columnSelectorNotification);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.header);
                core["ɵɵadvance"](1);
                core["ɵɵclassMap"](ctx.wrapperClass);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("id", ctx.id);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("textContent", ctx.title);
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("hide", !ctx.expandColumnVisible);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("hide", !ctx.indexColumnVisible);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("textContent", ctx.indexColumnHeader);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("hide", !ctx.selectColumnVisible);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("hide", !ctx.multiSelect)("ngModel", ctx.selectAllCheckbox)("disabled", ctx.itemCount === 0)("title", ctx.labels.selectAllRows);
                core["ɵɵattribute"]("aria-label", ctx.labels.selectAllRows);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.columns);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.items);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.itemCount === 0 && ctx.noDataMessage);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.pagination && ctx.substituteRows);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.showReloading && ctx.reloading);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.pagination);
            } }, styles: ["[_nghost-%COMP%]     .data-table.table>tbody+tbody{border-top:none}[_nghost-%COMP%]     .data-table.table td{vertical-align:middle}[_nghost-%COMP%]     .data-table>tbody>tr>td, [_nghost-%COMP%]     .data-table>thead>tr>th{overflow:hidden}[_nghost-%COMP%]     .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}[_nghost-%COMP%]     .row-odd{background-color:#f6f6f6}.data-table[_ngcontent-%COMP%]   .substitute-rows[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]     .data-table .data-table-row:hover{background-color:#ececec}.data-table[_ngcontent-%COMP%]{box-shadow:0 0 15px #ececec}.column-header[_ngcontent-%COMP%]{position:relative}.expand-column-header[_ngcontent-%COMP%]{width:50px}.select-column-header[_ngcontent-%COMP%]{width:50px;text-align:center}.index-column-header[_ngcontent-%COMP%]{width:40px}.column-header.sortable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-left:8px}.column-header.resizable[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-right:8px}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]   .column-sortable-icon[_ngcontent-%COMP%]{color:#d3d3d3}.column-header[_ngcontent-%COMP%]   .column-resize-handle[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box[_ngcontent-%COMP%]{position:relative}.busy[_ngcontent-%COMP%]{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.25)}.busy[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"] });
        return DataTableComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DataTableComponent, [{
            type: core.Component,
            args: [{
                    selector: 'data-table',
                    templateUrl: './table.component.html',
                    styleUrls: ['./table.component.css']
                }]
        }], function () { return []; }, { wrapperClass: [{
                type: core.Input
            }], items: [{
                type: core.Input
            }], itemCount: [{
                type: core.Input
            }], columns: [{
                type: core.ContentChildren,
                args: [DataTableColumnDirective]
            }], rows: [{
                type: core.ViewChildren,
                args: [DataTableRowComponent]
            }], expandTemplate: [{
                type: core.ContentChild,
                args: ['dataTableExpand', { static: true }]
            }], title: [{
                type: core.Input
            }], showTitle: [{
                type: core.Input
            }], header: [{
                type: core.Input
            }], pagination: [{
                type: core.Input
            }], indexColumn: [{
                type: core.Input
            }], indexColumnHeader: [{
                type: core.Input
            }], rowColors: [{
                type: core.Input
            }], rowTooltip: [{
                type: core.Input
            }], selectColumn: [{
                type: core.Input
            }], multiSelect: [{
                type: core.Input
            }], substituteRows: [{
                type: core.Input
            }], expandableRows: [{
                type: core.Input
            }], labels: [{
                type: core.Input
            }], selectOnRowClick: [{
                type: core.Input
            }], autoReload: [{
                type: core.Input
            }], showReloading: [{
                type: core.Input
            }], noDataMessage: [{
                type: core.Input
            }], pageLimits: [{
                type: core.Input
            }], primaryColumn: [{
                type: core.Input
            }], reload: [{
                type: core.Output
            }], rowClick: [{
                type: core.Output
            }], rowDoubleClick: [{
                type: core.Output
            }], headerClick: [{
                type: core.Output
            }], cellClick: [{
                type: core.Output
            }], selectedRowsChange: [{
                type: core.Output
            }], visibleColumnsChange: [{
                type: core.Output
            }], sortBy: [{
                type: core.Input
            }], sortAsc: [{
                type: core.Input
            }], offset: [{
                type: core.Input
            }], limit: [{
                type: core.Input
            }], page: [{
                type: core.Input
            }] }); })();

    function DataTableHeaderComponent_p_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "p", 10);
    } if (rf & 2) {
        var ctx_r151 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("textContent", ctx_r151.dataTable.title);
    } }
    function DataTableHeaderComponent_div_12_li_2_Template(rf, ctx) { if (rf & 1) {
        var _r158 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "li", 15);
        core["ɵɵelementStart"](1, "label", 16);
        core["ɵɵelementStart"](2, "input", 17);
        core["ɵɵlistener"]("ngModelChange", function DataTableHeaderComponent_div_12_li_2_Template_input_ngModelChange_2_listener($event) { core["ɵɵrestoreView"](_r158); var ctx_r157 = core["ɵɵnextContext"](2); return ctx_r157.dataTable.expandColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_2_Template_input_change_2_listener($event) { core["ɵɵrestoreView"](_r158); var ctx_r159 = core["ɵɵnextContext"](2); return ctx_r159.onChange($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](3, "span", 18);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r153 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngModel", ctx_r153.dataTable.expandColumnVisible);
        core["ɵɵattribute"]("aria-controls", ctx_r153.dataTable.id);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("textContent", ctx_r153.dataTable.labels.expandColumn);
    } }
    function DataTableHeaderComponent_div_12_li_3_Template(rf, ctx) { if (rf & 1) {
        var _r161 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "li", 15);
        core["ɵɵelementStart"](1, "label", 16);
        core["ɵɵelementStart"](2, "input", 17);
        core["ɵɵlistener"]("ngModelChange", function DataTableHeaderComponent_div_12_li_3_Template_input_ngModelChange_2_listener($event) { core["ɵɵrestoreView"](_r161); var ctx_r160 = core["ɵɵnextContext"](2); return ctx_r160.dataTable.indexColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_3_Template_input_change_2_listener($event) { core["ɵɵrestoreView"](_r161); var ctx_r162 = core["ɵɵnextContext"](2); return ctx_r162.onChange($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](3, "span", 18);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r154 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngModel", ctx_r154.dataTable.indexColumnVisible);
        core["ɵɵattribute"]("aria-controls", ctx_r154.dataTable.id);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("textContent", ctx_r154.dataTable.labels.indexColumn);
    } }
    function DataTableHeaderComponent_div_12_li_4_Template(rf, ctx) { if (rf & 1) {
        var _r164 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "li", 15);
        core["ɵɵelementStart"](1, "label", 16);
        core["ɵɵelementStart"](2, "input", 17);
        core["ɵɵlistener"]("ngModelChange", function DataTableHeaderComponent_div_12_li_4_Template_input_ngModelChange_2_listener($event) { core["ɵɵrestoreView"](_r164); var ctx_r163 = core["ɵɵnextContext"](2); return ctx_r163.dataTable.selectColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_4_Template_input_change_2_listener($event) { core["ɵɵrestoreView"](_r164); var ctx_r165 = core["ɵɵnextContext"](2); return ctx_r165.onChange($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](3, "span", 18);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r155 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngModel", ctx_r155.dataTable.selectColumnVisible);
        core["ɵɵattribute"]("aria-controls", ctx_r155.dataTable.id);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("textContent", ctx_r155.dataTable.labels.selectColumn);
    } }
    function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
        var _r171 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "li", 15);
        core["ɵɵelementStart"](1, "label", 16);
        core["ɵɵelementStart"](2, "input", 17);
        core["ɵɵlistener"]("ngModelChange", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_ngModelChange_2_listener($event) { core["ɵɵrestoreView"](_r171); var item_r166 = core["ɵɵnextContext"]().$implicit; return item_r166.visible = $event; })("change", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_change_2_listener($event) { core["ɵɵrestoreView"](_r171); var ctx_r172 = core["ɵɵnextContext"](3); return ctx_r172.onChange($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](3, "span", 18);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var item_r166 = core["ɵɵnextContext"]().$implicit;
        var ctx_r168 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngModel", item_r166.visible);
        core["ɵɵattribute"]("aria-controls", ctx_r168.dataTable.id);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("textContent", item_r166.header);
    } }
    function DataTableHeaderComponent_div_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, DataTableHeaderComponent_div_12_ng_template_5_li_0_Template, 4, 3, "li", 13);
    } if (rf & 2) {
        var item_r166 = ctx.$implicit;
        var ctx_r156 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngIf", ctx_r156.dataTable.primaryColumn !== item_r166.property);
    } }
    function DataTableHeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 11);
        core["ɵɵelementStart"](1, "ul", 12);
        core["ɵɵtemplate"](2, DataTableHeaderComponent_div_12_li_2_Template, 4, 3, "li", 13);
        core["ɵɵtemplate"](3, DataTableHeaderComponent_div_12_li_3_Template, 4, 3, "li", 13);
        core["ɵɵtemplate"](4, DataTableHeaderComponent_div_12_li_4_Template, 4, 3, "li", 13);
        core["ɵɵtemplate"](5, DataTableHeaderComponent_div_12_ng_template_5_Template, 1, 1, "ng-template", 14);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r152 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngIf", ctx_r152.dataTable.expandableRows);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r152.dataTable.indexColumn);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r152.dataTable.selectColumn);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r152.dataTable.columns);
    } }
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
        DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(core["ɵɵdirectiveInject"](core.forwardRef(function () { return DataTableComponent; })), core["ɵɵdirectiveInject"](core.ElementRef)); };
        DataTableHeaderComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: DataTableHeaderComponent, selectors: [["data-table-header"]], hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function DataTableHeaderComponent_click_HostBindingHandler($event) { return ctx.onClickHandler($event); }, false, core["ɵɵresolveDocument"])("keyup", function DataTableHeaderComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUpHandler($event); }, false, core["ɵɵresolveDocument"]);
            } }, decls: 13, vars: 8, consts: [[1, "data-table-header"], ["class", "h4 title", 3, "textContent", 4, "ngIf"], [1, "button-panel"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "refresh-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "column-selector-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-list"], [1, "column-selector-wrapper"], ["class", "column-selector-box panel panel-default", 4, "ngIf"], [1, "h4", "title", 3, "textContent"], [1, "column-selector-box", "panel", "panel-default"], [1, "list-group", "list-group-flush"], ["class", "list-group-item column-selector-column checkbox", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "list-group-item", "column-selector-column", "checkbox"], [1, "d-flex", "align-items-center"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [3, "textContent"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtemplate"](1, DataTableHeaderComponent_p_1_Template, 1, 1, "p", 1);
                core["ɵɵelementStart"](2, "div", 2);
                core["ɵɵelementStart"](3, "button", 3);
                core["ɵɵlistener"]("click", function DataTableHeaderComponent_Template_button_click_3_listener($event) { return ctx.dataTable.reloadItems(); });
                core["ɵɵelement"](4, "i", 4);
                core["ɵɵelementStart"](5, "span", 5);
                core["ɵɵtext"](6);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](7, "button", 6);
                core["ɵɵlistener"]("click", function DataTableHeaderComponent_Template_button_click_7_listener($event) { return ctx.columnSelectorOpen = !ctx.columnSelectorOpen; });
                core["ɵɵelement"](8, "i", 7);
                core["ɵɵelementStart"](9, "span", 5);
                core["ɵɵtext"](10);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](11, "div", 8);
                core["ɵɵtemplate"](12, DataTableHeaderComponent_div_12_Template, 6, 4, "div", 9);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.dataTable.showTitle);
                core["ɵɵadvance"](5);
                core["ɵɵtextInterpolate"](ctx.dataTable.labels.headerReload.replace("{title}", ctx.dataTable.title));
                core["ɵɵadvance"](1);
                core["ɵɵclassProp"]("active", ctx.columnSelectorOpen);
                core["ɵɵattribute"]("aria-haspopup", true)("aria-expanded", ctx.columnSelectorOpen);
                core["ɵɵadvance"](3);
                core["ɵɵtextInterpolate"](ctx.dataTable.labels.headerColumnSelector.replace("{title}", ctx.dataTable.title));
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngIf", ctx.columnSelectorOpen);
            } }, directives: [common.NgIf, common.NgForOf, forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.NgModel], styles: [".data-table-header[_ngcontent-%COMP%]{min-height:25px;margin-bottom:10px}.title[_ngcontent-%COMP%]{display:inline-block;margin:5px 0 0 5px}.button-panel[_ngcontent-%COMP%]{float:right}.button-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:0!important}.column-selector-wrapper[_ngcontent-%COMP%]{position:relative}.column-selector-box[_ngcontent-%COMP%]{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]{padding:.5rem .25rem}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:4px;font-style:italic}"] });
        return DataTableHeaderComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DataTableHeaderComponent, [{
            type: core.Component,
            args: [{
                    selector: 'data-table-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.css']
                }]
        }], function () { return [{ type: DataTableComponent, decorators: [{
                    type: core.Inject,
                    args: [core.forwardRef(function () { return DataTableComponent; })]
                }] }, { type: core.ElementRef }]; }, { onClickHandler: [{
                type: core.HostListener,
                args: ['document:click', ['$event']]
            }], onKeyUpHandler: [{
                type: core.HostListener,
                args: ['document:keyup', ['$event']]
            }] }); })();

    var _c0$3 = ["pageInput"];
    function DataTablePaginationComponent_option_9_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "option", 24);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var l_r176 = ctx.$implicit;
        core["ɵɵproperty"]("value", l_r176);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](l_r176);
    } }
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
        DataTablePaginationComponent.ɵfac = function DataTablePaginationComponent_Factory(t) { return new (t || DataTablePaginationComponent)(core["ɵɵdirectiveInject"](core.forwardRef(function () { return DataTableComponent; }))); };
        DataTablePaginationComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: DataTablePaginationComponent, selectors: [["data-table-pagination"]], viewQuery: function DataTablePaginationComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$3, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.pageInput = _t.first);
            } }, inputs: { limits: "limits" }, decls: 29, vars: 29, consts: [[1, "row"], [1, "pagination-range", "col"], [3, "textContent"], [1, "pagination-limit", "col-md-3"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text", 3, "textContent"], [1, "form-control", 3, "id", "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pagination-pages", "offset-md-3", "col-md-6"], [1, "pagination-page"], [1, "btn", "btn-default", "pagination-firstpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "btn", "btn-default", "pagination-prevpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "input-group-prepend", "d-sm-block", "d-none"], [1, "input-group-text"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "id", "max", "disabled", "ngModel", "title", "blur", "keyup.enter", "keyup.esc"], ["pageInput", ""], [1, "input-group-append"], [1, "btn", "btn-default", "pagination-nextpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "btn", "btn-default", "pagination-lastpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [3, "value"]], template: function DataTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
                var _r177 = core["ɵɵgetCurrentView"]();
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵelementStart"](1, "div", 1);
                core["ɵɵelement"](2, "span", 2);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](3, "div", 0);
                core["ɵɵelementStart"](4, "div", 3);
                core["ɵɵelementStart"](5, "div", 4);
                core["ɵɵelementStart"](6, "div", 5);
                core["ɵɵelement"](7, "label", 6);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](8, "select", 7);
                core["ɵɵlistener"]("ngModelChange", function DataTablePaginationComponent_Template_select_ngModelChange_8_listener($event) { return ctx.limit = $event; });
                core["ɵɵtemplate"](9, DataTablePaginationComponent_option_9_Template, 2, 2, "option", 8);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](10, "div", 9);
                core["ɵɵelementStart"](11, "div", 10);
                core["ɵɵelementStart"](12, "div", 4);
                core["ɵɵelementStart"](13, "button", 11);
                core["ɵɵlistener"]("click", function DataTablePaginationComponent_Template_button_click_13_listener($event) { return ctx.pageFirst(); });
                core["ɵɵelement"](14, "i", 12);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](15, "button", 13);
                core["ɵɵlistener"]("click", function DataTablePaginationComponent_Template_button_click_15_listener($event) { return ctx.pageBack(); });
                core["ɵɵelement"](16, "i", 14);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](17, "div", 15);
                core["ɵɵelementStart"](18, "label", 16);
                core["ɵɵtext"](19);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](20, "input", 17, 18);
                core["ɵɵlistener"]("blur", function DataTablePaginationComponent_Template_input_blur_20_listener($event) { return ctx.validate($event); })("keyup.enter", function DataTablePaginationComponent_Template_input_keyup_enter_20_listener($event) { return ctx.validate($event); })("keyup.esc", function DataTablePaginationComponent_Template_input_keyup_esc_20_listener($event) { core["ɵɵrestoreView"](_r177); var _r175 = core["ɵɵreference"](21); return _r175.value = ctx.page; });
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](22, "div", 19);
                core["ɵɵelementStart"](23, "span", 16);
                core["ɵɵtext"](24);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](25, "button", 20);
                core["ɵɵlistener"]("click", function DataTablePaginationComponent_Template_button_click_25_listener($event) { return ctx.pageForward(); });
                core["ɵɵelement"](26, "i", 21);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](27, "button", 22);
                core["ɵɵlistener"]("click", function DataTablePaginationComponent_Template_button_click_27_listener($event) { return ctx.pageLast(); });
                core["ɵɵelement"](28, "i", 23);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("textContent", ctx.dataTable.labels.paginationText.replace("{from}", ctx.Math.ceil(ctx.dataTable.itemCount / ctx.dataTable.limit) !== 0 ? ctx.dataTable.offset + 1 + "" : "0").replace("{to}", ctx.Math.min(ctx.dataTable.offset + ctx.dataTable.limit, ctx.dataTable.itemCount) + "").replace("{total}", ctx.dataTable.itemCount + ""));
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("textContent", ctx.dataTable.labels.paginationLimit);
                core["ɵɵattribute"]("for", ctx.id + "-page-limit");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("id", ctx.id + "-page-limit")("ngModel", ctx.limit)("disabled", ctx.dataTable.itemCount === 0);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.limits);
                core["ɵɵadvance"](4);
                core["ɵɵproperty"]("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.firstPage);
                core["ɵɵattribute"]("aria-controls", ctx.dataTable.id);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.prevPage);
                core["ɵɵattribute"]("aria-controls", ctx.dataTable.id);
                core["ɵɵadvance"](3);
                core["ɵɵattribute"]("for", ctx.id + "-page-input");
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"](" ", ctx.dataTable.labels.pageNumberLabel, " ");
                core["ɵɵadvance"](1);
                core["ɵɵpropertyInterpolate"]("max", ctx.maxPage);
                core["ɵɵproperty"]("id", ctx.id + "-page-input")("disabled", ctx.dataTable.itemCount === 0)("ngModel", ctx.page)("title", ctx.dataTable.labels.pageNumber + " " + ctx.dataTable.labels.pageNumberNofM.replace("{N}", "" + ctx.page).replace("{M}", "" + ctx.maxPage));
                core["ɵɵattribute"]("aria-controls", ctx.dataTable.id);
                core["ɵɵadvance"](4);
                core["ɵɵtextInterpolate2"](" ", ctx.dataTable.labels.paginationTotalPages, "\u00A0", ctx.dataTable.lastPage, " ");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.nextPage);
                core["ɵɵattribute"]("aria-controls", ctx.dataTable.id);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.lastPage);
                core["ɵɵattribute"]("aria-controls", ctx.dataTable.id);
            } }, directives: [forms.SelectControlValueAccessor, forms.NgControlStatus, forms.NgModel, common.NgForOf, forms.NumberValueAccessor, forms.DefaultValueAccessor, forms.NgSelectOption, forms["ɵangular_packages_forms_forms_x"]], styles: [".pagination-controllers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{text-align:right}.pagination-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:0!important}"] });
        return DataTablePaginationComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DataTablePaginationComponent, [{
            type: core.Component,
            args: [{
                    selector: 'data-table-pagination',
                    templateUrl: './pagination.component.html',
                    styleUrls: ['./pagination.component.css']
                }]
        }], function () { return [{ type: DataTableComponent, decorators: [{
                    type: core.Inject,
                    args: [core.forwardRef(function () { return DataTableComponent; })]
                }] }]; }, { pageInput: [{
                type: core.ViewChild,
                args: ['pageInput', { static: true }]
            }], limits: [{
                type: core.Input
            }] }); })();

    // modules
    var NgxTableModule = /** @class */ (function () {
        function NgxTableModule() {
        }
        NgxTableModule.forRoot = function () {
            return {
                ngModule: NgxTableModule,
                providers: []
            };
        };
        NgxTableModule.ɵmod = core["ɵɵdefineNgModule"]({ type: NgxTableModule });
        NgxTableModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function NgxTableModule_Factory(t) { return new (t || NgxTableModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule
                ]] });
        return NgxTableModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](NgxTableModule, { declarations: [DataTableComponent, DataTableColumnDirective,
            DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
            PixelConverter, HideDirective, MinPipe], imports: [common.CommonModule,
            forms.FormsModule], exports: [DataTableComponent, DataTableColumnDirective] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](NgxTableModule, [{
            type: core.NgModule,
            args: [{
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
                }]
        }], null, null); })();
    core["ɵɵsetComponentScope"](DataTableComponent, [DataTableComponent, DataTableColumnDirective,
        DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
        HideDirective, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, forms["ɵangular_packages_forms_forms_y"], forms.NgSelectOption, forms["ɵangular_packages_forms_forms_x"], forms.DefaultValueAccessor, forms.NumberValueAccessor, forms.RangeValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.SelectMultipleControlValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.NgControlStatusGroup, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, forms.PatternValidator, forms.CheckboxRequiredValidator, forms.EmailValidator, forms.NgModel, forms.NgModelGroup, forms.NgForm], [PixelConverter, MinPipe, common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe]);

    exports.DataTable = DataTableComponent;
    exports.DataTableColumn = DataTableColumnDirective;
    exports.DataTableHeader = DataTableHeaderComponent;
    exports.DataTablePagination = DataTablePaginationComponent;
    exports.DataTableResource = DataTableResource;
    exports.DataTableRow = DataTableRowComponent;
    exports.NgxTableModule = NgxTableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=popetech-ngx-table.umd.js.map
