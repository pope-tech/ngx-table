import { ModuleWithProviders } from '@angular/core';
import { DataTableTranslations } from './types/data-table-translations.type';
import { CellCallback } from './types/cell-callback.type';
import { RowCallback } from './types/row-callback.type';
import { DataTableResource } from './tools/data-table-resource';
import { DataTableParams } from './types/data-table-params.type';
import { DataTableComponent } from './components/table/table.component';
import { DataTableRowComponent } from './components/row/row.component';
import { DataTableColumnDirective } from './directives/column/column.directive';
import { DataTableHeaderComponent } from './components/header/header.component';
import { DataTablePaginationComponent } from './components/pagination/pagination.component';
import * as i0 from "@angular/core";
import * as i1 from "./components/table/table.component";
import * as i2 from "./directives/column/column.directive";
import * as i3 from "./components/row/row.component";
import * as i4 from "./components/pagination/pagination.component";
import * as i5 from "./components/header/header.component";
import * as i6 from "./utils/px";
import * as i7 from "./utils/hide";
import * as i8 from "./utils/min";
import * as i9 from "@angular/common";
import * as i10 from "@angular/forms";
export { DataTableComponent, DataTableColumnDirective, DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent, DataTableResource, DataTableParams, DataTableTranslations, CellCallback, RowCallback };
export declare class NgxTableModule {
    static forRoot(): ModuleWithProviders<NgxTableModule>;
    static ɵfac: i0.ɵɵFactoryDef<NgxTableModule, never>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<NgxTableModule, [typeof i1.DataTableComponent, typeof i2.DataTableColumnDirective, typeof i3.DataTableRowComponent, typeof i4.DataTablePaginationComponent, typeof i5.DataTableHeaderComponent, typeof i6.PixelConverter, typeof i7.HideDirective, typeof i8.MinPipe], [typeof i9.CommonModule, typeof i10.FormsModule], [typeof i1.DataTableComponent, typeof i2.DataTableColumnDirective]>;
    static ɵinj: i0.ɵɵInjectorDef<NgxTableModule>;
}
//# sourceMappingURL=ngx-table.module.d.ts.map