import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
function isBlank(obj) {
    return obj === undefined || obj === null;
}
let HideDirective = class HideDirective {
    constructor(_elementRef, renderer) {
        this._elementRef = _elementRef;
        this.renderer = renderer;
        this._prevCondition = false;
    }
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
    initDisplayStyle() {
        if (this._displayStyle === undefined) {
            const displayStyle = this._elementRef.nativeElement.style.display;
            if (displayStyle !== 'none') {
                this._displayStyle = displayStyle;
            }
        }
    }
};
HideDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { HideDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvaGlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixTQUFTLE9BQU8sQ0FBQyxHQUFRO0lBQ3ZCLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0FBQzNDLENBQUM7QUFLRCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBS3hCLFlBQW9CLFdBQXVCLEVBQVUsUUFBbUI7UUFBcEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSGhFLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBSS9CLENBQUM7SUFHRCxJQUFJLElBQUksQ0FBQyxZQUFxQjtRQUM1QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNFO2FBQU0sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ2pGLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdkY7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDcEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNsRSxJQUFJLFlBQVksS0FBSyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUF4QmtDLFVBQVU7WUFBb0IsU0FBUzs7QUFJeEU7SUFEQyxLQUFLLEVBQUU7Ozt5Q0FXUDtBQW5CVSxhQUFhO0lBSHpCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO0tBQ25CLENBQUM7cUNBTWlDLFVBQVUsRUFBb0IsU0FBUztHQUw3RCxhQUFhLENBNkJ6QjtTQTdCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiBpc0JsYW5rKG9iajogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGw7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1toaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSGlkZURpcmVjdGl2ZSB7XG5cbiAgcHJpdmF0ZSBfcHJldkNvbmRpdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNwbGF5U3R5bGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlKG5ld0NvbmRpdGlvbjogYm9vbGVhbikge1xuICAgIHRoaXMuaW5pdERpc3BsYXlTdHlsZSgpO1xuXG4gICAgaWYgKG5ld0NvbmRpdGlvbiAmJiAoaXNCbGFuayh0aGlzLl9wcmV2Q29uZGl0aW9uKSB8fCAhdGhpcy5fcHJldkNvbmRpdGlvbikpIHtcbiAgICAgIHRoaXMuX3ByZXZDb25kaXRpb24gPSB0cnVlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9IGVsc2UgaWYgKCFuZXdDb25kaXRpb24gJiYgKGlzQmxhbmsodGhpcy5fcHJldkNvbmRpdGlvbikgfHwgdGhpcy5fcHJldkNvbmRpdGlvbikpIHtcbiAgICAgIHRoaXMuX3ByZXZDb25kaXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2Rpc3BsYXlTdHlsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGlzcGxheVN0eWxlKCkge1xuICAgIGlmICh0aGlzLl9kaXNwbGF5U3R5bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGlzcGxheVN0eWxlID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgICBpZiAoZGlzcGxheVN0eWxlICE9PSAnbm9uZScpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheVN0eWxlID0gZGlzcGxheVN0eWxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19