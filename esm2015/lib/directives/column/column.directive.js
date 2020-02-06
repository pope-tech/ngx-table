import { __decorate, __metadata } from "tslib";
import { ContentChild, Directive, ElementRef, Input } from '@angular/core';
let DataTableColumnDirective = class DataTableColumnDirective {
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
};
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTableColumnDirective.prototype, "header", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTableColumnDirective.prototype, "sortable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTableColumnDirective.prototype, "resizable", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTableColumnDirective.prototype, "property", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTableColumnDirective.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], DataTableColumnDirective.prototype, "cellColors", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTableColumnDirective.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTableColumnDirective.prototype, "visible", void 0);
__decorate([
    ContentChild('dataTableCell', { static: true }),
    __metadata("design:type", ElementRef)
], DataTableColumnDirective.prototype, "cellTemplate", void 0);
__decorate([
    ContentChild('dataTableHeader', { static: true }),
    __metadata("design:type", ElementRef)
], DataTableColumnDirective.prototype, "headerTemplate", void 0);
DataTableColumnDirective = __decorate([
    Directive({
        selector: 'data-table-column'
    })
], DataTableColumnDirective);
export { DataTableColumnDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQVFqRixJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQUFyQztRQUVVLHFCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQjtRQUl0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFPbEIsWUFBTyxHQUFHLElBQUksQ0FBQztJQThCMUIsQ0FBQztJQXpCQyxZQUFZLENBQUMsR0FBMEIsRUFBRSxLQUFhO1FBQ3BELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDakMsT0FBc0IsSUFBSSxDQUFDLFVBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM3QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUMzRTtTQUNGO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7Z0JBQ3RCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUk7YUFDeEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF2Q1U7SUFBUixLQUFLLEVBQUU7O3dEQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFOzswREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7OzJEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTs7MERBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzs0REFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7OzREQUEwQjtBQUd6QjtJQUFSLEtBQUssRUFBRTs7dURBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFOzt5REFBZ0I7QUFFeUI7SUFBaEQsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBZSxVQUFVOzhEQUFDO0FBQ3ZCO0lBQWxELFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBaUIsVUFBVTtnRUFBQztBQWpCbkUsd0JBQXdCO0lBSHBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7S0FDOUIsQ0FBQztHQUNXLHdCQUF3QixDQTRDcEM7U0E1Q1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFUYWJsZVJvd0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQge0NlbGxDYWxsYmFja30gZnJvbSAnLi4vLi4vdHlwZXMvY2VsbC1jYWxsYmFjay50eXBlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLWNvbHVtbidcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHN0eWxlQ2xhc3NPYmplY3QgPSB7fTsgLy8gZm9yIFtuZ0NsYXNzXVxuXG4gIC8vIGluaXQ6XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBzb3J0YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSByZXNpemFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJvcGVydHk6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjZWxsQ29sb3JzOiBDZWxsQ2FsbGJhY2s7XG5cbiAgLy8gaW5pdCBhbmQgc3RhdGU6XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUNlbGwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZWxsVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGQoJ2RhdGFUYWJsZUhlYWRlcicsIHsgc3RhdGljOiB0cnVlIH0pIGhlYWRlclRlbXBsYXRlOiBFbGVtZW50UmVmO1xuXG4gIGdldENlbGxDb2xvcihyb3c6IERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNlbGxDb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICg8Q2VsbENhbGxiYWNrPnRoaXMuY2VsbENvbG9ycykocm93Lml0ZW0sIHJvdywgdGhpcywgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXRDZWxsQ2xhc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRDZWxsQ2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLnN0eWxlQ2xhc3MgJiYgdGhpcy5wcm9wZXJ0eSkge1xuICAgICAgaWYgKC9eW2EtekEtWjAtOV9dKyQvLnRlc3QodGhpcy5wcm9wZXJ0eSkpIHtcbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJ2NvbHVtbi0nICsgdGhpcy5wcm9wZXJ0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9ICdjb2x1bW4tJyArIHRoaXMucHJvcGVydHkucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3R5bGVDbGFzcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3NPYmplY3QgPSB7XG4gICAgICAgIFt0aGlzLnN0eWxlQ2xhc3NdOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIl19