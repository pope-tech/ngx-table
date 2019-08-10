/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Inject, Input, Output, Renderer2 } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
export class DataTableRowComponent {
    /**
     * @param {?} dataTable
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(dataTable, renderer, elementRef) {
        this.dataTable = dataTable;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._this = this;
        this._listeners = [];
        this.selectedChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        this._selected = selected;
        this.selectedChange.emit(selected);
    }
    // other:
    /**
     * @return {?}
     */
    get displayIndex() {
        if (this.dataTable.pagination) {
            return this.dataTable.displayParams.offset + this.index + 1;
        }
        else {
            return this.index + 1;
        }
    }
    /**
     * @return {?}
     */
    getTooltip() {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.dataTable.rowClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'click', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => this.dataTable.rowClicked(this, event))));
        }
        if (this.dataTable.rowDoubleClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dblclick', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => this.dataTable.rowDoubleClicked(this, event))));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.selected = false;
        this._listeners.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
    }
}
DataTableRowComponent.decorators = [
    { type: Component, args: [{
                selector: '[dataTableRow]',
                template: "<tr class=\"data-table-row\"\n    [title]=\"getTooltip()\"\n    [style.background-color]=\"dataTable.getRowColor(item, index, _this)\"\n    [class.row-odd]=\"index % 2 === 0\"\n    [class.row-even]=\"index % 2 === 1\"\n    [class.selected]=\"selected\"\n    [class.clickable]=\"dataTable.selectOnRowClick\">\n  <td [hide]=\"!dataTable.expandColumnVisible\">\n    <button (click)=\"expanded = !expanded; $event.stopPropagation()\" class=\"row-expand-button\"\n         [attr.aria-expanded]=\"expanded\"\n         [title]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n         [attr.aria-label]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\">\n      <i [ngClass]=\"{'fa-caret-right': !expanded, 'fa-caret-down': expanded}\" class=\"fa fa-lg\" aria-hidden=\"true\"></i>\n    </button>\n  </td>\n  <td [hide]=\"!dataTable.indexColumnVisible\" class=\"index-column\" [textContent]=\"displayIndex\"></td>\n  <td [hide]=\"!dataTable.selectColumnVisible\" class=\"select-column\">\n    <input type=\"checkbox\" [(ngModel)]=\"selected\"\n           [title]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n           [attr.aria-label]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"/>\n  </td>\n  <ng-template ngFor [ngForOf]=\"dataTable.columns\" let-column>\n    <th *ngIf=\"dataTable.primaryColumn === column.property\" scope=\"row\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </th>\n    <td *ngIf=\"dataTable.primaryColumn !== column.property\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </td>\n  </ng-template>\n</tr>\n<tr *ngIf=\"dataTable.expandableRows\" [hide]=\"!expanded\" class=\"row-expansion\">\n  <td [attr.colspan]=\"dataTable.columnCount\">\n    <div [ngTemplateOutlet]=\"dataTable.expandTemplate\" [ngTemplateOutletContext]=\"{row: _this, item: item}\"></div>\n  </td>\n</tr>\n",
                styles: [".select-column{text-align:center}.row-expand-button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable{cursor:pointer}th{font-weight:initial}"]
            }] }
];
/** @nocollapse */
DataTableRowComponent.ctorParameters = () => [
    { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DataTableComponent)),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
DataTableRowComponent.propDecorators = {
    item: [{ type: Input }],
    index: [{ type: Input }],
    selectedChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DataTableRowComponent.prototype._this;
    /** @type {?} */
    DataTableRowComponent.prototype.item;
    /** @type {?} */
    DataTableRowComponent.prototype.index;
    /** @type {?} */
    DataTableRowComponent.prototype.expanded;
    /**
     * @type {?}
     * @private
     */
    DataTableRowComponent.prototype._listeners;
    /**
     * @type {?}
     * @private
     */
    DataTableRowComponent.prototype._selected;
    /** @type {?} */
    DataTableRowComponent.prototype.selectedChange;
    /** @type {?} */
    DataTableRowComponent.prototype.dataTable;
    /**
     * @type {?}
     * @private
     */
    DataTableRowComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DataTableRowComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPOUQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBeUNoQyxZQUFpRSxTQUE2QixFQUMxRSxRQUFtQixFQUFVLFVBQXNCO1FBRE4sY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDMUUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUF4Q2hFLFVBQUssR0FBRyxJQUFJLENBQUM7UUFPWixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBS2QsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBNEI0QixDQUFDOzs7O0lBMUIzRSxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBR0QsSUFBSSxZQUFZO1FBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvRDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUtELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPOzs7O1lBQ3pELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FDckQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVTs7OztZQUM1RCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FDM0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7UUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBbkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw4c0ZBQW1DOzthQUVwQzs7OztZQU5RLGtCQUFrQix1QkFnRFosTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQztZQWxEeEQsU0FBUztZQVJULFVBQVU7OzttQkFxQlQsS0FBSztvQkFDTCxLQUFLOzZCQVNMLE1BQU07Ozs7SUFaUCxzQ0FBb0I7O0lBRXBCLHFDQUFtQjs7SUFDbkIsc0NBQXVCOztJQUV2Qix5Q0FBa0I7Ozs7O0lBRWxCLDJDQUF3Qjs7Ozs7SUFHeEIsMENBQTJCOztJQUUzQiwrQ0FBOEM7O0lBMkJsQywwQ0FBa0Y7Ozs7O0lBQ2xGLHlDQUEyQjs7Ozs7SUFBRSwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2RhdGFUYWJsZVJvd10nLFxuICB0ZW1wbGF0ZVVybDogJy4vcm93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm93LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIF90aGlzID0gdGhpcztcblxuICBASW5wdXQoKSBpdGVtOiBhbnk7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfbGlzdGVuZXJzID0gW107XG5cbiAgLy8gcm93IHNlbGVjdGlvbjpcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChzZWxlY3RlZCk7XG4gIH1cblxuICAvLyBvdGhlcjpcbiAgZ2V0IGRpc3BsYXlJbmRleCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucGFnaW5hdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLmRpc3BsYXlQYXJhbXMub2Zmc2V0ICsgdGhpcy5pbmRleCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV4ICsgMTtcbiAgICB9XG4gIH1cblxuICBnZXRUb29sdGlwKCkge1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dUb29sdGlwKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUucm93VG9vbHRpcCh0aGlzLml0ZW0sIHRoaXMsIHRoaXMuaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93Q2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJyxcbiAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuZGF0YVRhYmxlLnJvd0NsaWNrZWQodGhpcywgZXZlbnQpKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd0RvdWJsZUNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYmxjbGljaycsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmRhdGFUYWJsZS5yb3dEb3VibGVDbGlja2VkKHRoaXMsIGV2ZW50KSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICB9XG59XG4iXX0=