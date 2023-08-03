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
        this.location1 = location1 !== null && location1 !== void 0 ? location1 : 1;
        this.location2 = location2 !== null && location2 !== void 0 ? location2 : 1;
    }
    getLocation() {
        console.log(`Rook Point 1 (width): ${this.location1} \nRook Point 2 (height): ${this.location2} `);
    }
    goRight(right) {
        if (this.location1 < this.board.width) {
            let NewMove = this.location1 += right;
            this.getLocation();
        }
        else {
            console.log(`The move is illegal`);
        }
    }
    goLeft(left) {
        if (this.location1 < this.board.width) {
            let NewMove = this.location1 -= left;
            this.getLocation();
        }
        else {
            console.log(`The move is illegal`);
        }
    }
    goUp(up) {
        if (this.location2 < this.board.height) {
            let NewMove = this.location2 += up;
            this.getLocation();
        }
        else {
            console.log(`The move is illegal`);
        }
    }
    goDown(down) {
        if (this.location2 < this.board.height) {
            let NewMove = this.location2 -= down;
            this.getLocation();
        }
        else {
            console.log(`The move is illegal`);
        }
    }
}
class Bishop {
    constructor(board, location3, location2) {
        this.board = board;
        this.location3 = location3 !== null && location3 !== void 0 ? location3 : 1;
        this.location4 = location2 !== null && location2 !== void 0 ? location2 : 1;
    }
    getLocation() {
        console.log(`Bishop Point 1 (width): ${this.location3} \nBishop Point 2 (height): ${this.location4} `);
    }
    goRight(right) {
        if (this.location3 < this.board.width) {
            let NewMove = this.location3 += right;
            this.getLocation();
        }
        else {
            console.log(`The move is illegal`);
        }
    }
    goLeft(left) {
        if (this.location3 < this.board.width) {
            let NewMove = this.location3 -= left;
            this.getLocation();
        }
        else {
            console.log(`The move is illegal`);
        }
    }
    goUp(up) {
        if (this.location4 < this.board.height) {
            let NewMove = this.location4 += up;
            this.getLocation();
        }
        else {
            console.log(`The move is illegal`);
        }
    }
    goDown(down) {
        if (this.location4 < this.board.height && this.location4 != this.) {
            let NewMove = this.location4 -= down;
            this.getLocation();
        }
        else {
            console.log(`The move is illegal`);
        }
    }
}
let NewBoard = new Board(10, 10);
NewBoard.PrintBoard();
let NewLocationRook = new Rook(NewBoard, 1, 1);
let NewLocationBishop = new Bishop(NewBoard, 2, 1);
///**********Rook**********///
NewLocationRook.goRight(0);
// NewLocationRook.goLeft(0);
// NewLocationRook.goUp(0);
NewLocationRook.goDown(4);
///**********Bishop**********///
NewLocationBishop.goRight(0);
// NewLocationBishop .goLeft(0);
// NewLocationBishop .goUp(0);
// NewLocationBishop .goDown(0);
