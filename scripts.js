class GameBoard {
  constructor(knight) {
    this.gameBoard = this.generateGameBoard()
    this.knight = knight
  }
  generateGameBoard(x = 0, arr = []) {
    if (x >= 9) {
      return arr
    } else {
      for (let i = 0; i <= 8; i++) {
        arr.push([x, i])
        console.log(arr)
      }
      return this.generateGameBoard(++x, arr)
    }
  }
}

const test = new GameBoard()
