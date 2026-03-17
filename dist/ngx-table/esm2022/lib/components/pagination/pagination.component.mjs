import { Component, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../table/table.component";
const _c0 = ["pageInput"];
function DataTablePaginationComponent_div_6_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", l_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(l_r4);
} }
function DataTablePaginationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 19);
    i0.ɵɵelement(2, "label", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function DataTablePaginationComponent_div_6_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.limit, $event) || (ctx_r2.limit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(4, DataTablePaginationComponent_div_6_option_4_Template, 2, 2, "option", 22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("textContent", ctx_r2.dataTable.labels.paginationLimit);
    i0.ɵɵattribute("for", ctx_r2.id + "-page-limit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r2.id + "-page-limit");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.limit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.limits);
} }
function DataTablePaginationComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function DataTablePaginationComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pageFirst()); });
    i0.ɵɵelement(1, "i", 25);
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtext(3, "first page");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-controls", ctx_r2.dataTable.id);
} }
function DataTablePaginationComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function DataTablePaginationComponent_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pageBack()); });
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtext(3, "previous page");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-controls", ctx_r2.dataTable.id);
} }
function DataTablePaginationComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function DataTablePaginationComponent_button_22_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pageForward()); });
    i0.ɵɵelement(1, "i", 29);
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtext(3, "next page");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-controls", ctx_r2.dataTable.id);
} }
function DataTablePaginationComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function DataTablePaginationComponent_button_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pageLast()); });
    i0.ɵɵelement(1, "i", 31);
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtext(3, "last page");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-controls", ctx_r2.dataTable.id);
} }
let nextId = 0;
export class DataTablePaginationComponent {
    constructor(dataTable) {
        this.dataTable = dataTable;
        this.id = `pagination-${nextId++}`;
        this.Math = Math;
    }
    pageBack() {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
        if (this.dataTable.offset <= 0) {
            this.pageInput.nativeElement.focus();
        }
    }
    pageForward() {
        this.dataTable.offset += this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    }
    pageFirst() {
        this.dataTable.offset = 0;
        this.pageInput.nativeElement.focus();
    }
    pageLast() {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    }
    get maxPage() {
        return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
    }
    get limit() {
        return this.dataTable.limit;
    }
    set limit(value) {
        this.dataTable.limit = +value;
        // returning back to the first page.
        this.page = 1;
    }
    get page() {
        return this.dataTable.page;
    }
    set page(value) {
        this.dataTable.page = +value;
    }
    validate(event) {
        const newValue = +event.target.value;
        if (newValue !== this.page) {
            this.page = (event.target.value > this.maxPage) ? this.maxPage : (newValue < 1) ? 1 : newValue;
            event.target.value = this.page;
        }
    }
    static { this.ɵfac = function DataTablePaginationComponent_Factory(t) { return new (t || DataTablePaginationComponent)(i0.ɵɵdirectiveInject(forwardRef(() => DataTableComponent))); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTablePaginationComponent, selectors: [["data-table-pagination"]], viewQuery: function DataTablePaginationComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageInput = _t.first);
        } }, inputs: { limits: "limits" }, decls: 24, vars: 15, consts: [["pageInput", ""], ["aria-label", "Pagination"], [1, "row"], [1, "pagination-range", "col"], [3, "textContent"], [1, "pagination-limit", "col-md-3"], ["class", "input-group", 4, "ngIf"], [1, "pagination-pages", "offset-md-3", "col-md-6", 3, "hidden"], [1, "pagination-page"], [1, "input-group"], ["class", "btn btn-default pagination-firstpage", 3, "click", 4, "ngIf"], ["class", "btn btn-default pagination-prevpage", 3, "click", 4, "ngIf"], [1, "input-group-prepend", "d-sm-block", "d-none"], [1, "input-group-text"], [1, "sr-only"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "blur", "keyup.enter", "keyup.esc", "id", "max", "ngModel"], [1, "input-group-append"], ["class", "btn btn-default pagination-nextpage", 3, "click", 4, "ngIf"], ["class", "btn btn-default pagination-lastpage", 3, "click", 4, "ngIf"], [1, "input-group-prepend"], [1, "input-group-text", 3, "textContent"], [1, "form-control", 3, "ngModelChange", "id", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "btn", "btn-default", "pagination-firstpage", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "btn", "btn-default", "pagination-prevpage", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "btn", "btn-default", "pagination-nextpage", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "btn", "btn-default", "pagination-lastpage", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"]], template: function DataTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nav", 1)(1, "div", 2)(2, "div", 3);
            i0.ɵɵelement(3, "span", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 2)(5, "div", 5);
            i0.ɵɵtemplate(6, DataTablePaginationComponent_div_6_Template, 5, 5, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 7)(8, "div", 8)(9, "div", 9);
            i0.ɵɵtemplate(10, DataTablePaginationComponent_button_10_Template, 4, 1, "button", 10)(11, DataTablePaginationComponent_button_11_Template, 4, 1, "button", 11);
            i0.ɵɵelementStart(12, "div", 12)(13, "label", 13)(14, "span", 14);
            i0.ɵɵtext(15, "Current");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "input", 15, 0);
            i0.ɵɵlistener("blur", function DataTablePaginationComponent_Template_input_blur_17_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.validate($event)); })("keyup.enter", function DataTablePaginationComponent_Template_input_keyup_enter_17_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.validate($event)); })("keyup.esc", function DataTablePaginationComponent_Template_input_keyup_esc_17_listener() { i0.ɵɵrestoreView(_r1); const pageInput_r7 = i0.ɵɵreference(18); return i0.ɵɵresetView(pageInput_r7.value = ctx.page); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 16)(20, "span", 13);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(22, DataTablePaginationComponent_button_22_Template, 4, 1, "button", 17)(23, DataTablePaginationComponent_button_23_Template, 4, 1, "button", 18);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("textContent", ctx.dataTable.labels.paginationText.replace("{from}", ctx.Math.ceil(ctx.dataTable.itemCount / ctx.dataTable.limit) !== 0 ? ctx.dataTable.offset + 1 + "" : "0").replace("{to}", ctx.Math.min(ctx.dataTable.offset + ctx.dataTable.limit, ctx.dataTable.itemCount) + "").replace("{total}", ctx.dataTable.itemCount + ""));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.dataTable.itemCount > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("hidden", ctx.dataTable.itemCount === 0);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.dataTable.offset > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataTable.offset > 0);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("for", ctx.id + "-page-input");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.dataTable.labels.pageNumberLabel, " ");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("max", ctx.maxPage);
            i0.ɵɵproperty("id", ctx.id + "-page-input")("ngModel", ctx.page);
            i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate2(" ", ctx.dataTable.labels.paginationTotalPages, "\u00A0", ctx.dataTable.lastPage, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataTable.offset + ctx.dataTable.limit < ctx.dataTable.itemCount);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataTable.offset + ctx.dataTable.limit < ctx.dataTable.itemCount);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.MinValidator, i2.MaxValidator, i2.NgModel], styles: [".pagination-controllers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{text-align:right}.pagination-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTablePaginationComponent, [{
        type: Component,
        args: [{ selector: 'data-table-pagination', template: "<nav aria-label=\"Pagination\">\n  <div class=\"row\">\n    <div class=\"pagination-range col\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"pagination-limit col-md-3\">\n      <div class=\"input-group\" *ngIf=\"dataTable.itemCount > 0\">\n        <div class=\"input-group-prepend\">\n          <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n        </div>\n        <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\">\n          <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"pagination-pages offset-md-3 col-md-6\" [hidden]=\"dataTable.itemCount === 0\">\n      <div class=\"pagination-page\">\n        <div class=\"input-group\">\n          <button *ngIf=\"dataTable.offset > 0\"\n                  (click)=\"pageFirst()\"\n                  class=\"btn btn-default pagination-firstpage\"\n                  [attr.aria-controls]=\"dataTable.id\">\n            <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">first page</span>\n          </button>\n          <button *ngIf=\"dataTable.offset > 0\"\n                  (click)=\"pageBack()\"\n                  class=\"btn btn-default pagination-prevpage\"\n                  [attr.aria-controls]=\"dataTable.id\">\n            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">previous page</span>\n          </button>\n\n          <div class=\"input-group-prepend d-sm-block d-none\">\n            <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n              <span class=\"sr-only\">Current</span>\n              {{ dataTable.labels.pageNumberLabel }}\n            </label>\n          </div>\n          <input #pageInput type=\"number\"\n                 [id]=\"id + '-page-input'\"\n                 class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n                 [ngModel]=\"page\"\n                 (blur)=\"validate($event)\"\n                 (keyup.enter)=\"validate($event)\"\n                 (keyup.esc)=\"pageInput.value = page\"\n                 [attr.aria-controls]=\"dataTable.id\"/>\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n          </div>\n\n          <button *ngIf=\"(dataTable.offset + dataTable.limit) < dataTable.itemCount\"\n                  (click)=\"pageForward()\"\n                  class=\"btn btn-default pagination-nextpage\"\n                  [attr.aria-controls]=\"dataTable.id\">\n            <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">next page</span>\n          </button>\n          <button *ngIf=\"(dataTable.offset + dataTable.limit) < dataTable.itemCount\"\n                  (click)=\"pageLast()\"\n                  class=\"btn btn-default pagination-lastpage\"\n                  [attr.aria-controls]=\"dataTable.id\">\n            <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">last page</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n", styles: [".pagination-controllers select{text-align:right}.pagination-box button{outline:none!important}\n"] }]
    }], () => [{ type: i3.DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }], { pageInput: [{
            type: ViewChild,
            args: ['pageInput', { static: true }]
        }], limits: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataTablePaginationComponent, { className: "DataTablePaginationComponent", filePath: "lib/components/pagination/pagination.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztJQ1FuRCxrQ0FBNkM7SUFBQSxZQUFPO0lBQUEsaUJBQVM7OztJQUE1Qiw0QkFBVztJQUFDLGNBQU87SUFBUCwwQkFBTzs7OztJQUp0RCxBQURGLDhCQUF5RCxjQUN0QjtJQUMvQiw0QkFBeUg7SUFDM0gsaUJBQU07SUFDTixrQ0FBMkU7SUFBcEIsdVNBQW1CO0lBQ3hFLDBGQUE2QztJQUVqRCxBQURFLGlCQUFTLEVBQ0w7OztJQUw4RCxlQUFnRDtJQUFoRCxxRUFBZ0Q7O0lBRTFHLGNBQXlCO0lBQXpCLDhDQUF5QjtJQUFzQiw0Q0FBbUI7SUFDbEQsY0FBUztJQUFULHVDQUFTOzs7O0lBTy9CLGtDQUc0QztJQUZwQyw0TEFBUyxrQkFBVyxLQUFDO0lBRzNCLHdCQUEwRDtJQUMxRCxnQ0FBc0I7SUFBQSwwQkFBVTtJQUNsQyxBQURrQyxpQkFBTyxFQUNoQzs7Ozs7OztJQUNULGtDQUc0QztJQUZwQyw0TEFBUyxpQkFBVSxLQUFDO0lBRzFCLHdCQUFtRDtJQUNuRCxnQ0FBc0I7SUFBQSw2QkFBYTtJQUNyQyxBQURxQyxpQkFBTyxFQUNuQzs7Ozs7OztJQXNCVCxr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RCxBQURFLEFBREUsQUFERSxBQURFLGlCQUFNLEVBQ0YsRUFDRixFQUNGLEVBQ0Y7O1lBekVJLGVBRzRDO1lBSDVDLHNWQUc0QztZQUt0QixlQUE2QjtZQUE3QixrREFBNkI7WUFTTixjQUFvQztZQUFwQyxzREFBb0M7WUFHeEUsZUFBMEI7WUFBMUIsK0NBQTBCO1lBTzFCLGNBQTBCO1lBQTFCLCtDQUEwQjtZQVNELGVBQStCOztZQUU3RCxlQUNGO1lBREUscUVBQ0Y7WUFJMkMsY0FBaUI7WUFBakIsNENBQWlCO1lBQ3ZELEFBRkEsMkNBQXlCLHFCQUVUOztZQU9uQixlQUNGO1lBREUsNEdBQ0Y7WUFHTyxjQUFnRTtZQUFoRSwyRkFBZ0U7WUFPaEUsY0FBZ0U7WUFBaEUsMkZBQWdFOzs7aUZEaER0RSw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDRSx1QkFBdUI7O3NCQWNwQixNQUFNO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFOZCxTQUFTO2tCQUFsRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFJL0IsTUFBTTtrQkFBZCxLQUFLOztrRkFSSyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB7XG5cbiAgaWQgPSBgcGFnaW5hdGlvbi0ke25leHRJZCsrfWA7XG5cbiAgQFZpZXdDaGlsZCgncGFnZUlucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgcGFnZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gIE1hdGg6IGFueTtcblxuICBASW5wdXQoKSBsaW1pdHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpKSBwdWJsaWMgZGF0YVRhYmxlOiBEYXRhVGFibGVDb21wb25lbnQpIHtcbiAgICB0aGlzLk1hdGggPSBNYXRoO1xuICB9XG5cbiAgcGFnZUJhY2soKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0IC09IE1hdGgubWluKHRoaXMuZGF0YVRhYmxlLmxpbWl0LCB0aGlzLmRhdGFUYWJsZS5vZmZzZXQpO1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPD0gMCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cbiAgcGFnZUZvcndhcmQoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ICs9IHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICAgIGlmICgodGhpcy5kYXRhVGFibGUub2Zmc2V0ICsgdGhpcy5kYXRhVGFibGUubGltaXQpID49IHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHBhZ2VGaXJzdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPSAwO1xuICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHBhZ2VMYXN0KCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCA9ICh0aGlzLm1heFBhZ2UgLSAxKSAqIHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICAgIGlmICgodGhpcy5kYXRhVGFibGUub2Zmc2V0ICsgdGhpcy5kYXRhVGFibGUubGltaXQpID49IHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhQYWdlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5kYXRhVGFibGUuaXRlbUNvdW50IC8gdGhpcy5kYXRhVGFibGUubGltaXQpO1xuICB9XG5cbiAgZ2V0IGxpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgfVxuXG4gIHNldCBsaW1pdCh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlLmxpbWl0ID0gK3ZhbHVlO1xuICAgIC8vIHJldHVybmluZyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgIHRoaXMucGFnZSA9IDE7XG4gIH1cblxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUucGFnZTtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhVGFibGUucGFnZSA9ICt2YWx1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGV2ZW50KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2UgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID4gdGhpcy5tYXhQYWdlKSA/IHRoaXMubWF4UGFnZSA6IChuZXdWYWx1ZSA8IDEgKSA/IDEgOiBuZXdWYWx1ZTtcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHRoaXMucGFnZTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuYXYgYXJpYS1sYWJlbD1cIlBhZ2luYXRpb25cIj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXJhbmdlIGNvbFwiPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCB0aGlzLk1hdGguY2VpbChkYXRhVGFibGUuaXRlbUNvdW50IC8gZGF0YVRhYmxlLmxpbWl0KSAhPT0gMCA/IGRhdGFUYWJsZS5vZmZzZXQgKyAxICsgJycgOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCd7dG99JywgdGhpcy5NYXRoLm1pbihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0LCBkYXRhVGFibGUuaXRlbUNvdW50KSArICcnKVxuICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsIGRhdGFUYWJsZS5pdGVtQ291bnQgKyAnJylcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tbGltaXQgY29sLW1kLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiICpuZ0lmPVwiZGF0YVRhYmxlLml0ZW1Db3VudCA+IDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImlkICsgJy1wYWdlLWxpbWl0J1wiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25MaW1pdFwiPjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2VsZWN0IFtpZF09XCJpZCArICctcGFnZS1saW1pdCdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwibGltaXRcIj5cbiAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsIG9mIGxpbWl0c1wiIFt2YWx1ZV09XCJsXCI+e3sgbCB9fTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXBhZ2VzIG9mZnNldC1tZC0zIGNvbC1tZC02XCIgW2hpZGRlbl09XCJkYXRhVGFibGUuaXRlbUNvdW50ID09PSAwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJkYXRhVGFibGUub2Zmc2V0ID4gMFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZpcnN0KClcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1maXJzdHBhZ2VcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5maXJzdCBwYWdlPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJkYXRhVGFibGUub2Zmc2V0ID4gMFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUJhY2soKVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLXByZXZwYWdlXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5wcmV2aW91cyBwYWdlPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmQgZC1zbS1ibG9jayBkLW5vbmVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiBbYXR0ci5mb3JdPVwiaWQgKyAnLXBhZ2UtaW5wdXQnXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkN1cnJlbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIHt7IGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlckxhYmVsIH19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dCAjcGFnZUlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBbaWRdPVwiaWQgKyAnLXBhZ2UtaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBtaW49XCIxXCIgc3RlcD1cIjFcIiBtYXg9XCJ7e21heFBhZ2V9fVwiXG4gICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cInBhZ2VcIlxuICAgICAgICAgICAgICAgICAoYmx1cik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInZhbGlkYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAoa2V5dXAuZXNjKT1cInBhZ2VJbnB1dC52YWx1ZSA9IHBhZ2VcIlxuICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cbiAgICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uVG90YWxQYWdlcyB9fSZuYnNwO3t7IGRhdGFUYWJsZS5sYXN0UGFnZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0KSA8IGRhdGFUYWJsZS5pdGVtQ291bnRcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VGb3J3YXJkKClcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1uZXh0cGFnZVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPm5leHQgcGFnZTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpIDwgZGF0YVRhYmxlLml0ZW1Db3VudFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUxhc3QoKVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWxhc3RwYWdlXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPmxhc3QgcGFnZTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25hdj5cbiJdfQ==