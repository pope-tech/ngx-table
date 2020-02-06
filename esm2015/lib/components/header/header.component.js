import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, forwardRef, HostListener, Inject } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
let DataTableHeaderComponent = class DataTableHeaderComponent {
    constructor(dataTable, elemRef) {
        this.dataTable = dataTable;
        this.elemRef = elemRef;
        this.columnSelectorOpen = false;
    }
    onClickHandler(event) {
        if (!this.elemRef.nativeElement.contains(event.target)) {
            this.columnSelectorOpen = false;
        }
    }
    onKeyUpHandler(event) {
        if (event.keyCode === 27 || (event.keyCode === 9 && !this.elemRef.nativeElement.contains(event.target))) {
            this.columnSelectorOpen = false;
        }
    }
    onChange(event) {
        const isChecked = event.target.checked;
        const columnName = event.target.parentElement.textContent.trim();
        const interpolateParams = {
            'column_name': columnName,
            'title': this.dataTable.title
        };
        this.dataTable.visibleColumnsChange.emit(event);
        this.dataTable.columnSelectorNotification = (isChecked ? this.dataTable.labels.headerColumnSelectorAdded :
            this.dataTable.labels.headerColumnSelectorRemoved)
            .replace('{column_name}', interpolateParams.column_name)
            .replace('{title}', interpolateParams.title);
    }
};
DataTableHeaderComponent.ctorParameters = () => [
    { type: DataTableComponent, decorators: [{ type: Inject, args: [forwardRef(() => DataTableComponent),] }] },
    { type: ElementRef }
];
__decorate([
    HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DataTableHeaderComponent.prototype, "onClickHandler", null);
__decorate([
    HostListener('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DataTableHeaderComponent.prototype, "onKeyUpHandler", null);
DataTableHeaderComponent = __decorate([
    Component({
        selector: 'data-table-header',
        template: "<div class=\"data-table-header\">\n  <p class=\"h4 title\" *ngIf=\"dataTable.showTitle\" [textContent]=\"dataTable.title\"></p>\n  <div class=\"button-panel\">\n    <button type=\"button\" class=\"btn btn-default btn-sm refresh-button\"\n            (click)=\"dataTable.reloadItems()\">\n      <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerReload.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default btn-sm column-selector-button\" [class.active]=\"columnSelectorOpen\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.aria-expanded]=\"columnSelectorOpen\"\n            (click)=\"columnSelectorOpen = !columnSelectorOpen;\">\n      <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <div class=\"column-selector-wrapper\">\n      <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box panel panel-default\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngIf=\"dataTable.expandableRows\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.expandColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.expandColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.indexColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.indexColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.indexColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.selectColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.selectColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.selectColumn\"></span>\n            </label>\n          </li>\n          <ng-template ngFor let-item let-i=\"index\" [ngForOf]=\"dataTable.columns\">\n            <li class=\"list-group-item column-selector-column checkbox\"\n                *ngIf=\"dataTable.primaryColumn !== item.property\">\n              <label class=\"d-flex align-items-center\">\n                <input type=\"checkbox\" [(ngModel)]=\"item.visible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n                <span [textContent]=\"item.header\"></span>\n              </label>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n",
        styles: [".data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:0!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}"]
    }),
    __param(0, Inject(forwardRef(() => DataTableComponent))),
    __metadata("design:paramtypes", [DataTableComponent,
        ElementRef])
], DataTableHeaderComponent);
export { DataTableHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPOUQsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFJbkMsWUFBaUUsU0FBNkIsRUFDMUUsT0FBbUI7UUFEMEIsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDMUUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUh2Qyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7SUFJM0IsQ0FBQztJQUUyQyxjQUFjLENBQUMsS0FBSztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUUyQyxjQUFjLENBQUMsS0FBSztRQUM5RCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDdkcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsS0FBWTtRQUNuQixNQUFNLFNBQVMsR0FBdUIsS0FBSyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDNUQsTUFBTSxVQUFVLEdBQXVCLEtBQUssQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0RixNQUFNLGlCQUFpQixHQUFHO1lBQ3hCLGFBQWEsRUFBRSxVQUFVO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7U0FDOUIsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxTQUFTLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDeEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUM7YUFDakQsT0FBTyxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7YUFDdkQsT0FBTyxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7WUEvQjZFLGtCQUFrQix1QkFBakYsTUFBTSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQUMzQixVQUFVOztBQUdLO0lBQTNDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzhEQUkxQztBQUUyQztJQUEzQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs4REFJMUM7QUFsQlUsd0JBQXdCO0lBTHBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsNGdHQUFzQzs7S0FFdkMsQ0FBQztJQUthLFdBQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7cUNBQW1CLGtCQUFrQjtRQUNqRSxVQUFVO0dBTDVCLHdCQUF3QixDQW1DcEM7U0FuQ1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGEtdGFibGUtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50IHtcblxuICBjb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSkgb25DbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKSBvbktleVVwSGFuZGxlcihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCAoZXZlbnQua2V5Q29kZSA9PT0gOSAmJiAhdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkpIHtcbiAgICAgIHRoaXMuY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaXNDaGVja2VkID0gKDxIVE1MSW5wdXRFbGVtZW50PiBldmVudC50YXJnZXQpLmNoZWNrZWQ7XG4gICAgY29uc3QgY29sdW1uTmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD4gZXZlbnQudGFyZ2V0KS5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICBjb25zdCBpbnRlcnBvbGF0ZVBhcmFtcyA9IHtcbiAgICAgICdjb2x1bW5fbmFtZSc6IGNvbHVtbk5hbWUsXG4gICAgICAndGl0bGUnOiB0aGlzLmRhdGFUYWJsZS50aXRsZVxuICAgIH07XG5cbiAgICB0aGlzLmRhdGFUYWJsZS52aXNpYmxlQ29sdW1uc0NoYW5nZS5lbWl0KGV2ZW50KTtcblxuICAgIHRoaXMuZGF0YVRhYmxlLmNvbHVtblNlbGVjdG9yTm90aWZpY2F0aW9uID0gKGlzQ2hlY2tlZCA/IHRoaXMuZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3RvckFkZGVkIDpcbiAgICAgIHRoaXMuZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3RvclJlbW92ZWQpXG4gICAgICAucmVwbGFjZSgne2NvbHVtbl9uYW1lfScsIGludGVycG9sYXRlUGFyYW1zLmNvbHVtbl9uYW1lKVxuICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCBpbnRlcnBvbGF0ZVBhcmFtcy50aXRsZSk7XG4gIH1cbn1cbiJdfQ==