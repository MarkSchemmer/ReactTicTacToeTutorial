export const gameOptions = { TIE : 1 }

export const X = 'X', O = 'O';



export function calculateWinner(_squares) {
  let squares = _squares.reduce((acc, cur) => acc.concat(cur), [])
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    if(squares.every(item => item !== null ))
      return gameOptions.TIE

    return null 
  }