import { Component, forwardRef, HostListener, Inject } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../table/table.component";
function DataTableHeaderComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 10);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r0.dataTable.title);
} }
function DataTableHeaderComponent_div_12_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15)(1, "label", 16)(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.dataTable.expandColumnVisible = $event); })("change", function DataTableHeaderComponent_div_12_li_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.dataTable.expandColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r2.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", ctx_r2.dataTable.labels.expandColumn);
} }
function DataTableHeaderComponent_div_12_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15)(1, "label", 16)(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.dataTable.indexColumnVisible = $event); })("change", function DataTableHeaderComponent_div_12_li_3_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r3.dataTable.indexColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r3.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", ctx_r3.dataTable.labels.indexColumn);
} }
function DataTableHeaderComponent_div_12_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15)(1, "label", 16)(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_4_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.dataTable.selectColumnVisible = $event); })("change", function DataTableHeaderComponent_div_12_li_4_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r4.dataTable.selectColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r4.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", ctx_r4.dataTable.labels.selectColumn);
} }
function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15)(1, "label", 16)(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r20); const item_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r15.visible = $event); })("change", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r21.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r15.visible);
    i0.ɵɵattribute("aria-controls", ctx_r17.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", item_r15.header);
} }
function DataTableHeaderComponent_div_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataTableHeaderComponent_div_12_ng_template_5_li_0_Template, 4, 3, "li", 13);
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r5.dataTable.primaryColumn !== item_r15.property);
} }
function DataTableHeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "ul", 12);
    i0.ɵɵtemplate(2, DataTableHeaderComponent_div_12_li_2_Template, 4, 3, "li", 13);
    i0.ɵɵtemplate(3, DataTableHeaderComponent_div_12_li_3_Template, 4, 3, "li", 13);
    i0.ɵɵtemplate(4, DataTableHeaderComponent_div_12_li_4_Template, 4, 3, "li", 13);
    i0.ɵɵtemplate(5, DataTableHeaderComponent_div_12_ng_template_5_Template, 1, 1, "ng-template", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.dataTable.expandableRows);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.dataTable.indexColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.dataTable.selectColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.dataTable.columns);
} }
export class DataTableHeaderComponent {
    constructor(dataTable, elemRef) {
        this.dataTable = dataTable;
        this.elemRef = elemRef;
        this.columnSelectorOpen = false;
    }
    onClickHandler(event) {
        if (!this.elemRef.nativeElement.contains(event.target)) {
            this.columnSelectorOpen = false;
        }
    }
    onKeyUpHandler(event) {
        if (event.keyCode === 27 || (event.keyCode === 9 && !this.elemRef.nativeElement.contains(event.target))) {
            this.columnSelectorOpen = false;
        }
    }
    onChange(event) {
        const isChecked = event.target.checked;
        const columnName = event.target.parentElement.textContent.trim();
        const interpolateParams = {
            'column_name': columnName,
            'title': this.dataTable.title
        };
        this.dataTable.visibleColumnsChange.emit(event);
        this.dataTable.columnSelectorNotification = (isChecked ? this.dataTable.labels.headerColumnSelectorAdded :
            this.dataTable.labels.headerColumnSelectorRemoved)
            .replace('{column_name}', interpolateParams.column_name)
            .replace('{title}', interpolateParams.title);
    }
}
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(i0.ɵɵdirectiveInject(forwardRef(() => DataTableComponent)), i0.ɵɵdirectiveInject(i0.ElementRef)); };
DataTableHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableHeaderComponent, selectors: [["data-table-header"]], hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function DataTableHeaderComponent_click_HostBindingHandler($event) { return ctx.onClickHandler($event); }, false, i0.ɵɵresolveDocument)("keyup", function DataTableHeaderComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUpHandler($event); }, false, i0.ɵɵresolveDocument);
    } }, decls: 13, vars: 8, consts: [[1, "data-table-header"], ["class", "h4 title", 3, "textContent", 4, "ngIf"], [1, "button-panel"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "refresh-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "column-selector-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-list"], [1, "column-selector-wrapper"], ["class", "column-selector-box panel panel-default", 4, "ngIf"], [1, "h4", "title", 3, "textContent"], [1, "column-selector-box", "panel", "panel-default"], [1, "list-group", "list-group-flush"], ["class", "list-group-item column-selector-column checkbox", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "list-group-item", "column-selector-column", "checkbox"], [1, "d-flex", "align-items-center"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [3, "textContent"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DataTableHeaderComponent_p_1_Template, 1, 1, "p", 1);
        i0.ɵɵelementStart(2, "div", 2)(3, "button", 3);
        i0.ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_3_listener() { return ctx.dataTable.reloadItems(); });
        i0.ɵɵelement(4, "i", 4);
        i0.ɵɵelementStart(5, "span", 5);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "button", 6);
        i0.ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_7_listener() { return ctx.columnSelectorOpen = !ctx.columnSelectorOpen; });
        i0.ɵɵelement(8, "i", 7);
        i0.ɵɵelementStart(9, "span", 5);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵtemplate(12, DataTableHeaderComponent_div_12_Template, 6, 4, "div", 9);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.dataTable.showTitle);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.dataTable.labels.headerReload.replace("{title}", ctx.dataTable.title));
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("active", ctx.columnSelectorOpen);
        i0.ɵɵattribute("aria-haspopup", true)("aria-expanded", ctx.columnSelectorOpen);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.dataTable.labels.headerColumnSelector.replace("{title}", ctx.dataTable.title));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.columnSelectorOpen);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".data-table-header[_ngcontent-%COMP%]{min-height:25px;margin-bottom:10px}.title[_ngcontent-%COMP%]{display:inline-block;margin:5px 0 0 5px}.button-panel[_ngcontent-%COMP%]{float:right}.button-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important}.column-selector-wrapper[_ngcontent-%COMP%]{position:relative}.column-selector-box[_ngcontent-%COMP%]{box-shadow:0 0 10px #d3d3d3;background:white;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]{padding:.5rem .25rem}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:4px;font-style:italic}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableHeaderComponent, [{
        type: Component,
        args: [{ selector: 'data-table-header', template: "<div class=\"data-table-header\">\n  <p class=\"h4 title\" *ngIf=\"dataTable.showTitle\" [textContent]=\"dataTable.title\"></p>\n  <div class=\"button-panel\">\n    <button type=\"button\" class=\"btn btn-default btn-sm refresh-button\"\n            (click)=\"dataTable.reloadItems()\">\n      <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerReload.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default btn-sm column-selector-button\" [class.active]=\"columnSelectorOpen\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.aria-expanded]=\"columnSelectorOpen\"\n            (click)=\"columnSelectorOpen = !columnSelectorOpen;\">\n      <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <div class=\"column-selector-wrapper\">\n      <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box panel panel-default\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngIf=\"dataTable.expandableRows\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.expandColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.expandColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.indexColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.indexColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.indexColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.selectColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.selectColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.selectColumn\"></span>\n            </label>\n          </li>\n          <ng-template ngFor let-item let-i=\"index\" [ngForOf]=\"dataTable.columns\">\n            <li class=\"list-group-item column-selector-column checkbox\"\n                *ngIf=\"dataTable.primaryColumn !== item.property\">\n              <label class=\"d-flex align-items-center\">\n                <input type=\"checkbox\" [(ngModel)]=\"item.visible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n                <span [textContent]=\"item.header\"></span>\n              </label>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:none!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:white;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}\n"] }]
    }], function () { return [{ type: i3.DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }, { type: i0.ElementRef }]; }, { onClickHandler: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], onKeyUpHandler: [{
            type: HostListener,
            args: ['document:keyup', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0lDTjVELHdCQUFvRjs7O0lBQXBDLG9EQUErQjs7OztJQWlCdkUsOEJBQTZGLGdCQUFBLGdCQUFBO0lBRWxFLGlNQUFhLDZEQUFxQyxJQUFQLHNLQUFXLGVBQUEsdUJBQWdCLENBQUEsSUFBM0I7SUFBbEUsaUJBQW9JO0lBQ3BJLDJCQUEyRDtJQUM3RCxpQkFBUSxFQUFBOzs7SUFGaUIsZUFBMkM7SUFBM0MsOERBQTJDO0lBQTZCLG9EQUFtQztJQUM1SCxlQUE2QztJQUE3QyxrRUFBNkM7Ozs7SUFHdkQsOEJBQTBGLGdCQUFBLGdCQUFBO0lBRS9ELGtNQUFhLDREQUFvQyxJQUFQLHdLQUFXLGVBQUEsd0JBQWdCLENBQUEsSUFBM0I7SUFBakUsaUJBQW1JO0lBQ25JLDJCQUEwRDtJQUM1RCxpQkFBUSxFQUFBOzs7SUFGaUIsZUFBMEM7SUFBMUMsNkRBQTBDO0lBQTZCLG9EQUFtQztJQUMzSCxlQUE0QztJQUE1QyxpRUFBNEM7Ozs7SUFHdEQsOEJBQTJGLGdCQUFBLGdCQUFBO0lBRWhFLG1NQUFhLDhEQUFxQyxJQUFQLHdLQUFXLGVBQUEsd0JBQWdCLENBQUEsSUFBM0I7SUFBbEUsaUJBQW9JO0lBQ3BJLDJCQUEyRDtJ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QSxpQkFBTyxFQUFBO1FBRXRHLGlDQUc0RDtRQUFwRCx5SkFBbUQ7UUFDekQsdUJBQTZDO1FBQzdDLCtCQUFzQjtRQUFBLGFBQStFO1FBQUEsaUJBQU8sRUFBQTtRQUU5RywrQkFBcUM7UUFDbkMsMkVBOEJNO1FBQ1IsaUJBQU0sRUFBQSxFQUFBOztRQTlDYSxlQUF5QjtRQUF6Qiw4Q0FBeUI7UUFLcEIsZUFBdUU7UUFBdkUsK0ZBQXVFO1FBRW5CLGVBQW1DO1FBQW5DLGdEQUFtQztRQUN2RyxxQ0FBMkIseUNBQUE7UUFJWCxlQUErRTtRQUEvRSx1R0FBK0U7UUFHL0YsZUFBd0I7UUFBeEIsNkNBQXdCOzt1RkRGdkIsd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0UsbUJBQW1COztzQkFRaEIsTUFBTTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aURBSVosY0FBYztrQkFBekQsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQU1FLGNBQWM7a0JBQXpELFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQge1xuXG4gIGNvbHVtblNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpKSBwdWJsaWMgZGF0YVRhYmxlOiBEYXRhVGFibGVDb21wb25lbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGlmICghdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pIG9uS2V5VXBIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IChldmVudC5rZXlDb2RlID09PSA5ICYmICF0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSkge1xuICAgICAgdGhpcy5jb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50LnRhcmdldCkuY2hlY2tlZDtcbiAgICBjb25zdCBjb2x1bW5OYW1lID0gKDxIVE1MSW5wdXRFbGVtZW50PiBldmVudC50YXJnZXQpLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIGNvbnN0IGludGVycG9sYXRlUGFyYW1zID0ge1xuICAgICAgJ2NvbHVtbl9uYW1lJzogY29sdW1uTmFtZSxcbiAgICAgICd0aXRsZSc6IHRoaXMuZGF0YVRhYmxlLnRpdGxlXG4gICAgfTtcblxuICAgIHRoaXMuZGF0YVRhYmxlLnZpc2libGVDb2x1bW5zQ2hhbmdlLmVtaXQoZXZlbnQpO1xuXG4gICAgdGhpcy5kYXRhVGFibGUuY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb24gPSAoaXNDaGVja2VkID8gdGhpcy5kYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yQWRkZWQgOlxuICAgICAgdGhpcy5kYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yUmVtb3ZlZClcbiAgICAgIC5yZXBsYWNlKCd7Y29sdW1uX25hbWV9JywgaW50ZXJwb2xhdGVQYXJhbXMuY29sdW1uX25hbWUpXG4gICAgICAucmVwbGFjZSgne3RpdGxlfScsIGludGVycG9sYXRlUGFyYW1zLnRpdGxlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtaGVhZGVyXCI+XG4gIDxwIGNsYXNzPVwiaDQgdGl0bGVcIiAqbmdJZj1cImRhdGFUYWJsZS5zaG93VGl0bGVcIiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLnRpdGxlXCI+PC9wPlxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXBhbmVsXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHJlZnJlc2gtYnV0dG9uXCJcbiAgICAgICAgICAgIChjbGljayk9XCJkYXRhVGFibGUucmVsb2FkSXRlbXMoKVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+e3sgZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJSZWxvYWQucmVwbGFjZSgne3RpdGxlfScsIGRhdGFUYWJsZS50aXRsZSkgfX08L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGNvbHVtbi1zZWxlY3Rvci1idXR0b25cIiBbY2xhc3MuYWN0aXZlXT1cImNvbHVtblNlbGVjdG9yT3BlblwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWhhc3BvcHVwXT1cInRydWVcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJjb2x1bW5TZWxlY3Rvck9wZW5cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNvbHVtblNlbGVjdG9yT3BlbiA9ICFjb2x1bW5TZWxlY3Rvck9wZW47XCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWxpc3RcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj57eyBkYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yLnJlcGxhY2UoJ3t0aXRsZX0nLCBkYXRhVGFibGUudGl0bGUpIH19PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2VsZWN0b3Itd3JhcHBlclwiPlxuICAgICAgPGRpdiAqbmdJZj1cImNvbHVtblNlbGVjdG9yT3BlblwiIGNsYXNzPVwiY29sdW1uLXNlbGVjdG9yLWJveCBwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgIDxsaSAqbmdJZj1cImRhdGFUYWJsZS5leHBhbmRhYmxlUm93c1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLmV4cGFuZENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kQ29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSAqbmdJZj1cImRhdGFUYWJsZS5pbmRleENvbHVtblwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLmluZGV4Q29sdW1uVmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5pbmRleENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuc2VsZWN0Q29sdW1uXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBjaGVja2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJkYXRhVGFibGUuc2VsZWN0Q29sdW1uVmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5zZWxlY3RDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pdGVtIGxldC1pPVwiaW5kZXhcIiBbbmdGb3JPZl09XCJkYXRhVGFibGUuY29sdW1uc1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gIT09IGl0ZW0ucHJvcGVydHlcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIml0ZW0udmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJpdGVtLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19