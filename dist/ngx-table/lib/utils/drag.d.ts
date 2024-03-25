export type MoveHandler = (event: MouseEvent, dx: number, dy: number, x: number, y: number) => void;
export type UpHandler = (event: MouseEvent, x: number, y: number, moved: boolean) => void;
export declare function drag(event: MouseEvent, { move: move, up: up }: {
    move: MoveHandler;
    up?: UpHandler;
}): void;
//# sourceMappingURL=drag.d.ts.map