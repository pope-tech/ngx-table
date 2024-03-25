import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HideDirective {
    private _elementRef;
    private renderer;
    private _prevCondition;
    private _displayStyle;
    constructor(_elementRef: ElementRef, renderer: Renderer2);
    set hide(newCondition: boolean);
    private initDisplayStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<HideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HideDirective, "[hide]", never, { "hide": "hide"; }, {}, never, never, false, never>;
}
//# sourceMappingURL=hide.d.ts.map