

function isValidSudoku(board) {
    let row = 0, column = 0;

    // console.log(board[0][1])  //3
    while (row < 9 ) {
        let box = new Set();
        let val = board[row][column];
        if(val != '.'){
            let cont = 0;

            for(let column = 0; column < 9; column++){

                let _box = board[3*Math.floor(row/3)+Math.floor(column/3)][3*(row%3)+(column%3)];
                if(board[row][column] == val) cont++;
                if(board[column][row] == val) cont++;
                if (_box != '.') {
                    if (box.has(_box)) return false;
                    box.add(_box);
                } 
            }
            if( cont > 2) return false;
        }

        row++;

        cont = 0;
    }

    return true;
}



const board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))