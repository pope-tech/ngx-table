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
NgxTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxTableModule });
NgxTableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxTableModule_Factory(t) { return new (t || NgxTableModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxTableModule, { declarations: [DataTableComponent, DataTableColumnDirective,
        DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
        PixelConverter, HideDirective, MinPipe], imports: [CommonModule,
        FormsModule], exports: [DataTableComponent, DataTableColumnDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxTableModule, [{
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
i0.ɵɵsetComponentScope(DataTableComponent, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, DataTableComponent, DataTableColumnDirective,
    DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
    HideDirective], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe, PixelConverter, MinPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tbW9vcmUvc3JjL2Rpbm9seXRpY3MvZnJvbnRlbmQtcGFja2FnZXMvbmd4LXRhYmxlL3Byb2plY3RzL25neC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvbmd4LXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FBQ1YsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxRQUFRO0FBQ1IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFLNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFaEUsMEJBQTBCO0FBQzFCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7O0FBRTVGLE9BQU8sRUFDTCxrQkFBa0IsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0IsRUFDM0gsaUJBQWlCLEVBR2xCLENBQUM7QUFlRixNQUFNLE9BQU8sY0FBYztJQUNsQixNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7a0RBTlUsY0FBYzsyR0FBZCxjQUFjLGtCQVBoQjtZQUNQLFlBQVk7WUFDWixXQUFXO1NBQ1o7d0ZBSVUsY0FBYyxtQkFYdkIsa0JBQWtCLEVBQUUsd0JBQXdCO1FBQzVDLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLHdCQUF3QjtRQUM3RSxjQUFjLEVBQUUsYUFBYSxFQUFFLE9BQU8sYUFHdEMsWUFBWTtRQUNaLFdBQVcsYUFFSCxrQkFBa0IsRUFBRSx3QkFBd0I7a0RBRzNDLGNBQWM7Y0FiMUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixrQkFBa0IsRUFBRSx3QkFBd0I7b0JBQzVDLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLHdCQUF3QjtvQkFDN0UsY0FBYyxFQUFFLGFBQWEsRUFBRSxPQUFPO2lCQUN2QztnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO2lCQUNaO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHdCQUF3QixDQUFDO2FBQ3hEOzt1QkFURyxrQkFBa0Isa3JCQUFsQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMscUJBQXFCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCO0lBQzdELGFBQWEsd05BQTdCLGNBQWMsRUFBaUIsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZXNcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHV0aWxzXG5pbXBvcnQgeyBIaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi91dGlscy9oaWRlJztcbmltcG9ydCB7IE1pblBpcGUgfSBmcm9tICcuL3V0aWxzL21pbic7XG5pbXBvcnQgeyBQaXhlbENvbnZlcnRlciB9IGZyb20gJy4vdXRpbHMvcHgnO1xuLy8gdHlwZXMgJiB0b29sc1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi90eXBlcy9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy50eXBlJztcbmltcG9ydCB7IENlbGxDYWxsYmFjayB9IGZyb20gJy4vdHlwZXMvY2VsbC1jYWxsYmFjay50eXBlJztcbmltcG9ydCB7IFJvd0NhbGxiYWNrIH0gZnJvbSAnLi90eXBlcy9yb3ctY2FsbGJhY2sudHlwZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSZXNvdXJjZSB9IGZyb20gJy4vdG9vbHMvZGF0YS10YWJsZS1yZXNvdXJjZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVQYXJhbXMgfSBmcm9tICcuL3R5cGVzL2RhdGEtdGFibGUtcGFyYW1zLnR5cGUnO1xuLy8gY29tcG9uZW50cyAmIGRpcmVjdGl2ZXNcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IHtcbiAgRGF0YVRhYmxlQ29tcG9uZW50LCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsIERhdGFUYWJsZVJvd0NvbXBvbmVudCwgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCwgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICBEYXRhVGFibGVSZXNvdXJjZSxcbiAgRGF0YVRhYmxlUGFyYW1zLCBEYXRhVGFibGVUcmFuc2xhdGlvbnMsXG4gIENlbGxDYWxsYmFjaywgUm93Q2FsbGJhY2tcbn07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERhdGFUYWJsZUNvbXBvbmVudCwgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZVJvd0NvbXBvbmVudCwgRGF0YVRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCwgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICAgIFBpeGVsQ29udmVydGVyLCBIaWRlRGlyZWN0aXZlLCBNaW5QaXBlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0RhdGFUYWJsZUNvbXBvbmVudCwgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neFRhYmxlTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4VGFibGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFRhYmxlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cblxuXG4iXX0=