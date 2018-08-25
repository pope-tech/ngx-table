/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var PixelConverter = /** @class */ (function () {
    function PixelConverter() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    PixelConverter.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
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
    PixelConverter.decorators = [
        { type: Pipe, args: [{
                    name: 'px'
                },] },
    ];
    return PixelConverter;
}());
export { PixelConverter };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvcHgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUFNbEQsa0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFzQixFQUFFLElBQW1CO1FBQW5CLHFCQUFBLEVBQUEsU0FBbUI7UUFDbkQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDO1NBQ1I7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDckI7S0FDRjs7Z0JBZEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxJQUFJO2lCQUNYOzt5QkFKRDs7U0FLYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdweCdcbn0pXG5leHBvcnQgY2xhc3MgUGl4ZWxDb252ZXJ0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGFyZ3M6IHN0cmluZ1tdID0gW10pOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICAgIH1cbiAgfVxufVxuIl19