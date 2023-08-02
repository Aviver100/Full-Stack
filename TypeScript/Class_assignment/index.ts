class Board {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width ?? 1;
        this.height = height ?? 1;
    }
    PrintBoard() {
        console.log(`Width: ${NewBoard.width} \nHeight: ${NewBoard.height}`);
    }
}

class Rook {
    location1: number;
    location2: number;
    board: Board;
    static NewLocation: number;
    constructor(board: Board, location1: number, location2: number) {
        this.board = board;
        this.location1 = location1 ?? 2;
        this.location2 = location2 ?? 2;
    }

    getLocation() {
        console.log(`Point 1: ${NewLocation.location1} \nPoint 2: ${NewLocation.location2}`);
    }

    // CheckLocation() {
    //     if (this.location1 > this.board.width || this.location2 > this.board.height)
    //         console.log(`The move is illegal`);
    // }

    goRight(right: number) {
        if(this.location1 < this.board.width){
            let NewMove = this.location1 += right;
            console.log(NewMove);
            this.getLocation();
        }
        else{
            console.log(`The move is illegal`);
        }
        
    }
}


let NewBoard = new Board(10, 10);
NewBoard.PrintBoard();



let NewLocation = new Rook(NewBoard, 1 , 1);

// NewLocation.CheckLocation();
NewLocation.goRight(3);