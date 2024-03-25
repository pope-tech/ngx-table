import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PixelConverter {
    transform(value, args = []) {
        if (value === undefined) {
            return;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return value + 'px';
        }
    }
}
PixelConverter.ɵfac = function PixelConverter_Factory(t) { return new (t || PixelConverter)(); };
PixelConverter.ɵpipe = i0.ɵɵdefinePipe({ name: "px", type: PixelConverter, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PixelConverter, [{
        type: Pipe,
        args: [{
                name: 'px'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW1vb3JlL3NyYy9kaW5vbHl0aWNzL2Zyb250ZW5kLXBhY2thZ2VzL25neC10YWJsZS9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3B4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sY0FBYztJQUN6QixTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUFpQixFQUFFO1FBQ25ELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7NEVBWFUsY0FBYzsyREFBZCxjQUFjO2tEQUFkLGNBQWM7Y0FIMUIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxJQUFJO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3B4J1xufSlcbmV4cG9ydCBjbGFzcyBQaXhlbENvbnZlcnRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyB8IG51bWJlciwgYXJnczogc3RyaW5nW10gPSBbXSk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gICAgfVxuICB9XG59XG4iXX0=