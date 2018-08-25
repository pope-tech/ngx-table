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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9kcmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUlBLE1BQU0sZUFBZSxLQUFpQixFQUFFLEVBQTJEO1FBQTFELGNBQVUsRUFBRSxVQUFNOztJQUV6RCxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztJQUMzQixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztJQUMzQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7O0lBQ2YsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDOztJQUNmLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFFbEIsMEJBQTBCLEdBQWU7O1FBQ3ZDLElBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztRQUN6QixJQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2QsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDYixLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXhCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN4Qjs7Ozs7SUFFRCx3QkFBd0IsR0FBZTtRQUNyQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRWQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEQsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNQLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QjtLQUNGO0lBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7Q0FDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBNb3ZlSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlciwgZHk6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBVcEhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBtb3ZlZDogYm9vbGVhbikgPT4gdm9pZDtcblxuLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYWcoZXZlbnQ6IE1vdXNlRXZlbnQsIHttb3ZlOiBtb3ZlLCB1cDogdXB9OiB7IG1vdmU6IE1vdmVIYW5kbGVyLCB1cD86IFVwSGFuZGxlciB9KSB7XG5cbiAgY29uc3Qgc3RhcnRYID0gZXZlbnQucGFnZVg7XG4gIGNvbnN0IHN0YXJ0WSA9IGV2ZW50LnBhZ2VZO1xuICBsZXQgeCA9IHN0YXJ0WDtcbiAgbGV0IHkgPSBzdGFydFk7XG4gIGxldCBtb3ZlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZHggPSBldnQucGFnZVggLSB4O1xuICAgIGNvbnN0IGR5ID0gZXZ0LnBhZ2VZIC0geTtcbiAgICB4ID0gZXZ0LnBhZ2VYO1xuICAgIHkgPSBldnQucGFnZVk7XG4gICAgaWYgKGR4IHx8IGR5KSB7XG4gICAgICBtb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbW92ZShldnQsIGR4LCBkeSwgeCwgeSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyB0byBhdm9pZCB0ZXh0IHNlbGVjdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgeCA9IGV2dC5wYWdlWDtcbiAgICB5ID0gZXZ0LnBhZ2VZO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGlmICh1cCkge1xuICAgICAgdXAoZXZlbnQsIHgsIHksIG1vdmVkKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcbn1cbiJdfQ==