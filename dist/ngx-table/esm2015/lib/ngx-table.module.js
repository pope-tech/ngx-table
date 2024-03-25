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
}
NgxTableModule.ɵfac = function NgxTableModule_Factory(t) { return new (t || NgxTableModule)(); };
NgxTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxTableModule });
NgxTableModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxTableModule, { declarations: [DataTableComponent, DataTableColumnDirective,
        DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
        PixelConverter, HideDirective, MinPipe], imports: [CommonModule,
        FormsModule], exports: [DataTableComponent, DataTableColumnDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxTableModule, [{
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
i0.ɵɵsetComponentScope(DataTableComponent, [i1.NgIf, DataTableHeaderComponent,
    HideDirective, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf, i1.NgClass, i1.NgTemplateOutlet, DataTableRowComponent, DataTablePaginationComponent], [PixelConverter]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10YWJsZS9zcmMvbGliL25neC10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsUUFBUTtBQUNSLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBSzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWhFLDBCQUEwQjtBQUMxQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztBQUU1RixPQUFPLEVBQ0wsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQzNILGlCQUFpQixFQUdsQixDQUFDO0FBZUYsTUFBTSxPQUFPLGNBQWM7SUFDbEIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7OzRFQU5VLGNBQWM7a0RBQWQsY0FBYztzREFQaEI7WUFDUCxZQUFZO1lBQ1osV0FBVztTQUNaO3dGQUlVLGNBQWMsbUJBWHZCLGtCQUFrQixFQUFFLHdCQUF3QjtRQUM1QyxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0I7UUFDN0UsY0FBYyxFQUFFLGFBQWEsRUFBRSxPQUFPLGFBR3RDLFlBQVk7UUFDWixXQUFXLGFBRUgsa0JBQWtCLEVBQUUsd0JBQXdCO3VGQUczQyxjQUFjO2NBYjFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osa0JBQWtCLEVBQUUsd0JBQXdCO29CQUM1QyxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0I7b0JBQzdFLGNBQWMsRUFBRSxhQUFhLEVBQUUsT0FBTztpQkFDdkM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztpQkFDWjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx3QkFBd0IsQ0FBQzthQUN4RDs7dUJBVEcsa0JBQWtCLFlBQ21DLHdCQUF3QjtJQUM3RCxhQUFhLGdIQUQ3QixxQkFBcUIsRUFBRSw0QkFBNEIsSUFDbkQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZXNcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHV0aWxzXG5pbXBvcnQgeyBIaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi91dGlscy9oaWRlJztcbmltcG9ydCB7IE1pblBpcGUgfSBmcm9tICcuL3V0aWxzL21pbic7XG5pbXBvcnQgeyBQaXhlbENvbnZlcnRlciB9IGZyb20gJy4vdXRpbHMvcHgnO1xuLy8gdHlwZXMgJiB0b29sc1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi90eXBlcy9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy50eXBlJztcbmltcG9ydCB7IENlbGxDYWxsYmFjayB9IGZyb20gJy4vdHlwZXMvY2VsbC1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IFJvd0NhbGxiYWNrIH0gZnJvbSAnLi90eXBlcy9yb3ctY2FsbGJhY2sudHlwZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSZXNvdXJjZSB9IGZyb20gJy4vdG9vbHMvZGF0YS10YWJsZS1yZXNvdXJjZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYXJhbXMgfSBmcm9tICcuL3R5cGVzL2RhdGEtdGFibGUtcGFyYW1zLnR5cGUnO1xuLy8gY29tcG9uZW50cyAmIGRpcmVjdGl2ZXNcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IHtcbiAgRGF0YVRhYmxlQ29tcG9uZW50LCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIERhdGFUYWJsZVJvd0NvbXBvbmVudCwgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCwgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICBEYXRhVGFibGVSZXNvdXJjZSxcbiAgRGF0YVRhYmxlUGFyYW1zLCBEYXRhVGFibGVUcmFuc2xhdGlvbnMsXG4gIENlbGxDYWxsYmFjaywgUm93Q2FsbGJhY2tcbn07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERhdGFUYWJsZUNvbXBvbmVudCwgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZVJvd0NvbXBvbmVudCwgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCwgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICAgIFBpeGVsQ29udmVydGVyLCBIaWRlRGlyZWN0aXZlLCBNaW5QaXBlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0RhdGFUYWJsZUNvbXBvbmVudCwgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neFRhYmxlTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4VGFibGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFRhYmxlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cblxuXG4iXX0=