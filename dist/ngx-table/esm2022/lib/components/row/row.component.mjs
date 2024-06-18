import { Component, EventEmitter, forwardRef, Inject, Input, Output } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../utils/hide";
import * as i4 from "../table/table.component";
const _c0 = ["dataTableRow", ""];
const _c1 = (a0, a1) => ({ "fa-caret-right": a0, "fa-caret-down": a1 });
const _c2 = (a0, a1, a2) => ({ column: a0, row: a1, item: a2 });
const _c3 = (a0, a1) => ({ row: a0, item: a1 });
function DataTableRowComponent_ng_template_7_th_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r1.item[column_r1.property]);
} }
function DataTableRowComponent_ng_template_7_th_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", column_r1.cellTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c2, column_r1, ctx_r1._this, ctx_r1.item));
} }
function DataTableRowComponent_ng_template_7_th_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_th_0_div_1_Template, 1, 1, "div", 12)(2, DataTableRowComponent_ng_template_7_th_0_div_2_Template, 1, 6, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", column_r1.getCellColor(ctx_r1._this, ctx_r1.index));
    i0.ɵɵproperty("hide", !column_r1.visible)("ngClass", column_r1.styleClassObject);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !column_r1.cellTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r1.cellTemplate);
} }
function DataTableRowComponent_ng_template_7_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r1.item[column_r1.property]);
} }
function DataTableRowComponent_ng_template_7_td_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", column_r1.cellTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c2, column_r1, ctx_r1._this, ctx_r1.item));
} }
function DataTableRowComponent_ng_template_7_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtemplate(1, DataTableRowComponent_ng_template_7_td_1_div_1_Template, 1, 1, "div", 12)(2, DataTableRowComponent_ng_template_7_td_1_div_2_Template, 1, 6, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", column_r1.getCellColor(ctx_r1._this, ctx_r1.index));
    i0.ɵɵproperty("hide", !column_r1.visible)("ngClass", column_r1.styleClassObject);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !column_r1.cellTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r1.cellTemplate);
} }
function DataTableRowComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataTableRowComponent_ng_template_7_th_0_Template, 3, 6, "th", 9)(1, DataTableRowComponent_ng_template_7_td_1_Template, 3, 6, "td", 10);
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.dataTable.primaryColumn === column_r1.property);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dataTable.primaryColumn !== column_r1.property);
} }
function DataTableRowComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 17)(1, "td");
    i0.ɵɵelement(2, "div", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hide", !ctx_r1.expanded);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r1.dataTable.columnCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.dataTable.expandTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c3, ctx_r1._this, ctx_r1.item));
} }
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableRowComponent, selectors: [["", "dataTableRow", ""]], inputs: { item: "item", index: "index" }, outputs: { selectedChange: "selectedChange" }, attrs: _c0, decls: 9, vars: 28, consts: [[1, "data-table-row", 3, "title"], [3, "hide"], [1, "row-expand-button", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-lg", 3, "ngClass"], [1, "index-column", 3, "hide", "textContent"], [1, "select-column", 3, "hide"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "hide", "title"], ["ngFor", "", 3, "ngForOf"], ["class", "row-expansion", 3, "hide", 4, "ngIf"], ["scope", "row", "class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["class", "data-column", 3, "hide", "ngClass", "background-color", 4, "ngIf"], ["scope", "row", 1, "data-column", 3, "hide", "ngClass"], [3, "textContent", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "textContent"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "data-column", 3, "hide", "ngClass"], [1, "row-expansion", 3, "hide"]], template: function DataTableRowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tr", 0)(1, "td", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function DataTableRowComponent_Template_button_click_2_listener($event) { ctx.expanded = !ctx.expanded; return $event.stopPropagation(); });
            i0.ɵɵelement(3, "i", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(4, "td", 4);
            i0.ɵɵelementStart(5, "td", 5)(6, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function DataTableRowComponent_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, DataTableRowComponent_ng_template_7_Template, 2, 2, "ng-template", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, DataTableRowComponent_tr_8_Template, 3, 7, "tr", 8);
        } if (rf & 2) {
            i0.ɵɵstyleProp("background-color", ctx.dataTable.getRowColor(ctx.item, ctx.index, ctx._this));
            i0.ɵɵclassProp("row-odd", ctx.index % 2 === 0)("row-even", ctx.index % 2 === 1)("selected", ctx.selected)("clickable", ctx.dataTable.selectOnRowClick);
            i0.ɵɵproperty("title", ctx.getTooltip());
            i0.ɵɵadvance();
            i0.ɵɵproperty("hide", !ctx.dataTable.expandColumnVisible);
            i0.ɵɵadvance();
            i0.ɵɵproperty("title", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
            i0.ɵɵattribute("aria-expanded", ctx.expanded)("aria-label", ctx.dataTable.labels.expandRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(25, _c1, !ctx.expanded, ctx.expanded));
            i0.ɵɵadvance();
            i0.ɵɵproperty("hide", !ctx.dataTable.indexColumnVisible)("textContent", ctx.displayIndex);
            i0.ɵɵadvance();
            i0.ɵɵproperty("hide", !ctx.dataTable.selectColumnVisible);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.selected);
            i0.ɵɵproperty("hide", ctx.dataTable.selectVisibilityKey !== "" && ctx.item[ctx.dataTable.selectVisibilityKey])("title", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
            i0.ɵɵattribute("aria-label", ctx.dataTable.labels.selectRow.replace("{cell_content}", "" + ctx.item[ctx.dataTable.primaryColumn]));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.dataTable.columns);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataTable.expandableRows);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.HideDirective], styles: [".select-column[_ngcontent-%COMP%]{text-align:center}.row-expand-button[_ngcontent-%COMP%]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable[_ngcontent-%COMP%]{cursor:pointer}th[_ngcontent-%COMP%]{font-weight:initial}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableRowComponent, [{
        type: Component,
        args: [{ selector: '[dataTableRow]', template: "<tr class=\"data-table-row\"\n    [title]=\"getTooltip()\"\n    [style.background-color]=\"dataTable.getRowColor(item, index, _this)\"\n    [class.row-odd]=\"index % 2 === 0\"\n    [class.row-even]=\"index % 2 === 1\"\n    [class.selected]=\"selected\"\n    [class.clickable]=\"dataTable.selectOnRowClick\">\n  <td [hide]=\"!dataTable.expandColumnVisible\">\n    <button (click)=\"expanded = !expanded; $event.stopPropagation()\" class=\"row-expand-button\"\n         [attr.aria-expanded]=\"expanded\"\n         [title]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n         [attr.aria-label]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\">\n      <i [ngClass]=\"{'fa-caret-right': !expanded, 'fa-caret-down': expanded}\" class=\"fa fa-lg\" aria-hidden=\"true\"></i>\n    </button>\n  </td>\n  <td [hide]=\"!dataTable.indexColumnVisible\" class=\"index-column\" [textContent]=\"displayIndex\"></td>\n  <td [hide]=\"!dataTable.selectColumnVisible\" class=\"select-column\">\n    <input\n           type=\"checkbox\" [(ngModel)]=\"selected\"\n           [hide]=\"dataTable.selectVisibilityKey !== '' && item[dataTable.selectVisibilityKey]\"\n           [title]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n           [attr.aria-label]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"/>\n  </td>\n  <ng-template ngFor [ngForOf]=\"dataTable.columns\" let-column>\n    <th *ngIf=\"dataTable.primaryColumn === column.property\" scope=\"row\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </th>\n    <td *ngIf=\"dataTable.primaryColumn !== column.property\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </td>\n  </ng-template>\n</tr>\n<tr *ngIf=\"dataTable.expandableRows\" [hide]=\"!expanded\" class=\"row-expansion\">\n  <td [attr.colspan]=\"dataTable.columnCount\">\n    <div [ngTemplateOutlet]=\"dataTable.expandTemplate\" [ngTemplateOutletContext]=\"{row: _this, item: item}\"></div>\n  </td>\n</tr>\n", styles: [".select-column{text-align:center}.row-expand-button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable{cursor:pointer}th{font-weight:initial}\n"] }]
    }], () => [{ type: i4.DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }], { item: [{
            type: Input
        }], index: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataTableRowComponent, { className: "DataTableRowComponent", filePath: "lib/components/row/row.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvcm93L3Jvdy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7OztJQ2V4RCwwQkFBOEU7Ozs7SUFBNUMsNkRBQXFDOzs7SUFDdkUsMEJBQ2dGOzs7O0lBQTNFLEFBRDRCLHlEQUF3Qyw2RkFDQTs7O0lBTDNFLDhCQUVpRTtJQUUvRCxBQURBLDBGQUF3RSw2RUFFRTtJQUM1RSxpQkFBSzs7OztJQUpELHNGQUE0RDtJQUY2QixBQUF6Qix5Q0FBd0IsdUNBQW9DO0lBR3hILGNBQTBCO0lBQTFCLDhDQUEwQjtJQUMxQixjQUF5QjtJQUF6Qiw2Q0FBeUI7OztJQU0vQiwwQkFBOEU7Ozs7SUFBNUMsNkRBQXFDOzs7SUFDdkUsMEJBQ2dGOzs7O0lBQTNFLEFBRDRCLHlEQUF3Qyw2RkFDQTs7O0lBTDNFLDhCQUVpRTtJQUUvRCxBQURBLDBGQUF3RSw2RUFFRTtJQUM1RSxpQkFBSzs7OztJQUpELHNGQUE0RDtJQUZpQixBQUF6Qix5Q0FBd0IsdUNBQW9DO0lBRzVHLGNBQTBCO0lBQTFCLDhDQUEwQjtJQUMxQixjQUF5QjtJQUF6Qiw2Q0FBeUI7OztJQUpqQyxBQVBBLGtGQUVpRSxzRUFPQTs7OztJQVQ1RCw0RUFBaUQ7SUFPakQsY0FBaUQ7SUFBakQsNEVBQWlEOzs7SUFVeEQs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eEcsc0lBQStCLHdCQUF3QixJQUFDO1lBSTlELHVCQUFnSDtZQUVwSCxBQURFLGlCQUFTLEVBQ047WUFDTCx3QkFBa0c7WUFFaEcsQUFERiw2QkFBa0UsZUFLbUQ7WUFINUYsK01BQXNCO1lBSS9DLEFBTEUsaUJBSW1ILEVBQ2hIO1lBQ0wsc0ZBQTREO1lBZ0I5RCxpQkFBSztZQUNMLG9FQUE4RTs7WUF0QzFFLDZGQUFvRTtZQUlwRSxBQURBLEFBREEsQUFEQSw4Q0FBaUMsaUNBQ0MsMEJBQ1AsNkNBQ21CO1lBTDlDLHdDQUFzQjtZQU1wQixjQUF1QztZQUF2Qyx5REFBdUM7WUFHcEMsY0FBZ0c7WUFBaEcsNEhBQWdHOztZQUVoRyxjQUFvRTtZQUFwRSxrRkFBb0U7WUFHdkUsY0FBc0M7WUFBc0IsQUFBNUQsd0RBQXNDLGlDQUFrRDtZQUN4RixjQUF1QztZQUF2Qyx5REFBdUM7WUFFbEIsY0FBc0I7WUFBdEIsNENBQXNCO1lBRXRDLEFBREEsOEdBQW9GLCtHQUNZOztZQUd0RixjQUE2QjtZQUE3QiwrQ0FBNkI7WUFpQjdDLGNBQThCO1lBQTlCLG1EQUE4Qjs7O2lGRHJCdEIscUJBQXFCO2NBTGpDLFNBQVM7MkJBQ0UsZ0JBQWdCOztzQkE2Q2IsTUFBTTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7c0VBckMvQyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFTSSxjQUFjO2tCQUF2QixNQUFNOztrRkFkSSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2RhdGFUYWJsZVJvd10nLFxuICB0ZW1wbGF0ZVVybDogJy4vcm93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm93LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIF90aGlzID0gdGhpcztcblxuICBASW5wdXQoKSBpdGVtOiBhbnk7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfbGlzdGVuZXJzID0gW107XG5cbiAgLy8gcm93IHNlbGVjdGlvbjpcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChzZWxlY3RlZCk7XG4gIH1cblxuICAvLyBvdGhlcjpcbiAgZ2V0IGRpc3BsYXlJbmRleCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucGFnaW5hdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLmRpc3BsYXlQYXJhbXMub2Zmc2V0ICsgdGhpcy5pbmRleCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV4ICsgMTtcbiAgICB9XG4gIH1cblxuICBnZXRUb29sdGlwKCkge1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dUb29sdGlwKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUucm93VG9vbHRpcCh0aGlzLml0ZW0sIHRoaXMsIHRoaXMuaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93Q2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJyxcbiAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuZGF0YVRhYmxlLnJvd0NsaWNrZWQodGhpcywgZXZlbnQpKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd0RvdWJsZUNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYmxjbGljaycsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmRhdGFUYWJsZS5yb3dEb3VibGVDbGlja2VkKHRoaXMsIGV2ZW50KSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICB9XG59XG4iLCI8dHIgY2xhc3M9XCJkYXRhLXRhYmxlLXJvd1wiXG4gICAgW3RpdGxlXT1cImdldFRvb2x0aXAoKVwiXG4gICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiZGF0YVRhYmxlLmdldFJvd0NvbG9yKGl0ZW0sIGluZGV4LCBfdGhpcylcIlxuICAgIFtjbGFzcy5yb3ctb2RkXT1cImluZGV4ICUgMiA9PT0gMFwiXG4gICAgW2NsYXNzLnJvdy1ldmVuXT1cImluZGV4ICUgMiA9PT0gMVwiXG4gICAgW2NsYXNzLnNlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICBbY2xhc3MuY2xpY2thYmxlXT1cImRhdGFUYWJsZS5zZWxlY3RPblJvd0NsaWNrXCI+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLmV4cGFuZENvbHVtblZpc2libGVcIj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJleHBhbmRlZCA9ICFleHBhbmRlZDsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgY2xhc3M9XCJyb3ctZXhwYW5kLWJ1dHRvblwiXG4gICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImV4cGFuZGVkXCJcbiAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiXG4gICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kUm93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCI+XG4gICAgICA8aSBbbmdDbGFzc109XCJ7J2ZhLWNhcmV0LXJpZ2h0JzogIWV4cGFuZGVkLCAnZmEtY2FyZXQtZG93bic6IGV4cGFuZGVkfVwiIGNsYXNzPVwiZmEgZmEtbGdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gIDwvdGQ+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLmluZGV4Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiaW5kZXgtY29sdW1uXCIgW3RleHRDb250ZW50XT1cImRpc3BsYXlJbmRleFwiPjwvdGQ+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLnNlbGVjdENvbHVtblZpc2libGVcIiBjbGFzcz1cInNlbGVjdC1jb2x1bW5cIj5cbiAgICA8aW5wdXRcbiAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgIFtoaWRlXT1cImRhdGFUYWJsZS5zZWxlY3RWaXNpYmlsaXR5S2V5ICE9PSAnJyAmJiBpdGVtW2RhdGFUYWJsZS5zZWxlY3RWaXNpYmlsaXR5S2V5XVwiXG4gICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLnNlbGVjdFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF0YVRhYmxlLmxhYmVscy5zZWxlY3RSb3cucmVwbGFjZSgne2NlbGxfY29udGVudH0nLCAnJytpdGVtW2RhdGFUYWJsZS5wcmltYXJ5Q29sdW1uXSlcIi8+XG4gIDwvdGQ+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJkYXRhVGFibGUuY29sdW1uc1wiIGxldC1jb2x1bW4+XG4gICAgPHRoICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gPT09IGNvbHVtbi5wcm9wZXJ0eVwiIHNjb3BlPVwicm93XCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCIgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIlxuICAgICAgICBjbGFzcz1cImRhdGEtY29sdW1uXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sdW1uLmdldENlbGxDb2xvcihfdGhpcywgaW5kZXgpXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbdGV4dENvbnRlbnRdPVwiaXRlbVtjb2x1bW4ucHJvcGVydHldXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1uLCByb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICAgIDwvdGg+XG4gICAgPHRkICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gIT09IGNvbHVtbi5wcm9wZXJ0eVwiIFtoaWRlXT1cIiFjb2x1bW4udmlzaWJsZVwiIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCJcbiAgICAgICAgY2xhc3M9XCJkYXRhLWNvbHVtblwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbHVtbi5nZXRDZWxsQ29sb3IoX3RoaXMsIGluZGV4KVwiPlxuICAgICAgPGRpdiAqbmdJZj1cIiFjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW3RleHRDb250ZW50XT1cIml0ZW1bY29sdW1uLnByb3BlcnR5XVwiPjwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbiwgcm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgICA8L3RkPlxuICA8L25nLXRlbXBsYXRlPlxuPC90cj5cbjx0ciAqbmdJZj1cImRhdGFUYWJsZS5leHBhbmRhYmxlUm93c1wiIFtoaWRlXT1cIiFleHBhbmRlZFwiIGNsYXNzPVwicm93LWV4cGFuc2lvblwiPlxuICA8dGQgW2F0dHIuY29sc3Bhbl09XCJkYXRhVGFibGUuY29sdW1uQ291bnRcIj5cbiAgICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRhdGFUYWJsZS5leHBhbmRUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7cm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgPC90ZD5cbjwvdHI+XG4iXX0=