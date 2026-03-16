import { Component, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../table/table.component";
const _c0 = ["pageInput"];
function DataTablePaginationComponent_div_5_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", l_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(l_r4);
} }
function DataTablePaginationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 17);
    i0.ɵɵelement(2, "label", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function DataTablePaginationComponent_div_5_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.limit, $event) || (ctx_r2.limit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(4, DataTablePaginationComponent_div_5_option_4_Template, 2, 2, "option", 20);
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
function DataTablePaginationComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function DataTablePaginationComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pageFirst()); });
    i0.ɵɵelement(1, "i", 23);
    i0.ɵɵelementStart(2, "span", 24);
    i0.ɵɵtext(3, "first page");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r2.dataTable.labels.firstPage);
    i0.ɵɵattribute("aria-controls", ctx_r2.dataTable.id);
} }
function DataTablePaginationComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function DataTablePaginationComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pageBack()); });
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵelementStart(2, "span", 24);
    i0.ɵɵtext(3, "previous page");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r2.dataTable.labels.prevPage);
    i0.ɵɵattribute("aria-controls", ctx_r2.dataTable.id);
} }
function DataTablePaginationComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function DataTablePaginationComponent_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pageForward()); });
    i0.ɵɵelement(1, "i", 28);
    i0.ɵɵelementStart(2, "span", 24);
    i0.ɵɵtext(3, "next page");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r2.dataTable.labels.nextPage);
    i0.ɵɵattribute("aria-controls", ctx_r2.dataTable.id);
} }
function DataTablePaginationComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function DataTablePaginationComponent_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pageLast()); });
    i0.ɵɵelement(1, "i", 30);
    i0.ɵɵelementStart(2, "span", 24);
    i0.ɵɵtext(3, "last page");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r2.dataTable.labels.lastPage);
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
        } }, inputs: { limits: "limits" }, decls: 21, vars: 16, consts: [["pageInput", ""], [1, "row"], [1, "pagination-range", "col"], [3, "textContent"], [1, "pagination-limit", "col-md-3"], ["class", "input-group", 4, "ngIf"], [1, "pagination-pages", "offset-md-3", "col-md-6", 3, "hidden"], [1, "pagination-page"], [1, "input-group"], ["class", "btn btn-default pagination-firstpage", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-default pagination-prevpage", 3, "title", "click", 4, "ngIf"], [1, "input-group-prepend", "d-sm-block", "d-none"], [1, "input-group-text"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "blur", "keyup.enter", "keyup.esc", "id", "max", "ngModel", "title"], [1, "input-group-append"], ["class", "btn btn-default pagination-nextpage", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-default pagination-lastpage", 3, "title", "click", 4, "ngIf"], [1, "input-group-prepend"], [1, "input-group-text", 3, "textContent"], [1, "form-control", 3, "ngModelChange", "id", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "btn", "btn-default", "pagination-firstpage", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "sr-only"], [1, "btn", "btn-default", "pagination-prevpage", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "btn", "btn-default", "pagination-nextpage", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "btn", "btn-default", "pagination-lastpage", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"]], template: function DataTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
            i0.ɵɵelement(2, "span", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 1)(4, "div", 4);
            i0.ɵɵtemplate(5, DataTablePaginationComponent_div_5_Template, 5, 5, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6)(7, "div", 7)(8, "div", 8);
            i0.ɵɵtemplate(9, DataTablePaginationComponent_button_9_Template, 4, 2, "button", 9)(10, DataTablePaginationComponent_button_10_Template, 4, 2, "button", 10);
            i0.ɵɵelementStart(11, "div", 11)(12, "label", 12);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "input", 13, 0);
            i0.ɵɵlistener("blur", function DataTablePaginationComponent_Template_input_blur_14_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.validate($event)); })("keyup.enter", function DataTablePaginationComponent_Template_input_keyup_enter_14_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.validate($event)); })("keyup.esc", function DataTablePaginationComponent_Template_input_keyup_esc_14_listener() { i0.ɵɵrestoreView(_r1); const pageInput_r7 = i0.ɵɵreference(15); return i0.ɵɵresetView(pageInput_r7.value = ctx.page); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 14)(17, "span", 12);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(19, DataTablePaginationComponent_button_19_Template, 4, 2, "button", 15)(20, DataTablePaginationComponent_button_20_Template, 4, 2, "button", 16);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
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
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.dataTable.labels.pageNumberLabel, " ");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("max", ctx.maxPage);
            i0.ɵɵproperty("id", ctx.id + "-page-input")("ngModel", ctx.page)("title", ctx.dataTable.labels.pageNumber + " " + ctx.dataTable.labels.pageNumberNofM.replace("{N}", "" + ctx.page).replace("{M}", "" + ctx.maxPage));
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
        args: [{ selector: 'data-table-pagination', template: "<div class=\"row\">\n  <div class=\"pagination-range col\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"pagination-limit col-md-3\">\n    <div class=\"input-group\" *ngIf=\"dataTable.itemCount > 0\">\n      <div class=\"input-group-prepend\">\n        <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n      </div>\n      <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\">\n        <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"pagination-pages offset-md-3 col-md-6\" [hidden]=\"dataTable.itemCount === 0\">\n    <div class=\"pagination-page\">\n      <div class=\"input-group\">\n        <button *ngIf=\"dataTable.offset > 0\"\n                (click)=\"pageFirst()\"\n                class=\"btn btn-default pagination-firstpage\"\n                [title]=\"dataTable.labels.firstPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">first page</span>\n        </button>\n        <button *ngIf=\"dataTable.offset > 0\"\n                (click)=\"pageBack()\"\n                class=\"btn btn-default pagination-prevpage\"\n                [title]=\"dataTable.labels.prevPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">previous page</span>\n        </button>\n\n        <div class=\"input-group-prepend d-sm-block d-none\">\n          <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n            {{ dataTable.labels.pageNumberLabel }}\n          </label>\n        </div>\n        <input #pageInput type=\"number\"\n               [id]=\"id + '-page-input'\"\n               class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n               [ngModel]=\"page\"\n               (blur)=\"validate($event)\"\n               (keyup.enter)=\"validate($event)\"\n               (keyup.esc)=\"pageInput.value = page\"\n               [title]=\"dataTable.labels.pageNumber + ' ' +\n                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)\"\n               [attr.aria-controls]=\"dataTable.id\"/>\n        <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n        </div>\n\n        <button *ngIf=\"(dataTable.offset + dataTable.limit) < dataTable.itemCount\"\n                (click)=\"pageForward()\"\n                class=\"btn btn-default pagination-nextpage\"\n                [title]=\"dataTable.labels.nextPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">next page</span>\n        </button>\n        <button *ngIf=\"(dataTable.offset + dataTable.limit) < dataTable.itemCount\"\n                (click)=\"pageLast()\"\n                class=\"btn btn-default pagination-lastpage\"\n                [title]=\"dataTable.labels.lastPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">last page</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".pagination-controllers select{text-align:right}.pagination-box button{outline:none!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztJQ09yRCxrQ0FBNkM7SUFBQSxZQUFPO0lBQUEsaUJBQVM7OztJQUE1Qiw0QkFBVztJQUFDLGNBQU87SUFBUCwwQkFBTzs7OztJQUp0RCxBQURGLDhCQUF5RCxjQUN0QjtJQUMvQiw0QkFBeUg7SUFDM0gsaUJBQU07SUFDTixrQ0FBMkU7SUFBcEIsdVNBQW1CO0lBQ3hFLDBGQUE2QztJQUVqRCxBQURFLGlCQUFTLEVBQ0w7OztJQUw4RCxlQUFnRDtJQUFoRCxxRUFBZ0Q7O0lBRTFHLGNBQXlCO0lBQXpCLDhDQUF5QjtJQUFzQiw0Q0FBbUI7SUFDbEQsY0FBUztJQUFULHVDQUFTOzs7O0lBTy9CLGtDQUk0QztJQUhwQywyTEFBUyxrQkFBVyxLQUFDO0lBSTNCLHdCQUEwRDtJQUMxRCxnQ0FBc0I7SUFBQSwwQkFBVTtJQUNsQyxBQURrQyxpQkFBTyxFQUNoQzs7O0lBSkQseURBQW9DOzs7OztJQUs1QyxrQ0FJNEM7SUFIcEMsNExBQVMsaUJBQVUsS0FBQztJQUkxQix3QkFBbUQ7SUFDbkQsZ0NBQXNCO0lBQUEsNkJBQWE7SUFDckMsQUFEcUMsaUJBQU8sRUFDbkM7OztJQUpELHdEQUFtQzs7Ozs7SUEyQjNDLGtDQUk0QztJQUhwQyw0TEFBUyxvQkFBYSxLQUFDO0lBSTdCLHdCQUFvRDtJQUNwRCxnQ0FBc0I7SUFBQSx5QkFBUztJQUNqQyxBQURpQyxpQkFBTyxFQUMvQjs7O0lBSkQsd0RBQW1DOzs7OztJQUszQyxrQ0FJNEM7SUFIcEMsNExBQVMsaUJBQVUsS0FBQztJQUkxQix3QkFBMkQ7SUFDM0QsZ0NBQXNCO0lBQUEseUJBQVM7SUFDakMsQUFEaUMsaUJBQU8sRUFDL0I7OztJQUpELHdEQUFtQzs7O0FEN0RuRCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFPZixNQUFNLE9BQU8sNEJBQTRCO0lBVXZDLFlBQWlFLFNBQTZCO1FBQTdCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBUjlGLE9BQUUsR0FBRyxjQUFjLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFTNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0lBQ0wsQ0FBQztJQUNDLFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztRQUM5QixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDaEcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQzs2RkFuRVUsNEJBQTRCLHVCQVVuQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0VBVjdDLDRCQUE0Qjs7Ozs7OztZQ2hCdkMsQUFERiw4QkFBaUIsYUFDbUI7WUFDaEMsMEJBRzBEO1lBRTlELEFBREUsaUJBQU0sRUFDRjtZQUVKLEFBREYsOEJBQWlCLGFBQ3dCO1lBQ3JDLDZFQUF5RDtZQVEzRCxpQkFBTTtZQUdGLEFBREYsQUFERiw4QkFBd0YsYUFDekQsYUFDRjtZQVN2QixBQVJBLG1GQUk0Qyx5RUFRQTtZQU0xQyxBQURGLGdDQUFtRCxpQkFDZTtZQUM5RCxhQUNGO1lBQ0YsQUFERSxpQkFBUSxFQUNKO1lBQ04scUNBUzRDO1lBSHJDLEFBREEsQUFEQSxtSkFBUSxvQkFBZ0IsS0FBQyxvSkFDVixvQkFBZ0IsS0FBQyxxTkFDSTtZQU4zQyxpQkFTNEM7WUFFeEMsQUFESixnQ0FBZ0MsZ0JBQ0c7WUFDN0IsYUFDRjtZQUNKLEFBREksaUJBQU8sRUFDTDtZQVVOLEFBUkEsc0ZBSTRDLHlFQVFBO1lBT3BELEFBREUsQUFERSxBQURFLGlCQUFNLEVBQ0YsRUFDRixFQUNGOztZQTdFSSxlQUc0QztZQUg1QyxzVkFHNEM7WUFLeEIsZUFBNkI7WUFBN0Isa0RBQTZCO1lBU04sY0FBb0M7WUFBcEMsc0RBQW9DO1lBR3hFLGVBQTBCO1lBQTFCLCtDQUEwQjtZQVExQixjQUEwQjtZQUExQiwrQ0FBMEI7WUFVRCxlQUErQjs7WUFDN0QsY0FDRjtZQURFLHFFQUNGO1lBSTJDLGNBQWlCO1lBQWpCLDRDQUFpQjtZQUt2RCxBQUpBLEFBRkEsMkNBQXlCLHFCQUVULHFKQUt3RTs7WUFJekYsZUFDRjtZQURFLDRHQUNGO1lBR0ssY0FBZ0U7WUFBaEUsMkZBQWdFO1lBUWhFLGNBQWdFO1lBQWhFLDJGQUFnRTs7O2lGRG5EcEUsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0UsdUJBQXVCOztzQkFjcEIsTUFBTTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBTmQsU0FBUztrQkFBbEQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBSS9CLE1BQU07a0JBQWQsS0FBSzs7a0ZBUkssNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnR9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQge1xuXG4gIGlkID0gYHBhZ2luYXRpb24tJHtuZXh0SWQrK31gO1xuXG4gIEBWaWV3Q2hpbGQoJ3BhZ2VJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIHBhZ2VJbnB1dDogRWxlbWVudFJlZjtcblxuICBNYXRoOiBhbnk7XG5cbiAgQElucHV0KCkgbGltaXRzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50KSB7XG4gICAgdGhpcy5NYXRoID0gTWF0aDtcbiAgfVxuXG4gIHBhZ2VCYWNrKCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCAtPSBNYXRoLm1pbih0aGlzLmRhdGFUYWJsZS5saW1pdCwgdGhpcy5kYXRhVGFibGUub2Zmc2V0KTtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUub2Zmc2V0IDw9IDApIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG59XG4gIHBhZ2VGb3J3YXJkKCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCArPSB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgICBpZiAoKHRoaXMuZGF0YVRhYmxlLm9mZnNldCArIHRoaXMuZGF0YVRhYmxlLmxpbWl0KSA+PSB0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwYWdlRmlyc3QoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ID0gMDtcbiAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwYWdlTGFzdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPSAodGhpcy5tYXhQYWdlIC0gMSkgKiB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgICBpZiAoKHRoaXMuZGF0YVRhYmxlLm9mZnNldCArIHRoaXMuZGF0YVRhYmxlLmxpbWl0KSA+PSB0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4UGFnZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCAvIHRoaXMuZGF0YVRhYmxlLmxpbWl0KTtcbiAgfVxuXG4gIGdldCBsaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gIH1cblxuICBzZXQgbGltaXQodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5saW1pdCA9ICt2YWx1ZTtcbiAgICAvLyByZXR1cm5pbmcgYmFjayB0byB0aGUgZmlyc3QgcGFnZS5cbiAgICB0aGlzLnBhZ2UgPSAxO1xuICB9XG5cbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnBhZ2U7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlLnBhZ2UgPSArdmFsdWU7XG4gIH1cblxuICB2YWxpZGF0ZShldmVudCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gK2V2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucGFnZSkge1xuICAgICAgdGhpcy5wYWdlID0gKGV2ZW50LnRhcmdldC52YWx1ZSA+IHRoaXMubWF4UGFnZSkgPyB0aGlzLm1heFBhZ2UgOiAobmV3VmFsdWUgPCAxICkgPyAxIDogbmV3VmFsdWU7XG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnBhZ2U7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXJhbmdlIGNvbFwiPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCB0aGlzLk1hdGguY2VpbChkYXRhVGFibGUuaXRlbUNvdW50IC8gZGF0YVRhYmxlLmxpbWl0KSAhPT0gMCA/IGRhdGFUYWJsZS5vZmZzZXQgKyAxICsgJycgOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCd7dG99JywgdGhpcy5NYXRoLm1pbihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0LCBkYXRhVGFibGUuaXRlbUNvdW50KSArICcnKVxuICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsIGRhdGFUYWJsZS5pdGVtQ291bnQgKyAnJylcIj48L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbWl0IGNvbC1tZC0zXCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCIgKm5nSWY9XCJkYXRhVGFibGUuaXRlbUNvdW50ID4gMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1saW1pdCdcIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uTGltaXRcIj48L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VsZWN0IFtpZF09XCJpZCArICctcGFnZS1saW1pdCdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwibGltaXRcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbCBvZiBsaW1pdHNcIiBbdmFsdWVdPVwibFwiPnt7IGwgfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcGFnZXMgb2Zmc2V0LW1kLTMgY29sLW1kLTZcIiBbaGlkZGVuXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImRhdGFUYWJsZS5vZmZzZXQgPiAwXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZpcnN0KClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tZmlyc3RwYWdlXCJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5maXJzdFBhZ2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5maXJzdCBwYWdlPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImRhdGFUYWJsZS5vZmZzZXQgPiAwXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUJhY2soKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1wcmV2cGFnZVwiXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucHJldlBhZ2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnByZXZpb3VzIHBhZ2U8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kIGQtc20tYmxvY2sgZC1ub25lXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1pbnB1dCdcIj5cbiAgICAgICAgICAgIHt7IGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlckxhYmVsIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCAjcGFnZUlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgW2lkXT1cImlkICsgJy1wYWdlLWlucHV0J1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1pbj1cIjFcIiBzdGVwPVwiMVwiIG1heD1cInt7bWF4UGFnZX19XCJcbiAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cInBhZ2VcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAoa2V5dXAuZXNjKT1cInBhZ2VJbnB1dC52YWx1ZSA9IHBhZ2VcIlxuICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlciArICcgJyArXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlck5vZk0ucmVwbGFjZSgne059JywgJycrcGFnZSkucmVwbGFjZSgne019JywgJycrbWF4UGFnZSlcIlxuICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25Ub3RhbFBhZ2VzIH19Jm5ic3A7e3sgZGF0YVRhYmxlLmxhc3RQYWdlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIoZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCkgPCBkYXRhVGFibGUuaXRlbUNvdW50XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZvcndhcmQoKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1uZXh0cGFnZVwiXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMubmV4dFBhZ2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5uZXh0IHBhZ2U8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpIDwgZGF0YVRhYmxlLml0ZW1Db3VudFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VMYXN0KClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tbGFzdHBhZ2VcIlxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmxhc3RQYWdlXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPmxhc3QgcGFnZTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==