import { ContentChild, Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["dataTableCell"];
const _c1 = ["dataTableHeader"];
export class DataTableColumnDirective {
    constructor() {
        this.styleClassObject = {}; // for [ngClass]
        this.sortable = false;
        this.resizable = false;
        this.visible = true;
    }
    getCellColor(row, index) {
        if (this.cellColors !== undefined) {
            return this.cellColors(row.item, row, this, index);
        }
    }
    ngOnInit() {
        this._initCellClass();
    }
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
    static { this.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DataTableColumnDirective, selectors: [["data-table-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 7);
            i0.ɵɵcontentQuery(dirIndex, _c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        } }, inputs: { header: "header", sortable: "sortable", resizable: "resizable", property: "property", styleClass: "styleClass", cellColors: "cellColors", width: "width", visible: "visible" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableColumnDirective, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10YWJsZS9zcmMvbGliL2RpcmVjdGl2ZXMvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOzs7O0FBUWpGLE1BQU0sT0FBTyx3QkFBd0I7SUFIckM7UUFLVSxxQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0I7UUFJdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT2xCLFlBQU8sR0FBRyxJQUFJLENBQUM7S0E4QnpCO0lBekJDLFlBQVksQ0FBQyxHQUEwQixFQUFFLEtBQWE7UUFDcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2xDLE9BQXNCLElBQUksQ0FBQyxVQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLENBQUM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUMsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzVFLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztnQkFDdEIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSTthQUN4QixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7eUZBM0NVLHdCQUF3QjtvRUFBeEIsd0JBQXdCOzs7Ozs7Ozs7aUZBQXhCLHdCQUF3QjtjQUhwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5QjtnQkFNVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUdHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUUyQyxZQUFZO2tCQUE1RCxZQUFZO21CQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDSSxjQUFjO2tCQUFoRSxZQUFZO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGVudENoaWxkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRhVGFibGVSb3dDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcm93L3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHtDZWxsQ2FsbGJhY2t9IGZyb20gJy4uLy4uL3R5cGVzL2NlbGwtY2FsbGJhY2sudHlwZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1jb2x1bW4nXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzdHlsZUNsYXNzT2JqZWN0ID0ge307IC8vIGZvciBbbmdDbGFzc11cblxuICAvLyBpbml0OlxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgc29ydGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgcmVzaXphYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHByb3BlcnR5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY2VsbENvbG9yczogQ2VsbENhbGxiYWNrO1xuXG4gIC8vIGluaXQgYW5kIHN0YXRlOlxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICBASW5wdXQoKSB2aXNpYmxlID0gdHJ1ZTtcblxuICBAQ29udGVudENoaWxkKCdkYXRhVGFibGVDZWxsJywgeyBzdGF0aWM6IHRydWUgfSkgY2VsbFRlbXBsYXRlOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkKCdkYXRhVGFibGVIZWFkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBoZWFkZXJUZW1wbGF0ZTogRWxlbWVudFJlZjtcblxuICBnZXRDZWxsQ29sb3Iocm93OiBEYXRhVGFibGVSb3dDb21wb25lbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jZWxsQ29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoPENlbGxDYWxsYmFjaz50aGlzLmNlbGxDb2xvcnMpKHJvdy5pdGVtLCByb3csIHRoaXMsIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pbml0Q2VsbENsYXNzKCk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0Q2VsbENsYXNzKCkge1xuICAgIGlmICghdGhpcy5zdHlsZUNsYXNzICYmIHRoaXMucHJvcGVydHkpIHtcbiAgICAgIGlmICgvXlthLXpBLVowLTlfXSskLy50ZXN0KHRoaXMucHJvcGVydHkpKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9ICdjb2x1bW4tJyArIHRoaXMucHJvcGVydHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAnY29sdW1uLScgKyB0aGlzLnByb3BlcnR5LnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgJycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0eWxlQ2xhc3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zdHlsZUNsYXNzT2JqZWN0ID0ge1xuICAgICAgICBbdGhpcy5zdHlsZUNsYXNzXTogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==