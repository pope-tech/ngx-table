import { Component, ElementRef, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "../table/table.component";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
var _c0 = ["pageInput"];
function DataTablePaginationComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var l_r176 = ctx.$implicit;
    i0.ɵɵproperty("value", l_r176);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(l_r176);
} }
var nextId = 0;
var DataTablePaginationComponent = /** @class */ (function () {
    function DataTablePaginationComponent(dataTable) {
        this.dataTable = dataTable;
        this.id = "pagination-" + nextId++;
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
    DataTablePaginationComponent.ɵfac = function DataTablePaginationComponent_Factory(t) { return new (t || DataTablePaginationComponent)(i0.ɵɵdirectiveInject(forwardRef(function () { return DataTableComponent; }))); };
    DataTablePaginationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataTablePaginationComponent, selectors: [["data-table-pagination"]], viewQuery: function DataTablePaginationComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageInput = _t.first);
        } }, inputs: { limits: "limits" }, decls: 29, vars: 29, consts: [[1, "row"], [1, "pagination-range", "col"], [3, "textContent"], [1, "pagination-limit", "col-md-3"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text", 3, "textContent"], [1, "form-control", 3, "id", "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pagination-pages", "offset-md-3", "col-md-6"], [1, "pagination-page"], [1, "btn", "btn-default", "pagination-firstpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "btn", "btn-default", "pagination-prevpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "input-group-prepend", "d-sm-block", "d-none"], [1, "input-group-text"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "id", "max", "disabled", "ngModel", "title", "blur", "keyup.enter", "keyup.esc"], ["pageInput", ""], [1, "input-group-append"], [1, "btn", "btn-default", "pagination-nextpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "btn", "btn-default", "pagination-lastpage", 3, "disabled", "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [3, "value"]], template: function DataTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
            var _r177 = i0.ɵɵgetCurrentView();
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
            i0.ɵɵlistener("blur", function DataTablePaginationComponent_Template_input_blur_20_listener($event) { return ctx.validate($event); })("keyup.enter", function DataTablePaginationComponent_Template_input_keyup_enter_20_listener($event) { return ctx.validate($event); })("keyup.esc", function DataTablePaginationComponent_Template_input_keyup_esc_20_listener($event) { i0.ɵɵrestoreView(_r177); var _r175 = i0.ɵɵreference(21); return _r175.value = ctx.page; });
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
    return DataTablePaginationComponent;
}());
export { DataTablePaginationComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTablePaginationComponent, [{
        type: Component,
        args: [{
                selector: 'data-table-pagination',
                templateUrl: './pagination.component.html',
                styleUrls: ['./pagination.component.css']
            }]
    }], function () { return [{ type: i1.DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(function () { return DataTableComponent; })]
            }] }]; }, { pageInput: [{
            type: ViewChild,
            args: ['pageInput', { static: true }]
        }], limits: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7SUNPckQsa0NBQTZDO0lBQUEsWUFBTztJQUFBLGlCQUFTOzs7SUFBNUIsOEJBQVc7SUFBQyxlQUFPO0lBQVAsNEJBQU87O0FETDVELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUVmO0lBZUUsc0NBQWlFLFNBQTZCO1FBQTdCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBUjlGLE9BQUUsR0FBRyxnQkFBYyxNQUFNLEVBQUksQ0FBQztRQVM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFDQyxrREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxN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QXhFLGdHQUF3RSx3Q0FBQTtZQUl4RSxpREFBbUM7O3VDRHRFbkQ7Q0FxRkMsQUF6RUQsSUF5RUM7U0FwRVksNEJBQTRCO2tEQUE1Qiw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDOztzQkFXYyxNQUFNO3VCQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7O2tCQU52RCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUl2QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnR9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQge1xuXG4gIGlkID0gYHBhZ2luYXRpb24tJHtuZXh0SWQrK31gO1xuXG4gIEBWaWV3Q2hpbGQoJ3BhZ2VJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIHBhZ2VJbnB1dDogRWxlbWVudFJlZjtcblxuICBNYXRoOiBhbnk7XG5cbiAgQElucHV0KCkgbGltaXRzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50KSB7XG4gICAgdGhpcy5NYXRoID0gTWF0aDtcbiAgfVxuXG4gIHBhZ2VCYWNrKCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCAtPSBNYXRoLm1pbih0aGlzLmRhdGFUYWJsZS5saW1pdCwgdGhpcy5kYXRhVGFibGUub2Zmc2V0KTtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUub2Zmc2V0IDw9IDApIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG59XG4gIHBhZ2VGb3J3YXJkKCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCArPSB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgICBpZiAoKHRoaXMuZGF0YVRhYmxlLm9mZnNldCArIHRoaXMuZGF0YVRhYmxlLmxpbWl0KSA+PSB0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwYWdlRmlyc3QoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ID0gMDtcbiAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwYWdlTGFzdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPSAodGhpcy5tYXhQYWdlIC0gMSkgKiB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgICBpZiAoKHRoaXMuZGF0YVRhYmxlLm9mZnNldCArIHRoaXMuZGF0YVRhYmxlLmxpbWl0KSA+PSB0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4UGFnZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCAvIHRoaXMuZGF0YVRhYmxlLmxpbWl0KTtcbiAgfVxuXG4gIGdldCBsaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gIH1cblxuICBzZXQgbGltaXQodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5saW1pdCA9ICt2YWx1ZTtcbiAgICAvLyByZXR1cm5pbmcgYmFjayB0byB0aGUgZmlyc3QgcGFnZS5cbiAgICB0aGlzLnBhZ2UgPSAxO1xuICB9XG5cbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnBhZ2U7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlLnBhZ2UgPSArdmFsdWU7XG4gIH1cblxuICB2YWxpZGF0ZShldmVudCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gK2V2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucGFnZSkge1xuICAgICAgdGhpcy5wYWdlID0gKGV2ZW50LnRhcmdldC52YWx1ZSA+IHRoaXMubWF4UGFnZSkgPyB0aGlzLm1heFBhZ2UgOiAobmV3VmFsdWUgPCAxICkgPyAxIDogbmV3VmFsdWU7XG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnBhZ2U7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXJhbmdlIGNvbFwiPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCB0aGlzLk1hdGguY2VpbChkYXRhVGFibGUuaXRlbUNvdW50IC8gZGF0YVRhYmxlLmxpbWl0KSAhPT0gMCA/IGRhdGFUYWJsZS5vZmZzZXQgKyAxICsgJycgOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCd7dG99JywgdGhpcy5NYXRoLm1pbihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0LCBkYXRhVGFibGUuaXRlbUNvdW50KSArICcnKVxuICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsIGRhdGFUYWJsZS5pdGVtQ291bnQgKyAnJylcIj48L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbWl0IGNvbC1tZC0zXCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImlkICsgJy1wYWdlLWxpbWl0J1wiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25MaW1pdFwiPjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWxlY3QgW2lkXT1cImlkICsgJy1wYWdlLWxpbWl0J1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJsaW1pdFwiIFtkaXNhYmxlZF09XCJkYXRhVGFibGUuaXRlbUNvdW50ID09PSAwXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGwgb2YgbGltaXRzXCIgW3ZhbHVlXT1cImxcIj57eyBsIH19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXBhZ2VzIG9mZnNldC1tZC0zIGNvbC1tZC02XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcGFnZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5vZmZzZXQgPD0gMFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VGaXJzdCgpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWZpcnN0cGFnZVwiXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuZmlyc3RQYWdlXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkYXRhVGFibGUub2Zmc2V0IDw9IDBcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJwYWdlQmFjaygpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLXByZXZwYWdlXCJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5wcmV2UGFnZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kIGQtc20tYmxvY2sgZC1ub25lXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1pbnB1dCdcIj5cbiAgICAgICAgICAgIHt7IGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlckxhYmVsIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCAjcGFnZUlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgW2lkXT1cImlkICsgJy1wYWdlLWlucHV0J1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1pbj1cIjFcIiBzdGVwPVwiMVwiIG1heD1cInt7bWF4UGFnZX19XCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRhVGFibGUuaXRlbUNvdW50ID09PSAwXCJcbiAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cInBhZ2VcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAoa2V5dXAuZXNjKT1cInBhZ2VJbnB1dC52YWx1ZSA9IHBhZ2VcIlxuICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlciArICcgJyArXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlck5vZk0ucmVwbGFjZSgne059JywgJycrcGFnZSkucmVwbGFjZSgne019JywgJycrbWF4UGFnZSlcIlxuICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25Ub3RhbFBhZ2VzIH19Jm5ic3A7e3sgZGF0YVRhYmxlLmxhc3RQYWdlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0KSA+PSBkYXRhVGFibGUuaXRlbUNvdW50XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZvcndhcmQoKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1uZXh0cGFnZVwiXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMubmV4dFBhZ2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0KSA+PSBkYXRhVGFibGUuaXRlbUNvdW50XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUxhc3QoKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1sYXN0cGFnZVwiXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMubGFzdFBhZ2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+Il19