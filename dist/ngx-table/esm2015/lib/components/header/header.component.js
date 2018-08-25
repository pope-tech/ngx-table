/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef, HostListener, Inject } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
export class DataTableHeaderComponent {
    /**
     * @param {?} dataTable
     * @param {?} elemRef
     */
    constructor(dataTable, elemRef) {
        this.dataTable = dataTable;
        this.elemRef = elemRef;
        this.columnSelectorOpen = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickHandler(event) {
        if (!this.elemRef.nativeElement.contains(event.target)) {
            this.columnSelectorOpen = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUpHandler(event) {
        if (event.keyCode === 27 || (event.keyCode === 9 && !this.elemRef.nativeElement.contains(event.target))) {
            this.columnSelectorOpen = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /** @type {?} */
        const isChecked = (/** @type {?} */ (event.target)).checked;
        /** @type {?} */
        const columnName = (/** @type {?} */ (event.target)).parentElement.textContent.trim();
        /** @type {?} */
        const interpolateParams = {
            'column_name': columnName,
            'title': this.dataTable.title
        };
        this.dataTable.columnSelectorNotification = (isChecked ? this.dataTable.labels.headerColumnSelectorAdded :
            this.dataTable.labels.headerColumnSelectorRemoved)
            .replace('{column_name}', interpolateParams.column_name)
            .replace('{title}', interpolateParams.title);
    }
}
DataTableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'data-table-header',
                template: `<div class="data-table-header">
  <p class="h4 title" *ngIf="dataTable.showTitle" [textContent]="dataTable.title"></p>
  <div class="button-panel">
    <button type="button" class="btn btn-default btn-sm refresh-button"
            (click)="dataTable.reloadItems()"
            [title]="dataTable.labels.headerReload.replace('{title}', dataTable.title)">
      <i class="fa fa-refresh" aria-hidden="true"></i>
    </button>
    <button type="button" class="btn btn-default btn-sm column-selector-button" [class.active]="columnSelectorOpen"
            [attr.aria-haspopup]="true"
            [attr.aria-expanded]="columnSelectorOpen"
            (click)="columnSelectorOpen = !columnSelectorOpen;"
            [title]="dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title)">
      <i class="fa fa-list" aria-hidden="true"></i>
    </button>
    <div class="column-selector-wrapper">
      <div *ngIf="columnSelectorOpen" class="column-selector-box panel panel-default">
        <ul class="list-group list-group-flush">
          <li *ngIf="dataTable.expandableRows" class="list-group-item column-selector-column checkbox">
            <label class="d-flex align-items-center">
              <input type="checkbox" [(ngModel)]="dataTable.expandColumnVisible" (change)="onChange($event)" [attr.aria-controls]="dataTable.id"/>
              <span [textContent]="dataTable.labels.expandColumn"></span>
            </label>
          </li>
          <li *ngIf="dataTable.indexColumn" class="list-group-item column-selector-column checkbox">
            <label class="d-flex align-items-center">
              <input type="checkbox" [(ngModel)]="dataTable.indexColumnVisible" (change)="onChange($event)" [attr.aria-controls]="dataTable.id"/>
              <span [textContent]="dataTable.labels.indexColumn"></span>
            </label>
          </li>
          <li *ngIf="dataTable.selectColumn" class="list-group-item column-selector-column checkbox">
            <label class="d-flex align-items-center">
              <input type="checkbox" [(ngModel)]="dataTable.selectColumnVisible" (change)="onChange($event)" [attr.aria-controls]="dataTable.id"/>
              <span [textContent]="dataTable.labels.selectColumn"></span>
            </label>
          </li>
          <ng-template ngFor let-item let-i="index" [ngForOf]="dataTable.columns">
            <li class="list-group-item column-selector-column checkbox"
                *ngIf="dataTable.primaryColumn !== item.property">
              <label class="d-flex align-items-center">
                <input type="checkbox" [(ngModel)]="item.visible" (change)="onChange($event)" [attr.aria-controls]="dataTable.id"/>
                <span [textContent]="item.header"></span>
              </label>
            </li>
          </ng-template>
        </ul>
      </div>
    </div>
  </div>
</div>
`,
                styles: [`.data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:0!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}`]
            },] },
];
/** @nocollapse */
DataTableHeaderComponent.ctorParameters = () => [
    { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(() => DataTableComponent),] }] },
    { type: ElementRef }
];
DataTableHeaderComponent.propDecorators = {
    onClickHandler: [{ type: HostListener, args: ['document:click', ['$event'],] }],
    onKeyUpHandler: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DataTableHeaderComponent.prototype.columnSelectorOpen;
    /** @type {?} */
    DataTableHeaderComponent.prototype.dataTable;
    /** @type {?} */
    DataTableHeaderComponent.prototype.elemRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQXlEOUQsTUFBTTs7Ozs7SUFJSixZQUFpRSxTQUE2QixFQUMxRTtRQUQ2QyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUMxRSxZQUFPLEdBQVAsT0FBTztrQ0FITixLQUFLO0tBSXpCOzs7OztJQUUyQyxjQUFjLENBQUMsS0FBSztRQUM5RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDakM7S0FDRjs7Ozs7SUFFMkMsY0FBYyxDQUFDLEtBQUs7UUFDOUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNqQztLQUNGOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFZOztRQUNuQixNQUFNLFNBQVMsR0FBRyxtQkFBb0IsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDLE9BQU8sQ0FBQzs7UUFDNUQsTUFBTSxVQUFVLEdBQUcsbUJBQW9CLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOztRQUN0RixNQUFNLGlCQUFpQixHQUFHO1lBQ3hCLGFBQWEsRUFBRSxVQUFVO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7U0FDOUIsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDeEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUM7YUFDakQsT0FBTyxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7YUFDdkQsT0FBTyxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoRDs7O1lBdkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0RYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHltQkFBeW1CLENBQUM7YUFDcG5COzs7O1lBeERRLGtCQUFrQix1QkE2RFosTUFBTSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQWxFeEQsVUFBVTs7OzZCQXNFVCxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBTXpDLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtaGVhZGVyXCI+XG4gIDxwIGNsYXNzPVwiaDQgdGl0bGVcIiAqbmdJZj1cImRhdGFUYWJsZS5zaG93VGl0bGVcIiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLnRpdGxlXCI+PC9wPlxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXBhbmVsXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHJlZnJlc2gtYnV0dG9uXCJcbiAgICAgICAgICAgIChjbGljayk9XCJkYXRhVGFibGUucmVsb2FkSXRlbXMoKVwiXG4gICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJSZWxvYWQucmVwbGFjZSgne3RpdGxlfScsIGRhdGFUYWJsZS50aXRsZSlcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gY29sdW1uLXNlbGVjdG9yLWJ1dHRvblwiIFtjbGFzcy5hY3RpdmVdPVwiY29sdW1uU2VsZWN0b3JPcGVuXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtaGFzcG9wdXBdPVwidHJ1ZVwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImNvbHVtblNlbGVjdG9yT3BlblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY29sdW1uU2VsZWN0b3JPcGVuID0gIWNvbHVtblNlbGVjdG9yT3BlbjtcIlxuICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyQ29sdW1uU2VsZWN0b3IucmVwbGFjZSgne3RpdGxlfScsIGRhdGFUYWJsZS50aXRsZSlcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGlzdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNlbGVjdG9yLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW5TZWxlY3Rvck9wZW5cIiBjbGFzcz1cImNvbHVtbi1zZWxlY3Rvci1ib3ggcGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuZXhwYW5kYWJsZVJvd3NcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5leHBhbmRDb2x1bW5WaXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuaW5kZXhDb2x1bW5cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5pbmRleENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuaW5kZXhDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiZGF0YVRhYmxlLnNlbGVjdENvbHVtblwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLnNlbGVjdENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuc2VsZWN0Q29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBsZXQtaT1cImluZGV4XCIgW25nRm9yT2ZdPVwiZGF0YVRhYmxlLmNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGFUYWJsZS5wcmltYXJ5Q29sdW1uICE9PSBpdGVtLnByb3BlcnR5XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJpdGVtLnZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiaXRlbS5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AuZGF0YS10YWJsZS1oZWFkZXJ7bWluLWhlaWdodDoyNXB4O21hcmdpbi1ib3R0b206MTBweH0udGl0bGV7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjVweCAwIDAgNXB4fS5idXR0b24tcGFuZWx7ZmxvYXQ6cmlnaHR9LmJ1dHRvbi1wYW5lbCBidXR0b257b3V0bGluZTowIWltcG9ydGFudH0uY29sdW1uLXNlbGVjdG9yLXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmV9LmNvbHVtbi1zZWxlY3Rvci1ib3h7Ym94LXNoYWRvdzowIDAgMTBweCAjZDNkM2QzO2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxNTBweDtwYWRkaW5nOjEwcHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MXB4O3otaW5kZXg6MTA2MH0uY29sdW1uLXNlbGVjdG9yLWJveCAubGlzdC1ncm91cC1pdGVtLmNvbHVtbi1zZWxlY3Rvci1jb2x1bW57cGFkZGluZzouNXJlbSAuMjVyZW19LmNvbHVtbi1zZWxlY3Rvci1ib3ggLmxpc3QtZ3JvdXAtaXRlbS5jb2x1bW4tc2VsZWN0b3ItY29sdW1uIGxhYmVse21hcmdpbi1ib3R0b206MH0uY29sdW1uLXNlbGVjdG9yLWJveCAubGlzdC1ncm91cC1pdGVtLmNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gaW5wdXR7bWFyZ2luLXJpZ2h0OjRweDtmb250LXN0eWxlOml0YWxpY31gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQge1xuXG4gIGNvbHVtblNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpKSBwdWJsaWMgZGF0YVRhYmxlOiBEYXRhVGFibGVDb21wb25lbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGlmICghdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pIG9uS2V5VXBIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IChldmVudC5rZXlDb2RlID09PSA5ICYmICF0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSkge1xuICAgICAgdGhpcy5jb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50LnRhcmdldCkuY2hlY2tlZDtcbiAgICBjb25zdCBjb2x1bW5OYW1lID0gKDxIVE1MSW5wdXRFbGVtZW50PiBldmVudC50YXJnZXQpLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIGNvbnN0IGludGVycG9sYXRlUGFyYW1zID0ge1xuICAgICAgJ2NvbHVtbl9uYW1lJzogY29sdW1uTmFtZSxcbiAgICAgICd0aXRsZSc6IHRoaXMuZGF0YVRhYmxlLnRpdGxlXG4gICAgfTtcblxuICAgIHRoaXMuZGF0YVRhYmxlLmNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uID0gKGlzQ2hlY2tlZCA/IHRoaXMuZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3RvckFkZGVkIDpcbiAgICAgIHRoaXMuZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3RvclJlbW92ZWQpXG4gICAgICAucmVwbGFjZSgne2NvbHVtbl9uYW1lfScsIGludGVycG9sYXRlUGFyYW1zLmNvbHVtbl9uYW1lKVxuICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCBpbnRlcnBvbGF0ZVBhcmFtcy50aXRsZSk7XG4gIH1cbn1cbiJdfQ==