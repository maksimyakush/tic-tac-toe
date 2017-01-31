class TicTacToe {
    constructor() {
        this.fields = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];
    }

    getCurrentPlayerSymbol() {
        let counterX = 0;
        let counterO = 0;
        for (let i = 0; i < this.fields.length; i++) {
            for (let j = 0; j < this.fields.length; j++){
                if (this.fields[i][j] == "x") {
                    counterX++;
                }
                if (this.fields[i][j] == "o") {
                    counterO++;
                }
            }
        }
        if (counterX + counterO == 0 || counterX == counterO) {
            return "x";
        } else {
            return "o";
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.fields[rowIndex][columnIndex] != null) {
            return;
        }
        return this.fields[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        if (this.fields[0][0] == this.fields[0][1] && this.fields[0][1] == this.fields[0][2]) {
            return this.fields[0][0];
        } else if (this.fields[1][0] == this.fields[1][1] && this.fields[1][1] == this.fields[1][2]) {
            return this.fields[1][0];
        } else if (this.fields[2][0] == this.fields[2][1] && this.fields[2][1] == this.fields[2][2]) {
            return this.fields[2][0];
        } else if (this.fields[0][0] == this.fields[1][0] && this.fields[1][0] == this.fields[2][0]) {
            return this.fields[0][0];
        } else if (this.fields[0][1] == this.fields[1][1] && this.fields[1][1] == this.fields[2][1]) {
            return this.fields[0][1];
        } else if (this.fields[0][2] == this.fields[1][2] && this.fields[1][2] == this.fields[2][2]) {
            return this.fields[0][2];
        } else if (this.fields[0][0] == this.fields[1][1] && this.fields[1][1] == this.fields[2][2]) {
            return this.fields[0][0];
        } else if (this.fields[0][2] == this.fields[1][1] && this.fields[1][1] == this.fields[2][0]) {
            return this.fields[0][2];
        } else {
            return null;
        }
    }

    noMoreTurns() {
        let counter = 0;
        for(let i = 0; i < this.fields.length; i++){
            for(let j = 0; j < this.fields.length; j++){
                if(this.fields[i][j] == null) {
                    counter++;
                }
            }
        }
        return counter == 0;
    }

    isDraw() {
        if (!this.noMoreTurns() || this.getWinner()) {
            return false;
        } else {
            return true;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.fields[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
