/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ContentChild, Directive, ElementRef, Input } from '@angular/core';
var DataTableColumnDirective = /** @class */ (function () {
    function DataTableColumnDirective() {
        this.styleClassObject = {};
        this.sortable = false;
        this.resizable = false;
        this.visible = true;
    }
    /**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    DataTableColumnDirective.prototype.getCellColor = /**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    function (row, index) {
        if (this.cellColors !== undefined) {
            return (/** @type {?} */ (this.cellColors))(row.item, row, this, index);
        }
    };
    /**
     * @return {?}
     */
    DataTableColumnDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._initCellClass();
    };
    /**
     * @return {?}
     */
    DataTableColumnDirective.prototype._initCellClass = /**
     * @return {?}
     */
    function () {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            }
            else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }
        if (this.styleClass != null) {
            this.styleClassObject = (_a = {},
                _a[this.styleClass] = true,
                _a);
        }
        var _a;
    };
    DataTableColumnDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'data-table-column'
                },] },
    ];
    DataTableColumnDirective.propDecorators = {
        header: [{ type: Input }],
        sortable: [{ type: Input }],
        resizable: [{ type: Input }],
        property: [{ type: Input }],
        styleClass: [{ type: Input }],
        cellColors: [{ type: Input }],
        width: [{ type: Input }],
        visible: [{ type: Input }],
        cellTemplate: [{ type: ContentChild, args: ['dataTableCell',] }],
        headerTemplate: [{ type: ContentChild, args: ['dataTableHeader',] }]
    };
    return DataTableColumnDirective;
}());
export { DataTableColumnDirective };
if (false) {
    /** @type {?} */
    DataTableColumnDirective.prototype.styleClassObject;
    /** @type {?} */
    DataTableColumnDirective.prototype.header;
    /** @type {?} */
    DataTableColumnDirective.prototype.sortable;
    /** @type {?} */
    DataTableColumnDirective.prototype.resizable;
    /** @type {?} */
    DataTableColumnDirective.prototype.property;
    /** @type {?} */
    DataTableColumnDirective.prototype.styleClass;
    /** @type {?} */
    DataTableColumnDirective.prototype.cellColors;
    /** @type {?} */
    DataTableColumnDirective.prototype.width;
    /** @type {?} */
    DataTableColumnDirective.prototype.visible;
    /** @type {?} */
    DataTableColumnDirective.prototype.cellTemplate;
    /** @type {?} */
    DataTableColumnDirective.prototype.headerTemplate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2NvbHVtbi9jb2x1bW4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOzs7Z0NBVXBELEVBQUU7d0JBSVQsS0FBSzt5QkFDSixLQUFLO3VCQU9QLElBQUk7Ozs7Ozs7SUFLdkIsK0NBQVk7Ozs7O0lBQVosVUFBYSxHQUEwQixFQUFFLEtBQWE7UUFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxtQkFBZSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BFO0tBQ0Y7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFTyxpREFBYzs7OztRQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDN0M7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUMzRTtTQUNGO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ25CLEdBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRyxJQUFJO21CQUN4QixDQUFDO1NBQ0g7Ozs7Z0JBN0NKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7O3lCQU1FLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3dCQUdMLEtBQUs7MEJBQ0wsS0FBSzsrQkFFTCxZQUFZLFNBQUMsZUFBZTtpQ0FDNUIsWUFBWSxTQUFDLGlCQUFpQjs7bUNBekJqQzs7U0FRYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVRhYmxlUm93Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7Q2VsbENhbGxiYWNrfSBmcm9tICcuLi8uLi90eXBlcy9jZWxsLWNhbGxiYWNrLnR5cGUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtY29sdW1uJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc3R5bGVDbGFzc09iamVjdCA9IHt9OyAvLyBmb3IgW25nQ2xhc3NdXG5cbiAgLy8gaW5pdDpcbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNvcnRhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlc2l6YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBwcm9wZXJ0eTogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNlbGxDb2xvcnM6IENlbGxDYWxsYmFjaztcblxuICAvLyBpbml0IGFuZCBzdGF0ZTpcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgdmlzaWJsZSA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlQ2VsbCcpIGNlbGxUZW1wbGF0ZTogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlSGVhZGVyJykgaGVhZGVyVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0Q2VsbENvbG9yKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY2VsbENvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKDxDZWxsQ2FsbGJhY2s+dGhpcy5jZWxsQ29sb3JzKShyb3cuaXRlbSwgcm93LCB0aGlzLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5faW5pdENlbGxDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdENlbGxDbGFzcygpIHtcbiAgICBpZiAoIXRoaXMuc3R5bGVDbGFzcyAmJiB0aGlzLnByb3BlcnR5KSB7XG4gICAgICBpZiAoL15bYS16QS1aMC05X10rJC8udGVzdCh0aGlzLnByb3BlcnR5KSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAnY29sdW1uLScgKyB0aGlzLnByb3BlcnR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJ2NvbHVtbi0nICsgdGhpcy5wcm9wZXJ0eS5yZXBsYWNlKC9bXmEtekEtWjAtOV9dL2csICcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdHlsZUNsYXNzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzc09iamVjdCA9IHtcbiAgICAgICAgW3RoaXMuc3R5bGVDbGFzc106IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iXX0=