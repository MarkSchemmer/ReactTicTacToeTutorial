import React from 'react'
import './PastMoves.css'


class PastMoves extends React.Component {
    constructor(props){
        super(props)
        this.state = { }
    }

    // need to implement a jumpTo() method 
    // which will go to that certain move 


    render() {
        const { history, jumpTo } = this.props

        const buttonStyle = {
            padding:'5px'
        }

        const pastMoves = () => {

            return (
                <ul>
                   {history.map((step, move) => {
                    
                    const desc = move ? `Go to move # ${move}  x:${step.move[0]} y:${step.move[1]}` : 'Go to game start'
                    return (<li style={{ zIndex:'100'}} key={move}>
                        <button style={buttonStyle} onClick={() => jumpTo(move)}>{desc}</button>
                   </li> )}) }
                </ul>
            )
        }
        return (
         <React.Fragment>
                    { <div className="past-moves">{pastMoves()}</div>  }
         </React.Fragment>
        )
    }
}


export default PastMoves