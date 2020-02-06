import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var PixelConverter = /** @class */ (function () {
    function PixelConverter() {
    }
    PixelConverter.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        if (value === undefined) {
            return;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return value + 'px';
        }
    };
    PixelConverter.ɵfac = function PixelConverter_Factory(t) { return new (t || PixelConverter)(); };
    PixelConverter.ɵpipe = i0.ɵɵdefinePipe({ name: "px", type: PixelConverter, pure: true });
    return PixelConverter;
}());
export { PixelConverter };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PixelConverter, [{
        type: Pipe,
        args: [{
                name: 'px'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3B4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRDtJQUFBO0tBZUM7SUFYQyxrQ0FBUyxHQUFULFVBQVUsS0FBc0IsRUFBRSxJQUFtQjtRQUFuQixxQkFBQSxFQUFBLFNBQW1CO1FBQ25ELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztnRkFYVSxjQUFjOytEQUFkLGNBQWM7eUJBTDNCO0NBaUJDLEFBZkQsSUFlQztTQVpZLGNBQWM7a0RBQWQsY0FBYztjQUgxQixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLElBQUk7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAncHgnXG59KVxuZXhwb3J0IGNsYXNzIFBpeGVsQ29udmVydGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBhcmdzOiBzdHJpbmdbXSA9IFtdKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHZhbHVlICsgJ3B4JztcbiAgICB9XG4gIH1cbn1cbiJdfQ==