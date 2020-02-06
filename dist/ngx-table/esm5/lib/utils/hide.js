import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
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
        set: function (newCondition) {
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
    HideDirective.prototype.initDisplayStyle = function () {
        if (this._displayStyle === undefined) {
            var displayStyle = this._elementRef.nativeElement.style.display;
            if (displayStyle !== 'none') {
                this._displayStyle = displayStyle;
            }
        }
    };
    HideDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], HideDirective.prototype, "hide", null);
    HideDirective = __decorate([
        Directive({
            selector: '[hide]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], HideDirective);
    return HideDirective;
}());
export { HideDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvaGlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixTQUFTLE9BQU8sQ0FBQyxHQUFRO0lBQ3ZCLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0FBQzNDLENBQUM7QUFLRDtJQUtFLHVCQUFvQixXQUF1QixFQUFVLFFBQW1CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUhoRSxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUkvQixDQUFDO0lBR0Qsc0JBQUksK0JBQUk7YUFBUixVQUFTLFlBQXFCO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRXhCLElBQUksWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDMUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMzRTtpQkFBTSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ2pGLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3ZGO1FBQ0gsQ0FBQzs7O09BQUE7SUFFTyx3Q0FBZ0IsR0FBeEI7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQ3BDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDbEUsSUFBSSxZQUFZLEtBQUssTUFBTSxFQUFFO2dCQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQzthQUNuQztTQUNGO0lBQ0gsQ0FBQzs7Z0JBdkJnQyxVQUFVO2dCQUFvQixTQUFTOztJQUl4RTtRQURDLEtBQUssRUFBRTs7OzZDQVdQO0lBbkJVLGFBQWE7UUFIekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQzt5Q0FNaUMsVUFBVSxFQUFvQixTQUFTO09BTDdELGFBQWEsQ0E2QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTdCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiBpc0JsYW5rKG9iajogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGw7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1toaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSGlkZURpcmVjdGl2ZSB7XG5cbiAgcHJpdmF0ZSBfcHJldkNvbmRpdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNwbGF5U3R5bGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlKG5ld0NvbmRpdGlvbjogYm9vbGVhbikge1xuICAgIHRoaXMuaW5pdERpc3BsYXlTdHlsZSgpO1xuXG4gICAgaWYgKG5ld0NvbmRpdGlvbiAmJiAoaXNCbGFuayh0aGlzLl9wcmV2Q29uZGl0aW9uKSB8fCAhdGhpcy5fcHJldkNvbmRpdGlvbikpIHtcbiAgICAgIHRoaXMuX3ByZXZDb25kaXRpb24gPSB0cnVlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9IGVsc2UgaWYgKCFuZXdDb25kaXRpb24gJiYgKGlzQmxhbmsodGhpcy5fcHJldkNvbmRpdGlvbikgfHwgdGhpcy5fcHJldkNvbmRpdGlvbikpIHtcbiAgICAgIHRoaXMuX3ByZXZDb25kaXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2Rpc3BsYXlTdHlsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGlzcGxheVN0eWxlKCkge1xuICAgIGlmICh0aGlzLl9kaXNwbGF5U3R5bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGlzcGxheVN0eWxlID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgICBpZiAoZGlzcGxheVN0eWxlICE9PSAnbm9uZScpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheVN0eWxlID0gZGlzcGxheVN0eWxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19