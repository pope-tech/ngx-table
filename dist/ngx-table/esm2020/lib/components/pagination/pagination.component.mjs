import { Component, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "../table/table.component";
const _c0 = ["pageInput"];
function DataTablePaginationComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", l_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(l_r2);
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
}
DataTablePaginationComponent.ɵfac = function DataTablePaginationComponent_Factory(t) { return new (t || DataTablePaginationComponent)(i0.ɵɵdirectiveInject(forwardRef(() => DataTableComponent))); };
DataTablePaginationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTablePaginationComponent, selectors: [["data-table-pagination"]], viewQuery: function DataTablePaginationComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageInput = _t.first);
    } }, inputs: { limits: "limits" }, decls: 37, vars: 29, consts: [[1, "row"], [1, "pagination-range", "col"], [3, "textContent"], [1, "pagination-limit", "col-md-3"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text", 3, "textContent"], [1, "form-control", 3, "id", "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pagination-pages", "offset-md-3", "col-md-6"], [1, "pagination-page"], [1, "btn", "btn-default", "pagination-firstpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "sr-only"], [1, "btn", "btn-default", "pagination-prevpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "input-group-prepend", "d-sm-block", "d-none"], [1, "input-group-text"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "id", "max", "disabled", "ngModel", "title", "blur", "keyup.enter", "keyup.esc"], ["pageInput", ""], [1, "input-group-append"], [1, "btn", "btn-default", "pagination-nextpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "btn", "btn-default", "pagination-lastpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [3, "value"]], template: function DataTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(3, "div", 0)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        i0.ɵɵelement(7, "label", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "select", 7);
        i0.ɵɵlistener("ngModelChange", function DataTablePaginationComponent_Template_select_ngModelChange_8_listener($event) { return ctx.limit = $event; });
        i0.ɵɵtemplate(9, DataTablePaginationComponent_option_9_Template, 2, 2, "option", 8);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(10, "div", 9)(11, "div", 10)(12, "div", 4)(13, "button", 11);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_13_listener() { return ctx.pageFirst(); });
        i0.ɵɵelement(14, "i", 12);
        i0.ɵɵelementStart(15, "span", 13);
        i0.ɵɵtext(16, "first page");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "button", 14);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_17_listener() { return ctx.pageBack(); });
        i0.ɵɵelement(18, "i", 15);
        i0.ɵɵelementStart(19, "span", 13);
        i0.ɵɵtext(20, "previous page");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(21, "div", 16)(22, "label", 17);
        i0.ɵɵtext(23);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(24, "input", 18, 19);
        i0.ɵɵlistener("blur", function DataTablePaginationComponent_Template_input_blur_24_listener($event) { return ctx.validate($event); })("keyup.enter", function DataTablePaginationComponent_Template_input_keyup_enter_24_listener($event) { return ctx.validate($event); })("keyup.esc", function DataTablePaginationComponent_Template_input_keyup_esc_24_listener() { i0.ɵɵrestoreView(_r3); const _r1 = i0.ɵɵreference(25); return _r1.value = ctx.page; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 20)(27, "span", 17);
        i0.ɵɵtext(28);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(29, "button", 21);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_29_listener() { return ctx.pageForward(); });
        i0.ɵɵelement(30, "i", 22);
        i0.ɵɵelementStart(31, "span", 13);
        i0.ɵɵtext(32, "next page");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(33, "button", 23);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_33_listener() { return ctx.pageLast(); });
        i0.ɵɵelement(34, "i", 24);
        i0.ɵɵelementStart(35, "span", 13);
        i0.ɵɵtext(36, "last page");
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("textContent", ctx.dataTable.labels.paginationText.replace("{from}", ctx.Math.ceil(ctx.dataTable.itemCount / ctx.dataTable.limit) !== 0 ? ctx.dataTable.offset + 1 + "" : "0").replace("{to}", ctx.Math.min(ctx.dataTable.offset + ctx.dataTable.limit, ctx.dataTable.itemCount) + "").replace("{total}", ctx.dataTable.itemCount + ""));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("textContent", ctx.dataTable.labels.paginationLimit);
        i0.ɵɵattribute("for", ctx.id + "-page-limit");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.id + "-page-limit")("ngModel", ctx.limit)("disabled", ctx.dataTable.itemCount === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.limits);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.firstPage);
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.prevPage);
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
        i0.ɵɵadvance(5);
        i0.ɵɵattribute("for", ctx.id + "-page-input");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.dataTable.labels.pageNumberLabel, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("max", ctx.maxPage);
        i0.ɵɵproperty("id", ctx.id + "-page-input")("disabled", ctx.dataTable.itemCount === 0)("ngModel", ctx.page)("title", ctx.dataTable.labels.pageNumber + " " + ctx.dataTable.labels.pageNumberNofM.replace("{N}", "" + ctx.page).replace("{M}", "" + ctx.maxPage));
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate2(" ", ctx.dataTable.labels.paginationTotalPages, "\u00A0", ctx.dataTable.lastPage, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.nextPage);
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.lastPage);
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
    } }, directives: [i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgForOf, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.MinValidator, i1.MaxValidator, i1.NumberValueAccessor, i1.DefaultValueAccessor], styles: [".pagination-controllers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{text-align:right}.pagination-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTablePaginationComponent, [{
        type: Component,
        args: [{ selector: 'data-table-pagination', template: "<div class=\"row\">\n  <div class=\"pagination-range col\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"pagination-limit col-md-3\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n      </div>\n      <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\" [disabled]=\"dataTable.itemCount === 0\">\n        <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"pagination-pages offset-md-3 col-md-6\">\n    <div class=\"pagination-page\">\n      <div class=\"input-group\">\n        <button [disabled]=\"dataTable.offset <= 0\"\n                (click)=\"pageFirst()\"\n                class=\"btn btn-default pagination-firstpage\"\n                [title]=\"dataTable.labels.firstPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">first page</span>\n        </button>\n        <button [disabled]=\"dataTable.offset <= 0\"\n                (click)=\"pageBack()\"\n                class=\"btn btn-default pagination-prevpage\"\n                [title]=\"dataTable.labels.prevPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">previous page</span>\n        </button>\n\n        <div class=\"input-group-prepend d-sm-block d-none\">\n          <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n            {{ dataTable.labels.pageNumberLabel }}\n          </label>\n        </div>\n        <input #pageInput type=\"number\"\n               [id]=\"id + '-page-input'\"\n               class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n               [disabled]=\"dataTable.itemCount === 0\"\n               [ngModel]=\"page\"\n               (blur)=\"validate($event)\"\n               (keyup.enter)=\"validate($event)\"\n               (keyup.esc)=\"pageInput.value = page\"\n               [title]=\"dataTable.labels.pageNumber + ' ' +\n                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)\"\n               [attr.aria-controls]=\"dataTable.id\"/>\n        <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n        </div>\n\n        <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                (click)=\"pageForward()\"\n                class=\"btn btn-default pagination-nextpage\"\n                [title]=\"dataTable.labels.nextPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">next page</span>\n        </button>\n        <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                (click)=\"pageLast()\"\n                class=\"btn btn-default pagination-lastpage\"\n                [title]=\"dataTable.labels.lastPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">last page</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".pagination-controllers select{text-align:right}.pagination-box button{outline:none!important}\n"] }]
    }], function () { return [{ type: i3.DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }]; }, { pageInput: [{
            type: ViewChild,
            args: ['pageInput', { static: true }]
        }], limits: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztJQ09yRCxrQ0FBNkM7SUFBQSxZQUFPO0lBQUEsaUJBQVM7OztJQUE1Qiw0QkFBVztJQUFDLGVBQU87SUFBUCwwQkFBTzs7QURMNUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBT2YsTUFBTSxPQUFPLDRCQUE0QjtJQVV2QyxZQUFpRSxTQUE2QjtRQUE3QixjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQVI5RixPQUFFLEdBQUcsY0FBYyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBUzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9FLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxD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d0Usd0NBQUE7UUFJeEUsaURBQW1DO1FBSW5DLGVBQXdFO1FBQXhFLGdHQUF3RSx3Q0FBQTtRQUl4RSxpREFBbUM7O3VGRHhEdEMsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0UsdUJBQXVCOztzQkFjcEIsTUFBTTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7d0JBTmQsU0FBUztrQkFBbEQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBSS9CLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50fSBmcm9tICcuLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IHtcblxuICBpZCA9IGBwYWdpbmF0aW9uLSR7bmV4dElkKyt9YDtcblxuICBAVmlld0NoaWxkKCdwYWdlSW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwYWdlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgTWF0aDogYW55O1xuXG4gIEBJbnB1dCgpIGxpbWl0czogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCkge1xuICAgIHRoaXMuTWF0aCA9IE1hdGg7XG4gIH1cblxuICBwYWdlQmFjaygpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgLT0gTWF0aC5taW4odGhpcy5kYXRhVGFibGUubGltaXQsIHRoaXMuZGF0YVRhYmxlLm9mZnNldCk7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLm9mZnNldCA8PSAwKSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuICBwYWdlRm9yd2FyZCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKz0gdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKyB0aGlzLmRhdGFUYWJsZS5saW1pdCkgPj0gdGhpcy5kYXRhVGFibGUuaXRlbUNvdW50KSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcGFnZUZpcnN0KCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCA9IDA7XG4gICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcGFnZUxhc3QoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ID0gKHRoaXMubWF4UGFnZSAtIDEpICogdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKyB0aGlzLmRhdGFUYWJsZS5saW1pdCkgPj0gdGhpcy5kYXRhVGFibGUuaXRlbUNvdW50KSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heFBhZ2UoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQgLyB0aGlzLmRhdGFUYWJsZS5saW1pdCk7XG4gIH1cblxuICBnZXQgbGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICB9XG5cbiAgc2V0IGxpbWl0KHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhVGFibGUubGltaXQgPSArdmFsdWU7XG4gICAgLy8gcmV0dXJuaW5nIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgdGhpcy5wYWdlID0gMTtcbiAgfVxuXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5wYWdlID0gK3ZhbHVlO1xuICB9XG5cbiAgdmFsaWRhdGUoZXZlbnQpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZSA9IChldmVudC50YXJnZXQudmFsdWUgPiB0aGlzLm1heFBhZ2UpID8gdGhpcy5tYXhQYWdlIDogKG5ld1ZhbHVlIDwgMSApID8gMSA6IG5ld1ZhbHVlO1xuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5wYWdlO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInJvd1wiPlxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1yYW5nZSBjb2xcIj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uVGV4dFxuICAgICAgICAucmVwbGFjZSgne2Zyb219JywgdGhpcy5NYXRoLmNlaWwoZGF0YVRhYmxlLml0ZW1Db3VudCAvIGRhdGFUYWJsZS5saW1pdCkgIT09IDAgPyBkYXRhVGFibGUub2Zmc2V0ICsgMSArICcnIDogJzAnKVxuICAgICAgICAucmVwbGFjZSgne3RvfScsIHRoaXMuTWF0aC5taW4oZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCwgZGF0YVRhYmxlLml0ZW1Db3VudCkgKyAnJylcbiAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCBkYXRhVGFibGUuaXRlbUNvdW50ICsgJycpXCI+PC9zcGFuPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1saW1pdCBjb2wtbWQtM1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1saW1pdCdcIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uTGltaXRcIj48L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VsZWN0IFtpZF09XCJpZCArICctcGFnZS1saW1pdCdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwibGltaXRcIiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLml0ZW1Db3VudCA9PT0gMFwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsIG9mIGxpbWl0c1wiIFt2YWx1ZV09XCJsXCI+e3sgbCB9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlcyBvZmZzZXQtbWQtMyBjb2wtbWQtNlwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXBhZ2VcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkYXRhVGFibGUub2Zmc2V0IDw9IDBcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJwYWdlRmlyc3QoKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1maXJzdHBhZ2VcIlxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmZpcnN0UGFnZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPmZpcnN0IHBhZ2U8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkYXRhVGFibGUub2Zmc2V0IDw9IDBcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJwYWdlQmFjaygpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLXByZXZwYWdlXCJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5wcmV2UGFnZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+cHJldmlvdXMgcGFnZTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmQgZC1zbS1ibG9jayBkLW5vbmVcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgW2F0dHIuZm9yXT1cImlkICsgJy1wYWdlLWlucHV0J1wiPlxuICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTGFiZWwgfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0ICNwYWdlSW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICBbaWRdPVwiaWQgKyAnLXBhZ2UtaW5wdXQnXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbWluPVwiMVwiIHN0ZXA9XCIxXCIgbWF4PVwie3ttYXhQYWdlfX1cIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgW25nTW9kZWxdPVwicGFnZVwiXG4gICAgICAgICAgICAgICAoYmx1cik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgIChrZXl1cC5lc2MpPVwicGFnZUlucHV0LnZhbHVlID0gcGFnZVwiXG4gICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTm9mTS5yZXBsYWNlKCd7Tn0nLCAnJytwYWdlKS5yZXBsYWNlKCd7TX0nLCAnJyttYXhQYWdlKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICAgICAgICAgIHt7IGRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvblRvdGFsUGFnZXMgfX0mbmJzcDt7eyBkYXRhVGFibGUubGFzdFBhZ2UgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJwYWdlRm9yd2FyZCgpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLW5leHRwYWdlXCJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5uZXh0UGFnZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPm5leHQgcGFnZTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0KSA+PSBkYXRhVGFibGUuaXRlbUNvdW50XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUxhc3QoKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1sYXN0cGFnZVwiXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMubGFzdFBhZ2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+bGFzdCBwYWdlPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19