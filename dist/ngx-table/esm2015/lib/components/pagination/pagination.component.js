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
                template: `<div class="d-flex justify-content-between align-items-center">
  <div class="pagination-range">
    <span [textContent]="dataTable.labels.paginationText
        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')
        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')
        .replace('{total}', dataTable.itemCount + '')"></span>
  </div>
  <div class="pagination-controllers pagination-box d-flex justify-content-between">
    <div class="pagination-limit d-flex justify-content-between">
      <div class="input-group">
        <div class="input-group-prepend">
          <label [attr.for]="id + '-page-limit'" class="input-group-text" [textContent]="dataTable.labels.paginationLimit"></label>
        </div>
        <select [id]="id + '-page-limit'" class="form-control" [(ngModel)]="limit" [disabled]="dataTable.itemCount === 0">
          <option *ngFor="let l of limits" [value]="l">{{ l }}</option>
        </select>
      </div>
    </div>
    <div class="pagination-pages d-flex justify-content-between">
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
      <div class="pagination-page">
        <div class="input-group">
          <div class="input-group-prepend">
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
        </div>
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
`,
                styles: [`.pagination-controllers select{min-width:5rem;text-align:right}.pagination-pages>*{margin:0 .15rem}.pagination-limit{margin-right:1.5rem}.pagination-box button{outline:0!important}`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDOztBQUU3RCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFrRmYsTUFBTTs7OztJQVVKLFlBQWlFLFNBQTZCO1FBQTdCLGNBQVMsR0FBVCxTQUFTLENBQW9CO2tCQVJ6RixjQUFjLE1BQU0sRUFBRSxFQUFFO1FBUzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2xCOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDO0tBQ0o7Ozs7SUFDQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN0Qzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRTs7OztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztLQUM3Qjs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDNUI7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDO0tBQzlCOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFLOztRQUNaLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNoRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2hDO0tBQ0Y7OztZQW5KRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyRVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsc0xBQXNMLENBQUM7YUFDak07Ozs7WUFuRlEsa0JBQWtCLHVCQThGWixNQUFNLFNBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDOzs7d0JBTnZELFNBQVMsU0FBQyxXQUFXO3FCQUlyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnR9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXJhbmdlXCI+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvblRleHRcbiAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsIHRoaXMuTWF0aC5jZWlsKGRhdGFUYWJsZS5pdGVtQ291bnQgLyBkYXRhVGFibGUubGltaXQpICE9PSAwID8gZGF0YVRhYmxlLm9mZnNldCArIDEgKyAnJyA6ICcwJylcbiAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCB0aGlzLk1hdGgubWluKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQsIGRhdGFUYWJsZS5pdGVtQ291bnQpICsgJycpXG4gICAgICAgIC5yZXBsYWNlKCd7dG90YWx9JywgZGF0YVRhYmxlLml0ZW1Db3VudCArICcnKVwiPjwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWNvbnRyb2xsZXJzIHBhZ2luYXRpb24tYm94IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbWl0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1saW1pdCdcIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uTGltaXRcIj48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlbGVjdCBbaWRdPVwiaWQgKyAnLXBhZ2UtbGltaXQnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cImxpbWl0XCIgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIj5cbiAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsIG9mIGxpbWl0c1wiIFt2YWx1ZV09XCJsXCI+e3sgbCB9fTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXBhZ2VzIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLm9mZnNldCA8PSAwXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VGaXJzdCgpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1maXJzdHBhZ2VcIlxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5maXJzdFBhZ2VcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkYXRhVGFibGUub2Zmc2V0IDw9IDBcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUJhY2soKVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tcHJldnBhZ2VcIlxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5wcmV2UGFnZVwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1pbnB1dCdcIj5cbiAgICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTGFiZWwgfX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0ICNwYWdlSW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgIFtpZF09XCJpZCArICctcGFnZS1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1pbj1cIjFcIiBzdGVwPVwiMVwiIG1heD1cInt7bWF4UGFnZX19XCJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgKGJsdXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKGtleXVwLmVzYyk9XCJwYWdlSW5wdXQudmFsdWUgPSBwYWdlXCJcbiAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlciArICcgJyArXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlck5vZk0ucmVwbGFjZSgne059JywgJycrcGFnZSkucmVwbGFjZSgne019JywgJycrbWF4UGFnZSlcIlxuICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cbiAgICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uVG90YWxQYWdlcyB9fSZuYnNwO3t7IGRhdGFUYWJsZS5sYXN0UGFnZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZvcndhcmQoKVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tbmV4dHBhZ2VcIlxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5uZXh0UGFnZVwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0KSA+PSBkYXRhVGFibGUuaXRlbUNvdW50XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VMYXN0KClcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWxhc3RwYWdlXCJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMubGFzdFBhZ2VcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5wYWdpbmF0aW9uLWNvbnRyb2xsZXJzIHNlbGVjdHttaW4td2lkdGg6NXJlbTt0ZXh0LWFsaWduOnJpZ2h0fS5wYWdpbmF0aW9uLXBhZ2VzPip7bWFyZ2luOjAgLjE1cmVtfS5wYWdpbmF0aW9uLWxpbWl0e21hcmdpbi1yaWdodDoxLjVyZW19LnBhZ2luYXRpb24tYm94IGJ1dHRvbntvdXRsaW5lOjAhaW1wb3J0YW50fWBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQge1xuXG4gIGlkID0gYHBhZ2luYXRpb24tJHtuZXh0SWQrK31gO1xuXG4gIEBWaWV3Q2hpbGQoJ3BhZ2VJbnB1dCcpIHBhZ2VJbnB1dDogRWxlbWVudFJlZjtcblxuICBNYXRoOiBhbnk7XG5cbiAgQElucHV0KCkgbGltaXRzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50KSB7XG4gICAgdGhpcy5NYXRoID0gTWF0aDtcbiAgfVxuXG4gIHBhZ2VCYWNrKCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCAtPSBNYXRoLm1pbih0aGlzLmRhdGFUYWJsZS5saW1pdCwgdGhpcy5kYXRhVGFibGUub2Zmc2V0KTtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUub2Zmc2V0IDw9IDApIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG59XG4gIHBhZ2VGb3J3YXJkKCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCArPSB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgICBpZiAoKHRoaXMuZGF0YVRhYmxlLm9mZnNldCArIHRoaXMuZGF0YVRhYmxlLmxpbWl0KSA+PSB0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwYWdlRmlyc3QoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ID0gMDtcbiAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwYWdlTGFzdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPSAodGhpcy5tYXhQYWdlIC0gMSkgKiB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgICBpZiAoKHRoaXMuZGF0YVRhYmxlLm9mZnNldCArIHRoaXMuZGF0YVRhYmxlLmxpbWl0KSA+PSB0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4UGFnZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCAvIHRoaXMuZGF0YVRhYmxlLmxpbWl0KTtcbiAgfVxuXG4gIGdldCBsaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gIH1cblxuICBzZXQgbGltaXQodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5saW1pdCA9ICt2YWx1ZTtcbiAgICAvLyByZXR1cm5pbmcgYmFjayB0byB0aGUgZmlyc3QgcGFnZS5cbiAgICB0aGlzLnBhZ2UgPSAxO1xuICB9XG5cbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnBhZ2U7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlLnBhZ2UgPSArdmFsdWU7XG4gIH1cblxuICB2YWxpZGF0ZShldmVudCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gK2V2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucGFnZSkge1xuICAgICAgdGhpcy5wYWdlID0gKGV2ZW50LnRhcmdldC52YWx1ZSA+IHRoaXMubWF4UGFnZSkgPyB0aGlzLm1heFBhZ2UgOiAobmV3VmFsdWUgPCAxICkgPyAxIDogbmV3VmFsdWU7XG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnBhZ2U7XG4gICAgfVxuICB9XG59XG4iXX0=