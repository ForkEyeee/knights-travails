class GameBoard {
  constructor(knight) {
    this.gameBoard = this.generateGameBoard()
    this.knight = knight
  }
  generateGameBoard(x = 0, arr = []) {
    if (x >= 9) {
      return
    } else {
      for (let i = 0; i <= 8; i++) {
        arr.push([x, i])
        console.log(arr)
      }
      this.generateGameBoard(++x, arr)
      return arr
    }
  }
}

const test = new GameBoard()
