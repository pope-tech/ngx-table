// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// utils
import { HideDirective } from './utils/hide';
import { MinPipe } from './utils/min';
import { PixelConverter } from './utils/px';
import { DataTableResource } from './tools/data-table-resource';
// components & directives
import { DataTableComponent } from './components/table/table.component';
import { DataTableRowComponent } from './components/row/row.component';
import { DataTableColumnDirective } from './directives/column/column.directive';
import { DataTableHeaderComponent } from './components/header/header.component';
import { DataTablePaginationComponent } from './components/pagination/pagination.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export { DataTableComponent, DataTableColumnDirective, DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent, DataTableResource };
export class NgxTableModule {
    static forRoot() {
        return {
            ngModule: NgxTableModule,
            providers: []
        };
    }
    static { this.ɵfac = function NgxTableModule_Factory(t) { return new (t || NgxTableModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxTableModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxTableModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    DataTableComponent, DataTableColumnDirective,
                    DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
                    PixelConverter, HideDirective, MinPipe
                ],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [DataTableComponent, DataTableColumnDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxTableModule, { declarations: [DataTableComponent, DataTableColumnDirective,
        DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
        PixelConverter, HideDirective, MinPipe], imports: [CommonModule,
        FormsModule], exports: [DataTableComponent, DataTableColumnDirective] }); })();
i0.ɵɵsetComponentScope(DataTableComponent, [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
    HideDirective], [PixelConverter]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10YWJsZS9zcmMvbGliL25neC10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsUUFBUTtBQUNSLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBSzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWhFLDBCQUEwQjtBQUMxQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztBQUU1RixPQUFPLEVBQ0wsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQzNILGlCQUFpQixFQUdsQixDQUFDO0FBZUYsTUFBTSxPQUFPLGNBQWM7SUFDbEIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7K0VBTlUsY0FBYzttRUFBZCxjQUFjO3VFQU52QixZQUFZO1lBQ1osV0FBVzs7aUZBS0YsY0FBYztjQWIxQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGtCQUFrQixFQUFFLHdCQUF3QjtvQkFDNUMscUJBQXFCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCO29CQUM3RSxjQUFjLEVBQUUsYUFBYSxFQUFFLE9BQU87aUJBQ3ZDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsd0JBQXdCLENBQUM7YUFDeEQ7O3dGQUVZLGNBQWMsbUJBWHZCLGtCQUFrQixFQUFFLHdCQUF3QjtRQUM1QyxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0I7UUFDN0UsY0FBYyxFQUFFLGFBQWEsRUFBRSxPQUFPLGFBR3RDLFlBQVk7UUFDWixXQUFXLGFBRUgsa0JBQWtCLEVBQUUsd0JBQXdCO3VCQVJwRCxrQkFBa0IsMEhBQ2xCLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLHdCQUF3QjtJQUM3RCxhQUFhLElBQTdCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2R1bGVzXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyB1dGlsc1xuaW1wb3J0IHsgSGlkZURpcmVjdGl2ZSB9IGZyb20gJy4vdXRpbHMvaGlkZSc7XG5pbXBvcnQgeyBNaW5QaXBlIH0gZnJvbSAnLi91dGlscy9taW4nO1xuaW1wb3J0IHsgUGl4ZWxDb252ZXJ0ZXIgfSBmcm9tICcuL3V0aWxzL3B4Jztcbi8vIHR5cGVzICYgdG9vbHNcbmltcG9ydCB7IERhdGFUYWJsZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4vdHlwZXMvZGF0YS10YWJsZS10cmFuc2xhdGlvbnMudHlwZSc7XG5pbXBvcnQgeyBDZWxsQ2FsbGJhY2sgfSBmcm9tICcuL3R5cGVzL2NlbGwtY2FsbGJhY2sudHlwZSc7XG5pbXBvcnQgeyBSb3dDYWxsYmFjayB9IGZyb20gJy4vdHlwZXMvcm93LWNhbGxiYWNrLnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUmVzb3VyY2UgfSBmcm9tICcuL3Rvb2xzL2RhdGEtdGFibGUtcmVzb3VyY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFyYW1zIH0gZnJvbSAnLi90eXBlcy9kYXRhLXRhYmxlLXBhcmFtcy50eXBlJztcbi8vIGNvbXBvbmVudHMgJiBkaXJlY3RpdmVzXG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB7XG4gIERhdGFUYWJsZUNvbXBvbmVudCwgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLCBEYXRhVGFibGVSb3dDb21wb25lbnQsIERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsIERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCxcbiAgRGF0YVRhYmxlUmVzb3VyY2UsXG4gIERhdGFUYWJsZVBhcmFtcywgRGF0YVRhYmxlVHJhbnNsYXRpb25zLFxuICBDZWxsQ2FsbGJhY2ssIFJvd0NhbGxiYWNrXG59O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYXRhVGFibGVDb21wb25lbnQsIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSxcbiAgICBEYXRhVGFibGVSb3dDb21wb25lbnQsIERhdGFUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsIERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCxcbiAgICBQaXhlbENvbnZlcnRlciwgSGlkZURpcmVjdGl2ZSwgTWluUGlwZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtEYXRhVGFibGVDb21wb25lbnQsIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hUYWJsZU1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neFRhYmxlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hUYWJsZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG5cblxuIl19