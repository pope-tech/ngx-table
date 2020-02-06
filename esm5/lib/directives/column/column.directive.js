import { ContentChild, Directive, ElementRef, Input } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["dataTableCell"];
var _c1 = ["dataTableHeader"];
var DataTableColumnDirective = /** @class */ (function () {
    function DataTableColumnDirective() {
        this.styleClassObject = {}; // for [ngClass]
        this.sortable = false;
        this.resizable = false;
        this.visible = true;
    }
    DataTableColumnDirective.prototype.getCellColor = function (row, index) {
        if (this.cellColors !== undefined) {
            return this.cellColors(row.item, row, this, index);
        }
    };
    DataTableColumnDirective.prototype.ngOnInit = function () {
        this._initCellClass();
    };
    DataTableColumnDirective.prototype._initCellClass = function () {
        var _a;
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
    };
    DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(); };
    DataTableColumnDirective.ɵdir = i0.ɵɵdefineDirective({ type: DataTableColumnDirective, selectors: [["data-table-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵstaticContentQuery(dirIndex, _c0, true);
            i0.ɵɵstaticContentQuery(dirIndex, _c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        } }, inputs: { header: "header", sortable: "sortable", resizable: "resizable", property: "property", styleClass: "styleClass", cellColors: "cellColors", width: "width", visible: "visible" } });
    return DataTableColumnDirective;
}());
export { DataTableColumnDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTableColumnDirective, [{
        type: Directive,
        args: [{
                selector: 'data-table-column'
            }]
    }], null, { header: [{
            type: Input
        }], sortable: [{
            type: Input
        }], resizable: [{
            type: Input
        }], property: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], cellColors: [{
            type: Input
        }], width: [{
            type: Input
        }], visible: [{
            type: Input
        }], cellTemplate: [{
            type: ContentChild,
            args: ['dataTableCell', { static: true }]
        }], headerTemplate: [{
            type: ContentChild,
            args: ['dataTableHeader', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOzs7O0FBS2pGO0lBQUE7UUFLVSxxQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0I7UUFJdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT2xCLFlBQU8sR0FBRyxJQUFJLENBQUM7S0E4QnpCO0lBekJDLCtDQUFZLEdBQVosVUFBYSxHQUEwQixFQUFFLEtBQWE7UUFDcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNqQyxPQUFzQixJQUFJLENBQUMsVUFBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxpREFBYyxHQUF0Qjs7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM3QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUMzRTtTQUNGO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsZ0JBQWdCO2dCQUNuQixHQUFDLElBQUksQ0FBQyxVQUFVLElBQUcsSUFBSTttQkFDeEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztvR0EzQ1Usd0JBQXdCO2lFQUF4Qix3QkFBd0I7Ozs7Ozs7O21DQVJyQztDQW9EQyxBQS9DRCxJQStDQztTQTVDWSx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUhwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7a0JBTUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBR0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsWUFBWTttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFDOUMsWUFBWTttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVRhYmxlUm93Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7Q2VsbENhbGxiYWNrfSBmcm9tICcuLi8uLi90eXBlcy9jZWxsLWNhbGxiYWNrLnR5cGUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtY29sdW1uJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc3R5bGVDbGFzc09iamVjdCA9IHt9OyAvLyBmb3IgW25nQ2xhc3NdXG5cbiAgLy8gaW5pdDpcbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNvcnRhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlc2l6YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBwcm9wZXJ0eTogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNlbGxDb2xvcnM6IENlbGxDYWxsYmFjaztcblxuICAvLyBpbml0IGFuZCBzdGF0ZTpcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgdmlzaWJsZSA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlQ2VsbCcsIHsgc3RhdGljOiB0cnVlIH0pIGNlbGxUZW1wbGF0ZTogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZCgnZGF0YVRhYmxlSGVhZGVyJywgeyBzdGF0aWM6IHRydWUgfSkgaGVhZGVyVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0Q2VsbENvbG9yKHJvdzogRGF0YVRhYmxlUm93Q29tcG9uZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY2VsbENvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKDxDZWxsQ2FsbGJhY2s+dGhpcy5jZWxsQ29sb3JzKShyb3cuaXRlbSwgcm93LCB0aGlzLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5faW5pdENlbGxDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdENlbGxDbGFzcygpIHtcbiAgICBpZiAoIXRoaXMuc3R5bGVDbGFzcyAmJiB0aGlzLnByb3BlcnR5KSB7XG4gICAgICBpZiAoL15bYS16QS1aMC05X10rJC8udGVzdCh0aGlzLnByb3BlcnR5KSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAnY29sdW1uLScgKyB0aGlzLnByb3BlcnR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJ2NvbHVtbi0nICsgdGhpcy5wcm9wZXJ0eS5yZXBsYWNlKC9bXmEtekEtWjAtOV9dL2csICcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdHlsZUNsYXNzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzc09iamVjdCA9IHtcbiAgICAgICAgW3RoaXMuc3R5bGVDbGFzc106IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iXX0=