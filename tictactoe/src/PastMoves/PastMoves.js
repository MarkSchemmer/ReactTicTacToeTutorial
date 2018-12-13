import React from 'react'
import Move from './Move/Move'
import './PastMoves.css'


class PastMoves extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
        }
    }

    // need to implement a jumpTo() method 
    // which will go to that certain move 

    render() {
        const { history, jumpTo } = this.props

       const  toggleButtonStyles = {
            padding:'5px',
            display:'block',
            position: 'relative',
            right: '55px',
            top: '29px'
        }



        // have to rewrite so only moves not go to start 
        const createDesc = (step) => {
         return  `Go to move # ${step.move}  x:${step.coordinates[0]} y:${step.coordinates[1]}` 
        }

        const pastMoves = () => {

            let findStartIndex = history.findIndex(step => step.move === 0)
            
            return (
                <ul>
                <button 
                onClick={() => this.props.toggle() }
                style={toggleButtonStyles}>Toggle Moves </button>
                <Move jumpTo={jumpTo} move={findStartIndex} coordinates={null} desc={'Go to Start'} />
                   {history.map((step, move) => {


                    return (
                                step.move !== 0 ? <li style={{ zIndex:'100'}} key={move}>
                                    <Move jumpTo={jumpTo} 
                                    move={move}
                                    coordinates={step.coordinates}
                                     desc={createDesc(step)} />
                                </li>  : null 
                   )}) }
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