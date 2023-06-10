function isValidMove(x, y) {
  return x >= 0 && y >= 0 && x < 8 && y < 8
}

const moves = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
]

function knightMoves(start, end) {
  const queue = [{ pos: start, parent: null }]
  const visited = new Set()

  while (queue.length > 0) {
    const node = queue.shift()
    const [x, y] = node.pos
    const key = `${x},${y}`

    if (!visited.has(key)) {
      visited.add(key)

      if (x === end[0] && y === end[1]) {
        let parentNode = node
        const path = []
        while (parentNode) {
          path.unshift(parentNode.pos)
          parentNode = parentNode.parent
        }
        return { path: path, steps: path.length - 1 }
      }

      for (const [dx, dy] of moves) {
        const newX = x + dx
        const newY = y + dy

        if (isValidMove(newX, newY)) {
          queue.push({ pos: [newX, newY], parent: node })
        }
      }
    }
  }

  return null
}
