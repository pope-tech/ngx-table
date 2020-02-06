import { ElementRef } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
export declare class DataTablePaginationComponent {
    dataTable: DataTableComponent;
    id: string;
    pageInput: ElementRef;
    Math: any;
    limits: number[];
    constructor(dataTable: DataTableComponent);
    pageBack(): void;
    pageForward(): void;
    pageFirst(): void;
    pageLast(): void;
    get maxPage(): number;
    get limit(): number;
    set limit(value: number);
    get page(): number;
    set page(value: number);
    validate(event: any): void;
}
