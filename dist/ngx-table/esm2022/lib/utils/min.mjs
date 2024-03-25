import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class MinPipe {
    transform(value, args) {
        return Math.min.apply(null, value);
    }
    static { this.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "min", type: MinPipe, pure: true }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MinPipe, [{
        type: Pipe,
        args: [{
                name: 'min'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhYmxlL3NyYy9saWIvdXRpbHMvbWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU1wRCxNQUFNLE9BQU8sT0FBTztJQUNsQixTQUFTLENBQUMsS0FBZSxFQUFFLElBQWM7UUFDdkMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzt3RUFIVSxPQUFPOzZFQUFQLE9BQU87O3VGQUFQLE9BQU87Y0FIbkIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxLQUFLO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQFBpcGUoe1xuICBuYW1lOiAnbWluJ1xufSlcbmV4cG9ydCBjbGFzcyBNaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyW10sIGFyZ3M6IHN0cmluZ1tdKTogYW55IHtcbiAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgdmFsdWUpO1xuICB9XG59XG4iXX0=