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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQzs7O2dDQVVwRCxFQUFFO3dCQUlULEtBQUs7eUJBQ0osS0FBSzt1QkFPUCxJQUFJOzs7Ozs7O0lBS3ZCLCtDQUFZOzs7OztJQUFaLFVBQWEsR0FBMEIsRUFBRSxLQUFhO1FBQ3BELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsbUJBQWUsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRTtLQUNGOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOzs7O0lBRU8saURBQWM7Ozs7UUFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzdDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDM0U7U0FDRjtRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsZ0JBQWdCO2dCQUNuQixHQUFDLElBQUksQ0FBQyxVQUFVLElBQUcsSUFBSTttQkFDeEIsQ0FBQztTQUNIOzs7O2dCQTdDSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7Ozt5QkFNRSxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzt3QkFHTCxLQUFLOzBCQUNMLEtBQUs7K0JBRUwsWUFBWSxTQUFDLGVBQWU7aUNBQzVCLFlBQVksU0FBQyxpQkFBaUI7O21DQXpCakM7O1NBUWEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFUYWJsZVJvd0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQge0NlbGxDYWxsYmFja30gZnJvbSAnLi4vLi4vdHlwZXMvY2VsbC1jYWxsYmFjay50eXBlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLWNvbHVtbidcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHN0eWxlQ2xhc3NPYmplY3QgPSB7fTsgLy8gZm9yIFtuZ0NsYXNzXVxuXG4gIC8vIGluaXQ6XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBzb3J0YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSByZXNpemFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJvcGVydHk6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjZWxsQ29sb3JzOiBDZWxsQ2FsbGJhY2s7XG5cbiAgLy8gaW5pdCBhbmQgc3RhdGU6XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUNlbGwnKSBjZWxsVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUhlYWRlcicpIGhlYWRlclRlbXBsYXRlOiBFbGVtZW50UmVmO1xuXG4gIGdldENlbGxDb2xvcihyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNlbGxDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Q2VsbENhbGxiYWNrPnRoaXMuY2VsbENvbG9ycykocm93Lml0ZW0sIHJvdywgdGhpcywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXRDZWxsQ2xhc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRDZWxsQ2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLnN0eWxlQ2xhc3MgJiYgdGhpcy5wcm9wZXJ0eSkge1xuICAgICAgaWYgKC9eW2EtekEtWjAtOV9dKyQvLnRlc3QodGhpcy5wcm9wZXJ0eSkpIHtcbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJ2NvbHVtbi0nICsgdGhpcy5wcm9wZXJ0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9ICdjb2x1bW4tJyArIHRoaXMucHJvcGVydHkucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3R5bGVDbGFzcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3NPYmplY3QgPSB7XG4gICAgICAgIFt0aGlzLnN0eWxlQ2xhc3NdOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIl19