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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZHJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsTUFBTSxVQUFVLElBQUksQ0FBQyxLQUFpQixFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUF3Qzs7VUFFM0YsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLOztVQUNwQixNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUs7O1FBQ3RCLENBQUMsR0FBRyxNQUFNOztRQUNWLENBQUMsR0FBRyxNQUFNOztRQUNWLEtBQUssR0FBRyxLQUFLOzs7OztJQUVqQixTQUFTLGdCQUFnQixDQUFDLEdBQWU7O2NBQ2pDLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7O2NBQ2xCLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDeEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNaLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsMEJBQTBCO0lBQ3BELENBQUM7Ozs7O0lBRUQsU0FBUyxjQUFjLENBQUMsR0FBZTtRQUNyQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRWQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEQsSUFBSSxFQUFFLEVBQUU7WUFDTixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDdkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIE1vdmVIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50LCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIFVwSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG1vdmVkOiBib29sZWFuKSA9PiB2b2lkO1xuXG4vKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSovXG5leHBvcnQgZnVuY3Rpb24gZHJhZyhldmVudDogTW91c2VFdmVudCwge21vdmU6IG1vdmUsIHVwOiB1cH06IHsgbW92ZTogTW92ZUhhbmRsZXIsIHVwPzogVXBIYW5kbGVyIH0pIHtcblxuICBjb25zdCBzdGFydFggPSBldmVudC5wYWdlWDtcbiAgY29uc3Qgc3RhcnRZID0gZXZlbnQucGFnZVk7XG4gIGxldCB4ID0gc3RhcnRYO1xuICBsZXQgeSA9IHN0YXJ0WTtcbiAgbGV0IG1vdmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBkeCA9IGV2dC5wYWdlWCAtIHg7XG4gICAgY29uc3QgZHkgPSBldnQucGFnZVkgLSB5O1xuICAgIHggPSBldnQucGFnZVg7XG4gICAgeSA9IGV2dC5wYWdlWTtcbiAgICBpZiAoZHggfHwgZHkpIHtcbiAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBtb3ZlKGV2dCwgZHgsIGR5LCB4LCB5KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHRvIGF2b2lkIHRleHQgc2VsZWN0aW9uXG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB4ID0gZXZ0LnBhZ2VYO1xuICAgIHkgPSBldnQucGFnZVk7XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuXG4gICAgaWYgKHVwKSB7XG4gICAgICB1cChldmVudCwgeCwgeSwgbW92ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xufVxuIl19