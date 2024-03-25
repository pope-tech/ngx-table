import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class MinPipe {
    transform(value, args) {
        return Math.min.apply(null, value);
    }
}
MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
MinPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "min", type: MinPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MinPipe, [{
        type: Pipe,
        args: [{
                name: 'min'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21tb29yZS9zcmMvZGlub2x5dGljcy9mcm9udGVuZC1wYWNrYWdlcy9uZ3gtdGFibGUvcHJvamVjdHMvbmd4LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9taW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBTXBELE1BQU0sT0FBTyxPQUFPO0lBQ2xCLFNBQVMsQ0FBQyxLQUFlLEVBQUUsSUFBYztRQUN2QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs4REFIVSxPQUFPO3FEQUFQLE9BQU87a0RBQVAsT0FBTztjQUhuQixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLEtBQUs7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AUGlwZSh7XG4gIG5hbWU6ICdtaW4nXG59KVxuZXhwb3J0IGNsYXNzIE1pblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXJbXSwgYXJnczogc3RyaW5nW10pOiBhbnkge1xuICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCB2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==