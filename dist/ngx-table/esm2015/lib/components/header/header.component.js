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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUF5RDlELE1BQU07Ozs7O0lBSUosWUFBaUUsU0FBNkIsRUFDMUU7UUFENkMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDMUUsWUFBTyxHQUFQLE9BQU87a0NBSE4sS0FBSztLQUl6Qjs7Ozs7SUFFMkMsY0FBYyxDQUFDLEtBQUs7UUFDOUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7O0lBRTJDLGNBQWMsQ0FBQyxLQUFLO1FBQzlELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDakM7S0FDRjs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBWTs7UUFDbkIsTUFBTSxTQUFTLEdBQUcsbUJBQW9CLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxPQUFPLENBQUM7O1FBQzVELE1BQU0sVUFBVSxHQUFHLG1CQUFvQixLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7UUFDdEYsTUFBTSxpQkFBaUIsR0FBRztZQUN4QixhQUFhLEVBQUUsVUFBVTtZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1NBQzlCLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLDBCQUEwQixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3hHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDO2FBQ2pELE9BQU8sQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxDQUFDO2FBQ3ZELE9BQU8sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEQ7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtEWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyx5bUJBQXltQixDQUFDO2FBQ3BuQjs7OztZQXhEUSxrQkFBa0IsdUJBNkRaLE1BQU0sU0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFsRXhELFVBQVU7Ozs2QkFzRVQsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOzZCQU16QyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWhlYWRlclwiPlxuICA8cCBjbGFzcz1cImg0IHRpdGxlXCIgKm5nSWY9XCJkYXRhVGFibGUuc2hvd1RpdGxlXCIgW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS50aXRsZVwiPjwvcD5cbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1wYW5lbFwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSByZWZyZXNoLWJ1dHRvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGF0YVRhYmxlLnJlbG9hZEl0ZW1zKClcIlxuICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyUmVsb2FkLnJlcGxhY2UoJ3t0aXRsZX0nLCBkYXRhVGFibGUudGl0bGUpXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZnJlc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGNvbHVtbi1zZWxlY3Rvci1idXR0b25cIiBbY2xhc3MuYWN0aXZlXT1cImNvbHVtblNlbGVjdG9yT3BlblwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWhhc3BvcHVwXT1cInRydWVcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJjb2x1bW5TZWxlY3Rvck9wZW5cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNvbHVtblNlbGVjdG9yT3BlbiA9ICFjb2x1bW5TZWxlY3Rvck9wZW47XCJcbiAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yLnJlcGxhY2UoJ3t0aXRsZX0nLCBkYXRhVGFibGUudGl0bGUpXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWxpc3RcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZWxlY3Rvci13cmFwcGVyXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uU2VsZWN0b3JPcGVuXCIgY2xhc3M9XCJjb2x1bW4tc2VsZWN0b3ItYm94IHBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiZGF0YVRhYmxlLmV4cGFuZGFibGVSb3dzXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBjaGVja2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJkYXRhVGFibGUuZXhwYW5kQ29sdW1uVmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5leHBhbmRDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiZGF0YVRhYmxlLmluZGV4Q29sdW1uXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBjaGVja2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJkYXRhVGFibGUuaW5kZXhDb2x1bW5WaXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLmluZGV4Q29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSAqbmdJZj1cImRhdGFUYWJsZS5zZWxlY3RDb2x1bW5cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5zZWxlY3RDb2x1bW5WaXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnNlbGVjdENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWl0ZW0gbGV0LWk9XCJpbmRleFwiIFtuZ0Zvck9mXT1cImRhdGFUYWJsZS5jb2x1bW5zXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhVGFibGUucHJpbWFyeUNvbHVtbiAhPT0gaXRlbS5wcm9wZXJ0eVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiaXRlbS52aXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cIml0ZW0uaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLmRhdGEtdGFibGUtaGVhZGVye21pbi1oZWlnaHQ6MjVweDttYXJnaW4tYm90dG9tOjEwcHh9LnRpdGxle2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjo1cHggMCAwIDVweH0uYnV0dG9uLXBhbmVse2Zsb2F0OnJpZ2h0fS5idXR0b24tcGFuZWwgYnV0dG9ue291dGxpbmU6MCFpbXBvcnRhbnR9LmNvbHVtbi1zZWxlY3Rvci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlfS5jb2x1bW4tc2VsZWN0b3ItYm94e2JveC1zaGFkb3c6MCAwIDEwcHggI2QzZDNkMztiYWNrZ3JvdW5kOiNmZmY7d2lkdGg6MTUwcHg7cGFkZGluZzoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjFweDt6LWluZGV4OjEwNjB9LmNvbHVtbi1zZWxlY3Rvci1ib3ggLmxpc3QtZ3JvdXAtaXRlbS5jb2x1bW4tc2VsZWN0b3ItY29sdW1ue3BhZGRpbmc6LjVyZW0gLjI1cmVtfS5jb2x1bW4tc2VsZWN0b3ItYm94IC5saXN0LWdyb3VwLWl0ZW0uY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBsYWJlbHttYXJnaW4tYm90dG9tOjB9LmNvbHVtbi1zZWxlY3Rvci1ib3ggLmxpc3QtZ3JvdXAtaXRlbS5jb2x1bW4tc2VsZWN0b3ItY29sdW1uIGlucHV0e21hcmdpbi1yaWdodDo0cHg7Zm9udC1zdHlsZTppdGFsaWN9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50IHtcblxuICBjb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSkgb25DbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKSBvbktleVVwSGFuZGxlcihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCAoZXZlbnQua2V5Q29kZSA9PT0gOSAmJiAhdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkpIHtcbiAgICAgIHRoaXMuY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaXNDaGVja2VkID0gKDxIVE1MSW5wdXRFbGVtZW50PiBldmVudC50YXJnZXQpLmNoZWNrZWQ7XG4gICAgY29uc3QgY29sdW1uTmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD4gZXZlbnQudGFyZ2V0KS5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICBjb25zdCBpbnRlcnBvbGF0ZVBhcmFtcyA9IHtcbiAgICAgICdjb2x1bW5fbmFtZSc6IGNvbHVtbk5hbWUsXG4gICAgICAndGl0bGUnOiB0aGlzLmRhdGFUYWJsZS50aXRsZVxuICAgIH07XG5cbiAgICB0aGlzLmRhdGFUYWJsZS5jb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvbiA9IChpc0NoZWNrZWQgPyB0aGlzLmRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyQ29sdW1uU2VsZWN0b3JBZGRlZCA6XG4gICAgICB0aGlzLmRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyQ29sdW1uU2VsZWN0b3JSZW1vdmVkKVxuICAgICAgLnJlcGxhY2UoJ3tjb2x1bW5fbmFtZX0nLCBpbnRlcnBvbGF0ZVBhcmFtcy5jb2x1bW5fbmFtZSlcbiAgICAgIC5yZXBsYWNlKCd7dGl0bGV9JywgaW50ZXJwb2xhdGVQYXJhbXMudGl0bGUpO1xuICB9XG59XG4iXX0=