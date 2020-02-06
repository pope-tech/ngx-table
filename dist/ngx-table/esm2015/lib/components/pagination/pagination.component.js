import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
let nextId = 0;
let DataTablePaginationComponent = class DataTablePaginationComponent {
    constructor(dataTable) {
        this.dataTable = dataTable;
        this.id = `pagination-${nextId++}`;
        this.Math = Math;
    }
    pageBack() {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
        if (this.dataTable.offset <= 0) {
            this.pageInput.nativeElement.focus();
        }
    }
    pageForward() {
        this.dataTable.offset += this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    }
    pageFirst() {
        this.dataTable.offset = 0;
        this.pageInput.nativeElement.focus();
    }
    pageLast() {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
        if ((this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount) {
            this.pageInput.nativeElement.focus();
        }
    }
    get maxPage() {
        return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
    }
    get limit() {
        return this.dataTable.limit;
    }
    set limit(value) {
        this.dataTable.limit = +value;
        // returning back to the first page.
        this.page = 1;
    }
    get page() {
        return this.dataTable.page;
    }
    set page(value) {
        this.dataTable.page = +value;
    }
    validate(event) {
        const newValue = +event.target.value;
        if (newValue !== this.page) {
            this.page = (event.target.value > this.maxPage) ? this.maxPage : (newValue < 1) ? 1 : newValue;
            event.target.value = this.page;
        }
    }
};
DataTablePaginationComponent.ctorParameters = () => [
    { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(() => DataTableComponent),] }] }
];
__decorate([
    ViewChild('pageInput', { static: true }),
    __metadata("design:type", ElementRef)
], DataTablePaginationComponent.prototype, "pageInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DataTablePaginationComponent.prototype, "limits", void 0);
DataTablePaginationComponent = __decorate([
    Component({
        selector: 'data-table-pagination',
        template: "<div class=\"row\">\n  <div class=\"pagination-range col\">\n    <span [textContent]=\"dataTable.labels.paginationText\n        .replace('{from}', this.Math.ceil(dataTable.itemCount / dataTable.limit) !== 0 ? dataTable.offset + 1 + '' : '0')\n        .replace('{to}', this.Math.min(dataTable.offset + dataTable.limit, dataTable.itemCount) + '')\n        .replace('{total}', dataTable.itemCount + '')\"></span>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"pagination-limit col-md-3\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <label [attr.for]=\"id + '-page-limit'\" class=\"input-group-text\" [textContent]=\"dataTable.labels.paginationLimit\"></label>\n      </div>\n      <select [id]=\"id + '-page-limit'\" class=\"form-control\" [(ngModel)]=\"limit\" [disabled]=\"dataTable.itemCount === 0\">\n        <option *ngFor=\"let l of limits\" [value]=\"l\">{{ l }}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"pagination-pages offset-md-3 col-md-6\">\n    <div class=\"pagination-page\">\n      <div class=\"input-group\">\n        <button [disabled]=\"dataTable.offset <= 0\"\n                (click)=\"pageFirst()\"\n                class=\"btn btn-default pagination-firstpage\"\n                [title]=\"dataTable.labels.firstPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n        </button>\n        <button [disabled]=\"dataTable.offset <= 0\"\n                (click)=\"pageBack()\"\n                class=\"btn btn-default pagination-prevpage\"\n                [title]=\"dataTable.labels.prevPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n        </button>\n\n        <div class=\"input-group-prepend d-sm-block d-none\">\n          <label class=\"input-group-text\" [attr.for]=\"id + '-page-input'\">\n            {{ dataTable.labels.pageNumberLabel }}\n          </label>\n        </div>\n        <input #pageInput type=\"number\"\n               [id]=\"id + '-page-input'\"\n               class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n               [disabled]=\"dataTable.itemCount === 0\"\n               [ngModel]=\"page\"\n               (blur)=\"validate($event)\"\n               (keyup.enter)=\"validate($event)\"\n               (keyup.esc)=\"pageInput.value = page\"\n               [title]=\"dataTable.labels.pageNumber + ' ' +\n                    dataTable.labels.pageNumberNofM.replace('{N}', ''+page).replace('{M}', ''+maxPage)\"\n               [attr.aria-controls]=\"dataTable.id\"/>\n        <div class=\"input-group-append\">\n            <span class=\"input-group-text\">\n              {{ dataTable.labels.paginationTotalPages }}&nbsp;{{ dataTable.lastPage }}\n            </span>\n        </div>\n\n        <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                (click)=\"pageForward()\"\n                class=\"btn btn-default pagination-nextpage\"\n                [title]=\"dataTable.labels.nextPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n        </button>\n        <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\"\n                (click)=\"pageLast()\"\n                class=\"btn btn-default pagination-lastpage\"\n                [title]=\"dataTable.labels.lastPage\"\n                [attr.aria-controls]=\"dataTable.id\">\n          <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>",
        styles: [".pagination-controllers select{text-align:right}.pagination-box button{outline:0!important}"]
    }),
    __param(0, Inject(forwardRef(() => DataTableComponent))),
    __metadata("design:paramtypes", [DataTableComponent])
], DataTablePaginationComponent);
export { DataTablePaginationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRTdELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQU9mLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBVXZDLFlBQWlFLFNBQTZCO1FBQTdCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBUjlGLE9BQUUsR0FBRyxjQUFjLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFTNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBQ0MsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtB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IEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB7XG5cbiAgaWQgPSBgcGFnaW5hdGlvbi0ke25leHRJZCsrfWA7XG5cbiAgQFZpZXdDaGlsZCgncGFnZUlucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgcGFnZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gIE1hdGg6IGFueTtcblxuICBASW5wdXQoKSBsaW1pdHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpKSBwdWJsaWMgZGF0YVRhYmxlOiBEYXRhVGFibGVDb21wb25lbnQpIHtcbiAgICB0aGlzLk1hdGggPSBNYXRoO1xuICB9XG5cbiAgcGFnZUJhY2soKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0IC09IE1hdGgubWluKHRoaXMuZGF0YVRhYmxlLmxpbWl0LCB0aGlzLmRhdGFUYWJsZS5vZmZzZXQpO1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPD0gMCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cbiAgcGFnZUZvcndhcmQoKSB7XG4gICAgdGhpcy5kYXRhVGFibGUub2Zmc2V0ICs9IHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICAgIGlmICgodGhpcy5kYXRhVGFibGUub2Zmc2V0ICsgdGhpcy5kYXRhVGFibGUubGltaXQpID49IHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHBhZ2VGaXJzdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5vZmZzZXQgPSAwO1xuICAgIHRoaXMucGFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHBhZ2VMYXN0KCkge1xuICAgIHRoaXMuZGF0YVRhYmxlLm9mZnNldCA9ICh0aGlzLm1heFBhZ2UgLSAxKSAqIHRoaXMuZGF0YVRhYmxlLmxpbWl0O1xuICAgIGlmICgodGhpcy5kYXRhVGFibGUub2Zmc2V0ICsgdGhpcy5kYXRhVGFibGUubGltaXQpID49IHRoaXMuZGF0YVRhYmxlLml0ZW1Db3VudCkge1xuICAgICAgdGhpcy5wYWdlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhQYWdlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5kYXRhVGFibGUuaXRlbUNvdW50IC8gdGhpcy5kYXRhVGFibGUubGltaXQpO1xuICB9XG5cbiAgZ2V0IGxpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZS5saW1pdDtcbiAgfVxuXG4gIHNldCBsaW1pdCh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlLmxpbWl0ID0gK3ZhbHVlO1xuICAgIC8vIHJldHVybmluZyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgIHRoaXMucGFnZSA9IDE7XG4gIH1cblxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGUucGFnZTtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhVGFibGUucGFnZSA9ICt2YWx1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGV2ZW50KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2UgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID4gdGhpcy5tYXhQYWdlKSA/IHRoaXMubWF4UGFnZSA6IChuZXdWYWx1ZSA8IDEgKSA/IDEgOiBuZXdWYWx1ZTtcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHRoaXMucGFnZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==