/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild, Directive, ElementRef, Input } from '@angular/core';
export class DataTableColumnDirective {
    constructor() {
        this.styleClassObject = {}; // for [ngClass]
        this.sortable = false;
        this.resizable = false;
        this.visible = true;
    }
    /**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    getCellColor(row, index) {
        if (this.cellColors !== undefined) {
            return ((/** @type {?} */ (this.cellColors)))(row.item, row, this, index);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._initCellClass();
    }
    /**
     * @private
     * @return {?}
     */
    _initCellClass() {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            }
            else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }
        if (this.styleClass != null) {
            this.styleClassObject = {
                [this.styleClass]: true
            };
        }
    }
}
DataTableColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'data-table-column'
            },] }
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
    cellTemplate: [{ type: ContentChild, args: ['dataTableCell', { static: true },] }],
    headerTemplate: [{ type: ContentChild, args: ['dataTableHeader', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQVFqRixNQUFNLE9BQU8sd0JBQXdCO0lBSHJDO1FBS1UscUJBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUMsZ0JBQWdCO1FBSXRDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQU9sQixZQUFPLEdBQUcsSUFBSSxDQUFDO0lBOEIxQixDQUFDOzs7Ozs7SUF6QkMsWUFBWSxDQUFDLEdBQTBCLEVBQUUsS0FBYTtRQUNwRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxtQkFBYyxJQUFJLENBQUMsVUFBVSxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDM0U7U0FDRjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHO2dCQUN0QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJO2FBQ3hCLENBQUM7U0FDSDtJQUNILENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7O3FCQU1FLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO29CQUdMLEtBQUs7c0JBQ0wsS0FBSzsyQkFFTCxZQUFZLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFDOUMsWUFBWSxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7Ozs7OztJQWZqRCxvREFBOEI7O0lBRzlCLDBDQUF3Qjs7SUFDeEIsNENBQTBCOztJQUMxQiw2Q0FBMkI7O0lBQzNCLDRDQUEwQjs7SUFDMUIsOENBQTRCOztJQUM1Qiw4Q0FBa0M7O0lBR2xDLHlDQUFnQzs7SUFDaEMsMkNBQXdCOztJQUV4QixnREFBMEU7O0lBQzFFLGtEQUE4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGVudENoaWxkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRhVGFibGVSb3dDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHtDZWxsQ2FsbGJhY2t9IGZyb20gJy4uLy4uL3R5cGVzL2NlbGwtY2FsbGJhY2sudHlwZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1jb2x1bW4nXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzdHlsZUNsYXNzT2JqZWN0ID0ge307IC8vIGZvciBbbmdDbGFzc11cblxuICAvLyBpbml0OlxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgc29ydGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgcmVzaXphYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHByb3BlcnR5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY2VsbENvbG9yczogQ2VsbENhbGxiYWNrO1xuXG4gIC8vIGluaXQgYW5kIHN0YXRlOlxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICBASW5wdXQoKSB2aXNpYmxlID0gdHJ1ZTtcblxuICBAQ29udGVudENoaWxkKCdkYXRhVGFibGVDZWxsJywgeyBzdGF0aWM6IHRydWUgfSkgY2VsbFRlbXBsYXRlOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkKCdkYXRhVGFibGVIZWFkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBoZWFkZXJUZW1wbGF0ZTogRWxlbWVudFJlZjtcblxuICBnZXRDZWxsQ29sb3Iocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jZWxsQ29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoPENlbGxDYWxsYmFjaz50aGlzLmNlbGxDb2xvcnMpKHJvdy5pdGVtLCByb3csIHRoaXMsIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pbml0Q2VsbENsYXNzKCk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0Q2VsbENsYXNzKCkge1xuICAgIGlmICghdGhpcy5zdHlsZUNsYXNzICYmIHRoaXMucHJvcGVydHkpIHtcbiAgICAgIGlmICgvXlthLXpBLVowLTlfXSskLy50ZXN0KHRoaXMucHJvcGVydHkpKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9ICdjb2x1bW4tJyArIHRoaXMucHJvcGVydHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAnY29sdW1uLScgKyB0aGlzLnByb3BlcnR5LnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgJycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0eWxlQ2xhc3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zdHlsZUNsYXNzT2JqZWN0ID0ge1xuICAgICAgICBbdGhpcy5zdHlsZUNsYXNzXTogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==