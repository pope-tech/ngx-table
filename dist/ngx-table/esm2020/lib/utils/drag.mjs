/*tslint:disable-next-line*/
export function drag(event, { move: move, up: up }) {
    const startX = event.pageX;
    const startY = event.pageY;
    let x = startX;
    let y = startY;
    let moved = false;
    function mouseMoveHandler(evt) {
        const dx = evt.pageX - x;
        const dy = evt.pageY - y;
        x = evt.pageX;
        y = evt.pageY;
        if (dx || dy) {
            moved = true;
        }
        move(evt, dx, dy, x, y);
        event.preventDefault(); // to avoid text selection
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10YWJsZS9zcmMvbGliL3V0aWxzL2RyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsNEJBQTRCO0FBQzVCLE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBaUIsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBd0M7SUFFakcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMzQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzNCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNmLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNmLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztJQUVsQixTQUFTLGdCQUFnQixDQUFDLEdBQWU7UUFDdkMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNaLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsMEJBQTBCO0lBQ3BELENBQUM7SUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFlO1FBQ3JDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2QsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFZCxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4RCxJQUFJLEVBQUUsRUFBRTtZQUNOLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN2RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgTW92ZUhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgVXBIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgbW92ZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG5cbi8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lKi9cbmV4cG9ydCBmdW5jdGlvbiBkcmFnKGV2ZW50OiBNb3VzZUV2ZW50LCB7bW92ZTogbW92ZSwgdXA6IHVwfTogeyBtb3ZlOiBNb3ZlSGFuZGxlciwgdXA/OiBVcEhhbmRsZXIgfSkge1xuXG4gIGNvbnN0IHN0YXJ0WCA9IGV2ZW50LnBhZ2VYO1xuICBjb25zdCBzdGFydFkgPSBldmVudC5wYWdlWTtcbiAgbGV0IHggPSBzdGFydFg7XG4gIGxldCB5ID0gc3RhcnRZO1xuICBsZXQgbW92ZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2dDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IGR4ID0gZXZ0LnBhZ2VYIC0geDtcbiAgICBjb25zdCBkeSA9IGV2dC5wYWdlWSAtIHk7XG4gICAgeCA9IGV2dC5wYWdlWDtcbiAgICB5ID0gZXZ0LnBhZ2VZO1xuICAgIGlmIChkeCB8fCBkeSkge1xuICAgICAgbW92ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG1vdmUoZXZ0LCBkeCwgZHksIHgsIHkpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gdG8gYXZvaWQgdGV4dCBzZWxlY3Rpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKGV2dDogTW91c2VFdmVudCkge1xuICAgIHggPSBldnQucGFnZVg7XG4gICAgeSA9IGV2dC5wYWdlWTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG5cbiAgICBpZiAodXApIHtcbiAgICAgIHVwKGV2ZW50LCB4LCB5LCBtb3ZlZCk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG59XG4iXX0=