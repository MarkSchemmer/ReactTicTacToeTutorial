import React from 'react'
import Square from '../Square/Square'

import * as _ from '../Helpers/calculateWinner'


const Board = (props) => {

    /*
    //JSON.parse(JSON.stringify(this.state.squares))
     is an alternative to cloning the array of objects...
    */


   const { squares, click, xIsNext, winningSquares } = props

       const boardStyles = {
           width:'400px',
           height:'600px',
           margin:'auto'
       }
       let something = _.calculateWinner(squares)
       console.log(something)
       console.log( typeof something)
       let status, winner 

       if(typeof something === "object" && something !== null){
            winner = something.winner
            console.log(something.coordinates)
            winningSquares(something.coordinates)
            
       } else {
           winner = something
       }

       if(winner === _.X){
         status = <h3>Player X wins</h3>
       } else if (winner === _.O){
         status = <h3>Player O wins</h3> 
       } else if(winner === _.gameOptions.TIE) {
           status = <h3>Tie Game!</h3>
       } else {
           status = <h3>Next Player: <strong> { xIsNext ? 'X' : 'O' } </strong></h3>
       }

        return (
          <React.Fragment>

          <div style={boardStyles} id="board">
                    { status }
                {
                    squares.map((level,x) => {
                       return  level.map( (subLevel, y) => {
                            return <Square 
                                key={x+y} 
                                click={click} 
                                squareNumber={[x,y]} 
                                isWinningSquare={subLevel.isWinningSquare}
                                value={subLevel.val} />

                       })
                    })
                }
          </div>
          </React.Fragment>
        )
    }

export default Board