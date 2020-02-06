import { Component, ElementRef, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "../table/table.component";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
const _c0 = ["pageInput"];
function DataTablePaginationComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r87 = ctx.$implicit;
    i0.ɵɵproperty("value", l_r87);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(l_r87);
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
DataTablePaginationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataTablePaginationComponent, selectors: [["data-table-pagination"]], viewQuery: function DataTablePaginationComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageInput = _t.first);
    } }, inputs: { limits: "limits" }, decls: 29, vars: 29, consts: [[1, "row"], [1, "pagination-range", "col"], [3, "textContent"], [1, "pagination-limit", "col-md-3"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text", 3, "textContent"], [1, "form-control", 3, "id", "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pagination-pages", "offset-md-3", "col-md-6"], [1, "pagination-page"], [1, "btn", "btn-default", "pagination-firstpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "btn", "btn-default", "pagination-prevpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "input-group-prepend", "d-sm-block", "d-none"], [1, "input-group-text"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "id", "max", "disabled", "ngModel", "title", "blur", "keyup.enter", "keyup.esc"], ["pageInput", ""], [1, "input-group-append"], [1, "btn", "btn-default", "pagination-nextpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "btn", "btn-default", "pagination-lastpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [3, "value"]], template: function DataTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r88 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 0);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelement(7, "label", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "select", 7);
        i0.ɵɵlistener("ngModelChange", function DataTablePaginationComponent_Template_select_ngModelChange_8_listener($event) { return ctx.limit = $event; });
        i0.ɵɵtemplate(9, DataTablePaginationComponent_option_9_Template, 2, 2, "option", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 9);
        i0.ɵɵelementStart(11, "div", 10);
        i0.ɵɵelementStart(12, "div", 4);
        i0.ɵɵelementStart(13, "button", 11);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_13_listener($event) { return ctx.pageFirst(); });
        i0.ɵɵelement(14, "i", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 13);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_15_listener($event) { return ctx.pageBack(); });
        i0.ɵɵelement(16, "i", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 15);
        i0.ɵɵelementStart(18, "label", 16);
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "input", 17, 18);
        i0.ɵɵlistener("blur", function DataTablePaginationComponent_Template_input_blur_20_listener($event) { return ctx.validate($event); })("keyup.enter", function DataTablePaginationComponent_Template_input_keyup_enter_20_listener($event) { return ctx.validate($event); })("keyup.esc", function DataTablePaginationComponent_Template_input_keyup_esc_20_listener($event) { i0.ɵɵrestoreView(_r88); const _r86 = i0.ɵɵreference(21); return _r86.value = ctx.page; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 19);
        i0.ɵɵelementStart(23, "span", 16);
        i0.ɵɵtext(24);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "button", 20);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_25_listener($event) { return ctx.pageForward(); });
        i0.ɵɵelement(26, "i", 21);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "button", 22);
        i0.ɵɵlistener("click", function DataTablePaginationComponent_Template_button_click_27_listener($event) { return ctx.pageLast(); });
        i0.ɵɵelement(28, "i", 23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.dataTable.offset <= 0)("title", ctx.dataTable.labels.prevPage);
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
        i0.ɵɵadvance(3);
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
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.dataTable.offset + ctx.dataTable.limit >= ctx.dataTable.itemCount)("title", ctx.dataTable.labels.lastPage);
        i0.ɵɵattribute("aria-controls", ctx.dataTable.id);
    } }, directives: [i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i2.NumberValueAccessor, i2.DefaultValueAccessor, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], styles: [".pagination-controllers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{text-align:right}.pagination-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:0!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTablePaginationComponent, [{
        type: Component,
        args: [{
                selector: 'data-table-pagination',
                templateUrl: './pagination.component.html',
                styleUrls: ['./pagination.component.css']
            }]
    }], function () { return [{ type: i1.DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }]; }, { pageInput: [{
            type: ViewChild,
            args: ['pageInput', { static: true }]
        }], limits: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7SUNPckQsa0NBQTZDO0lBQUEsWUFBTztJQUFBLGlCQUFTOzs7SUFBNUIsNkJBQVc7SUFBQyxlQUFPO0lBQVAsMkJBQU87O0FETDVELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQU9mLE1BQU0sT0FBTyw0QkFBNEI7SUFVdkMsWUFBaUUsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFSOUYsT0FBRSxHQUFHLGNBQWMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQVM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFDQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNB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Qyw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDOztzQkFXYyxNQUFNO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzs7a0JBTnZELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBSXZDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB7XG5cbiAgaWQgPSBgcGFnaW5hdGlvbi0ke25leHRJZCsrfWA7XG5cbiAgQFZpZXdDaGlsZCgncGFnZUlucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgcGFnZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gIE1hdGg6IGFueTtcblxuICBASW5wdXQoKSBsaW1pdHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpKSBwdWJsaWMgZGF0YVRhYmxlOiBEYXRhVGFibGVDb21wb25lbnQpIHtcbiAgICB0aGlzLk1hdGggPSBNYXRoO1xuICB9XG5cbiAgcGFnZUJhY2soKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0IC09IE1hdGgubWluKHRoaXMuZGF0YVRhYmxlLmxpbWl0LCB0aGlzLmRhdGFUYWJsZS5vZmZzZXQpO1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPD0gMCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cbiAgcGFnZUZvcndhcmQoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ICs9IHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICAgIGlmICgodGhpcy5kYXRhVGFibGUub2Zmc2V0ICsgdGhpcy5kYXRhVGFibGUubGltaXQpID49IHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHBhZ2VGaXJzdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPSAwO1xuICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHBhZ2VMYXN0KCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCA9ICh0aGlzLm1heFBhZ2UgLSAxKSAqIHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICAgIGlmICgodGhpcy5kYXRhVGFibGUub2Zmc2V0ICsgdGhpcy5kYXRhVGFibGUubGltaXQpID49IHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhQYWdlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5kYXRhVGFibGUuaXRlbUNvdW50IC8gdGhpcy5kYXRhVGFibGUubGltaXQpO1xuICB9XG5cbiAgZ2V0IGxpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgfVxuXG4gIHNldCBsaW1pdCh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlLmxpbWl0ID0gK3ZhbHVlO1xuICAgIC8vIHJldHVybmluZyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgIHRoaXMucGFnZSA9IDE7XG4gIH1cblxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUucGFnZTtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhVGFibGUucGFnZSA9ICt2YWx1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGV2ZW50KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2UgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID4gdGhpcy5tYXhQYWdlKSA/IHRoaXMubWF4UGFnZSA6IChuZXdWYWx1ZSA8IDEgKSA/IDEgOiBuZXdWYWx1ZTtcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHRoaXMucGFnZTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcmFuZ2UgY29sXCI+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvblRleHRcbiAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsIHRoaXMuTWF0aC5jZWlsKGRhdGFUYWJsZS5pdGVtQ291bnQgLyBkYXRhVGFibGUubGltaXQpICE9PSAwID8gZGF0YVRhYmxlLm9mZnNldCArIDEgKyAnJyA6ICcwJylcbiAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCB0aGlzLk1hdGgubWluKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQsIGRhdGFUYWJsZS5pdGVtQ291bnQpICsgJycpXG4gICAgICAgIC5yZXBsYWNlKCd7dG90YWx9JywgZGF0YVRhYmxlLml0ZW1Db3VudCArICcnKVwiPjwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tbGltaXQgY29sLW1kLTNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWQgKyAnLXBhZ2UtbGltaXQnXCIgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvbkxpbWl0XCI+PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlbGVjdCBbaWRdPVwiaWQgKyAnLXBhZ2UtbGltaXQnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cImxpbWl0XCIgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbCBvZiBsaW1pdHNcIiBbdmFsdWVdPVwibFwiPnt7IGwgfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcGFnZXMgb2Zmc2V0LW1kLTMgY29sLW1kLTZcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLm9mZnNldCA8PSAwXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZpcnN0KClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tZmlyc3RwYWdlXCJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5maXJzdFBhZ2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5vZmZzZXQgPD0gMFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VCYWNrKClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tcHJldnBhZ2VcIlxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLnByZXZQYWdlXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmQgZC1zbS1ibG9jayBkLW5vbmVcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgW2F0dHIuZm9yXT1cImlkICsgJy1wYWdlLWlucHV0J1wiPlxuICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTGFiZWwgfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0ICNwYWdlSW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICBbaWRdPVwiaWQgKyAnLXBhZ2UtaW5wdXQnXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbWluPVwiMVwiIHN0ZXA9XCIxXCIgbWF4PVwie3ttYXhQYWdlfX1cIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgW25nTW9kZWxdPVwicGFnZVwiXG4gICAgICAgICAgICAgICAoYmx1cik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgIChrZXl1cC5lc2MpPVwicGFnZUlucHV0LnZhbHVlID0gcGFnZVwiXG4gICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTm9mTS5yZXBsYWNlKCd7Tn0nLCAnJytwYWdlKS5yZXBsYWNlKCd7TX0nLCAnJyttYXhQYWdlKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICAgICAgICAgIHt7IGRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvblRvdGFsUGFnZXMgfX0mbmJzcDt7eyBkYXRhVGFibGUubGFzdFBhZ2UgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJwYWdlRm9yd2FyZCgpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLW5leHRwYWdlXCJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5uZXh0UGFnZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJwYWdlTGFzdCgpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWxhc3RwYWdlXCJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5sYXN0UGFnZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=