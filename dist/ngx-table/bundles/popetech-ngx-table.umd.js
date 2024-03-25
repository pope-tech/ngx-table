(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@popetech/ngx-table', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.popetech = global.popetech || {}, global.popetech["ngx-table"] = {}), global.ng.core, global.ng.common, global.ng.forms, global.rxjs, global.rxjs.operators));
})(this, (function (exports, i0, i1, i1$1, rxjs, operators) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

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
            enumerable: false,
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
        return HideDirective;
    }());
    HideDirective.ɵfac = function HideDirective_Factory(t) { return new (t || HideDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    HideDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: HideDirective, selectors: [["", "hide", ""]], inputs: { hide: "hide" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HideDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hide]'
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, { hide: [{
                    type: i0.Input
                }] });
    })();

    var MinPipe = /** @class */ (function () {
        function MinPipe() {
        }
        MinPipe.prototype.transform = function (value, args) {
            return Math.min.apply(null, value);
        };
        return MinPipe;
    }());
    MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
    MinPipe.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "min", type: MinPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MinPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'min'
                    }]
            }], null, null);
    })();

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
        return PixelConverter;
    }());
    PixelConverter.ɵfac = function PixelConverter_Factory(t) { return new (t || PixelConverter)(); };
    PixelConverter.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "px", type: PixelConverter, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PixelConverter, [{
                type: i0.Pipe,
                args: [{
                        name: 'px'
                    }]
            }], null, null);
    })();

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

    var _c0$3 = ["dataTableCell"];
    var _c1$2 = ["dataTableHeader"];
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
        return DataTableColumnDirective;
    }());
    DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(); };
    DataTableColumnDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: DataTableColumnDirective, selectors: [["data-table-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0__namespace.ɵɵcontentQuery(dirIndex, _c0$3, 7);
                i0__namespace.ɵɵcontentQuery(dirIndex, _c1$2, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
            }
        }, inputs: { header: "header", sortable: "sortable", resizable: "resizable", property: "property", styleClass: "styleClass", cellColors: "cellColors", width: "width", visible: "visible" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DataTableColumnDirective, [{
                type: i0.Directive,
                args: [{
                        selector: 'data-table-column'
                    }]
            }], null, { header: [{
                    type: i0.Input
                }], sortable: [{
                    type: i0.Input
                }], resizable: [{
                    type: i0.Input
                }], property: [{
                    type: i0.Input
                }], styleClass: [{
                    type: i0.Input
                }], cellColors: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], visible: [{
                    type: i0.Input
                }], cellTemplate: [{
                    type: i0.ContentChild,
                    args: ['dataTableCell', { static: true }]
                }], headerTemplate: [{
                    type: i0.ContentChild,
                    args: ['dataTableHeader', { static: true }]
                }] });
    })();

    var _c0$2 = ["dataTableRow", ""];
    function DataTableRowComponent_ng_template_7_th_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "div", 14);
        }
        if (rf & 2) {
            var column_r2 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r5 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("textContent", ctx_r5.item[column_r2.property]);
        }
    }
    var _c1$1 = function (a0, a1, a2) { return { column: a0, row: a1, item: a2 }; };
    function DataTableRowComponent_ng_template_7_th_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "div", 15);
        }
        if (rf & 2) {
            var column_r2 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r6 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngTemplateOutlet", column_r2.cellTemplate)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction3(2, _c1$1, column_r2, ctx_r6._this, ctx_r6.item));
        }
    }
    function DataTableRowComponent_ng_template_7_th_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 11);
            i0__namespace.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_th_0_div_1_Template, 1, 1, "div", 12);
            i0__namespace.ɵɵtemplate(2, DataTableRowComponent_ng_template_7_th_0_div_2_Template, 1, 6, "div", 13);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r2 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("background-color", column_r2.getCellColor(ctx_r3._this, ctx_r3.index));
            i0__namespace.ɵɵproperty("hide", !column_r2.visible)("ngClass", column_r2.styleClassObject);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !column_r2.cellTemplate);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r2.cellTemplate);
        }
    }
    function DataTableRowComponent_ng_template_7_td_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "div", 14);
        }
        if (rf & 2) {
            var column_r2 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r10 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("textContent", ctx_r10.item[column_r2.property]);
        }
    }
    function DataTableRowComponent_ng_template_7_td_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "div", 15);
        }
        if (rf & 2) {
            var column_r2 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r11 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngTemplateOutlet", column_r2.cellTemplate)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction3(2, _c1$1, column_r2, ctx_r11._this, ctx_r11.item));
        }
    }
    function DataTableRowComponent_ng_template_7_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 16);
            i0__namespace.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_div_1_Template, 1, 1, "div", 12);
            i0__namespace.ɵɵtemplate(2, DataTableRowComponent_ng_template_7_td_1_div_2_Template, 1, 6, "div", 13);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r2 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("background-color", column_r2.getCellColor(ctx_r4._this, ctx_r4.index));
            i0__namespace.ɵɵproperty("hide", !column_r2.visible)("ngClass", column_r2.styleClassObject);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !column_r2.cellTemplate);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r2.cellTemplate);
        }
    }
    function DataTableRowComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, DataTableRowComponent_ng_template_7_th_0_Template, 3, 6, "th", 9);
            i0__namespace.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_Template, 3, 6, "td", 10);
        }
        if (rf & 2) {
            var column_r2 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.dataTable.primaryColumn === column_r2.property);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.dataTable.primaryColumn !== column_r2.property);
        }
    }
    var _c2$1 = function (a0, a1) { return { row: a0, item: a1 }; };
    function DataTableRowComponent_tr_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "tr", 17);
            i0__namespace.ɵɵelementStart(1, "td");
            i0__namespace.ɵɵelement(2, "div", 15);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("hide", !ctx_r1.expanded);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵattribute("colspan", ctx_r1.dataTable.columnCount);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r1.dataTable.expandTemplate)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction2(4, _c2$1, ctx_r1._this, ctx_r1.item));
        }
    }
    var _c3 = function (a0, a1) { return { "fa-caret-right": a0, "fa-caret-down": a1 }; };
    var DataTableRowComponent = /** @class */ (function () {
        function DataTableRowComponent(dataTable, renderer, elementRef) {
            this.dataTable = dataTable;
            this.renderer = renderer;
            this.elementRef = elementRef;
            this._this = this;
            this._listeners = [];
            this.selectedChange = new i0.EventEmitter();
        }
        Object.defineProperty(DataTableRowComponent.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (selected) {
                this._selected = selected;
                this.selectedChange.emit(selected);
            },
            enumerable: false,
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
            enumerable: false,
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
        return DataTableRowComponent;
    }());
    DataTableRowComponent.ɵfac = function DataTableRowComponent_Factory(t) { return new (t || DataTableRowComponent)(i0__namespace.ɵɵdirectiveInject(i0.forwardRef(function () { return DataTableComponent; })), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    DataTableRowComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DataTableRowComponent, selectors: [["", "dataTableRow", ""]], inputs: { item: "item", index: "index" }, outputs: { selectedChange: "selectedChange" }, attrs: _c0$2, decls: 9, vars: 27, consts: [[1, "data-table-row", 3, "title"], [3, "hide"], [1, "row-expand-button", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-lg", 3, "ngClass"], [1, "index-column", 3, "hide", "textContent"], [1, "select-column", 3, "hide"], ["type", "checkbox", 3, "ngModel", "title", "ngModelChange"], ["ngFor", "", 3, "ngForOf"], ["class", "row-expansion", 3, "hide", 4, "ngIf"], ["scope", "row", "class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["scope", "row", 1, "data-column", 3, "hide", "ngClass"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "textContent"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "data-column", 3, "hide", "ngClass"], [1, "row-expansion", 3, "hide"]], template: function DataTableRowComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "tr", 0);
                i0__namespace.ɵɵelementStart(1, "td", 1);
                i0__namespace.ɵɵelementStart(2, "button", 2);
                i0__namespace.ɵɵlistener("click", function DataTableRowComponent_Template_button_click_2_listener($event) { ctx.expanded = !ctx.expanded; return $event.stopPropagation(); });
                i0__namespace.ɵɵelement(3, "i", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "td", 4);
                i0__namespace.ɵɵelementStart(5, "td", 5);
                i0__namespace.ɵɵelementStart(6, "input", 6);
                i0__namespace.ɵɵlistener("ngModelChange", function DataTableRowComponent_Template_input_ngModelChange_6_listener($event) { return ctx.selected = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(7, DataTableRowComponent_ng_template_7_Template, 2, 2, "ng-template", 7);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(8, DataTableRowComponent_tr_8_Template, 3, 7, "tr", 8);
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("background-color", ctx.dataTable.getRowColor(ctx.item, ctx.index, ctx._this));
                i0__namespace.ɵɵclassProp("row-odd", ctx.index % 2 === 0)("row-even", ctx.index % 2 === 1)("selected", ctx.selected)("clickable", ctx.dataTable.selectOnRowClick);
                i0__namespace.ɵɵproperty("title", ctx.getTooltip());
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("hide", !ctx.dataTable.expandColumnVisible);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("title", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
                i0__namespace.ɵɵattribute("aria-expanded", ctx.expanded)("aria-label", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction2(24, _c3, !ctx.expanded, ctx.expanded));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("hide", !ctx.dataTable.indexColumnVisible)("textContent", ctx.displayIndex);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("hide", !ctx.dataTable.selectColumnVisible);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngModel", ctx.selected)("title", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
                i0__namespace.ɵɵattribute("aria-label", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.dataTable.columns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.dataTable.expandableRows);
            }
        }, directives: [HideDirective, i1__namespace.NgClass, i1__namespace$1.CheckboxControlValueAccessor, i1__namespace$1.NgControlStatus, i1__namespace$1.NgModel, i1__namespace.NgForOf, i1__namespace.NgIf, i1__namespace.NgTemplateOutlet], styles: [".select-column[_ngcontent-%COMP%]{text-align:center}.row-expand-button[_ngcontent-%COMP%]{box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable[_ngcontent-%COMP%]{cursor:pointer}th[_ngcontent-%COMP%]{font-weight:normal;font-weight:initial}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DataTableRowComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[dataTableRow]',
                        templateUrl: './row.component.html',
                        styleUrls: ['./row.component.css']
                    }]
            }], function () {
            return [{ type: DataTableComponent, decorators: [{
                            type: i0.Inject,
                            args: [i0.forwardRef(function () { return DataTableComponent; })]
                        }] }, { type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }];
        }, { item: [{
                    type: i0.Input
                }], index: [{
                    type: i0.Input
                }], selectedChange: [{
                    type: i0.Output
                }] });
    })();

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

    var _c0$1 = ["pageInput"];
    function DataTablePaginationComponent_option_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "option", 25);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var l_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", l_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(l_r2);
        }
    }
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
            enumerable: false,
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
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataTablePaginationComponent.prototype, "page", {
            get: function () {
                return this.dataTable.page;
            },
            set: function (value) {
                this.dataTable.page = +value;
            },
            enumerable: false,
            configurable: true
        });
        DataTablePaginationComponent.prototype.validate = function (event) {
            var newValue = +event.target.value;
            if (newValue !== this.page) {
                this.page = (event.target.value > this.maxPage) ? this.maxPage : (newValue < 1) ? 1 : newValue;
                event.target.value = this.page;
            }
        };
        return DataTablePaginationComponent;
    }());
    DataTablePaginationComponent.ɵfac = function DataTablePaginationComponent_Factory(t) { return new (t || DataTablePaginationComponent)(i0__namespace.ɵɵdirectiveInject(i0.forwardRef(function () { return DataTableComponent; }))); };
    DataTablePaginationComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DataTablePaginationComponent, selectors: [["data-table-pagination"]], viewQuery: function DataTablePaginationComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$1, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.pageInput = _t.first);
            }
        }, inputs: { limits: "limits" }, decls: 37, vars: 29, consts: [[1, "row"], [1, "pagination-range", "col"], [3, "textContent"], [1, "pagination-limit", "col-md-3"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text", 3, "textContent"], [1, "form-control", 3, "id", "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pagination-pages", "offset-md-3", "col-md-6"], [1, "pagination-page"], [1, "btn", "btn-default", "pagination-firstpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "sr-only"], [1, "btn", "btn-default", "pagination-prevpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "input-group-prepend", "d-sm-block", "d-none"], [1, "input-group-text"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "id", "max", "disabled", "ngModel", "title", "blur", "keyup.enter", "keyup.esc"], ["pageInput", ""], [1, "input-group-append"], [1, "btn", "btn-default", "pagination-nextpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "btn", "btn-default", "pagination-lastpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [3, "value"]], template: function DataTablePaginationComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r3_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelement(2, "span", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "div", 0);
                i0__namespace.ɵɵelementStart(4, "div", 3);
                i0__namespace.ɵɵelementStart(5, "div", 4);
                i0__namespace.ɵɵelementStart(6, "div", 5);
                i0__namespace.ɵɵelement(7, "label", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "select", 7);
                i0__namespace.ɵɵlistener("ngModelChange", function DataTablePaginationComponent_Template_select_ngModelChange_8_listener($event) { return ctx.limit = $event; });
                i0__namespace.ɵɵtemplate(9, DataTablePaginationComponent_option_9_Template, 2, 2, "option", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "div", 9);
                i0__namespace.ɵɵelementStart(11, "div", 10);
                i0__namespace.ɵɵelementStart(12, "div", 4);
                i0__namespace.ɵɵelementStart(13, "button", 11);
                i0__namespace.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_13_listener() { return ctx.pageFirst(); });
                i0__namespace.ɵɵelement(14, "i", 12);
                i0__namespace.ɵɵelementStart(15, "span", 13);
                i0__namespace.ɵɵtext(16, "first page");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "button", 14);
                i0__namespace.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_17_listener() { return ctx.pageBack(); });
                i0__namespace.ɵɵelement(18, "i", 15);
                i0__namespace.ɵɵelementStart(19, "span", 13);
                i0__namespace.ɵɵtext(20, "previous page");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "div", 16);
                i0__namespace.ɵɵelementStart(22, "label", 17);
                i0__namespace.ɵɵtext(23);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "input", 18, 19);
                i0__namespace.ɵɵlistener("blur", function DataTablePaginationComponent_Template_input_blur_24_listener($event) { return ctx.validate($event); })("keyup.enter", function DataTablePaginationComponent_Template_input_keyup_enter_24_listener($event) { return ctx.validate($event); })("keyup.esc", function DataTablePaginationComponent_Template_input_keyup_esc_24_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var _r1 = i0__namespace.ɵɵreference(25); return _r1.value = ctx.page; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "div", 20);
                i0__namespace.ɵɵelementStart(27, "span", 17);
                i0__namespace.ɵɵtext(28);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(29, "button", 21);
                i0__namespace.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_29_listener() { return ctx.pageForward(); });
                i0__namespace.ɵɵelement(30, "i", 22);
                i0__namespace.ɵɵelementStart(31, "span", 13);
                i0__namespace.ɵɵtext(32, "next page");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(33, "button", 23);
                i0__namespace.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_33_listener() { return ctx.pageLast(); });
                i0__namespace.ɵɵelement(34, "i", 24);
                i0__namespace.ɵɵelementStart(35, "span", 13);
                i0__namespace.ɵɵtext(36, "last page");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("textContent", ctx.dataTable.labels.paginationText.replace("{from}", ctx.Math.ceil(ctx.dataTable.itemCount / ctx.dataTable.limit) !== 0 ? ctx.dataTable.offset + 1 + "" : "0").replace("{to}", ctx.Math.min(ctx.dataTable.offset + ctx.dataTable.limit, ctx.dataTable.itemCount) + "").replace("{total}", ctx.dataTable.itemCount + ""));
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("textContent", ctx.dataTable.labels.paginationLimit);
                i0__namespace.ɵɵattribute("for", ctx.id + "-page-limit");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("id", ctx.id + "-page-limit")("ngModel", ctx.limit)("disabled", ctx.dataTable.itemCount === 0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.limits);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.firstPage);
                i0__namespace.ɵɵattribute("aria-controls", ctx.dataTable.id);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.prevPage);
                i0__namespace.ɵɵattribute("aria-controls", ctx.dataTable.id);
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵattribute("for", ctx.id + "-page-input");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.dataTable.labels.pageNumberLabel, " ");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵpropertyInterpolate("max", ctx.maxPage);
                i0__namespace.ɵɵproperty("id", ctx.id + "-page-input")("disabled", ctx.dataTable.itemCount === 0)("ngModel", ctx.page)("title", ctx.dataTable.labels.pageNumber + " " + ctx.dataTable.labels.pageNumberNofM.replace("{N}", "" + ctx.page).replace("{M}", "" + ctx.maxPage));
                i0__namespace.ɵɵattribute("aria-controls", ctx.dataTable.id);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate2(" ", ctx.dataTable.labels.paginationTotalPages, "\u00A0", ctx.dataTable.lastPage, " ");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.nextPage);
                i0__namespace.ɵɵattribute("aria-controls", ctx.dataTable.id);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.lastPage);
                i0__namespace.ɵɵattribute("aria-controls", ctx.dataTable.id);
            }
        }, directives: [i1__namespace$1.SelectControlValueAccessor, i1__namespace$1.NgControlStatus, i1__namespace$1.NgModel, i1__namespace.NgForOf, i1__namespace$1.MinValidator, i1__namespace$1.MaxValidator, i1__namespace$1.NumberValueAccessor, i1__namespace$1.DefaultValueAccessor, i1__namespace$1.NgSelectOption, i1__namespace$1.ɵNgSelectMultipleOption], styles: [".pagination-controllers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{text-align:right}.pagination-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DataTablePaginationComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'data-table-pagination',
                        templateUrl: './pagination.component.html',
                        styleUrls: ['./pagination.component.css']
                    }]
            }], function () {
            return [{ type: DataTableComponent, decorators: [{
                            type: i0.Inject,
                            args: [i0.forwardRef(function () { return DataTableComponent; })]
                        }] }];
        }, { pageInput: [{
                    type: i0.ViewChild,
                    args: ['pageInput', { static: true }]
                }], limits: [{
                    type: i0.Input
                }] });
    })();

    var _c0 = ["dataTableExpand"];
    function DataTableComponent_data_table_header_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "data-table-header");
        }
    }
    function DataTableComponent_th_19_button_3_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "span", 25);
        }
        if (rf & 2) {
            var ctx_r16 = i0__namespace.ɵɵnextContext(2);
            var i_r8 = ctx_r16.index;
            var column_r7 = ctx_r16.$implicit;
            var ctx_r12 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("id", "col-" + ctx_r12.id + "-" + i_r8)("textContent", column_r7.header);
        }
    }
    var _c1 = function (a0) { return { column: a0 }; };
    function DataTableComponent_th_19_button_3_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "span", 26);
        }
        if (rf & 2) {
            var ctx_r17 = i0__namespace.ɵɵnextContext(2);
            var i_r8 = ctx_r17.index;
            var column_r7 = ctx_r17.$implicit;
            var ctx_r13 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("id", "col-" + ctx_r13.id + "-" + i_r8)("ngTemplateOutlet", column_r7.headerTemplate)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction1(3, _c1, column_r7));
        }
    }
    var _c2 = function (a0, a1) { return { "fa-sort-asc": a0, "fa-sort-desc": a1 }; };
    function DataTableComponent_th_19_button_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span", 27);
            i0__namespace.ɵɵelement(1, "i", 28);
            i0__namespace.ɵɵelement(2, "i", 29);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r7 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r14 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("hide", column_r7.property === ctx_r14.sortBy);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("hide", column_r7.property !== ctx_r14.sortBy)("ngClass", i0__namespace.ɵɵpureFunction2(3, _c2, ctx_r14.sortAsc, !ctx_r14.sortAsc));
        }
    }
    function DataTableComponent_th_19_button_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "span", 30);
            i0__namespace.ɵɵlistener("mousedown", function DataTableComponent_th_19_button_3_span_4_Template_span_mousedown_0_listener($event) { i0__namespace.ɵɵrestoreView(_r21_1); var column_r7 = i0__namespace.ɵɵnextContext(2).$implicit; var _r9 = i0__namespace.ɵɵreference(1); var ctx_r19 = i0__namespace.ɵɵnextContext(); return ctx_r19.resizeColumnStart($event, column_r7, _r9); });
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DataTableComponent_th_19_button_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 20);
            i0__namespace.ɵɵlistener("click", function DataTableComponent_th_19_button_3_Template_button_click_0_listener($event) { i0__namespace.ɵɵrestoreView(_r24_1); var column_r7 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r22 = i0__namespace.ɵɵnextContext(); return ctx_r22.headerClicked(column_r7, $event); });
            i0__namespace.ɵɵtemplate(1, DataTableComponent_th_19_button_3_span_1_Template, 1, 2, "span", 21);
            i0__namespace.ɵɵtemplate(2, DataTableComponent_th_19_button_3_span_2_Template, 1, 5, "span", 22);
            i0__namespace.ɵɵtemplate(3, DataTableComponent_th_19_button_3_span_3_Template, 3, 6, "span", 23);
            i0__namespace.ɵɵtemplate(4, DataTableComponent_th_19_button_3_span_4_Template, 1, 0, "span", 24);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r25 = i0__namespace.ɵɵnextContext();
            var column_r7 = ctx_r25.$implicit;
            var i_r8 = ctx_r25.index;
            var ctx_r10 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("disabled", ctx_r10.itemCount === 0)("title", !ctx_r10.sortAsc ? ctx_r10.labels.sortAscending : ctx_r10.labels.sortDescending);
            i0__namespace.ɵɵattribute("aria-controls", column_r7.sortable ? ctx_r10.id : null)("aria-labelledby", "col-" + ctx_r10.id + "-" + i_r8);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !column_r7.headerTemplate);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r7.headerTemplate);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r7.sortable);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r7.resizable);
        }
    }
    function DataTableComponent_th_19_span_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "span", 2);
        }
        if (rf & 2) {
            var column_r7 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("textContent", column_r7.header);
        }
    }
    function DataTableComponent_th_19_span_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "span", 33);
        }
        if (rf & 2) {
            var column_r7 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("ngTemplateOutlet", column_r7.headerTemplate)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction1(2, _c1, column_r7));
        }
    }
    function DataTableComponent_th_19_span_4_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span", 27);
            i0__namespace.ɵɵelement(1, "i", 28);
            i0__namespace.ɵɵelement(2, "i", 29);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r7 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r28 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("hide", column_r7.property === ctx_r28.sortBy);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("hide", column_r7.property !== ctx_r28.sortBy)("ngClass", i0__namespace.ɵɵpureFunction2(3, _c2, ctx_r28.sortAsc, !ctx_r28.sortAsc));
        }
    }
    function DataTableComponent_th_19_span_4_span_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r35_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "span", 30);
            i0__namespace.ɵɵlistener("mousedown", function DataTableComponent_th_19_span_4_span_4_Template_span_mousedown_0_listener($event) { i0__namespace.ɵɵrestoreView(_r35_1); var column_r7 = i0__namespace.ɵɵnextContext(2).$implicit; var _r9 = i0__namespace.ɵɵreference(1); var ctx_r33 = i0__namespace.ɵɵnextContext(); return ctx_r33.resizeColumnStart($event, column_r7, _r9); });
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DataTableComponent_th_19_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtemplate(1, DataTableComponent_th_19_span_4_span_1_Template, 1, 1, "span", 31);
            i0__namespace.ɵɵtemplate(2, DataTableComponent_th_19_span_4_span_2_Template, 1, 4, "span", 32);
            i0__namespace.ɵɵtemplate(3, DataTableComponent_th_19_span_4_span_3_Template, 3, 6, "span", 23);
            i0__namespace.ɵɵtemplate(4, DataTableComponent_th_19_span_4_span_4_Template, 1, 0, "span", 24);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r7 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !column_r7.headerTemplate);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r7.headerTemplate);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r7.sortable);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r7.resizable);
        }
    }
    function DataTableComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 17, 18);
            i0__namespace.ɵɵpipe(2, "px");
            i0__namespace.ɵɵtemplate(3, DataTableComponent_th_19_button_3_Template, 5, 8, "button", 19);
            i0__namespace.ɵɵtemplate(4, DataTableComponent_th_19_span_4_Template, 5, 4, "span", 3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r7 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("width", i0__namespace.ɵɵpipeBind1(2, 11, column_r7.width));
            i0__namespace.ɵɵclassProp("sortable", column_r7.sortable)("resizable", column_r7.resizable);
            i0__namespace.ɵɵproperty("hide", !column_r7.visible)("ngClass", column_r7.styleClassObject);
            i0__namespace.ɵɵattribute("aria-sort", column_r7.sortable ? column_r7.property === ctx_r1.sortBy ? ctx_r1.sortAsc ? "ascending" : "descending" : "none" : null);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngIf", column_r7.sortable);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !column_r7.sortable);
        }
    }
    function DataTableComponent_tbody_20_Template(rf, ctx) {
        if (rf & 1) {
            var _r41_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "tbody", 34, 35);
            i0__namespace.ɵɵlistener("selectedChange", function DataTableComponent_tbody_20_Template_tbody_selectedChange_0_listener() { i0__namespace.ɵɵrestoreView(_r41_1); var _r39 = i0__namespace.ɵɵreference(1); var ctx_r40 = i0__namespace.ɵɵnextContext(); return ctx_r40.onRowSelectChanged(_r39); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r37 = ctx.$implicit;
            var index_r38 = ctx.index;
            i0__namespace.ɵɵproperty("item", item_r37)("index", index_r38);
        }
    }
    function DataTableComponent_tbody_21_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "tbody");
            i0__namespace.ɵɵelementStart(1, "tr");
            i0__namespace.ɵɵelementStart(2, "td");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵattribute("colspan", ctx_r3.columnCount);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(ctx_r3.noDataMessage);
        }
    }
    function DataTableComponent_tbody_22_tr_1_td_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "td", 39);
        }
        if (rf & 2) {
            var column_r46 = ctx.$implicit;
            i0__namespace.ɵɵproperty("hide", !column_r46.visible);
        }
    }
    function DataTableComponent_tbody_22_tr_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "tr", 38);
            i0__namespace.ɵɵelement(1, "td", 39);
            i0__namespace.ɵɵelementStart(2, "td", 39);
            i0__namespace.ɵɵtext(3, "\u00A0");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(4, "td", 39);
            i0__namespace.ɵɵtemplate(5, DataTableComponent_tbody_22_tr_1_td_5_Template, 1, 1, "td", 40);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var index_r44 = ctx.index;
            var ctx_r42 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵclassProp("row-odd", (index_r44 + ctx_r42.items.length) % 2 === 0)("row-even", (index_r44 + ctx_r42.items.length) % 2 === 1);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("hide", !ctx_r42.expandColumnVisible);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("hide", !ctx_r42.indexColumnVisible);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("hide", !ctx_r42.selectColumnVisible);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r42.columns);
        }
    }
    function DataTableComponent_tbody_22_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "tbody", 36);
            i0__namespace.ɵɵtemplate(1, DataTableComponent_tbody_22_tr_1_Template, 6, 8, "tr", 37);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r4.substituteItems);
        }
    }
    function DataTableComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 41);
            i0__namespace.ɵɵelementStart(1, "i");
            i0__namespace.ɵɵelement(2, "i", 42);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DataTableComponent_data_table_pagination_24_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "data-table-pagination", 43);
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("limits", ctx_r6.pageLimits);
        }
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
            this.reload = new i0.EventEmitter();
            // event handlers:
            this.rowClick = new i0.EventEmitter();
            this.rowDoubleClick = new i0.EventEmitter();
            this.headerClick = new i0.EventEmitter();
            this.cellClick = new i0.EventEmitter();
            this.selectedRowsChange = new i0.EventEmitter();
            this.visibleColumnsChange = new i0.EventEmitter();
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
            enumerable: false,
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
            enumerable: false,
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
            enumerable: false,
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
            enumerable: false,
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
            enumerable: false,
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
            enumerable: false,
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
            enumerable: false,
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
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataTableComponent.prototype, "lastPage", {
            get: function () {
                return Math.ceil(this.itemCount / this.limit);
            },
            enumerable: false,
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
            this.labels = Object.assign(Object.assign({}, defaultTranslations), this.labels);
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
            enumerable: false,
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
            enumerable: false,
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
            enumerable: false,
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
            enumerable: false,
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
        return DataTableComponent;
    }());
    DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(); };
    DataTableComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DataTableComponent, selectors: [["data-table"]], contentQueries: function DataTableComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0__namespace.ɵɵcontentQuery(dirIndex, _c0, 7);
                i0__namespace.ɵɵcontentQuery(dirIndex, DataTableColumnDirective, 4);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.expandTemplate = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.columns = _t);
            }
        }, viewQuery: function DataTableComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(DataTablePaginationComponent, 5);
                i0__namespace.ɵɵviewQuery(DataTableRowComponent, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.paginator = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.rows = _t);
            }
        }, inputs: { wrapperClass: "wrapperClass", items: "items", itemCount: "itemCount", title: "title", showTitle: "showTitle", header: "header", pagination: "pagination", indexColumn: "indexColumn", indexColumnHeader: "indexColumnHeader", rowColors: "rowColors", rowTooltip: "rowTooltip", selectColumn: "selectColumn", multiSelect: "multiSelect", substituteRows: "substituteRows", expandableRows: "expandableRows", labels: "labels", selectOnRowClick: "selectOnRowClick", autoReload: "autoReload", showReloading: "showReloading", noDataMessage: "noDataMessage", pageLimits: "pageLimits", primaryColumn: "primaryColumn", sortBy: "sortBy", sortAsc: "sortAsc", offset: "offset", limit: "limit", page: "page" }, outputs: { reload: "reload", rowClick: "rowClick", rowDoubleClick: "rowDoubleClick", headerClick: "headerClick", cellClick: "cellClick", selectedRowsChange: "selectedRowsChange", visibleColumnsChange: "visibleColumnsChange" }, decls: 25, vars: 26, consts: [[1, "data-table-wrapper"], ["role", "status", "aria-live", "polite", "aria-atomic", "false", "aria-relevant", "text", 1, "sr-only"], [3, "textContent"], [4, "ngIf"], [1, "data-table-box"], ["tabindex", "-1", 1, "table", "data-table", 3, "id"], [1, "sr-only", 3, "textContent"], [1, "expand-column-header", 3, "hide"], ["scope", "col", 1, "index-column-header", 3, "hide"], [1, "select-column-header", 3, "hide"], [1, "sr-only", 3, "for"], ["type", "checkbox", 3, "id", "hide", "ngModel", "disabled", "title", "ngModelChange"], ["scope", "col", "class", "column-header", 3, "hide", "sortable", "resizable", "ngClass", "width", 4, "ngFor", "ngForOf"], ["class", "data-table-row-wrapper", "dataTableRow", "", 3, "item", "index", "selectedChange", 4, "ngFor", "ngForOf"], ["class", "substitute-rows", 4, "ngIf"], ["class", "busy", 4, "ngIf"], [3, "limits", 4, "ngIf"], ["scope", "col", 1, "column-header", 3, "hide", "ngClass"], ["th", ""], [3, "disabled", "title", "click", 4, "ngIf"], [3, "disabled", "title", "click"], [3, "id", "textContent", 4, "ngIf"], [3, "id", "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "column-sort-icon", 4, "ngIf"], ["class", "column-resize-handle", 3, "mousedown", 4, "ngIf"], [3, "id", "textContent"], [3, "id", "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-sort-icon"], ["aria-hidden", "true", 1, "fa", "fa-sort", "column-sortable-icon", 3, "hide"], ["aria-hidden", "true", 1, "fa", 3, "hide", "ngClass"], [1, "column-resize-handle", 3, "mousedown"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["dataTableRow", "", 1, "data-table-row-wrapper", 3, "item", "index", "selectedChange"], ["row", ""], [1, "substitute-rows"], ["role", "presentation", 3, "row-odd", "row-even", 4, "ngFor", "ngForOf"], ["role", "presentation"], [3, "hide"], [3, "hide", 4, "ngFor", "ngForOf"], [1, "busy"], [1, "fa", "fa-spin", "fa-cog", "fa-2x"], [3, "limits"]], template: function DataTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "span", 1);
                i0__namespace.ɵɵelement(2, "span", 2);
                i0__namespace.ɵɵelement(3, "span", 2);
                i0__namespace.ɵɵelement(4, "span", 2);
                i0__namespace.ɵɵelement(5, "span", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(6, DataTableComponent_data_table_header_6_Template, 1, 0, "data-table-header", 3);
                i0__namespace.ɵɵelementStart(7, "div", 4);
                i0__namespace.ɵɵelementStart(8, "table", 5);
                i0__namespace.ɵɵelement(9, "caption", 6);
                i0__namespace.ɵɵelementStart(10, "thead");
                i0__namespace.ɵɵelementStart(11, "tr");
                i0__namespace.ɵɵelement(12, "td", 7);
                i0__namespace.ɵɵelementStart(13, "th", 8);
                i0__namespace.ɵɵelement(14, "span", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "td", 9);
                i0__namespace.ɵɵelementStart(16, "label", 10);
                i0__namespace.ɵɵtext(17);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "input", 11);
                i0__namespace.ɵɵlistener("ngModelChange", function DataTableComponent_Template_input_ngModelChange_18_listener($event) { return ctx.selectAllCheckbox = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(19, DataTableComponent_th_19_Template, 5, 13, "th", 12);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(20, DataTableComponent_tbody_20_Template, 2, 2, "tbody", 13);
                i0__namespace.ɵɵtemplate(21, DataTableComponent_tbody_21_Template, 4, 2, "tbody", 3);
                i0__namespace.ɵɵtemplate(22, DataTableComponent_tbody_22_Template, 2, 1, "tbody", 14);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(23, DataTableComponent_div_23_Template, 3, 0, "div", 15);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(24, DataTableComponent_data_table_pagination_24_Template, 1, 1, "data-table-pagination", 16);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("textContent", ctx.reloadNotification);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("textContent", ctx.paginationNotification);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("textContent", ctx.sortNotification);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("textContent", ctx.columnSelectorNotification);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.header);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassMap(ctx.wrapperClass);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("id", ctx.id);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("textContent", ctx.title);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("hide", !ctx.expandColumnVisible);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("hide", !ctx.indexColumnVisible);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("textContent", ctx.indexColumnHeader);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("hide", !ctx.selectColumnVisible);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", ctx.id + "-select-all-column");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.labels.selectAllRows, " ");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("id", ctx.id + "-select-all-column")("hide", !ctx.multiSelect)("ngModel", ctx.selectAllCheckbox)("disabled", ctx.itemCount === 0)("title", ctx.labels.selectAllRows);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.columns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.items);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.itemCount === 0 && ctx.noDataMessage);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.pagination && ctx.substituteRows);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.showReloading && ctx.reloading);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.pagination);
            }
        }, styles: ["[_nghost-%COMP%]     .data-table.table>tbody+tbody{border-top:none}[_nghost-%COMP%]     .data-table.table td{vertical-align:middle}[_nghost-%COMP%]     .data-table>thead>tr>th, [_nghost-%COMP%]     .data-table>tbody>tr>td{overflow:hidden}[_nghost-%COMP%]     .data-table>thead>tr>td{border-bottom:2px solid #dee2e6}[_nghost-%COMP%]     .row-odd{background-color:#f6f6f6}.data-table[_ngcontent-%COMP%]   .substitute-rows[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]     .data-table .data-table-row:hover{background-color:#ececec}.data-table[_ngcontent-%COMP%]{box-shadow:0 0 15px #ececec}.column-header[_ngcontent-%COMP%]{position:relative}.expand-column-header[_ngcontent-%COMP%]{width:50px}.select-column-header[_ngcontent-%COMP%]{width:50px;text-align:center}.index-column-header[_ngcontent-%COMP%]{width:40px}.column-header.sortable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:left}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-left:8px}.column-header.resizable[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]{margin-right:8px}.column-header[_ngcontent-%COMP%]   .column-sort-icon[_ngcontent-%COMP%]   .column-sortable-icon[_ngcontent-%COMP%]{color:#d3d3d3}.column-header[_ngcontent-%COMP%]   .column-resize-handle[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:0;padding:0;width:8px;height:100%;cursor:col-resize}.data-table-box[_ngcontent-%COMP%]{position:relative}.busy[_ngcontent-%COMP%]{position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;background-color:#00000040}.busy[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DataTableComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'data-table',
                        templateUrl: './table.component.html',
                        styleUrls: ['./table.component.css']
                    }]
            }], function () { return []; }, { wrapperClass: [{
                    type: i0.Input
                }], items: [{
                    type: i0.Input
                }], itemCount: [{
                    type: i0.Input
                }], columns: [{
                    type: i0.ContentChildren,
                    args: [DataTableColumnDirective]
                }], rows: [{
                    type: i0.ViewChildren,
                    args: [DataTableRowComponent]
                }], paginator: [{
                    type: i0.ViewChild,
                    args: [DataTablePaginationComponent, { static: false }]
                }], expandTemplate: [{
                    type: i0.ContentChild,
                    args: ['dataTableExpand', { static: true }]
                }], title: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], header: [{
                    type: i0.Input
                }], pagination: [{
                    type: i0.Input
                }], indexColumn: [{
                    type: i0.Input
                }], indexColumnHeader: [{
                    type: i0.Input
                }], rowColors: [{
                    type: i0.Input
                }], rowTooltip: [{
                    type: i0.Input
                }], selectColumn: [{
                    type: i0.Input
                }], multiSelect: [{
                    type: i0.Input
                }], substituteRows: [{
                    type: i0.Input
                }], expandableRows: [{
                    type: i0.Input
                }], labels: [{
                    type: i0.Input
                }], selectOnRowClick: [{
                    type: i0.Input
                }], autoReload: [{
                    type: i0.Input
                }], showReloading: [{
                    type: i0.Input
                }], noDataMessage: [{
                    type: i0.Input
                }], pageLimits: [{
                    type: i0.Input
                }], primaryColumn: [{
                    type: i0.Input
                }], reload: [{
                    type: i0.Output
                }], rowClick: [{
                    type: i0.Output
                }], rowDoubleClick: [{
                    type: i0.Output
                }], headerClick: [{
                    type: i0.Output
                }], cellClick: [{
                    type: i0.Output
                }], selectedRowsChange: [{
                    type: i0.Output
                }], visibleColumnsChange: [{
                    type: i0.Output
                }], sortBy: [{
                    type: i0.Input
                }], sortAsc: [{
                    type: i0.Input
                }], offset: [{
                    type: i0.Input
                }], limit: [{
                    type: i0.Input
                }], page: [{
                    type: i0.Input
                }] });
    })();

    function DataTableHeaderComponent_p_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "p", 10);
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("textContent", ctx_r0.dataTable.title);
        }
    }
    function DataTableHeaderComponent_div_12_li_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li", 15);
            i0__namespace.ɵɵelementStart(1, "label", 16);
            i0__namespace.ɵɵelementStart(2, "input", 17);
            i0__namespace.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_2_Template_input_ngModelChange_2_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(2); return ctx_r6.dataTable.expandColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_2_Template_input_change_2_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r8 = i0__namespace.ɵɵnextContext(2); return ctx_r8.onChange($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(3, "span", 18);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngModel", ctx_r2.dataTable.expandColumnVisible);
            i0__namespace.ɵɵattribute("aria-controls", ctx_r2.dataTable.id);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("textContent", ctx_r2.dataTable.labels.expandColumn);
        }
    }
    function DataTableHeaderComponent_div_12_li_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li", 15);
            i0__namespace.ɵɵelementStart(1, "label", 16);
            i0__namespace.ɵɵelementStart(2, "input", 17);
            i0__namespace.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_3_Template_input_ngModelChange_2_listener($event) { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r9 = i0__namespace.ɵɵnextContext(2); return ctx_r9.dataTable.indexColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_3_Template_input_change_2_listener($event) { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r11 = i0__namespace.ɵɵnextContext(2); return ctx_r11.onChange($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(3, "span", 18);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngModel", ctx_r3.dataTable.indexColumnVisible);
            i0__namespace.ɵɵattribute("aria-controls", ctx_r3.dataTable.id);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("textContent", ctx_r3.dataTable.labels.indexColumn);
        }
    }
    function DataTableHeaderComponent_div_12_li_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li", 15);
            i0__namespace.ɵɵelementStart(1, "label", 16);
            i0__namespace.ɵɵelementStart(2, "input", 17);
            i0__namespace.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_4_Template_input_ngModelChange_2_listener($event) { i0__namespace.ɵɵrestoreView(_r13_1); var ctx_r12 = i0__namespace.ɵɵnextContext(2); return ctx_r12.dataTable.selectColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_4_Template_input_change_2_listener($event) { i0__namespace.ɵɵrestoreView(_r13_1); var ctx_r14 = i0__namespace.ɵɵnextContext(2); return ctx_r14.onChange($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(3, "span", 18);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngModel", ctx_r4.dataTable.selectColumnVisible);
            i0__namespace.ɵɵattribute("aria-controls", ctx_r4.dataTable.id);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("textContent", ctx_r4.dataTable.labels.selectColumn);
        }
    }
    function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li", 15);
            i0__namespace.ɵɵelementStart(1, "label", 16);
            i0__namespace.ɵɵelementStart(2, "input", 17);
            i0__namespace.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_ngModelChange_2_listener($event) { i0__namespace.ɵɵrestoreView(_r20_1); var item_r15 = i0__namespace.ɵɵnextContext().$implicit; return item_r15.visible = $event; })("change", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_change_2_listener($event) { i0__namespace.ɵɵrestoreView(_r20_1); var ctx_r21 = i0__namespace.ɵɵnextContext(3); return ctx_r21.onChange($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(3, "span", 18);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r15 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r17 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngModel", item_r15.visible);
            i0__namespace.ɵɵattribute("aria-controls", ctx_r17.dataTable.id);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("textContent", item_r15.header);
        }
    }
    function DataTableHeaderComponent_div_12_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, DataTableHeaderComponent_div_12_ng_template_5_li_0_Template, 4, 3, "li", 13);
        }
        if (rf & 2) {
            var item_r15 = ctx.$implicit;
            var ctx_r5 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r5.dataTable.primaryColumn !== item_r15.property);
        }
    }
    function DataTableHeaderComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 11);
            i0__namespace.ɵɵelementStart(1, "ul", 12);
            i0__namespace.ɵɵtemplate(2, DataTableHeaderComponent_div_12_li_2_Template, 4, 3, "li", 13);
            i0__namespace.ɵɵtemplate(3, DataTableHeaderComponent_div_12_li_3_Template, 4, 3, "li", 13);
            i0__namespace.ɵɵtemplate(4, DataTableHeaderComponent_div_12_li_4_Template, 4, 3, "li", 13);
            i0__namespace.ɵɵtemplate(5, DataTableHeaderComponent_div_12_ng_template_5_Template, 1, 1, "ng-template", 14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.dataTable.expandableRows);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.dataTable.indexColumn);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.dataTable.selectColumn);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r1.dataTable.columns);
        }
    }
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
        return DataTableHeaderComponent;
    }());
    DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(i0__namespace.ɵɵdirectiveInject(i0.forwardRef(function () { return DataTableComponent; })), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    DataTableHeaderComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DataTableHeaderComponent, selectors: [["data-table-header"]], hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("click", function DataTableHeaderComponent_click_HostBindingHandler($event) { return ctx.onClickHandler($event); }, false, i0__namespace.ɵɵresolveDocument)("keyup", function DataTableHeaderComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUpHandler($event); }, false, i0__namespace.ɵɵresolveDocument);
            }
        }, decls: 13, vars: 8, consts: [[1, "data-table-header"], ["class", "h4 title", 3, "textContent", 4, "ngIf"], [1, "button-panel"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "refresh-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "column-selector-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-list"], [1, "column-selector-wrapper"], ["class", "column-selector-box panel panel-default", 4, "ngIf"], [1, "h4", "title", 3, "textContent"], [1, "column-selector-box", "panel", "panel-default"], [1, "list-group", "list-group-flush"], ["class", "list-group-item column-selector-column checkbox", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "list-group-item", "column-selector-column", "checkbox"], [1, "d-flex", "align-items-center"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [3, "textContent"]], template: function DataTableHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, DataTableHeaderComponent_p_1_Template, 1, 1, "p", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵelementStart(3, "button", 3);
                i0__namespace.ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_3_listener() { return ctx.dataTable.reloadItems(); });
                i0__namespace.ɵɵelement(4, "i", 4);
                i0__namespace.ɵɵelementStart(5, "span", 5);
                i0__namespace.ɵɵtext(6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "button", 6);
                i0__namespace.ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_7_listener() { return ctx.columnSelectorOpen = !ctx.columnSelectorOpen; });
                i0__namespace.ɵɵelement(8, "i", 7);
                i0__namespace.ɵɵelementStart(9, "span", 5);
                i0__namespace.ɵɵtext(10);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "div", 8);
                i0__namespace.ɵɵtemplate(12, DataTableHeaderComponent_div_12_Template, 6, 4, "div", 9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.dataTable.showTitle);
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵtextInterpolate(ctx.dataTable.labels.headerReload.replace("{title}", ctx.dataTable.title));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("active", ctx.columnSelectorOpen);
                i0__namespace.ɵɵattribute("aria-haspopup", true)("aria-expanded", ctx.columnSelectorOpen);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate(ctx.dataTable.labels.headerColumnSelector.replace("{title}", ctx.dataTable.title));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.columnSelectorOpen);
            }
        }, directives: [i1__namespace.NgIf, i1__namespace.NgForOf, i1__namespace$1.CheckboxControlValueAccessor, i1__namespace$1.NgControlStatus, i1__namespace$1.NgModel], styles: [".data-table-header[_ngcontent-%COMP%]{min-height:25px;margin-bottom:10px}.title[_ngcontent-%COMP%]{display:inline-block;margin:5px 0 0 5px}.button-panel[_ngcontent-%COMP%]{float:right}.button-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important}.column-selector-wrapper[_ngcontent-%COMP%]{position:relative}.column-selector-box[_ngcontent-%COMP%]{box-shadow:0 0 10px #d3d3d3;background:white;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]{padding:.5rem .25rem}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:4px;font-style:italic}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DataTableHeaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'data-table-header',
                        templateUrl: './header.component.html',
                        styleUrls: ['./header.component.css']
                    }]
            }], function () {
            return [{ type: DataTableComponent, decorators: [{
                            type: i0.Inject,
                            args: [i0.forwardRef(function () { return DataTableComponent; })]
                        }] }, { type: i0__namespace.ElementRef }];
        }, { onClickHandler: [{
                    type: i0.HostListener,
                    args: ['document:click', ['$event']]
                }], onKeyUpHandler: [{
                    type: i0.HostListener,
                    args: ['document:keyup', ['$event']]
                }] });
    })();

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
        return NgxTableModule;
    }());
    NgxTableModule.ɵfac = function NgxTableModule_Factory(t) { return new (t || NgxTableModule)(); };
    NgxTableModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: NgxTableModule });
    NgxTableModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule,
                i1$1.FormsModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxTableModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DataTableComponent, DataTableColumnDirective,
                            DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
                            PixelConverter, HideDirective, MinPipe
                        ],
                        imports: [
                            i1.CommonModule,
                            i1$1.FormsModule
                        ],
                        exports: [DataTableComponent, DataTableColumnDirective]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NgxTableModule, { declarations: [DataTableComponent, DataTableColumnDirective,
                DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
                PixelConverter, HideDirective, MinPipe], imports: [i1.CommonModule,
                i1$1.FormsModule], exports: [DataTableComponent, DataTableColumnDirective] });
    })();
    i0__namespace.ɵɵsetComponentScope(DataTableComponent, [i1__namespace.NgIf, DataTableHeaderComponent,
        HideDirective, i1__namespace$1.CheckboxControlValueAccessor, i1__namespace$1.NgControlStatus, i1__namespace$1.NgModel, i1__namespace.NgForOf, i1__namespace.NgClass, i1__namespace.NgTemplateOutlet, DataTableRowComponent, DataTablePaginationComponent], [PixelConverter]);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DataTable = DataTableComponent;
    exports.DataTableColumn = DataTableColumnDirective;
    exports.DataTableHeader = DataTableHeaderComponent;
    exports.DataTablePagination = DataTablePaginationComponent;
    exports.DataTableResource = DataTableResource;
    exports.DataTableRow = DataTableRowComponent;
    exports.NgxTableModule = NgxTableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=popetech-ngx-table.umd.js.map
