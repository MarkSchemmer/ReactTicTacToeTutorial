import React from 'react'
import Square from '../Square/Square'

const X = 'X', O = 'O'
const squares = () => [...Array(9).keys()].map(idx =>  { return { idx:idx+1, val:null } } )

const gameOptions = { TIE : 1 }

function calculateWinner(squares) {
    console.log(squares)
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
      if (squares[a].val && squares[a].val === squares[b].val && squares[a].val === squares[c].val) {
        return squares[a]
      }
    }

    if(squares.every(x => x.val !== null )){
        return gameOptions.TIE
    }

    return null 
  }

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            xIsNext:true,
            winner:null,
            history: [ { squares: squares() } ]
        }
        this.clickSquare = this.clickSquare.bind(this)
    }

    /*
    //JSON.parse(JSON.stringify(this.state.squares))
     is an alternative to cloning the array of objects...
    */

    clickSquare(whichSquare) {
        const { history } = this.state
        let copyOfSquares = history[history.length-1].squares.slice(), idx = whichSquare-1
        let sq = copyOfSquares[idx]

        if(calculateWinner(copyOfSquares))
            return 

        if(sq.val===null){
            sq.val = this.determineSquareTile(this.state.xIsNext)
            copyOfSquares[idx] = sq 
            this.setState((prevState) => ({
                history : [ ...prevState.history, { squares : copyOfSquares } ]
            }), () => this.togglePlayer())
        }
    }

    togglePlayer() {
       this.setState((prevState) => ({
           xIsNext:!prevState.xIsNext
       }))
    }

    determineSquareTile = (player) => player ? X : O   

    render() {

      const { history } = this.state

       const boardStyles = {
           width:'400px',
           height:'600px',
           margin:'auto'
       }

       let winner = calculateWinner(history[history.length-1].squares)
       winner = winner ? winner.val : winner 
       let status 
       if(winner === X){
         status = <h3>Player X wins</h3>
       } else if (winner === O){
         status = <h3>Player O wins</h3> 
       } else if (winner === gameOptions.TIE){
           status = <h3>Tie game</h3>
       } else {
           status = <h3>Next Player: <strong>{this.determineSquareTile(this.state.xIsNext) }</strong></h3>
       }

        return (
          <React.Fragment>
            { status }
          <div style={boardStyles} id="board">
                {
                    history[history.length-1].squares.map(obj => {
                        return <Square key={obj.idx} click={this.clickSquare} squareNumber={obj.idx} value={obj.val} />
                    })
                }
          </div>
          </React.Fragment>
        )
    }
}

export default Board