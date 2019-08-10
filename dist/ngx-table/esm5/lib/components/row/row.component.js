/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Inject, Input, Output, Renderer2 } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
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
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.selectedChange.emit(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableRowComponent.prototype, "displayIndex", {
        // other:
        get: 
        // other:
        /**
         * @return {?}
         */
        function () {
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
    /**
     * @return {?}
     */
    DataTableRowComponent.prototype.getTooltip = /**
     * @return {?}
     */
    function () {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    };
    /**
     * @return {?}
     */
    DataTableRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        if (this.dataTable.rowClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'click', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this_1.dataTable.rowClicked(_this_1, event); })));
        }
        if (this.dataTable.rowDoubleClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dblclick', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this_1.dataTable.rowDoubleClicked(_this_1, event); })));
        }
    };
    /**
     * @return {?}
     */
    DataTableRowComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.selected = false;
        this._listeners.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        function (fn) { return fn(); }));
    };
    DataTableRowComponent.decorators = [
        { type: Component, args: [{
                    selector: '[dataTableRow]',
                    template: "<tr class=\"data-table-row\"\n    [title]=\"getTooltip()\"\n    [style.background-color]=\"dataTable.getRowColor(item, index, _this)\"\n    [class.row-odd]=\"index % 2 === 0\"\n    [class.row-even]=\"index % 2 === 1\"\n    [class.selected]=\"selected\"\n    [class.clickable]=\"dataTable.selectOnRowClick\">\n  <td [hide]=\"!dataTable.expandColumnVisible\">\n    <button (click)=\"expanded = !expanded; $event.stopPropagation()\" class=\"row-expand-button\"\n         [attr.aria-expanded]=\"expanded\"\n         [title]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n         [attr.aria-label]=\"dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\">\n      <i [ngClass]=\"{'fa-caret-right': !expanded, 'fa-caret-down': expanded}\" class=\"fa fa-lg\" aria-hidden=\"true\"></i>\n    </button>\n  </td>\n  <td [hide]=\"!dataTable.indexColumnVisible\" class=\"index-column\" [textContent]=\"displayIndex\"></td>\n  <td [hide]=\"!dataTable.selectColumnVisible\" class=\"select-column\">\n    <input type=\"checkbox\" [(ngModel)]=\"selected\"\n           [title]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"\n           [attr.aria-label]=\"dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])\"/>\n  </td>\n  <ng-template ngFor [ngForOf]=\"dataTable.columns\" let-column>\n    <th *ngIf=\"dataTable.primaryColumn === column.property\" scope=\"row\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </th>\n    <td *ngIf=\"dataTable.primaryColumn !== column.property\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\"\n        class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n      <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n      <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\n           [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </td>\n  </ng-template>\n</tr>\n<tr *ngIf=\"dataTable.expandableRows\" [hide]=\"!expanded\" class=\"row-expansion\">\n  <td [attr.colspan]=\"dataTable.columnCount\">\n    <div [ngTemplateOutlet]=\"dataTable.expandTemplate\" [ngTemplateOutletContext]=\"{row: _this, item: item}\"></div>\n  </td>\n</tr>\n",
                    styles: [".select-column{text-align:center}.row-expand-button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable{cursor:pointer}th{font-weight:initial}"]
                }] }
    ];
    /** @nocollapse */
    DataTableRowComponent.ctorParameters = function () { return [
        { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return DataTableComponent; })),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    DataTableRowComponent.propDecorators = {
        item: [{ type: Input }],
        index: [{ type: Input }],
        selectedChange: [{ type: Output }]
    };
    return DataTableRowComponent;
}());
export { DataTableRowComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFOUQ7SUE4Q0UsK0JBQWlFLFNBQTZCLEVBQzFFLFFBQW1CLEVBQVUsVUFBc0I7UUFETixjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUMxRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXhDaEUsVUFBSyxHQUFHLElBQUksQ0FBQztRQU9aLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFLZCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUE0QjRCLENBQUM7SUExQjNFLHNCQUFJLDJDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFhLFFBQVE7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BTEE7SUFRRCxzQkFBSSwrQ0FBWTtRQURoQixTQUFTOzs7Ozs7UUFDVDtZQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQzdEO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDdkI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFLRCx3Q0FBUTs7O0lBQVI7UUFBQSxtQkFhQztRQVpDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU87Ozs7WUFDekQsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFJLEVBQUUsS0FBSyxDQUFDLEVBQXRDLENBQXNDLEVBQUMsQ0FDckQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVTs7OztZQUM1RCxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBSSxFQUFFLEtBQUssQ0FBQyxFQUE1QyxDQUE0QyxFQUFDLENBQzNELENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsRUFBRSxFQUFKLENBQUksRUFBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQW5FRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsOHNGQUFtQzs7aUJBRXBDOzs7O2dCQU5RLGtCQUFrQix1QkFnRFosTUFBTSxTQUFDLFVBQVU7Ozt3QkFBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLEVBQUM7Z0JBbER4RCxTQUFTO2dCQVJULFVBQVU7Ozt1QkFxQlQsS0FBSzt3QkFDTCxLQUFLO2lDQVNMLE1BQU07O0lBaURULDRCQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0EvRFkscUJBQXFCOzs7SUFFaEMsc0NBQW9COztJQUVwQixxQ0FBbUI7O0lBQ25CLHNDQUF1Qjs7SUFFdkIseUNBQWtCOzs7OztJQUVsQiwyQ0FBd0I7Ozs7O0lBR3hCLDBDQUEyQjs7SUFFM0IsK0NBQThDOztJQTJCbEMsMENBQWtGOzs7OztJQUNsRix5Q0FBMkI7Ozs7O0lBQUUsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tkYXRhVGFibGVSb3ddJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jvdy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBfdGhpcyA9IHRoaXM7XG5cbiAgQElucHV0KCkgaXRlbTogYW55O1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIGV4cGFuZGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IFtdO1xuXG4gIC8vIHJvdyBzZWxlY3Rpb246XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWQpO1xuICB9XG5cbiAgLy8gb3RoZXI6XG4gIGdldCBkaXNwbGF5SW5kZXgoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5kaXNwbGF5UGFyYW1zLm9mZnNldCArIHRoaXMuaW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleCArIDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG9vbHRpcCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93VG9vbHRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnJvd1Rvb2x0aXAodGhpcy5pdGVtLCB0aGlzLCB0aGlzLmluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd0NsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmRhdGFUYWJsZS5yb3dDbGlja2VkKHRoaXMsIGV2ZW50KSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dEb3VibGVDbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGJsY2xpY2snLFxuICAgICAgICAgIChldmVudCkgPT4gdGhpcy5kYXRhVGFibGUucm93RG91YmxlQ2xpY2tlZCh0aGlzLCBldmVudCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgfVxufVxuIl19