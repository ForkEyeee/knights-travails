class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class GameBoard {
  constructor(knight) {
    this.gameBoard = this.generateGameBoard()
    this.tree = this.buildTree(this.gameBoard)
    this.knight = knight
  }

  generateGameBoard(j = 0, arr = [[], [], [], [], [], [], [], [], []]) {
    if (j >= 9) {
      return arr
    } else {
      for (let i = 0; i <= 8; i++) {
        arr[j].push([j, i])
      }
      return this.generateGameBoard(++j, arr)
    }
  }

  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) {
      return null
    }
    let mid = Math.floor((start + end) / 2)
    const node = new Node(arr[mid])
    node.left = this.buildTree(arr, start, mid - 1)
    node.right = this.buildTree(arr, mid + 1, end)
    return node
  }
  knightMoves(x, y) {}
}

const test = new GameBoard([3,4])
