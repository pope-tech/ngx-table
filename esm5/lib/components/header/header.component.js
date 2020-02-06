import { Component, ElementRef, forwardRef, HostListener, Inject } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "../table/table.component";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function DataTableHeaderComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 10);
} if (rf & 2) {
    var ctx_r151 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r151.dataTable.title);
} }
function DataTableHeaderComponent_div_12_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r158 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r158); var ctx_r157 = i0.ɵɵnextContext(2); return ctx_r157.dataTable.expandColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r158); var ctx_r159 = i0.ɵɵnextContext(2); return ctx_r159.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r153 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r153.dataTable.expandColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r153.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", ctx_r153.dataTable.labels.expandColumn);
} }
function DataTableHeaderComponent_div_12_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r161 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r161); var ctx_r160 = i0.ɵɵnextContext(2); return ctx_r160.dataTable.indexColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_3_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r161); var ctx_r162 = i0.ɵɵnextContext(2); return ctx_r162.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r154 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r154.dataTable.indexColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r154.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", ctx_r154.dataTable.labels.indexColumn);
} }
function DataTableHeaderComponent_div_12_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r164 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_li_4_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r164); var ctx_r163 = i0.ɵɵnextContext(2); return ctx_r163.dataTable.selectColumnVisible = $event; })("change", function DataTableHeaderComponent_div_12_li_4_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r164); var ctx_r165 = i0.ɵɵnextContext(2); return ctx_r165.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r155 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r155.dataTable.selectColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r155.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", ctx_r155.dataTable.labels.selectColumn);
} }
function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
    var _r171 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵlistener("ngModelChange", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r171); var item_r166 = i0.ɵɵnextContext().$implicit; return item_r166.visible = $event; })("change", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r171); var ctx_r172 = i0.ɵɵnextContext(3); return ctx_r172.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r166 = i0.ɵɵnextContext().$implicit;
    var ctx_r168 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r166.visible);
    i0.ɵɵattribute("aria-controls", ctx_r168.dataTable.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("textContent", item_r166.header);
} }
function DataTableHeaderComponent_div_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataTableHeaderComponent_div_12_ng_template_5_li_0_Template, 4, 3, "li", 13);
} if (rf & 2) {
    var item_r166 = ctx.$implicit;
    var ctx_r156 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r156.dataTable.primaryColumn !== item_r166.property);
} }
function DataTableHeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "ul", 12);
    i0.ɵɵtemplate(2, DataTableHeaderComponent_div_12_li_2_Template, 4, 3, "li", 13);
    i0.ɵɵtemplate(3, DataTableHeaderComponent_div_12_li_3_Template, 4, 3, "li", 13);
    i0.ɵɵtemplate(4, DataTableHeaderComponent_div_12_li_4_Template, 4, 3, "li", 13);
    i0.ɵɵtemplate(5, DataTableHeaderComponent_div_12_ng_template_5_Template, 1, 1, "ng-template", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r152 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r152.dataTable.expandableRows);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r152.dataTable.indexColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r152.dataTable.selectColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r152.dataTable.columns);
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
    DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(i0.ɵɵdirectiveInject(forwardRef(function () { return DataTableComponent; })), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    DataTableHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataTableHeaderComponent, selectors: [["data-table-header"]], hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function DataTableHeaderComponent_click_HostBindingHandler($event) { return ctx.onClickHandler($event); }, false, i0.ɵɵresolveDocument)("keyup", function DataTableHeaderComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUpHandler($event); }, false, i0.ɵɵresolveDocument);
        } }, decls: 13, vars: 8, consts: [[1, "data-table-header"], ["class", "h4 title", 3, "textContent", 4, "ngIf"], [1, "button-panel"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "refresh-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "column-selector-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-list"], [1, "column-selector-wrapper"], ["class", "column-selector-box panel panel-default", 4, "ngIf"], [1, "h4", "title", 3, "textContent"], [1, "column-selector-box", "panel", "panel-default"], [1, "list-group", "list-group-flush"], ["class", "list-group-item column-selector-column checkbox", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "list-group-item", "column-selector-column", "checkbox"], [1, "d-flex", "align-items-center"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [3, "textContent"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DataTableHeaderComponent_p_1_Template, 1, 1, "p", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_3_listener($event) { return ctx.dataTable.reloadItems(); });
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵelementStart(5, "span", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 6);
            i0.ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_7_listener($event) { return ctx.columnSelectorOpen = !ctx.columnSelectorOpen; });
            i0.ɵɵelement(8, "i", 7);
            i0.ɵɵelementStart(9, "span", 5);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 8);
            i0.ɵɵtemplate(12, DataTableHeaderComponent_div_12_Template, 6, 4, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
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
        } }, directives: [i2.NgIf, i2.NgForOf, i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: [".data-table-header[_ngcontent-%COMP%]{min-height:25px;margin-bottom:10px}.title[_ngcontent-%COMP%]{display:inline-block;margin:5px 0 0 5px}.button-panel[_ngcontent-%COMP%]{float:right}.button-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:0!important}.column-selector-wrapper[_ngcontent-%COMP%]{position:relative}.column-selector-box[_ngcontent-%COMP%]{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]{padding:.5rem .25rem}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:4px;font-style:italic}"] });
    return DataTableHeaderComponent;
}());
export { DataTableHeaderComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTableHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'data-table-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: i1.DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(function () { return DataTableComponent; })]
            }] }, { type: i0.ElementRef }]; }, { onClickHandler: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], onKeyUpHandler: [{
            type: HostListener,
            args: ['document:keyup', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztJQ041RCx3QkFBb0Y7OztJQUFwQyxzREFBK0I7Ozs7SUFpQnZFLDhCQUNFO0lBQUEsaUNBQ0U7SUFBQSxpQ0FDQTtJQUR1QixzUEFBMkMscU1BQUE7SUFBbEUsaUJBQ0E7SUFBQSwyQkFBMkQ7SUFDN0QsaUJBQVE7SUFDVixpQkFBSzs7O0lBSHNCLGVBQTJDO0lBQTNDLGdFQUEyQztJQUE2QixzREFBbUM7SUFDNUgsZUFBNkM7SUFBN0Msb0VBQTZDOzs7O0lBR3ZELDhCQUNFO0lBQUEsaUNBQ0U7SUFBQSxpQ0FDQTtJQUR1QixxUEFBMEMscU1BQUE7SUFBakUsaUJBQ0E7SUFBQSwyQkFBMEQ7SUFDNUQsaUJBQVE7SUFDVixpQkFBSzs7O0lBSHNCLGVBQTBDO0lBQTFDLCtEQUEwQztJQUE2QixzREFBbUM7SUFDM0gsZUFBNEM7SUFBNUMsbUVBQTRDOzs7O0lBR3RELDhCQUNFO0lBQUEsaUNBQ0U7SUFBQSxpQ0FDQTtJQUR1QixzUEFBMkMscU1BQUE7SUFBbEUsaUJBQ0E7SUFBQSwyQkFBMkQ7SUFDN0QsaUJBQVE7SUFDVixpQkFBSzs7O0lBSHNCLGVBQTJDO0lBQTNDLGdFQUEyQztJQUE2QixzREFBbUM7SUFDNUgsZUFBNkM7SUFBN0Msb0VBQTZDOzs7O0lBSXJELDhCQUVFO0lBQUEsaUNBQ0U7SUFB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WUFDUixpQkFBTTtZQUNSLGlCQUFNOztZQWhEZ0IsZUFBMkI7WUFBM0IsOENBQTJCO1lBS3JCLGVBQXVFO1lBQXZFLCtGQUF1RTtZQUVuQixlQUFtQztZQUFuQyxnREFBbUM7WUFDdkcscUNBQTJCLHlDQUFBO1lBSVgsZUFBK0U7WUFBL0UsdUdBQStFO1lBR2hHLGVBQTBCO1lBQTFCLDZDQUEwQjs7bUNEaEJyQztDQWlEQyxBQXhDRCxJQXdDQztTQW5DWSx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7O3NCQUtjLE1BQU07dUJBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQzs7a0JBSXZELFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQU16QyxZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50IHtcblxuICBjb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSkgb25DbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKSBvbktleVVwSGFuZGxlcihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCAoZXZlbnQua2V5Q29kZSA9PT0gOSAmJiAhdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkpIHtcbiAgICAgIHRoaXMuY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaXNDaGVja2VkID0gKDxIVE1MSW5wdXRFbGVtZW50PiBldmVudC50YXJnZXQpLmNoZWNrZWQ7XG4gICAgY29uc3QgY29sdW1uTmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD4gZXZlbnQudGFyZ2V0KS5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICBjb25zdCBpbnRlcnBvbGF0ZVBhcmFtcyA9IHtcbiAgICAgICdjb2x1bW5fbmFtZSc6IGNvbHVtbk5hbWUsXG4gICAgICAndGl0bGUnOiB0aGlzLmRhdGFUYWJsZS50aXRsZVxuICAgIH07XG5cbiAgICB0aGlzLmRhdGFUYWJsZS52aXNpYmxlQ29sdW1uc0NoYW5nZS5lbWl0KGV2ZW50KTtcblxuICAgIHRoaXMuZGF0YVRhYmxlLmNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uID0gKGlzQ2hlY2tlZCA/IHRoaXMuZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3RvckFkZGVkIDpcbiAgICAgIHRoaXMuZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3RvclJlbW92ZWQpXG4gICAgICAucmVwbGFjZSgne2NvbHVtbl9uYW1lfScsIGludGVycG9sYXRlUGFyYW1zLmNvbHVtbl9uYW1lKVxuICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCBpbnRlcnBvbGF0ZVBhcmFtcy50aXRsZSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWhlYWRlclwiPlxuICA8cCBjbGFzcz1cImg0IHRpdGxlXCIgKm5nSWY9XCJkYXRhVGFibGUuc2hvd1RpdGxlXCIgW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS50aXRsZVwiPjwvcD5cbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1wYW5lbFwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSByZWZyZXNoLWJ1dHRvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGF0YVRhYmxlLnJlbG9hZEl0ZW1zKClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnt7IGRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyUmVsb2FkLnJlcGxhY2UoJ3t0aXRsZX0nLCBkYXRhVGFibGUudGl0bGUpIH19PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBjb2x1bW4tc2VsZWN0b3ItYnV0dG9uXCIgW2NsYXNzLmFjdGl2ZV09XCJjb2x1bW5TZWxlY3Rvck9wZW5cIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1oYXNwb3B1cF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiY29sdW1uU2VsZWN0b3JPcGVuXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjb2x1bW5TZWxlY3Rvck9wZW4gPSAhY29sdW1uU2VsZWN0b3JPcGVuO1wiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+e3sgZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3Rvci5yZXBsYWNlKCd7dGl0bGV9JywgZGF0YVRhYmxlLnRpdGxlKSB9fTwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNlbGVjdG9yLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW5TZWxlY3Rvck9wZW5cIiBjbGFzcz1cImNvbHVtbi1zZWxlY3Rvci1ib3ggcGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuZXhwYW5kYWJsZVJvd3NcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5leHBhbmRDb2x1bW5WaXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuaW5kZXhDb2x1bW5cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5pbmRleENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuaW5kZXhDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiZGF0YVRhYmxlLnNlbGVjdENvbHVtblwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLnNlbGVjdENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuc2VsZWN0Q29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBsZXQtaT1cImluZGV4XCIgW25nRm9yT2ZdPVwiZGF0YVRhYmxlLmNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGFUYWJsZS5wcmltYXJ5Q29sdW1uICE9PSBpdGVtLnByb3BlcnR5XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJpdGVtLnZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiaXRlbS5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==