import { __decorate } from "tslib";
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
    Input()
], HideDirective.prototype, "hide", null);
HideDirective = __decorate([
    Directive({
        selector: '[hide]'
    })
], HideDirective);
export { HideDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvaGlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixTQUFTLE9BQU8sQ0FBQyxHQUFRO0lBQ3ZCLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0FBQzNDLENBQUM7QUFLRCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBS3hCLFlBQW9CLFdBQXVCLEVBQVUsUUFBbUI7UUFBcEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSGhFLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBSS9CLENBQUM7SUFHRCxJQUFJLElBQUksQ0FBQyxZQUFxQjtRQUM1QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNFO2FBQU0sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ2pGLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdkY7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDcEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNsRSxJQUFJLFlBQVksS0FBSyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUF4QmtDLFVBQVU7WUFBb0IsU0FBUzs7QUFJeEU7SUFEQyxLQUFLLEVBQUU7eUNBV1A7QUFuQlUsYUFBYTtJQUh6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtLQUNuQixDQUFDO0dBQ1csYUFBYSxDQTZCekI7U0E3QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gaXNCbGFuayhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIEhpZGVEaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX3ByZXZDb25kaXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzcGxheVN0eWxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGlkZShuZXdDb25kaXRpb246IGJvb2xlYW4pIHtcbiAgICB0aGlzLmluaXREaXNwbGF5U3R5bGUoKTtcblxuICAgIGlmIChuZXdDb25kaXRpb24gJiYgKGlzQmxhbmsodGhpcy5fcHJldkNvbmRpdGlvbikgfHwgIXRoaXMuX3ByZXZDb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9wcmV2Q29uZGl0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSBlbHNlIGlmICghbmV3Q29uZGl0aW9uICYmIChpc0JsYW5rKHRoaXMuX3ByZXZDb25kaXRpb24pIHx8IHRoaXMuX3ByZXZDb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9wcmV2Q29uZGl0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCB0aGlzLl9kaXNwbGF5U3R5bGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdERpc3BsYXlTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fZGlzcGxheVN0eWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRpc3BsYXlTdHlsZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgaWYgKGRpc3BsYXlTdHlsZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlTdHlsZSA9IGRpc3BsYXlTdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==