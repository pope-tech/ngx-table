/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
/**
 * @param {?} obj
 * @return {?}
 */
function isBlank(obj) {
    return obj === undefined || obj === null;
}
export class HideDirective {
    /**
     * @param {?} _elementRef
     * @param {?} renderer
     */
    constructor(_elementRef, renderer) {
        this._elementRef = _elementRef;
        this.renderer = renderer;
        this._prevCondition = false;
    }
    /**
     * @param {?} newCondition
     * @return {?}
     */
    set hide(newCondition) {
        this.initDisplayStyle();
        if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
            this._prevCondition = true;
            this.renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
            this._prevCondition = false;
            this.renderer.setStyle(this._elementRef.nativeElement, 'display', this._displayStyle);
        }
    }
    /**
     * @private
     * @return {?}
     */
    initDisplayStyle() {
        if (this._displayStyle === undefined) {
            /** @type {?} */
            const displayStyle = this._elementRef.nativeElement.style.display;
            if (displayStyle !== 'none') {
                this._displayStyle = displayStyle;
            }
        }
    }
}
HideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hide]'
            },] }
];
/** @nocollapse */
HideDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
HideDirective.propDecorators = {
    hide: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    HideDirective.prototype._prevCondition;
    /**
     * @type {?}
     * @private
     */
    HideDirective.prototype._displayStyle;
    /**
     * @type {?}
     * @private
     */
    HideDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    HideDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvaGlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFdkIsU0FBUyxPQUFPLENBQUMsR0FBUTtJQUN2QixPQUFPLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztBQUMzQyxDQUFDO0FBS0QsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBS3hCLFlBQW9CLFdBQXVCLEVBQVUsUUFBbUI7UUFBcEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSGhFLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBSS9CLENBQUM7Ozs7O0lBRUQsSUFDSSxJQUFJLENBQUMsWUFBcUI7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsSUFBSSxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzRTthQUFNLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNqRixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3ZGO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTs7a0JBQzlCLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTztZQUNqRSxJQUFJLFlBQVksS0FBSyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2FBQ25COzs7O1lBWEMsVUFBVTtZQUVWLFNBQVM7OzttQkFrQlIsS0FBSzs7Ozs7OztJQU5OLHVDQUErQjs7Ozs7SUFDL0Isc0NBQThCOzs7OztJQUVsQixvQ0FBK0I7Ozs7O0lBQUUsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiBpc0JsYW5rKG9iajogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGw7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1toaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSGlkZURpcmVjdGl2ZSB7XG5cbiAgcHJpdmF0ZSBfcHJldkNvbmRpdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNwbGF5U3R5bGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlKG5ld0NvbmRpdGlvbjogYm9vbGVhbikge1xuICAgIHRoaXMuaW5pdERpc3BsYXlTdHlsZSgpO1xuXG4gICAgaWYgKG5ld0NvbmRpdGlvbiAmJiAoaXNCbGFuayh0aGlzLl9wcmV2Q29uZGl0aW9uKSB8fCAhdGhpcy5fcHJldkNvbmRpdGlvbikpIHtcbiAgICAgIHRoaXMuX3ByZXZDb25kaXRpb24gPSB0cnVlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9IGVsc2UgaWYgKCFuZXdDb25kaXRpb24gJiYgKGlzQmxhbmsodGhpcy5fcHJldkNvbmRpdGlvbikgfHwgdGhpcy5fcHJldkNvbmRpdGlvbikpIHtcbiAgICAgIHRoaXMuX3ByZXZDb25kaXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2Rpc3BsYXlTdHlsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGlzcGxheVN0eWxlKCkge1xuICAgIGlmICh0aGlzLl9kaXNwbGF5U3R5bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGlzcGxheVN0eWxlID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgICBpZiAoZGlzcGxheVN0eWxlICE9PSAnbm9uZScpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheVN0eWxlID0gZGlzcGxheVN0eWxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19