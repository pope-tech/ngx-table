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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFrRDlELE1BQU07Ozs7OztJQXlDSixZQUFpRSxTQUE2QixFQUMxRSxVQUE2QixVQUFzQjtRQUROLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzFFLGFBQVEsR0FBUixRQUFRO1FBQXFCLGVBQVUsR0FBVixVQUFVLENBQVk7cUJBeEN4RCxJQUFJOzBCQU9FLEVBQUU7OEJBS0ksSUFBSSxZQUFZLEVBQUU7S0E0QjhCOzs7O0lBMUIzRSxJQUFJLFFBQVE7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBR0QsSUFBSSxZQUFZO1FBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDN0Q7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUN2QjtLQUNGOzs7O0lBRUQsVUFBVTtRQUNSLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQztLQUNYOzs7O0lBS0QsUUFBUTtRQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUN6RCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQ3JELENBQUM7U0FDSDtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUM1RCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDM0QsQ0FBQztTQUNIO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3JDOzs7WUE5R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTJDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyx3VkFBd1YsQ0FBQzthQUNuVzs7OztZQWpEUSxrQkFBa0IsdUJBMkZaLE1BQU0sU0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUE3RnhELFNBQVM7WUFSVCxVQUFVOzs7bUJBZ0VULEtBQUs7b0JBQ0wsS0FBSzs2QkFTTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tkYXRhVGFibGVSb3ddJyxcbiAgdGVtcGxhdGU6IGA8dHIgY2xhc3M9XCJkYXRhLXRhYmxlLXJvd1wiXG4gICAgW3RpdGxlXT1cImdldFRvb2x0aXAoKVwiXG4gICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiZGF0YVRhYmxlLmdldFJvd0NvbG9yKGl0ZW0sIGluZGV4LCBfdGhpcylcIlxuICAgIFtjbGFzcy5yb3ctb2RkXT1cImluZGV4ICUgMiA9PT0gMFwiXG4gICAgW2NsYXNzLnJvdy1ldmVuXT1cImluZGV4ICUgMiA9PT0gMVwiXG4gICAgW2NsYXNzLnNlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICBbY2xhc3MuY2xpY2thYmxlXT1cImRhdGFUYWJsZS5zZWxlY3RPblJvd0NsaWNrXCI+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLmV4cGFuZENvbHVtblZpc2libGVcIj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJleHBhbmRlZCA9ICFleHBhbmRlZDsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgY2xhc3M9XCJyb3ctZXhwYW5kLWJ1dHRvblwiXG4gICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImV4cGFuZGVkXCJcbiAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiXG4gICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kUm93LnJlcGxhY2UoJ3tjZWxsX2NvbnRlbnR9JywgJycraXRlbVtkYXRhVGFibGUucHJpbWFyeUNvbHVtbl0pXCI+XG4gICAgICA8aSBbbmdDbGFzc109XCJ7J2ZhLWNhcmV0LXJpZ2h0JzogIWV4cGFuZGVkLCAnZmEtY2FyZXQtZG93bic6IGV4cGFuZGVkfVwiIGNsYXNzPVwiZmEgZmEtbGdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gIDwvdGQ+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLmluZGV4Q29sdW1uVmlzaWJsZVwiIGNsYXNzPVwiaW5kZXgtY29sdW1uXCIgW3RleHRDb250ZW50XT1cImRpc3BsYXlJbmRleFwiPjwvdGQ+XG4gIDx0ZCBbaGlkZV09XCIhZGF0YVRhYmxlLnNlbGVjdENvbHVtblZpc2libGVcIiBjbGFzcz1cInNlbGVjdC1jb2x1bW5cIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLnNlbGVjdFJvdy5yZXBsYWNlKCd7Y2VsbF9jb250ZW50fScsICcnK2l0ZW1bZGF0YVRhYmxlLnByaW1hcnlDb2x1bW5dKVwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF0YVRhYmxlLmxhYmVscy5zZWxlY3RSb3cucmVwbGFjZSgne2NlbGxfY29udGVudH0nLCAnJytpdGVtW2RhdGFUYWJsZS5wcmltYXJ5Q29sdW1uXSlcIi8+XG4gIDwvdGQ+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJkYXRhVGFibGUuY29sdW1uc1wiIGxldC1jb2x1bW4+XG4gICAgPHRoICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gPT09IGNvbHVtbi5wcm9wZXJ0eVwiIHNjb3BlPVwicm93XCIgW2hpZGVdPVwiIWNvbHVtbi52aXNpYmxlXCIgW25nQ2xhc3NdPVwiY29sdW1uLnN0eWxlQ2xhc3NPYmplY3RcIlxuICAgICAgICBjbGFzcz1cImRhdGEtY29sdW1uXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sdW1uLmdldENlbGxDb2xvcihfdGhpcywgaW5kZXgpXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbdGV4dENvbnRlbnRdPVwiaXRlbVtjb2x1bW4ucHJvcGVydHldXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NvbHVtbjogY29sdW1uLCByb3c6IF90aGlzLCBpdGVtOiBpdGVtfVwiPjwvZGl2PlxuICAgIDwvdGg+XG4gICAgPHRkICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gIT09IGNvbHVtbi5wcm9wZXJ0eVwiIFtoaWRlXT1cIiFjb2x1bW4udmlzaWJsZVwiIFtuZ0NsYXNzXT1cImNvbHVtbi5zdHlsZUNsYXNzT2JqZWN0XCJcbiAgICAgICAgY2xhc3M9XCJkYXRhLWNvbHVtblwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbHVtbi5nZXRDZWxsQ29sb3IoX3RoaXMsIGluZGV4KVwiPlxuICAgICAgPGRpdiAqbmdJZj1cIiFjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW3RleHRDb250ZW50XT1cIml0ZW1bY29sdW1uLnByb3BlcnR5XVwiPjwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjb2x1bW46IGNvbHVtbiwgcm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgICA8L3RkPlxuICA8L25nLXRlbXBsYXRlPlxuPC90cj5cbjx0ciAqbmdJZj1cImRhdGFUYWJsZS5leHBhbmRhYmxlUm93c1wiIFtoaWRlXT1cIiFleHBhbmRlZFwiIGNsYXNzPVwicm93LWV4cGFuc2lvblwiPlxuICA8dGQgW2F0dHIuY29sc3Bhbl09XCJkYXRhVGFibGUuY29sdW1uQ291bnRcIj5cbiAgICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRhdGFUYWJsZS5leHBhbmRUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7cm93OiBfdGhpcywgaXRlbTogaXRlbX1cIj48L2Rpdj5cbiAgPC90ZD5cbjwvdHI+XG5gLFxuICBzdHlsZXM6IFtgLnNlbGVjdC1jb2x1bW57dGV4dC1hbGlnbjpjZW50ZXJ9LnJvdy1leHBhbmQtYnV0dG9ue2JveC1zaXppbmc6Y29udGVudC1ib3g7YmFja2dyb3VuZDowIDA7Ym9yZGVyOjA7Y29sb3I6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjtmb250OmluaGVyaXQ7bGluZS1oZWlnaHQ6bm9ybWFsO292ZXJmbG93OnZpc2libGU7cGFkZGluZzouMTVyZW0gLjc1cmVtOy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZX0uY2xpY2thYmxle2N1cnNvcjpwb2ludGVyfXRoe2ZvbnQtd2VpZ2h0OmluaXRpYWx9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBfdGhpcyA9IHRoaXM7XG5cbiAgQElucHV0KCkgaXRlbTogYW55O1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIGV4cGFuZGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IFtdO1xuXG4gIC8vIHJvdyBzZWxlY3Rpb246XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWQpO1xuICB9XG5cbiAgLy8gb3RoZXI6XG4gIGdldCBkaXNwbGF5SW5kZXgoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5kaXNwbGF5UGFyYW1zLm9mZnNldCArIHRoaXMuaW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleCArIDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG9vbHRpcCgpIHtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUucm93VG9vbHRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnJvd1Rvb2x0aXAodGhpcy5pdGVtLCB0aGlzLCB0aGlzLmluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLnJvd0NsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmRhdGFUYWJsZS5yb3dDbGlja2VkKHRoaXMsIGV2ZW50KSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5yb3dEb3VibGVDbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGJsY2xpY2snLFxuICAgICAgICAgIChldmVudCkgPT4gdGhpcy5kYXRhVGFibGUucm93RG91YmxlQ2xpY2tlZCh0aGlzLCBldmVudCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgfVxufVxuIl19