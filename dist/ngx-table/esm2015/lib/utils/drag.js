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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZHJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSw0QkFBNEI7QUFDNUIsTUFBTSxVQUFVLElBQUksQ0FBQyxLQUFpQixFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUF3QztJQUVqRyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzNCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDM0IsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ2YsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ2YsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBRWxCLFNBQVMsZ0JBQWdCLENBQUMsR0FBZTtRQUN2QyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2QsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1osS0FBSyxHQUFHLElBQUksQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQywwQkFBMEI7SUFDcEQsQ0FBQztJQUVELFNBQVMsY0FBYyxDQUFDLEdBQWU7UUFDckMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUVkLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXhELElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBNb3ZlSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlciwgZHk6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBVcEhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBtb3ZlZDogYm9vbGVhbikgPT4gdm9pZDtcblxuLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYWcoZXZlbnQ6IE1vdXNlRXZlbnQsIHttb3ZlOiBtb3ZlLCB1cDogdXB9OiB7IG1vdmU6IE1vdmVIYW5kbGVyLCB1cD86IFVwSGFuZGxlciB9KSB7XG5cbiAgY29uc3Qgc3RhcnRYID0gZXZlbnQucGFnZVg7XG4gIGNvbnN0IHN0YXJ0WSA9IGV2ZW50LnBhZ2VZO1xuICBsZXQgeCA9IHN0YXJ0WDtcbiAgbGV0IHkgPSBzdGFydFk7XG4gIGxldCBtb3ZlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZHggPSBldnQucGFnZVggLSB4O1xuICAgIGNvbnN0IGR5ID0gZXZ0LnBhZ2VZIC0geTtcbiAgICB4ID0gZXZ0LnBhZ2VYO1xuICAgIHkgPSBldnQucGFnZVk7XG4gICAgaWYgKGR4IHx8IGR5KSB7XG4gICAgICBtb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbW92ZShldnQsIGR4LCBkeSwgeCwgeSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyB0byBhdm9pZCB0ZXh0IHNlbGVjdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgeCA9IGV2dC5wYWdlWDtcbiAgICB5ID0gZXZ0LnBhZ2VZO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGlmICh1cCkge1xuICAgICAgdXAoZXZlbnQsIHgsIHksIG1vdmVkKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcbn1cbiJdfQ==