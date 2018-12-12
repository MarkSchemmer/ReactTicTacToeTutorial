import React from 'react'
import Square from '../Square/Square'

import * as _ from '../Helpers/calculateWinner'


const Board = (props) => {

    /*
    //JSON.parse(JSON.stringify(this.state.squares))
     is an alternative to cloning the array of objects...
    */


   const { history, click, xIsNext, determineTile } = props

       const boardStyles = {
           width:'400px',
           height:'600px',
           margin:'auto'
       }

       let winner = _.calculateWinner(history[history.length-1].squares)
       winner = winner ? winner.val : winner 
       let status 
       if(winner === _.X){
         status = <h3>Player X wins</h3>
       } else if (winner === _.O){
         status = <h3>Player O wins</h3> 
       } else if (winner === _.gameOptions.TIE){
           status = <h3>Tie game</h3>
       } else {
           status = <h3>Next Player: <strong> { determineTile(xIsNext) } </strong></h3>
       }

        return (
          <React.Fragment>
            { status }
          <div style={boardStyles} id="board">
                {
                    history[history.length-1].squares.map(obj => {
                        return <Square 
                        key={obj.idx} 
                        click={click} 
                        squareNumber={obj.idx} 
                        value={obj.val} />
                    })
                }
          </div>
          </React.Fragment>
        )
    }

export default Board