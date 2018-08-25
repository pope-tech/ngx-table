/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
/** @type {?} */
var nextId = 0;
var DataTablePaginationComponent = /** @class */ (function () {
    function DataTablePaginationComponent(dataTable) {
        this.dataTable = dataTable;
        this.id = "pagination-" + nextId++;
        this.Math = Math;
    }
    /**
     * @return {?}
     */
    DataTablePaginationComponent.prototype.pageBack = /**
     * @return {?}
     */
    function () {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
        if (this.dataTable.offset <= 0) {
            this.pageInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    DataTablePaginationComponent.prototype.pageForward = /**
     * @return {?}
     */
    function () {
        this.dataTable.offset += this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    DataTablePaginationComponent.prototype.pageFirst = /**
     * @return {?}
     */
    function () {
        this.dataTable.offset = 0;
        this.pageInput.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    DataTablePaginationComponent.prototype.pageLast = /**
     * @return {?}
     */
    function () {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    };
    Object.defineProperty(DataTablePaginationComponent.prototype, "maxPage", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePaginationComponent.prototype, "limit", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dataTable.limit;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataTable.limit = +value;
            // returning back to the first page.
            this.page = 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePaginationComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dataTable.page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataTable.page = +value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    DataTablePaginationComponent.prototype.validate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var newValue = +event.target.value;
        if (newValue !== this.page) {
            this.page = (event.target.value > this.maxPage) ? this.maxPage : (newValue < 1) ? 1 : newValue;
            event.target.value = this.page;
        }
    };
    DataTablePaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'data-table-pagination',
                    template: "<div class=\"d-flex justify-content-between align-items-center\">\n  <div class=\"pagination-range\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n  </div>\n  <div class=\"pagination-controllers pagination-box d-flex justify-content-between\">\n    <div class=\"pagination-limit d-flex justify-content-between\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n        </div>\n        <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\" [disabled]=\"dataTable.itemCount === 0\">\n          <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"pagination-pages d-flex justify-content-between\">\n      <button [disabled]=\"dataTable.offset <= 0\"\n              (click)=\"pageFirst()\"\n              class=\"btn btn-default pagination-firstpage\"\n              [title]=\"dataTable.labels.firstPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n      <button [disabled]=\"dataTable.offset <= 0\"\n              (click)=\"pageBack()\"\n              class=\"btn btn-default pagination-prevpage\"\n              [title]=\"dataTable.labels.prevPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n      <div class=\"pagination-page\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n              {{ dataTable.labels.pageNumberLabel }}\n            </label>\n          </div>\n          <input #pageInput type=\"number\"\n                 [id]=\"id + '-page-input'\"\n                 class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n                 [disabled]=\"dataTable.itemCount === 0\"\n                 [ngModel]=\"page\"\n                 (blur)=\"validate($event)\"\n                 (keyup.enter)=\"validate($event)\"\n                 (keyup.esc)=\"pageInput.value = page\"\n                 [title]=\"dataTable.labels.pageNumber + ' ' +\n                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)\"\n                 [attr.aria-controls]=\"dataTable.id\"/>\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n          </div>\n        </div>\n      </div>\n      <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n              (click)=\"pageForward()\"\n              class=\"btn btn-default pagination-nextpage\"\n              [title]=\"dataTable.labels.nextPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n      <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n              (click)=\"pageLast()\"\n              class=\"btn btn-default pagination-lastpage\"\n              [title]=\"dataTable.labels.lastPage\"\n              [attr.aria-controls]=\"dataTable.id\">\n        <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n",
                    styles: [".pagination-controllers select{min-width:5rem;text-align:right}.pagination-pages>*{margin:0 .15rem}.pagination-limit{margin-right:1.5rem}.pagination-box button{outline:0!important}"]
                },] },
    ];
    /** @nocollapse */
    DataTablePaginationComponent.ctorParameters = function () { return [
        { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return DataTableComponent; }),] }] }
    ]; };
    DataTablePaginationComponent.propDecorators = {
        pageInput: [{ type: ViewChild, args: ['pageInput',] }],
        limits: [{ type: Input }]
    };
    return DataTablePaginationComponent;
}());
export { DataTablePaginationComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7O0FBRTdELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQzs7SUE0RmIsc0NBQWlFLFNBQTZCO1FBQTdCLGNBQVMsR0FBVCxTQUFTLENBQW9CO2tCQVJ6RixnQkFBYyxNQUFNLEVBQUk7UUFTM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDbEI7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztLQUNKOzs7O0lBQ0Msa0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7O0lBRUQsZ0RBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3RDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2xFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEM7S0FDRjtJQUVELHNCQUFJLGlEQUFPOzs7O1FBQVg7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25FOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFLOzs7O1FBQVQ7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDN0I7Ozs7O1FBRUQsVUFBVSxLQUFLO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1lBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7OztPQU5BO0lBUUQsc0JBQUksOENBQUk7Ozs7UUFBUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM1Qjs7Ozs7UUFFRCxVQUFTLEtBQUs7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM5Qjs7O09BSkE7Ozs7O0lBTUQsK0NBQVE7Ozs7SUFBUixVQUFTLEtBQUs7O1FBQ1osSUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2hHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDaEM7S0FDRjs7Z0JBbkpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsK3hIQTJFWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxzTEFBc0wsQ0FBQztpQkFDak07Ozs7Z0JBbkZRLGtCQUFrQix1QkE4RlosTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7Ozs0QkFOdkQsU0FBUyxTQUFDLFdBQVc7eUJBSXJCLEtBQUs7O3VDQXBHUjs7U0E0RmEsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnR9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXJhbmdlXCI+XG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMucGFnaW5hdGlvblRleHRcbiAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsIHRoaXMuTWF0aC5jZWlsKGRhdGFUYWJsZS5pdGVtQ291bnQgLyBkYXRhVGFibGUubGltaXQpICE9PSAwID8gZGF0YVRhYmxlLm9mZnNldCArIDEgKyAnJyA6ICcwJylcbiAgICAgICAgLnJlcGxhY2UoJ3t0b30nLCB0aGlzLk1hdGgubWluKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQsIGRhdGFUYWJsZS5pdGVtQ291bnQpICsgJycpXG4gICAgICAgIC5yZXBsYWNlKCd7dG90YWx9JywgZGF0YVRhYmxlLml0ZW1Db3VudCArICcnKVwiPjwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWNvbnRyb2xsZXJzIHBhZ2luYXRpb24tYm94IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbWl0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1saW1pdCdcIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uTGltaXRcIj48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlbGVjdCBbaWRdPVwiaWQgKyAnLXBhZ2UtbGltaXQnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cImxpbWl0XCIgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIj5cbiAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsIG9mIGxpbWl0c1wiIFt2YWx1ZV09XCJsXCI+e3sgbCB9fTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXBhZ2VzIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGF0YVRhYmxlLm9mZnNldCA8PSAwXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VGaXJzdCgpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1maXJzdHBhZ2VcIlxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5maXJzdFBhZ2VcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkYXRhVGFibGUub2Zmc2V0IDw9IDBcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUJhY2soKVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tcHJldnBhZ2VcIlxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5wcmV2UGFnZVwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIFthdHRyLmZvcl09XCJpZCArICctcGFnZS1pbnB1dCdcIj5cbiAgICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdlTnVtYmVyTGFiZWwgfX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0ICNwYWdlSW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgIFtpZF09XCJpZCArICctcGFnZS1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1pbj1cIjFcIiBzdGVwPVwiMVwiIG1heD1cInt7bWF4UGFnZX19XCJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5pdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgKGJsdXIpPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKGtleXVwLmVzYyk9XCJwYWdlSW5wdXQudmFsdWUgPSBwYWdlXCJcbiAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlciArICcgJyArXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5sYWJlbHMucGFnZU51bWJlck5vZk0ucmVwbGFjZSgne059JywgJycrcGFnZSkucmVwbGFjZSgne019JywgJycrbWF4UGFnZSlcIlxuICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cbiAgICAgICAgICAgICAge3sgZGF0YVRhYmxlLmxhYmVscy5wYWdpbmF0aW9uVG90YWxQYWdlcyB9fSZuYnNwO3t7IGRhdGFUYWJsZS5sYXN0UGFnZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicGFnZUZvcndhcmQoKVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tbmV4dHBhZ2VcIlxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5uZXh0UGFnZVwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIihkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0KSA+PSBkYXRhVGFibGUuaXRlbUNvdW50XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2VMYXN0KClcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWxhc3RwYWdlXCJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImRhdGFUYWJsZS5sYWJlbHMubGFzdFBhZ2VcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5wYWdpbmF0aW9uLWNvbnRyb2xsZXJzIHNlbGVjdHttaW4td2lkdGg6NXJlbTt0ZXh0LWFsaWduOnJpZ2h0fS5wYWdpbmF0aW9uLXBhZ2VzPip7bWFyZ2luOjAgLjE1cmVtfS5wYWdpbmF0aW9uLWxpbWl0e21hcmdpbi1yaWdodDoxLjVyZW19LnBhZ2luYXRpb24tYm94IGJ1dHRvbntvdXRsaW5lOjAhaW1wb3J0YW50fWBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQge1xuXG4gIGlkID0gYHBhZ2luYXRpb24tJHtuZXh0SWQrK31gO1xuXG4gIEBWaWV3Q2hpbGQoJ3BhZ2VJbnB1dCcpIHBhZ2VJbnB1dDogRWxlbWVudFJlZjtcblxuICBNYXRoOiBhbnk7XG5cbiAgQElucHV0KCkgbGltaXRzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50KSB7XG4gICAgdGhpcy5NYXRoID0gTWF0aDtcbiAgfVxuXG4gIHBhZ2VCYWNrKCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCAtPSBNYXRoLm1pbih0aGlzLmRhdGFUYWJsZS5saW1pdCwgdGhpcy5kYXRhVGFibGUub2Zmc2V0KTtcbiAgICBpZiAodGhpcy5kYXRhVGFibGUub2Zmc2V0IDw9IDApIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG59XG4gIHBhZ2VGb3J3YXJkKCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCArPSB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgICBpZiAoKHRoaXMuZGF0YVRhYmxlLm9mZnNldCArIHRoaXMuZGF0YVRhYmxlLmxpbWl0KSA+PSB0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwYWdlRmlyc3QoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ID0gMDtcbiAgICB0aGlzLnBhZ2VJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwYWdlTGFzdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPSAodGhpcy5tYXhQYWdlIC0gMSkgKiB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgICBpZiAoKHRoaXMuZGF0YVRhYmxlLm9mZnNldCArIHRoaXMuZGF0YVRhYmxlLmxpbWl0KSA+PSB0aGlzLmRhdGFUYWJsZS5pdGVtQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4UGFnZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCAvIHRoaXMuZGF0YVRhYmxlLmxpbWl0KTtcbiAgfVxuXG4gIGdldCBsaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUubGltaXQ7XG4gIH1cblxuICBzZXQgbGltaXQodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5saW1pdCA9ICt2YWx1ZTtcbiAgICAvLyByZXR1cm5pbmcgYmFjayB0byB0aGUgZmlyc3QgcGFnZS5cbiAgICB0aGlzLnBhZ2UgPSAxO1xuICB9XG5cbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlLnBhZ2U7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlLnBhZ2UgPSArdmFsdWU7XG4gIH1cblxuICB2YWxpZGF0ZShldmVudCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gK2V2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucGFnZSkge1xuICAgICAgdGhpcy5wYWdlID0gKGV2ZW50LnRhcmdldC52YWx1ZSA+IHRoaXMubWF4UGFnZSkgPyB0aGlzLm1heFBhZ2UgOiAobmV3VmFsdWUgPCAxICkgPyAxIDogbmV3VmFsdWU7XG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnBhZ2U7XG4gICAgfVxuICB9XG59XG4iXX0=