/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => this.dataTable.rowClicked(this, event)));
        }
        if (this.dataTable.rowDoubleClick.observers.length > 0) {
            this._listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dblclick', (event) => this.dataTable.rowDoubleClicked(this, event)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.selected = false;
        this._listeners.forEach(fn => fn());
    }
}
DataTableRowComponent.decorators = [
    { type: Component, args: [{
                selector: '[dataTableRow]',
                template: `<tr class="data-table-row"
    [title]="getTooltip()"
    [style.background-color]="dataTable.getRowColor(item, index, _this)"
    [class.row-odd]="index % 2 === 0"
    [class.row-even]="index % 2 === 1"
    [class.selected]="selected"
    [class.clickable]="dataTable.selectOnRowClick">
  <td [hide]="!dataTable.expandColumnVisible">
    <button (click)="expanded = !expanded; $event.stopPropagation()" class="row-expand-button"
         [attr.aria-expanded]="expanded"
         [title]="dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])"
         [attr.aria-label]="dataTable.labels.expandRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])">
      <i [ngClass]="{'fa-caret-right': !expanded, 'fa-caret-down': expanded}" class="fa fa-lg" aria-hidden="true"></i>
    </button>
  </td>
  <td [hide]="!dataTable.indexColumnVisible" class="index-column" [textContent]="displayIndex"></td>
  <td [hide]="!dataTable.selectColumnVisible" class="select-column">
    <input type="checkbox" [(ngModel)]="selected"
           [title]="dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])"
           [attr.aria-label]="dataTable.labels.selectRow.replace('{cell_content}', ''+item[dataTable.primaryColumn])"/>
  </td>
  <ng-template ngFor [ngForOf]="dataTable.columns" let-column>
    <th *ngIf="dataTable.primaryColumn === column.property" scope="row" [hide]="!column.visible" [ngClass]="column.styleClassObject"
        class="data-column"
        [style.background-color]="column.getCellColor(_this, index)">
      <div *ngIf="!column.cellTemplate" [textContent]="item[column.property]"></div>
      <div *ngIf="column.cellTemplate" [ngTemplateOutlet]="column.cellTemplate"
           [ngTemplateOutletContext]="{column: column, row: _this, item: item}"></div>
    </th>
    <td *ngIf="dataTable.primaryColumn !== column.property" [hide]="!column.visible" [ngClass]="column.styleClassObject"
        class="data-column"
        [style.background-color]="column.getCellColor(_this, index)">
      <div *ngIf="!column.cellTemplate" [textContent]="item[column.property]"></div>
      <div *ngIf="column.cellTemplate" [ngTemplateOutlet]="column.cellTemplate"
           [ngTemplateOutletContext]="{column: column, row: _this, item: item}"></div>
    </td>
  </ng-template>
</tr>
<tr *ngIf="dataTable.expandableRows" [hide]="!expanded" class="row-expansion">
  <td [attr.colspan]="dataTable.columnCount">
    <div [ngTemplateOutlet]="dataTable.expandTemplate" [ngTemplateOutletContext]="{row: _this, item: item}"></div>
  </td>
</tr>
`,
                styles: [`.select-column{text-align:center}.row-expand-button{box-sizing:content-box;background:0 0;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:.15rem .75rem;-webkit-appearance:button;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.clickable{cursor:pointer}th{font-weight:initial}`]
            },] },
];
/** @nocollapse */
DataTableRowComponent.ctorParameters = () => [
    { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(() => DataTableComponent),] }] },
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
    /** @type {?} */
    DataTableRowComponent.prototype._listeners;
    /** @type {?} */
    DataTableRowComponent.prototype._selected;
    /** @type {?} */
    DataTableRowComponent.prototype.selectedChange;
    /** @type {?} */
    DataTableRowComponent.prototype.dataTable;
    /** @type {?} */
    DataTableRowComponent.prototype.renderer;
    /** @type {?} */
    DataTableRowComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQWtEOUQsTUFBTTs7Ozs7O0lBeUNKLFlBQWlFLFNBQTZCLEVBQzFFLFVBQTZCLFVBQXNCO1FBRE4sY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDMUUsYUFBUSxHQUFSLFFBQVE7UUFBcUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtxQkF4Q3hELElBQUk7MEJBT0UsRUFBRTs4QkFLSSxJQUFJLFlBQVksRUFBRTtLQTRCOEI7Ozs7SUExQjNFLElBQUksUUFBUTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBQUksUUFBUSxDQUFDLFFBQVE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDcEM7Ozs7SUFHRCxJQUFJLFlBQVk7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUM3RDtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7SUFFRCxVQUFVO1FBQ1IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO0tBQ1g7Ozs7SUFLRCxRQUFRO1FBQ04sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQ3pELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDckQsQ0FBQztTQUNIO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQzVELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUMzRCxDQUFDO1NBQ0g7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDckM7OztZQTlHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkNYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHdWQUF3VixDQUFDO2FBQ25XOzs7O1lBakRRLGtCQUFrQix1QkEyRlosTUFBTSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQTdGeEQsU0FBUztZQVJULFVBQVU7OzttQkFnRVQsS0FBSztvQkFDTCxLQUFLOzZCQVNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2RhdGFUYWJsZVJvd10nLFxuICB0ZW1wbGF0ZTogYDx0ciBjbGFzcz1cImRhdGEtdGFibGUtcm93XCJcbiAgICBbdGl0bGVdPVwiZ2V0VG9vbHRpcCgpXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJkYXRhVGFibGUuZ2V0Um93Q29sb3IoaXRlbSwgaW5kZXgsIF90aGlzKVwiXG4gICAgW2NsYXNzLnJvdy1vZGRdPVwiaW5kZXggJSAyID09PSAwXCJcbiAgICBbY2xhc3Mucm93LWV2ZW5dPVwiaW5kZXggJSAyID09PSAxXCJcbiAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxuICAgIFtjbGFzcy5jbGlja2FibGVdPVwiZGF0YVRhYmxlLnNlbGVjdE9uUm93Q2xpY2tcIj5cbiAgPHRkIFtoaWRlXT1cIiFkYXRhVGFibGUuZXhwYW5kQ29sdW1uVmlzaWJsZVwiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cImV4cGFuZGVkID0gIWV4cGFuZGVkOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiBjbGFzcz1cInJvdy1leHBhbmQtYnV0dG9uXCJcbiAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiZXhwYW5kZWRcIlxuICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kUm93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCJcbiAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF0YVRhYmxlLmxhYmVscy5leHBhbmRSb3cucmVwbGFjZSgne2NlbGxfY29udGVudH0nLCAnJytpdGVtW2RhdGFUYWJsZS5wcmltYXJ5Q29sdW1uXSlcIj5cbiAgICAgIDxpIFtuZ0NsYXNzXT1cInsnZmEtY2FyZXQtcmlnaHQnOiAhZXhwYW5kZWQsICdmYS1jYXJldC1kb3duJzogZXhwYW5kZWR9XCIgY2xhc3M9XCJmYSBmYS1sZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgPC90ZD5cbiAgPHRkIFtoaWRlXT1cIiFkYXRhVGFibGUuaW5kZXhDb2x1bW5WaXNpYmxlXCIgY2xhc3M9XCJpbmRleC1jb2x1bW5cIiBbdGV4dENvbnRlbnRdPVwiZGlzcGxheUluZGV4XCI+PC90ZD5cbiAgPHRkIFtoaWRlXT1cIiFkYXRhVGFibGUuc2VsZWN0Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwic2VsZWN0LWNvbHVtblwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuc2VsZWN0Um93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCJcbiAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJkYXRhVGFibGUubGFiZWxzLnNlbGVjdFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiLz5cbiAgPC90ZD5cbiAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cImRhdGFUYWJsZS5jb2x1bW5zXCIgbGV0LWNvbHVtbj5cbiAgICA8dGggKm5nSWY9XCJkYXRhVGFibGUucHJpbWFyeUNvbHVtbiA9PT0gY29sdW1uLnByb3BlcnR5XCIgc2NvcGU9XCJyb3dcIiBbaGlkZV09XCIhY29sdW1uLnZpc2libGVcIiBbbmdDbGFzc109XCJjb2x1bW4uc3R5bGVDbGFzc09iamVjdFwiXG4gICAgICAgIGNsYXNzPVwiZGF0YS1jb2x1bW5cIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2x1bW4uZ2V0Q2VsbENvbG9yKF90aGlzLCBpbmRleClcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCIhY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFt0ZXh0Q29udGVudF09XCJpdGVtW2NvbHVtbi5wcm9wZXJ0eV1cIj48L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y29sdW1uOiBjb2x1bW4sIHJvdzogX3RoaXMsIGl0ZW06IGl0ZW19XCI+PC9kaXY+XG4gICAgPC90aD5cbiAgICA8dGQgKm5nSWY9XCJkYXRhVGFibGUucHJpbWFyeUNvbHVtbiAhPT0gY29sdW1uLnByb3BlcnR5XCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCIgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIlxuICAgICAgICBjbGFzcz1cImRhdGEtY29sdW1uXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sdW1uLmdldENlbGxDb2xvcihfdGhpcywgaW5kZXgpXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbdGV4dENvbnRlbnRdPVwiaXRlbVtjb2x1bW4ucHJvcGVydHldXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1uLCByb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICAgIDwvdGQ+XG4gIDwvbmctdGVtcGxhdGU+XG48L3RyPlxuPHRyICpuZ0lmPVwiZGF0YVRhYmxlLmV4cGFuZGFibGVSb3dzXCIgW2hpZGVdPVwiIWV4cGFuZGVkXCIgY2xhc3M9XCJyb3ctZXhwYW5zaW9uXCI+XG4gIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImRhdGFUYWJsZS5jb2x1bW5Db3VudFwiPlxuICAgIDxkaXYgW25nVGVtcGxhdGVPdXRsZXRdPVwiZGF0YVRhYmxlLmV4cGFuZFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntyb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICA8L3RkPlxuPC90cj5cbmAsXG4gIHN0eWxlczogW2Auc2VsZWN0LWNvbHVtbnt0ZXh0LWFsaWduOmNlbnRlcn0ucm93LWV4cGFuZC1idXR0b257Ym94LXNpemluZzpjb250ZW50LWJveDtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6MDtjb2xvcjppbmhlcml0O2N1cnNvcjpwb2ludGVyO2ZvbnQ6aW5oZXJpdDtsaW5lLWhlaWdodDpub3JtYWw7b3ZlcmZsb3c6dmlzaWJsZTtwYWRkaW5nOi4xNXJlbSAuNzVyZW07LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lfS5jbGlja2FibGV7Y3Vyc29yOnBvaW50ZXJ9dGh7Zm9udC13ZWlnaHQ6aW5pdGlhbH1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIF90aGlzID0gdGhpcztcblxuICBASW5wdXQoKSBpdGVtOiBhbnk7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfbGlzdGVuZXJzID0gW107XG5cbiAgLy8gcm93IHNlbGVjdGlvbjpcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChzZWxlY3RlZCk7XG4gIH1cblxuICAvLyBvdGhlcjpcbiAgZ2V0IGRpc3BsYXlJbmRleCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucGFnaW5hdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLmRpc3BsYXlQYXJhbXMub2Zmc2V0ICsgdGhpcy5pbmRleCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV4ICsgMTtcbiAgICB9XG4gIH1cblxuICBnZXRUb29sdGlwKCkge1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dUb29sdGlwKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUucm93VG9vbHRpcCh0aGlzLml0ZW0sIHRoaXMsIHRoaXMuaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93Q2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJyxcbiAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuZGF0YVRhYmxlLnJvd0NsaWNrZWQodGhpcywgZXZlbnQpKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd0RvdWJsZUNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYmxjbGljaycsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmRhdGFUYWJsZS5yb3dEb3VibGVDbGlja2VkKHRoaXMsIGV2ZW50KSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICB9XG59XG4iXX0=