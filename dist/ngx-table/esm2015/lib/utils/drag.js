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
export function drag(event, { move: move, up: up }) {
    /** @type {?} */
    const startX = event.pageX;
    /** @type {?} */
    const startY = event.pageY;
    /** @type {?} */
    let x = startX;
    /** @type {?} */
    let y = startY;
    /** @type {?} */
    let moved = false;
    /**
     * @param {?} evt
     * @return {?}
     */
    function mouseMoveHandler(evt) {
        /** @type {?} */
        const dx = evt.pageX - x;
        /** @type {?} */
        const dy = evt.pageY - y;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZHJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSxNQUFNLGVBQWUsS0FBaUIsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBd0M7O0lBRWpHLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O0lBQzNCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O0lBQzNCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQzs7SUFDZixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7O0lBQ2YsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDOzs7OztJQUVsQiwwQkFBMEIsR0FBZTs7UUFDdkMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O1FBQ3pCLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2QsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZCxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNiLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3hCOzs7OztJQUVELHdCQUF3QixHQUFlO1FBQ3JDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2QsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFZCxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4RCxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1AsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztDQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIE1vdmVIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50LCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIFVwSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG1vdmVkOiBib29sZWFuKSA9PiB2b2lkO1xuXG4vKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSovXG5leHBvcnQgZnVuY3Rpb24gZHJhZyhldmVudDogTW91c2VFdmVudCwge21vdmU6IG1vdmUsIHVwOiB1cH06IHsgbW92ZTogTW92ZUhhbmRsZXIsIHVwPzogVXBIYW5kbGVyIH0pIHtcblxuICBjb25zdCBzdGFydFggPSBldmVudC5wYWdlWDtcbiAgY29uc3Qgc3RhcnRZID0gZXZlbnQucGFnZVk7XG4gIGxldCB4ID0gc3RhcnRYO1xuICBsZXQgeSA9IHN0YXJ0WTtcbiAgbGV0IG1vdmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBkeCA9IGV2dC5wYWdlWCAtIHg7XG4gICAgY29uc3QgZHkgPSBldnQucGFnZVkgLSB5O1xuICAgIHggPSBldnQucGFnZVg7XG4gICAgeSA9IGV2dC5wYWdlWTtcbiAgICBpZiAoZHggfHwgZHkpIHtcbiAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBtb3ZlKGV2dCwgZHgsIGR5LCB4LCB5KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHRvIGF2b2lkIHRleHQgc2VsZWN0aW9uXG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB4ID0gZXZ0LnBhZ2VYO1xuICAgIHkgPSBldnQucGFnZVk7XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuXG4gICAgaWYgKHVwKSB7XG4gICAgICB1cChldmVudCwgeCwgeSwgbW92ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xufVxuIl19