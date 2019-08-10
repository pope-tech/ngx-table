/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable-next-line*/
/**
 * @param {?} event
 * @param {?} __1
 * @return {?}
 */
export function drag(event, _a) {
    var move = _a.move, up = _a.up;
    /** @type {?} */
    var startX = event.pageX;
    /** @type {?} */
    var startY = event.pageY;
    /** @type {?} */
    var x = startX;
    /** @type {?} */
    var y = startY;
    /** @type {?} */
    var moved = false;
    /**
     * @param {?} evt
     * @return {?}
     */
    function mouseMoveHandler(evt) {
        /** @type {?} */
        var dx = evt.pageX - x;
        /** @type {?} */
        var dy = evt.pageY - y;
        x = evt.pageX;
        y = evt.pageY;
        if (dx || dy) {
            moved = true;
        }
        move(evt, dx, dy, x, y);
        event.preventDefault(); // to avoid text selection
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    function mouseUpHandler(evt) {
        x = evt.pageX;
        y = evt.pageY;
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        if (up) {
            up(event, x, y, moved);
        }
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZHJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsTUFBTSxVQUFVLElBQUksQ0FBQyxLQUFpQixFQUFFLEVBQTJEO1FBQTFELGNBQVUsRUFBRSxVQUFNOztRQUVuRCxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUs7O1FBQ3BCLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSzs7UUFDdEIsQ0FBQyxHQUFHLE1BQU07O1FBQ1YsQ0FBQyxHQUFHLE1BQU07O1FBQ1YsS0FBSyxHQUFHLEtBQUs7Ozs7O0lBRWpCLFNBQVMsZ0JBQWdCLENBQUMsR0FBZTs7WUFDakMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQzs7WUFDbEIsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUN4QixDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2QsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1osS0FBSyxHQUFHLElBQUksQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQywwQkFBMEI7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFlO1FBQ3JDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2QsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFZCxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4RCxJQUFJLEVBQUUsRUFBRTtZQUNOLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN2RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgTW92ZUhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgVXBIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgbW92ZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG5cbi8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lKi9cbmV4cG9ydCBmdW5jdGlvbiBkcmFnKGV2ZW50OiBNb3VzZUV2ZW50LCB7bW92ZTogbW92ZSwgdXA6IHVwfTogeyBtb3ZlOiBNb3ZlSGFuZGxlciwgdXA/OiBVcEhhbmRsZXIgfSkge1xuXG4gIGNvbnN0IHN0YXJ0WCA9IGV2ZW50LnBhZ2VYO1xuICBjb25zdCBzdGFydFkgPSBldmVudC5wYWdlWTtcbiAgbGV0IHggPSBzdGFydFg7XG4gIGxldCB5ID0gc3RhcnRZO1xuICBsZXQgbW92ZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2dDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IGR4ID0gZXZ0LnBhZ2VYIC0geDtcbiAgICBjb25zdCBkeSA9IGV2dC5wYWdlWSAtIHk7XG4gICAgeCA9IGV2dC5wYWdlWDtcbiAgICB5ID0gZXZ0LnBhZ2VZO1xuICAgIGlmIChkeCB8fCBkeSkge1xuICAgICAgbW92ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG1vdmUoZXZ0LCBkeCwgZHksIHgsIHkpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gdG8gYXZvaWQgdGV4dCBzZWxlY3Rpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKGV2dDogTW91c2VFdmVudCkge1xuICAgIHggPSBldnQucGFnZVg7XG4gICAgeSA9IGV2dC5wYWdlWTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG5cbiAgICBpZiAodXApIHtcbiAgICAgIHVwKGV2ZW50LCB4LCB5LCBtb3ZlZCk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG59XG4iXX0=