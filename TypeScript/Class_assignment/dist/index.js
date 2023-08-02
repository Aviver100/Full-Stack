"use strict";
class Board {
    constructor(width, height) {
        this.width = width !== null && width !== void 0 ? width : 1;
        this.height = height !== null && height !== void 0 ? height : 1;
    }
    PrintBoard() {
        console.log(`Width: ${NewBoard.width} \nHeight: ${NewBoard.height}`);
    }
}
class Rook {
    constructor(board, location1, location2) {
        this.board = board;
        this.location1 = location1 !== null && location1 !== void 0 ? location1 : 2;
        this.location2 = location2 !== null && location2 !== void 0 ? location2 : 2;
    }
    getLocation() {
        console.log(`Point 1: ${NewLocation.location1} \nPoint 2: ${NewLocation.location2}`);
    }
    // CheckLocation() {
    //     if (this.location1 > this.board.width || this.location2 > this.board.height)
    //         console.log(`The move is illegal`);
    // }
    goRight(right) {
        if (this.location1 < this.board.width) {
            let NewMove = this.location1 += right;
            console.log(NewMove);
            this.getLocation();
        }
        else {
            console.log(`The move is illegal`);
        }
    }
}
let NewBoard = new Board(10, 10);
NewBoard.PrintBoard();
let NewLocation = new Rook(NewBoard, 1, 1);
// NewLocation.CheckLocation();
NewLocation.goRight(3);
