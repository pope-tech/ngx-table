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
<<<<<<< HEAD
    <div class="pagination-pages offset-md-3 col-md-6">
=======
    <div class="pagination-pages d-flex justify-content-between">
      <button [disabled]="dataTable.offset <= 0"
              (click)="pageFirst()"
              class="btn btn-default pagination-firstpage"
              [attr.aria-controls]="dataTable.id">
        <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        <span class="sr-only">{{ dataTable.labels.firstPage }} </span>
      </button>
      <button [disabled]="dataTable.offset <= 0"
              (click)="pageBack()"
              class="btn btn-default pagination-prevpage"
              [attr.aria-controls]="dataTable.id">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
        <span class="sr-only">{{ dataTable.labels.prevPage }} </span>
      </button>
>>>>>>> 0e9fb496fcf062ec3e94ef66ac7c9e3ae9fddece
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
<<<<<<< HEAD
=======
      <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount"
              (click)="pageForward()"
              class="btn btn-default pagination-nextpage"
              [attr.aria-controls]="dataTable.id">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        <span class="sr-only">{{ dataTable.labels.nextPage }}</span>
      </button>
      <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount"
              (click)="pageLast()"
              class="btn btn-default pagination-lastpage"
              [attr.aria-controls]="dataTable.id">
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        <span class="sr-only">{{ dataTable.labels.lastPage }}</span>
      </button>
>>>>>>> 0e9fb496fcf062ec3e94ef66ac7c9e3ae9fddece
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDOztBQUU3RCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUF1SGYsTUFBTTs7OztJQVVKLFlBQWlFLFNBQTZCO1FBQTdCLGNBQVMsR0FBVCxTQUFTLENBQW9CO2tCQVJ6RixjQUFjLE1BQU0sRUFBRSxFQUFFO1FBUzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2xCOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDO0tBQ0o7Ozs7SUFDQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN0Qzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRTs7OztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztLQUM3Qjs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDNUI7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDO0tBQzlCOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFLOztRQUNaLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNoRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2hDO0tBQ0Y7OztZQXhMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0hYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLDZGQUE2RixDQUFDO2FBQ3hHOzs7O1lBeEhRLGtCQUFrQix1QkFtSVosTUFBTSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzs7O3dCQU52RCxTQUFTLFNBQUMsV0FBVztxQkFJckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50fSBmcm9tICcuLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXJhbmdlIGNvbFwiPlxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLnBhZ2luYXRpb25UZXh0XG4gICAgICAgIC5yZXBsYWNlKCd7ZnJvbX0nLCB0aGlzLk1hdGguY2VpbChkYXRhVGFibGUuaXRlbUNvdW50IC8gZGF0YVRhYmxlLmxpbWl0KSAhPT0gMCA/IGRhdGFUYWJsZS5vZmZzZXQgKyAxICsgJycgOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCd7dG99JywgdGhpcy5NYXRoLm1pbihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0LCBkYXRhVGFibGUuaXRlbUNvdW50KSArICcnKVxuICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsIGRhdGFUYWJsZS5pdGVtQ291bnQgKyAnJylcIj48L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tbGltaXQgY29sLW1kLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWQgKyAnLXBhZ2UtbGltaXQnXCIgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvbkxpbWl0XCI+PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWxlY3QgW2lkXT1cImlkICsgJy1wYWdlLWxpbWl0J1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJsaW1pdFwiIFtkaXNhYmxlZF09XCJkYXRhVGFibGUuaXRlbUNvdW50ID09PSAwXCI+XG4gICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbCBvZiBsaW1pdHNcIiBbdmFsdWVdPVwibFwiPnt7IGwgfX08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjw8PDw8PDwgSEVBRFxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXBhZ2VzIG9mZnNldC1tZC0zIGNvbC1tZC02XCI+XG49PT09PT09XG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcGFnZXMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkYXRhVGFibGUub2Zmc2V0IDw9IDBcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZpcnN0KClcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWZpcnN0cGFnZVwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnt7IGRhdGFUYWJsZS5sYWJlbHMuZmlyc3RQYWdlIH19IDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLm9mZnNldCA8PSAwXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VCYWNrKClcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLXByZXZwYWdlXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj57eyBkYXRhVGFibGUubGFiZWxzLnByZXZQYWdlIH19IDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuPj4+Pj4+PiAwZTlmYjQ5NmZjZjA2MmVjM2U5NGVmNjZhYzdjOWUzYWU5ZmRkZWNlXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5vZmZzZXQgPD0gMFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZpcnN0KClcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1maXJzdHBhZ2VcIlxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMuZmlyc3RQYWdlXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5vZmZzZXQgPD0gMFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUJhY2soKVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLXByZXZwYWdlXCJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLnByZXZQYWdlXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZCBkLXNtLWJsb2NrIGQtbm9uZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1pbnB1dCdcIj5cbiAgICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTGFiZWwgfX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0ICNwYWdlSW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgIFtpZF09XCJpZCArICctcGFnZS1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1pbj1cIjFcIiBzdGVwPVwiMVwiIG1heD1cInt7bWF4UGFnZX19XCJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgKGJsdXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKGtleXVwLmVzYyk9XCJwYWdlSW5wdXQudmFsdWUgPSBwYWdlXCJcbiAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlciArICcgJyArXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlck5vZk0ucmVwbGFjZSgne059JywgJycrcGFnZSkucmVwbGFjZSgne019JywgJycrbWF4UGFnZSlcIlxuICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cbiAgICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uVG90YWxQYWdlcyB9fSZuYnNwO3t7IGRhdGFUYWJsZS5sYXN0UGFnZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VGb3J3YXJkKClcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1uZXh0cGFnZVwiXG4gICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5uZXh0UGFnZVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIoZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCkgPj0gZGF0YVRhYmxlLml0ZW1Db3VudFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUxhc3QoKVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWxhc3RwYWdlXCJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmxhc3RQYWdlXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbjw8PDw8PDwgSEVBRFxuPT09PT09PVxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZvcndhcmQoKVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tbmV4dHBhZ2VcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj57eyBkYXRhVGFibGUubGFiZWxzLm5leHRQYWdlIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIoZGF0YVRhYmxlLm9mZnNldCArIGRhdGFUYWJsZS5saW1pdCkgPj0gZGF0YVRhYmxlLml0ZW1Db3VudFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJwYWdlTGFzdCgpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1sYXN0cGFnZVwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj57eyBkYXRhVGFibGUubGFiZWxzLmxhc3RQYWdlIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4+Pj4+Pj4+IDBlOWZiNDk2ZmNmMDYyZWMzZTk0ZWY2NmFjN2M5ZTNhZTlmZGRlY2VcbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5wYWdpbmF0aW9uLWNvbnRyb2xsZXJzIHNlbGVjdHt0ZXh0LWFsaWduOnJpZ2h0fS5wYWdpbmF0aW9uLWJveCBidXR0b257b3V0bGluZTowIWltcG9ydGFudH1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IHtcblxuICBpZCA9IGBwYWdpbmF0aW9uLSR7bmV4dElkKyt9YDtcblxuICBAVmlld0NoaWxkKCdwYWdlSW5wdXQnKSBwYWdlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgTWF0aDogYW55O1xuXG4gIEBJbnB1dCgpIGxpbWl0czogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCkge1xuICAgIHRoaXMuTWF0aCA9IE1hdGg7XG4gIH1cblxuICBwYWdlQmFjaygpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgLT0gTWF0aC5taW4odGhpcy5kYXRhVGFibGUubGltaXQsIHRoaXMuZGF0YVRhYmxlLm9mZnNldCk7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlLm9mZnNldCA8PSAwKSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuICBwYWdlRm9yd2FyZCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKz0gdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKyB0aGlzLmRhdGFUYWJsZS5saW1pdCkgPj0gdGhpcy5kYXRhVGFibGUuaXRlbUNvdW50KSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcGFnZUZpcnN0KCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCA9IDA7XG4gICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcGFnZUxhc3QoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ID0gKHRoaXMubWF4UGFnZSAtIDEpICogdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgKyB0aGlzLmRhdGFUYWJsZS5saW1pdCkgPj0gdGhpcy5kYXRhVGFibGUuaXRlbUNvdW50KSB7XG4gICAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heFBhZ2UoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQgLyB0aGlzLmRhdGFUYWJsZS5saW1pdCk7XG4gIH1cblxuICBnZXQgbGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICB9XG5cbiAgc2V0IGxpbWl0KHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhVGFibGUubGltaXQgPSArdmFsdWU7XG4gICAgLy8gcmV0dXJuaW5nIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgdGhpcy5wYWdlID0gMTtcbiAgfVxuXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5wYWdlID0gK3ZhbHVlO1xuICB9XG5cbiAgdmFsaWRhdGUoZXZlbnQpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZSA9IChldmVudC50YXJnZXQudmFsdWUgPiB0aGlzLm1heFBhZ2UpID8gdGhpcy5tYXhQYWdlIDogKG5ld1ZhbHVlIDwgMSApID8gMSA6IG5ld1ZhbHVlO1xuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5wYWdlO1xuICAgIH1cbiAgfVxufVxuIl19