import React from 'react'
import Square from '../Square/Square'

import * as _ from '../Helpers/calculateWinner'


const Board = (props) => {

    /*
    //JSON.parse(JSON.stringify(this.state.squares))
     is an alternative to cloning the array of objects...
    */


   const { squares, click, xIsNext } = props

       const boardStyles = {
           width:'400px',
           height:'600px',
           margin:'auto'
       }
       let winner = _.calculateWinner(squares)
       let status 
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
                    squares.map((obj,idx) => {
                        return <Square 
                        key={idx} 
                        click={click} 
                        squareNumber={idx} 
                        value={obj} />
                    })
                }
          </div>
          </React.Fragment>
        )
    }

export default Board