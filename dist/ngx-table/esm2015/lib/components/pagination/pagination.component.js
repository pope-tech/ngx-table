/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
/** @type {?} */
let nextId = 0;
export class DataTablePaginationComponent {
    /**
     * @param {?} dataTable
     */
    constructor(dataTable) {
        this.dataTable = dataTable;
        this.id = `pagination-${nextId++}`;
        this.Math = Math;
    }
    /**
     * @return {?}
     */
    pageBack() {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
        if (this.dataTable.offset <= 0) {
            this.pageInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    pageForward() {
        this.dataTable.offset += this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    pageFirst() {
        this.dataTable.offset = 0;
        this.pageInput.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    pageLast() {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    get maxPage() {
        return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
    }
    /**
     * @return {?}
     */
    get limit() {
        return this.dataTable.limit;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set limit(value) {
        this.dataTable.limit = +value;
        // returning back to the first page.
        this.page = 1;
    }
    /**
     * @return {?}
     */
    get page() {
        return this.dataTable.page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this.dataTable.page = +value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    validate(event) {
        /** @type {?} */
        const newValue = +event.target.value;
        if (newValue !== this.page) {
            this.page = (event.target.value > this.maxPage) ? this.maxPage : (newValue < 1) ? 1 : newValue;
            event.target.value = this.page;
        }
    }
}
DataTablePaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'data-table-pagination',
                template: `<div class="row">
  <div class="pagination-range col">
    <span [textContent]="dataTable.labels.paginationText
        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')
        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')
        .replace('{total}', dataTable.itemCount + '')"></span>
  </div>
</div>
<div class="row">
    <div class="pagination-limit col-md-3">
      <div class="input-group">
        <div class="input-group-prepend">
          <label [attr.for]="id + '-page-limit'" class="input-group-text" [textContent]="dataTable.labels.paginationLimit"></label>
        </div>
        <select [id]="id + '-page-limit'" class="form-control" [(ngModel)]="limit" [disabled]="dataTable.itemCount === 0">
          <option *ngFor="let l of limits" [value]="l">{{ l }}</option>
        </select>
      </div>
    </div>
    <div class="pagination-pages offset-md-3 col-md-6">
      <div class="pagination-page">
        <div class="input-group">
          <button [disabled]="dataTable.offset <= 0"
                  (click)="pageFirst()"
                  class="btn btn-default pagination-firstpage"
                  [title]="dataTable.labels.firstPage"
                  [attr.aria-controls]="dataTable.id">
            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
          </button>
          <button [disabled]="dataTable.offset <= 0"
                  (click)="pageBack()"
                  class="btn btn-default pagination-prevpage"
                  [title]="dataTable.labels.prevPage"
                  [attr.aria-controls]="dataTable.id">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </button>

          <div class="input-group-prepend d-sm-block d-none">
            <label class="input-group-text" [attr.for]="id + '-page-input'">
              {{ dataTable.labels.pageNumberLabel }}
            </label>
          </div>
          <input #pageInput type="number"
                 [id]="id + '-page-input'"
                 class="form-control" min="1" step="1" max="{{maxPage}}"
                 [disabled]="dataTable.itemCount === 0"
                 [ngModel]="page"
                 (blur)="validate($event)"
                 (keyup.enter)="validate($event)"
                 (keyup.esc)="pageInput.value = page"
                 [title]="dataTable.labels.pageNumber + ' ' +
                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)"
                 [attr.aria-controls]="dataTable.id"/>
          <div class="input-group-append">
            <span class="input-group-text">
              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}
            </span>
          </div>

          <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount"
                  (click)="pageForward()"
                  class="btn btn-default pagination-nextpage"
                  [title]="dataTable.labels.nextPage"
                  [attr.aria-controls]="dataTable.id">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </button>
          <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount"
                  (click)="pageLast()"
                  class="btn btn-default pagination-lastpage"
                  [title]="dataTable.labels.lastPage"
                  [attr.aria-controls]="dataTable.id">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
</div>
`,
                styles: [`.pagination-controllers select{text-align:right}.pagination-box button{outline:0!important}`]
            },] },
];
/** @nocollapse */
DataTablePaginationComponent.ctorParameters = () => [
    { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(() => DataTableComponent),] }] }
];
DataTablePaginationComponent.propDecorators = {
    pageInput: [{ type: ViewChild, args: ['pageInput',] }],
    limits: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataTablePaginationComponent.prototype.id;
    /** @type {?} */
    DataTablePaginationComponent.prototype.pageInput;
    /** @type {?} */
    DataTablePaginationComponent.prototype.Math;
    /** @type {?} */
    DataTablePaginationComponent.prototype.limits;
    /** @type {?} */
    DataTablePaginationComponent.prototype.dataTable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDOztBQUU3RCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFvRmYsTUFBTTs7OztJQVVKLFlBQWlFLFNBQTZCO1FBQTdCLGNBQVMsR0FBVCxTQUFTLENBQW9CO2tCQVJ6RixjQUFjLE1BQU0sRUFBRSxFQUFFO1FBUzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2xCOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDO0tBQ0o7Ozs7SUFDQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN0Qzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRTs7OztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztLQUM3Qjs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDNUI7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDO0tBQzlCOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFLOztRQUNaLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNoRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2hDO0tBQ0Y7OztZQXJKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTZFWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyw2RkFBNkYsQ0FBQzthQUN4Rzs7OztZQXJGUSxrQkFBa0IsdUJBZ0daLE1BQU0sU0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Ozt3QkFOdkQsU0FBUyxTQUFDLFdBQVc7cUJBSXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJvd1wiPlxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1yYW5nZSBjb2xcIj5cbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uVGV4dFxuICAgICAgICAucmVwbGFjZSgne2Zyb219JywgdGhpcy5NYXRoLmNlaWwoZGF0YVRhYmxlLml0ZW1Db3VudCAvIGRhdGFUYWJsZS5saW1pdCkgIT09IDAgPyBkYXRhVGFibGUub2Zmc2V0ICsgMSArICcnIDogJzAnKVxuICAgICAgICAucmVwbGFjZSgne3RvfScsIHRoaXMuTWF0aC5taW4oZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCwgZGF0YVRhYmxlLml0ZW1Db3VudCkgKyAnJylcbiAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCBkYXRhVGFibGUuaXRlbUNvdW50ICsgJycpXCI+PC9zcGFuPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbWl0IGNvbC1tZC0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImlkICsgJy1wYWdlLWxpbWl0J1wiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25MaW1pdFwiPjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2VsZWN0IFtpZF09XCJpZCArICctcGFnZS1saW1pdCdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwibGltaXRcIiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLml0ZW1Db3VudCA9PT0gMFwiPlxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGwgb2YgbGltaXRzXCIgW3ZhbHVlXT1cImxcIj57eyBsIH19PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcGFnZXMgb2Zmc2V0LW1kLTMgY29sLW1kLTZcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLm9mZnNldCA8PSAwXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJwYWdlRmlyc3QoKVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWZpcnN0cGFnZVwiXG4gICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5maXJzdFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLm9mZnNldCA8PSAwXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJwYWdlQmFjaygpXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tcHJldnBhZ2VcIlxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucHJldlBhZ2VcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kIGQtc20tYmxvY2sgZC1ub25lXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgW2F0dHIuZm9yXT1cImlkICsgJy1wYWdlLWlucHV0J1wiPlxuICAgICAgICAgICAgICB7eyBkYXRhVGFibGUubGFiZWxzLnBhZ2VOdW1iZXJMYWJlbCB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgI3BhZ2VJbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgW2lkXT1cImlkICsgJy1wYWdlLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbWluPVwiMVwiIHN0ZXA9XCIxXCIgbWF4PVwie3ttYXhQYWdlfX1cIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLml0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cInBhZ2VcIlxuICAgICAgICAgICAgICAgICAoYmx1cik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInZhbGlkYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAoa2V5dXAuZXNjKT1cInBhZ2VJbnB1dC52YWx1ZSA9IHBhZ2VcIlxuICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTm9mTS5yZXBsYWNlKCd7Tn0nLCAnJytwYWdlKS5yZXBsYWNlKCd7TX0nLCAnJyttYXhQYWdlKVwiXG4gICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25Ub3RhbFBhZ2VzIH19Jm5ic3A7e3sgZGF0YVRhYmxlLmxhc3RQYWdlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIoZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCkgPj0gZGF0YVRhYmxlLml0ZW1Db3VudFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZvcndhcmQoKVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLW5leHRwYWdlXCJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLm5leHRQYWdlXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0KSA+PSBkYXRhVGFibGUuaXRlbUNvdW50XCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJwYWdlTGFzdCgpXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tbGFzdHBhZ2VcIlxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMubGFzdFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLnBhZ2luYXRpb24tY29udHJvbGxlcnMgc2VsZWN0e3RleHQtYWxpZ246cmlnaHR9LnBhZ2luYXRpb24tYm94IGJ1dHRvbntvdXRsaW5lOjAhaW1wb3J0YW50fWBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQge1xuXG4gIGlkID0gYHBhZ2luYXRpb24tJHtuZXh0SWQrK31gO1xuXG4gIEBWaWV3Q2hpbGQoJ3BhZ2VJbnB1dCcpIHBhZ2VJbnB1dDogRWxlbWVudFJlZjtcblxuICBNYXRoOiBhbnk7XG5cbiAgQElucHV0KCkgbGltaXRzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50KSB7XG4gICAgdGhpcy5NYXRoID0gTWF0aDtcbiAgfVxuXG4gIHBhZ2VCYWNrKCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCAtPSBNYXRoLm1pbih0aGlzLmRhdGFUYWJsZS5saW1pdCwgdGhpcy5kYXRhVGFibGUub2Zmc2V0KTtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUub2Zmc2V0IDw9IDApIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG59XG4gIHBhZ2VGb3J3YXJkKCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCArPSB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgICBpZiAoKHRoaXMuZGF0YVRhYmxlLm9mZnNldCArIHRoaXMuZGF0YVRhYmxlLmxpbWl0KSA+PSB0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwYWdlRmlyc3QoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ID0gMDtcbiAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwYWdlTGFzdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPSAodGhpcy5tYXhQYWdlIC0gMSkgKiB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgICBpZiAoKHRoaXMuZGF0YVRhYmxlLm9mZnNldCArIHRoaXMuZGF0YVRhYmxlLmxpbWl0KSA+PSB0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4UGFnZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCAvIHRoaXMuZGF0YVRhYmxlLmxpbWl0KTtcbiAgfVxuXG4gIGdldCBsaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gIH1cblxuICBzZXQgbGltaXQodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5saW1pdCA9ICt2YWx1ZTtcbiAgICAvLyByZXR1cm5pbmcgYmFjayB0byB0aGUgZmlyc3QgcGFnZS5cbiAgICB0aGlzLnBhZ2UgPSAxO1xuICB9XG5cbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnBhZ2U7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlLnBhZ2UgPSArdmFsdWU7XG4gIH1cblxuICB2YWxpZGF0ZShldmVudCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gK2V2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucGFnZSkge1xuICAgICAgdGhpcy5wYWdlID0gKGV2ZW50LnRhcmdldC52YWx1ZSA+IHRoaXMubWF4UGFnZSkgPyB0aGlzLm1heFBhZ2UgOiAobmV3VmFsdWUgPCAxICkgPyAxIDogbmV3VmFsdWU7XG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnBhZ2U7XG4gICAgfVxuICB9XG59XG4iXX0=