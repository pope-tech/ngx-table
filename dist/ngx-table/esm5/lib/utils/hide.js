/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
/**
 * @param {?} obj
 * @return {?}
 */
function isBlank(obj) {
    return obj === undefined || obj === null;
}
var HideDirective = /** @class */ (function () {
    function HideDirective(_elementRef, renderer) {
        this._elementRef = _elementRef;
        this.renderer = renderer;
        this._prevCondition = false;
    }
    Object.defineProperty(HideDirective.prototype, "hide", {
        set: /**
         * @param {?} newCondition
         * @return {?}
         */
        function (newCondition) {
            this.initDisplayStyle();
            if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
                this._prevCondition = true;
                this.renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
            }
            else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
                this._prevCondition = false;
                this.renderer.setStyle(this._elementRef.nativeElement, 'display', this._displayStyle);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HideDirective.prototype.initDisplayStyle = /**
     * @return {?}
     */
    function () {
        if (this._displayStyle === undefined) {
            /** @type {?} */
            var displayStyle = this._elementRef.nativeElement.style.display;
            if (displayStyle !== 'none') {
                this._displayStyle = displayStyle;
            }
        }
    };
    HideDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[hide]'
                },] },
    ];
    /** @nocollapse */
    HideDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    HideDirective.propDecorators = {
        hide: [{ type: Input }]
    };
    return HideDirective;
}());
export { HideDirective };
if (false) {
    /** @type {?} */
    HideDirective.prototype._prevCondition;
    /** @type {?} */
    HideDirective.prototype._displayStyle;
    /** @type {?} */
    HideDirective.prototype._elementRef;
    /** @type {?} */
    HideDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvaGlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFdkIsaUJBQWlCLEdBQVE7SUFDdkIsTUFBTSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztDQUMxQzs7SUFVQyx1QkFBb0IsV0FBdUIsRUFBVSxRQUFtQjtRQUFwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7OEJBSC9DLEtBQUs7S0FJN0I7SUFFRCxzQkFDSSwrQkFBSTs7Ozs7UUFEUixVQUNTLFlBQXFCO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRXhCLEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzNFO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN2RjtTQUNGOzs7T0FBQTs7OztJQUVPLHdDQUFnQjs7OztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7O1lBQ3JDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDbEUsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO2FBQ25DO1NBQ0Y7OztnQkE5QkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO2lCQUNuQjs7OztnQkFYQyxVQUFVO2dCQUVWLFNBQVM7Ozt1QkFrQlIsS0FBSzs7d0JBdEJSOztTQWNhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmZ1bmN0aW9uIGlzQmxhbmsob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hpZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBIaWRlRGlyZWN0aXZlIHtcblxuICBwcml2YXRlIF9wcmV2Q29uZGl0aW9uID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc3BsYXlTdHlsZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGhpZGUobmV3Q29uZGl0aW9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5pbml0RGlzcGxheVN0eWxlKCk7XG5cbiAgICBpZiAobmV3Q29uZGl0aW9uICYmIChpc0JsYW5rKHRoaXMuX3ByZXZDb25kaXRpb24pIHx8ICF0aGlzLl9wcmV2Q29uZGl0aW9uKSkge1xuICAgICAgdGhpcy5fcHJldkNvbmRpdGlvbiA9IHRydWU7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH0gZWxzZSBpZiAoIW5ld0NvbmRpdGlvbiAmJiAoaXNCbGFuayh0aGlzLl9wcmV2Q29uZGl0aW9uKSB8fCB0aGlzLl9wcmV2Q29uZGl0aW9uKSkge1xuICAgICAgdGhpcy5fcHJldkNvbmRpdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgdGhpcy5fZGlzcGxheVN0eWxlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXREaXNwbGF5U3R5bGUoKSB7XG4gICAgaWYgKHRoaXMuX2Rpc3BsYXlTdHlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBkaXNwbGF5U3R5bGUgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICAgIGlmIChkaXNwbGF5U3R5bGUgIT09ICdub25lJykge1xuICAgICAgICB0aGlzLl9kaXNwbGF5U3R5bGUgPSBkaXNwbGF5U3R5bGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=