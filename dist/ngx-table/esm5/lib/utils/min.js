import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var MinPipe = /** @class */ (function () {
    function MinPipe() {
    }
    MinPipe.prototype.transform = function (value, args) {
        return Math.min.apply(null, value);
    };
    MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
    MinPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "min", type: MinPipe, pure: true });
    return MinPipe;
}());
export { MinPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MinPipe, [{
        type: Pipe,
        args: [{
                name: 'min'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9taW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BEO0lBQUE7S0FPQztJQUhDLDJCQUFTLEdBQVQsVUFBVSxLQUFlLEVBQUUsSUFBYztRQUN2QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO2tFQUhVLE9BQU87eURBQVAsT0FBTztrQkFOcEI7Q0FVQyxBQVBELElBT0M7U0FKWSxPQUFPO2tEQUFQLE9BQU87Y0FIbkIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxLQUFLO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQFBpcGUoe1xuICBuYW1lOiAnbWluJ1xufSlcbmV4cG9ydCBjbGFzcyBNaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyW10sIGFyZ3M6IHN0cmluZ1tdKTogYW55IHtcbiAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgdmFsdWUpO1xuICB9XG59XG4iXX0=