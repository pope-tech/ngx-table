/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HideDirective } from './utils/hide';
import { MinPipe } from './utils/min';
import { PixelConverter } from './utils/px';
import { DataTableResource } from './tools/data-table-resource';
import { DataTableComponent } from './components/table/table.component';
import { DataTableRowComponent } from './components/row/row.component';
import { DataTableColumnDirective } from './directives/column/column.directive';
import { DataTableHeaderComponent } from './components/header/header.component';
import { DataTablePaginationComponent } from './components/pagination/pagination.component';
export { DataTableComponent, DataTableColumnDirective, DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent, DataTableResource };
var NgxTableModule = /** @class */ (function () {
    function NgxTableModule() {
    }
    /**
     * @return {?}
     */
    NgxTableModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxTableModule,
            providers: []
        };
    };
    NgxTableModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return NgxTableModule;
}());
export { NgxTableModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBSzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRTVGLE9BQU8sRUFDTCxrQkFBa0IsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0IsRUFDM0gsaUJBQWlCLEVBR2xCLENBQUM7Ozs7Ozs7SUFnQmMsc0JBQU87Ozs7UUFDbkIsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDOzs7Z0JBbEJMLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCLEVBQUUsd0JBQXdCO3dCQUM1QyxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0I7d0JBQzdFLGNBQWMsRUFBRSxhQUFhLEVBQUUsT0FBTztxQkFDdkM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVztxQkFDWjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx3QkFBd0IsQ0FBQztpQkFDeEQ7O3lCQXpDRDs7U0EyQ2EsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZXNcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHV0aWxzXG5pbXBvcnQgeyBIaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi91dGlscy9oaWRlJztcbmltcG9ydCB7IE1pblBpcGUgfSBmcm9tICcuL3V0aWxzL21pbic7XG5pbXBvcnQgeyBQaXhlbENvbnZlcnRlciB9IGZyb20gJy4vdXRpbHMvcHgnO1xuLy8gdHlwZXMgJiB0b29sc1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi90eXBlcy9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy50eXBlJztcbmltcG9ydCB7IENlbGxDYWxsYmFjayB9IGZyb20gJy4vdHlwZXMvY2VsbC1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IFJvd0NhbGxiYWNrIH0gZnJvbSAnLi90eXBlcy9yb3ctY2FsbGJhY2sudHlwZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSZXNvdXJjZSB9IGZyb20gJy4vdG9vbHMvZGF0YS10YWJsZS1yZXNvdXJjZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYXJhbXMgfSBmcm9tICcuL3R5cGVzL2RhdGEtdGFibGUtcGFyYW1zLnR5cGUnO1xuLy8gY29tcG9uZW50cyAmIGRpcmVjdGl2ZXNcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IHtcbiAgRGF0YVRhYmxlQ29tcG9uZW50LCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIERhdGFUYWJsZVJvd0NvbXBvbmVudCwgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCwgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICBEYXRhVGFibGVSZXNvdXJjZSxcbiAgRGF0YVRhYmxlUGFyYW1zLCBEYXRhVGFibGVUcmFuc2xhdGlvbnMsXG4gIENlbGxDYWxsYmFjaywgUm93Q2FsbGJhY2tcbn07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERhdGFUYWJsZUNvbXBvbmVudCwgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZVJvd0NvbXBvbmVudCwgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCwgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICAgIFBpeGVsQ29udmVydGVyLCBIaWRlRGlyZWN0aXZlLCBNaW5QaXBlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0RhdGFUYWJsZUNvbXBvbmVudCwgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neFRhYmxlTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4VGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuXG5cbiJdfQ==