/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef, HostListener, Inject } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
var DataTableHeaderComponent = /** @class */ (function () {
    function DataTableHeaderComponent(dataTable, elemRef) {
        this.dataTable = dataTable;
        this.elemRef = elemRef;
        this.columnSelectorOpen = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onClickHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.elemRef.nativeElement.contains(event.target)) {
            this.columnSelectorOpen = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onKeyUpHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 27 || (event.keyCode === 9 && !this.elemRef.nativeElement.contains(event.target))) {
            this.columnSelectorOpen = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var isChecked = (/** @type {?} */ (event.target)).checked;
        /** @type {?} */
        var columnName = (/** @type {?} */ (event.target)).parentElement.textContent.trim();
        /** @type {?} */
        var interpolateParams = {
            'column_name': columnName,
            'title': this.dataTable.title
        };
        this.dataTable.columnSelectorNotification = (isChecked ? this.dataTable.labels.headerColumnSelectorAdded :
            this.dataTable.labels.headerColumnSelectorRemoved)
            .replace('{column_name}', interpolateParams.column_name)
            .replace('{title}', interpolateParams.title);
    };
    DataTableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'data-table-header',
                    template: "<div class=\"data-table-header\">\n  <p class=\"h4 title\" *ngIf=\"dataTable.showTitle\" [textContent]=\"dataTable.title\"></p>\n  <div class=\"button-panel\">\n    <button type=\"button\" class=\"btn btn-default btn-sm refresh-button\"\n            (click)=\"dataTable.reloadItems()\"\n            [title]=\"dataTable.labels.headerReload.replace('{title}', dataTable.title)\">\n      <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-default btn-sm column-selector-button\" [class.active]=\"columnSelectorOpen\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.aria-expanded]=\"columnSelectorOpen\"\n            (click)=\"columnSelectorOpen = !columnSelectorOpen;\"\n            [title]=\"dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title)\">\n      <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"column-selector-wrapper\">\n      <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box panel panel-default\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngIf=\"dataTable.expandableRows\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.expandColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.expandColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.indexColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.indexColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.indexColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.selectColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.selectColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.selectColumn\"></span>\n            </label>\n          </li>\n          <ng-template ngFor let-item let-i=\"index\" [ngForOf]=\"dataTable.columns\">\n            <li class=\"list-group-item column-selector-column checkbox\"\n                *ngIf=\"dataTable.primaryColumn !== item.property\">\n              <label class=\"d-flex align-items-center\">\n                <input type=\"checkbox\" [(ngModel)]=\"item.visible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n                <span [textContent]=\"item.header\"></span>\n              </label>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:0!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}"]
                },] },
    ];
    /** @nocollapse */
    DataTableHeaderComponent.ctorParameters = function () { return [
        { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return DataTableComponent; }),] }] },
        { type: ElementRef }
    ]; };
    DataTableHeaderComponent.propDecorators = {
        onClickHandler: [{ type: HostListener, args: ['document:click', ['$event'],] }],
        onKeyUpHandler: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
    };
    return DataTableHeaderComponent;
}());
export { DataTableHeaderComponent };
if (false) {
    /** @type {?} */
    DataTableHeaderComponent.prototype.columnSelectorOpen;
    /** @type {?} */
    DataTableHeaderComponent.prototype.dataTable;
    /** @type {?} */
    DataTableHeaderComponent.prototype.elemRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUE2RDVELGtDQUFpRSxTQUE2QixFQUMxRTtRQUQ2QyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUMxRSxZQUFPLEdBQVAsT0FBTztrQ0FITixLQUFLO0tBSXpCOzs7OztJQUUyQyxpREFBYzs7OztJQUExRCxVQUEyRCxLQUFLO1FBQzlELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNqQztLQUNGOzs7OztJQUUyQyxpREFBYzs7OztJQUExRCxVQUEyRCxLQUFLO1FBQzlELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDakM7S0FDRjs7Ozs7SUFFRCwyQ0FBUTs7OztJQUFSLFVBQVMsS0FBWTs7UUFDbkIsSUFBTSxTQUFTLEdBQUcsbUJBQW9CLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxPQUFPLENBQUM7O1FBQzVELElBQU0sVUFBVSxHQUFHLG1CQUFvQixLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7UUFDdEYsSUFBTSxpQkFBaUIsR0FBRztZQUN4QixhQUFhLEVBQUUsVUFBVTtZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1NBQzlCLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLDBCQUEwQixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3hHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDO2FBQ2pELE9BQU8sQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxDQUFDO2FBQ3ZELE9BQU8sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEQ7O2dCQXZGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDQ5RkFrRFg7b0JBQ0MsTUFBTSxFQUFFLENBQUMseW1CQUF5bUIsQ0FBQztpQkFDcG5COzs7O2dCQXhEUSxrQkFBa0IsdUJBNkRaLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO2dCQWxFeEQsVUFBVTs7O2lDQXNFVCxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUNBTXpDLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7bUNBOUU1Qzs7U0FnRWEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1oZWFkZXJcIj5cbiAgPHAgY2xhc3M9XCJoNCB0aXRsZVwiICpuZ0lmPVwiZGF0YVRhYmxlLnNob3dUaXRsZVwiIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUudGl0bGVcIj48L3A+XG4gIDxkaXYgY2xhc3M9XCJidXR0b24tcGFuZWxcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcmVmcmVzaC1idXR0b25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImRhdGFUYWJsZS5yZWxvYWRJdGVtcygpXCJcbiAgICAgICAgICAgIFt0aXRsZV09XCJkYXRhVGFibGUubGFiZWxzLmhlYWRlclJlbG9hZC5yZXBsYWNlKCd7dGl0bGV9JywgZGF0YVRhYmxlLnRpdGxlKVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBjb2x1bW4tc2VsZWN0b3ItYnV0dG9uXCIgW2NsYXNzLmFjdGl2ZV09XCJjb2x1bW5TZWxlY3Rvck9wZW5cIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1oYXNwb3B1cF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiY29sdW1uU2VsZWN0b3JPcGVuXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjb2x1bW5TZWxlY3Rvck9wZW4gPSAhY29sdW1uU2VsZWN0b3JPcGVuO1wiXG4gICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3Rvci5yZXBsYWNlKCd7dGl0bGV9JywgZGF0YVRhYmxlLnRpdGxlKVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2VsZWN0b3Itd3JhcHBlclwiPlxuICAgICAgPGRpdiAqbmdJZj1cImNvbHVtblNlbGVjdG9yT3BlblwiIGNsYXNzPVwiY29sdW1uLXNlbGVjdG9yLWJveCBwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgIDxsaSAqbmdJZj1cImRhdGFUYWJsZS5leHBhbmRhYmxlUm93c1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLmV4cGFuZENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kQ29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSAqbmdJZj1cImRhdGFUYWJsZS5pbmRleENvbHVtblwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLmluZGV4Q29sdW1uVmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5pbmRleENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuc2VsZWN0Q29sdW1uXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBjaGVja2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJkYXRhVGFibGUuc2VsZWN0Q29sdW1uVmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5zZWxlY3RDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pdGVtIGxldC1pPVwiaW5kZXhcIiBbbmdGb3JPZl09XCJkYXRhVGFibGUuY29sdW1uc1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gIT09IGl0ZW0ucHJvcGVydHlcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIml0ZW0udmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJpdGVtLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5kYXRhLXRhYmxlLWhlYWRlcnttaW4taGVpZ2h0OjI1cHg7bWFyZ2luLWJvdHRvbToxMHB4fS50aXRsZXtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46NXB4IDAgMCA1cHh9LmJ1dHRvbi1wYW5lbHtmbG9hdDpyaWdodH0uYnV0dG9uLXBhbmVsIGJ1dHRvbntvdXRsaW5lOjAhaW1wb3J0YW50fS5jb2x1bW4tc2VsZWN0b3Itd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZX0uY29sdW1uLXNlbGVjdG9yLWJveHtib3gtc2hhZG93OjAgMCAxMHB4ICNkM2QzZDM7YmFja2dyb3VuZDojZmZmO3dpZHRoOjE1MHB4O3BhZGRpbmc6MTBweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDoxcHg7ei1pbmRleDoxMDYwfS5jb2x1bW4tc2VsZWN0b3ItYm94IC5saXN0LWdyb3VwLWl0ZW0uY29sdW1uLXNlbGVjdG9yLWNvbHVtbntwYWRkaW5nOi41cmVtIC4yNXJlbX0uY29sdW1uLXNlbGVjdG9yLWJveCAubGlzdC1ncm91cC1pdGVtLmNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gbGFiZWx7bWFyZ2luLWJvdHRvbTowfS5jb2x1bW4tc2VsZWN0b3ItYm94IC5saXN0LWdyb3VwLWl0ZW0uY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBpbnB1dHttYXJnaW4tcmlnaHQ6NHB4O2ZvbnQtc3R5bGU6aXRhbGljfWBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCB7XG5cbiAgY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNvbHVtblNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwJywgWyckZXZlbnQnXSkgb25LZXlVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgKGV2ZW50LmtleUNvZGUgPT09IDkgJiYgIXRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpKSB7XG4gICAgICB0aGlzLmNvbHVtblNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGlzQ2hlY2tlZCA9ICg8SFRNTElucHV0RWxlbWVudD4gZXZlbnQudGFyZ2V0KS5jaGVja2VkO1xuICAgIGNvbnN0IGNvbHVtbk5hbWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50LnRhcmdldCkucGFyZW50RWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgY29uc3QgaW50ZXJwb2xhdGVQYXJhbXMgPSB7XG4gICAgICAnY29sdW1uX25hbWUnOiBjb2x1bW5OYW1lLFxuICAgICAgJ3RpdGxlJzogdGhpcy5kYXRhVGFibGUudGl0bGVcbiAgICB9O1xuXG4gICAgdGhpcy5kYXRhVGFibGUuY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb24gPSAoaXNDaGVja2VkID8gdGhpcy5kYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yQWRkZWQgOlxuICAgICAgdGhpcy5kYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yUmVtb3ZlZClcbiAgICAgIC5yZXBsYWNlKCd7Y29sdW1uX25hbWV9JywgaW50ZXJwb2xhdGVQYXJhbXMuY29sdW1uX25hbWUpXG4gICAgICAucmVwbGFjZSgne3RpdGxlfScsIGludGVycG9sYXRlUGFyYW1zLnRpdGxlKTtcbiAgfVxufVxuIl19