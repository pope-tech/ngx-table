import { Component, EventEmitter, forwardRef, Inject, Input, Output } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../utils/hide";
import * as i4 from "../table/table.component";
const _c0 = ["dataTableRow", ""];
function DataTableRowComponent_ng_template_7_th_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r5.item[column_r2.property]);
} }
const _c1 = function (a0, a1, a2) { return { column: a0, row: a1, item: a2 }; };
function DataTableRowComponent_ng_template_7_th_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", column_r2.cellTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c1, column_r2, ctx_r6._this, ctx_r6.item));
} }
function DataTableRowComponent_ng_template_7_th_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_th_0_div_1_Template, 1, 1, "div", 12);
    i0.ɵɵtemplate(2, DataTableRowComponent_ng_template_7_th_0_div_2_Template, 1, 6, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", column_r2.getCellColor(ctx_r3._this, ctx_r3.index));
    i0.ɵɵproperty("hide", !column_r2.visible)("ngClass", column_r2.styleClassObject);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r2.cellTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r2.cellTemplate);
} }
function DataTableRowComponent_ng_template_7_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r10.item[column_r2.property]);
} }
function DataTableRowComponent_ng_template_7_td_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", column_r2.cellTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c1, column_r2, ctx_r11._this, ctx_r11.item));
} }
function DataTableRowComponent_ng_template_7_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_div_1_Template, 1, 1, "div", 12);
    i0.ɵɵtemplate(2, DataTableRowComponent_ng_template_7_td_1_div_2_Template, 1, 6, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", column_r2.getCellColor(ctx_r4._this, ctx_r4.index));
    i0.ɵɵproperty("hide", !column_r2.visible)("ngClass", column_r2.styleClassObject);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r2.cellTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r2.cellTemplate);
} }
function DataTableRowComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataTableRowComponent_ng_template_7_th_0_Template, 3, 6, "th", 9);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_Template, 3, 6, "td", 10);
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r0.dataTable.primaryColumn === column_r2.property);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.dataTable.primaryColumn !== column_r2.property);
} }
const _c2 = function (a0, a1) { return { row: a0, item: a1 }; };
function DataTableRowComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 17)(1, "td");
    i0.ɵɵelement(2, "div", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hide", !ctx_r1.expanded);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", ctx_r1.dataTable.columnCount);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.dataTable.expandTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c2, ctx_r1._this, ctx_r1.item));
} }
const _c3 = function (a0, a1) { return { "fa-caret-right": a0, "fa-caret-down": a1 }; };
export class DataTableRowComponent {
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        this.selectedChange.emit(selected);
    }
    // other:
    get displayIndex() {
        if (this.dataTable.pagination) {
            return this.dataTable.displayParams.offset + this.index + 1;
        }
        else {
            return this.index + 1;
        }
    }
    getTooltip() {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    }
    constructor(dataTable, renderer, elementRef) {
        this.dataTable = dataTable;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._this = this;
        this._listeners = [];
        this.selectedChange = new EventEmitter();
    }
    ngOnInit() {
        if (this.dataTable.rowClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => this.dataTable.rowClicked(this, event)));
        }
        if (this.dataTable.rowDoubleClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dblclick', (event) => this.dataTable.rowDoubleClicked(this, event)));
        }
    }
    ngOnDestroy() {
        this.selected = false;
        this._listeners.forEach(fn => fn());
    }
    static { this.ɵfac = function DataTableRowComponent_Factory(t) { return new (t || DataTableRowComponent)(i0.ɵɵdirectiveInject(forwardRef(() => DataTableComponent)), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableRowComponent, selectors: [["", "dataTableRow", ""]], inputs: { item: "item", index: "index" }, outputs: { selectedChange: "selectedChange" }, attrs: _c0, decls: 9, vars: 27, consts: [[1, "data-table-row", 3, "title"], [3, "hide"], [1, "row-expand-button", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-lg", 3, "ngClass"], [1, "index-column", 3, "hide", "textContent"], [1, "select-column", 3, "hide"], ["type", "checkbox", 3, "ngModel", "title", "ngModelChange"], ["ngFor", "", 3, "ngForOf"], ["class", "row-expansion", 3, "hide", 4, "ngIf"], ["scope", "row", "class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["scope", "row", 1, "data-column", 3, "hide", "ngClass"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "textContent"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "data-column", 3, "hide", "ngClass"], [1, "row-expansion", 3, "hide"]], template: function DataTableRowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tr", 0)(1, "td", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function DataTableRowComponent_Template_button_click_2_listener($event) { ctx.expanded = !ctx.expanded; return $event.stopPropagation(); });
            i0.ɵɵelement(3, "i", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(4, "td", 4);
            i0.ɵɵelementStart(5, "td", 5)(6, "input", 6);
            i0.ɵɵlistener("ngModelChange", function DataTableRowComponent_Template_input_ngModelChange_6_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd()();
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
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.HideDirective], styles: [".select-column[_ngcontent-%COMP%]{text-align:center}.row-expand-button[_ngcontent-%COMP%]{box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable[_ngcontent-%COMP%]{cursor:pointer}th[_ngcontent-%COMP%]{font-weight:initial}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableRowComponent, [{
        type: Component,
        args: [{ selector: '[dataTableRow]', template: "<tr class=\"data-table-row\"\n    [title]=\"getTooltip()\"\n    [style.background-color]=\"dataTable.getRowColor(item, index, _this)\"\n    [class.row-odd]=\"index % 2 === 0\"\n    [class.row-even]=\"index % 2 === 1\"\n    [class.selected]=\"selected\"\n    [class.clickable]=\"dataTable.selectOnRowClick\">\n  <td [hide]=\"!dataTable.expandColumnVisible\">\n    <button (click)=\"expanded = !expanded; $event.stopPropagation()\" class=\"row-expand-button\"\n         [attr.aria-expanded]=\"expanded\"\n         [title]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n         [attr.aria-label]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\">\n      <i [ngClass]=\"{'fa-caret-right': !expanded, 'fa-caret-down': expanded}\" class=\"fa fa-lg\" aria-hidden=\"true\"></i>\n    </button>\n  </td>\n  <td [hide]=\"!dataTable.indexColumnVisible\" class=\"index-column\" [textContent]=\"displayIndex\"></td>\n  <td [hide]=\"!dataTable.selectColumnVisible\" class=\"select-column\">\n    <input\n           type=\"checkbox\" [(ngModel)]=\"selected\"\n           [title]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n           [attr.aria-label]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"/>\n  </td>\n  <ng-template ngFor [ngForOf]=\"dataTable.columns\" let-column>\n    <th *ngIf=\"dataTable.primaryColumn === column.property\" scope=\"row\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </th>\n    <td *ngIf=\"dataTable.primaryColumn !== column.property\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </td>\n  </ng-template>\n</tr>\n<tr *ngIf=\"dataTable.expandableRows\" [hide]=\"!expanded\" class=\"row-expansion\">\n  <td [attr.colspan]=\"dataTable.columnCount\">\n    <div [ngTemplateOutlet]=\"dataTable.expandTemplate\" [ngTemplateOutletContext]=\"{row: _this, item: item}\"></div>\n  </td>\n</tr>\n", styles: [".select-column{text-align:center}.row-expand-button{box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable{cursor:pointer}th{font-weight:initial}\n"] }]
    }], function () { return [{ type: i4.DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { item: [{
            type: Input
        }], index: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvcm93L3Jvdy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7OztJQ2N4RCwwQkFBOEU7Ozs7SUFBNUMsNkRBQXFDOzs7O0lBQ3ZFLDBCQUNnRjs7OztJQUQvQyx5REFBd0MsNkZBQUE7OztJQUozRSw4QkFFaUU7SUFDL0QsMEZBQThFO0lBQzlFLDBGQUNnRjtJQUNsRixpQkFBSzs7OztJQUpELHNGQUE0RDtJQUZJLHlDQUF3Qix1Q0FBQTtJQUdwRixlQUEwQjtJQUExQiw4Q0FBMEI7SUFDMUIsZUFBeUI7SUFBekIsNkNBQXlCOzs7SUFNL0IsMEJBQThFOzs7O0lBQTVDLDhEQUFxQzs7O0lBQ3ZFLDBCQUNnRjs7OztJQUQvQyx5REFBd0MsK0ZBQUE7OztJQUozRSw4QkFFaUU7SUFDL0QsMEZBQThFO0lBQzlFLDBGQUNnRjtJQUNsRixpQkFBSzs7OztJQUpELHNGQUE0RDtJQUZSLHlDQUF3Qix1Q0FBQTtJQUd4RSxlQUEwQjtJQUExQiw4Q0FBMEI7SUFDMUIsZUFBeUI7SUFBekIsNkNBQXlCOzs7SUFYakMsa0ZBTUs7SUFDTCxtRkFNSzs7OztJQWJBLDRFQUFpRDtJQU9qRCxlQUFpRDtJQUFqRCw0RUFBaUQ7Ozs7SUFTMUQsOEJBQThFLFNBQUE7SUFFMUUsMEJBQThHO0lB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QXNCO1lBRDdDLGlCQUdtSCxFQUFBO1lBRXJILHNGQWVjO1lBQ2hCLGlCQUFLO1lBQ0wsb0VBSUs7O1lBekNELDZGQUFvRTtZQUNwRSw4Q0FBaUMsaUNBQUEsMEJBQUEsNkNBQUE7WUFGakMsd0NBQXNCO1lBTXBCLGVBQXVDO1lBQXZDLHlEQUF1QztZQUdwQyxlQUFnRztZQUFoRyw0SEFBZ0c7WUFEaEcsNkNBQStCLG9IQUFBO1lBRy9CLGVBQW9FO1lBQXBFLGtGQUFvRTtZQUd2RSxlQUFzQztZQUF0Qyx3REFBc0MsaUNBQUE7WUFDdEMsZUFBdUM7WUFBdkMseURBQXVDO1lBRWxCLGVBQXNCO1lBQXRCLHNDQUFzQiwrR0FBQTtZQUV0QyxrSUFBMEc7WUFFaEcsZUFBNkI7WUFBN0IsK0NBQTZCO1lBaUI3QyxlQUE4QjtZQUE5QixtREFBOEI7Ozt1RkRwQnRCLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNFLGdCQUFnQjs7c0JBNkNiLE1BQU07dUJBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lFQXJDL0MsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBU0ksY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbZGF0YVRhYmxlUm93XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yb3cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yb3cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgX3RoaXMgPSB0aGlzO1xuXG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcblxuICBleHBhbmRlZDogYm9vbGVhbjtcblxuICBwcml2YXRlIF9saXN0ZW5lcnMgPSBbXTtcblxuICAvLyByb3cgc2VsZWN0aW9uOlxuICBwcml2YXRlIF9zZWxlY3RlZDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHNlbGVjdGVkKTtcbiAgfVxuXG4gIC8vIG90aGVyOlxuICBnZXQgZGlzcGxheUluZGV4KCkge1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5wYWdpbmF0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUuZGlzcGxheVBhcmFtcy5vZmZzZXQgKyB0aGlzLmluZGV4ICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXggKyAxO1xuICAgIH1cbiAgfVxuXG4gIGdldFRvb2x0aXAoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd1Rvb2x0aXApIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5yb3dUb29sdGlwKHRoaXMuaXRlbSwgdGhpcywgdGhpcy5pbmRleCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpKSBwdWJsaWMgZGF0YVRhYmxlOiBEYXRhVGFibGVDb21wb25lbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dDbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLFxuICAgICAgICAgIChldmVudCkgPT4gdGhpcy5kYXRhVGFibGUucm93Q2xpY2tlZCh0aGlzLCBldmVudCkpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93RG91YmxlQ2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RibGNsaWNrJyxcbiAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuZGF0YVRhYmxlLnJvd0RvdWJsZUNsaWNrZWQodGhpcywgZXZlbnQpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gIH1cbn1cbiIsIjx0ciBjbGFzcz1cImRhdGEtdGFibGUtcm93XCJcbiAgICBbdGl0bGVdPVwiZ2V0VG9vbHRpcCgpXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJkYXRhVGFibGUuZ2V0Um93Q29sb3IoaXRlbSwgaW5kZXgsIF90aGlzKVwiXG4gICAgW2NsYXNzLnJvdy1vZGRdPVwiaW5kZXggJSAyID09PSAwXCJcbiAgICBbY2xhc3Mucm93LWV2ZW5dPVwiaW5kZXggJSAyID09PSAxXCJcbiAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxuICAgIFtjbGFzcy5jbGlja2FibGVdPVwiZGF0YVRhYmxlLnNlbGVjdE9uUm93Q2xpY2tcIj5cbiAgPHRkIFtoaWRlXT1cIiFkYXRhVGFibGUuZXhwYW5kQ29sdW1uVmlzaWJsZVwiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cImV4cGFuZGVkID0gIWV4cGFuZGVkOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiBjbGFzcz1cInJvdy1leHBhbmQtYnV0dG9uXCJcbiAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiZXhwYW5kZWRcIlxuICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kUm93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCJcbiAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF0YVRhYmxlLmxhYmVscy5leHBhbmRSb3cucmVwbGFjZSgne2NlbGxfY29udGVudH0nLCAnJytpdGVtW2RhdGFUYWJsZS5wcmltYXJ5Q29sdW1uXSlcIj5cbiAgICAgIDxpIFtuZ0NsYXNzXT1cInsnZmEtY2FyZXQtcmlnaHQnOiAhZXhwYW5kZWQsICdmYS1jYXJldC1kb3duJzogZXhwYW5kZWR9XCIgY2xhc3M9XCJmYSBmYS1sZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgPC90ZD5cbiAgPHRkIFtoaWRlXT1cIiFkYXRhVGFibGUuaW5kZXhDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJpbmRleC1jb2x1bW5cIiBbdGV4dENvbnRlbnRdPVwiZGlzcGxheUluZGV4XCI+PC90ZD5cbiAgPHRkIFtoaWRlXT1cIiFkYXRhVGFibGUuc2VsZWN0Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwic2VsZWN0LWNvbHVtblwiPlxuICAgIDxpbnB1dFxuICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuc2VsZWN0Um93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCJcbiAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJkYXRhVGFibGUubGFiZWxzLnNlbGVjdFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiLz5cbiAgPC90ZD5cbiAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cImRhdGFUYWJsZS5jb2x1bW5zXCIgbGV0LWNvbHVtbj5cbiAgICA8dGggKm5nSWY9XCJkYXRhVGFibGUucHJpbWFyeUNvbHVtbiA9PT0gY29sdW1uLnByb3BlcnR5XCIgc2NvcGU9XCJyb3dcIiBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIiBbbmdDbGFzc109XCJjb2x1bW4uc3R5bGVDbGFzc09iamVjdFwiXG4gICAgICAgIGNsYXNzPVwiZGF0YS1jb2x1bW5cIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2x1bW4uZ2V0Q2VsbENvbG9yKF90aGlzLCBpbmRleClcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCIhY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFt0ZXh0Q29udGVudF09XCJpdGVtW2NvbHVtbi5wcm9wZXJ0eV1cIj48L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW4sIHJvdzogX3RoaXMsIGl0ZW06IGl0ZW19XCI+PC9kaXY+XG4gICAgPC90aD5cbiAgICA8dGQgKm5nSWY9XCJkYXRhVGFibGUucHJpbWFyeUNvbHVtbiAhPT0gY29sdW1uLnByb3BlcnR5XCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCIgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIlxuICAgICAgICBjbGFzcz1cImRhdGEtY29sdW1uXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sdW1uLmdldENlbGxDb2xvcihfdGhpcywgaW5kZXgpXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbdGV4dENvbnRlbnRdPVwiaXRlbVtjb2x1bW4ucHJvcGVydHldXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1uLCByb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICAgIDwvdGQ+XG4gIDwvbmctdGVtcGxhdGU+XG48L3RyPlxuPHRyICpuZ0lmPVwiZGF0YVRhYmxlLmV4cGFuZGFibGVSb3dzXCIgW2hpZGVdPVwiIWV4cGFuZGVkXCIgY2xhc3M9XCJyb3ctZXhwYW5zaW9uXCI+XG4gIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImRhdGFUYWJsZS5jb2x1bW5Db3VudFwiPlxuICAgIDxkaXYgW25nVGVtcGxhdGVPdXRsZXRdPVwiZGF0YVRhYmxlLmV4cGFuZFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntyb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICA8L3RkPlxuPC90cj5cbiJdfQ==