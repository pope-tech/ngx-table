import { Component, ElementRef, EventEmitter, forwardRef, Inject, Input, Output, Renderer2 } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "../table/table.component";
import * as i2 from "../../utils/hide";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
var _c0 = ["dataTableRow", ""];
function DataTableRowComponent_ng_template_7_th_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    var column_r138 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r141 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r141.item[column_r138.property]);
} }
var _c1 = function (a0, a1, a2) { return { column: a0, row: a1, item: a2 }; };
function DataTableRowComponent_ng_template_7_th_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    var column_r138 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r142 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", column_r138.cellTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c1, column_r138, ctx_r142._this, ctx_r142.item));
} }
function DataTableRowComponent_ng_template_7_th_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_th_0_div_1_Template, 1, 1, "div", 12);
    i0.ɵɵtemplate(2, DataTableRowComponent_ng_template_7_th_0_div_2_Template, 1, 6, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r138 = i0.ɵɵnextContext().$implicit;
    var ctx_r139 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", column_r138.getCellColor(ctx_r139._this, ctx_r139.index));
    i0.ɵɵproperty("hide", !column_r138.visible)("ngClass", column_r138.styleClassObject);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r138.cellTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r138.cellTemplate);
} }
function DataTableRowComponent_ng_template_7_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    var column_r138 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r146 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r146.item[column_r138.property]);
} }
function DataTableRowComponent_ng_template_7_td_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    var column_r138 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r147 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", column_r138.cellTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c1, column_r138, ctx_r147._this, ctx_r147.item));
} }
function DataTableRowComponent_ng_template_7_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_div_1_Template, 1, 1, "div", 12);
    i0.ɵɵtemplate(2, DataTableRowComponent_ng_template_7_td_1_div_2_Template, 1, 6, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r138 = i0.ɵɵnextContext().$implicit;
    var ctx_r140 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", column_r138.getCellColor(ctx_r140._this, ctx_r140.index));
    i0.ɵɵproperty("hide", !column_r138.visible)("ngClass", column_r138.styleClassObject);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r138.cellTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r138.cellTemplate);
} }
function DataTableRowComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataTableRowComponent_ng_template_7_th_0_Template, 3, 6, "th", 9);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_Template, 3, 6, "td", 10);
} if (rf & 2) {
    var column_r138 = ctx.$implicit;
    var ctx_r136 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r136.dataTable.primaryColumn === column_r138.property);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r136.dataTable.primaryColumn !== column_r138.property);
} }
var _c2 = function (a0, a1) { return { row: a0, item: a1 }; };
function DataTableRowComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 17);
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelement(2, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r137 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hide", !ctx_r137.expanded);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", ctx_r137.dataTable.columnCount);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r137.dataTable.expandTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c2, ctx_r137._this, ctx_r137.item));
} }
var _c3 = function (a0, a1) { return { "fa-caret-right": a0, "fa-caret-down": a1 }; };
var DataTableRowComponent = /** @class */ (function () {
    function DataTableRowComponent(dataTable, renderer, elementRef) {
        this.dataTable = dataTable;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._this = this;
        this._listeners = [];
        this.selectedChange = new EventEmitter();
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
    DataTableRowComponent.ɵfac = function DataTableRowComponent_Factory(t) { return new (t || DataTableRowComponent)(i0.ɵɵdirectiveInject(forwardRef(function () { return DataTableComponent; })), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    DataTableRowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataTableRowComponent, selectors: [["", "dataTableRow", ""]], inputs: { item: "item", index: "index" }, outputs: { selectedChange: "selectedChange" }, attrs: _c0, decls: 9, vars: 27, consts: [[1, "data-table-row", 3, "title"], [3, "hide"], [1, "row-expand-button", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-lg", 3, "ngClass"], [1, "index-column", 3, "hide", "textContent"], [1, "select-column", 3, "hide"], ["type", "checkbox", 3, "ngModel", "title", "ngModelChange"], ["ngFor", "", 3, "ngForOf"], ["class", "row-expansion", 3, "hide", 4, "ngIf"], ["scope", "row", "class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["scope", "row", 1, "data-column", 3, "hide", "ngClass"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "textContent"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "data-column", 3, "hide", "ngClass"], [1, "row-expansion", 3, "hide"]], template: function DataTableRowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tr", 0);
            i0.ɵɵelementStart(1, "td", 1);
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵlistener("click", function DataTableRowComponent_Template_button_click_2_listener($event) { ctx.expanded = !ctx.expanded; return $event.stopPropagation(); });
            i0.ɵɵelement(3, "i", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "td", 4);
            i0.ɵɵelementStart(5, "td", 5);
            i0.ɵɵelementStart(6, "input", 6);
            i0.ɵɵlistener("ngModelChange", function DataTableRowComponent_Template_input_ngModelChange_6_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, DataTableRowComponent_ng_template_7_Template, 2, 2, "ng-template", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, DataTableRowComponent_tr_8_Template, 3, 7, "tr", 8);
        } if (rf & 2) {
            i0.ɵɵstyleProp("background-color", ctx.dataTable.getRowColor(ctx.item, ctx.index, ctx._this));
            i0.ɵɵclassProp("row-odd", ctx.index % 2 === 0)("row-even", ctx.index % 2 === 1)("selected", ctx.selected)("clickable", ctx.dataTable.selectOnRowClick);
            i0.ɵɵproperty("title", ctx.getTooltip());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hide", !ctx.dataTable.expandColumnVisible);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("title", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
            i0.ɵɵattribute("aria-expanded", ctx.expanded)("aria-label", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(24, _c3, !ctx.expanded, ctx.expanded));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hide", !ctx.dataTable.indexColumnVisible)("textContent", ctx.displayIndex);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hide", !ctx.dataTable.selectColumnVisible);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.selected)("title", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
            i0.ɵɵattribute("aria-label", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.dataTable.columns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.dataTable.expandableRows);
        } }, directives: [i2.HideDirective, i3.NgClass, i4.CheckboxControlValueAccessor, i4.NgControlStatus, i4.NgModel, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet], styles: [".select-column[_ngcontent-%COMP%]{text-align:center}.row-expand-button[_ngcontent-%COMP%]{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable[_ngcontent-%COMP%]{cursor:pointer}th[_ngcontent-%COMP%]{font-weight:initial}"] });
    return DataTableRowComponent;
}());
export { DataTableRowComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTableRowComponent, [{
        type: Component,
        args: [{
                selector: '[dataTableRow]',
                templateUrl: './row.component.html',
                styleUrls: ['./row.component.css']
            }]
    }], function () { return [{ type: i1.DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(function () { return DataTableComponent; })]
            }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { item: [{
            type: Input
        }], index: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7O0lDYXhELDBCQUE4RTs7OztJQUE1QyxpRUFBcUM7Ozs7SUFDdkUsMEJBQ2dGOzs7O0lBRC9DLDJEQUF3QyxtR0FBQTs7O0lBSjNFLDhCQUdFO0lBQUEsMEZBQXdFO0lBQ3hFLDBGQUMwRTtJQUM1RSxpQkFBSzs7OztJQUpELDRGQUE0RDtJQUZJLDJDQUF3Qix5Q0FBQTtJQUdyRixlQUE0QjtJQUE1QixnREFBNEI7SUFDNUIsZUFBMkI7SUFBM0IsK0NBQTJCOzs7SUFNaEMsMEJBQThFOzs7O0lBQTVDLGlFQUFxQzs7O0lBQ3ZFLDBCQUNnRjs7OztJQUQvQywyREFBd0MsbUdBQUE7OztJQUozRSw4QkFHRTtJQUFBLDBGQUF3RTtJQUN4RSwwRkFDMEU7SUFDNUUsaUJBQUs7Ozs7SUFKRCw0RkFBNEQ7SUFGUiwyQ0FBd0IseUNBQUE7SUFHekUsZUFBNEI7SUFBNUIsZ0RBQTRCO0lBQzVCLGVBQTJCO0lBQTNCLCtDQUEyQjs7O0lBWGxDLGtGQUdFO0lBSUYsbUZBR0U7Ozs7SUFWRSxnRkFBbUQ7SUFPbkQsZUFBbUQ7SUFBbkQsZ0ZBQW1EOzs7O0lBUzNELDhCQUNFO0lBQUEsMEJBQ0U7SUFBQSwwQkFBOEc7SUFDaEgsaUJBQUs7SUFDUCxpQkFBSzs7O0lBSmdDLHlDQUFrQjtJ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WUFDWCxpQkFBSztZQUNMLHdCQUFrRztZQUNsRyw2QkFDRTtZQUFBLGdDQUdGO1lBSHlCLGdKQUFzQjtZQUE3QyxpQkFHRjtZQUFBLGlCQUFLO1lBQ0wsc0ZBQ0U7WUFlSixpQkFBSztZQUNMLG9FQUNFOztZQXJDRSw2RkFBb0U7WUFDcEUsOENBQWlDLGlDQUFBLDBCQUFBLDZDQUFBO1lBRmpDLHdDQUFzQjtZQU1wQixlQUF1QztZQUF2Qyx5REFBdUM7WUFHcEMsZUFBZ0c7WUFBaEcsNEhBQWdHO1lBRGhHLDZDQUErQixvSEFBQTtZQUcvQixlQUFvRTtZQUFwRSxrRkFBb0U7WUFHdkUsZUFBc0M7WUFBdEMsd0RBQXNDLGlDQUFBO1lBQ3RDLGVBQXVDO1lBQXZDLHlEQUF1QztZQUNsQixlQUFzQjtZQUF0QixzQ0FBc0IsK0dBQUE7WUFFdEMsa0lBQTBHO1lBRWhHLGVBQTZCO1lBQTdCLCtDQUE2QjtZQWlCOUMsZUFBZ0M7WUFBaEMsbURBQWdDOztnQ0R0Q3BDO0NBa0ZDLEFBcEVELElBb0VDO1NBL0RZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQzs7c0JBMENjLE1BQU07dUJBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQzs7a0JBckN2RCxLQUFLOztrQkFDTCxLQUFLOztrQkFTTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tkYXRhVGFibGVSb3ddJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jvdy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBfdGhpcyA9IHRoaXM7XG5cbiAgQElucHV0KCkgaXRlbTogYW55O1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIGV4cGFuZGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IFtdO1xuXG4gIC8vIHJvdyBzZWxlY3Rpb246XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWQpO1xuICB9XG5cbiAgLy8gb3RoZXI6XG4gIGdldCBkaXNwbGF5SW5kZXgoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5kaXNwbGF5UGFyYW1zLm9mZnNldCArIHRoaXMuaW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleCArIDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG9vbHRpcCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93VG9vbHRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnJvd1Rvb2x0aXAodGhpcy5pdGVtLCB0aGlzLCB0aGlzLmluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd0NsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmRhdGFUYWJsZS5yb3dDbGlja2VkKHRoaXMsIGV2ZW50KSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dEb3VibGVDbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGJsY2xpY2snLFxuICAgICAgICAgIChldmVudCkgPT4gdGhpcy5kYXRhVGFibGUucm93RG91YmxlQ2xpY2tlZCh0aGlzLCBldmVudCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgfVxufVxuIiwiPHRyIGNsYXNzPVwiZGF0YS10YWJsZS1yb3dcIlxuICAgIFt0aXRsZV09XCJnZXRUb29sdGlwKClcIlxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImRhdGFUYWJsZS5nZXRSb3dDb2xvcihpdGVtLCBpbmRleCwgX3RoaXMpXCJcbiAgICBbY2xhc3Mucm93LW9kZF09XCJpbmRleCAlIDIgPT09IDBcIlxuICAgIFtjbGFzcy5yb3ctZXZlbl09XCJpbmRleCAlIDIgPT09IDFcIlxuICAgIFtjbGFzcy5zZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgW2NsYXNzLmNsaWNrYWJsZV09XCJkYXRhVGFibGUuc2VsZWN0T25Sb3dDbGlja1wiPlxuICA8dGQgW2hpZGVdPVwiIWRhdGFUYWJsZS5leHBhbmRDb2x1bW5WaXNpYmxlXCI+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiZXhwYW5kZWQgPSAhZXhwYW5kZWQ7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiIGNsYXNzPVwicm93LWV4cGFuZC1idXR0b25cIlxuICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJleHBhbmRlZFwiXG4gICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5leHBhbmRSb3cucmVwbGFjZSgne2NlbGxfY29udGVudH0nLCAnJytpdGVtW2RhdGFUYWJsZS5wcmltYXJ5Q29sdW1uXSlcIlxuICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiPlxuICAgICAgPGkgW25nQ2xhc3NdPVwieydmYS1jYXJldC1yaWdodCc6ICFleHBhbmRlZCwgJ2ZhLWNhcmV0LWRvd24nOiBleHBhbmRlZH1cIiBjbGFzcz1cImZhIGZhLWxnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICA8L3RkPlxuICA8dGQgW2hpZGVdPVwiIWRhdGFUYWJsZS5pbmRleENvbHVtblZpc2libGVcIiBjbGFzcz1cImluZGV4LWNvbHVtblwiIFt0ZXh0Q29udGVudF09XCJkaXNwbGF5SW5kZXhcIj48L3RkPlxuICA8dGQgW2hpZGVdPVwiIWRhdGFUYWJsZS5zZWxlY3RDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJzZWxlY3QtY29sdW1uXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5zZWxlY3RSb3cucmVwbGFjZSgne2NlbGxfY29udGVudH0nLCAnJytpdGVtW2RhdGFUYWJsZS5wcmltYXJ5Q29sdW1uXSlcIlxuICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRhdGFUYWJsZS5sYWJlbHMuc2VsZWN0Um93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCIvPlxuICA8L3RkPlxuICA8bmctdGVtcGxhdGUgbmdGb3IgW25nRm9yT2ZdPVwiZGF0YVRhYmxlLmNvbHVtbnNcIiBsZXQtY29sdW1uPlxuICAgIDx0aCAqbmdJZj1cImRhdGFUYWJsZS5wcmltYXJ5Q29sdW1uID09PSBjb2x1bW4ucHJvcGVydHlcIiBzY29wZT1cInJvd1wiIFtoaWRlXT1cIiFjb2x1bW4udmlzaWJsZVwiIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCJcbiAgICAgICAgY2xhc3M9XCJkYXRhLWNvbHVtblwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbHVtbi5nZXRDZWxsQ29sb3IoX3RoaXMsIGluZGV4KVwiPlxuICAgICAgPGRpdiAqbmdJZj1cIiFjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW3RleHRDb250ZW50XT1cIml0ZW1bY29sdW1uLnByb3BlcnR5XVwiPjwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbiwgcm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgICA8L3RoPlxuICAgIDx0ZCAqbmdJZj1cImRhdGFUYWJsZS5wcmltYXJ5Q29sdW1uICE9PSBjb2x1bW4ucHJvcGVydHlcIiBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIiBbbmdDbGFzc109XCJjb2x1bW4uc3R5bGVDbGFzc09iamVjdFwiXG4gICAgICAgIGNsYXNzPVwiZGF0YS1jb2x1bW5cIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2x1bW4uZ2V0Q2VsbENvbG9yKF90aGlzLCBpbmRleClcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCIhY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFt0ZXh0Q29udGVudF09XCJpdGVtW2NvbHVtbi5wcm9wZXJ0eV1cIj48L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW4sIHJvdzogX3RoaXMsIGl0ZW06IGl0ZW19XCI+PC9kaXY+XG4gICAgPC90ZD5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvdHI+XG48dHIgKm5nSWY9XCJkYXRhVGFibGUuZXhwYW5kYWJsZVJvd3NcIiBbaGlkZV09XCIhZXhwYW5kZWRcIiBjbGFzcz1cInJvdy1leHBhbnNpb25cIj5cbiAgPHRkIFthdHRyLmNvbHNwYW5dPVwiZGF0YVRhYmxlLmNvbHVtbkNvdW50XCI+XG4gICAgPGRpdiBbbmdUZW1wbGF0ZU91dGxldF09XCJkYXRhVGFibGUuZXhwYW5kVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3JvdzogX3RoaXMsIGl0ZW06IGl0ZW19XCI+PC9kaXY+XG4gIDwvdGQ+XG48L3RyPlxuIl19