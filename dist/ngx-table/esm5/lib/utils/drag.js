/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @typedef {?} */
var MoveHandler;
export { MoveHandler };
/** @typedef {?} */
var UpHandler;
export { UpHandler };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZHJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSxNQUFNLGVBQWUsS0FBaUIsRUFBRSxFQUEyRDtRQUExRCxjQUFVLEVBQUUsVUFBTTs7SUFFekQsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7SUFDM0IsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7SUFDM0IsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDOztJQUNmLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQzs7SUFDZixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7Ozs7O0lBRWxCLDBCQUEwQixHQUFlOztRQUN2QyxJQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7UUFDekIsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2IsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDeEI7Ozs7O0lBRUQsd0JBQXdCLEdBQWU7UUFDckMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUVkLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXhELEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDUCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEI7S0FDRjtJQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0NBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgTW92ZUhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgVXBIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgbW92ZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG5cbi8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lKi9cbmV4cG9ydCBmdW5jdGlvbiBkcmFnKGV2ZW50OiBNb3VzZUV2ZW50LCB7bW92ZTogbW92ZSwgdXA6IHVwfTogeyBtb3ZlOiBNb3ZlSGFuZGxlciwgdXA/OiBVcEhhbmRsZXIgfSkge1xuXG4gIGNvbnN0IHN0YXJ0WCA9IGV2ZW50LnBhZ2VYO1xuICBjb25zdCBzdGFydFkgPSBldmVudC5wYWdlWTtcbiAgbGV0IHggPSBzdGFydFg7XG4gIGxldCB5ID0gc3RhcnRZO1xuICBsZXQgbW92ZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2dDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IGR4ID0gZXZ0LnBhZ2VYIC0geDtcbiAgICBjb25zdCBkeSA9IGV2dC5wYWdlWSAtIHk7XG4gICAgeCA9IGV2dC5wYWdlWDtcbiAgICB5ID0gZXZ0LnBhZ2VZO1xuICAgIGlmIChkeCB8fCBkeSkge1xuICAgICAgbW92ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG1vdmUoZXZ0LCBkeCwgZHksIHgsIHkpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gdG8gYXZvaWQgdGV4dCBzZWxlY3Rpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKGV2dDogTW91c2VFdmVudCkge1xuICAgIHggPSBldnQucGFnZVg7XG4gICAgeSA9IGV2dC5wYWdlWTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG5cbiAgICBpZiAodXApIHtcbiAgICAgIHVwKGV2ZW50LCB4LCB5LCBtb3ZlZCk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG59XG4iXX0=