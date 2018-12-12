import React from 'react'
import './PastMoves.css'


class PastMoves extends React.Component {
    constructor(props){
        super(props)
        this.state = { }
    }

    render() {
        const { history } = this.props
        const pastMoves = () => {
            return (
                <ul>
                    {/* {history[history.length-1].squares.} */}
                </ul>
            )
        }
        return (
         <React.Fragment>
                    { 
                        history[history.length-1].squares.length>0 ?  
                            <div className="past-moves"></div> : null
                    }
         </React.Fragment>
        )
    }
}


export default PastMoves