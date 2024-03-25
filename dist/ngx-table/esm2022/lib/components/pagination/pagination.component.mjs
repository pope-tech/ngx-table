import { Component, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../table/table.component";
const _c0 = ["pageInput"];
function DataTablePaginationComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", l_r2);
    i0.ɵɵadvance();
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
    static { this.ɵfac = function DataTablePaginationComponent_Factory(t) { return new (t || DataTablePaginationComponent)(i0.ɵɵdirectiveInject(forwardRef(() => DataTableComponent))); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTablePaginationComponent, selectors: [["data-table-pagination"]], viewQuery: function DataTablePaginationComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageInput = _t.first);
        } }, inputs: { limits: "limits" }, decls: 37, vars: 29, consts: [["pageInput", ""], [1, "row"], [1, "pagination-range", "col"], [3, "textContent"], [1, "pagination-limit", "col-md-3"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text", 3, "textContent"], [1, "form-control", 3, "ngModelChange", "id", "ngModel", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pagination-pages", "offset-md-3", "col-md-6"], [1, "pagination-page"], [1, "btn", "btn-default", "pagination-firstpage", 3, "click", "disabled", "title"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "sr-only"], [1, "btn", "btn-default", "pagination-prevpage", 3, "click", "disabled", "title"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "input-group-prepend", "d-sm-block", "d-none"], [1, "input-group-text"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "blur", "keyup.enter", "keyup.esc", "id", "max", "disabled", "ngModel", "title"], [1, "input-group-append"], [1, "btn", "btn-default", "pagination-nextpage", 3, "click", "disabled", "title"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "btn", "btn-default", "pagination-lastpage", 3, "click", "disabled", "title"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [3, "value"]], template: function DataTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
            i0.ɵɵelement(2, "span", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 1)(4, "div", 4)(5, "div", 5)(6, "div", 6);
            i0.ɵɵelement(7, "label", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "select", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function DataTablePaginationComponent_Template_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.limit, $event) || (ctx.limit = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(9, DataTablePaginationComponent_option_9_Template, 2, 2, "option", 9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 10)(11, "div", 11)(12, "div", 5)(13, "button", 12);
            i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.pageFirst()); });
            i0.ɵɵelement(14, "i", 13);
            i0.ɵɵelementStart(15, "span", 14);
            i0.ɵɵtext(16, "first page");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "button", 15);
            i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.pageBack()); });
            i0.ɵɵelement(18, "i", 16);
            i0.ɵɵelementStart(19, "span", 14);
            i0.ɵɵtext(20, "previous page");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 17)(22, "label", 18);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "input", 19, 0);
            i0.ɵɵlistener("blur", function DataTablePaginationComponent_Template_input_blur_24_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.validate($event)); })("keyup.enter", function DataTablePaginationComponent_Template_input_keyup_enter_24_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.validate($event)); })("keyup.esc", function DataTablePaginationComponent_Template_input_keyup_esc_24_listener() { i0.ɵɵrestoreView(_r1); const pageInput_r3 = i0.ɵɵreference(25); return i0.ɵɵresetView(pageInput_r3.value = ctx.page); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 20)(27, "span", 18);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "button", 21);
            i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.pageForward()); });
            i0.ɵɵelement(30, "i", 22);
            i0.ɵɵelementStart(31, "span", 14);
            i0.ɵɵtext(32, "next page");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "button", 23);
            i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.pageLast()); });
            i0.ɵɵelement(34, "i", 24);
            i0.ɵɵelementStart(35, "span", 14);
            i0.ɵɵtext(36, "last page");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("textContent", ctx.dataTable.labels.paginationText.replace("{from}", ctx.Math.ceil(ctx.dataTable.itemCount / ctx.dataTable.limit) !== 0 ? ctx.dataTable.offset + 1 + "" : "0").replace("{to}", ctx.Math.min(ctx.dataTable.offset + ctx.dataTable.limit, ctx.dataTable.itemCount) + "").replace("{total}", ctx.dataTable.itemCount + ""));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("textContent", ctx.dataTable.labels.paginationLimit);
            i0.ɵɵattribute("for", ctx.id + "-page-limit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("id", ctx.id + "-page-limit");
            i0.ɵɵtwoWayProperty("ngModel", ctx.limit);
            i0.ɵɵproperty("disabled", ctx.dataTable.itemCount === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.limits);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.firstPage);
            i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.prevPage);
            i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
            i0.ɵɵadvance(5);
            i0.ɵɵattribute("for", ctx.id + "-page-input");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.dataTable.labels.pageNumberLabel, " ");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("max", ctx.maxPage);
            i0.ɵɵproperty("id", ctx.id + "-page-input")("disabled", ctx.dataTable.itemCount === 0)("ngModel", ctx.page)("title", ctx.dataTable.labels.pageNumber + " " + ctx.dataTable.labels.pageNumberNofM.replace("{N}", "" + ctx.page).replace("{M}", "" + ctx.maxPage));
            i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate2(" ", ctx.dataTable.labels.paginationTotalPages, "\u00A0", ctx.dataTable.lastPage, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.nextPage);
            i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.lastPage);
            i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
        } }, dependencies: [i1.NgForOf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.MinValidator, i2.MaxValidator, i2.NgModel], styles: [".pagination-controllers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{text-align:right}.pagination-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTablePaginationComponent, [{
        type: Component,
        args: [{ selector: 'data-table-pagination', template: "<div class=\"row\">\n  <div class=\"pagination-range col\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"pagination-limit col-md-3\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n      </div>\n      <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\" [disabled]=\"dataTable.itemCount === 0\">\n        <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"pagination-pages offset-md-3 col-md-6\">\n    <div class=\"pagination-page\">\n      <div class=\"input-group\">\n        <button [disabled]=\"dataTable.offset <= 0\"\n                (click)=\"pageFirst()\"\n                class=\"btn btn-default pagination-firstpage\"\n                [title]=\"dataTable.labels.firstPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">first page</span>\n        </button>\n        <button [disabled]=\"dataTable.offset <= 0\"\n                (click)=\"pageBack()\"\n                class=\"btn btn-default pagination-prevpage\"\n                [title]=\"dataTable.labels.prevPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">previous page</span>\n        </button>\n\n        <div class=\"input-group-prepend d-sm-block d-none\">\n          <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n            {{ dataTable.labels.pageNumberLabel }}\n          </label>\n        </div>\n        <input #pageInput type=\"number\"\n               [id]=\"id + '-page-input'\"\n               class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n               [disabled]=\"dataTable.itemCount === 0\"\n               [ngModel]=\"page\"\n               (blur)=\"validate($event)\"\n               (keyup.enter)=\"validate($event)\"\n               (keyup.esc)=\"pageInput.value = page\"\n               [title]=\"dataTable.labels.pageNumber + ' ' +\n                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)\"\n               [attr.aria-controls]=\"dataTable.id\"/>\n        <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n        </div>\n\n        <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                (click)=\"pageForward()\"\n                class=\"btn btn-default pagination-nextpage\"\n                [title]=\"dataTable.labels.nextPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">next page</span>\n        </button>\n        <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                (click)=\"pageLast()\"\n                class=\"btn btn-default pagination-lastpage\"\n                [title]=\"dataTable.labels.lastPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">last page</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".pagination-controllers select{text-align:right}.pagination-box button{outline:none!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztJQ09yRCxrQ0FBNkM7SUFBQSxZQUFPO0lBQUEsaUJBQVM7OztJQUE1Qiw0QkFBVztJQUFDLGNBQU87SUFBUCwwQkFBTzs7QURMNUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBT2YsTUFBTSxPQUFPLDRCQUE0QjtJQVV2QyxZQUFpRSxTQUE2QjtRQUE3QixjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQVI5RixPQUFFLEdBQUcsY0FBYyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBUzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9FLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxF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Qzs7WUFPVCxlQUErQjs7WUFDN0QsY0FDRjtZQURFLHFFQUNGO1lBSTJDLGNBQWlCO1lBQWpCLDRDQUFpQjtZQU12RCxBQUpBLEFBREEsQUFGQSwyQ0FBeUIsMkNBRWEscUJBQ3RCLHFKQUt3RTs7WUFJekYsZUFDRjtZQURFLDRHQUNGO1lBR0ksY0FBd0U7WUFHeEUsQUFIQSxnR0FBd0Usd0NBR3JDOztZQUtuQyxlQUF3RTtZQUd4RSxBQUhBLGdHQUF3RSx3Q0FHckM7Ozs7aUZEdkR0Qyw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDRSx1QkFBdUI7O3NCQWNwQixNQUFNO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFOZCxTQUFTO2tCQUFsRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFJL0IsTUFBTTtrQkFBZCxLQUFLOztrRkFSSyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB7XG5cbiAgaWQgPSBgcGFnaW5hdGlvbi0ke25leHRJZCsrfWA7XG5cbiAgQFZpZXdDaGlsZCgncGFnZUlucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgcGFnZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gIE1hdGg6IGFueTtcblxuICBASW5wdXQoKSBsaW1pdHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpKSBwdWJsaWMgZGF0YVRhYmxlOiBEYXRhVGFibGVDb21wb25lbnQpIHtcbiAgICB0aGlzLk1hdGggPSBNYXRoO1xuICB9XG5cbiAgcGFnZUJhY2soKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0IC09IE1hdGgubWluKHRoaXMuZGF0YVRhYmxlLmxpbWl0LCB0aGlzLmRhdGFUYWJsZS5vZmZzZXQpO1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPD0gMCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cbiAgcGFnZUZvcndhcmQoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ICs9IHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICAgIGlmICgodGhpcy5kYXRhVGFibGUub2Zmc2V0ICsgdGhpcy5kYXRhVGFibGUubGltaXQpID49IHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHBhZ2VGaXJzdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPSAwO1xuICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHBhZ2VMYXN0KCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCA9ICh0aGlzLm1heFBhZ2UgLSAxKSAqIHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICAgIGlmICgodGhpcy5kYXRhVGFibGUub2Zmc2V0ICsgdGhpcy5kYXRhVGFibGUubGltaXQpID49IHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhQYWdlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5kYXRhVGFibGUuaXRlbUNvdW50IC8gdGhpcy5kYXRhVGFibGUubGltaXQpO1xuICB9XG5cbiAgZ2V0IGxpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgfVxuXG4gIHNldCBsaW1pdCh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlLmxpbWl0ID0gK3ZhbHVlO1xuICAgIC8vIHJldHVybmluZyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgIHRoaXMucGFnZSA9IDE7XG4gIH1cblxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUucGFnZTtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhVGFibGUucGFnZSA9ICt2YWx1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGV2ZW50KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2UgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID4gdGhpcy5tYXhQYWdlKSA/IHRoaXMubWF4UGFnZSA6IChuZXdWYWx1ZSA8IDEgKSA/IDEgOiBuZXdWYWx1ZTtcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHRoaXMucGFnZTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcmFuZ2UgY29sXCI+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvblRleHRcbiAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsIHRoaXMuTWF0aC5jZWlsKGRhdGFUYWJsZS5pdGVtQ291bnQgLyBkYXRhVGFibGUubGltaXQpICE9PSAwID8gZGF0YVRhYmxlLm9mZnNldCArIDEgKyAnJyA6ICcwJylcbiAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCB0aGlzLk1hdGgubWluKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQsIGRhdGFUYWJsZS5pdGVtQ291bnQpICsgJycpXG4gICAgICAgIC5yZXBsYWNlKCd7dG90YWx9JywgZGF0YVRhYmxlLml0ZW1Db3VudCArICcnKVwiPjwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tbGltaXQgY29sLW1kLTNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWQgKyAnLXBhZ2UtbGltaXQnXCIgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvbkxpbWl0XCI+PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlbGVjdCBbaWRdPVwiaWQgKyAnLXBhZ2UtbGltaXQnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cImxpbWl0XCIgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbCBvZiBsaW1pdHNcIiBbdmFsdWVdPVwibFwiPnt7IGwgfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcGFnZXMgb2Zmc2V0LW1kLTMgY29sLW1kLTZcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLm9mZnNldCA8PSAwXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZpcnN0KClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tZmlyc3RwYWdlXCJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5maXJzdFBhZ2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5maXJzdCBwYWdlPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLm9mZnNldCA8PSAwXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUJhY2soKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1wcmV2cGFnZVwiXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucHJldlBhZ2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnByZXZpb3VzIHBhZ2U8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kIGQtc20tYmxvY2sgZC1ub25lXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1pbnB1dCdcIj5cbiAgICAgICAgICAgIHt7IGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlckxhYmVsIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCAjcGFnZUlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgW2lkXT1cImlkICsgJy1wYWdlLWlucHV0J1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1pbj1cIjFcIiBzdGVwPVwiMVwiIG1heD1cInt7bWF4UGFnZX19XCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRhVGFibGUuaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cInBhZ2VcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAoa2V5dXAuZXNjKT1cInBhZ2VJbnB1dC52YWx1ZSA9IHBhZ2VcIlxuICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlciArICcgJyArXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlck5vZk0ucmVwbGFjZSgne059JywgJycrcGFnZSkucmVwbGFjZSgne019JywgJycrbWF4UGFnZSlcIlxuICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25Ub3RhbFBhZ2VzIH19Jm5ic3A7e3sgZGF0YVRhYmxlLmxhc3RQYWdlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0KSA+PSBkYXRhVGFibGUuaXRlbUNvdW50XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZvcndhcmQoKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1uZXh0cGFnZVwiXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMubmV4dFBhZ2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5uZXh0IHBhZ2U8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIoZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCkgPj0gZGF0YVRhYmxlLml0ZW1Db3VudFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VMYXN0KClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tbGFzdHBhZ2VcIlxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmxhc3RQYWdlXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPmxhc3QgcGFnZTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==